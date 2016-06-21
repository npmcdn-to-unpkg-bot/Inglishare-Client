import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class PasswordApi {
    protected basePath = 'http://jsonplaceholder.typicode.com/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * change
     * 
     * @param data Email to send a change password instruction
     */
    public changePassword (data: models.Data1, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/users/password/change';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'data' is set
        if (!data) {
            throw new Error('Missing required parameter data when calling changePassword');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * request change password
     * 
     * @param email Email to send a change password instruction
     */
    public sendForgotPasswordRequest (email: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/users/password/forgot';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'email' is set
        if (!email) {
            throw new Error('Missing required parameter email when calling sendForgotPasswordRequest');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(email);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

}
