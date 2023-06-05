import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAuth, IAuthRes } from '../models/auth.interface';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL_AUTH = 'https://core.nekta.cloud/api/auth/login';

  constructor(private http: HttpClient) {}

  signIn(authDto: IAuth) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    const options = { headers: headers };

    return this.http
      .post<IAuthRes>(
        `${this.URL_AUTH}`,
        {
          email: authDto.email,
          password: authDto.password,
          personal_data_access: true,
        },
        options
      )
      .pipe(
        map((token) => {
          localStorage.setItem(
            'token',
            JSON.stringify(token.data.access_token)
          );
          return token;
        })
      );
  }
}
