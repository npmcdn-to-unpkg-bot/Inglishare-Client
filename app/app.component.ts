
import { Component }       from '@angular/core';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
	<nav>
      <a [routerLink]="['Login']">Login</a>
	   <a [routerLink]="['Register']">Register</a>
    </nav>
    <router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
   		ROUTER_PROVIDERS
  	]
}) 


@RouteConfig([

	{ path: '/login', name: 'Login', component: LoginComponent},
	{ path: '/register', name: 'Register',  component: RegisterComponent}

])

export class AppComponent {
	title = 'Englishare Website';

}