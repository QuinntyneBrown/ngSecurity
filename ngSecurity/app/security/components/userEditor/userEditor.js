var SecurityModule;
(function (SecurityModule) {
    var UserEditor = (function () {
        function UserEditor($location, $routeParams, securityUow) {
            var _this = this;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.securityUow = securityUow;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/security/components/userEditor/userEditor.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.uow = {
                    roles: _this.securityUow.roles,
                    groups: _this.securityUow.groups
                };
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.securityUow.users.update({ model: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/user/list");
                        });
                    }
                    else {
                        return _this.securityUow.users.add({ model: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/user/list");
                        });
                    }
                };
                if (_this.$routeParams.userid) {
                    return _this.securityUow.users.getById({ id: _this.$routeParams.userid }).then(function (results) {
                        scope.vm.entity = results;
                    }).catch(function (error) {
                    });
                }
            };
            this.$inject = ["$location", "userService"];
        }
        UserEditor.componentId = "userEditor";
        return UserEditor;
    })();
    angular.module("security").directive(UserEditor.componentId, function ($location, $routeParams, securityUow) { return new UserEditor($location, $routeParams, securityUow); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=userEditor.js.map