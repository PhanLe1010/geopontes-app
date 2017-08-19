import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Letter } from '../models/letter.model';

@Injectable()
export class LetterService{
  private letters: Letter[] = [];
  letterIsEditing = new EventEmitter<Letter>();

  constructor(private http: Http){}

  //Hookup to the get letter API
  getLetter(){
    return this.http.get('https://pontesnetwork.herokuapp.com/letter')
                    .map((response: Response) => {
                        const jsonLetters = response.json().obj;
                        let transformedLetters: Letter[] = [];
                        for(let letter of jsonLetters){
                          transformedLetters.unshift(new Letter(letter.title, letter.content, letter.signature, new Date(letter.date), null, letter._id))
                        }
                        // let n: number = transformedLetters.length;
                        // for (let i: number = 0; i <= Math.floor(n/2)-1; i++) {
                        //     let t:Letter = transformedLetters[i];
                        //      transformedLetters[i]=transformedLetters[n-1-i];
                        //      transformedLetters[n-1-i]=t;
                        // }
                        this.letters = transformedLetters;
                        return transformedLetters;
                    })
                    .catch((error: Response) => Observable.throw(error.json()));
  }

  // Hookup to the post letter API
  addLetter(letter: Letter){
    const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
    const body = JSON.stringify(letter);
    const headers = new Headers({"Content-Type": "application/json"});
    return this.http.post("https://pontesnetwork.herokuapp.com/letter" + token, body, {headers: headers})
           .map((response: Response) => {
             const result = response.json();
             let letter = new Letter(result.obj.title, result.obj.content, result.obj.signature, new Date(result.obj.date), null, result.obj._id)
             this.letters.unshift(letter);
             return letter;
           })
           .catch((error: Response) => Observable.throw(error.json()));
  }

  // Emit an even when a Edit button is click
  editLetter(letter: Letter) {
    this.letterIsEditing.emit(letter);
  }
  //Reach to the patch letter API and update the letter on server
  updateLetter(letter: Letter){
      const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
      const body = JSON.stringify(letter);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.patch('https://pontesnetwork.herokuapp.com/letter/' + letter._id + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
  }

  //Reach to the delete letter API and delete the letter on server
  deleteLetter(letter: Letter) {
    const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
    this.letters.splice(this.letters.indexOf(letter), 1);
    return this.http.delete('https://pontesnetwork.herokuapp.com/letter/' + letter._id + token)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

}
