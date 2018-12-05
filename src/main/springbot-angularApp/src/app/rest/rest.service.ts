import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { User } from '../auth/user';
import { Env } from './env';

const endpoint = 'http://localhost:8080/';
const login_endpoint = 'login_request';
const soql_endpoint = 'soql_request';

@Injectable({
  providedIn: 'root'
})

export class RestService {

constructor(private http: HttpClient) { }


login (user: User): Observable<any> {
	var headerOptions = {
	  headers: new HttpHeaders({
					'Content-Type' : 'application/json',
					'username' : user.email,
					'password' : user.password,
					'version' : user.api+'.0',
					'orgtype' : user.env.toUpperCase(),
					"Access-Control-Allow-Credentials" : "true",
            		"Access-Control-Allow-Origin" : '*'
				})
	};
  	return this.http.post(endpoint + login_endpoint, '' ,headerOptions).pipe(
    tap((result) => console.log('Login Successful')),
    catchError(this.handleError<any>('addProduct'))
  );
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for env consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}