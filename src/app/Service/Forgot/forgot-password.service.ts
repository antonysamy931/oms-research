import { Injectable } from '@angular/core';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private httpClient: HttpClient) { }

  Url: Uri = new Uri();

  public SendResetEmail(email: string) : Observable<any>{
    return this.httpClient.post(this.Url.ForgotPassword, {Email: email});
  }

  public VerifyToken(token: string) : Observable<any>{
    return this.httpClient.post(this.Url.VerifyToken, {Token: token});
  }
}
