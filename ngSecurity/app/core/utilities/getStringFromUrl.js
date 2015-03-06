var app;
(function (app) {
    var core;
    (function (core) {
        "use strict";
        function getStringFromUrl(url) {
            var request = new XMLHttpRequest();
            var response = null;
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        response = request.responseText;
                    }
                }
            };
            request.open("GET", url, false);
            request.send(null);
            return response;
        }
        angular.module("core").value("getStringFromUrl", getStringFromUrl);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=getStringFromUrl.js.map