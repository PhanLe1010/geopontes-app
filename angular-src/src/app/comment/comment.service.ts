import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Comment } from '../models/comment.model';

@Injectable()

export class CommentService{
  private comments: Comment[] = [];

  constructor(private http: Http){}


  //Hookup to the get comments API
  getComment(letterId: string){
    return this.http.get('https://pontesnetwork.herokuapp.com/'+letterId+'/comment')
               .map((response: Response) => {
                 const jsonComments = response.json().obj;
                 let transformedComments: Comment[] = [];
                 for(let comment of jsonComments){
                   transformedComments.push(new Comment(comment.name, comment.email, comment.content, comment._id, comment.letterId, new Date(comment.date)))
                 }
                 this.comments = transformedComments;
                 return transformedComments;
               })
  }


  // Hookup to the post letter API
  addComment(comment: Comment){
    const body = JSON.stringify(comment);
    const headers = new Headers({"Content-Type": "application/json"});
    return this.http.post("https://pontesnetwork.herokuapp.com/"+comment.letterId+"/comment", body, {headers: headers})
           .map((response: Response) => {
             const result = response.json().obj;
             let comment = new Comment(result.name, result.email, result.content, result._id, result.letterId, new Date(result.date))
             this.comments.push(comment);
             return comment;
           })
           .catch((error: Response) => Observable.throw(error.json()));
  }

  //Reach to the delete comment API and delete the comment on server
  deleteComment(letterId: string, commentId: string) {
    const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
    for(let i = this.comments.length - 1; i >= 0; i--) {
      if(this.comments[i].commentId === commentId) {
         this.comments.splice(i, 1);
      }
    }

    return this.http.delete('https://pontesnetwork.herokuapp.com/' + letterId + "/comment/" +  commentId + token)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

}
