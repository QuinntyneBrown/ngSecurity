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
                            console.log("what what?");
                        });
                    };
                };
                this.$inject = ["identityService", "token", "$location"];
            }
            SignInForm.componentId = "signInForm";
            return SignInForm;
        })();
        angular.module("user").directive(SignInForm.componentId, function (identityService, token, $location) { return new SignInForm(identityService, token, $location); });
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=signinForm.js.map