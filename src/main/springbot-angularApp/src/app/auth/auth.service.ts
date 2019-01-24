import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

import { RestService } from '../rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private loggedIn = new BehaviorSubject<boolean>(false);

	get isLoggedIn() {
		return this.loggedIn.asObservable(); 
	}

  constructor(private rest: RestService,private router: Router) {
  	
  }

  login(user: User){
    console.log(user);
    console.log('----------------------------------------------')
    if (user.email !== '' && user.password !== '' && user.env !== 'Environment' ) {
      this.rest.login(user).subscribe((result) => {
      
		  var pathArray = result.metadataServerUrl.split('/');
			var protocol = pathArray[0];
			var host = pathArray[2];
			 
			result.baseURL = protocol + '//' + host;
			result.version = user.api;
			sessionStorage.setItem('env1',JSON.stringify(result));
				sessionStorage.setItem('selected','env1');

		  
		  	this.router.navigate(['/dashboard'])
	    }, (err) => {
	      console.log(err);
	    });
    }
  }

  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
