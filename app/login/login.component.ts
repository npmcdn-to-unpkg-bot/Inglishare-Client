import { Component }       from '@angular/core';
import  { NgForm }    from '@angular/common';
import { Control, Validators, FormBuilder,ControlGroup, FORM_DIRECTIVES } from  "@angular/common";
import {UsersApi} from '../api-client/api/UsersApi';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
	selector: 'is-login',
	styleUrls:[],
	templateUrl: 'app/login/login.component.html', 
	directives: [FORM_DIRECTIVES],
	providers: [UsersApi]
})

export class LoginComponent {

	email: Control;
	password: Control;
	loginForm: ControlGroup;
	submitAttempt = false;
	
	constructor(private fb: FormBuilder, private users: UsersApi) {
		this.email = new Control('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));

		this.password = new Control('', Validators.compose([Validators.required]));

		this.loginForm = fb.group({
			email:this.email,
			password:this.password
		})

	}

	onSubmit() {
		console.log(this.loginForm);
		this.submitAttempt = true;
		if(this.loginForm.valid){
			var data = this.loginForm.value;
			data.userType = 'normal';
			debugger;
			this.users.loginUser(data).subscribe(res=>{
				this.loginSuccess(res);
				console.log(res);
			}, res => { 
				var status = res.status;
				if(status==403){
					alert(res._body);				
				}
			})
		}
	}

	loginSuccess(res:any){

	}

}