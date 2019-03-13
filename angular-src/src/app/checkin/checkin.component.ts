import { Component, OnInit } from '@angular/core';


import { LetterService } from './letter.service';
import { Letter } from '../models/letter.model';

@Component({
  selector: 'checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
  providers: [LetterService]
})
export class CheckinComponent implements OnInit {
  letters: Letter[] = [];
  loadingLettersError: string = "";
  clickNewLetterButton: boolean = true;

  constructor( private letterService: LetterService ) { }

  ngOnInit() {
    this.letterService.getLetter()
        .subscribe(
          (data) => this.letters = data,
          (error)=> {
                this.loadingLettersError = "Oops! There was an error. Could not load the letters!";
                console.log(error)
          }
        )
  }

  onClickNewLetterButton(){
    this.clickNewLetterButton = !this.clickNewLetterButton
  }

}
