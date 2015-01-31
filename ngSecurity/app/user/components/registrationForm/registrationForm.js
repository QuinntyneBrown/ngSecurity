(function () {
    "use strict";
    var componentId = "registrationForm";
    angular.module("user").directive(componentId, ["$location", "identityService", component]);
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
})();
//# sourceMappingURL=registrationForm.js.map