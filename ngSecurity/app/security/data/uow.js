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
                this.$inject = ["groupService", "identityService", "roleService", "userService"];
                this.identity = this.identityService;
                this.groups = this.groupService;
                this.roles = this.roleService;
                this.users = this.userService;
            }
            SecurityUow.serviceId = "securityUow";
            return SecurityUow;
        })();
        angular.module("app.security").service(SecurityUow.serviceId, function (groupService, identityService, roleService, userService) { return new SecurityUow(groupService, identityService, roleService, userService); });
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=uow.js.map