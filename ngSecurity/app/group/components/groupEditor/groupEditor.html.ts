angular.module("group").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/group/components/groupEditor/groupEditor.html",
		"<div>"+
		"    <hgroup>"+
		"        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Group</h1>"+
		"        <h1 data-ng-hide=\"vm.entity.id\">Create Group</h1>"+
		"    </hgroup>"+
		""+
		"    <form name=\"groupEditor\" role=\"form\" data-ng-submit=\"tryToSave(groupEditor)\" novalidate>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Name"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.name\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <p>"+
		"            <input type=\"submit\" value=\"save\" class=\"btn btn-lrg\" />"+
		"        </p>"+
		"    </form>"+
		"</div>"
	);
}]);
