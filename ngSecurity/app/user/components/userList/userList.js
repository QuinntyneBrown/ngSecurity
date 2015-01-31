var UserModule;
(function (UserModule) {
    var UserList = (function () {
        function UserList(userService) {
            var _this = this;
            this.userService = userService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/user/components/userList/userList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.userService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.userService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["userService"];
        }
        UserList.componentId = "userList";
        return UserList;
    })();
    angular.module("user").directive(UserList.componentId, function (userService) { return new UserList(userService); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userList.js.map