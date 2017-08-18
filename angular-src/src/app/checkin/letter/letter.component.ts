import { Component, OnInit, Input} from '@angular/core';

import { Letter } from '../../models/letter.model';
import { LetterService } from '../letter.service';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})

export class LetterComponent implements OnInit {
  loadComment: boolean = false;

  @Input() letter: Letter;

  constructor(private letterService: LetterService) { }

  ngOnInit() {
    $('.collapsible').collapsible();
  }

  onEdit() {
    this.letterService.editLetter(this.letter);
  }

  onDelete() {
    this.letterService.deleteLetter(this.letter)
        .subscribe(
            result => console.log(result)
        );
  }
  onClick(){
    this.loadComment = true;
  }
}
