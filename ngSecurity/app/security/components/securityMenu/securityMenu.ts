module SecurityModule {

    class DashboardSecurityMenu {

        public static componentId = "securityMenu";

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "/app/security/components/securityMenu/securityMenu.html";

        public scope = {};

        public link = (scope, element, attributes) => {

        }

    }

    angular.module("security").directive(DashboardSecurityMenu.componentId,() => new DashboardSecurityMenu());

}