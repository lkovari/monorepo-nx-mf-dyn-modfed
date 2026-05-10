function j(r) { return r == null || r === "" || Array.isArray(r) && r.length === 0 || !(r instanceof Date) && typeof r == "object" && Object.keys(r).length === 0; }
function l(r, u, t = new WeakSet) { if (r === u)
    return !0; if (!r || !u || typeof r != "object" || typeof u != "object" || t.has(r) || t.has(u))
    return !1; t.add(r).add(u); let n = Array.isArray(r), i = Array.isArray(u), e, o, f; if (n && i) {
    if (o = r.length, o != u.length)
        return !1;
    for (e = o; e-- !== 0;)
        if (!l(r[e], u[e], t))
            return !1;
    return !0;
} if (n != i)
    return !1; let c = r instanceof Date, g = u instanceof Date; if (c != g)
    return !1; if (c && g)
    return r.getTime() == u.getTime(); let p = r instanceof RegExp, y = u instanceof RegExp; if (p != y)
    return !1; if (p && y)
    return r.toString() == u.toString(); let s = Object.keys(r); if (o = s.length, o !== Object.keys(u).length)
    return !1; for (e = o; e-- !== 0;)
    if (!Object.prototype.hasOwnProperty.call(u, s[e]))
        return !1; for (e = o; e-- !== 0;)
    if (f = s[e], !l(r[f], u[f], t))
        return !1; return !0; }
function d(r, u) { return l(r, u); }
function O(r) { return typeof r == "function" && "call" in r && "apply" in r; }
function a(r) { return !j(r); }
function b(r, u) { if (!r || !u)
    return null; try {
    let t = r[u];
    if (a(t))
        return t;
}
catch { } if (Object.keys(r).length) {
    if (O(u))
        return u(r);
    if (u.indexOf(".") === -1)
        return r[u];
    {
        let t = u.split("."), n = r;
        for (let i = 0, e = t.length; i < e; ++i) {
            if (n == null)
                return null;
            n = n[t[i]];
        }
        return n;
    }
} return null; }
function m(r, u, t) { return t ? b(r, t) === b(u, t) : d(r, u); }
function A(r, u = !0) { return r instanceof Object && r.constructor === Object && (u || Object.keys(r).length !== 0); }
function D(r, u) { let t = -1; if (a(r))
    try {
        t = r.findLastIndex(u);
    }
    catch {
        t = r.lastIndexOf([...r].reverse().find(u));
    } return t; }
function h(r, ...u) { return O(r) ? r(...u) : r; }
function C(r, u = !0) { return typeof r == "string" && (u || r !== ""); }
function x(r) { return C(r) ? r.replace(/(-|_)/g, "").toLowerCase() : r; }
function E(r, u = "", t = {}) { let n = x(u).split("."), i = n.shift(); if (i) {
    if (A(r)) {
        let e = Object.keys(r).find(o => x(o) === i) || "";
        return E(h(r[e], t), n.join("."), t);
    }
    return;
} return h(r, t); }
function F(r, u = !0) { return Array.isArray(r) && (u || r.length !== 0); }
function w(r) { return a(r) && !isNaN(r); }
function k(r = "") { return a(r) && r.length === 1 && !!r.match(/\S| /); }
function S(r, u) { if (u) {
    let t = u.test(r);
    return u.lastIndex = 0, t;
} return !1; }
function v(r) { return r && r.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim(); }
function L(r) { if (r && /[\xC0-\xFF\u0100-\u017E]/.test(r)) {
    let u = { A: /[\xC0-\xC5\u0100\u0102\u0104]/g, AE: /[\xC6]/g, C: /[\xC7\u0106\u0108\u010A\u010C]/g, D: /[\xD0\u010E\u0110]/g, E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g, G: /[\u011C\u011E\u0120\u0122]/g, H: /[\u0124\u0126]/g, I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g, IJ: /[\u0132]/g, J: /[\u0134]/g, K: /[\u0136]/g, L: /[\u0139\u013B\u013D\u013F\u0141]/g, N: /[\xD1\u0143\u0145\u0147\u014A]/g, O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g, OE: /[\u0152]/g, R: /[\u0154\u0156\u0158]/g, S: /[\u015A\u015C\u015E\u0160]/g, T: /[\u0162\u0164\u0166]/g, U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g, W: /[\u0174]/g, Y: /[\xDD\u0176\u0178]/g, Z: /[\u0179\u017B\u017D]/g, a: /[\xE0-\xE5\u0101\u0103\u0105]/g, ae: /[\xE6]/g, c: /[\xE7\u0107\u0109\u010B\u010D]/g, d: /[\u010F\u0111]/g, e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g, g: /[\u011D\u011F\u0121\u0123]/g, i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g, ij: /[\u0133]/g, j: /[\u0135]/g, k: /[\u0137,\u0138]/g, l: /[\u013A\u013C\u013E\u0140\u0142]/g, n: /[\xF1\u0144\u0146\u0148\u014B]/g, p: /[\xFE]/g, o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g, oe: /[\u0153]/g, r: /[\u0155\u0157\u0159]/g, s: /[\u015B\u015D\u015F\u0161]/g, t: /[\u0163\u0165\u0167]/g, u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g, w: /[\u0175]/g, y: /[\xFD\xFF\u0177]/g, z: /[\u017A\u017C\u017E]/g };
    for (let t in u)
        r = r.replace(u[t], t);
} return r; }
function I(r) { return C(r) ? r.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : r; }
function $(r) { return r === "auto" ? 0 : typeof r == "number" ? r : Number(r.replace(/[^\d.]/g, "").replace(",", ".")) * 1e3; }
export { j as a, d as b, O as c, a as d, b as e, m as f, A as g, D as h, h as i, C as j, x as k, E as l, F as m, w as n, k as o, S as p, v as q, L as r, I as s, $ as t };
