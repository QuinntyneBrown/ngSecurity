var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var EntityAdminMenu = (function () {
            function EntityAdminMenu() {
                this.$inject = [];
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/app/common/components/entityAdminMenu/entityAdminMenu.html";
                this.link = function (scope, element, attributes) {
                    scope.entityNameLowerCase = attributes.entityName.toLowerCase().replace(" ", "");
                    scope.entityName = attributes.entityName;
                    scope.entityNamePluralized = attributes.entityNamePluralized;
                };
            }
            EntityAdminMenu.componentId = "entityAdminMenu";
            return EntityAdminMenu;
        })();
        angular.module("common").directive(EntityAdminMenu.componentId, function () { return new EntityAdminMenu(); });
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=entityAdminMenu.js.map