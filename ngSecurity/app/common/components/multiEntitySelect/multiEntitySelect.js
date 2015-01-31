var CommonModule;
(function (CommonModule) {
    var MultiEntitySelect = (function () {
        function MultiEntitySelect() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/common/components/multiEntitySelect/multiEntitySelect.html";
            this.scope = {
                parentEntities: "=",
                entityService: "="
            };
            this.link = function (scope, element, attributes) {
                scope.parentEntities = scope.parentEntities || [];
                scope.entityNamePlural = attributes.entityNamePlural;
                scope.$watch("selectedId", function () {
                    scope.processSelectedIdChange();
                    scope.selectedId = null;
                });
                scope.processSelectedIdChange = function () {
                    if (scope.selectedId) {
                        for (var i = 0; i < scope.parentEntities.length; i++) {
                            if (scope.parentEntities[i].id == scope.selectedId) {
                                scope.parentEntities.splice(i, 1);
                                return;
                            }
                        }
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == scope.selectedId) {
                                scope.parentEntities.push(scope.vm.entities[i]);
                            }
                        }
                    }
                };
                return scope.entityService.getAll().then(function (results) {
                    scope.vm = {
                        entities: results
                    };
                });
            };
        }
        MultiEntitySelect.componentId = "multiEntitySelect";
        return MultiEntitySelect;
    })();
    angular.module("common").directive(MultiEntitySelect.componentId, function () { return new MultiEntitySelect(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=multiEntitySelect.js.map