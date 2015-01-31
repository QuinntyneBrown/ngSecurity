(function () {
    "use strict";
    function preferencesService($http, $q, configuration) {
        var _this = this;
        var self = this;
        this.$q = $q;
        self.getClientPreferences = function () {
            var deferred = _this.$q.defer();
            deferred.resolve({ "Server": { "RecentPoLimit": 5 }, "Client": { "PlaceCallUse": "Skype", "StartScreen": "Dashboard", "PoDisplayLimit": "15", "PoOrderBy": "Due Date", "PoOrder": "Descending", "RecentPoLimit": "5" } });
            return deferred.promise;
        };
        return self;
    }
    preferencesService.$inject = ["$http", "$q", "configuration"];
    angular.module("user").service("preferencesService", preferencesService);
})();
//# sourceMappingURL=preferencesService.js.map