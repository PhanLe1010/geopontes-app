import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slogan-section',
  templateUrl: './slogan-section.component.html',
  styleUrls: ['./slogan-section.component.scss']
})
export class SloganSectionComponent implements OnInit {
    myStyle: Object = {};
    myParams: Object = {};
    width: Number = 100;
    height:Number = 100;
 
    ngOnInit() {
        this.myStyle = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'z-index': 100,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
    this.myParams = {
            particles: {
                number: {
                    value: 50,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                },
                size: {
                  value: 6,
                }
        }
    };
    }

  constructor() { }

  onWindowScroll(event, section, downArrow){
    
     var isDown = function(el) {
  
        let rect = el.getBoundingClientRect();
    
        return (
            rect.bottom < (window.innerHeight || document.documentElement.clientHeight) 
        );
      }
      if(isDown(section)){
        downArrow.style.opacity = "0";
      }
      else{
        downArrow.style.opacity = "1";
      };
  }

}
