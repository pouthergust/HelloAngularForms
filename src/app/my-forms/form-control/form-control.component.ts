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
  formControl: FormControl = new FormControl('', {updateOn: 'change'});
  @ViewChild('value') input!: HTMLInputElement;

  constructor(
    private storage: LocalstorageService
  ) { }

  ngOnInit(): void {
    if (!this.storage.read('formsTitle')) {
      this.storage.create('formsTitle', 'Form-control Works!')
    }

    this.forms = this.storage.read('formsTitle');
    console.log(this.forms, "\nThis.forms")
  }

  alter(value: any) {
    this.storage.create('formsTitle', value.value)
    this.forms = this.storage.read('formsTitle');
    this.formControl.reset('');
  }
}
