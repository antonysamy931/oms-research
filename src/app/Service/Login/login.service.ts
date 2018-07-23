import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Uri } from '../../Module/Constant/uri';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  Url: Uri = new Uri();

  public AuthenticateUser(login: any) : Observable<any>{
    return this.httpClient.post(this.Url.Login, login);
  }

}
