module UserModule {

    class UserList {

        public static componentId: string = "userList";

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/user/components/userList/userList.html";

        public scope: any = {};

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.remove = (entity) => {
                return this.userService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            return this.userService.getAll().then((results) => {
                return scope.vm.entities = results;
            });
        }

        public $inject: string[] = ["userService"];

        constructor(private userService) {

        }
    }

    angular.module("user").directive(UserList.componentId,(userService) => new UserList(userService));

}