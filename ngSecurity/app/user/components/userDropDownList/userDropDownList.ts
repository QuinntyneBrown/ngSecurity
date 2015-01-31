module UserModule {

    export class UserDropDownList {

        public templateUrl: string = "/app/user/components/userDropDownList/userDropDownList.html";

        public static componentId: string = "userDropDownList";

        public restrict: string = "E";

        public scope: any = {
            currentuser: "="
        };

        public replace: boolean = true;

        public link = (scope) => {

            scope.users = [
                { id: 0, name: "John" },
                { id: 1, name: "Quinn" },
                { id: 2, name: "Richard" }
            ];
        }

        constructor() {

        }

    }

    angular.module("user").directive(UserDropDownList.componentId, [() => new UserDropDownList()]);
}