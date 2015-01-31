module GroupModule {

    class GroupEditor {

        public static componentId: string = "groupEditor";

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

        public $inject: string[] = ["$location","groupService"];

        constructor(private $location, private groupService) {

        }
    }

    angular.module("group").directive(GroupEditor.componentId,($location, groupService) => new GroupEditor($location, groupService));

}