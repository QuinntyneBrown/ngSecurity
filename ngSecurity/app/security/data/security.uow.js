var app;
(function (app) {
    var security;
    (function (security) {
        var SecurityUow = (function () {
            function SecurityUow(groupService, identityService, roleService, userService) {
                this.groupService = groupService;
                this.identityService = identityService;
                this.roleService = roleService;
                this.userService = userService;
                this.identity = this.identityService;
                this.groups = this.groupService;
                this.roles = this.roleService;
                this.users = this.userService;
            }
            return SecurityUow;
        })();
        angular.module("app.security").service("securityUow", ["groupService", "identityService", "roleService", "userService", SecurityUow]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=security.uow.js.map