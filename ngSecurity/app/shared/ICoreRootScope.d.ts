declare module app {

    export interface ICoreRootScope extends ng.IRootScopeService {
        configuration: any;
        inViewTransition: boolean
    }    
}

