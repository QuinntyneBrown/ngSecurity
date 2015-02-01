var AccountModule;
(function (AccountModule) {
    "use strict";
    var AccountList = (function () {
        function AccountList(accountService) {
            var _this = this;
            this.accountService = accountService;
            this.$inject = ["accountService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/account/components/accountList/accountList.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.accountService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.accountService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
        }
        AccountList.componentId = "accountList";
        return AccountList;
    })();
    angular.module("account").directive(AccountList.componentId, function (accountService) { return new AccountList(accountService); });
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=accountList.js.map