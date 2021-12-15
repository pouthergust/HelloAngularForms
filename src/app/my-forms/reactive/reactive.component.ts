import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent implements OnInit {

  // forms = new FormGroup({
  forms = this.formBuilder.group({
    hobby1: new FormControl(''),
    hobby2: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private storage: LocalstorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showMe() {
    this.router.navigateByUrl('/my-forms/template');
    this.storage.create('hobbies', this.forms.value);
  }

}
