import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { UserService } from 'src/app/services/user/user.service';
import { catchError } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html'
})
export class FormControlComponent implements OnInit {

  title = 'Usuário do Github';
  forms: string | null = '';
  formControl: FormControl = new FormControl('');
  error$!: Subject<boolean>;
  @ViewChild('result') result!: HTMLParagraphElement;

  constructor(
    private user: UserService,
    private router: Router
    ) { }

    ngOnInit(): void {
  }

  alter(): void {
    this.createUser(this.formControl.value);
    this.setForms();
    this.navigate();
    // if (!this.error$) {
    //   this.result.className = '--failed'
    //   this.router.navigateByUrl('/my-forms/reativo');
    // } else {
    //   this.result.className = '--success'
    // }
  }

  createUser(user: string): void {
    this.user.createUser(user)
  }

  setForms(): void {
    this.formControl.reset('');
  }

  navigate() {
    this.router.navigateByUrl('/my-forms/reativo');
  }
}
