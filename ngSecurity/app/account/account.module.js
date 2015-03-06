var app;
(function (app) {
    var account;
    (function (account) {
        angular.module("app.account", [
            "app.configuration",
            "app.common",
            "app.core",
            "app.session",
            "ngRoute"
        ]);
    })(account = app.account || (app.account = {}));
})(app || (app = {}));
//# sourceMappingURL=account.module.js.map