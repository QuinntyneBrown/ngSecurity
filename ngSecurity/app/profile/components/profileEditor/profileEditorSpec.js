describe("ProfileEditor Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("profile");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/profile/components/profileEditor/profileEditor.html", getStringFromUrl("/app/profile/components/profileEditor/profileEditor.html"));
        element = angular.element("<profile-editor></profile-editor>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
