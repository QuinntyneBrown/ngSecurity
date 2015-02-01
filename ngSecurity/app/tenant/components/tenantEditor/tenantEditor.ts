module TenantModule {

    "use strict";

    class TenantEditor {

        public $inject: string[] = ["$location", "tenantService"];

        constructor(private $location, private tenantService) {

        }

        public static componentId: string = "tenantEditor";

        public restrict: string = "E";

        public replace: boolean = true;

        public scope = {};

        public templateUrl: string = "/app/tenant/components/tenantEditor/tenantEditor.html";

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.entity = scope.entity;

            scope.tryToSave = (form) => {

                if (scope.vm.entity.id) {

                    return this.tenantService.update({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/tenant/list");
                    });
                }
                else {
                    return this.tenantService.add({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/tenant/list");
                    });
                }

            }
        }

    }

    angular.module("tenant").directive(TenantEditor.componentId,($location, tenantService) => new TenantEditor($location, tenantService));

}
