import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, TitleComponent]
})
export class AppComponent {}