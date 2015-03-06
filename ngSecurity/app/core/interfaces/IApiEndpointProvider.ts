module app.core {

    "use strict";

    export interface IApiEndpointProvider {

        configure(baseUrl: string): void;

    }
} 