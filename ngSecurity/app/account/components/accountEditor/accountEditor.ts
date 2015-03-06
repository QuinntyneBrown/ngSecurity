module app.account {

    "use strict";

    class AccountEditor {

        constructor(private $location, private accountService) {

        }

        public restrict: string = "E";

        public replace: boolean = true;

        public scope = {};

        public templateUrl: string = "/app/account/components/accountEditor/accountEditor.html";

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.entity = scope.entity;

            scope.tryToSave = (form) => {

                if (scope.vm.entity.id) {

                    return this.accountService.update({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/account/list");
                    });
                }
                else {
                    return this.accountService.add({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/account/list");
                    });
                }

            }
        }

    }

    angular.module("app.account").directive("accountEditor", ["$location", "accountService",($location, accountService) => new AccountEditor($location, accountService)]);

}
