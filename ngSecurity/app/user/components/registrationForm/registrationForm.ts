module app.user {

    "use strict";

    function component($location, identityService) {

        return {
            templateUrl: "/app/user/components/registrationForm/registrationForm.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: (scope) => {

                scope.submit = () => {
                    identityService.register({ model: scope.model }).then(() => {
                        $location.path("/signin");
                    });
                }
            }
        };
    }

    angular.module("app.user").directive("registrationForm", ["$location", "identityService", component]);
}
