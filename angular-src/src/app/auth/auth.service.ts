import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "../models/user.model";

@Injectable()
export class AuthService {


    public isLoggedIn = {
      status:  (localStorage.getItem('token') !== null)
    }
    constructor(private http: Http) {}


    login(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://pontesnetwork.herokuapp.com/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    logout() {
        localStorage.clear();
        this.isLoggedIn.status = false;
    }
}
