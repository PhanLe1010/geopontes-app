import { Component, OnInit } from '@angular/core';
import { ContactMessageService } from '../contactMessage.service';

@Component({
  selector: 'app-contact-messages',
  templateUrl: './contact-messages.component.html',
  styleUrls: ['./contact-messages.component.scss']
})
export class ContactMessagesComponent implements OnInit {
  messages: Object[];
  loadingContactMessagesError: string = "";


  constructor(private contactMessageService: ContactMessageService) { }

  ngOnInit() {
    this.contactMessageService.getContactMessages()
        .subscribe(
          (data) => this.messages = data,
          error => {
                      this.loadingContactMessagesError = "Oops! There was an error. Could not load the messages!";
                      console.log(error)
                    }
        )
  };


}
