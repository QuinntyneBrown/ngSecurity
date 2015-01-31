angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/components/userList/userList.html",
		"<div>"+
		""+
		"    <hgroup>"+
		"        <h1>Users</h1>"+
		"    </hgroup>"+
		""+
		"    <a href=\"#/user/add\">Add</a>"+
		""+
		"    <table>"+
		"        <thead>"+
		"            <tr>"+
		"                <th>Id</th>"+
		"                <th>Username</th>"+
		"                <th>First Name</th>"+
		"                <th>Last Name</th>"+
		"                <th>Actions</th>"+
		"            </tr>"+
		"        </thead>"+
		"        <tbody>"+
		"            <tr data-ng-repeat=\"entity in vm.entities\">"+
		"                <td><a>{{ entity.id }}</a></td>"+
		"                <td><a>{{ entity.username }}</a></td>"+
		"                <td><a>{{ entity.firstname }}</a></td>"+
		"                <td><a>{{ entity.lastname }}</a></td>"+
		"                <td>"+
		"                    <a href=\"#/user/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;"+
		"                    <a href=\"#/user/changepassword/{{ entity.id }}\">change password</a>&nbsp;|&nbsp;"+
		"                    <a data-ng-click=\"vm.remove(entity)\">delete</a>"+
		"                </td>"+
		"            </tr>"+
		"        </tbody>"+
		"    </table>"+
		"</div>"
	);
}]);
