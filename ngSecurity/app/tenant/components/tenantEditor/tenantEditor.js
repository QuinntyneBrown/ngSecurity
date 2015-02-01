var TenantModule;
(function (TenantModule) {
    "use strict";
    var TenantEditor = (function () {
        function TenantEditor($location, tenantService) {
            var _this = this;
            this.$location = $location;
            this.tenantService = tenantService;
            this.$inject = ["$location", "tenantService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/tenant/components/tenantEditor/tenantEditor.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.tenantService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/tenant/list");
                        });
                    }
                    else {
                        return _this.tenantService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/tenant/list");
                        });
                    }
                };
            };
        }
        TenantEditor.componentId = "tenantEditor";
        return TenantEditor;
    })();
    angular.module("tenant").directive(TenantEditor.componentId, function ($location, tenantService) { return new TenantEditor($location, tenantService); });
})(TenantModule || (TenantModule = {}));
//# sourceMappingURL=tenantEditor.js.map