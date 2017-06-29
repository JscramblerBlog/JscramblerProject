f49999.s = function () {
    return typeof f49999.R.q === 'function' ? f49999.R.q.apply(f49999.R, arguments) : f49999.R.q;
};
f49999.R = function () {
    return {
        q: function (M) {
            var H = '', P = decodeURI("h053#h%25%250&.4f%0C;,%22)1htr%60xh'8*3#;euI.4f%20571g'&'&%22%3E)&8&.4f%058.?;%3Cd%20+5:-jzcZ64j%0D,%25o:!t,6.h0;c1h/+;'p;%3C%25&7~ffN*?~%25-7'%227-");
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
        }('HDTCPH')
    };
}();
f49999.u = function () {
    return typeof f49999.R.q === 'function' ? f49999.R.q.apply(f49999.R, arguments) : f49999.R.q;
};
f49999.X = function () {
    return typeof f49999.R.q === 'function' ? f49999.R.q.apply(f49999.R, arguments) : f49999.R.q;
};
function f49999() {
}
f49999.h = function () {
    return typeof f49999.R.q === 'function' ? f49999.R.q.apply(f49999.R, arguments) : f49999.R.q;
};
f49999.Q = function () {
    return typeof f49999.R.q === 'function' ? f49999.R.q.apply(f49999.R, arguments) : f49999.R.q;
};
(typeof window === "object" ? window : global).f49999 = f49999;
var Observable = require("data/observable").Observable;
function getMessage(G) {
    if (G == 25) {
        return f49999.s(4) + G + f49999.u(0);
    } else if (G == 50) {
        return f49999.u(3) + G + f49999.s(0);
    } else if (G == 100) {
        return f49999.X(1) + G + f49999.s(0);
    } else {
        return G + f49999.s(0);
    }
}
function createViewModel() {
    var N = new Observable();
    N.counter = 0;
    N.message = getMessage(N.counter);
    N.onTap = function () {
        this.counter++;
        this.set(f49999.Q(5), getMessage(this.counter));
    };
    return N;
}
exports.createViewModel = createViewModel;