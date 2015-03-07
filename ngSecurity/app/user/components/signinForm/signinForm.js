var app;
(function (app) {
    var user;
    (function (user) {
        "use strict";
        var SignInForm = (function () {
            function SignInForm(identityService, token, $location) {
                var _this = this;
                this.identityService = identityService;
                this.token = token;
                this.$location = $location;
                this.templateUrl = "/app/user/components/signInForm/signInForm.html";
                this.restrict = "E";
                this.scope = {};
                this.replace = true;
                this.link = function (scope) {
                    scope.vm = {
                        username: "System",
                        password: "password"
                    };
                    scope.tryToSignIn = function (form) {
                        return _this.identityService.signIn({ model: scope.vm }).then(function (results) {
                            _this.token.set({ data: results });
                            _this.$location.path("/");
                        }).catch(function (error) {
                        });
                    };
                };
            }
            SignInForm.componentId = "signInForm";
            return SignInForm;
        })();
        angular.module("app.user").directive(SignInForm.componentId, ["identityService", "token", "$location", function (identityService, token, $location) { return new SignInForm(identityService, token, $location); }]);
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=signinForm.js.map