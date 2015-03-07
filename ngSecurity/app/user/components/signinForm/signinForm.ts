module app.user {

    "use strict";

    class SignInForm {

        constructor(private identityService: any, private token, private $location: ng.ILocationService) {

        }

        public templateUrl: string = "/app/user/components/signInForm/signInForm.html";

        public static componentId: string = "signInForm";

        public restrict: string = "E";

        public scope: any = {};

        public replace: boolean = true;

        public link = (scope) => {

            scope.vm = {
                username: "System",
                password: "password"
            };

            scope.tryToSignIn = (form) => {

                return this.identityService.signIn({ model: scope.vm }).then((results) => {

                    this.token.set({ data: results });

                    this.$location.path("/");

                }).catch((error) => {

                });

            };
        }



        
    }

    angular.module("app.user").directive(SignInForm.componentId, ["identityService", "token", "$location",(identityService, token, $location) => new SignInForm(identityService, token, $location)]);

}