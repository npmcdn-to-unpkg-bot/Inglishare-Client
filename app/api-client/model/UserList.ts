'use strict';
import * as models from './models';

/**
 * A list of Users
 */
export interface UserList {
    

    count?: number;

    page?: number;

    users?: Array<models.User>;
}
