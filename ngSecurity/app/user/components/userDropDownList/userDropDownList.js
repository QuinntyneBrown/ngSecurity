var app;
(function (app) {
    var user;
    (function (user) {
        var UserDropDownList = (function () {
            function UserDropDownList() {
                this.templateUrl = "/app/user/components/userDropDownList/userDropDownList.html";
                this.restrict = "E";
                this.scope = {
                    currentuser: "="
                };
                this.replace = true;
                this.link = function (scope) {
                    scope.users = [
                        { id: 0, name: "John" },
                        { id: 1, name: "Quinn" },
                        { id: 2, name: "Richard" }
                    ];
                };
            }
            UserDropDownList.componentId = "userDropDownList";
            return UserDropDownList;
        })();
        user.UserDropDownList = UserDropDownList;
        angular.module("user").directive(UserDropDownList.componentId, [function () { return new UserDropDownList(); }]);
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=userDropDownList.js.map