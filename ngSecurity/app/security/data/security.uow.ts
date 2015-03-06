module app.security {
    
    class SecurityUow {
        
        public identity = this.identityService;
        public groups = this.groupService;
        public roles = this.roleService;
        public users = this.userService;

        constructor(public groupService, public identityService, public roleService, public userService) {
            
        }
    }

    angular.module("app.security").service("securityUow", ["groupService", "identityService", "roleService", "userService",SecurityUow]);
} 