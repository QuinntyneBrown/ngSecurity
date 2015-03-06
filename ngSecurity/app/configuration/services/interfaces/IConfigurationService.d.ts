module app.configuration {

    export interface IConfigurationService {
        get(): ng.IPromise<any>;
    }

}