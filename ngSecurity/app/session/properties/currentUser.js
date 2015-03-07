var app;
(function (app) {
    var session;
    (function (session) {
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
            return CurrentUser;
        })();
        angular.module("app.session").service("currentUser", ["$rootScope", "storage", CurrentUser]);
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=currentUser.js.map