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
    return localStorage.getItem(key);
  }
}
