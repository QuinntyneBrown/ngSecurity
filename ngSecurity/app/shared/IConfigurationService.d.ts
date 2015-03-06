declare module app {

    export interface IConfigurationService {
        get(): ng.IPromise<any>;
    }

}