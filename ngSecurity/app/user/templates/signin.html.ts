angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/templates/signin.html",
		"<div>"+
		""+
		"    "+
		""+
		"    <sign-in-form></sign-in-form>"+
		"</div>"
	);
}]);
