var app;
(function (app) {
    var group;
    (function (group) {
        var GroupList = (function () {
            function GroupList(groupService) {
                var _this = this;
                this.groupService = groupService;
                this.replace = true;
                this.restrict = "E";
                this.templateUrl = "/app/group/components/groupList/groupList.html";
                this.scope = {};
                this.link = function (scope, element, attributes) {
                    scope.vm = {};
                    scope.vm.remove = function (entity) {
                        return _this.groupService.remove({ id: entity.id }).then(function () {
                            for (var i = 0; i < scope.vm.entities.length; i++) {
                                if (scope.vm.entities[i].id == entity.id) {
                                    scope.vm.entities.splice(i, 1);
                                }
                            }
                        }).catch(function (error) {
                        });
                    };
                    return _this.groupService.getAll().then(function (results) {
                        return scope.vm.entities = results;
                    });
                };
                this.$inject = ["groupService"];
            }
            GroupList.componentId = "groupList";
            return GroupList;
        })();
        angular.module("app.group").directive(GroupList.componentId, function (groupService) { return new GroupList(groupService); });
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=groupList.js.map