angular.module("tenant").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/tenant/components/tenantEditor/tenantEditor.html",
		"<div>"+
		"    <hgroup>"+
		"        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Tenant</h1>"+
		"        <h1 data-ng-hide=\"vm.entity.id\">Create Tenant</h1>"+
		"    </hgroup>"+
		""+
		"    <form name=\"tenantEditor\" role=\"form\" data-ng-submit=\"tryToSave(tenantEditor)\" novalidate>"+
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
