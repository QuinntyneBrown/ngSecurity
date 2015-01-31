angular.module("group").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/group/components/groupList/groupList.html",
		"<div>"+
		""+
		"    <hgroup>"+
		"        <h1>Groups</h1>"+
		"    </hgroup>"+
		""+
		"    <a href=\"#/group/add\">Add</a>"+
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
		"                <td><a href=\"#/group/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;<a data-ng-click=\"vm.remove(entity)\">delete</a></td>"+
		"            </tr>"+
		"        </tbody>"+
		"    </table>"+
		"</div>"
	);
}]);
