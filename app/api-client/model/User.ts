'use strict';
import * as models from './models';

export interface User {
    

    id?: number;

    email?: string;

    password?: string;

    userType?: string;

    firstName?: string;

    lastName?: string;

    description?: string;

    gender?: boolean;

    banned?: boolean;

    profileImage?: string;

    birthday?: Date;

    roleId?: models.Role;

    createdTime?: Date;

    modifiedTime?: Date;
}
