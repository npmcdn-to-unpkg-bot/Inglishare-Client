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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
/* tslint:disable:no-unused-variable member-ordering */
'use strict';
var PasswordApi = (function () {
    function PasswordApi(http, basePath) {
        this.http = http;
        this.basePath = 'http://jsonplaceholder.typicode.com/';
        this.defaultHeaders = new http_1.Headers();
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     * change
     *
     * @param data Email to send a change password instruction
     */
    PasswordApi.prototype.changePassword = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/users/password/change';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'data' is set
        if (!data) {
            throw new Error('Missing required parameter data when calling changePassword');
        }
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    /**
     * request change password
     *
     * @param email Email to send a change password instruction
     */
    PasswordApi.prototype.sendForgotPasswordRequest = function (email, extraHttpRequestParams) {
        var path = this.basePath + '/users/password/forgot';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'email' is set
        if (!email) {
            throw new Error('Missing required parameter email when calling sendForgotPasswordRequest');
        }
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(email);
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    PasswordApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], PasswordApi);
    return PasswordApi;
}());
exports.PasswordApi = PasswordApi;
//# sourceMappingURL=PasswordApi.js.map