﻿module UserModule {

    var serviceId = "identityService";

    angular.module("user").service(serviceId, ["$http", "currentUser", "formEncode", service]);

    function service($http, currentUser, formEncode) {

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
                return results;
            }).catch((error) => {
                console.log(error);
            });
            //return $http({
            //    method: "POST",
            //    url: "/token",
            //    data: JSON.stringify(params.model),
            //}).then((results) => {
            //    return results.data.token;
            //}).catch((error) => {
            //    console.log(error);
            //});
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