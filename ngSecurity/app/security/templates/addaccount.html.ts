angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/addaccount.html",
		"<div id=\"security-edit-account\" class=\"two-columns\">"+
		""+
		"    <security-menu></security-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        "+
		"        <account-editor></account-editor>"+
		""+
		"    </div>"+
		""+
		"</div>"
	);
}]);
