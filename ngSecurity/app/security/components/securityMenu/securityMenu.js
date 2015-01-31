var SecurityModule;
(function (SecurityModule) {
    var DashboardSecurityMenu = (function () {
        function DashboardSecurityMenu() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/security/components/securityMenu/securityMenu.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
            };
        }
        DashboardSecurityMenu.componentId = "securityMenu";
        return DashboardSecurityMenu;
    })();
    angular.module("security").directive(DashboardSecurityMenu.componentId, function () { return new DashboardSecurityMenu(); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=securityMenu.js.map