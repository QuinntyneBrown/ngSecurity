angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/templates/register.html",
		"<div>"+
		""+
		"    <registration-form></registration-form>"+
		""+
		"</div>"
	);
}]);
