var ProfileModule;
(function (ProfileModule) {
    "use strict";
    var ProfileList = (function () {
        function ProfileList(profileService) {
            var _this = this;
            this.profileService = profileService;
            this.$inject = ["profileService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/profile/components/profileList/profileList.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.profileService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.profileService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
        }
        ProfileList.componentId = "profileList";
        return ProfileList;
    })();
    angular.module("profile").directive(ProfileList.componentId, function (profileService) { return new ProfileList(profileService); });
})(ProfileModule || (ProfileModule = {}));
//# sourceMappingURL=profileList.js.map