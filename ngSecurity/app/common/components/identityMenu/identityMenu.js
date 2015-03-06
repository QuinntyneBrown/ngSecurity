var app;
(function (app) {
    var common;
    (function (common) {
        var componentId = "identityMenu";
        angular.module("common").directive(componentId, ["session", component]);
        function component(session) {
            return {
                templateUrl: "/app/common/components/identityMenu/identityMenu.html",
                restrict: "EA",
                replace: true,
                scope: {},
                link: function (scope) {
                    scope.session = session;
                }
            };
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=identityMenu.js.map