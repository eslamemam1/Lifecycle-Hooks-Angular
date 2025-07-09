import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddColor]',
})
export class AddColor {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.el.nativeElement.style.color = 'red';
  }
}
