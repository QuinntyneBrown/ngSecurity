angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/components/userDropDownList/userDropDownList.html",
		"<div id=\"user-drop-down-list\">"+
		""+
		"    Choose a user:"+
		"    <select ng-model=\"currentuser.id\""+
		"            data-ng-options=\"u.id as u.name for u in users\"></select>"+
		""+
		"</div>"
	);
}]);
