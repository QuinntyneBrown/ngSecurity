var RoleModule;
(function (RoleModule) {
    var RoleList = (function () {
        function RoleList(roleService) {
            var _this = this;
            this.roleService = roleService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/role/components/roleList/roleList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.roleService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.roleService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["roleService"];
        }
        RoleList.componentId = "roleList";
        return RoleList;
    })();
    angular.module("role").directive(RoleList.componentId, function (roleService) { return new RoleList(roleService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleList.js.map