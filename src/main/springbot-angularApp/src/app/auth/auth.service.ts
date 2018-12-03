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
    if (user.email !== '' && user.password !== '' && user.env !== 'Enviournment' && user.api !== 'Api Version' ) { 
      //this.loggedIn.next(true);
      //this.router.navigate(['/dashboard']);
      this.rest.login(user).subscribe((result) => {
      
	      console.log('----------------------------------------------')
      	var loader = {};
      	loader[result.organizationId] = result;
	      console.log(result);
	      sessionStorage.setItem('loader',JSON.stringify(loader));
	      
	      console.log('----------------------------------------------')
	      console.log(sessionStorage.getItem('loader'));
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
