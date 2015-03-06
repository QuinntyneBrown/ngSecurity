var app;
(function (app) {
    var session;
    (function (session) {
        angular.module("app.session", [
            "app.configuration",
            "app.common",
            "app.core"
        ]);
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=session.module.js.map