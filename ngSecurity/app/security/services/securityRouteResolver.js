var SecurityModule;
(function (SecurityModule) {
    var SecurityRouteResolver = (function () {
        function SecurityRouteResolver(configurationService, securityUow, $q, $route) {
            var _this = this;
            this.configurationService = configurationService;
            this.securityUow = securityUow;
            this.$q = $q;
            this.$route = $route;
            this.resolveRoute = function () {
                return _this.configurationService.get().then(function () {
                    return _this.securityUow.identity.getCurrentUser().then(function () {
                        if (_this.$route.current.params.userid) {
                            console.log("edit user");
                            return _this.$q.all([
                                _this.securityUow.roles.getAll(),
                                _this.securityUow.groups.getAll(),
                                _this.securityUow.users.getById({ id: _this.$route.current.params.userid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        if (_this.$route.current.params.roleid) {
                            return _this.$q.all([
                                _this.securityUow.roles.getById({ id: _this.$route.current.params.roleid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        if (_this.$route.current.params.groupid) {
                            return _this.$q.all([
                                _this.securityUow.groups.getById({ id: _this.$route.current.params.groupid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        return true;
                    });
                });
            };
        }
        SecurityRouteResolver.serviceId = "securityRouteResolver";
        return SecurityRouteResolver;
    })();
    angular.module("security").service(SecurityRouteResolver.serviceId, function (configurationService, securityUow, $q, $route) { return new SecurityRouteResolver(configurationService, securityUow, $q, $route); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=securityRouteResolver.js.map