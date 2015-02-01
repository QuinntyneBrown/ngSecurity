module TenantModule {

    "use strict";

    class TenantList {

        public $inject: string[] = ["tenantService"];

        constructor(private tenantService) {

        }

        public static componentId: string = "tenantList";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/tenant/components/tenantList/tenantList.html";

        public link = (scope, element, attributes) => {
            scope.vm = {};

            scope.vm.remove = (entity) => {

                return this.tenantService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            return this.tenantService.getAll().then((results) => {
                return scope.vm.entities = results;
            });

        }

    }

    angular.module("tenant").directive(TenantList.componentId,(tenantService) => new TenantList(tenantService));

}
