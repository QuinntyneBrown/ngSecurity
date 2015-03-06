module app.user {

    var serviceId = "identityService";

    angular.module("app.user").service(serviceId, ["$http", "alerting", "currentUser", "formEncode", service]);

    function service($http, alerting, currentUser, formEncode) {

        var self = this;

        self.signIn = (params) => {

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

            return $http.post("/login", data, configuration)
                .then((results) => {
                return results.data.access_token;
            }).catch((error) => {

            });

        };

        self.register = (params) => {
            return $http({ method: "POST", url: "api/identity/register", data: JSON.stringify(params.model) }).then((results) => {
                return results.data.token;
            }).catch(() => {

            });
        };

        self.getCurrentUser = () => {
            return $http({ method: "GET", url: "api/user/getCurrentUser" }).then((results) => {
                currentUser.set({ data: results.data });
                return currentUser.get();
            }).catch(() => {
                
            });
        };

        return self;
    }

}