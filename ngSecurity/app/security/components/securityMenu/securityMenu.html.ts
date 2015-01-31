angular.module("security").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/security/components/securityMenu/securityMenu.html",
		"<div id=\"security-menu\" class=\"sub-menu\">"+
		"    "+
		"    <entity-admin-menu entity-name-pluralized=\"Accounts\" entity-name=\"Account\"></entity-admin-menu>"+
		"    "+
		"    <entity-admin-menu entity-name-pluralized=\"Profiles\" entity-name=\"Profile\"></entity-admin-menu>"+
		""+
		"    <entity-admin-menu entity-name-pluralized=\"Users\" entity-name=\"User\"></entity-admin-menu>"+
		"    "+
		"    <entity-admin-menu entity-name-pluralized=\"Groups\" entity-name=\"Group\"></entity-admin-menu>"+
		"    "+
		"    <entity-admin-menu entity-name-pluralized=\"Roles\" entity-name=\"Role\"></entity-admin-menu>"+
		"    "+
		"    <entity-admin-menu entity-name-pluralized=\"Tenants\" entity-name=\"Tenant\"></entity-admin-menu>"+
		""+
		""+
		"</div>"
	);
}]);
