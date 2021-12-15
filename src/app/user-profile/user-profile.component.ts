import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { LocalstorageService } from '../services/localstorage/localstorage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  title = 'Gabriel Henrique';
  subtitle = 'Designer Grafico';
  url = 'https://source.unsplash.com/random/250x250'

  user!: User;

  stack: any;

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
    private storage: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.stack = this.storage.read('stack')
    this.user = this.storage.read('user') as User;
    console.log(this.user);
    console.log(this.stack);
  }

}
