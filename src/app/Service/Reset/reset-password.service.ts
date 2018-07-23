import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private httpClient: HttpClient) { }

  Url: Uri = new Uri();

  public UpdatePassword(Token: any, Password: string) : Observable<any>{
    return this.httpClient.post(this.Url.ResetPassword, {Token: Token, Password: Password});
  }
}
