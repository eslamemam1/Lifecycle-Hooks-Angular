import { Component } from '@angular/core';
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

  // This method is called when the button is clicked
  onClick(): void {
    this.name = 'Angular Updated';
    this.number = 2;
  }
}
