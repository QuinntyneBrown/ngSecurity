angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/templates/signin.html",
		"<div>"+
		"    <sign-in-form></sign-in-form>"+
		"</div>"
	);
}]);
