import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  authApiUrl: string = 'http://localhost:8000/api/auth/';

  private headers = new Headers({'Content-Type': 'application/json'});

  private options = new RequestOptions({headers: this.headers});

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login(email:string,password:string):Observable<any>{
    return this.http.post(this.authApiUrl+'signin',{email, password}, this.options)
    .map(res=>res);
  }

  // cadastro(name:string,email:string,password:string):Observable<any>{
  //   return this.http.post(this.authApiUrl+'signin',{email, password}, this.options)
  //   .map(res=>res.json());
  // }
}
