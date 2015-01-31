var UserModule;
(function (UserModule) {
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
    UserModule.UserDropDownList = UserDropDownList;
    angular.module("user").directive(UserDropDownList.componentId, [function () { return new UserDropDownList(); }]);
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userDropDownList.js.map