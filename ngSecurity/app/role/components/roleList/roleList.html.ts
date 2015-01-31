angular.module("role").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/role/components/roleList/roleList.html",
		"<div>"+
		""+
		"    <hgroup>"+
		"        <h1>Roles</h1>"+
		"    </hgroup>"+
		""+
		"    <a href=\"#/role/add\">Add</a>"+
		""+
		"    <table>"+
		"        <thead>"+
		"            <tr>"+
		"                <th>Id</th>"+
		"                <th>Name</th>"+
		"                <th>Actions</th>"+
		"            </tr>"+
		"        </thead>"+
		"        <tbody>"+
		"            <tr data-ng-repeat=\"entity in vm.entities\">"+
		"                <td><a>{{ entity.id }}</a></td>"+
		"                <td><a>{{ entity.name }}</a></td>"+
		"                <td><a href=\"#/role/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;<a data-ng-click=\"vm.remove(entity)\">delete</a></td>"+
		"            </tr>"+
		"        </tbody>"+
		"    </table>"+
		"</div>"
	);
}]);
