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
var UsersApi = (function () {
    function UsersApi(http, basePath) {
        this.http = http;
        this.basePath = 'http://inglishare.dev:81/';
        this.defaultHeaders = new http_1.Headers();
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     * delete
     *
     * @param id User id to delete
     */
    UsersApi.prototype.deleteArticleById = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/users/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling deleteArticleById');
        }
        var requestOptions = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    /**
     * count
     *
     * @param ids a comma-separated list of user ids
     * @param roleId filter by roleId
     * @param fields comma-separated list of fields to include in the response
     * @param fromDateTime return users which createdDatetime  equal or greater than specific datetime
     * @param toDateTime return users,which createdDatetime equal or lesser than specific datetime
     */
    UsersApi.prototype.getCountUsers = function (ids, roleId, fields, fromDateTime, toDateTime, extraHttpRequestParams) {
        var path = this.basePath + '/users/count';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        if (ids !== undefined) {
            queryParameters.set('ids', ids);
        }
        if (roleId !== undefined) {
            queryParameters.set('roleId', roleId);
        }
        if (fields !== undefined) {
            queryParameters.set('fields', fields);
        }
        if (fromDateTime !== undefined) {
            queryParameters.set('fromDateTime', fromDateTime);
        }
        if (toDateTime !== undefined) {
            queryParameters.set('toDateTime', toDateTime);
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    /**
     * list
     *
     * @param pageSize amount of results
     * @param page page to show
     * @param roleId filter by roleId
     * @param fields comma-separated list of fields to include in the response
     * @param sortBy field to sort results
     * @param order order sorting (ascending or descending)
     */
    UsersApi.prototype.getListUser = function (pageSize, page, roleId, fields, sortBy, order, extraHttpRequestParams) {
        var path = this.basePath + '/users';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        if (pageSize !== undefined) {
            queryParameters.set('pageSize', pageSize);
        }
        if (page !== undefined) {
            queryParameters.set('page', page);
        }
        if (roleId !== undefined) {
            queryParameters.set('roleId', roleId);
        }
        if (fields !== undefined) {
            queryParameters.set('fields', fields);
        }
        if (sortBy !== undefined) {
            queryParameters.set('sortBy', sortBy);
        }
        if (order !== undefined) {
            queryParameters.set('order', order);
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    /**
     * get
     *
     * @param id UserId
     */
    UsersApi.prototype.getTokenByUserId = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/users/{id}/token'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling getTokenByUserId');
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    /**
     * get
     *
     * @param id User id to get
     */
    UsersApi.prototype.getUserById = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/users/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling getUserById');
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    /**
     * login
     *
     * @param data
     */
    UsersApi.prototype.loginUser = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/users/login';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'data' is set
        if (!data) {
            throw new Error('Missing required parameter data when calling loginUser');
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
     * register
     *
     * @param data
     */
    UsersApi.prototype.registerUser = function (data, extraHttpRequestParams) {
        var path = this.basePath + '/users/register';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'data' is set
        if (!data) {
            throw new Error('Missing required parameter data when calling registerUser');
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
     * update
     *
     * @param id UserId to update
     * @param user
     */
    UsersApi.prototype.updateUserById = function (id, user, extraHttpRequestParams) {
        var path = this.basePath + '/users/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling updateUserById');
        }
        var requestOptions = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(user);
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    /**
     * create
     *
     * @param user User object that needs to be added to the store
     */
    UsersApi.prototype.usersCreate = function (user, extraHttpRequestParams) {
        var path = this.basePath + '/users';
        var queryParameters = new http_1.URLSearchParams();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'user' is set
        if (!user) {
            throw new Error('Missing required parameter user when calling usersCreate');
        }
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(user);
        return this.http.request(path, requestOptions)
            .map(function (response) { return response.json(); });
    };
    UsersApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], UsersApi);
    return UsersApi;
}());
exports.UsersApi = UsersApi;
//# sourceMappingURL=UsersApi.js.map