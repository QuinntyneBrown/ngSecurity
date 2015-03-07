var app;
(function (app) {
    var group;
    (function (group) {
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
            }
            return GroupEditor;
        })();
        angular.module("app.group").directive("groupEditor", ["$location", "groupService", function ($location, groupService) { return new GroupEditor($location, groupService); }]);
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=groupEditor.js.map