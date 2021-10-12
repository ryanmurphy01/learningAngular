import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private elm: ElementRef) {
    
  }

  ngOnInit():void{

  }

  @HostListener('mouseover') mouseover(eventData:Event){
    this.underline('underline')
    this.bold('bold')
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.underline('none')
    this.bold('normal')
  }

  underline(underline: string): void {
    this.elm.nativeElement.style.textDecoration = underline || 'underline';
    
  }

  bold(bold: string): void {
    this.elm.nativeElement.style.fontWeight = bold || "bold";
  }


  

}
