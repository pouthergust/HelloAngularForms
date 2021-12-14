import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent implements OnInit {

  // forms = new FormGroup({
  forms = this.formBuilder.group({
    nome: new FormControl(''),
    sobrenome: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private storage: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.storage.read('formsTitle');
    this.storage.read('person');
  }

  showMe() {
    this.storage.create('person', this.forms.value);
  }

}
