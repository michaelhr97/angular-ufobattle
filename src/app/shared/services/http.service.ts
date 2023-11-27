import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'http://wd.etsisi.upm.es:10000';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = `username=${username}&email=${email}&password=${password}`;

    return this.http.post(`${this.baseUrl}/users`, body, {
      headers: headers,
      observe: 'response',
    });
  }

  login(username: string, password: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('username', username);
    params = params.set('password', password);

    return this.http.get(`${this.baseUrl}/users/login`, { params });
  }

  checkUserExistsByUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${username}`, {
      observe: 'response',
    });
  }

  getRecordsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/records`, { observe: 'response' });
  }

  getRecordsListByUsername(username: string, token: string): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.baseUrl}/records/${username}`, {
      headers,
      observe: 'response',
    });
  }

  postRecord(
    score: number,
    ufos: number,
    time: number,
    token: string
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Authorization', token);
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = `punctuation=${score}&ufos=${ufos}&disposedTime=${time}`;

    return this.http.post(`${this.baseUrl}/records`, body, {
      headers,
      observe: 'response',
    });
  }
}
