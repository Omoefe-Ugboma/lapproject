import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormData, ContactInfo, Education, Experience } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  userUrl = 'http://localhost:3000/users';

  headers = new HttpHeaders({
    'Content-Type':'application/json'
  });

  UserRegister(userReg: FormData){
     const body = JSON.stringify({userReg});
     return this.http.post<FormData>(`${this.userUrl}/`, body,{headers: this.headers})
  }

}
