describe("AccountEditor Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("app.account");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/account/components/accountEditor/accountEditor.html", getStringFromUrl("/app/account/components/accountEditor/accountEditor.html"));
        element = angular.element("<account-editor></account-editor>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("AccountList Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("app.account");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/account/components/accountList/accountList.html", getStringFromUrl("/app/account/components/accountList/accountList.html"));
        element = angular.element("<account-list></account-list>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("AlertItem Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/alertItem/alertItem.html", getStringFromUrl("/app/common/components/alertItem/alertItem.html"));
        element = angular.element("<alert-item></alert-item>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("Alerts Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/alerts/alerts.html", getStringFromUrl("/app/common/components/alerts/alerts.html"));
        element = angular.element("<alerts></alerts>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
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
describe("ProfileList Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("profile");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/profile/components/profileList/profileList.html", getStringFromUrl("/app/profile/components/profileList/profileList.html"));
        element = angular.element("<profile-list></profile-list>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
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
