var AccountModule;
(function (AccountModule) {
    "use strict";
    var AccountEditor = (function () {
        function AccountEditor($location, accountService) {
            var _this = this;
            this.$location = $location;
            this.accountService = accountService;
            this.$inject = ["$location", "accountService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/account/components/accountEditor/accountEditor.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.accountService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/account/list");
                        });
                    }
                    else {
                        return _this.accountService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/account/list");
                        });
                    }
                };
            };
        }
        AccountEditor.componentId = "accountEditor";
        return AccountEditor;
    })();
    angular.module("account").directive(AccountEditor.componentId, function ($location, accountService) { return new AccountEditor($location, accountService); });
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=accountEditor.js.map