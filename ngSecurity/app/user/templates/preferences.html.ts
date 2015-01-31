angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/templates/preferences.html",
		"<div>"+
		"    {{ vm.pageTitle }}"+
		"</div>"
	);
}]);
