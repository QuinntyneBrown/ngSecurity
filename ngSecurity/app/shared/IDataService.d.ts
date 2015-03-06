declare module app {
 
    export interface IDataService {
        
        getAll(): ng.IPromise<any>;

        getById(id: any): ng.IPromise<any>;

        remove(id: any): ng.IPromise<any>;

        add(options: any): ng.IPromise<any>;

        update(options: any): ng.IPromise<any>;
    }
} 
