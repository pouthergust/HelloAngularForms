import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  @Input() title = 'insira o titulo'

  constructor() { }

  ngOnInit(): void {
  }

}
