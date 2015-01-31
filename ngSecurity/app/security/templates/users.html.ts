angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/users.html",
		"<div id=\"dashboard-users\" class=\"two-columns\">"+
		"    "+
		"    <security-menu></security-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        "+
		"        <user-list></user-list>"+
		""+
		"    </div>"+
		""+
		"</div>"
	);
}]);
