module app.profile {

    "use strict";

    class ProfileList {

        public $inject: string[] = ["profileService"];

        constructor(private profileService) {

        }

        public static componentId: string = "profileList";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/profile/components/profileList/profileList.html";

        public link = (scope, element, attributes) => {
            scope.vm = {};

            scope.vm.remove = (entity) => {

                return this.profileService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            return this.profileService.getAll().then((results) => {
                return scope.vm.entities = results;
            });

        }

    }

    angular.module("profile").directive(ProfileList.componentId,(profileService) => new ProfileList(profileService));

}
