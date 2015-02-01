var AccountModule;
(function (AccountModule) {
    "use strict";
    var AccountEditor = (function () {
        function AccountEditor(accountService) {
            this.accountService = accountService;
            this.$inject = ["accountService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/account/components/accountEditor/accountEditor.html";
            this.link = function (scope, element, attributes) {
            };
        }
        AccountEditor.componentId = "accountEditor";
        return AccountEditor;
    })();
    angular.module("account").directive(AccountEditor.componentId, function (accountService) { return new AccountEditor(accountService); });
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=accountEditor.js.map