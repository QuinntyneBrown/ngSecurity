var GroupModule;
(function (GroupModule) {
    var GroupEditor = (function () {
        function GroupEditor($location, groupService) {
            var _this = this;
            this.$location = $location;
            this.groupService = groupService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/group/components/groupEditor/groupEditor.html";
            this.scope = {
                entity: "="
            };
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.groupService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/group/list");
                        });
                    }
                    else {
                        return _this.groupService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/group/list");
                        });
                    }
                };
            };
            this.$inject = ["$location", "groupService"];
        }
        GroupEditor.componentId = "groupEditor";
        return GroupEditor;
    })();
    angular.module("group").directive(GroupEditor.componentId, function ($location, groupService) { return new GroupEditor($location, groupService); });
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=groupEditor.js.map