import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiled',
  imports: [],
  templateUrl: './chiled.html',
  styleUrl: './chiled.css',
})
export class Chiled implements OnInit {
  @Input() name: string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
