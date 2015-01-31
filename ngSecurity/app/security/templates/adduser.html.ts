angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/adduser.html",
		"<div id=\"security-add-user\" class=\"two-columns\">"+
		"    <security-menu></security-menu>"+
		"    "+
		"    <div class=\"sub-view\">"+
		"        <user-editor></user-editor>"+
		"    </div>       "+
		"</div>"
	);
}]);
