import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { LocalstorageService } from '../services/localstorage/localstorage.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  // url = 'https://source.unsplash.com/random/250x250'
  hobbies: string[] = []

  user!: User;

  stack: any;
  stackExists!: boolean;

  front = {
    angular: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    react: 'https://logospng.org/download/react/logo-react-1024.png',
    vue: 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png',
    phoenix: 'https://seeklogo.com/images/P/phoenix-logo-D15F067911-seeklogo.com.png'
  }

  back = {
    javascript: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
    typescript: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
    java: 'https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png',
    elixir: 'https://secure.meetupstatic.com/photos/event/c/a/2/d/600_452871757.jpeg'
  }



  constructor(
    private storage: LocalstorageService,
    private info: UserService
  ) { }

  ngOnInit(): void {
    this.stack = this.storage.read('stack')
    this.user = this.info.user;
    this.hobbies = Object
      .values(this.storage.read('hobbies') as string[])
      .filter(hobby => hobby !== '')

    this.stackExists = this.stack.language && this.stack.framework;
    console.log(this.hobbies)
    // this.user = this.storage.read('user') as User;
  }

}
