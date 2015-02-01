describe("TenantEditor Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("tenant");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/tenant/components/tenantEditor/tenantEditor.html", getStringFromUrl("/app/tenant/components/tenantEditor/tenantEditor.html"));
        element = angular.element("<tenant-editor></tenant-editor>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
