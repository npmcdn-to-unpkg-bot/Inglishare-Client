
import { Component }       from '@angular/core';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';

@Component({
	selector: 'my-app',
	template:`
		<h1>{{title}}</h1>
		<is-register></is-register>
		<is-login></is-login>
	`,
	directives: [LoginComponent, RegisterComponent]
})

export class AppComponent {
	title = 'Englishare Website';

}