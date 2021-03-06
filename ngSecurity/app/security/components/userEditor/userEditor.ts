module app.security {

    class UserEditor {

        constructor(private $location, private $routeParams, private securityUow) {

        }

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/security/components/userEditor/userEditor.html";

        public scope: any = {};

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.uow = {
                roles: this.securityUow.roles,
                groups: this.securityUow.groups
            }

            scope.tryToSave = (form) => {

                if (scope.vm.entity.id) {

                    return this.securityUow.users.update({ model: scope.vm.entity }).then((results) => {
                        this.$location.path("/user/list");
                    });
                }
                else {
                    return this.securityUow.users.add({ model: scope.vm.entity }).then((results) => {
                        this.$location.path("/user/list");
                    });
                }
            }

            if (this.$routeParams.userid) {
                return this.securityUow.users.getById({ id: this.$routeParams.userid }).then((results) => {
                    scope.vm.entity = results;
                }).catch((error) => {

                });
            }
        }

    }

    angular.module("app.security").directive("userEditor", ["$location", "$routeParams", "securityUow",($location, $routeParams, securityUow) => new UserEditor($location, $routeParams, securityUow)]);

}