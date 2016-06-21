'use strict';
import * as models from './models';

export interface Data {
    

    email?: string;

    password?: string;

    userType?: Data.UserTypeEnum;
}
export namespace Data {

    export enum UserTypeEnum { 
        normal = <any> 'normal',
        facebook = <any> 'facebook',
        google+ = <any> 'google+',
    }
}
