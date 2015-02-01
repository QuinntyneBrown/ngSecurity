angular.module("profile").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/profile/components/profileEditor/profileEditor.html",
		"<div>"+
		"    <hgroup>"+
		"        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Profile</h1>"+
		"        <h1 data-ng-hide=\"vm.entity.id\">Create Profile</h1>"+
		"    </hgroup>"+
		""+
		"    <form name=\"profileEditor\" role=\"form\" data-ng-submit=\"tryToSave(profileEditor)\" novalidate>"+
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
