import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  forms: string | null = '';
  formControl = new FormControl({value: this.forms, updateOn: 'change'});
  @ViewChild('value') input!: HTMLInputElement;

  constructor(
    private storage: LocalstorageService
  ) { }

  ngOnInit(): void {
    console.log(this.formControl.value)
    if (!this.storage.read('Form-control Works!') === null) {
      this.storage.create('formsTitle', 'Form-control Works!')
    }

    this.forms = localStorage.getItem('formsTitle');
    console.log(this.forms)
  }

  alter(value: any) {
    this.storage.create('formsTitle', value.value)
    this.forms = localStorage.getItem('formsTitle');
    this.formControl.reset('limpo');
  }
}
