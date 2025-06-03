import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = 'https://reqres.in/api/users';

  constructor(public _http:HttpClient) { 

  }

  Create(user: any):Observable<any>{
    return this._http.post<any>(this.url, {
      name: user.name,
      job: user.job
    }, {observe: 'response'});
  }
}
