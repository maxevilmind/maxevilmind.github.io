"use strict";
var precacheConfig = [
        ["./index.html", "b9b3ed357c2ce057e73c60e6aa73b72d"],
        ["./static/css/main.486ebc79.css", "6cf9fc5acc908455d09a7866c539b19b"],
        ["./static/js/main.18bc5189.js", "f7cecf734e6bf495fc19cf994b4e1914"],
        ["./static/media/1.72e039a4.jpg", "72e039a4cef94bd6890e8a58b75f99e5"],
        ["./static/media/1.dfa1c1e3.jpg", "dfa1c1e3835acd9be6e60785d3ff133a"],
        ["./static/media/2.06461e62.jpg", "06461e62242bb4a0e46dc01d47402f07"],
        ["./static/media/2.ea6f96ae.jpg", "ea6f96ae3e1d7beaefa606bca252703e"],
        ["./static/media/3.3b27230f.jpg", "3b27230f7a63da4e85b122bbc76bb64b"],
        ["./static/media/3.d894529f.jpg", "d894529f8ba00ad917a4871a8e6f7878"],
        ["./static/media/4.252d74d5.jpg", "252d74d551bee375a92cb44bdd76924a"],
        ["./static/media/5.b56eebad.jpg", "b56eebadfdd7d61a5200822fc4e7e4c5"],
        ["./static/media/6.7146d1c0.jpg", "7146d1c0c3ad6fea65be49accdcf6e23"],
        ["./static/media/montserrat-latin-100.4124805c.woff2", "4124805c0503dbfe42dd67d7f5715964"],
        ["./static/media/montserrat-latin-100.c8fb2f71.woff", "c8fb2f714bbc7bc3e8dfffa916b286dc"],
        ["./static/media/montserrat-latin-100italic.d1f3f2d0.woff", "d1f3f2d02ee4d7d2d4b1ad865014f189"],
        ["./static/media/montserrat-latin-100italic.e4bf47bd.woff2", "e4bf47bd171a9b2a72dd84c58bf90edf"],
        ["./static/media/montserrat-latin-200.444ae007.woff2", "444ae007121264bc1969d49b4031f9b2"],
        ["./static/media/montserrat-latin-200.edbce16a.woff", "edbce16a90aa22c297a0307b85789837"],
        ["./static/media/montserrat-latin-200italic.d7bbb730.woff", "d7bbb730d9b5e11720b3eb32326dcca7"],
        ["./static/media/montserrat-latin-200italic.f316c5d1.woff2", "f316c5d1ec40f3e68654c3f38b3999f3"],
        ["./static/media/montserrat-latin-300.0a7c6df0.woff2", "0a7c6df06e85d978d096d4d18fd8d43d"],
        ["./static/media/montserrat-latin-300.5e86df2c.woff", "5e86df2cad22d2ef2b03516334afae5e"],
        ["./static/media/montserrat-latin-300italic.37c74a8d.woff", "37c74a8d2d0d36a0a2c6e9a37ee15b0c"],
        ["./static/media/montserrat-latin-300italic.c076c489.woff2", "c076c4892bc7a4be7b9097e97a35012d"],
        ["./static/media/montserrat-latin-400.501ce09c.woff2", "501ce09c42716a2f6e1503a25eb174c9"],
        ["./static/media/montserrat-latin-400.f29d2b85.woff", "f29d2b8559699b6beb5b29b25b8bc572"],
        ["./static/media/montserrat-latin-400italic.22e7b04e.woff", "22e7b04e5f2a901d49d4d342315a715a"],
        ["./static/media/montserrat-latin-400italic.882908d9.woff2", "882908d9950d9c86ebd380877f293d95"],
        ["./static/media/montserrat-latin-500.991b453b.woff", "991b453bf90a0980e78966d2af7e3d3a"],
        ["./static/media/montserrat-latin-500.f0f2716c.woff2", "f0f2716c5fe401d175b88715e7d28685"],
        ["./static/media/montserrat-latin-500italic.4590ebba.woff2", "4590ebba421b3288c305305d7fa7b504"],
        ["./static/media/montserrat-latin-500italic.f3d41e4c.woff", "f3d41e4cdcc2314e49ddcea751d6f87f"],
        ["./static/media/montserrat-latin-600.15c24f71.woff2", "15c24f7109941777774ddd2c636c6a50"],
        ["./static/media/montserrat-latin-600.f6dc6096.woff", "f6dc6096f48956908c1787d9a722570a"],
        ["./static/media/montserrat-latin-600italic.02c48333.woff", "02c4833312d94b1b0866f073023a250e"],
        ["./static/media/montserrat-latin-600italic.6d10b805.woff2", "6d10b80529d5c36c7c09fca7193af0fc"],
        ["./static/media/montserrat-latin-700.79982cd1.woff2", "79982cd1f74c6fa7451bf9b37ead09ff"],
        ["./static/media/montserrat-latin-700.957e93fb.woff", "957e93fbbe131a59791cd820d98b7109"],
        ["./static/media/montserrat-latin-700italic.283438e9.woff2", "283438e9577fe6a684466bb100e105ec"],
        ["./static/media/montserrat-latin-700italic.ca627c5c.woff", "ca627c5ccc65cf80c2ecaea44b997de9"],
        ["./static/media/montserrat-latin-800.35386154.woff2", "35386154b78d046218fc8f88a44ff515"],
        ["./static/media/montserrat-latin-800.75665590.woff", "756655905d91b77960888262e7d58d35"],
        ["./static/media/montserrat-latin-800italic.a69f0add.woff", "a69f0add9d86c1a84311d7dd8693ba4a"],
        ["./static/media/montserrat-latin-800italic.e1b52a7b.woff2", "e1b52a7bd83e2324db6d92bdc206844c"],
        ["./static/media/montserrat-latin-900.186cae80.woff", "186cae8091da578150d81958e217714a"],
        ["./static/media/montserrat-latin-900.260c2ea3.woff2", "260c2ea3ef57feb82251952e605a36d5"],
        ["./static/media/montserrat-latin-900italic.43b527fe.woff", "43b527fe77254f97ea36e2b54e845ec4"],
        ["./static/media/montserrat-latin-900italic.d785fb9f.woff2", "d785fb9fc74588ffb7f306799709a97d"]
    ],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function(e, a) {
        var t = new URL(e);
        return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString()
    },
    cleanResponse = function(a) {
        return a.redirected ? ("body" in a ? Promise.resolve(a.body) : a.blob()).then(function(e) {
            return new Response(e, {
                headers: a.headers,
                status: a.status,
                statusText: a.statusText
            })
        }) : Promise.resolve(a)
    },
    createCacheKey = function(e, a, t, c) {
        var i = new URL(e);
        return c && i.pathname.match(c) || (i.search += (i.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(t)), i.toString()
    },
    isPathWhitelisted = function(e, a) {
        if (0 === e.length) return !0;
        var t = new URL(a).pathname;
        return e.some(function(e) {
            return t.match(e)
        })
    },
    stripIgnoredUrlParameters = function(e, t) {
        var a = new URL(e);
        return a.hash = "", a.search = a.search.slice(1).split("&").map(function(e) {
            return e.split("=")
        }).filter(function(a) {
            return t.every(function(e) {
                return !e.test(a[0])
            })
        }).map(function(e) {
            return e.join("=")
        }).join("&"), a.toString()
    },
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function(e) {
        var a = e[0],
            t = e[1],
            c = new URL(a, self.location),
            i = createCacheKey(c, hashParamName, t, /\.\w{8}\./);
        return [c.toString(), i]
    }));

function setOfCachedUrls(e) {
    return e.keys().then(function(e) {
        return e.map(function(e) {
            return e.url
        })
    }).then(function(e) {
        return new Set(e)
    })
}
self.addEventListener("install", function(e) {
    e.waitUntil(caches.open(cacheName).then(function(c) {
        return setOfCachedUrls(c).then(function(t) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a) {
                if (!t.has(a)) {
                    var e = new Request(a, {
                        credentials: "same-origin"
                    });
                    return fetch(e).then(function(e) {
                        if (!e.ok) throw new Error("Request for " + a + " returned a response with status " + e.status);
                        return cleanResponse(e).then(function(e) {
                            return c.put(a, e)
                        })
                    })
                }
            }))
        })
    }).then(function() {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function(a) {
        return a.keys().then(function(e) {
            return Promise.all(e.map(function(e) {
                if (!t.has(e.url)) return a.delete(e)
            }))
        })
    }).then(function() {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function(a) {
    if ("GET" === a.request.method) {
        var e, t = stripIgnoredUrlParameters(a.request.url, ignoreUrlParametersMatching),
            c = "index.html";
        (e = urlsToCacheKeys.has(t)) || (t = addDirectoryIndex(t, c), e = urlsToCacheKeys.has(t));
        var i = "/index.html";
        !e && "navigate" === a.request.mode && isPathWhitelisted(["^(?!\\/__).*"], a.request.url) && (t = new URL(i, self.location).toString(), e = urlsToCacheKeys.has(t)), e && a.respondWith(caches.open(cacheName).then(function(e) {
            return e.match(urlsToCacheKeys.get(t)).then(function(e) {
                if (e) return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function(e) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', a.request.url, e), fetch(a.request)
        }))
    }
});
