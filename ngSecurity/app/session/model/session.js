var SessionModule;
(function (SessionModule) {
    var serviceId = "session";
    angular.module("session").service(serviceId, ["$location", "$http", "$q", "configuration", "configurationService", "currentUser", "token", service]);
    function service($location, $http, $q, configuration, configurationService, currentUser, token) {
        var self = this;
        self.isLoggedIn = function () {
            if (self.getCurrentUser() != null && self.getCurrentUser() != "") {
                return (self.getCurrentUser().username);
            }
        };
        self.isUserInRole = function (roleName) {
            if (self.isLoggedIn()) {
                var user = self.getCurrentUser();
                for (var i = 0; i < user.roles.length; i++) {
                    if (roleName == user.roles[i].name) {
                        return true;
                    }
                }
            }
            return false;
        };
        self.getCurrentUser = function () {
            return currentUser.get();
        };
        self.signOut = function () {
            $http({ method: "GET", url: "api/identity/signout" }).then(function () {
            });
            token.set({ data: null });
            currentUser.set({ data: null });
            $location.path("/");
        };
        self.setConfigurationAsync = function () {
            if (configuration.get()) {
                return $q.when(configuration.get());
            }
            return configurationService.get().then(function (results) {
                configuration.set({ data: results });
                return configuration.get();
            });
        };
        self.getConfiguration = function () {
            return configuration.get();
        };
        return self;
    }
    var Session = (function () {
        function Session($location, $http, $q, configuration, configurationService, currentUser, token) {
            this.$location = $location;
            this.$http = $http;
            this.$q = $q;
            this.configuration = configuration;
            this.configurationService = configurationService;
            this.currentUser = currentUser;
            this.token = token;
            this.isLoggedIn = function () {
                return true;
            };
            this.isUserInRole = function (roleName) {
                return true;
            };
            this.getCurrentUser = function () {
                return {};
            };
            this.signOut = function () {
            };
            this.setConfigurationAsync = function () {
            };
            this.getConfiguration = function () {
                return {};
            };
        }
        Session.ServiceId = "session";
        return Session;
    })();
    SessionModule.Session = Session;
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=session.js.map