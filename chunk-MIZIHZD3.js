function $(e, t) { return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1; }
function E(e, t) { if (e && t) {
    let n = o => { $(e, o) || (e.classList ? e.classList.add(o) : e.className += " " + o); };
    [t].flat().filter(Boolean).forEach(o => o.split(" ").forEach(n));
} }
function F() { return window.innerWidth - document.documentElement.offsetWidth; }
function j(e) { typeof e == "string" ? E(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.setProperty(e.variableName, F() + "px"), E(document.body, e?.className || "p-overflow-hidden")); }
function x(e, t) { if (e && t) {
    let n = o => { e.classList ? e.classList.remove(o) : e.className = e.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " "); };
    [t].flat().filter(Boolean).forEach(o => o.split(" ").forEach(n));
} }
function k(e) { typeof e == "string" ? x(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.removeProperty(e.variableName), x(document.body, e?.className || "p-overflow-hidden")); }
function b(e) { for (let t of document?.styleSheets)
    try {
        for (let n of t?.cssRules)
            for (let o of n?.style)
                if (e.test(o))
                    return { name: o, value: n.style.getPropertyValue(o).trim() };
    }
    catch { } return null; }
function C(e) { let t = { width: 0, height: 0 }; if (e) {
    let [n, o] = [e.style.visibility, e.style.display], i = e.getBoundingClientRect();
    e.style.visibility = "hidden", e.style.display = "block", t.width = i.width || e.offsetWidth, t.height = i.height || e.offsetHeight, e.style.display = o, e.style.visibility = n;
} return t; }
function T() { let e = window, t = document, n = t.documentElement, o = t.getElementsByTagName("body")[0], i = e.innerWidth || n.clientWidth || o.clientWidth, l = e.innerHeight || n.clientHeight || o.clientHeight; return { width: i, height: l }; }
function v(e) { return e ? Math.abs(e.scrollLeft) : 0; }
function O() { let e = document.documentElement; return (window.pageXOffset || v(e)) - (e.clientLeft || 0); }
function H() { let e = document.documentElement; return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0); }
function N(e) { return e ? getComputedStyle(e).direction === "rtl" : !1; }
function M(e, t, n = !0) { var o, i, l, c; if (e) {
    let r = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : C(e), s = r.height, a = r.width, u = t.offsetHeight, f = t.offsetWidth, d = t.getBoundingClientRect(), p = H(), w = O(), S = T(), h, y, m = "top";
    d.top + u + s > S.height ? (h = d.top + p - s, m = "bottom", h < 0 && (h = p)) : h = u + d.top + p, d.left + a > S.width ? y = Math.max(0, d.left + w + f - a) : y = d.left + w, N(e) ? e.style.insetInlineEnd = y + "px" : e.style.insetInlineStart = y + "px", e.style.top = h + "px", e.style.transformOrigin = m, n && (e.style.marginTop = m === "bottom" ? `calc(${(i = (o = b(/-anchor-gutter$/)) == null ? void 0 : o.value) != null ? i : "2px"} * -1)` : (c = (l = b(/-anchor-gutter$/)) == null ? void 0 : l.value) != null ? c : "");
} }
function q(e, t) { e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, o]) => e.style[n] = o)); }
function U(e, t) { if (e instanceof HTMLElement) {
    let n = e.offsetWidth;
    if (t) {
        let o = getComputedStyle(e);
        n += parseFloat(o.marginLeft) + parseFloat(o.marginRight);
    }
    return n;
} return 0; }
function D(e, t, n = !0, o = void 0) { var i; if (e) {
    let l = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : C(e), c = t.offsetHeight, r = t.getBoundingClientRect(), s = T(), a, u, f = o ?? "top";
    if (!o && r.top + c + l.height > s.height ? (a = -1 * l.height, f = "bottom", r.top + a < 0 && (a = -1 * r.top)) : a = c, l.width > s.width ? u = r.left * -1 : r.left + l.width > s.width ? u = (r.left + l.width - s.width) * -1 : u = 0, e.style.top = a + "px", e.style.insetInlineStart = u + "px", e.style.transformOrigin = f, n) {
        let d = (i = b(/-anchor-gutter$/)) == null ? void 0 : i.value;
        e.style.marginTop = f === "bottom" ? `calc(${d ?? "2px"} * -1)` : d ?? "";
    }
} }
function L(e) { if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
} return null; }
function R(e) { return !!(e !== null && typeof e < "u" && e.nodeName && L(e)); }
function g(e) { return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string"; }
function W(e) { let t = e; return e && typeof e == "object" && (Object.hasOwn(e, "current") ? t = e.current : Object.hasOwn(e, "el") && (Object.hasOwn(e.el, "nativeElement") ? t = e.el.nativeElement : t = e.el)), g(t) ? t : void 0; }
function B(e, t) { var n, o, i; if (e)
    switch (e) {
        case "document": return document;
        case "window": return window;
        case "body": return document.body;
        case "@next": return t?.nextElementSibling;
        case "@prev": return t?.previousElementSibling;
        case "@first": return t?.firstElementChild;
        case "@last": return t?.lastElementChild;
        case "@child": return (n = t?.children) == null ? void 0 : n[0];
        case "@parent": return t?.parentElement;
        case "@grandparent": return (o = t?.parentElement) == null ? void 0 : o.parentElement;
        default: {
            if (typeof e == "string") {
                let r = e.match(/^@child\[(\d+)]/);
                return r ? ((i = t?.children) == null ? void 0 : i[parseInt(r[1], 10)]) || null : document.querySelector(e) || null;
            }
            let l = (r => typeof r == "function" && "call" in r && "apply" in r)(e) ? e() : e, c = W(l);
            return R(c) ? c : l?.nodeType === 9 ? l : void 0;
        }
    } }
function X(e, t) { let n = B(e, t); if (n)
    n.appendChild(t);
else
    throw new Error("Cannot append " + t + " to " + e); }
function A(e, t = {}) { if (g(e)) {
    let n = (o, i) => { var l, c; let r = (l = e?.$attrs) != null && l[o] ? [(c = e?.$attrs) == null ? void 0 : c[o]] : []; return [i].flat().reduce((s, a) => { if (a != null) {
        let u = typeof a;
        if (u === "string" || u === "number")
            s.push(a);
        else if (u === "object") {
            let f = Array.isArray(a) ? n(o, a) : Object.entries(a).map(([d, p]) => o === "style" && (p || p === 0) ? `${d.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${p}` : p ? d : void 0);
            s = f.length ? s.concat(f.filter(d => !!d)) : s;
        }
    } return s; }, r); };
    Object.entries(t).forEach(([o, i]) => { if (i != null) {
        let l = o.match(/^on(.+)/);
        l ? e.addEventListener(l[1].toLowerCase(), i) : o === "p-bind" || o === "pBind" ? A(e, i) : (i = o === "class" ? [...new Set(n("class", i))].join(" ").trim() : o === "style" ? n("style", i).join(";").trim() : i, (e.$attrs = e.$attrs || {}) && (e.$attrs[o] = i), e.setAttribute(o, i));
    } });
} }
function Y(e, t = {}, ...n) { if (e) {
    let o = document.createElement(e);
    return A(o, t), o.append(...n), o;
} }
function z(e, t) { if (e) {
    e.style.opacity = "0";
    let n = +new Date, o = "0", i = function () { o = `${+e.style.opacity + (new Date().getTime() - n) / t}`, e.style.opacity = o, n = +new Date, +o < 1 && ("requestAnimationFrame" in window ? requestAnimationFrame(i) : setTimeout(i, 16)); };
    i();
} }
function I(e, t) { return g(e) ? Array.from(e.querySelectorAll(t)) : []; }
function Z(e, t) { return g(e) ? e.matches(t) ? e : e.querySelector(t) : null; }
function G(e, t) { e && document.activeElement !== e && e.focus(t); }
function P(e, t = "") {
    let n = I(e, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`), o = [];
    for (let i of n)
        getComputedStyle(i).display != "none" && getComputedStyle(i).visibility != "hidden" && o.push(i);
    return o;
}
function J(e, t) { let n = P(e, t); return n.length > 0 ? n[0] : null; }
function K(e) { if (e) {
    let t = e.offsetHeight, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
} return 0; }
function Q(e, t) { let n = P(e, t); return n.length > 0 ? n[n.length - 1] : null; }
function _(e) { if (e) {
    let t = e.getBoundingClientRect();
    return { top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: t.left + (window.pageXOffset || v(document.documentElement) || v(document.body) || 0) };
} return { top: "auto", left: "auto" }; }
function V(e, t) { if (e) {
    let n = e.offsetHeight;
    if (t) {
        let o = getComputedStyle(e);
        n += parseFloat(o.marginTop) + parseFloat(o.marginBottom);
    }
    return n;
} return 0; }
function ee(e) { if (e) {
    let t = e.offsetWidth, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
} return 0; }
function te(e) { return !!(e && e.offsetParent != null); }
function ne() { return typeof window > "u" || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
function oe() { return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0; }
function ie() { return new Promise(e => { requestAnimationFrame(() => { requestAnimationFrame(e); }); }); }
function le(e) { var t; e && ("remove" in Element.prototype ? e.remove() : (t = e.parentNode) == null || t.removeChild(e)); }
function re(e, t) { let n = W(e); if (n)
    n.removeChild(t);
else
    throw new Error("Cannot remove " + t + " from " + e); }
function ae(e, t) { let n = getComputedStyle(e).getPropertyValue("borderTopWidth"), o = n ? parseFloat(n) : 0, i = getComputedStyle(e).getPropertyValue("paddingTop"), l = i ? parseFloat(i) : 0, c = e.getBoundingClientRect(), r = t.getBoundingClientRect().top + document.body.scrollTop - (c.top + document.body.scrollTop) - o - l, s = e.scrollTop, a = e.clientHeight, u = V(t); r < 0 ? e.scrollTop = s + r : r + u > a && (e.scrollTop = s + r - a + u); }
function se(e, t = "", n) { g(e) && n !== null && n !== void 0 && e.setAttribute(t, n); }
function de(e, t, n = null, o) { var i; t && ((i = e?.style) == null || i.setProperty(t, n, o)); }
export { $ as a, E as b, j as c, x as d, k as e, b as f, C as g, T as h, O as i, H as j, M as k, q as l, U as m, D as n, B as o, X as p, A as q, Y as r, z as s, Z as t, G as u, P as v, J as w, K as x, Q as y, _ as z, V as A, ee as B, te as C, ne as D, oe as E, ie as F, le as G, re as H, ae as I, se as J, de as K };
