module UserModule {

    "use strict";

    class ChangePasswordForm {

        public templateUrl: string = "/app/user/components/changePasswordForm/changePasswordForm.html";

        public static componentId: string = "changePasswordForm";

        public restrict: string = "E";

        public scope: any = {};

        public replace: boolean = true;

        public link = (scope) => {

            scope.vm = {};

            scope.tryToChangePassword = (form) => {
                return this.userService.changePassword({ model: scope.vm }).then((results) => {
                    this.$location.path("/user/list");
                }).catch((error) => {

                });
            };

            if (this.$routeParams.changepasswordid) {
                return this.userService.getById({ id: this.$routeParams.changepasswordid }).then((results) => {
                    scope.vm = results;
                });
            } else {
                return this.identityService.getCurrentUser().then((results) => {
                    scope.vm = results;
                });
            }
        }

        public $inject: string[] = ["identityService","userService", "$location", "$routeParams"];

        constructor(private identityService, private userService: any, private $location: ng.ILocationService, private $routeParams) {

        }


    }

    angular.module("user").directive(ChangePasswordForm.componentId,(identityService, userService, $location, $routeParams) => new ChangePasswordForm(identityService, userService, $location, $routeParams));

}