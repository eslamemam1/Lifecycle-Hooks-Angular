import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiled',
  imports: [],
  templateUrl: './chiled.html',
  styleUrl: './chiled.css',
})
export class Chiled implements OnInit, OnChanges {
  constructor() {
    console.log('constructor inslized');
  }
  @Input() name: string = '';
  ngOnInit(): void {
    console.log('ngOnInit inslized');
    //console.log('Chiled component initialized with name:', this.name);
  }
  ngOnChanges(changes: any): void {
    console.log('ngOnChanges inslized');
    console.log('Changes detected:', changes);
    //console.log('Chiled component name changed to:', this.name);
  }
}
