angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/templates/edit.html",
		"<div class=\"sub-view\">"+
		"    <user-editor></user-editor>"+
		"</div>"
	);
}]);
