import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-FirstProgram',
  templateUrl: './FirstProgram.component.html',
  styleUrls: ['./FirstProgram.component.scss']
})
export class FirstProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     $('.materialboxed').materialbox();
  }

}
