import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http: HttpClient) { }

  Url: Uri = new Uri();

  public GetCaptcha() : Observable<any>{
    return this.http.get(this.Url.GetCaptcha);
  }

}
