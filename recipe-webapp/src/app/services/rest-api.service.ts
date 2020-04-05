import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    get<T>(url: string): Promise<T> {
        return this.http.get<T>(this.apiUrl + url).toPromise();
    }

    post(url: string, body: any): Promise<any> {
        return new Promise(resolve => this.http
            .post(this.apiUrl + url, body, this.httpOptions)
            .subscribe(resolve));
    }
}
