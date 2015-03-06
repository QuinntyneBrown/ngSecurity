var app;
(function (app) {
    var session;
    (function (session) {
        "use strict";
        function service($rootScope, storage) {
            var self = this;
            var data = null;
            var name = "configuration";
            self.get = function get() {
                if (data) {
                    return data;
                }
                try {
                    data = storage.getByName({ name: name }).value;
                }
                catch (error) {
                }
                return data;
            };
            self.set = function set(params) {
                data = params.data;
                storage.put({ name: name, value: params.data });
            };
            $rootScope.$on("$routeChangeStart", function routeChange(event, newUrl, oldUrl) {
                if (newUrl.originalPath == "/signin") {
                    data = null;
                    self.set({ data: null });
                }
            });
            return self;
        }
        angular.module("app.session").service("configuration", ["$rootScope", "storage", service]);
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=configuration.js.map