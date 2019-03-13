import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactMessageService } from '../contactMessage.service';
import { ContactMessage } from '../../models/contactMessage.model';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  notificationOfSendingContactMessage: string ="";
  loadingIcon: boolean = false;


  constructor(private contactMessageService: ContactMessageService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    this.loadingIcon = true;
    const message = new ContactMessage(this.contactForm.value.name,
                                       this.contactForm.value.email,
                                       this.contactForm.value.subject,
                                       this.contactForm.value.message);
    this.contactMessageService.addContactMessage(message).subscribe(
          data => {
            this.notificationOfSendingContactMessage = "Thank you for everything! We'll contact you as soon as we find this.";
            $('#myModal').modal('show');
            this.loadingIcon = false;
            this.contactForm.reset()
          },
          error => {
            this.notificationOfSendingContactMessage = "Oops! There was an error. Could not send the message. Try again!";
            this.loadingIcon = false;
            $('#myModal').modal('show')
          }
        );
  }



}
