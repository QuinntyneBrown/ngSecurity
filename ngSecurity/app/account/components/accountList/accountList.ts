module app.account {

    "use strict";

    class AccountList {

        constructor(private accountService) {

        }

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/account/components/accountList/accountList.html";

        public link = (scope, element, attributes) => {
            scope.vm = {};

            scope.vm.remove = (entity) => {
                return this.accountService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            return this.accountService.getAll().then((results) => {
                return scope.vm.entities = results;
            });

        }

    }

    angular.module("app.account").directive("accountList",["accountService",(accountService) => new AccountList(accountService)]);

}
