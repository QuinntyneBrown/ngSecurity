angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/components/signinForm/signinForm.html",
		"<div>"+
		"    <hgroup><h1>Sign In</h1></hgroup>"+
		""+
		"    <form name=\"signInForm\" id=\"sign-in-form\" data-ng-submit=\"tryToSignIn()\" novalidate>"+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Username"+
		"            </label>"+
		"            <input data-ng-model=\"vm.username\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Password"+
		"            </label>"+
		"            <input data-ng-model=\"vm.password\" type=\"password\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <p>"+
		"            <input type=\"submit\" value=\"sign in\" class=\"btn btn-lg\" />"+
		"        </p>"+
		""+
		"        <div class=\"form-group\">"+
		"            <input type=\"checkbox\" data-ng-model=\"model.rememberMe\" />"+
		"            <label>Keep me signed in</label>"+
		"        </div>"+
		"    </form>"+
		"</div>"
	);
}]);
