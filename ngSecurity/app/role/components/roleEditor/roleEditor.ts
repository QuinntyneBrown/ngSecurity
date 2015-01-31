module RoleModule {

    class RoleEditor {

        public static componentId: string = "roleEditor";

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/role/components/roleEditor/roleEditor.html";

        public scope: any = {
            entity: "="
        }

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.entity = scope.entity;

            scope.tryToSave = (form) => {

                if (scope.vm.entity.id) {

                    return this.roleService.update({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/role/list");
                    });
                }
                else {
                    return this.roleService.add({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/role/list");
                    });
                }

            }
        }

        public $inject: string[] = ["$location", "roleService"];

        constructor(private $location, private roleService) {

        }
    }

    angular.module("role").directive(RoleEditor.componentId,($location, roleService) => new RoleEditor($location, roleService));

}