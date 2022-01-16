import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User;

  constructor(
    private http: HttpClient,
    private storage: LocalstorageService
  ) { }

  createUser(user: string): void {
    this.http.get<User>(`https://api.github.com/users/${user}`)
    .subscribe((res: User) => {

      // this.user = res;
      this.storage.create('user', res)
      console.log('Usuario: ', res)
    })
  }
}


