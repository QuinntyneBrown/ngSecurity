describe("TenantList Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("tenant");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/tenant/components/tenantList/tenantList.html", getStringFromUrl("/app/tenant/components/tenantList/tenantList.html"));
        element = angular.element("<tenant-list></tenant-list>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
