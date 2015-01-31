var CommonModule;
(function (CommonModule) {
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
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=entityAdminMenu.js.map