module app.common {
    
    class IdentityMenu {

        constructor(private session) {
            
        }

        public templateUrl = "/app/common/components/identityMenu/identityMenu.html";

        public restrict = "E";

        public replace = true;

        public scope = {};

        link = (scope, element, attributes) => {

                scope.session = this.session;
        }
    }

    angular.module("app.common").directive("identityMenu", ["session", (session) => new IdentityMenu(session)]);

}
