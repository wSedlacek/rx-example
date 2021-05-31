import { Component } from '@angular/core';
import { of } from 'rxjs';

interface Item {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items$ = of<Item[]>([{ hello: 'world' }]);
}
