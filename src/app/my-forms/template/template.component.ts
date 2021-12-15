import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {
  title = 'template works!';

  skill: number = 5;
  frameworks: string[] = ['react', 'angular', 'vue', 'phoenix'];
  languages: string[] = ['Javascript', 'Typescript' ,'Java', 'Elixir'];
  newUser!: User;
  // mastery: number = 0;

  constructor(
    private storage: LocalstorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.user.getUser())
  }

  showMe(form: any) {
    this.storage.create('stack', form.value)
    this.router.navigateByUrl('/profile');
  }

}
