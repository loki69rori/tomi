import { Component } from '@angular/core';
import { PersonComponent } from "./people/person/person.component";

@Component({
  selector: 'app-root',
  imports: [PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
