import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class UsersApi {
    protected basePath = 'http://inglishare.dev:81/';
    public defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * delete
     * 
     * @param id User id to delete
     */
    public deleteArticleById (id: number, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/users/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling deleteArticleById');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * count
     * 
     * @param ids a comma-separated list of user ids
     * @param roleId filter by roleId
     * @param fields comma-separated list of fields to include in the response
     * @param fromDateTime return users which createdDatetime  equal or greater than specific datetime
     * @param toDateTime return users,which createdDatetime equal or lesser than specific datetime
     */
    public getCountUsers (ids?: string, roleId?: number, fields?: string, fromDateTime?: Date, toDateTime?: Date, extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/users/count';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
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

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

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
    public getListUser (pageSize?: number, page?: number, roleId?: number, fields?: string, sortBy?: string, order?: string, extraHttpRequestParams?: any ) : Observable<models.UserList> {
        const path = this.basePath + '/users';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
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

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * get
     * 
     * @param id UserId
     */
    public getTokenByUserId (id: number, extraHttpRequestParams?: any ) : Observable<models.InlineResponse2001> {
        const path = this.basePath + '/users/{id}/token'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling getTokenByUserId');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * get
     * 
     * @param id User id to get
     */
    public getUserById (id: number, extraHttpRequestParams?: any ) : Observable<models.User> {
        const path = this.basePath + '/users/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling getUserById');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * login
     * 
     * @param data 
     */
    public loginUser (data: models.Data, extraHttpRequestParams?: any ) : Observable<models.InlineResponse200> {
        const path = this.basePath + '/users/login';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'data' is set
        if (!data) {
            throw new Error('Missing required parameter data when calling loginUser');
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
     * register
     * 
     * @param data 
     */
    public registerUser (data: models.Data2, extraHttpRequestParams?: any ) : Observable<models.User> {
        const path = this.basePath + '/users/register';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'data' is set
        if (!data) {
            throw new Error('Missing required parameter data when calling registerUser');
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
     * update
     * 
     * @param id UserId to update
     * @param user 
     */
    public updateUserById (id: number, user?: models.User, extraHttpRequestParams?: any ) : Observable<models.User> {
        const path = this.basePath + '/users/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is set
        if (!id) {
            throw new Error('Missing required parameter id when calling updateUserById');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(user);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * create
     * 
     * @param user User object that needs to be added to the store
     */
    public usersCreate (user: models.User, extraHttpRequestParams?: any ) : Observable<models.User> {
        const path = this.basePath + '/users';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'user' is set
        if (!user) {
            throw new Error('Missing required parameter user when calling usersCreate');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(user);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

}
