window.Modernizr = function(e, t, n) {
        function i(e) {
            m.cssText = e
        }

        function r(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }
        var a, s, l, u = "2.7.1",
            c = {},
            d = !0,
            p = t.documentElement,
            f = "modernizr",
            h = t.createElement(f),
            m = h.style,
            g = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            v = {},
            y = [],
            b = y.slice,
            x = {}.hasOwnProperty;
        l = r(x, "undefined") || r(x.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return x.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = b.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var r = function() {};
                        r.prototype = t.prototype;
                        var o = new r,
                            a = t.apply(o, n.concat(b.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, n.concat(b.call(arguments)))
                };
            return i
        }), v.textshadow = function() {
            return "" === t.createElement("div").style.textShadow
        }, v.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return i((e + "-webkit- ".split(" ").join(t + e) + g.join(n + e)).slice(0, -e.length)), o(m.backgroundImage, "gradient")
        };
        for (var w in v) l(v, w) && (s = w.toLowerCase(), c[s] = v[w](), y.push((c[s] ? "" : "no-") + s));
        return c.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var i in e) l(e, i) && c.addTest(i, e[i]);
            else {
                if (e = e.toLowerCase(), c[e] !== n) return c;
                t = "function" == typeof t ? t() : t, "undefined" != typeof d && d && (p.className += " modernizr--" + (t ? "" : "no-") + e), c[e] = t
            }
            return c
        }, i(""), h = a = null, c._version = u, c._prefixes = g, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " modernizr--js modernizr--" + y.join(" modernizr--") : ""), c
    }(this, this.document),
    /*! Respond.js v1.4.2: min/max-width media query polyfill
     * Copyright 2014 Scott Jehl
     * Licensed under MIT
     * http://j.mp/respondjs */
    ! function(e) {
        "use strict";
        e.matchMedia = e.matchMedia || function(e) {
            var t, n = e.documentElement,
                i = n.firstElementChild || n.firstChild,
                r = e.createElement("body"),
                o = e.createElement("div");
            return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(o),
                function(e) {
                    return o.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(r, i), t = 42 === o.offsetWidth, n.removeChild(r), {
                        matches: t,
                        media: e
                    }
                }
        }(e.document)
    }(this),
    function(e) {
        "use strict";

        function t() {
            w(!0)
        }
        var n = {};
        e.respond = n, n.update = function() {};
        var i = [],
            r = function() {
                var t = !1;
                try {
                    t = new e.XMLHttpRequest
                } catch (n) {
                    t = new e.ActiveXObject("Microsoft.XMLHTTP")
                }
                return function() {
                    return t
                }
            }(),
            o = function(e, t) {
                var n = r();
                n && (n.open("GET", e, !0), n.onreadystatechange = function() {
                    4 !== n.readyState || 200 !== n.status && 304 !== n.status || t(n.responseText)
                }, 4 !== n.readyState && n.send(null))
            },
            a = function(e) {
                return e.replace(n.regex.minmaxwh, "").match(n.regex.other)
            };
        if (n.ajax = o, n.queue = i, n.unsupportedmq = a, n.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
                comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
                other: /\([^\)]*\)/g
            }, n.mediaQueriesSupported = e.matchMedia && null !== e.matchMedia("only all") && e.matchMedia("only all").matches, !n.mediaQueriesSupported) {
            var s, l, u, c = e.document,
                d = c.documentElement,
                p = [],
                f = [],
                h = [],
                m = {},
                g = 30,
                v = c.getElementsByTagName("head")[0] || d,
                y = c.getElementsByTagName("base")[0],
                b = v.getElementsByTagName("link"),
                x = function() {
                    var e, t = c.createElement("div"),
                        n = c.body,
                        i = d.style.fontSize,
                        r = n && n.style.fontSize,
                        o = !1;
                    return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = o = c.createElement("body"), n.style.background = "none"), d.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), o && d.insertBefore(n, d.firstChild), e = t.offsetWidth, o ? d.removeChild(n) : n.removeChild(t), d.style.fontSize = i, r && (n.style.fontSize = r), e = u = parseFloat(e)
                },
                w = function(t) {
                    var n = "clientWidth",
                        i = d[n],
                        r = "CSS1Compat" === c.compatMode && i || c.body[n] || i,
                        o = {},
                        a = b[b.length - 1],
                        m = (new Date).getTime();
                    if (t && s && g > m - s) return e.clearTimeout(l), void(l = e.setTimeout(w, g));
                    s = m;
                    for (var y in p)
                        if (p.hasOwnProperty(y)) {
                            var C = p[y],
                                T = C.minw,
                                E = C.maxw,
                                k = null === T,
                                S = null === E,
                                _ = "em";
                            T && (T = parseFloat(T) * (T.indexOf(_) > -1 ? u || x() : 1)), E && (E = parseFloat(E) * (E.indexOf(_) > -1 ? u || x() : 1)), C.hasquery && (k && S || !(k || r >= T) || !(S || E >= r)) || (o[C.media] || (o[C.media] = []), o[C.media].push(f[C.rules]))
                        }
                    for (var N in h) h.hasOwnProperty(N) && h[N] && h[N].parentNode === v && v.removeChild(h[N]);
                    h.length = 0;
                    for (var L in o)
                        if (o.hasOwnProperty(L)) {
                            var A = c.createElement("style"),
                                I = o[L].join("\n");
                            A.type = "text/css", A.media = L, v.insertBefore(A, a.nextSibling), A.styleSheet ? A.styleSheet.cssText = I : A.appendChild(c.createTextNode(I)), h.push(A)
                        }
                },
                C = function(e, t, i) {
                    var r = e.replace(n.regex.comments, "").replace(n.regex.keyframes, "").match(n.regex.media),
                        o = r && r.length || 0;
                    t = t.substring(0, t.lastIndexOf("/"));
                    var s = function(e) {
                            return e.replace(n.regex.urls, "$1" + t + "$2$3")
                        },
                        l = !o && i;
                    t.length && (t += "/"), l && (o = 1);
                    for (var u = 0; o > u; u++) {
                        var c, d, h, m;
                        l ? (c = i, f.push(s(e))) : (c = r[u].match(n.regex.findStyles) && RegExp.$1, f.push(RegExp.$2 && s(RegExp.$2))), h = c.split(","), m = h.length;
                        for (var g = 0; m > g; g++) d = h[g], a(d) || p.push({
                            media: d.split("(")[0].match(n.regex.only) && RegExp.$2 || "all",
                            rules: f.length - 1,
                            hasquery: d.indexOf("(") > -1,
                            minw: d.match(n.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: d.match(n.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    w()
                },
                T = function() {
                    if (i.length) {
                        var t = i.shift();
                        o(t.href, function(n) {
                            C(n, t.href, t.media), m[t.href] = !0, e.setTimeout(function() {
                                T()
                            }, 0)
                        })
                    }
                },
                E = function() {
                    for (var t = 0; t < b.length; t++) {
                        var n = b[t],
                            r = n.href,
                            o = n.media,
                            a = n.rel && "stylesheet" === n.rel.toLowerCase();
                        r && a && !m[r] && (n.styleSheet && n.styleSheet.rawCssText ? (C(n.styleSheet.rawCssText, r, o), m[r] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(r) && !y || r.replace(RegExp.$1, "").split("/")[0] === e.location.host) && ("//" === r.substring(0, 2) && (r = e.location.protocol + r), i.push({
                            href: r,
                            media: o
                        })))
                    }
                    T()
                };
            E(), n.update = E, n.getEmValue = x, e.addEventListener ? e.addEventListener("resize", t, !1) : e.attachEvent && e.attachEvent("onresize", t)
        }
    }(this),
    /*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
    //@ sourceMappingURL=jquery-1.10.2.min.map
    */
    function(e, t) {
        function n(e) {
            var t = e.length,
                n = ce.type(e);
            return ce.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e) {
            var t = ke[e] = {};
            return ce.each(e.match(pe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function r(e, n, i, r) {
            if (ce.acceptData(e)) {
                var o, a, s = ce.expando,
                    l = e.nodeType,
                    u = l ? ce.cache : e,
                    c = l ? e[s] : e[s] && s;
                if (c && u[c] && (r || u[c].data) || i !== t || "string" != typeof n) return c || (c = l ? e[s] = te.pop() || ce.guid++ : s), u[c] || (u[c] = l ? {} : {
                    toJSON: ce.noop
                }), ("object" == typeof n || "function" == typeof n) && (r ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), a = u[c], r || (a.data || (a.data = {}), a = a.data), i !== t && (a[ce.camelCase(n)] = i), "string" == typeof n ? (o = a[n], null == o && (o = a[ce.camelCase(n)])) : o = a, o
            }
        }

        function o(e, t, n) {
            if (ce.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? ce.cache : e,
                    l = o ? e[ce.expando] : ce.expando;
                if (a[l]) {
                    if (t && (i = n ? a[l] : a[l].data)) {
                        ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in i ? t = [t] : (t = ce.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !s(i) : !ce.isEmptyObject(i)) return
                    }(n || (delete a[l].data, s(a[l]))) && (o ? ce.cleanData([e], !0) : ce.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
                }
            }
        }

        function a(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var r = "data-" + n.replace(_e, "-$1").toLowerCase();
                if (i = e.getAttribute(r), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Se.test(i) ? ce.parseJSON(i) : i
                    } catch (o) {}
                    ce.data(e, n, i)
                } else i = t
            }
            return i
        }

        function s(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return G.activeElement
            } catch (e) {}
        }

        function d(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function p(e, t, n) {
            if (ce.isFunction(t)) return ce.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ce.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (qe.test(t)) return ce.filter(t, e, n);
                t = ce.filter(t, e)
            }
            return ce.grep(e, function(e) {
                return ce.inArray(e, t) >= 0 !== n
            })
        }

        function f(e) {
            var t = Ue.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function h(e, t) {
            return ce.nodeName(e, "table") && ce.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function m(e) {
            return e.type = (null !== ce.find.attr(e, "type")) + "/" + e.type, e
        }

        function g(e) {
            var t = rt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function v(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ce._data(n, "globalEval", !t || ce._data(t[i], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && ce.hasData(e)) {
                var n, i, r, o = ce._data(e),
                    a = ce._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) ce.event.add(t, n, s[n][i])
                }
                a.data && (a.data = ce.extend({}, a.data))
            }
        }

        function b(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
                    r = ce._data(t);
                    for (i in r.events) ce.removeEvent(t, i, r.handle);
                    t.removeAttribute(ce.expando)
                }
                "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.support.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function x(e, n) {
            var i, r, o = 0,
                a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
            if (!a)
                for (a = [], i = e.childNodes || e; null != (r = i[o]); o++) !n || ce.nodeName(r, n) ? a.push(r) : ce.merge(a, x(r, n));
            return n === t || n && ce.nodeName(e, n) ? ce.merge([e], a) : a
        }

        function w(e) {
            tt.test(e.type) && (e.defaultChecked = e.checked)
        }

        function C(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Et.length; r--;)
                if (t = Et[r] + n, t in e) return t;
            return i
        }

        function T(e, t) {
            return e = t || e, "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
        }

        function E(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ce._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (o[a] = ce._data(i, "olddisplay", N(i.nodeName)))) : o[a] || (r = T(i), (n && "none" !== n || !r) && ce._data(i, "olddisplay", r ? n : ce.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function k(e, t, n) {
            var i = vt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function S(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ce.css(e, n + Tt[o], !0, r)), i ? ("content" === n && (a -= ce.css(e, "padding" + Tt[o], !0, r)), "margin" !== n && (a -= ce.css(e, "border" + Tt[o] + "Width", !0, r))) : (a += ce.css(e, "padding" + Tt[o], !0, r), "padding" !== n && (a += ce.css(e, "border" + Tt[o] + "Width", !0, r)));
            return a
        }

        function _(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ct(e),
                a = ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = dt(e, t, o), (0 > r || null == r) && (r = e.style[t]), yt.test(r)) return r;
                i = a && (ce.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + S(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function N(e) {
            var t = G,
                n = xt[e];
            return n || (n = L(e, t), "none" !== n && n || (ut = (ut || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = L(e, t), ut.detach()), xt[e] = n), n
        }

        function L(e, t) {
            var n = ce(t.createElement(e)).appendTo(t.body),
                i = ce.css(n[0], "display");
            return n.remove(), i
        }

        function A(e, t, n, i) {
            var r;
            if (ce.isArray(t)) ce.each(t, function(t, r) {
                n || St.test(e) ? i(e, r) : A(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== ce.type(t)) i(e, t);
            else
                for (r in t) A(e + "[" + r + "]", t[r], n, i)
        }

        function I(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(pe) || [];
                if (ce.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function F(e, n, i, r) {
            function o(l) {
                var u;
                return a[l] = !0, ce.each(e[l] || [], function(e, l) {
                    var c = l(n, i, r);
                    return "string" != typeof c || s || a[c] ? s ? !(u = c) : t : (n.dataTypes.unshift(c), o(c), !1)
                }), u
            }
            var a = {},
                s = e === Wt;
            return o(n.dataTypes[0]) || !a["*"] && o("*")
        }

        function P(e, n) {
            var i, r, o = ce.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            return i && ce.extend(!0, e, i), e
        }

        function j(e, n, i) {
            for (var r, o, a, s, l = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (s in l)
                    if (l[s] && l[s].test(o)) {
                        u.unshift(s);
                        break
                    }
            if (u[0] in i) a = u[0];
            else {
                for (s in i) {
                    if (!u[0] || e.converters[s + " " + u[0]]) {
                        a = s;
                        break
                    }
                    r || (r = s)
                }
                a = a || r
            }
            return a ? (a !== u[0] && u.unshift(a), i[a]) : t
        }

        function M(e, t, n, i) {
            var r, o, a, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a)
                    for (r in u)
                        if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function D() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function O() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function z() {
            return setTimeout(function() {
                Kt = t
            }), Kt = ce.now()
        }

        function H(e, t, n) {
            for (var i, r = (on[t] || []).concat(on["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function R(e, t, n) {
            var i, r, o = 0,
                a = rn.length,
                s = ce.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = Kt || z(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                    return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: ce.extend({}, t),
                    opts: ce.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Kt || z(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ce.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (B(c, u.opts.specialEasing); a > o; o++)
                if (i = rn[o].call(u, e, c, u.opts)) return i;
            return ce.map(c, H, u), ce.isFunction(u.opts.start) && u.opts.start.call(e, u), ce.fx.timer(ce.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function B(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = ce.camelCase(n), r = t[i], o = e[n], ce.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ce.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function q(e, t, n) {
            var i, r, o, a, s, l, u = this,
                c = {},
                d = e.style,
                p = e.nodeType && T(e),
                f = ce._data(e, "fxshow");
            n.queue || (s = ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, ce.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ce.css(e, "display") && "none" === ce.css(e, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], en.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) continue;
                    c[i] = f && f[i] || ce.style(e, i)
                }
            if (!ce.isEmptyObject(c)) {
                f ? "hidden" in f && (p = f.hidden) : f = ce._data(e, "fxshow", {}), o && (f.hidden = !p), p ? ce(e).show() : u.done(function() {
                    ce(e).hide()
                }), u.done(function() {
                    var t;
                    ce._removeData(e, "fxshow");
                    for (t in c) ce.style(e, t, c[t])
                });
                for (i in c) a = H(p ? f[i] : 0, i, u), i in f || (f[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function W(e, t, n, i, r) {
            return new W.prototype.init(e, t, n, i, r)
        }

        function $(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tt[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function X(e) {
            return ce.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var U, V, Y = typeof t,
            Q = e.location,
            G = e.document,
            Z = G.documentElement,
            K = e.jQuery,
            J = e.$,
            ee = {},
            te = [],
            ne = "1.10.2",
            ie = te.concat,
            re = te.push,
            oe = te.slice,
            ae = te.indexOf,
            se = ee.toString,
            le = ee.hasOwnProperty,
            ue = ne.trim,
            ce = function(e, t) {
                return new ce.fn.init(e, t, V)
            },
            de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pe = /\S+/g,
            fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ge = /^[\],:{}\s]*$/,
            ve = /(?:^|:|,)(?:\s*\[)+/g,
            ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            xe = /^-ms-/,
            we = /-([\da-z])/gi,
            Ce = function(e, t) {
                return t.toUpperCase()
            },
            Te = function(e) {
                (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Ee(), ce.ready())
            },
            Ee = function() {
                G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Te, !1), e.removeEventListener("load", Te, !1)) : (G.detachEvent("onreadystatechange", Te), e.detachEvent("onload", Te))
            };
        ce.fn = ce.prototype = {
                jquery: ne,
                constructor: ce,
                init: function(e, n, i) {
                    var r, o;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (r[1]) {
                            if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), me.test(r[1]) && ce.isPlainObject(n))
                                for (r in n) ce.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                            return this
                        }
                        if (o = G.getElementById(r[2]), o && o.parentNode) {
                            if (o.id !== r[2]) return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = G, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return oe.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = ce.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return ce.each(this, e, t)
                },
                ready: function(e) {
                    return ce.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(oe.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(ce.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: re,
                sort: [].sort,
                splice: [].splice
            }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function() {
                var e, n, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) e = s[r], i = o[r], s !== i && (c && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, a = e && ce.isArray(e) ? e : []) : a = e && ce.isPlainObject(e) ? e : {}, s[r] = ce.extend(c, a, i)) : i !== t && (s[r] = i));
                return s
            }, ce.extend({
                expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === ce && (e.$ = J), t && e.jQuery === ce && (e.jQuery = K), ce
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ce.readyWait++ : ce.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--ce.readyWait : !ce.isReady) {
                        if (!G.body) return setTimeout(ce.ready);
                        ce.isReady = !0, e !== !0 && --ce.readyWait > 0 || (U.resolveWith(G, [ce]), ce.fn.trigger && ce(G).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ce.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === ce.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[se.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    var n;
                    if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ce.support.ownLast)
                        for (n in e) return le.call(e, n);
                    for (n in e);
                    return n === t || le.call(e, n)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || G;
                    var i = me.exec(e),
                        r = !n && [];
                    return i ? [t.createElement(i[1])] : (i = ce.buildFragment([e], t, r), r && ce(r).remove(), ce.merge([], i.childNodes))
                },
                parseJSON: function(n) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ce.trim(n), n && ge.test(n.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? Function("return " + n)() : (ce.error("Invalid JSON: " + n), t)
                },
                parseXML: function(n) {
                    var i, r;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && ce.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(xe, "ms-").replace(we, Ce)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var r, o = 0,
                        a = e.length,
                        s = n(e);
                    if (i) {
                        if (s)
                            for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                        else
                            for (o in e)
                                if (r = t.apply(e[o], i), r === !1) break
                    } else if (s)
                        for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.call(e[o], o, e[o]), r === !1) break; return e
                },
                trim: ue && !ue.call("\ufeff\xa0") ? function(e) {
                    return null == e ? "" : ue.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(fe, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? ce.merge(i, "string" == typeof e ? [e] : e) : re.call(i, e)), i
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (ae) return ae.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = n.length,
                        r = e.length,
                        o = 0;
                    if ("number" == typeof i)
                        for (; i > o; o++) e[r++] = n[o];
                    else
                        for (; n[o] !== t;) e[r++] = n[o++];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    var i, r = [],
                        o = 0,
                        a = e.length;
                    for (n = !!n; a > o; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
                    return r
                },
                map: function(e, t, i) {
                    var r, o = 0,
                        a = e.length,
                        s = n(e),
                        l = [];
                    if (s)
                        for (; a > o; o++) r = t(e[o], o, i), null != r && (l[l.length] = r);
                    else
                        for (o in e) r = t(e[o], o, i), null != r && (l[l.length] = r);
                    return ie.apply([], l)
                },
                guid: 1,
                proxy: function(e, n) {
                    var i, r, o;
                    return "string" == typeof n && (o = e[n], n = e, e = o), ce.isFunction(e) ? (i = oe.call(arguments, 2), r = function() {
                        return e.apply(n || this, i.concat(oe.call(arguments)))
                    }, r.guid = e.guid = e.guid || ce.guid++, r) : t
                },
                access: function(e, n, i, r, o, a, s) {
                    var l = 0,
                        u = e.length,
                        c = null == i;
                    if ("object" === ce.type(i)) {
                        o = !0;
                        for (l in i) ce.access(e, n, l, i[l], !0, a, s)
                    } else if (r !== t && (o = !0, ce.isFunction(r) || (s = !0), c && (s ? (n.call(e, r), n = null) : (c = n, n = function(e, t, n) {
                            return c.call(ce(e), n)
                        })), n))
                        for (; u > l; l++) n(e[l], i, s ? r : r.call(e[l], l, n(e[l], i)));
                    return o ? e : c ? n.call(e) : u ? n(e[0], i) : a
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(e, t, n, i) {
                    var r, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    r = n.apply(e, i || []);
                    for (o in t) e.style[o] = a[o];
                    return r
                }
            }), ce.ready.promise = function(t) {
                if (!U)
                    if (U = ce.Deferred(), "complete" === G.readyState) setTimeout(ce.ready);
                    else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Te, !1), e.addEventListener("load", Te, !1);
                else {
                    G.attachEvent("onreadystatechange", Te), e.attachEvent("onload", Te);
                    var n = !1;
                    try {
                        n = null == e.frameElement && G.documentElement
                    } catch (i) {}
                    n && n.doScroll && function r() {
                        if (!ce.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(r, 50)
                            }
                            Ee(), ce.ready()
                        }
                    }()
                }
                return U.promise(t)
            }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                ee["[object " + t + "]"] = t.toLowerCase()
            }), V = ce(G),
            function(e, t) {
                function n(e, t, n, i) {
                    var r, o, a, s, l, u, c, d, h, m;
                    if ((t ? t.ownerDocument || t : R) !== F && I(t), t = t || F, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (j && !i) {
                        if (r = be.exec(e))
                            if (a = r[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && z(t, o) && o.id === a) return n.push(o), n
                            } else {
                                if (r[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = r[3]) && T.getElementsByClassName && t.getElementsByClassName) return ee.apply(n, t.getElementsByClassName(a)), n
                            }
                        if (T.qsa && (!M || !M.test(e))) {
                            if (d = c = H, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (u = p(e), (c = t.getAttribute("id")) ? d = c.replace(Ce, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + f(u[l]);
                                h = fe.test(e) && t.parentNode || t, m = u.join(",")
                            }
                            if (m) try {
                                return ee.apply(n, h.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                c || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(ue, "$1"), t, n, i)
                }

                function i() {
                    function e(n, i) {
                        return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = i
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[H] = !0, e
                }

                function o(e) {
                    var t = F.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function d() {}

                function p(e, t) {
                    var i, r, o, a, s, l, u, c = $[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = k.preFilter; s;) {
                        (!i || (r = de.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = pe.exec(s)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(ue, " ")
                        }), s = s.slice(i.length));
                        for (a in k.filter) !(r = ve[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return t ? s.length : s ? n.error(e) : $(e, l).slice(0)
                }

                function f(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function h(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = q++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, l, u, c = B + " " + o;
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r)
                                    if (u = t[H] || (t[H] = {}), (l = u[i]) && l[0] === c) {
                                        if ((s = l[1]) === !0 || s === E) return s === !0
                                    } else if (l = u[i] = [c], l[1] = e(t, n, a) || E, l[1] === !0) return !0
                    }
                }

                function m(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, i, r) {
                    for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
                    return a
                }

                function v(e, t, n, i, o, a) {
                    return i && !i[H] && (i = v(i)), o && !o[H] && (o = v(o, a)), r(function(r, a, s, l) {
                        var u, c, d, p = [],
                            f = [],
                            h = a.length,
                            m = r || x(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !r && t ? m : g(m, p, e, s, l),
                            y = n ? o || (r ? e : h || i) ? [] : a : v;
                        if (n && n(v, y, s, l), i)
                            for (u = g(y, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[f[c]] = !(v[f[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                    o(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(d = y[c]) && (u = o ? ne.call(r, d) : p[c]) > -1 && (r[u] = !(a[u] = d))
                            }
                        } else y = g(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : ee.apply(a, y)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, a, !0), u = h(function(e) {
                            return ne.call(t, e) > -1
                        }, a, !0), c = [function(e, n, i) {
                            return !o && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
                        }]; r > s; s++)
                        if (n = k.relative[e[s].type]) c = [h(m(c), n)];
                        else {
                            if (n = k.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (i = ++s; r > i && !k.relative[e[i].type]; i++);
                                return v(s > 1 && m(c), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ue, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                            }
                            c.push(n)
                        }
                    return m(c)
                }

                function b(e, t) {
                    var i = 0,
                        o = t.length > 0,
                        a = e.length > 0,
                        s = function(r, s, l, u, c) {
                            var d, p, f, h = [],
                                m = 0,
                                v = "0",
                                y = r && [],
                                b = null != c,
                                x = L,
                                w = r || a && k.find.TAG("*", c && s.parentNode || s),
                                C = B += null == x ? 1 : Math.random() || .1;
                            for (b && (L = s !== F && s, E = i); null != (d = w[v]); v++) {
                                if (a && d) {
                                    for (p = 0; f = e[p++];)
                                        if (f(d, s, l)) {
                                            u.push(d);
                                            break
                                        }
                                    b && (B = C, E = ++i)
                                }
                                o && ((d = !f && d) && m--, r && y.push(d))
                            }
                            if (m += v, o && v !== m) {
                                for (p = 0; f = t[p++];) f(y, h, s, l);
                                if (r) {
                                    if (m > 0)
                                        for (; v--;) y[v] || h[v] || (h[v] = K.call(u));
                                    h = g(h)
                                }
                                ee.apply(u, h), b && !r && h.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                            }
                            return b && (B = C, L = x), y
                        };
                    return o ? r(s) : s
                }

                function x(e, t, i) {
                    for (var r = 0, o = t.length; o > r; r++) n(e, t[r], i);
                    return i
                }

                function w(e, t, n, i) {
                    var r, o, a, s, l, u = p(e);
                    if (!i && 1 === u.length) {
                        if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && j && k.relative[o[1].type]) {
                            if (t = (k.find.ID(a.matches[0].replace(Te, Ee), t) || [])[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (r = ve.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)
                            if ((l = k.find[s]) && (i = l(a.matches[0].replace(Te, Ee), fe.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(r, 1), e = i.length && f(o), !e) return ee.apply(n, i), n;
                                break
                            }
                    }
                    return N(e, u)(i, t, !j, n, fe.test(e)), n
                }
                var C, T, E, k, S, _, N, L, A, I, F, P, j, M, D, O, z, H = "sizzle" + -new Date,
                    R = e.document,
                    B = 0,
                    q = 0,
                    W = i(),
                    $ = i(),
                    X = i(),
                    U = !1,
                    V = function(e, t) {
                        return e === t ? (U = !0, 0) : 0
                    },
                    Y = typeof t,
                    Q = 1 << 31,
                    G = {}.hasOwnProperty,
                    Z = [],
                    K = Z.pop,
                    J = Z.push,
                    ee = Z.push,
                    te = Z.slice,
                    ne = Z.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    re = "[\\x20\\t\\r\\n\\f]",
                    oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ae = oe.replace("w", "w#"),
                    se = "\\[" + re + "*(" + oe + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + re + "*\\]",
                    le = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
                    ue = RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
                    de = RegExp("^" + re + "*," + re + "*"),
                    pe = RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
                    fe = RegExp(re + "*[+~]"),
                    he = RegExp("=" + re + "*([^\\]'\"]*)" + re + "*\\]", "g"),
                    me = RegExp(le),
                    ge = RegExp("^" + ae + "$"),
                    ve = {
                        ID: RegExp("^#(" + oe + ")"),
                        CLASS: RegExp("^\\.(" + oe + ")"),
                        TAG: RegExp("^(" + oe.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + se),
                        PSEUDO: RegExp("^" + le),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + ie + ")$", "i"),
                        needsContext: RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ye = /^[^{]+\{\s*\[native \w/,
                    be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    xe = /^(?:input|select|textarea|button)$/i,
                    we = /^h\d$/i,
                    Ce = /'|\\/g,
                    Te = RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
                    Ee = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    ee.apply(Z = te.call(R.childNodes), R.childNodes), Z[R.childNodes.length].nodeType
                } catch (ke) {
                    ee = {
                        apply: Z.length ? function(e, t) {
                            J.apply(e, te.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                _ = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, T = n.support = {}, I = n.setDocument = function(e) {
                    var n = e ? e.ownerDocument || e : R,
                        i = n.defaultView;
                    return n !== F && 9 === n.nodeType && n.documentElement ? (F = n, P = n.documentElement, j = !_(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                        I()
                    }), T.attributes = o(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), T.getElementsByTagName = o(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), T.getElementsByClassName = o(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), T.getById = o(function(e) {
                        return P.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                    }), T.getById ? (k.find.ID = function(e, t) {
                        if (typeof t.getElementById !== Y && j) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, k.filter.ID = function(e) {
                        var t = e.replace(Te, Ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete k.find.ID, k.filter.ID = function(e) {
                        var t = e.replace(Te, Ee);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), k.find.TAG = T.getElementsByTagName ? function(e, n) {
                        return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, k.find.CLASS = T.getElementsByClassName && function(e, n) {
                        return typeof n.getElementsByClassName !== Y && j ? n.getElementsByClassName(e) : t
                    }, D = [], M = [], (T.qsa = ye.test(n.querySelectorAll)) && (o(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + re + "*(?:value|" + ie + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
                    }), o(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                    })), (T.matchesSelector = ye.test(O = P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                        T.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), D.push("!=", le)
                    }), M = M.length && RegExp(M.join("|")), D = D.length && RegExp(D.join("|")), z = ye.test(P.contains) || P.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = P.compareDocumentPosition ? function(e, t) {
                        if (e === t) return U = !0, 0;
                        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return i ? 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || z(R, e) ? -1 : t === n || z(R, t) ? 1 : A ? ne.call(A, e) - ne.call(A, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var i, r = 0,
                            o = e.parentNode,
                            a = t.parentNode,
                            l = [e],
                            u = [t];
                        if (e === t) return U = !0, 0;
                        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : A ? ne.call(A, e) - ne.call(A, t) : 0;
                        if (o === a) return s(e, t);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = t; i = i.parentNode;) u.unshift(i);
                        for (; l[r] === u[r];) r++;
                        return r ? s(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
                    }, n) : F
                }, n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== F && I(e), t = t.replace(he, "='$1']"), !(!T.matchesSelector || !j || D && D.test(t) || M && M.test(t))) try {
                        var i = O.call(e, t);
                        if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {}
                    return n(t, F, null, [e]).length > 0
                }, n.contains = function(e, t) {
                    return (e.ownerDocument || e) !== F && I(e), z(e, t)
                }, n.attr = function(e, n) {
                    (e.ownerDocument || e) !== F && I(e);
                    var i = k.attrHandle[n.toLowerCase()],
                        r = i && G.call(k.attrHandle, n.toLowerCase()) ? i(e, n, !j) : t;
                    return r === t ? T.attributes || !j ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
                }, n.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (U = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(V), U) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, S = n.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += S(t);
                    return n
                }, k = n.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: ve,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Te, Ee), e[3] = (e[4] || e[5] || "").replace(Te, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var n, i = !e[5] && e[2];
                            return ve.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && me.test(i) && (n = p(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Te, Ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = W[e + " "];
                            return t || (t = RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && W(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, i) {
                            return function(r) {
                                var o = n.attr(r, e);
                                return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var u, c, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (c = g[H] || (g[H] = {}), u = c[e] || [], f = u[0] === B && u[1], p = u[0] === B && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                            if (1 === d.nodeType && ++p && d === t) {
                                                c[e] = [B, f, p];
                                                break
                                            }
                                    } else if (y && (u = (t[H] || (t[H] = {}))[e]) && u[0] === B) p = u[1];
                                    else
                                        for (;
                                            (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[e] = [B, p]), d !== t)););
                                    return p -= r, p === i || 0 === p % i && p / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return o[H] ? o(t) : o.length > 1 ? (i = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
                                for (var i, r = o(e, t), a = r.length; a--;) i = ne.call(e, r[a]), e[i] = !(n[i] = r[a])
                            }) : function(e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = N(e.replace(ue, "$1"));
                            return i[H] ? r(function(e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                        }),
                        lang: r(function(e) {
                            return ge.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Te, Ee).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === P
                        },
                        focus: function(e) {
                            return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !k.pseudos.empty(e)
                        },
                        header: function(e) {
                            return we.test(e.nodeName)
                        },
                        input: function(e) {
                            return xe.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
                            return e
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (C in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[C] = l(C);
                for (C in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[C] = u(C);
                d.prototype = k.filters = k.pseudos, k.setFilters = new d, N = n.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = X[e + " "];
                    if (!o) {
                        for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                        o = X(e, b(r, i))
                    }
                    return o
                }, T.sortStable = H.split("").sort(V).join("") === H, T.detectDuplicates = U, I(), T.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(F.createElement("div"))
                }), o(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function(e, n, i) {
                    return i ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }), T.attributes && o(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function(e, n, i) {
                    return i || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
                }), o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || a(ie, function(e, n, i) {
                    var r;
                    return i ? t : (r = e.getAttributeNode(n)) && r.specified ? r.value : e[n] === !0 ? n.toLowerCase() : null
                }), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
            }(e);
        var ke = {};
        ce.Callbacks = function(e) {
            e = "string" == typeof e ? ke[e] || i(e) : ce.extend({}, e);
            var n, r, o, a, s, l, u = [],
                c = !e.once && [],
                d = function(t) {
                    for (r = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++)
                        if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            r = !1;
                            break
                        }
                    n = !1, u && (c ? c.length && d(c.shift()) : r ? u = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (u) {
                            var t = u.length;
                            ! function i(t) {
                                ce.each(t, function(t, n) {
                                    var r = ce.type(n);
                                    "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), n ? a = u.length : r && (l = t, d(r))
                        }
                        return this
                    },
                    remove: function() {
                        return u && ce.each(arguments, function(e, t) {
                            for (var i;
                                (i = ce.inArray(t, u, i)) > -1;) u.splice(i, 1), n && (a >= i && a--, s >= i && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ce.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], a = 0, this
                    },
                    disable: function() {
                        return u = c = r = t, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = t, r || p.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : d(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return p
        }, ce.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ce.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ce.Deferred(function(n) {
                                ce.each(t, function(t, o) {
                                    var a = o[0],
                                        s = ce.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && ce.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ce.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ce.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = oe.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : ce.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = Array(a), n = Array(a), i = Array(a); a > r; r++) o[r] && ce.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        }), ce.support = function(t) {
            var n, i, r, o, a, s, l, u, c, d = G.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
            o = G.createElement("select"), s = o.appendChild(G.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!r.value, t.optSelected = s.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
            try {
                delete d.test
            } catch (p) {
                t.deleteExpando = !1
            }
            r = G.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = G.createDocumentFragment(), a.appendChild(r), t.appendChecked = r.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || d.attributes[l].expando === !1;
            d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (c in ce(t)) break;
            return t.ownLast = "0" !== c, ce(function() {
                var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = G.getElementsByTagName("body")[0];
                a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(a, null != a.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    t.boxSizing = 4 === d.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, i = d.appendChild(G.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== Y && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = r = i = null)
            }), n = o = a = s = i = r = null, t
        }({});
        var Se = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            _e = /([A-Z])/g;
        ce.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando], !!e && !s(e)
            },
            data: function(e, t, n) {
                return r(e, t, n)
            },
            removeData: function(e, t) {
                return o(e, t)
            },
            _data: function(e, t, n) {
                return r(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ce.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ce.fn.extend({
            data: function(e, n) {
                var i, r, o = null,
                    s = 0,
                    l = this[0];
                if (e === t) {
                    if (this.length && (o = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; i.length > s; s++) r = i[s].name, 0 === r.indexOf("data-") && (r = ce.camelCase(r.slice(5)), a(l, r, o[r]));
                        ce._data(l, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    ce.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ce.data(this, e, n)
                }) : l ? a(l, e, ce.data(l, e)) : null
            },
            removeData: function(e) {
                return this.each(function() {
                    ce.removeData(this, e)
                })
            }
        }), ce.extend({
            queue: function(e, n, i) {
                var r;
                return e ? (n = (n || "fx") + "queue", r = ce._data(e, n), i && (!r || ce.isArray(i) ? r = ce._data(e, n, ce.makeArray(i)) : r.push(i)), r || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ce.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = ce._queueHooks(e, t),
                    a = function() {
                        ce.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ce._data(e, n) || ce._data(e, n, {
                    empty: ce.Callbacks("once memory").add(function() {
                        ce._removeData(e, t + "queue"), ce._removeData(e, n)
                    })
                })
            }
        }), ce.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? ce.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = ce.queue(this, e, n);
                    ce._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ce.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ce.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ce.fx ? ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, r = 1,
                    o = ce.Deferred(),
                    a = this,
                    s = this.length,
                    l = function() {
                        --r || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = ce._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var Ne, Le, Ae = /[\t\r\n\f]/g,
            Ie = /\r/g,
            Fe = /^(?:input|select|textarea|button|object)$/i,
            Pe = /^(?:a|area)$/i,
            je = /^(?:checked|selected)$/i,
            Me = ce.support.getSetAttribute,
            De = ce.support.input;
        ce.fn.extend({
            attr: function(e, t) {
                return ce.access(this, ce.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ce.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ce.access(this, ce.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ce.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, i, r, o, a = 0,
                    s = this.length,
                    l = "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pe) || []; s > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
                            for (o = 0; r = t[o++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
                            n.className = ce.trim(i)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a = 0,
                    s = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pe) || []; s > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            n.className = e ? ce.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function(n) {
                    ce(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = ce(this), o = e.match(pe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === Y || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ce._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, r, o = this[0];
                return arguments.length ? (r = ce.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? e.call(this, n, ce(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                })) : o ? (i = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Ie, "") : null == n ? "" : n)) : void 0
            }
        }), ce.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ce.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== r || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ce(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = ce.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = ce.inArray(ce(i).val(), o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            },
            attr: function(e, n, i) {
                var r, o, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === Y ? ce.prop(e, n, i) : (1 === a && ce.isXMLDoc(e) || (n = n.toLowerCase(), r = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Le : Ne)), i === t ? r && "get" in r && null !== (o = r.get(e, n)) ? o : (o = ce.find.attr(e, n), null == o ? t : o) : null !== i ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (ce.removeAttr(e, n), t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(pe);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? De && Me || !je.test(n) ? e[i] = !1 : e[ce.camelCase("default-" + n)] = e[i] = !1 : ce.attr(e, n, ""), e.removeAttribute(Me ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ce.support.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, i) {
                var r, o, a, s = e.nodeType;
                return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ce.isXMLDoc(e), a && (n = ce.propFix[n] || n, o = ce.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ce.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Fe.test(e.nodeName) || Pe.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), Le = {
            set: function(e, t, n) {
                return t === !1 ? ce.removeAttr(e, n) : De && Me || !je.test(n) ? e.setAttribute(!Me && ce.propFix[n] || n, n) : e[ce.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var i = ce.expr.attrHandle[n] || ce.find.attr;
            ce.expr.attrHandle[n] = De && Me || !je.test(n) ? function(e, n, r) {
                var o = ce.expr.attrHandle[n],
                    a = r ? t : (ce.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
                return ce.expr.attrHandle[n] = o, a
            } : function(e, n, i) {
                return i ? t : e[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), De && Me || (ce.attrHooks.value = {
            set: function(e, n, i) {
                return ce.nodeName(e, "input") ? (e.defaultValue = n, t) : Ne && Ne.set(e, n, i)
            }
        }), Me || (Ne = {
            set: function(e, n, i) {
                var r = e.getAttributeNode(i);
                return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
            }
        }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function(e, n, i) {
            var r;
            return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
        }, ce.valHooks.button = {
            get: function(e, n) {
                var i = e.getAttributeNode(n);
                return i && i.specified ? i.value : t
            },
            set: Ne.set
        }, ce.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Ne.set(e, "" === t ? !1 : t, n)
            }
        }, ce.each(["width", "height"], function(e, n) {
            ce.attrHooks[n] = {
                set: function(e, i) {
                    return "" === i ? (e.setAttribute(n, "auto"), i) : t
                }
            }
        })), ce.support.hrefNormalized || ce.each(["href", "src"], function(e, t) {
            ce.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ce.support.style || (ce.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), ce.support.optSelected || (ce.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ce.propFix[this.toLowerCase()] = this
        }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function() {
            ce.valHooks[this] = {
                set: function(e, n) {
                    return ce.isArray(n) ? e.checked = ce.inArray(ce(e).val(), n) >= 0 : t
                }
            }, ce.support.checkOn || (ce.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Oe = /^(?:input|select|textarea)$/i,
            ze = /^key/,
            He = /^(?:mouse|contextmenu)|click/,
            Re = /^(?:focusinfocus|focusoutblur)$/,
            Be = /^([^.]*)(?:\.(.+)|)$/;
        ce.event = {
            global: {},
            add: function(e, n, i, r, o) {
                var a, s, l, u, c, d, p, f, h, m, g, v = ce._data(e);
                if (v) {
                    for (i.handler && (u = i, i = u.handler, o = u.selector), i.guid || (i.guid = ce.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                            return typeof ce === Y || e && ce.event.triggered === e.type ? t : ce.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), n = (n || "").match(pe) || [""], l = n.length; l--;) a = Be.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), h && (c = ce.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ce.event.special[h] || {}, p = ce.extend({
                        type: h,
                        origType: g,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ce.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, u), (f = s[h]) || (f = s[h] = [], f.delegateCount = 0, c.setup && c.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), o ? f.splice(f.delegateCount++, 0, p) : f.push(p), ce.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, u, c, d, p, f, h, m, g = ce.hasData(e) && ce._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(pe) || [""], u = t.length; u--;)
                        if (s = Be.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = ce.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ce.removeEvent(e, f, g.handle), delete c[f])
                        } else
                            for (f in c) ce.event.remove(e, f + t[u], n, i, !0);
                    ce.isEmptyObject(c) && (delete g.handle, ce._removeData(e, "events"))
                }
            },
            trigger: function(n, i, r, o) {
                var a, s, l, u, c, d, p, f = [r || G],
                    h = le.call(n, "type") ? n.type : n,
                    m = le.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Re.test(h + ce.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ce.expando] ? n : new ce.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ce.makeArray(i, [n]), c = ce.event.special[h] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
                    if (!o && !c.noBubble && !ce.isWindow(r)) {
                        for (u = c.delegateType || h, Re.test(u + h) || (l = l.parentNode); l; l = l.parentNode) f.push(l), d = l;
                        d === (r.ownerDocument || G) && f.push(d.defaultView || d.parentWindow || e)
                    }
                    for (p = 0;
                        (l = f[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? u : c.bindType || h, a = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), a && a.apply(l, i), a = s && l[s], a && ce.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), i) === !1) && ce.acceptData(r) && s && r[h] && !ce.isWindow(r)) {
                        d = r[s], d && (r[s] = null), ce.event.triggered = h;
                        try {
                            r[h]()
                        } catch (g) {}
                        ce.event.triggered = t, d && (r[s] = d)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ce.event.fix(e);
                var n, i, r, o, a, s = [],
                    l = oe.call(arguments),
                    u = (ce._data(this, "events") || {})[e.type] || [],
                    c = ce.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (s = ce.event.handlers.call(this, e, u), n = 0;
                        (o = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (r = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ce.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var i, r, o, a, s = [],
                    l = n.delegateCount,
                    u = e.target;
                if (l && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; l > a; a++) r = n[a], i = r.selector + " ", o[i] === t && (o[i] = r.needsContext ? ce(i, this).index(u) >= 0 : ce.find(i, this, null, [u]).length), o[i] && o.push(r);
                            o.length && s.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return n.length > l && s.push({
                    elem: this,
                    handlers: n.slice(l)
                }), s
            },
            fix: function(e) {
                if (e[ce.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = He.test(r) ? this.mouseHooks : ze.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ce.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, r, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    },
                    _default: function(e) {
                        return ce.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = ce.extend(new ce.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ce.event.trigger(r, null, t) : ce.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ce.removeEvent = G.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Y && (e[i] = null), e.detachEvent(i, n))
        }, ce.Event = function(e, n) {
            return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, n && ce.extend(this, n), this.timeStamp = e && e.timeStamp || ce.now(), this[ce.expando] = !0, t) : new ce.Event(e, n)
        }, ce.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ce.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            ce.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !ce.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ce.support.submitBubbles || (ce.event.special.submit = {
            setup: function() {
                return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : t;
                    i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), ce._data(i, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), t)
            }
        }), ce.support.changeBubbles || (ce.event.special.change = {
            setup: function() {
                return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ce.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, e, !0)
                })), !1) : (ce.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Oe.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
                    }), ce._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return ce.event.remove(this, "._change"), !Oe.test(this.nodeName)
            }
        }), ce.support.focusinBubbles || ce.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    ce.event.simulate(t, e.target, ce.event.fix(e), !0)
                };
            ce.event.special[t] = {
                setup: function() {
                    0 === n++ && G.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && G.removeEventListener(e, i, !0)
                }
            }
        }), ce.fn.extend({
            on: function(e, n, i, r, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (a in e) this.on(a, n, i, e[a], o);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = u;
                else if (!r) return this;
                return 1 === o && (s = r, r = function(e) {
                    return ce().off(e), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = ce.guid++)), this.each(function() {
                    ce.event.add(this, e, r, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = u), this.each(function() {
                    ce.event.remove(this, e, i, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ce.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var i = this[0];
                return i ? ce.event.trigger(e, n, i, !0) : t
            }
        });
        var qe = /^.[^:#\[\.,]*$/,
            We = /^(?:parents|prev(?:Until|All))/,
            $e = ce.expr.match.needsContext,
            Xe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ce.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (ce.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) ce.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function(e) {
                var t, n = ce(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (ce.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(p(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(p(this, e || [], !1))
            },
            is: function(e) {
                return !!p(this, "string" == typeof e && $e.test(e) ? ce(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = $e.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            n = o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ce.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ce(e, t) : ce.makeArray(e && e.nodeType ? [e] : e),
                    i = ce.merge(this.get(), n);
                return this.pushStack(ce.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ce.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ce.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ce.dir(e, "parentNode", n)
            },
            next: function(e) {
                return d(e, "nextSibling")
            },
            prev: function(e) {
                return d(e, "previousSibling")
            },
            nextAll: function(e) {
                return ce.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ce.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ce.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ce.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ce.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ce.sibling(e.firstChild)
            },
            contents: function(e) {
                return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
            }
        }, function(e, t) {
            ce.fn[e] = function(n, i) {
                var r = ce.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ce.filter(i, r)), this.length > 1 && (Xe[e] || (r = ce.unique(r)), We.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        }), ce.extend({
            filter: function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ce.find.matchesSelector(i, e) ? [i] : [] : ce.find.matches(e, ce.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, n, i) {
                for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ce(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ve = / jQuery\d+="(?:null|\d+)"/g,
            Ye = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
            Qe = /^\s+/,
            Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ze = /<([\w:]+)/,
            Ke = /<tbody/i,
            Je = /<|&#?\w+;/,
            et = /<(?:script|style|link)/i,
            tt = /^(?:checkbox|radio)$/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /^$|\/(?:java|ecma)script/i,
            rt = /^true\/(.*)/,
            ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            at = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            st = f(G),
            lt = st.appendChild(G.createElement("div"));
        at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, ce.fn.extend({
            text: function(e) {
                return ce.access(this, function(e) {
                    return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ce.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ce.cleanData(x(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ce.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ce.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return ce.clone(this, e, t)
                })
            },
            html: function(e) {
                return ce.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
                    if (!("string" != typeof e || et.test(e) || !ce.support.htmlSerialize && Ye.test(e) || !ce.support.leadingWhitespace && Qe.test(e) || at[(Ze.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Ge, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ce.cleanData(x(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = ce.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function(n) {
                    var i = e[t++],
                        r = e[t++];
                    r && (i && i.parentNode !== r && (i = this.nextSibling), ce(this).remove(), r.insertBefore(n, i))
                }, !0), t ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = ie.apply([], e);
                var i, r, o, a, s, l, u = 0,
                    c = this.length,
                    d = this,
                    p = c - 1,
                    f = e[0],
                    h = ce.isFunction(f);
                if (h || !(1 >= c || "string" != typeof f || ce.support.checkClone) && nt.test(f)) return this.each(function(i) {
                    var r = d.eq(i);
                    h && (e[0] = f.call(this, i, r.html())), r.domManip(e, t, n)
                });
                if (c && (l = ce.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (a = ce.map(x(l, "script"), m), o = a.length; c > u; u++) r = l, u !== p && (r = ce.clone(r, !0, !0), o && ce.merge(a, x(r, "script"))), t.call(this[u], r, u);
                    if (o)
                        for (s = a[a.length - 1].ownerDocument, ce.map(a, g), u = 0; o > u; u++) r = a[u], it.test(r.type || "") && !ce._data(r, "globalEval") && ce.contains(s, r) && (r.src ? ce._evalUrl(r.src) : ce.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ot, "")));
                    l = i = null
                }
                return this
            }
        }), ce.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ce.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = ce(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ce(o[i])[t](n), re.apply(r, n.get());
                return this.pushStack(r)
            }
        }), ce.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s, l = ce.contains(e.ownerDocument, e);
                if (ce.support.html5Clone || ce.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                    for (i = x(o), s = x(e), a = 0; null != (r = s[a]); ++a) i[a] && b(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || x(e), i = i || x(o), a = 0; null != (r = s[a]); a++) y(r, i[a]);
                    else y(e, o);
                return i = x(o, "script"), i.length > 0 && v(i, !l && x(e, "script")), i = s = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, u, c, d = e.length, p = f(t), h = [], m = 0; d > m; m++)
                    if (o = e[m], o || 0 === o)
                        if ("object" === ce.type(o)) ce.merge(h, o.nodeType ? [o] : o);
                        else if (Je.test(o)) {
                    for (s = s || p.appendChild(t.createElement("div")), l = (Ze.exec(o) || ["", ""])[1].toLowerCase(), c = at[l] || at._default, s.innerHTML = c[1] + o.replace(Ge, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                    if (!ce.support.leadingWhitespace && Qe.test(o) && h.push(t.createTextNode(Qe.exec(o)[0])), !ce.support.tbody)
                        for (o = "table" !== l || Ke.test(o) ? "<table>" !== c[1] || Ke.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) ce.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (ce.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else h.push(t.createTextNode(o));
                for (s && p.removeChild(s), ce.support.appendChecked || ce.grep(x(h, "input"), w), m = 0; o = h[m++];)
                    if ((!i || -1 === ce.inArray(o, i)) && (a = ce.contains(o.ownerDocument, o), s = x(p.appendChild(o), "script"), a && v(s), n))
                        for (r = 0; o = s[r++];) it.test(o.type || "") && n.push(o);
                return s = null, p
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = e[a]); a++)
                    if ((t || ce.acceptData(n)) && (r = n[s], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) c[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, te.push(r))
                    }
            },
            _evalUrl: function(e) {
                return ce.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ce.fn.extend({
            wrapAll: function(e) {
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ce.isFunction(e) ? this.each(function(t) {
                    ce(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ce(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ce.isFunction(e);
                return this.each(function(n) {
                    ce(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var ut, ct, dt, pt = /alpha\([^)]*\)/i,
            ft = /opacity\s*=\s*([^)]*)/,
            ht = /^(top|right|bottom|left)$/,
            mt = /^(none|table(?!-c[ea]).+)/,
            gt = /^margin/,
            vt = RegExp("^(" + de + ")(.*)$", "i"),
            yt = RegExp("^(" + de + ")(?!px)[a-z%]+$", "i"),
            bt = RegExp("^([+-])=(" + de + ")", "i"),
            xt = {
                BODY: "block"
            },
            wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ct = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Tt = ["Top", "Right", "Bottom", "Left"],
            Et = ["Webkit", "O", "Moz", "ms"];
        ce.fn.extend({
            css: function(e, n) {
                return ce.access(this, function(e, n, i) {
                    var r, o, a = {},
                        s = 0;
                    if (ce.isArray(n)) {
                        for (o = ct(e), r = n.length; r > s; s++) a[n[s]] = ce.css(e, n[s], !1, o);
                        return a
                    }
                    return i !== t ? ce.style(e, n, i) : ce.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    T(this) ? ce(this).show() : ce(this).hide()
                })
            }
        }), ce.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = dt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ce.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, l = ce.camelCase(n),
                        u = e.style;
                    if (n = ce.cssProps[l] || (ce.cssProps[l] = C(u, l)), s = ce.cssHooks[n] || ce.cssHooks[l], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : u[n];
                    if (a = typeof i, "string" === a && (o = bt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ce.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || ce.cssNumber[l] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function(e, n, i, r) {
                var o, a, s, l = ce.camelCase(n);
                return n = ce.cssProps[l] || (ce.cssProps[l] = C(e.style, l)), s = ce.cssHooks[n] || ce.cssHooks[l], s && "get" in s && (a = s.get(e, !0, i)), a === t && (a = dt(e, n, r)), "normal" === a && n in Ct && (a = Ct[n]), "" === i || i ? (o = parseFloat(a), i === !0 || ce.isNumeric(o) ? o || 0 : a) : a
            }
        }), e.getComputedStyle ? (ct = function(t) {
            return e.getComputedStyle(t, null)
        }, dt = function(e, n, i) {
            var r, o, a, s = i || ct(e),
                l = s ? s.getPropertyValue(n) || s[n] : t,
                u = e.style;
            return s && ("" !== l || ce.contains(e.ownerDocument, e) || (l = ce.style(e, n)), yt.test(l) && gt.test(n) && (r = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = r, u.minWidth = o, u.maxWidth = a)), l
        }) : G.documentElement.currentStyle && (ct = function(e) {
            return e.currentStyle
        }, dt = function(e, n, i) {
            var r, o, a, s = i || ct(e),
                l = s ? s[n] : t,
                u = e.style;
            return null == l && u && u[n] && (l = u[n]), yt.test(l) && !ht.test(n) && (r = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, a && (o.left = a)), "" === l ? "auto" : l
        }), ce.each(["height", "width"], function(e, n) {
            ce.cssHooks[n] = {
                get: function(e, i, r) {
                    return i ? 0 === e.offsetWidth && mt.test(ce.css(e, "display")) ? ce.swap(e, wt, function() {
                        return _(e, n, r)
                    }) : _(e, n, r) : t
                },
                set: function(e, t, i) {
                    var r = i && ct(e);
                    return k(e, t, i ? S(e, n, i, ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ce.support.opacity || (ce.cssHooks.opacity = {
            get: function(e, t) {
                return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ce.trim(o.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = pt.test(o) ? o.replace(pt, r) : o + " " + r)
            }
        }), ce(function() {
            ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? ce.swap(e, {
                        display: "inline-block"
                    }, dt, [e, "marginRight"]) : t
                }
            }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function(e, n) {
                ce.cssHooks[n] = {
                    get: function(e, i) {
                        return i ? (i = dt(e, n), yt.test(i) ? ce(e).position()[n] + "px" : i) : t
                    }
                }
            })
        }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ce.css(e, "display"))
        }, ce.expr.filters.visible = function(e) {
            return !ce.expr.filters.hidden(e)
        }), ce.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ce.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Tt[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, gt.test(e) || (ce.cssHooks[e + t].set = k)
        });
        var kt = /%20/g,
            St = /\[\]$/,
            _t = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
        ce.fn.extend({
            serialize: function() {
                return ce.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ce(this).is(":disabled") && Lt.test(this.nodeName) && !Nt.test(e) && (this.checked || !tt.test(e))
                }).map(function(e, t) {
                    var n = ce(this).val();
                    return null == n ? null : ce.isArray(n) ? ce.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(_t, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(_t, "\r\n")
                    }
                }).get()
            }
        }), ce.param = function(e, n) {
            var i, r = [],
                o = function(e, t) {
                    t = ce.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (i in e) A(i, e[i], n, o);
            return r.join("&").replace(kt, "+")
        }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ce.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ce.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var At, It, Ft = ce.now(),
            Pt = /\?/,
            jt = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            Dt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            zt = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            Rt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Bt = ce.fn.load,
            qt = {},
            Wt = {},
            $t = "*/".concat("*");
        try {
            It = Q.href
        } catch (Xt) {
            It = G.createElement("a"), It.href = "", It = It.href
        }
        At = Rt.exec(It.toLowerCase()) || [], ce.fn.load = function(e, n, i) {
            if ("string" != typeof e && Bt) return Bt.apply(this, arguments);
            var r, o, a, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ce.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ce.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments, s.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
            }).complete(i && function(e, t) {
                s.each(i, o || [e.responseText, t, e])
            }), this
        }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ce.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ce.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: It,
                type: "GET",
                isLocal: Ot.test(At[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ce.parseJSON,
                    "text xml": ce.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? P(P(e, ce.ajaxSettings), t) : P(ce.ajaxSettings, e)
            },
            ajaxPrefilter: I(qt),
            ajaxTransport: I(Wt),
            ajax: function(e, n) {
                function i(e, n, i, r) {
                    var o, d, y, b, w, T = n;
                    2 !== x && (x = 2, l && clearTimeout(l), c = t, s = r || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = j(p, C, i)), b = M(p, b, C, o), o ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ce.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (ce.etag[a] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, o = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", o ? m.resolveWith(f, [d, T, C]) : m.rejectWith(f, [C, T, y]), C.statusCode(v), v = t, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, p, o ? d : y]), g.fireWith(f, [C, T]), u && (h.trigger("ajaxComplete", [C, p]), --ce.active || ce.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var r, o, a, s, l, u, c, d, p = ce.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? ce(f) : ce.event,
                    m = ce.Deferred(),
                    g = ce.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!d)
                                    for (d = {}; t = Dt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else C.always(e[C.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || It) + "").replace(jt, "").replace(Ht, At[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ce.trim(p.dataType || "*").toLowerCase().match(pe) || [""], null == p.crossDomain && (r = Rt.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === At[1] && r[2] === At[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ce.param(p.data, p.traditional)), F(qt, p, n, C), 2 === x) return C;
                u = p.global, u && 0 === ce.active++ && ce.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !zt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Pt.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Mt.test(a) ? a.replace(Mt, "$1_=" + Ft++) : a + (Pt.test(a) ? "&" : "?") + "_=" + Ft++)), p.ifModified && (ce.lastModified[a] && C.setRequestHeader("If-Modified-Since", ce.lastModified[a]), ce.etag[a] && C.setRequestHeader("If-None-Match", ce.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) C.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === x)) return C.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[o](p[o]);
                if (c = F(Wt, p, n, C)) {
                    C.readyState = 1, u && h.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                        C.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, c.send(y, i)
                    } catch (T) {
                        if (!(2 > x)) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return ce.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return ce.get(e, t, n, "script")
            }
        }), ce.each(["get", "post"], function(e, n) {
            ce[n] = function(e, i, r, o) {
                return ce.isFunction(i) && (o = o || r, r = i, i = t), ce.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: i,
                    success: r
                })
            }
        }), ce.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ce.globalEval(e), e
                }
            }
        }), ce.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ce.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = G.head || ce("head")[0] || G.documentElement;
                return {
                    send: function(t, r) {
                        n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Ut = [],
            Vt = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || ce.expando + "_" + Ft++;
                return this[e] = !0, e
            }
        }), ce.ajaxPrefilter("json jsonp", function(n, i, r) {
            var o, a, s, l = n.jsonp !== !1 && (Vt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vt, "$1" + o) : n.jsonp !== !1 && (n.url += (Pt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return s || ce.error(o + " was not called"), s[0]
            }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
                s = arguments
            }, r.always(function() {
                e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Ut.push(o)), s && ce.isFunction(a) && a(s[0]), s = a = t
            }), "script") : t
        });
        var Yt, Qt, Gt = 0,
            Zt = e.ActiveXObject && function() {
                var e;
                for (e in Yt) Yt[e](t, !0)
            };
        ce.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && D() || O()
        } : D, Qt = ce.ajaxSettings.xhr(), ce.support.cors = !!Qt && "withCredentials" in Qt, Qt = ce.support.ajax = !!Qt, Qt && ce.ajaxTransport(function(n) {
            if (!n.crossDomain || ce.support.cors) {
                var i;
                return {
                    send: function(r, o) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in r) l.setRequestHeader(s, r[s])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(e, r) {
                            var s, u, c, d;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = t, a && (l.onreadystatechange = ce.noop, Zt && delete Yt[a]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (p) {
                                            c = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                    }
                            } catch (f) {
                                r || o(-1, f)
                            }
                            d && o(s, c, d, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Gt, Zt && (Yt || (Yt = {}, ce(e).unload(Zt)), Yt[a] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(t, !0)
                    }
                }
            }
        });
        var Kt, Jt, en = /^(?:toggle|show|hide)$/,
            tn = RegExp("^(?:([+-])=|)(" + de + ")([a-z%]*)$", "i"),
            nn = /queueHooks$/,
            rn = [q],
            on = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = tn.exec(t),
                        o = r && r[3] || (ce.cssNumber[e] ? "" : "px"),
                        a = (ce.cssNumber[e] || "px" !== o && +i) && tn.exec(ce.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, ce.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        ce.Animation = ce.extend(R, {
            tweener: function(e, t) {
                ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], on[n] = on[n] || [], on[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? rn.unshift(e) : rn.push(e)
            }
        }), ce.Tween = W, W.prototype = {
            constructor: W,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ce.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = W.propHooks[this.prop];
                return e && e.get ? e.get(this) : W.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = W.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ce.each(["toggle", "show", "hide"], function(e, t) {
            var n = ce.fn[t];
            ce.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r)
            }
        }), ce.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = ce.isEmptyObject(e),
                    o = ce.speed(t, n, i),
                    a = function() {
                        var t = R(this, ce.extend({}, e), o);
                        (r || ce._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, n, i) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = ce.timers,
                        a = ce._data(this);
                    if (n) a[n] && a[n].stop && r(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && nn.test(n) && r(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && ce.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ce._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = ce.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ce.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ce.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ce.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ce.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ce.extend({}, e) : {
                complete: n || !n && t || ce.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ce.isFunction(t) && t
            };
            return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
            }, i
        }, ce.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ce.timers = [], ce.fx = W.prototype.init, ce.fx.tick = function() {
            var e, n = ce.timers,
                i = 0;
            for (Kt = ce.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
            n.length || ce.fx.stop(), Kt = t
        }, ce.fx.timer = function(e) {
            e() && ce.timers.push(e) && ce.fx.start()
        }, ce.fx.interval = 13, ce.fx.start = function() {
            Jt || (Jt = setInterval(ce.fx.tick, ce.fx.interval))
        }, ce.fx.stop = function() {
            clearInterval(Jt), Jt = null
        }, ce.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(e) {
            return ce.grep(ce.timers, function(t) {
                return e === t.elem
            }).length
        }), ce.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                ce.offset.setOffset(this, e, t)
            });
            var n, i, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                a = o && o.ownerDocument;
            return a ? (n = a.documentElement, ce.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (r = o.getBoundingClientRect()), i = X(a), {
                top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : r) : void 0
        }, ce.offset = {
            setOffset: function(e, t, n) {
                var i = ce.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r, o, a = ce(e),
                    s = a.offset(),
                    l = ce.css(e, "top"),
                    u = ce.css(e, "left"),
                    c = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [l, u]) > -1,
                    d = {},
                    p = {};
                c ? (p = a.position(), r = p.top, o = p.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), ce.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
            }
        }, ce.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ce.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n.top += ce.css(e[0], "borderTopWidth", !0), n.left += ce.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ce.css(i, "marginTop", !0),
                        left: t.left - n.left - ce.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Z; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
                    return e || Z
                })
            }
        }), ce.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            ce.fn[e] = function(r) {
                return ce.access(this, function(e, r, o) {
                    var a = X(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(i ? ce(a).scrollLeft() : o, i ? o : ce(a).scrollTop()) : e[r] = o, t)
                }, e, r, arguments.length, null)
            }
        }), ce.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            ce.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, r) {
                ce.fn[r] = function(r, o) {
                    var a = arguments.length && (i || "boolean" != typeof r),
                        s = i || (r === !0 || o === !0 ? "margin" : "border");
                    return ce.access(this, function(n, i, r) {
                        var o;
                        return ce.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ce.css(n, i, s) : ce.style(n, i, r, s)
                    }, n, a ? r : t, a, null)
                }
            })
        }), ce.fn.size = function() {
            return this.length
        }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (e.jQuery = e.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ce
        }))
    }(window),
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return s.raw ? e : decodeURIComponent(e)
        }

        function i(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
        }

        function r(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function o(t, n) {
            var i = s.raw ? t : r(t);
            return e.isFunction(n) ? n(i) : i
        }
        var a = /\+/g,
            s = e.cookie = function(r, a, l) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
                        var u = l.expires,
                            c = l.expires = new Date;
                        c.setTime(+c + 864e5 * u)
                    }
                    return document.cookie = [t(r), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var d = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], f = 0, h = p.length; h > f; f++) {
                    var m = p[f].split("="),
                        g = n(m.shift()),
                        v = m.join("=");
                    if (r && r === g) {
                        d = o(v, a);
                        break
                    }
                    r || void 0 === (v = o(v)) || (d[g] = v)
                }
                return d
            };
        s.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !e.cookie(t))
        }
    }),
    /*!
     * imagesLoaded PACKAGED v3.1.1
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    function() {
        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var i = e.prototype,
            r = this,
            o = r.EventEmitter;
        i.getListeners = function(e) {
            var t, n, i = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
            } else t = i[e] || (i[e] = []);
            return t
        }, i.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
            return n
        }, i.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, i.addListener = function(e, n) {
            var i, r = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
            return this.getListeners(e), this
        }, i.defineEvents = function(e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function(e, n) {
            var i, r, o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function(e, t, n) {
            var i, r, o = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) o.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : a.call(this, i, r));
            return this
        }, i.removeEvent = function(e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if ("object" === n)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
            var n, i, r, o, a = this.getListenersAsObject(e);
            for (r in a)
                if (a.hasOwnProperty(r))
                    for (i = a[r].length; i--;) n = a[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, i.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return r.EventEmitter = o, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e) {
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            return "[object Array]" === l.call(e)
        }

        function i(e) {
            var t = [];
            if (n(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function r(e, n) {
            function r(e, n, a) {
                if (!(this instanceof r)) return new r(e, n);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? a = n : t(this.options, n), a && this.on("always", a), this.getImages(), o && (this.jqDeferred = new o.Deferred);
                var s = this;
                setTimeout(function() {
                    s.check()
                })
            }

            function l(e) {
                this.img = e
            }

            function u(e) {
                this.src = e, c[e] = this
            }
            r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                        var a = i[r];
                        this.addImage(a)
                    }
                }
            }, r.prototype.addImage = function(e) {
                var t = new l(e);
                this.images.push(t)
            }, r.prototype.check = function() {
                function e(e, r) {
                    return t.options.debug && s && a.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
                }
                var t = this,
                    n = 0,
                    i = this.images.length;
                if (this.hasAnyBroken = !1, !i) return void this.complete();
                for (var r = 0; i > r; r++) {
                    var o = this.images[r];
                    o.on("confirm", e), o.check()
                }
            }, r.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function() {
                    t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
                })
            }, r.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function() {
                    if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }, o && (o.fn.imagesLoaded = function(e, t) {
                var n = new r(this, e, t);
                return n.jqDeferred.promise(o(this))
            }), l.prototype = new e, l.prototype.check = function() {
                var e = c[this.img.src] || new u(this.img.src);
                if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
                if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var t = this;
                e.on("confirm", function(e, n) {
                    return t.confirm(e.isLoaded, n), !0
                }), e.check()
            }, l.prototype.confirm = function(e, t) {
                this.isLoaded = e, this.emit("confirm", this, t)
            };
            var c = {};
            return u.prototype = new e, u.prototype.check = function() {
                if (!this.isChecked) {
                    var e = new Image;
                    n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
                }
            }, u.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, u.prototype.onload = function(e) {
                this.confirm(!0, "onload"), this.unbindProxyEvents(e)
            }, u.prototype.onerror = function(e) {
                this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
            }, u.prototype.confirm = function(e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
            }, u.prototype.unbindProxyEvents = function(e) {
                n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
            }, r
        }
        var o = e.jQuery,
            a = e.console,
            s = void 0 !== a,
            l = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : e.imagesLoaded = r(e.EventEmitter, e.eventie)
    }(window),
    /*!
     * Packery PACKAGED v1.2.2
     * bin-packing layout library
     * http://packery.metafizzy.co
     *
     * Commercial use requires one-time purchase of a commercial license
     * http://packery.metafizzy.co/license.html
     *
     * Non-commercial use is licensed under the GPL v3 License
     *
     * Copyright 2013 Metafizzy
     */
    function(e) {
        function t() {}

        function n(e) {
            function n(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
                })
            }

            function r(t, n) {
                e.fn[t] = function(r) {
                    if ("string" == typeof r) {
                        for (var a = i.call(arguments, 1), s = 0, l = this.length; l > s; s++) {
                            var u = this[s],
                                c = e.data(u, t);
                            if (c)
                                if (e.isFunction(c[r]) && "_" !== r.charAt(0)) {
                                    var d = c[r].apply(c, a);
                                    if (void 0 !== d) return d
                                } else o("no such method '" + r + "' for " + t + " instance");
                            else o("cannot call methods on " + t + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var i = e.data(this, t);
                        i ? (i.option(r), i._init()) : (i = new n(this, r), e.data(this, t, i))
                    })
                }
            }
            if (e) {
                var o = "undefined" == typeof console ? t : function(e) {
                    console.error(e)
                };
                return e.bridget = function(e, t) {
                    n(t), r(e, t)
                }, e.bridget
            }
        }
        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n(e.jQuery)
    }(window),
    function(e) {
        function t(e) {
            return RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }

        function n(e, t) {
            var n = i(e, t) ? o : r;
            n(e, t)
        }
        var i, r, o;
        "classList" in document.documentElement ? (i = function(e, t) {
            return e.classList.contains(t)
        }, r = function(e, t) {
            e.classList.add(t)
        }, o = function(e, t) {
            e.classList.remove(t)
        }) : (i = function(e, n) {
            return t(n).test(e.className)
        }, r = function(e, t) {
            i(e, t) || (e.className = e.className + " " + t)
        }, o = function(e, n) {
            e.className = e.className.replace(t(n), " ")
        });
        var a = {
            hasClass: i,
            addClass: r,
            removeClass: o,
            toggleClass: n,
            has: i,
            add: r,
            remove: o,
            toggle: n
        };
        "function" == typeof define && define.amd ? define("classie/classie", a) : e.classie = a
    }(window),
    function(e) {
        function t(e) {
            if (e) {
                if ("string" == typeof i[e]) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var t, r = 0, o = n.length; o > r; r++)
                    if (t = n[r] + e, "string" == typeof i[t]) return t
            }
        }
        var n = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
    }(window),
    function(e) {
        function t(e) {
            var t = parseFloat(e),
                n = -1 === e.indexOf("%") && !isNaN(t);
            return n && t
        }

        function n() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0, n = a.length; n > t; t++) {
                var i = a[t];
                e[i] = 0
            }
            return e
        }

        function i(e) {
            function i(e) {
                if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var i = o(e);
                    if ("none" === i.display) return n();
                    var r = {};
                    r.width = e.offsetWidth, r.height = e.offsetHeight;
                    for (var c = r.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), d = 0, p = a.length; p > d; d++) {
                        var f = a[d],
                            h = i[f];
                        h = s(e, h);
                        var m = parseFloat(h);
                        r[f] = isNaN(m) ? 0 : m
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        y = r.marginLeft + r.marginRight,
                        b = r.marginTop + r.marginBottom,
                        x = r.borderLeftWidth + r.borderRightWidth,
                        w = r.borderTopWidth + r.borderBottomWidth,
                        C = c && l,
                        T = t(i.width);
                    T !== !1 && (r.width = T + (C ? 0 : g + x));
                    var E = t(i.height);
                    return E !== !1 && (r.height = E + (C ? 0 : v + w)), r.innerWidth = r.width - (g + x), r.innerHeight = r.height - (v + w), r.outerWidth = r.width + y, r.outerHeight = r.height + b, r
                }
            }

            function s(e, t) {
                if (r || -1 === t.indexOf("%")) return t;
                var n = e.style,
                    i = n.left,
                    o = e.runtimeStyle,
                    a = o && o.left;
                return a && (o.left = e.currentStyle.left), n.left = t, t = n.pixelLeft, n.left = i, a && (o.left = a), t
            }
            var l, u = e("boxSizing");
            return function() {
                if (u) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[u] = "border-box";
                    var n = document.body || document.documentElement;
                    n.appendChild(e);
                    var i = o(e);
                    l = 200 === t(i.width), n.removeChild(e)
                }
            }(), i
        }
        var r = e.getComputedStyle,
            o = r ? function(e) {
                return r(e, null)
            } : function(e) {
                return e.currentStyle
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], i) : "object" == typeof exports ? module.exports = i(require("get-style-property")) : e.getSize = i(e.getStyleProperty)
    }(window),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : e.eventie = o
    }(this),
    function(e) {
        function t(e) {
            "function" == typeof e && (t.isReady ? e() : o.push(e))
        }

        function n(e) {
            var n = "readystatechange" === e.type && "complete" !== r.readyState;
            if (!t.isReady && !n) {
                t.isReady = !0;
                for (var i = 0, a = o.length; a > i; i++) {
                    var s = o[i];
                    s()
                }
            }
        }

        function i(i) {
            return i.bind(r, "DOMContentLoaded", n), i.bind(r, "readystatechange", n), i.bind(e, "load", n), t
        }
        var r = e.document,
            o = [];
        t.isReady = !1, "function" == typeof define && define.amd ? (t.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], i)) : e.docReady = i(e.eventie)
    }(this),
    function() {
        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var i = e.prototype,
            r = this,
            o = r.EventEmitter;
        i.getListeners = function(e) {
            var t, n, i = this._getEvents();
            if (e instanceof RegExp) {
                t = {};
                for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
            } else t = i[e] || (i[e] = []);
            return t
        }, i.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
            return n
        }, i.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, i.addListener = function(e, n) {
            var i, r = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
            return this.getListeners(e), this
        }, i.defineEvents = function(e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function(e, n) {
            var i, r, o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function(e, t, n) {
            var i, r, o = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) o.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : a.call(this, i, r));
            return this
        }, i.removeEvent = function(e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if (e instanceof RegExp)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
            var n, i, r, o, a = this.getListenersAsObject(e);
            for (r in a)
                if (a.hasOwnProperty(r))
                    for (i = a[r].length; i--;) n = a[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, i.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return r.EventEmitter = o, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this),
    function(e, t) {
        function n(e, t) {
            return e[s](t)
        }

        function i(e) {
            if (!e.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(e)
            }
        }

        function r(e, t) {
            i(e);
            for (var n = e.parentNode.querySelectorAll(t), r = 0, o = n.length; o > r; r++)
                if (n[r] === e) return !0;
            return !1
        }

        function o(e, t) {
            return i(e), n(e, t)
        }
        var a, s = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
                var r = e[n],
                    o = r + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        if (s) {
            var l = document.createElement("div"),
                u = n(l, "div");
            a = u ? n : o
        } else a = r;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return a
        }) : window.matchesSelector = a
    }(this, Element.prototype),
    function(e) {
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            for (var t in e) return !1;
            return t = null, !0
        }

        function i(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function r(e, r, o) {
            function s(e, t) {
                e && (this.element = e, this.layout = t, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = o("transition"),
                u = o("transform"),
                c = l && u,
                d = !!o("perspective"),
                p = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                h = function() {
                    for (var e = {}, t = 0, n = f.length; n > t; t++) {
                        var i = f[t],
                            r = o(i);
                        r && r !== i && (e[i] = r)
                    }
                    return e
                }();
            t(s.prototype, e.prototype), s.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, s.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, s.prototype.getSize = function() {
                this.size = r(this.element)
            }, s.prototype.css = function(e) {
                var t = this.element.style;
                for (var n in e) {
                    var i = h[n] || n;
                    t[i] = e[n]
                }
            }, s.prototype.getPosition = function() {
                var e = a(this.element),
                    t = this.layout.options,
                    n = t.isOriginLeft,
                    i = t.isOriginTop,
                    r = parseInt(e[n ? "left" : "right"], 10),
                    o = parseInt(e[i ? "top" : "bottom"], 10);
                r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o;
                var s = this.layout.size;
                r -= n ? s.paddingLeft : s.paddingRight, o -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = o
            }, s.prototype.layoutPosition = function() {
                var e = this.layout.size,
                    t = this.layout.options,
                    n = {};
                t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + "px", n.right = "") : (n.right = this.position.x + e.paddingRight + "px", n.left = ""), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + e.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
            };
            var m = d ? function(e, t) {
                return "translate3d(" + e + "px, " + t + "px, 0)"
            } : function(e, t) {
                return "translate(" + e + "px, " + t + "px)"
            };
            s.prototype._transitionTo = function(e, t) {
                this.getPosition();
                var n = this.position.x,
                    i = this.position.y,
                    r = parseInt(e, 10),
                    o = parseInt(t, 10),
                    a = r === this.position.x && o === this.position.y;
                if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition();
                var s = e - n,
                    l = t - i,
                    u = {},
                    c = this.layout.options;
                s = c.isOriginLeft ? s : -s, l = c.isOriginTop ? l : -l, u.transform = m(s, l), this.transition({
                    to: u,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, s.prototype.goTo = function(e, t) {
                this.setPosition(e, t), this.layoutPosition()
            }, s.prototype.moveTo = c ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(e, t) {
                this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
            }, s.prototype._nonTransition = function(e) {
                this.css(e.to), e.isCleaning && this._removeStyles(e.to);
                for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
            }, s.prototype._transition = function(e) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
                var t = this._transn;
                for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
                for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
                if (e.from) {
                    this.css(e.from);
                    var i = this.element.offsetHeight;
                    i = null
                }
                this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
            };
            var g = u && i(u) + ",opacity";
            s.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: g,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(p, this, !1))
            }, s.prototype.transition = s.prototype[l ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(e) {
                this.ontransitionend(e)
            }, s.prototype.onotransitionend = function(e) {
                this.ontransitionend(e)
            };
            var v = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            s.prototype.ontransitionend = function(e) {
                if (e.target === this.element) {
                    var t = this._transn,
                        i = v[e.propertyName] || e.propertyName;
                    if (delete t.ingProperties[i], n(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) {
                        var r = t.onEnd[i];
                        r.call(this), delete t.onEnd[i]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, s.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning = !1
            }, s.prototype._removeStyles = function(e) {
                var t = {};
                for (var n in e) t[n] = "";
                this.css(t)
            };
            var y = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return s.prototype.removeTransitionStyles = function() {
                this.css(y)
            }, s.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, s.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var e = this;
                this.on("transitionEnd", function() {
                    return e.removeElem(), !0
                }), this.hide()
            }, s.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0
                })
            }, s.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, s.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, s
        }
        var o = document.defaultView,
            a = o && o.getComputedStyle ? function(e) {
                return o.getComputedStyle(e, null)
            } : function(e) {
                return e.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], r) : (e.Outlayer = {}, e.Outlayer.Item = r(e.EventEmitter, e.getSize, e.getStyleProperty))
    }(window),
    function(e) {
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            return "[object Array]" === d.call(e)
        }

        function i(e) {
            var t = [];
            if (n(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function r(e, t) {
            var n = f(t, e); - 1 !== n && t.splice(n, 1)
        }

        function o(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, n) {
                return t + "-" + n
            }).toLowerCase()
        }

        function a(n, a, d, f, h, m) {
            function g(e, n) {
                if ("string" == typeof e && (e = s.querySelector(e)), !e || !p(e)) return void(l && l.error("Bad " + this.constructor.namespace + " element: " + e));
                this.element = e, this.options = t({}, this.options), this.option(n);
                var i = ++y;
                this.element.outlayerGUID = i, b[i] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function v(e, n) {
                e.prototype[n] = t({}, g.prototype[n])
            }
            var y = 0,
                b = {};
            return g.namespace = "outlayer", g.Item = m, g.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, t(g.prototype, d.prototype), g.prototype.option = function(e) {
                t(this.options, e)
            }, g.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, g.prototype._itemize = function(e) {
                for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], r = 0, o = t.length; o > r; r++) {
                    var a = t[r],
                        s = new n(a, this);
                    i.push(s)
                }
                return i
            }, g.prototype._filterFindItemElements = function(e) {
                e = i(e);
                for (var t = this.options.itemSelector, n = [], r = 0, o = e.length; o > r; r++) {
                    var a = e[r];
                    if (p(a))
                        if (t) {
                            h(a, t) && n.push(a);
                            for (var s = a.querySelectorAll(t), l = 0, u = s.length; u > l; l++) n.push(s[l])
                        } else n.push(a)
                }
                return n
            }, g.prototype.getItemElements = function() {
                for (var e = [], t = 0, n = this.items.length; n > t; t++) e.push(this.items[t].element);
                return e
            }, g.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
                this.getSize()
            }, g.prototype.getSize = function() {
                this.size = f(this.element)
            }, g.prototype._getMeasurement = function(e, t) {
                var n, i = this.options[e];
                i ? ("string" == typeof i ? n = this.element.querySelector(i) : p(i) && (n = i), this[e] = n ? f(n)[t] : i) : this[e] = 0
            }, g.prototype.layoutItems = function(e, t) {
                e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
            }, g.prototype._getItemsForLayout = function(e) {
                for (var t = [], n = 0, i = e.length; i > n; n++) {
                    var r = e[n];
                    r.isIgnored || t.push(r)
                }
                return t
            }, g.prototype._layoutItems = function(e, t) {
                function n() {
                    i.emitEvent("layoutComplete", [i, e])
                }
                var i = this;
                if (!e || !e.length) return void n();
                this._itemsOn(e, "layout", n);
                for (var r = [], o = 0, a = e.length; a > o; o++) {
                    var s = e[o],
                        l = this._getItemLayoutPosition(s);
                    l.item = s, l.isInstant = t || s.isLayoutInstant, r.push(l)
                }
                this._processLayoutQueue(r)
            }, g.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, g.prototype._processLayoutQueue = function(e) {
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e[t];
                    this._positionItem(i.item, i.x, i.y, i.isInstant)
                }
            }, g.prototype._positionItem = function(e, t, n, i) {
                i ? e.goTo(t, n) : e.moveTo(t, n)
            }, g.prototype._postLayout = function() {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }, g.prototype._getContainerSize = c, g.prototype._setContainerMeasure = function(e, t) {
                if (void 0 !== e) {
                    var n = this.size;
                    n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
                }
            }, g.prototype._itemsOn = function(e, t, n) {
                function i() {
                    return r++, r === o && n.call(a), !0
                }
                for (var r = 0, o = e.length, a = this, s = 0, l = e.length; l > s; s++) {
                    var u = e[s];
                    u.on(t, i)
                }
            }, g.prototype.ignore = function(e) {
                var t = this.getItem(e);
                t && (t.isIgnored = !0)
            }, g.prototype.unignore = function(e) {
                var t = this.getItem(e);
                t && delete t.isIgnored
            }, g.prototype.stamp = function(e) {
                if (e = this._find(e)) {
                    this.stamps = this.stamps.concat(e);
                    for (var t = 0, n = e.length; n > t; t++) {
                        var i = e[t];
                        this.ignore(i)
                    }
                }
            }, g.prototype.unstamp = function(e) {
                if (e = this._find(e))
                    for (var t = 0, n = e.length; n > t; t++) {
                        var i = e[t];
                        r(i, this.stamps), this.unignore(i)
                    }
            }, g.prototype._find = function(e) {
                return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = i(e)) : void 0
            }, g.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var e = 0, t = this.stamps.length; t > e; e++) {
                        var n = this.stamps[e];
                        this._manageStamp(n)
                    }
                }
            }, g.prototype._getBoundingRect = function() {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
                }
            }, g.prototype._manageStamp = c, g.prototype._getElementOffset = function(e) {
                var t = e.getBoundingClientRect(),
                    n = this._boundingRect,
                    i = f(e),
                    r = {
                        left: t.left - n.left - i.marginLeft,
                        top: t.top - n.top - i.marginTop,
                        right: n.right - t.right - i.marginRight,
                        bottom: n.bottom - t.bottom - i.marginBottom
                    };
                return r
            }, g.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, g.prototype.bindResize = function() {
                this.isResizeBound || (n.bind(e, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function() {
                n.unbind(e, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function() {
                function e() {
                    t.resize(), delete t.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var t = this;
                this.resizeTimeout = setTimeout(e, 100)
            }, g.prototype.resize = function() {
                var e = f(this.element),
                    t = this.size && e;
                t && e.innerWidth === this.size.innerWidth || this.layout()
            }, g.prototype.addItems = function(e) {
                var t = this._itemize(e);
                return t.length && (this.items = this.items.concat(t)), t
            }, g.prototype.appended = function(e) {
                var t = this.addItems(e);
                t.length && (this.layoutItems(t, !0), this.reveal(t))
            }, g.prototype.prepended = function(e) {
                var t = this._itemize(e);
                if (t.length) {
                    var n = this.items.slice(0);
                    this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
                }
            }, g.prototype.reveal = function(e) {
                var t = e && e.length;
                if (t)
                    for (var n = 0; t > n; n++) {
                        var i = e[n];
                        i.reveal()
                    }
            }, g.prototype.hide = function(e) {
                var t = e && e.length;
                if (t)
                    for (var n = 0; t > n; n++) {
                        var i = e[n];
                        i.hide()
                    }
            }, g.prototype.getItem = function(e) {
                for (var t = 0, n = this.items.length; n > t; t++) {
                    var i = this.items[t];
                    if (i.element === e) return i
                }
            }, g.prototype.getItems = function(e) {
                if (e && e.length) {
                    for (var t = [], n = 0, i = e.length; i > n; n++) {
                        var r = e[n],
                            o = this.getItem(r);
                        o && t.push(o)
                    }
                    return t
                }
            }, g.prototype.remove = function(e) {
                e = i(e);
                var t = this.getItems(e);
                if (t && t.length) {
                    this._itemsOn(t, "remove", function() {
                        this.emitEvent("removeComplete", [this, t])
                    });
                    for (var n = 0, o = t.length; o > n; n++) {
                        var a = t[n];
                        a.remove(), r(a, this.items)
                    }
                }
            }, g.prototype.destroy = function() {
                var e = this.element.style;
                e.height = "", e.position = "", e.width = "";
                for (var t = 0, n = this.items.length; n > t; t++) {
                    var i = this.items[t];
                    i.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
            }, g.data = function(e) {
                var t = e && e.outlayerGUID;
                return t && b[t]
            }, g.create = function(e, n) {
                function i() {
                    g.apply(this, arguments)
                }
                return Object.create ? i.prototype = Object.create(g.prototype) : t(i.prototype, g.prototype), i.prototype.constructor = i, v(i, "options"), t(i.prototype.options, n), i.namespace = e, i.data = g.data, i.Item = function() {
                    m.apply(this, arguments)
                }, i.Item.prototype = new m, a(function() {
                    for (var t = o(e), n = s.querySelectorAll(".js-" + t), r = "data-" + t + "-options", a = 0, c = n.length; c > a; a++) {
                        var d, p = n[a],
                            f = p.getAttribute(r);
                        try {
                            d = f && JSON.parse(f)
                        } catch (h) {
                            l && l.error("Error parsing " + r + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + h);
                            continue
                        }
                        var m = new i(p, d);
                        u && u.data(p, e, m)
                    }
                }), u && u.bridget && u.bridget(e, i), i
            }, g.Item = m, g
        }
        var s = e.document,
            l = e.console,
            u = e.jQuery,
            c = function() {},
            d = Object.prototype.toString,
            p = "object" == typeof HTMLElement ? function(e) {
                return e instanceof HTMLElement
            } : function(e) {
                return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            f = Array.prototype.indexOf ? function(e, t) {
                return e.indexOf(t)
            } : function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], a) : e.Outlayer = a(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
    }(window),
    function(e) {
        function t() {
            function e(t) {
                for (var n in e.defaults) this[n] = e.defaults[n];
                for (n in t) this[n] = t[n]
            }
            return n.Rect = e, e.defaults = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, e.prototype.contains = function(e) {
                var t = e.width || 0,
                    n = e.height || 0;
                return this.x <= e.x && this.y <= e.y && this.x + this.width >= e.x + t && this.y + this.height >= e.y + n
            }, e.prototype.overlaps = function(e) {
                var t = this.x + this.width,
                    n = this.y + this.height,
                    i = e.x + e.width,
                    r = e.y + e.height;
                return i > this.x && t > e.x && r > this.y && n > e.y
            }, e.prototype.getMaximalFreeRects = function(t) {
                if (!this.overlaps(t)) return !1;
                var n, i = [],
                    r = this.x + this.width,
                    o = this.y + this.height,
                    a = t.x + t.width,
                    s = t.y + t.height;
                return this.y < t.y && (n = new e({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: t.y - this.y
                }), i.push(n)), r > a && (n = new e({
                    x: a,
                    y: this.y,
                    width: r - a,
                    height: this.height
                }), i.push(n)), o > s && (n = new e({
                    x: this.x,
                    y: s,
                    width: this.width,
                    height: o - s
                }), i.push(n)), this.x < t.x && (n = new e({
                    x: this.x,
                    y: this.y,
                    width: t.x - this.x,
                    height: this.height
                }), i.push(n)), i
            }, e.prototype.canFit = function(e) {
                return this.width >= e.width && this.height >= e.height
            }, e
        }
        var n = e.Packery = function() {};
        "function" == typeof define && define.amd ? define("packery/js/rect", t) : (e.Packery = e.Packery || {}, e.Packery.Rect = t())
    }(window),
    function(e) {
        function t(e) {
            function t(e, t, n) {
                this.width = e || 0, this.height = t || 0, this.sortDirection = n || "downwardLeftToRight", this.reset()
            }
            t.prototype.reset = function() {
                this.spaces = [], this.newSpaces = [];
                var t = new e({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(t), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
            }, t.prototype.pack = function(e) {
                for (var t = 0, n = this.spaces.length; n > t; t++) {
                    var i = this.spaces[t];
                    if (i.canFit(e)) {
                        this.placeInSpace(e, i);
                        break
                    }
                }
            }, t.prototype.placeInSpace = function(e, t) {
                e.x = t.x, e.y = t.y, this.placed(e)
            }, t.prototype.placed = function(e) {
                for (var n = [], i = 0, r = this.spaces.length; r > i; i++) {
                    var o = this.spaces[i],
                        a = o.getMaximalFreeRects(e);
                    a ? n.push.apply(n, a) : n.push(o)
                }
                this.spaces = n, t.mergeRects(this.spaces), this.spaces.sort(this.sorter)
            }, t.mergeRects = function(e) {
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e[t];
                    if (i) {
                        var r = e.slice(0);
                        r.splice(t, 1);
                        for (var o = 0, a = 0, s = r.length; s > a; a++) {
                            var l = r[a],
                                u = t > a ? 0 : 1;
                            i.contains(l) && (e.splice(a + u - o, 1), o++)
                        }
                    }
                }
                return e
            };
            var n = {
                downwardLeftToRight: function(e, t) {
                    return e.y - t.y || e.x - t.x
                },
                rightwardTopToBottom: function(e, t) {
                    return e.x - t.x || e.y - t.y
                }
            };
            return t
        }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], t);
        else {
            var n = e.Packery = e.Packery || {};
            n.Packer = t(n.Rect)
        }
    }(window),
    function(e) {
        function t(e, t, n) {
            var i = e("transform"),
                r = function() {
                    t.Item.apply(this, arguments)
                };
            r.prototype = new t.Item;
            var o = r.prototype._create;
            return r.prototype._create = function() {
                o.call(this), this.rect = new n, this.placeRect = new n
            }, r.prototype.dragStart = function() {
                this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
            }, r.prototype.dragMove = function(e, t) {
                this.didDrag = !0;
                var n = this.layout.size;
                e -= n.paddingLeft, t -= n.paddingTop, this.positionPlaceRect(e, t)
            }, r.prototype.dragStop = function() {
                this.getPosition();
                var e = this.position.x !== this.placeRect.x,
                    t = this.position.y !== this.placeRect.y;
                this.needsPositioning = e || t, this.didDrag = !1
            }, r.prototype.positionPlaceRect = function(e, t, n) {
                this.placeRect.x = this.getPlaceRectCoord(e, !0), this.placeRect.y = this.getPlaceRectCoord(t, !1, n)
            }, r.prototype.getPlaceRectCoord = function(e, t, n) {
                var i = t ? "Width" : "Height",
                    r = this.size["outer" + i],
                    o = this.layout[t ? "columnWidth" : "rowHeight"],
                    a = this.layout.size["inner" + i];
                t || (a = Math.max(a, this.layout.maxY), this.layout.rowHeight || (a -= this.layout.gutter));
                var s;
                if (o) {
                    o += this.layout.gutter, a += t ? this.layout.gutter : 0, e = Math.round(e / o);
                    var l;
                    l = this.layout.options.isHorizontal ? t ? "ceil" : "floor" : t ? "floor" : "ceil";
                    var u = Math[l](a / o);
                    u -= Math.ceil(r / o), s = u
                } else s = a - r;
                return e = n ? e : Math.min(e, s), e *= o || 1, Math.max(0, e)
            }, r.prototype.copyPlaceRectPosition = function() {
                this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
            }, r
        }
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], t) : e.Packery.Item = t(e.getStyleProperty, e.Outlayer, e.Packery.Rect)
    }(window),
    function(e) {
        function t(e, t, n, i, r, o) {
            function a(e, t) {
                return e.position.y - t.position.y || e.position.x - t.position.x
            }

            function s(e, t) {
                return e.position.x - t.position.x || e.position.y - t.position.y
            }
            var l = n.create("packery");
            return l.Item = o, l.prototype._create = function() {
                n.prototype._create.call(this), this.packer = new r, this.stamp(this.options.stamped);
                var e = this;
                this.handleDraggabilly = {
                    dragStart: function(t) {
                        e.itemDragStart(t.element)
                    },
                    dragMove: function(t) {
                        e.itemDragMove(t.element, t.position.x, t.position.y)
                    },
                    dragEnd: function(t) {
                        e.itemDragEnd(t.element)
                    }
                }, this.handleUIDraggable = {
                    start: function(t) {
                        e.itemDragStart(t.currentTarget)
                    },
                    drag: function(t, n) {
                        e.itemDragMove(t.currentTarget, n.position.left, n.position.top)
                    },
                    stop: function(t) {
                        e.itemDragEnd(t.currentTarget)
                    }
                }
            }, l.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurements();
                var e = this.packer;
                this.options.isHorizontal ? (e.width = Number.POSITIVE_INFINITY, e.height = this.size.innerHeight + this.gutter, e.sortDirection = "rightwardTopToBottom") : (e.width = this.size.innerWidth + this.gutter, e.height = Number.POSITIVE_INFINITY, e.sortDirection = "downwardLeftToRight"), e.reset(), this.maxY = 0, this.maxX = 0
            }, l.prototype._getMeasurements = function() {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
            }, l.prototype._getItemLayoutPosition = function(e) {
                return this._packItem(e), e.rect
            }, l.prototype._packItem = function(e) {
                this._setRectSize(e.element, e.rect), this.packer.pack(e.rect), this._setMaxXY(e.rect)
            }, l.prototype._setMaxXY = function(e) {
                this.maxX = Math.max(e.x + e.width, this.maxX), this.maxY = Math.max(e.y + e.height, this.maxY)
            }, l.prototype._setRectSize = function(e, n) {
                var i = t(e),
                    r = i.outerWidth,
                    o = i.outerHeight,
                    a = this.columnWidth + this.gutter,
                    s = this.rowHeight + this.gutter;
                r = this.columnWidth ? Math.ceil(r / a) * a : r + this.gutter, o = this.rowHeight ? Math.ceil(o / s) * s : o + this.gutter, n.width = Math.min(r, this.packer.width), n.height = o
            }, l.prototype._getContainerSize = function() {
                return this.options.isHorizontal ? {
                    width: this.maxX - this.gutter
                } : {
                    height: this.maxY - this.gutter
                }
            }, l.prototype._manageStamp = function(e) {
                var t, n = this.getItem(e);
                if (n && n.isPlacing) t = n.placeRect;
                else {
                    var r = this._getElementOffset(e);
                    t = new i({
                        x: this.options.isOriginLeft ? r.left : r.right,
                        y: this.options.isOriginTop ? r.top : r.bottom
                    })
                }
                this._setRectSize(e, t), this.packer.placed(t), this._setMaxXY(t)
            }, l.prototype.sortItemsByPosition = function() {
                var e = this.options.isHorizontal ? s : a;
                this.items.sort(e)
            }, l.prototype.fit = function(e, t, n) {
                var i = this.getItem(e);
                i && (this._getMeasurements(), this.stamp(i.element), i.getSize(), i.isPlacing = !0, t = void 0 === t ? i.rect.x : t, n = void 0 === n ? i.rect.y : n, i.positionPlaceRect(t, n, !0), this._bindFitEvents(i), i.moveTo(i.placeRect.x, i.placeRect.y), this.layout(), this.unstamp(i.element), this.sortItemsByPosition(), i.isPlacing = !1, i.copyPlaceRectPosition())
            }, l.prototype._bindFitEvents = function(e) {
                function t() {
                    i++, 2 === i && n.emitEvent("fitComplete", [n, e])
                }
                var n = this,
                    i = 0;
                e.on("layout", function() {
                    return t(), !0
                }), this.on("layoutComplete", function() {
                    return t(), !0
                })
            }, l.prototype.resize = function() {
                var e = t(this.element),
                    n = this.size && e,
                    i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                n && e[i] === this.size[i] || this.layout()
            }, l.prototype.itemDragStart = function(e) {
                this.stamp(e);
                var t = this.getItem(e);
                t && t.dragStart()
            }, l.prototype.itemDragMove = function(e, t, n) {
                function i() {
                    o.layout(), delete o.dragTimeout
                }
                var r = this.getItem(e);
                r && r.dragMove(t, n);
                var o = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(i, 40)
            }, l.prototype.clearDragTimeout = function() {
                this.dragTimeout && clearTimeout(this.dragTimeout)
            }, l.prototype.itemDragEnd = function(t) {
                var n, i = this.getItem(t);
                if (i && (n = i.didDrag, i.dragStop()), !i || !n && !i.needsPositioning) return void this.unstamp(t);
                e.add(i.element, "is-positioning-post-drag");
                var r = this._getDragEndLayoutComplete(t, i);
                i.needsPositioning ? (i.on("layout", r), i.moveTo(i.placeRect.x, i.placeRect.y)) : i && i.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", r), this.layout()
            }, l.prototype._getDragEndLayoutComplete = function(t, n) {
                var i = n && n.needsPositioning,
                    r = 0,
                    o = i ? 2 : 1,
                    a = this;
                return function() {
                    return r++, r !== o ? !0 : (n && (e.remove(n.element, "is-positioning-post-drag"), n.isPlacing = !1, n.copyPlaceRectPosition()), a.unstamp(t), a.sortItemsByPosition(), i && a.emitEvent("dragItemPositioned", [a, n]), !0)
                }
            }, l.prototype.bindDraggabillyEvents = function(e) {
                e.on("dragStart", this.handleDraggabilly.dragStart), e.on("dragMove", this.handleDraggabilly.dragMove), e.on("dragEnd", this.handleDraggabilly.dragEnd)
            }, l.prototype.bindUIDraggableEvents = function(e) {
                e.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
            }, l.Rect = i, l.Packer = r, l
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], t) : e.Packery = t(e.classie, e.getSize, e.Outlayer, e.Packery.Rect, e.Packery.Packer, e.Packery.Item)
    }(window),
    /*! Picturefill - v2.1.0 - 2014-07-25
     * http://scottjehl.github.io/picturefill
     * Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
    window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var e = window.styleMedia || window.media;
        if (!e) {
            var t = document.createElement("style"),
                n = document.getElementsByTagName("script")[0],
                i = null;
            t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                matchMedium: function(e) {
                    var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width
                }
            }
        }
        return function(t) {
            return {
                matches: e.matchMedium(t || "all"),
                media: t || "all"
            }
        }
    }()),
    function(e, t) {
        "use strict";

        function n(e) {
            var t, n, i, o, a, s = e || {};
            t = s.elements || r.getAllElements();
            for (var l = 0, u = t.length; u > l; l++)
                if (n = t[l], i = n.parentNode, o = void 0, a = void 0, n[r.ns] || (n[r.ns] = {}), s.reevaluate || !n[r.ns].evaluated) {
                    if ("PICTURE" === i.nodeName.toUpperCase()) {
                        if (r.removeVideoShim(i), o = r.getMatch(n, i), o === !1) continue
                    } else o = void 0;
                    ("PICTURE" === i.nodeName.toUpperCase() || n.srcset && !r.srcsetSupported || !r.sizesSupported && n.srcset && n.srcset.indexOf("w") > -1) && r.dodgeSrcset(n), o ? (a = r.processSourceSet(o), r.applyBestCandidate(a, n)) : (a = r.processSourceSet(n), (void 0 === n.srcset || n[r.ns].srcset) && r.applyBestCandidate(a, n)), n[r.ns].evaluated = !0
                }
        }

        function i() {
            n();
            var i = setInterval(function() {
                return n(), /^loaded|^i|^c/.test(t.readyState) ? void clearInterval(i) : void 0
            }, 250);
            if (e.addEventListener) {
                var r;
                e.addEventListener("resize", function() {
                    e._picturefillWorking || (e._picturefillWorking = !0, e.clearTimeout(r), r = e.setTimeout(function() {
                        n({
                            reevaluate: !0
                        }), e._picturefillWorking = !1
                    }, 60))
                }, !1)
            }
        }
        if (e.HTMLPictureElement) return void(e.picturefill = function() {});
        t.createElement("picture");
        var r = {};
        r.ns = "picturefill", r.srcsetSupported = "srcset" in t.createElement("img"), r.sizesSupported = e.HTMLImageElement.sizes, r.trim = function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }, r.endsWith = function(e, t) {
            return e.endsWith ? e.endsWith(t) : -1 !== e.indexOf(t, e.length - t.length)
        }, r.matchesMedia = function(t) {
            return e.matchMedia && e.matchMedia(t).matches
        }, r.getDpr = function() {
            return e.devicePixelRatio || 1
        }, r.getWidthFromLength = function(e) {
            return e = e && (parseFloat(e) > 0 || e.indexOf("calc(") > -1) ? e : "100vw", e = e.replace("vw", "%"), r.lengthEl || (r.lengthEl = t.createElement("div"), t.documentElement.insertBefore(r.lengthEl, t.documentElement.firstChild)), r.lengthEl.style.cssText = "position: absolute; left: 0; width: " + e + ";", r.lengthEl.offsetWidth <= 0 && (r.lengthEl.style.cssText = "width: 100%;"), r.lengthEl.offsetWidth
        }, r.types = {}, r.types["image/jpeg"] = !0, r.types["image/gif"] = !0, r.types["image/png"] = !0, r.types["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), r.types["image/webp"] = function() {
            var t = new e.Image,
                i = "image/webp";
            t.onerror = function() {
                r.types[i] = !1, n()
            }, t.onload = function() {
                r.types[i] = 1 === t.width, n()
            }, t.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
        }, r.verifyTypeSupport = function(e) {
            var t = e.getAttribute("type");
            return null === t || "" === t ? !0 : "function" == typeof r.types[t] ? (r.types[t](), "pending") : r.types[t]
        }, r.parseSize = function(e) {
            var t = /(\([^)]+\))?\s*(.+)/g.exec(e);
            return {
                media: t && t[1],
                length: t && t[2]
            }
        }, r.findWidthFromSourceSize = function(e) {
            for (var t, n = r.trim(e).split(/\s*,\s*/), i = 0, o = n.length; o > i; i++) {
                var a = n[i],
                    s = r.parseSize(a),
                    l = s.length,
                    u = s.media;
                if (l && (!u || r.matchesMedia(u))) {
                    t = l;
                    break
                }
            }
            return r.getWidthFromLength(t)
        }, r.parseSrcset = function(e) {
            for (var t = [];
                "" !== e;) {
                e = e.replace(/^\s+/g, "");
                var n, i = e.search(/\s/g),
                    r = null;
                if (-1 !== i) {
                    n = e.slice(0, i);
                    var o = n[n.length - 1];
                    if (("," === o || "" === n) && (n = n.replace(/,+$/, ""), r = ""), e = e.slice(i + 1), null === r) {
                        var a = e.indexOf(","); - 1 !== a ? (r = e.slice(0, a), e = e.slice(a + 1)) : (r = e, e = "")
                    }
                } else n = e, e = "";
                (n || r) && t.push({
                    url: n,
                    descriptor: r
                })
            }
            return t
        }, r.parseDescriptor = function(e, t) {
            var n, i = t || "100vw",
                o = e && e.replace(/(^\s+|\s+$)/g, ""),
                a = r.findWidthFromSourceSize(i);
            if (o)
                for (var s = o.split(" "), l = s.length + 1; l >= 0; l--)
                    if (void 0 !== s[l]) {
                        var u = s[l],
                            c = u && u.slice(u.length - 1);
                        if ("h" !== c && "w" !== c || r.sizesSupported) {
                            if ("x" === c) {
                                var d = u && parseFloat(u, 10);
                                n = d && !isNaN(d) ? d : 1
                            }
                        } else n = parseFloat(parseInt(u, 10) / a)
                    }
            return n || 1
        }, r.getCandidatesFromSourceSet = function(e, t) {
            for (var n = r.parseSrcset(e), i = [], o = 0, a = n.length; a > o; o++) {
                var s = n[o];
                i.push({
                    url: s.url,
                    resolution: r.parseDescriptor(s.descriptor, t)
                })
            }
            return i
        }, r.dodgeSrcset = function(e) {
            e.srcset && (e[r.ns].srcset = e.srcset, e.removeAttribute("srcset"))
        }, r.processSourceSet = function(e) {
            var t = e.getAttribute("srcset"),
                n = e.getAttribute("sizes"),
                i = [];
            return "IMG" === e.nodeName.toUpperCase() && e[r.ns] && e[r.ns].srcset && (t = e[r.ns].srcset), t && (i = r.getCandidatesFromSourceSet(t, n)), i
        }, r.applyBestCandidate = function(e, t) {
            var n, i, o;
            e.sort(r.ascendingSort), i = e.length, o = e[i - 1];
            for (var a = 0; i > a; a++)
                if (n = e[a], n.resolution >= r.getDpr()) {
                    o = n;
                    break
                }
            o && !r.endsWith(t.src, o.url) && (t.src = o.url, t.currentSrc = t.src)
        }, r.ascendingSort = function(e, t) {
            return e.resolution - t.resolution
        }, r.removeVideoShim = function(e) {
            var t = e.getElementsByTagName("video");
            if (t.length) {
                for (var n = t[0], i = n.getElementsByTagName("source"); i.length;) e.insertBefore(i[0], n);
                n.parentNode.removeChild(n)
            }
        }, r.getAllElements = function() {
            for (var e = [], n = t.getElementsByTagName("img"), i = 0, o = n.length; o > i; i++) {
                var a = n[i];
                ("PICTURE" === a.parentNode.nodeName.toUpperCase() || null !== a.getAttribute("srcset") || a[r.ns] && null !== a[r.ns].srcset) && e.push(a)
            }
            return e
        }, r.getMatch = function(e, t) {
            for (var n, i = t.childNodes, o = 0, a = i.length; a > o; o++) {
                var s = i[o];
                if (1 === s.nodeType) {
                    if (s === e) return n;
                    if ("SOURCE" === s.nodeName.toUpperCase()) {
                        null !== s.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                        var l = s.getAttribute("media");
                        if (s.getAttribute("srcset") && (!l || r.matchesMedia(l))) {
                            var u = r.verifyTypeSupport(s);
                            if (u === !0) {
                                n = s;
                                break
                            }
                            if ("pending" === u) return !1
                        }
                    }
                }
            }
            return n
        }, i(), n._ = r, "object" == typeof module && "object" == typeof module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
            return n
        }) : "object" == typeof e && (e.picturefill = n)
    }(this, this.document),
    /*! responsive-nav.js 1.0.32
     * https://github.com/viljamis/responsive-nav.js
     * http://responsive-nav.com
     *
     * Copyright (c) 2014 @viljamis
     * Available under the MIT license
     */
    function(e, t, n) {
        "use strict";
        var i = function(i, r) {
            var o = !!t.getComputedStyle;
            o || (t.getComputedStyle = function(e) {
                return this.el = e, this.getPropertyValue = function(t) {
                    var n = /(\-([a-z]){1})/g;
                    return "float" === t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
                        return arguments[2].toUpperCase()
                    })), e.currentStyle[t] ? e.currentStyle[t] : null
                }, this
            });
            var a, s, l, u, c, d, p = function(e, t, n, i) {
                    if ("addEventListener" in e) try {
                        e.addEventListener(t, n, i)
                    } catch (r) {
                        if ("object" != typeof n || !n.handleEvent) throw r;
                        e.addEventListener(t, function(e) {
                            n.handleEvent.call(n, e)
                        }, i)
                    } else "attachEvent" in e && ("object" == typeof n && n.handleEvent ? e.attachEvent("on" + t, function() {
                        n.handleEvent.call(n)
                    }) : e.attachEvent("on" + t, n))
                },
                f = function(e, t, n, i) {
                    if ("removeEventListener" in e) try {
                        e.removeEventListener(t, n, i)
                    } catch (r) {
                        if ("object" != typeof n || !n.handleEvent) throw r;
                        e.removeEventListener(t, function(e) {
                            n.handleEvent.call(n, e)
                        }, i)
                    } else "detachEvent" in e && ("object" == typeof n && n.handleEvent ? e.detachEvent("on" + t, function() {
                        n.handleEvent.call(n)
                    }) : e.detachEvent("on" + t, n))
                },
                h = function(e) {
                    if (e.children.length < 1) throw new Error("The Nav container has no containing elements");
                    for (var t = [], n = 0; n < e.children.length; n++) 1 === e.children[n].nodeType && t.push(e.children[n]);
                    return t
                },
                m = function(e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                },
                g = function(e, t) {
                    0 !== e.className.indexOf(t) && (e.className += " " + t, e.className = e.className.replace(/(^\s*)|(\s*$)/g, ""))
                },
                v = function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/(^\s*)|(\s*$)/g, "")
                },
                y = function(e, t, n) {
                    for (var i = 0; i < e.length; i++) t.call(n, i, e[i])
                },
                b = e.createElement("style"),
                x = e.documentElement,
                w = function(t, n) {
                    var i;
                    this.options = {
                        animate: !0,
                        transition: 284,
                        label: "Menu",
                        insert: "before",
                        customToggle: "",
                        closeOnNavClick: !1,
                        openPos: "relative",
                        navClass: "nav-collapse",
                        navActiveClass: "js-nav-active",
                        jsClass: "js",
                        init: function() {},
                        open: function() {},
                        close: function() {}
                    };
                    for (i in n) this.options[i] = n[i];
                    if (g(x, this.options.jsClass), this.wrapperEl = t.replace("#", ""), e.getElementById(this.wrapperEl)) this.wrapper = e.getElementById(this.wrapperEl);
                    else {
                        if (!e.querySelector(this.wrapperEl)) throw new Error("The nav element you are trying to select doesn't exist");
                        this.wrapper = e.querySelector(this.wrapperEl)
                    }
                    this.wrapper.inner = h(this.wrapper), s = this.options, a = this.wrapper, this._init(this)
                };
            return w.prototype = {
                destroy: function() {
                    this._removeStyles(), v(a, "closed"), v(a, "opened"), v(a, s.navClass), v(a, s.navClass + "-" + this.index), v(x, s.navActiveClass), a.removeAttribute("style"), a.removeAttribute("aria-hidden"), f(t, "resize", this, !1), f(e.body, "touchmove", this, !1), f(l, "touchstart", this, !1), f(l, "touchend", this, !1), f(l, "mouseup", this, !1), f(l, "keyup", this, !1), f(l, "click", this, !1), s.customToggle ? l.removeAttribute("aria-hidden") : l.parentNode.removeChild(l)
                },
                toggle: function() {
                    u === !0 && (d ? this.close() : this.open())
                },
                open: function() {
                    d || (v(a, "closed"), g(a, "opened"), g(x, s.navActiveClass), g(l, "active"), a.style.position = s.openPos, m(a, {
                        "aria-hidden": "false"
                    }), d = !0, s.open())
                },
                close: function() {
                    d && (g(a, "closed"), v(a, "opened"), v(x, s.navActiveClass), v(l, "active"), m(a, {
                        "aria-hidden": "true"
                    }), s.animate ? (u = !1, setTimeout(function() {
                        a.style.position = "absolute", u = !0
                    }, s.transition + 10)) : a.style.position = "absolute", d = !1, s.close())
                },
                resize: function() {
                    "none" !== t.getComputedStyle(l, null).getPropertyValue("display") ? (c = !0, m(l, {
                        "aria-hidden": "false"
                    }), a.className.match(/(^|\s)closed(\s|$)/) && (m(a, {
                        "aria-hidden": "true"
                    }), a.style.position = "absolute"), this._createStyles(), this._calcHeight()) : (c = !1, m(l, {
                        "aria-hidden": "true"
                    }), m(a, {
                        "aria-hidden": "false"
                    }), a.style.position = s.openPos, this._removeStyles())
                },
                handleEvent: function(e) {
                    var n = e || t.event;
                    switch (n.type) {
                        case "touchstart":
                            this._onTouchStart(n);
                            break;
                        case "touchmove":
                            this._onTouchMove(n);
                            break;
                        case "touchend":
                        case "mouseup":
                            this._onTouchEnd(n);
                            break;
                        case "click":
                            this._preventDefault(n);
                            break;
                        case "keyup":
                            this._onKeyUp(n);
                            break;
                        case "resize":
                            this.resize(n)
                    }
                },
                _init: function() {
                    this.index = n++, g(a, s.navClass), g(a, s.navClass + "-" + this.index), g(a, "closed"), u = !0, d = !1, this._closeOnNavClick(), this._createToggle(), this._transitions(), this.resize();
                    var i = this;
                    setTimeout(function() {
                        i.resize()
                    }, 20), p(t, "resize", this, !1), p(e.body, "touchmove", this, !1), p(l, "touchstart", this, !1), p(l, "touchend", this, !1), p(l, "mouseup", this, !1), p(l, "keyup", this, !1), p(l, "click", this, !1), s.init()
                },
                _createStyles: function() {
                    b.parentNode || (b.type = "text/css", e.getElementsByTagName("head")[0].appendChild(b))
                },
                _removeStyles: function() {
                    b.parentNode && b.parentNode.removeChild(b)
                },
                _createToggle: function() {
                    if (s.customToggle) {
                        var t = s.customToggle.replace("#", "");
                        if (e.getElementById(t)) l = e.getElementById(t);
                        else {
                            if (!e.querySelector(t)) throw new Error("The custom nav toggle you are trying to select doesn't exist");
                            l = e.querySelector(t)
                        }
                    } else {
                        var n = e.createElement("a");
                        n.innerHTML = s.label, m(n, {
                            href: "#",
                            "class": "nav-toggle"
                        }), "after" === s.insert ? a.parentNode.insertBefore(n, a.nextSibling) : a.parentNode.insertBefore(n, a), l = n
                    }
                },
                _closeOnNavClick: function() {
                    if (s.closeOnNavClick && "querySelectorAll" in e) {
                        var t = a.querySelectorAll("a"),
                            n = this;
                        y(t, function(e, i) {
                            p(t[e], "click", function() {
                                c && n.toggle()
                            }, !1)
                        })
                    }
                },
                _preventDefault: function(e) {
                    e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : e.returnValue = !1
                },
                _onTouchStart: function(t) {
                    t.stopPropagation(), "after" === s.insert && g(e.body, "disable-pointer-events"), this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY, this.touchHasMoved = !1, f(l, "mouseup", this, !1)
                },
                _onTouchMove: function(e) {
                    (Math.abs(e.touches[0].clientX - this.startX) > 10 || Math.abs(e.touches[0].clientY - this.startY) > 10) && (this.touchHasMoved = !0)
                },
                _onTouchEnd: function(n) {
                    if (this._preventDefault(n), !this.touchHasMoved) {
                        if ("touchend" === n.type) return this.toggle(), void("after" === s.insert && setTimeout(function() {
                            v(e.body, "disable-pointer-events")
                        }, s.transition + 300));
                        var i = n || t.event;
                        3 !== i.which && 2 !== i.button && this.toggle()
                    }
                },
                _onKeyUp: function(e) {
                    var n = e || t.event;
                    13 === n.keyCode && this.toggle()
                },
                _transitions: function() {
                    if (s.animate) {
                        var e = a.style,
                            t = "max-height " + s.transition + "ms";
                        e.WebkitTransition = t, e.MozTransition = t, e.OTransition = t, e.transition = t
                    }
                },
                _calcHeight: function() {
                    for (var e = 0, t = 0; t < a.inner.length; t++) e += a.inner[t].offsetHeight;
                    var n = "." + s.jsClass + " ." + s.navClass + "-" + this.index + ".opened{max-height:" + e + "px !important}";
                    b.styleSheet ? b.styleSheet.cssText = n : b.innerHTML = n, n = ""
                }
            }, new w(i, r)
        };
        t.responsiveNav = i
    }(document, window, 0),
    /*!
     * headroom.js v0.5.0 - Give your page some headroom. Hide your header until you need it
     * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
     * License: MIT
     */
    function(e, t) {
        "use strict";

        function n(e) {
            this.callback = e, this.ticking = !1
        }

        function i(e) {
            if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
            var t, n, r = e || {};
            for (n = 1; n < arguments.length; n++) {
                var o = arguments[n] || {};
                for (t in o) "object" == typeof r[t] ? r[t] = i(r[t], o[t]) : r[t] = r[t] || o[t]
            }
            return r
        }

        function r(e, t) {
            t = i(t, r.options), this.lastKnownScrollY = 0, this.elem = e, this.debouncer = new n(this.update.bind(this)), this.tolerance = t.tolerance, this.classes = t.classes, this.offset = t.offset, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop
        }
        var o = {
            bind: !! function() {}.bind,
            classList: "classList" in t.documentElement,
            rAF: !!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame)
        };
        e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame, n.prototype = {
            constructor: n,
            update: function() {
                this.callback && this.callback(), this.ticking = !1
            },
            requestTick: function() {
                this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
            },
            handleEvent: function() {
                this.requestTick()
            }
        }, r.prototype = {
            constructor: r,
            init: function() {
                return r.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
            },
            destroy: function() {
                var t = this.classes;
                this.initialised = !1, e.removeEventListener("scroll", this.debouncer, !1), this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial)
            },
            attachEvent: function() {
                this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, e.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
            },
            unpin: function() {
                var e = this.elem.classList,
                    t = this.classes;
                (e.contains(t.pinned) || !e.contains(t.unpinned)) && (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this))
            },
            pin: function() {
                var e = this.elem.classList,
                    t = this.classes;
                e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this))
            },
            top: function() {
                var e = this.elem.classList,
                    t = this.classes;
                e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this))
            },
            notTop: function() {
                var e = this.elem.classList,
                    t = this.classes;
                e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this))
            },
            getScrollY: function() {
                return void 0 !== e.pageYOffset ? e.pageYOffset : (t.documentElement || t.body.parentNode || t.body).scrollTop
            },
            getViewportHeight: function() {
                return e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
            },
            getDocumentHeight: function() {
                var e = t.body,
                    n = t.documentElement;
                return Math.max(e.scrollHeight, n.scrollHeight, e.offsetHeight, n.offsetHeight, e.clientHeight, n.clientHeight)
            },
            isOutOfBounds: function(e) {
                var t = 0 > e,
                    n = e + this.getViewportHeight() > this.getDocumentHeight();
                return t || n
            },
            toleranceExceeded: function(e) {
                return Math.abs(e - this.lastKnownScrollY) >= this.tolerance
            },
            shouldUnpin: function(e, t) {
                var n = e > this.lastKnownScrollY,
                    i = e >= this.offset;
                return n && i && t
            },
            shouldPin: function(e, t) {
                var n = e < this.lastKnownScrollY,
                    i = e <= this.offset;
                return n && t || i
            },
            update: function() {
                var e = this.getScrollY(),
                    t = this.toleranceExceeded(e);
                this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(e, t) ? this.unpin() : this.shouldPin(e, t) && this.pin(), this.lastKnownScrollY = e)
            }
        }, r.options = {
            tolerance: 0,
            offset: 0,
            classes: {
                pinned: "headroom--pinned",
                unpinned: "headroom--unpinned",
                top: "headroom--top",
                notTop: "headroom--not-top",
                initial: "headroom"
            }
        }, r.cutsTheMustard = "undefined" != typeof o && o.rAF && o.bind && o.classList, e.Headroom = r
    }(window, document),
    function(e) {
        var t = function(t, n) {
            var i = $(e),
                r = !0,
                o = function() {
                    var e = t();
                    r = !0, void 0 === e && i.off("scroll", a)
                },
                a = function() {
                    if (r) {
                        var e = i.height() + i.scrollTop(),
                            t = n.offset().top + n.height(),
                            a = t - e,
                            s = 0 >= a;
                        s && r && (r = !1, o())
                    }
                };
            i.on("scroll", a)
        };
        e.initInfiniteScroll = t
    }(window);
var _LoadMore = function(e) {
    /*!
     * loadMore() -- simple load more implementation, utilising the ?since_id param
     *
     * VanillaJS usage: loadMore({ ...options here... })
     * jQuery usage:    $('.load-more').loadMore({ ...options here... })
     *
     * @param  {object}   opts             Options for the plugin
     * @option {int}      maxId            Current maximum ID –– this will be used in the first load more request
     * @option {int}      itemsPerPage     Items per page. Used to determine when there is nothing to load more
     * @option {boolean}  infiniteScroll   Enable infinite scroll
     * @option {string}   container        CSS selector for the container of items
     * @option {string}   button           CSS selector for the button to watch
     * @option {string}   articles         CSS selector for a single item
     * @option {function} onStart          Called when button has been clicked
     * @option {function} onComplete       Function to call with matching container of the received html
     *                                     and boolean whether all available items have been loaded
     * @option {function} onAllLoaded      Called when there is nothing more to load
     */
    var t = function(t, n) {
        n = n || {}, n.idAttribute = n.idAttribute || "id";
        var i = n.maxId,
            r = n.itemsPerPage,
            o = $(n.button),
            a = void 0,
            s = $("#load-more-state"),
            l = n.onStart || function() {
                t.addClass("loading")
            },
            u = n.onAllLoaded || function() {
                t.addClass("hidden")
            },
            c = function() {
                return t.hasClass("hidden")
            },
            d = function() {
                return t.hasClass("loading")
            },
            p = function() {
                n.onStop ? n.onStop() : t.removeClass("loading"), a = void 0
            },
            f = function(e) {
                return e.length >= r
            },
            h = function(e) {
                return e.length ? e.filter("[data-" + n.idAttribute + "]").last().data(n.idAttribute) : i
            },
            m = function() {
                return $(n.container + " " + n.articles).length
            },
            g = function(e) {
                var t, r, o = $(e);
                t = n.container ? o.find(n.container) : o, a = t.find(n.articles), i = h(a), r = !f(a), r && u(), "function" == typeof n.onComplete && n.onComplete(t, r)
            },
            v = function() {
                var t = e.location.search;
                return t += t.length ? "&" : "?", t += "since_id=" + i, t += "&items=" + m()
            },
            y = function() {
                return e.history && e.history.pushState
            },
            b = function() {
                try {
                    return "sessionStorage" in e && null !== e.sessionStorage
                } catch (t) {
                    return !1
                }
            },
            x = function() {
                return s.length && s.prop("checked")
            },
            w = function(e) {
                var t = $("<div>" + e + "</div>");
                return t.find(n.articles).each(function() {
                    var e = $(this);
                    e.is("[data-lazyad]") && (e.removeAttr("data-lazyad-loaded"), e.html(e.find('[type="text/lazyad"]')))
                }), t.html()
            },
            C = function(e) {
                if (null !== e && "" !== e && void 0 !== e) {
                    var t = $(n.container);
                    t.html(e), "object" == typeof LazyAds && LazyAds.init(), i = h(t.find(n.articles)), "function" == typeof n.reloadPackery && n.reloadPackery(), loadMoreUpdateState()
                }
            },
            T = function() {
                e.loadMoreUpdateState = function() {
                    var t = e.location.href;
                    e.history.replaceState({
                        loadedItemsKey: t
                    }, "", null), e.sessionStorage.setItem(t, w($(n.container).html())), s.length && s.prop("checked", !0)
                }, $(e).load(function() {
                    if (x() && e.history.state) {
                        var t = sessionStorage.getItem(history.state.loadedItemsKey);
                        C(t)
                    }
                })
            },
            E = function() {
                return c() ? void 0 : d() ? !1 : (l(), $.ajax(v()).then(function(e) {
                    g(e), p()
                }), !0)
            };
        o.on("click", function(e) {
            e.preventDefault(), E()
        }), n.keepLoadMoreState && y() && b() ? T() : e.loadMoreUpdateState = function() {}, n.infiniteScroll && e.initInfiniteScroll && e.initInfiniteScroll(E, o)
    };
    e.loadMore = function(e) {
        var n = $(e.container);
        t(n, e)
    }, $.fn.loadMore = function(e) {
        this.each(function() {
            t($(this), e)
        })
    }
}(window);
! function(e, t) {
    "use strict";
    if (Function.prototype.bind && document.documentElement.classList && window.requestAnimationFrame) {
        var n = new Headroom(t(".nav")[0], {
            tolerance: 20
        });
        n.init()
    }
}(this, jQuery),
function(e, t) {
    "use strict";
    var n = t(".js-packery"),
        i = "article";
    e.initPackery = function(t) {
        return 0 !== t.find(i).length ? (e.pckry = new Packery(t[0], {
            itemSelector: i
        }), imagesLoaded(t[0], function() {
            e.pckry.layout()
        }), pckry) : void 0
    }, e.reloadPackery = function() {
        e.pckry.destroy(), e.pckry = initPackery(t(".js-packery"))
    }, n.length && n.each(function() {
        initPackery(t(this))
    })
}(this, jQuery),
function(e, t) {
    "use strict";
    var n = t(".js-load-more");
    if (n.length) {
        var i = t(".js-load-more-items");
        n.loadMore({
            container: ".js-load-more-items",
            articles: "article",
            button: ".js-load-more",
            maxId: t(".js-load-more-items article").last().data("id"),
            itemsPerPage: e.Futurice.itemsPerPage,
            infiniteScroll: !1,
            keepLoadMoreState: !0,
            onComplete: function(t, r) {
                var o;
                t && (o = t.find("article"), i.append(o), e.loadMoreUpdateState(), n.removeClass("loading"), o.length < e.Futurice.itemsPerPage && n.hide())
            },
            onStop: function() {}
        })
    }
}(this, jQuery),
function(e, t) {
    "use strict";

    function n() {
        r.removeClass("careers-blocks--details-visible")
    }

    function i(e) {
        n(), t(e).addClass("careers-blocks--details-visible")
    }
    var r = t(".careers-blocks");
    e.location.hash && i(e.location.hash), t(".careers-block--location").click(function() {
        t(this).parent(".careers-blocks").toggleClass("careers-blocks--details-visible")
    })
}(this, jQuery),
function(e, t) {
    "use strict";

    function n() {
        r.removeClass("contact-blocks--details-visible")
    }

    function i(e) {
        n(), t(e).addClass("contact-blocks--details-visible")
    }
    var r = t(".contact-blocks");
    e.location.hash && i(e.location.hash), t(".contact-block--location").click(function() {
        t(this).parent(".contact-blocks").toggleClass("contact-blocks--details-visible")
    })
}(this, jQuery),
function(e, t) {
    "use strict";

    function n() {
        var e = "",
            n = t(".js-people-filter--tag").val(),
            i = t(".js-people-filter--location").val();
        n.length && (e += "&tag=" + n), i.length && (e += "&location=" + i), e.length ? window.location.href = "?" + e.replace(/^&/, "") : window.location.href = window.location.href.split("?")[0]
    }
    t(".js-people-filter--tag, .js-people-filter--location").change(n)
}(this, jQuery), $("body").width() > 1024 && $(function() {
    "use strict";

    function e(e, t) {
        var r = {
            method: e
        };
        t && (r.value = t), n[0].contentWindow.postMessage(JSON.stringify(r), i)
    }

    function t(t) {
        var n;
        if (!/^https?:\/\/player.vimeo.com/.test(t.origin)) return !1;
        switch ("*" === i && (i = t.origin), n = JSON.parse(t.data), n.event) {
            case "ready":
                e("setVolume", "0"), e("play")
        }
    }
    var n = $("#futurice-reel"),
        i = "*";
    n.attr("src", n.data("src")), window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent("onmessage", t, !1)
}), document.createElement("picture");
var nav = responsiveNav(".nav-collapse");
$(".application-form form").submit(function() {
    var e = $("[required]"),
        t = !0;
    return e.each(function() {
        0 === $.trim($(this).val()).length && (t = !1)
    }), t || alert("Please fill in all required(*) fields."), t
}), $(document).ready(function() {
    "true" === $.cookie("futurice_cookies_accepted") ? $(".js-cookie-notice").remove() : $(".js-cookie-notice").addClass("cookie-notice--visible"), $(".js-cookie-notice__button").click(function(e) {
        e.preventDefault(), $.cookie("futurice_cookies_accepted", "true", {
            expires: 365,
            path: "/"
        }), $(".js-cookie-notice").remove()
    })
});