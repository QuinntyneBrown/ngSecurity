angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/changepassword.html",
		"<div id=\"security-change-password\" class=\"two-columns\">"+
		"    <security-menu></security-menu>"+
		""+
		"    <div class=\"sub-view\">"+
		"        <change-password-form></change-password-form>"+
		"    </div>"+
		"</div>"
	);
}]);
