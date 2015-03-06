(() => {

    "use strict";

    var componentId = "userAdminMenu";

    angular.module("app.user").directive(componentId, ["$location", "$routeParams", "app.session", component]);

    function component($location, $routeParams, session) {
        return {
            templateUrl: "/app/user/components/userAdminMenu/userAdminMenu.html",
            restrict: "EA",
            replace: true,
            scope: {

            },
            link: (scope) => {


            }
        };
    }

})();