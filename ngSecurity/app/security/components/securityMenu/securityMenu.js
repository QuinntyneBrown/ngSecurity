var app;
(function (app) {
    var security;
    (function (security) {
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
        angular.module("app.security").directive(DashboardSecurityMenu.componentId, function () { return new DashboardSecurityMenu(); });
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=securityMenu.js.map