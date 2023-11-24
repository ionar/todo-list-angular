import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
  configUrl = 'http://localhost:5000/';

  addUser(register: Register): Observable<Register> {
    const registerUrl = `${this.configUrl}register`;
    return this.http
      .post<Register>(registerUrl, register)
      .pipe(catchError(this.handleError('addUser', register)));
  }

  loginUser(login: Login): Observable<Login> {
    const loginUrl = `${this.configUrl}auth/login`;
    return this.http
      .post<Login>(loginUrl, login)
      .pipe(catchError(this.handleError('loginUser', login)));
  }

  handleError(
    operation: string,
    register: Register
  ): (err: any) => Observable<any> {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(error);
    };
  }
}

export interface Register {
  name?: string;
  email?: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
  token?: string;
  name: string;
}
