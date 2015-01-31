angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/security.html",
		"<div id=\"security\" class=\"two-columns\">"+
		""+
		"    <security-menu></security-menu>"+
		"    "+
		"    <div class=\"sub-view\">"+
		"        "+
		"    </div>"+
		""+
		"</div>"
	);
}]);
