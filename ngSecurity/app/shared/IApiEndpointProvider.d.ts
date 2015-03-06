declare module app.core {

    export interface IApiEndpointProvider {

        configure(baseUrl: string): void;

    }
} 