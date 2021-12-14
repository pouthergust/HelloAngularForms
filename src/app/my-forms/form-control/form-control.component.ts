import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  title = 'Its Working';
  forms: string | null = '';
  formControl: FormControl = new FormControl('');
  result: FormControl = new FormControl('');

  constructor(
    private storage: LocalstorageService
    ) { }

    ngOnInit(): void {
      if (!this.storage.read('formsTitle')) {
        this.storage.create('formsTitle', 'Form-control Works!')
      }

    this.forms = this.storage.read('formsTitle') as string;
    this.result.setValue(this.forms);
  }

  // alter() {
  alter(): void {
    this.storage.create('formsTitle', this.formControl.value);
    this.forms = this.storage.read('formsTitle') as string;
    this.setForms();
  }

  setForms(): void {
    this.result.reset(this.forms);
    this.formControl.reset('');
  }
}
