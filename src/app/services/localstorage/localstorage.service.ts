import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  create(key: string, value: string | object): void {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  read(key: string): string | object {
    let data: string | object | null = localStorage.getItem(key);

    if ( !data ) {
      throw new Error('Chave ou Valor não encontrado');
    } else if (data.endsWith('}')){
      data = JSON.parse(data) as object;
      return data;
    }

    return data;
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}
