module app.profile {

    "use strict";

    class ProfileEditor {

        public $inject: string[] = ["$location","profileService"];

        constructor(private $location, private profileService) {

        }

        public static componentId: string = "profileEditor";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/profile/components/profileEditor/profileEditor.html";

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.entity = scope.entity;

            scope.tryToSave = (form) => {

                if (scope.vm.entity.id) {

                    return this.profileService.update({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/profile/list");
                    });
                }
                else {
                    return this.profileService.add({ entity: scope.vm.entity }).then((results) => {
                        this.$location.path("/profile/list");
                    });
                }

            }
        }

    }

    angular.module("profile").directive(ProfileEditor.componentId,($location, profileService) => new ProfileEditor($location, profileService));

}
