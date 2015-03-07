module app.security {
    

    class SecurityRouteResolver implements IRouteResolver {
        
        constructor(private configurationService, private securityUow, private $q, private $route) {

        }

        resolveRoute = () => {

            return this.configurationService.get().then(() => {

                return this.securityUow.identity.getCurrentUser().then(() => {

                    if (this.$route.current.params.userid) {
                        
                        return this.$q.all([
                            this.securityUow.roles.getAll(),
                            this.securityUow.groups.getAll(),
                            this.securityUow.users.getById({ id: this.$route.current.params.userid })
                        ]).then((results) => {

                            return results;
                        });
                    }

                    if (this.$route.current.params.roleid) {
                        return this.$q.all([
                            this.securityUow.roles.getById({ id: this.$route.current.params.roleid })
                        ]).then((results) => {
                            return results;
                        });
                    }

                    if (this.$route.current.params.groupid) {
                        return this.$q.all([
                            this.securityUow.groups.getById({ id: this.$route.current.params.groupid })
                        ]).then((results) => {

                            return results;
                        });
                    }

                    return true;
                });
            });
        }


    }

    angular.module("app.security").service("securityRouteResolver", ["configurationService", "securityUow", "$q", "$route", SecurityRouteResolver]);
} 