var CommonModule;
(function (CommonModule) {
    var formEncode = function () {
        return function (data) {
            var pairs = [];
            for (var name in data) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            return pairs.join('&').replace(/%20/g, '+');
        };
    };
    angular.module("core").factory("formEncode", formEncode);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=formEncode.js.map