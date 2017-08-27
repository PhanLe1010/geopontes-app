import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const body = "cmd=_s-xclick&hosted_button_id=MVHMXJLPQHZJE";
    const headers = new Headers({"Content-Type": "application/x-www-form-urlencoded", "origin":"null"});
    return this.http.post("https://www.paypal.com/cgi-bin/webscr", body, {headers: headers})
           .map((response: Response) => {
             const result = response.json();
             return result;
           })
           .catch((error: Response) => Observable.throw(error.json())).subscribe(
             data => {
               console.log(data)
             });
    }

}
