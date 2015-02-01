module AccountModule {

    "use strict";

    class AccountEditor {

        public $inject: string[] = ["accountService"];

        constructor(private accountService) {

        }

        public static componentId: string = "accountEditor";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/account/components/accountEditor/accountEditor.html";

        public link = (scope, element, attributes) => {


        }

    }

    angular.module("account").directive(AccountEditor.componentId,(accountService) => new AccountEditor(accountService));

}
