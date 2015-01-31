angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/addrole.html",
		"<div id=\"security-add-role\" class=\"two-columns\">"+
		"    "+
		"    <security-menu></security-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        "+
		"        <role-editor></role-editor>"+
		""+
		"    </div>"+
		""+
		"</div>"
	);
}]);
