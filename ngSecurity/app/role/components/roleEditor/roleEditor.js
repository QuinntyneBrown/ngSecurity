var RoleModule;
(function (RoleModule) {
    var RoleEditor = (function () {
        function RoleEditor($location, roleService) {
            var _this = this;
            this.$location = $location;
            this.roleService = roleService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/role/components/roleEditor/roleEditor.html";
            this.scope = {
                entity: "="
            };
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.roleService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                    else {
                        return _this.roleService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                };
            };
            this.$inject = ["$location", "roleService"];
        }
        RoleEditor.componentId = "roleEditor";
        return RoleEditor;
    })();
    angular.module("role").directive(RoleEditor.componentId, function ($location, roleService) { return new RoleEditor($location, roleService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleEditor.js.map