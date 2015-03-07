module app.user {
      
    function service($q, $route, configurationService, userService) {

        var self = this;

        self.resolveRoute = (params) => {

            return configurationService.get().then(() => {
                if (params) {
                    switch (params.route) {

                    case "/admin/users":
                        return userService.getAll().then(() => {

                        });
                        break;

                    case "/admin/user/edit/:id":
                        return userService.getById({ id: $route.params.id }).then(() => {

                        });
                        break;
                    }
                }
            }).catch((error) => {

            });

        };

        return self;

    };

    angular.module("app.user").service("userRouteResolver", ["$q", "$route", "configurationService", "userService", service]);
}
