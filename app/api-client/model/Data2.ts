'use strict';
import * as models from './models';

export interface Data2 {
    [key: string]: models.Role | any;

    email?: string;

    password?: string;

    userType?: Data2.UserTypeEnum;

    birthday?: Date;

    firstName?: string;

    lastName?: string;

    gender?: Data2.GenderEnum;
}
export namespace Data2 {

    export enum UserTypeEnum { 
        normal = <any> 'normal',
        facebook = <any> 'facebook',
        google+ = <any> 'google+',
    }

    export enum GenderEnum { 
        male = <any> 'male',
        female = <any> 'female',
    }
}
