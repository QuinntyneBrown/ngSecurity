angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/templates/list.html",
		"<div class=\"sub-view\">"+
		"    <user-list-view></user-list-view>"+
		"</div>"
	);
}]);
