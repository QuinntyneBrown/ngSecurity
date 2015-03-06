var UserModule;
(function (UserModule) {
    var serviceId = "identityService";
    angular.module("user").service(serviceId, ["$http", "alerting", "currentUser", "formEncode", service]);
    function service($http, alerting, currentUser, formEncode) {
        var self = this;
        self.signIn = function (params) {
            var configuration = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
            var data = formEncode({
                username: params.model.username,
                password: params.model.password,
                grant_type: "password"
            });
            return $http.post("/login", data, configuration).then(function (results) {
                return results.data.access_token;
            }).catch(function (error) {
            });
        };
        self.register = function (params) {
            return $http({ method: "POST", url: "api/identity/register", data: JSON.stringify(params.model) }).then(function (results) {
                return results.data.token;
            }).catch(function () {
            });
        };
        self.getCurrentUser = function () {
            return $http({ method: "GET", url: "api/user/getCurrentUser" }).then(function (results) {
                currentUser.set({ data: results.data });
                return currentUser.get();
            }).catch(function () {
            });
        };
        return self;
    }
})(UserModule || (UserModule = {}));
//# sourceMappingURL=identityService.js.map