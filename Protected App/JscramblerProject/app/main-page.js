q4CCCC.i = function () {
    return typeof q4CCCC.q.q === 'function' ? q4CCCC.q.q.apply(q4CCCC.q, arguments) : q4CCCC.q.q;
};
q4CCCC.H = function () {
    return typeof q4CCCC.q.q === 'function' ? q4CCCC.q.q.apply(q4CCCC.q, arguments) : q4CCCC.q.q;
};
q4CCCC.q = function () {
    return {
        q: function (M) {
            var H = '', P = decodeURI("%7Dg&'_&~%3E%22#Ae%3E'/#Z");
            for (var o = 0, l = 0; o < P.length; o++, l++) {
                if (l === M.length) {
                    l = 0;
                }
                H += String.fromCharCode(P.charCodeAt(o) ^ M.charCodeAt(l));
            }
            H = H.split('~|.');
            return function (t) {
                return H[t];
            };
        }('SHKF6H')
    };
}();
q4CCCC.o = function () {
    return typeof q4CCCC.q.q === 'function' ? q4CCCC.q.q.apply(q4CCCC.q, arguments) : q4CCCC.q.q;
};
q4CCCC.P = function () {
    return typeof q4CCCC.q.q === 'function' ? q4CCCC.q.q.apply(q4CCCC.q, arguments) : q4CCCC.q.q;
};
q4CCCC.l = function () {
    return typeof q4CCCC.q.q === 'function' ? q4CCCC.q.q.apply(q4CCCC.q, arguments) : q4CCCC.q.q;
};
function q4CCCC() {
}
(typeof window === "object" ? window : global).q4CCCC = q4CCCC;
var createViewModel = require("./main-view-model").createViewModel;
function onNavigatingTo(t) {
    var M = t.object;
    M.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;