var SessionModule;
(function (SessionModule) {
    angular.module("session").service("currentUser", function ($rootScope, storage) { return new CurrentUser($rootScope, storage); });
    var CurrentUser = (function () {
        function CurrentUser($rootScope, storage) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.storage = storage;
            this.name = "currentUser";
            this.get = function () {
                if (_this.data) {
                    return _this.data;
                }
                try {
                    _this.data = _this.storage.getByName({ name: name }).value;
                }
                catch (error) {
                }
                return _this.data;
            };
            this.set = function (value) {
                _this.data = value.data;
                _this.storage.put({ name: name, value: value.data });
            };
            $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
                if (newUrl.originalPath == "/signin") {
                    _this.data = null;
                    _this.set({ data: null });
                }
            });
        }
        CurrentUser.$inject = ["$rootScope", "storage"];
        return CurrentUser;
    })();
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=currentUser.js.map