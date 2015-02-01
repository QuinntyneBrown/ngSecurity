module TenantModule {

    "use strict";

    class TenantEditor {

        public $inject: string[] = ["tenantService"];

        constructor(private tenantService) {

        }

        public static componentId: string = "tenantEditor";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/tenant/components/tenantEditor/tenantEditor.html";

        public link = (scope, element, attributes) => {


        }

    }

    angular.module("tenant").directive(TenantEditor.componentId,(tenantService) => new TenantEditor(tenantService));

}
