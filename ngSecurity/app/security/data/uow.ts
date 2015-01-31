module SecurityModule {
    

    class SecurityUow {
        
        public static serviceId: string = "securityUow";

        public $inject: string[] = ["groupService", "identityService", "roleService","userService"];

        public identity = this.identityService;
        public groups = this.groupService;
        public roles = this.roleService;
        public users = this.userService;
        constructor(public groupService, public identityService, public roleService, public userService) {
            
        }
    }

    angular.module("security").service(SecurityUow.serviceId,(groupService, identityService, roleService, userService) => new SecurityUow(groupService, identityService, roleService, userService));
} 