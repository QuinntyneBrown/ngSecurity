angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/roles.html",
		"<div id=\"dashboard-roles\" class=\"two-columns\">"+
		"    <security-menu></security-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        <role-list></role-list>"+
		"    </div>"+
		""+
		"</div>"
	);
}]);
