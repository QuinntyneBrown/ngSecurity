angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/accounts.html",
		"<div id=\"security-accounts\" class=\"two-columns\">"+
		""+
		"    <security-menu></security-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        <account-list></account-list>"+
		"    </div>"+
		"    "+
		"</div>"
	);
}]);
