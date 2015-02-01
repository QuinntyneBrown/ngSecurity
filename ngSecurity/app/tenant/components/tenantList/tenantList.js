var TenantModule;
(function (TenantModule) {
    "use strict";
    var TenantList = (function () {
        function TenantList(tenantService) {
            var _this = this;
            this.tenantService = tenantService;
            this.$inject = ["tenantService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/tenant/components/tenantList/tenantList.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.tenantService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.tenantService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
        }
        TenantList.componentId = "tenantList";
        return TenantList;
    })();
    angular.module("tenant").directive(TenantList.componentId, function (tenantService) { return new TenantList(tenantService); });
})(TenantModule || (TenantModule = {}));
//# sourceMappingURL=tenantList.js.map