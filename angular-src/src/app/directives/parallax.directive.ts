import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
    selector: "[parallax]"
})
export class ParallaxDirective implements OnInit{
    constructor(private elRef: ElementRef){}
    ngOnInit(){
        this.elRef.nativeElement.style.backgroundAttachment = 'fixed';
        this.elRef.nativeElement.style.backgroundPosition = 'center';
        this.elRef.nativeElement.style.backgroundSize = 'cover';
    }
    
}