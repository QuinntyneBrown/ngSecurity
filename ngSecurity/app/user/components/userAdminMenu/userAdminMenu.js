(function () {
    "use strict";
    var componentId = "userAdminMenu";
    angular.module("user").directive(componentId, ["$location", "$routeParams", "session", component]);
    function component($location, $routeParams, session) {
        return {
            templateUrl: "/app/user/components/userAdminMenu/userAdminMenu.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
            }
        };
    }
})();
//# sourceMappingURL=userAdminMenu.js.map