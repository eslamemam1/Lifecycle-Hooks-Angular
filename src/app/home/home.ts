import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chiled } from '../chiled/chiled';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Chiled, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = 'Angular';
  number: number = 1;
  @ViewChild('chiledC') chiledComponent!: Chiled;

  // This method is called when the button is clicked
  onClick(): void {
    this.name = 'Angular Updated';
    this.number = 2;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.chiledComponent, 'hello chiled component');
  }
}
