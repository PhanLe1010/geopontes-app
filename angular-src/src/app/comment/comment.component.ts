import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';
import { CommentService } from './comment.service';
import { Comment } from '../models/comment.model';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers: [CommentService]
})
export class CommentComponent implements OnInit {
  @Input() letterId: string;
  loadingCommentsError: string = "";
  comments: Comment[] = [];
  newCommentForm: FormGroup;
  notificationOfSendingComment: string ="";
  loadingIcon: boolean = false;
  clickNewCommentbutton: boolean = true;


  constructor(private commentService: CommentService, private authService: AuthService ) { }

  ngOnInit() {
    this.commentService.getComment(this.letterId)
        .subscribe(
          (data) => this.comments = data,
          (error)=> {
                this.loadingCommentsError = "Oops! There was an error. Could not load comments";
                console.log(error)
          }
        )

    this.newCommentForm = new FormGroup({
          name: new FormControl(null, Validators.required),
          email: new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          content: new FormControl(null, Validators.required),
        });
    }


    onSubmit(){
      // Create
      const comment = new Comment(this.newCommentForm.value.name,
                                this.newCommentForm.value.email,
                                this.newCommentForm.value.content);
            comment.letterId = this.letterId;
      this.commentService.addComment(comment).subscribe(
            data => {
              this.notificationOfSendingComment = "Successfully post a commnent.";
              $('#commentNotification').modal('show');
              this.loadingIcon = false;
              this.newCommentForm.reset(),
               $('#textarea1').trigger('autoresize');
            },
            error => {
              this.notificationOfSendingComment = "Oops! There was an error. Could not add the comment. Try again!";
              this.loadingIcon = false;
              $('#commentNotification').modal('show');
              console.log(error)
            }
          );
    }

    onClickNewCommentForm(){
      this.clickNewCommentbutton = !this.clickNewCommentbutton
    }

    onDelete(event) {
      // console.log(event.target.id)
      this.commentService.deleteComment(this.letterId, event.target.id )
          .subscribe(
              result => console.log(result)
          );
    }
}
