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
var RegisterComponent = (function () {
    function RegisterComponent(fb) {
        this.fb = fb;
        this.submitAttempt = false;
        this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]));
        this.firstName = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required]));
        this.lastName = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required]));
        this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required]));
        this.confirmPassword = new common_1.Control('');
        this.registerForm = fb.group({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        }, { validator: this.matchingPasswords('password', 'confirmPassword') });
    }
    RegisterComponent.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.registerForm.value.gender = this.gender;
        console.log(this.registerForm.value);
        this.submitAttempt = true;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'is-register',
            styleUrls: [],
            templateUrl: 'app/register/register.component.html',
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map