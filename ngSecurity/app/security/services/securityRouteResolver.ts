module SecurityModule {
    

    class SecurityRouteResolver implements IRouteResolver {
        
        public static serviceId: string = "securityRouteResolver";

        resolveRoute = () => {

            return this.configurationService.get().then(() => {

                return this.securityUow.identity.getCurrentUser().then(() => {

                    if (this.$route.current.params.userid) {
                        console.log("edit user");
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

        constructor(private configurationService, private securityUow, private $q, private $route) {
            
        }
    }

    angular.module("security").service(SecurityRouteResolver.serviceId,(configurationService, securityUow, $q, $route) => new SecurityRouteResolver(configurationService, securityUow, $q, $route));
} 