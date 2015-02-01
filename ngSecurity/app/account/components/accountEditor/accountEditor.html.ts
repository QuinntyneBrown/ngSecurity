angular.module("account").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/account/components/accountEditor/accountEditor.html",
		"<div>"+
		"    <hgroup>"+
		"        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Account</h1>"+
		"        <h1 data-ng-hide=\"vm.entity.id\">Create Account</h1>"+
		"    </hgroup>"+
		""+
		"    <form name=\"accountEditor\" role=\"form\" data-ng-submit=\"tryToSave(accountEditor)\" novalidate>"+
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
