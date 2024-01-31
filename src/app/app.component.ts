import { Component } from '@angular/core';
import { fadeAnimation } from './utilities/animation/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'clicker-monster';
}
