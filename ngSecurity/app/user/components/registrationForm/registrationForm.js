var app;
(function (app) {
    var user;
    (function (user) {
        "use strict";
        function component($location, identityService) {
            return {
                templateUrl: "/app/user/components/registrationForm/registrationForm.html",
                restrict: "EA",
                replace: true,
                scope: {},
                link: function (scope) {
                    scope.submit = function () {
                        identityService.register({ model: scope.model }).then(function () {
                            $location.path("/signin");
                        });
                    };
                }
            };
        }
        angular.module("app.user").directive("registrationForm", ["$location", "identityService", component]);
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=registrationForm.js.map