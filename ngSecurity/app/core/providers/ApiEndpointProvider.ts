module app.core {

    class ApiEndpointProvider implements ng.IServiceProvider, IApiEndpointProvider {
        config: IApiEndpointConfig = {
            baseUrl:"/api/"
        };

        configure(baseUrl: string): void {
            this.config = {
                baseUrl: baseUrl
            };
        }

        $get(): IApiEndpointConfig {
            return this.config;
        }
    }

    angular.module("app.core").provider("apiEndpoint", ApiEndpointProvider);

} 