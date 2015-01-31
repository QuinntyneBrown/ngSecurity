angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/splash.html",
		"<div>"+
		"    <h1>ngSecurity</h1>"+
		"</div>"
	);
}]);
