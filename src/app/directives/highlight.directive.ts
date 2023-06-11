import { Directive, Input, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(click)': ' applyLogic()',
  }
})
export class HighlightDirective {
  @Input() data?: any = '';

  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseenter')
  mouseenter() {
    console.log("OMG It's a Mouse!!!");
  }
  @HostListener('document:dblclick', ['$event'])
  trigger() {
    this.elementRef.nativeElement.style.color = 'black';

  }
  ngOnInit() {
    this.applyLogic()
  }

  applyLogic() {
    this.elementRef.nativeElement.style.color = 'blue' //-------------- single style
    // this.elementRef.nativeElement.setAttribute('style', 'color: white; background: red'); //--------- multiple style
    if (this.data == 2) { //---conditional
      this.elementRef.nativeElement.setAttribute('style', 'color: white; background: red'); //--------- multiple style
    }
  }

}
