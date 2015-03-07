module app.group {

    class GroupList {

        constructor(private groupService: IGroupService) {

        }

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

            function initialize() {
                return this.groupService.getAll().then((results) => {
                    return scope.vm.entities = results;
                });
            }

            initialize();
        }

    }

    angular.module("app.group").directive("groupList", ["groupService",(groupService) => new GroupList(groupService)]);

}