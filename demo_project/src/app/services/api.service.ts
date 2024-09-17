import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // we need to make a request to our server
  constructor(
    private httpClient: HttpClient
  ) { }
  // Making api calls without invoking the httpClient every time
  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>; // We just declared a method to communicate with our server
  }
  // @return — An Observable of the HttpResponse, with a response body in the requested type.
  // We are providing to a method of type T and a url that is a string. Don't like any. Shouldn't be used. So we will create a type or interface instead of any.
  // After creating the types.ts and having options we can now just use Options for any

  // Post method
  post<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }

  // Put method
  put<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.httpClient.put<T>(url, body, options) as Observable<T>;
  }

  // delete method
  delete<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.delete<T>(url, options) as Observable<T>;
  }
}
