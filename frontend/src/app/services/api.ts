import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url = `${environment.apiUrl}/hello`;
  
  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(this.url, {
      responseType: 'text'
    });
  }
}