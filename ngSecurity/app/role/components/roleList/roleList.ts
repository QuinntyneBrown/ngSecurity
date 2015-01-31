module RoleModule {

    class RoleList {

        public static componentId: string = "roleList";

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/role/components/roleList/roleList.html";

        public scope: any = {};

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.remove = (entity) => {
                return this.roleService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            return this.roleService.getAll().then((results) => {
                return scope.vm.entities = results;
            });
        }

        public $inject: string[] = ["roleService"];

        constructor(private roleService) {

        }
    }

    angular.module("role").directive(RoleList.componentId,(roleService) => new RoleList(roleService));

}