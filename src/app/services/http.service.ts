import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(serviceName: string) {
    const url = environment.baseUrl + serviceName;
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredentials: false };
    return this.http.get(url, options);
  }

  post(serviceName: string, data: any): any {
    const url = environment.baseUrl + serviceName;
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredentials: false };
    return this.http.post(url, JSON.stringify(data), options);
  }
}