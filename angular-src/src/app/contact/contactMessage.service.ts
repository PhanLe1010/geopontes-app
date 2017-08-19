import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { ContactMessage } from '../models/contactMessage.model';



@Injectable()
export class ContactMessageService{

  constructor(private http: Http){}

  //Hookup to the get messages API
  getContactMessages(){
    const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
    return this.http.get('http://localhost:3000/contact_message'+ token)
                    .map((response: Response) => {
                                                      return response.json().obj;
                                                  })
                    .catch((error: Response) => Observable.throw(error.json()));
  }


  //Hookup to the post contact_message API
  addContactMessage(message: ContactMessage){
    const body = JSON.stringify(message);
    const headers = new Headers({"Content-Type": "application/json"});
    return this.http.post('http://localhost:3000/contact_message', body, {headers: headers} )
              .map((response: Response) => {return response.json()})
              .catch((error: Response) => {return Observable.throw(error.json())});
  }

}
