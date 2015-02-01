var ProfileModule;
(function (ProfileModule) {
    "use strict";
    var ProfileEditor = (function () {
        function ProfileEditor($location, profileService) {
            var _this = this;
            this.$location = $location;
            this.profileService = profileService;
            this.$inject = ["$location", "profileService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/profile/components/profileEditor/profileEditor.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.profileService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                    else {
                        return _this.profileService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                };
            };
        }
        ProfileEditor.componentId = "profileEditor";
        return ProfileEditor;
    })();
    angular.module("profile").directive(ProfileEditor.componentId, function ($location, profileService) { return new ProfileEditor($location, profileService); });
})(ProfileModule || (ProfileModule = {}));
//# sourceMappingURL=profileEditor.js.map