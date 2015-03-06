var app;
(function (app) {
    var common;
    (function (common) {
        var IdentityMenu = (function () {
            function IdentityMenu(session) {
                var _this = this;
                this.session = session;
                this.templateUrl = "/app/common/components/identityMenu/identityMenu.html";
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.link = function (scope, element, attributes) {
                    scope.session = _this.session;
                };
            }
            return IdentityMenu;
        })();
        angular.module("app.common").directive("identityMenu", ["session", function (session) { return new IdentityMenu(session); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=identityMenu.js.map