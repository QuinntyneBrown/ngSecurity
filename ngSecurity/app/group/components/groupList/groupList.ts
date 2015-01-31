module GroupModule {

    class GroupList {

        public static componentId: string = "groupList";

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/group/components/groupList/groupList.html";

        public scope: any = {};

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.remove = (entity) => {
                return this.groupService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            return this.groupService.getAll().then((results) => {
                return scope.vm.entities = results;
            });
        }

        public $inject: string[] = ["groupService"];

        constructor(private groupService) {

        }
    }

    angular.module("group").directive(GroupList.componentId,(groupService) => new GroupList(groupService));

}