import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {
  title = 'template works!';

  skill: number = 5;
  frameworks: string[] = ['react', 'angular', 'vue'];
  languages: string[] = ['Javascript', 'Java', 'Elixir'];

  constructor() { }

  ngOnInit(): void {
  }

}
