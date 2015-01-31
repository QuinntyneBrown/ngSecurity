describe("EntityAdminMenu Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/entityAdminMenu/entityAdminMenu.html", getStringFromUrl("/app/common/components/entityAdminMenu/entityAdminMenu.html"));
        element = angular.element("<entity-admin-menu entity-name-pluralized=\"Roles\" entity-name=\"Role\"></entity-admin-menu>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("IdentityMenu Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("security");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/security/components/identityMenu/identityMenu.html", getStringFromUrl("/app/security/components/identityMenu/identityMenu.html"));
        element = angular.element("<identity-menu></identity-menu>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
