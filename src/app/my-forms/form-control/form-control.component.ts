import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html'
})
export class FormControlComponent implements OnInit {

  title = 'Usuario do Github';
  forms: string | null = '';
  formControl: FormControl = new FormControl('');
  result: FormControl = new FormControl('');

  constructor(
    private storage: LocalstorageService,
    private user: UserService,
    private router: Router
    ) { }

    ngOnInit(): void {
    // if (!this.storage.read('user')) {
    //   this.storage.create('user', 'Form-control Works!')
    // }

    // this.forms = this.storage.read('user') as string;
    // this.result.setValue(this.forms);
  }

  alter(): void {
    // this.storage.create('user', this.formControl.value);
    // this.forms = this.storage.read('user') as string;
    this.createUser(this.formControl.value);
    this.setForms();
    this.router.navigateByUrl('/my-forms/reativo');
  }

  createUser(user: string): void {
    /* let localUser = */ this.user.createUser(user)
    // this.storage.create('user', localUser);
  }

  setForms(): void {
    this.result.reset('Bem Vindo(a)!!');
    this.formControl.reset('');
  }
}
