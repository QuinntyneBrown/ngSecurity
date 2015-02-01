var TenantModule;
(function (TenantModule) {
    "use strict";
    var TenantEditor = (function () {
        function TenantEditor(tenantService) {
            this.tenantService = tenantService;
            this.$inject = ["tenantService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/tenant/components/tenantEditor/tenantEditor.html";
            this.link = function (scope, element, attributes) {
            };
        }
        TenantEditor.componentId = "tenantEditor";
        return TenantEditor;
    })();
    angular.module("tenant").directive(TenantEditor.componentId, function (tenantService) { return new TenantEditor(tenantService); });
})(TenantModule || (TenantModule = {}));
//# sourceMappingURL=tenantEditor.js.map