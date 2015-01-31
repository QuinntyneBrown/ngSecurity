angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/addgroup.html",
		"<div id=\"dashboard-add-group\" class=\"two-columns\">"+
		"    "+
		"    <security-menu></security-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        "+
		"        <group-editor></group-editor>"+
		""+
		"    </div>"+
		""+
		"</div>"
	);
}]);
