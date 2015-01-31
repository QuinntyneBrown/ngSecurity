angular.module("common").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/common/components/identityMenu/identityMenu.html",
		"<div id=\"core-identity-menu\">"+
		""+
		"    <ul class=\"menu-bar\" data-ng-if=\"!session.isLoggedIn()\">"+
		""+
		"        <li><a href=\"#/signin\">SIGN IN</a></li>"+
		""+
		"        <li><a href=\"#/register\">REGISTER</a></li>"+
		""+
		"    </ul>"+
		""+
		"    <ul class=\"menu-bar\" data-ng-if=\"session.isLoggedIn()\">"+
		""+
		"        <li><a>Hi {{ session.getCurrentUser().username }}!</a></li>"+
		""+
		"        <li><a class=\"link\" data-ng-click=\"session.signOut()\">SIGN OUT</a></li>"+
		""+
		"    </ul>"+
		""+
		"</div>"
	);
}]);
