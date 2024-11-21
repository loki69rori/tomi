import { Component } from '@angular/core';

@Component({
  selector: 'tm-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {

  person = JSON.stringify({
    id: 1,
    wealth: 1,
  });

 }
