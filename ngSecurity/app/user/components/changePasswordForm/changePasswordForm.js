var UserModule;
(function (UserModule) {
    "use strict";
    var ChangePasswordForm = (function () {
        function ChangePasswordForm(identityService, userService, $location, $routeParams) {
            var _this = this;
            this.identityService = identityService;
            this.userService = userService;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.templateUrl = "/app/user/components/changePasswordForm/changePasswordForm.html";
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.link = function (scope) {
                scope.vm = {};
                scope.tryToChangePassword = function (form) {
                    return _this.userService.changePassword({ model: scope.vm }).then(function (results) {
                        _this.$location.path("/user/list");
                    }).catch(function (error) {
                    });
                };
                if (_this.$routeParams.changepasswordid) {
                    return _this.userService.getById({ id: _this.$routeParams.changepasswordid }).then(function (results) {
                        scope.vm = results;
                    });
                }
                else {
                    return _this.identityService.getCurrentUser().then(function (results) {
                        scope.vm = results;
                    });
                }
            };
            this.$inject = ["identityService", "userService", "$location", "$routeParams"];
        }
        ChangePasswordForm.componentId = "changePasswordForm";
        return ChangePasswordForm;
    })();
    angular.module("user").directive(ChangePasswordForm.componentId, function (identityService, userService, $location, $routeParams) { return new ChangePasswordForm(identityService, userService, $location, $routeParams); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=changePasswordForm.js.map