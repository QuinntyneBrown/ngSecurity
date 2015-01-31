var CommonModule;
(function (CommonModule) {
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
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=identityMenu.js.map