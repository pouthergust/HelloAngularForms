import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  create(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  read(key: string) {
    console.log(localStorage.getItem(key))
    return localStorage.getItem(key);
  }
}
