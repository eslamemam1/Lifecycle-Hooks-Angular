import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiled',
  imports: [],
  templateUrl: './chiled.html',
  styleUrl: './chiled.css',
})
export class Chiled implements OnInit, OnChanges, DoCheck {
  constructor() {
    console.log('constructor inslized');
  }
  @Input() name: string = '';

  ngOnInit(): void {
    console.log('ngOnInit inslized');
    //console.log('Chiled component initialized with name:', this.name);
  }
  ngOnChanges(changes: any): void {
    //console.log('ngOnChanges inslized');
    console.log('Changes detected:', changes);
    //console.log('Chiled component name changed to:', this.name);
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('do check', this.name);
  }
}
