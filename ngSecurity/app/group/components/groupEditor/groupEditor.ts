module app.group {

    class GroupEditor {

        constructor(private $location, private groupService) {

        }

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/group/components/groupEditor/groupEditor.html";

        public scope: any = {
            entity: "="
        }

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.entity = scope.entity;

            scope.tryToSave = (form) => {

                if (scope.vm.entity.id) {

                    return this.groupService.update({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/group/list");
                    });
                }
                else {
                    return this.groupService.add({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/group/list");
                    });
                }

            }
        }

    }

    angular.module("app.group").directive("groupEditor", ["$location", "groupService",($location, groupService) => new GroupEditor($location, groupService)]);

}