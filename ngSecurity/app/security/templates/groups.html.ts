angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/groups.html",
		"<div id=\"dashboard-groups\" class=\"two-columns\">"+
		"    <security-menu></security-menu>"+
		"    "+
		"    <div class=\"sub-view\">"+
		"        <group-list></group-list>"+
		"    </div>"+
		""+
		"</div>"
	);
}]);
