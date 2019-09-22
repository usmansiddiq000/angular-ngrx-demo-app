import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(id) {
    return this._http.get<any>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
