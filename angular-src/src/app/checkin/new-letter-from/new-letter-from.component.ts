import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LetterService } from '../letter.service';
import { Letter } from '../../models/letter.model';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-new-letter-from',
  templateUrl: './new-letter-from.component.html',
  styleUrls: ['./new-letter-from.component.scss']
})
export class NewLetterFromComponent implements OnInit {
  letter: Letter = null;
  newLetterForm: FormGroup;
  notificationOfSendingLetter: string ="";
  loadingIcon: boolean = false;

  constructor(private letterService: LetterService) { }

  ngOnInit() {
    this.newLetterForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      signature: new FormControl(null, Validators.required),
    });

    this.letterService.letterIsEditing.subscribe(
      (letter: Letter) => this.letter = letter
    );
  }

  cancelEdit(){
    this.letter = null;
    this.newLetterForm.reset();
  }
    onSubmit(){
      this.loadingIcon = true;

      if(this.letter){
        // Edit
        this.letter.title =  this.newLetterForm.value.title;        //should not do this- upadte the page before data come back.
        this.letter.content= this.newLetterForm.value.content;      //we should show the data that come back from the serve 
        this.letter.signature = this.newLetterForm.value.signature; //because some time we can not save it

        this.letterService.updateLetter(this.letter).subscribe(
          data => {
            $('#editLetterModal').modal('hide');
            this.notificationOfSendingLetter = "Successfully Edited the letter.";
            $('#letterNotification').modal('show');
            this.loadingIcon = false;
            this.newLetterForm.reset(),
             $('#textarea1').trigger('autoresize');
          },
          error => {
            $('#editLetterModal').modal('hide');
            this.notificationOfSendingLetter = "Oops! There was an error. Could not edit the letter. Try again!";
            this.loadingIcon = false;
            $('#letterNotification').modal('show');
            this.newLetterForm.reset(),
             $('#textarea1').trigger('autoresize');
          }
        );
        this.letter = null;
      } else{
        // Create
        const letter = new Letter(this.newLetterForm.value.title,
                                  this.newLetterForm.value.content,
                                  this.newLetterForm.value.signature);
        this.letterService.addLetter(letter).subscribe(
              data => {
                this.notificationOfSendingLetter = "Successfully post the letter.";
                $('#letterNotification').modal('show');
                this.loadingIcon = false;
                this.newLetterForm.reset(),
                 $('#textarea1').trigger('autoresize');
              },
              error => {
                this.notificationOfSendingLetter = "Oops! There was an error. Could not send the letter. Try again!";
                this.loadingIcon = false;
                $('#letterNotification').modal('show')
              }
            );
      }
    }

}
