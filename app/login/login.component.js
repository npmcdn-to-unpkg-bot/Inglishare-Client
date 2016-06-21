"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var UsersApi_1 = require('../api-client/api/UsersApi');
var http_1 = require('@angular/http');
var LoginComponent = (function () {
    function LoginComponent(fb, users) {
        this.fb = fb;
        this.users = users;
        this.submitAttempt = false;
        this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));
        this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required]));
        this.loginForm = fb.group({
            email: this.email,
            password: this.password
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.loginForm);
        this.submitAttempt = true;
        if (this.loginForm.valid) {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            var data = this.loginForm.value;
            data.userType = 'normal';
            debugger;
            this.users.loginUser(JSON.stringify(data), options).subscribe(function (res) {
                _this.loginSuccess(res);
                console.log(res);
            }, function (res) {
                alert(JSON.stringify(res));
                //console.log(res);
            });
        }
    };
    LoginComponent.prototype.loginSuccess = function (res) {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'is-login',
            styleUrls: [],
            templateUrl: 'app/login/login.component.html',
            directives: [common_1.FORM_DIRECTIVES],
            providers: [UsersApi_1.UsersApi]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, UsersApi_1.UsersApi])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map