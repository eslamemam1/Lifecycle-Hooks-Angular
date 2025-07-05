import { Component } from '@angular/core';
import { Chiled } from '../chiled/chiled';

@Component({
  selector: 'app-home',
  imports: [Chiled],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = 'Angular';

  // This method is called when the button is clicked
  onClick(): void {
    this.name = 'Angular Updated';
  }
}
