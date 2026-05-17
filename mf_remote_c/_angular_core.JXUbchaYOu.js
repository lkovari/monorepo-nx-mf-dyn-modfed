import { a as DT } from "@nf-internal/chunk-CQI55HNO";
import { $ as Ga, $a as Ht, $b as hp, $c as Nc, A as ei, Aa as ce, Ab as Ja, Ac as Ct, B as Ba, Ba as le, Bb as ui, Bc as De, C as gt, Ca as re, Cb as ap, Cc as yc, D as xt, Da as Lt, Db as Ro, Dc as vc, E as mn, Ea as H, Eb as di, Ec, F as ti, Fa as k, Fb as fi, Fc as Ic, G as W, Ga as Ue, Gb as pi, Gc as xo, H as Me, Ha as T, Hb as Xa, Hc as He, I as Be, Ia as vt, Ib as Bt, Ic as cT, J as Do, Ja as No, Jb as cp, Jc as Ep, K as N, Ka as wo, Kb as lp, Kc as Ce, L as Ne, La as K, Lb as up, Lc as Ut, M as Wf, Ma as Et, Mb as dp, Mc as Po, N as Ua, Na as vn, Nb as fp, Nc as Ip, O as Pt, Oa as $e, Ob as ec, Oc as Dp, P as qf, Pa as _e, Pb as hi, Pc as $t, Q as Pe, Qa, Qb as ko, Qc as lT, R as ni, Ra as Ya, Rb as tc, Rc as Cp, S as I, Sa as li, Sb as nc, Sc as Tp, T as $a, Ta as _o, Tb as pp, Tc as Dc, U as yn, Ua as Se, Ub as oc, Uc as U, V as oi, Va as Ft, Vb as rc, Vc as Cc, W as Qf, Wa as ze, Wb as g, Wc as Tc, X as Le, Xa as v, Xb as w, Xc as zt, Y as za, Ya as Ie, Yb as ic, Yc as Mc, Z as Co, Za as Fe, Zb as sc, Zc as uT, _ as To, _a as So, _b as M, _c as dT, a as KC, aa as Yf, ab as V, ac as In, ad as Mp, b as JC, ba as Mo, bb as ne, bc as We, bd as fT, c as Qr, ca as ri, cb as X, cc as ac, cd as Ei, d as _, da as ii, db as Za, dc as cc, dd as Tt, e as $f, ea as we, eb as ge, ec as lc, ed as Dn, f as Ee, fa as F, fb as En, fc as uc, fd as pT, g as Ha, ga as mt, gb as be, gc as dc, gd as Ii, h as zf, ha as rT, hb as Ge, hc as de, hd as wc, i as Yr, ia as tt, ib as Ka, ic as qe, id as _c, j as Zr, ja as iT, jb as ep, jc as fc, jd as hT, k as XC, ka as sT, kb as It, kc as pe, kd as Sc, l as Va, la as Wa, lb as tp, lc as Qe, ld as gT, m as G, ma as si, mb as np, mc as gp, md as mT, n as Kr, na as Zf, nb as P, nc as pc, nd as Gt, o as Gf, oa as Kf, ob as bo, oc as mp, od as yT, p as B, pa as ai, pb as Vt, pc as yp, pd as vT, q as Io, qa as yt, qb as ie, qc as hc, qd as ET, r as eT, ra as qa, rb as op, rc as gi, rd as IT, s as tT, sa as Jf, sb as jt, sc as mi, sd as Np, t as Jr, ta as ci, tb as Dt, tc as Oo, u as ja, ua as Xf, ub as Ao, uc as gc, v as S, va as aT, vb as fe, vc as yi, w as nT, wa as j, wb as rp, wc as mc, x as oT, xa as m, xb as ip, xc as vi, y as gn, ya as b, yb as sp, yc as vp, z as Xr, za as q, zb as ue, zc as se } from "@nf-internal/chunk-O42DSMP5";
import { b as ZC } from "@nf-internal/chunk-6XNIWKD6";
import { B as La, E as Fa, a as et, b as x, c as jf, f as Pa, g as Gr, n as vo, p as Wr, r as qr, s as Eo, w as Bf, x as Uf } from "@nf-internal/chunk-WRC5LNBR";
import { a as Z, b as Xe, e as ht } from "@nf-internal/chunk-JKOY2XUY";
import { setActiveConsumer as Mn } from "@angular/core/primitives/signals";
import { Subject as Bh, Subscription as CT } from "rxjs";
import { map as TT } from "rxjs/operators";
var Cn = { JSACTION: "jsaction" };
function Ze(e) { return { toString: e }.toString(); }
var Nn = "__annotations__", wn = "__parameters__", _n = "__prop__metadata__";
function yr(e, t, n, o, r) { return Ze(() => { let i = tu(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Nn) ? u[Nn] : Object.defineProperty(u, Nn, { value: [] })[Nn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function tu(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Qn(e, t, n) { return Ze(() => { let o = tu(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(wn) ? c[wn] : Object.defineProperty(c, wn, { value: [] })[wn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function at(e, t, n, o) { return Ze(() => { let r = tu(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(_n) ? d[_n] : Object.defineProperty(d, _n, { value: {} })[_n]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Uh = yn(Qn("Inject", e => ({ token: e })), -1), $h = yn(Qn("Optional"), 8), zh = yn(Qn("Self"), 2), Gh = yn(Qn("SkipSelf"), 4), Wh = yn(Qn("Host"), 1);
function te(e) { let t = Ee.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var wp = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Io, \u0275\u0275inject: Pe, \u0275\u0275invalidFactoryDep: ni, resolveForwardRef: G }, qh = Function;
function Ho(e) { return typeof e == "function"; }
var MT = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, NT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, wT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, _T = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function ST(e) { return MT.test(e) || _T.test(e) || NT.test(e) && !wT.test(e); }
var Ui = class {
    _reflect;
    constructor(t) { this._reflect = t || Ee.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = To(n.length) : o = To(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (ST(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && bc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(wn) && t[wn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : To(t.length); }
    parameters(t) { if (!Ho(t))
        return []; let n = Di(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? bc(t.decorators) : t.hasOwnProperty(Nn) ? t[Nn] : null; }
    annotations(t) { if (!Ho(t))
        return []; let n = Di(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = bc(o[i]); }), r;
    } return t.hasOwnProperty(_n) ? t[_n] : null; }
    propMetadata(t) { if (!Ho(t))
        return {}; let n = Di(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Ho(t) ? this._ownPropMetadata(t, Di(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof qh && n in t.prototype; }
};
function bc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function Di(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Qh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var $i = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Yh = (() => { let e = () => Zh; return e.ngInherit = !0, e; })();
function Zh(e) { return e.type.prototype.ngOnChanges && (e.setInput = AT), bT; }
function bT() { let e = Jh(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === we)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function AT(e, t, n, o, r) { let i = this.declaredInputs[o], s = Jh(e) || RT(e, { previous: we, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new $i(l && l.currentValue, n, c === we), Qh(e, t, r, n); }
var Kh = "__ngSimpleChanges__";
function Jh(e) { return e[Kh] || null; }
function RT(e, t) { return e[Kh] = t; }
var _p = [];
var O = function (e, t = null, n) { for (let o = 0; o < _p.length; o++) {
    let r = _p[o];
    r(e, t, n);
} }, A = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(A || {});
function kT(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Zh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Xh(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function ki(e, t, n) { eg(e, t, 3, n); }
function Oi(e, t, n, o) { (e[b] & 3) === n && eg(e, t, n, o); }
function Ac(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function eg(e, t, n, o) { let r = o !== void 0 ? e[vn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[vn] += 65536), (a < i || i == -1) && (OT(e, n, t, c), e[vn] = (e[vn] & 4294901760) + c + 2), c++; }
function Sp(e, t) { O(A.LifecycleHookStart, e, t); let n = x(null); try {
    t.call(e);
}
finally {
    x(n), O(A.LifecycleHookEnd, e, t);
} }
function OT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[vn] >> 16 && (e[b] & 3) === t && (e[b] += 16384, Sp(a, i)) : Sp(a, i); }
var Rn = -1, Jt = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function ys(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function tg(e) { return !!(e.type & 128); }
function xT(e) { return (e.flags & 8) !== 0; }
function PT(e) { return (e.flags & 16) !== 0; }
function LT(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        FT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function ng(e) { return e === 3 || e === 4 || e === 6; }
function FT(e) { return e.charCodeAt(0) === 64; }
function Fn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? bp(e, n, r, null, t[++o]) : bp(e, n, r, null, null));
        }
    } return e; }
function bp(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function og(e) { return e !== Rn; }
function zi(e) { return e & 32767; }
function HT(e) { return e >> 16; }
function Gi(e, t) { let n = HT(e), o = t; for (; n > 0;)
    o = o[wo], n--; return o; }
var Xc = !0;
function Wi(e) { let t = Xc; return Xc = e, t; }
var VT = 256, rg = VT - 1, ig = 5, jT = 0, Ye = {};
function BT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(xt) && (o = n[xt]), o == null && (o = n[xt] = jT++); let r = o & rg, i = 1 << r; t.data[e + (r >> ig)] |= i; }
function qi(e, t) { let n = sg(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, Rc(o.data, e), Rc(t, null), Rc(o.blueprint, null)); let r = nu(e, t), i = e.injectorIndex; if (og(r)) {
    let s = zi(r), a = Gi(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Rc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function sg(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function nu(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = fg(r), o === null)
        return Rn;
    if (n++, r = r[wo], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return Rn; }
function el(e, t, n) { BT(e, t, n); }
function UT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (ng(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function ag(e, t, n) { if (n & 8 || e !== void 0)
    return e; Ua(t, "NodeInjector"); }
function cg(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[k], i = Pt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : qf(t, o, n & 8);
    }
    finally {
        Pt(i);
    }
} return ag(o, t, n); }
function lg(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = WT(e, t, n, o, Ye);
        if (s !== Ye)
            return s;
    }
    let i = ug(e, t, n, o, Ye);
    if (i !== Ye)
        return i;
} return cg(t, n, o, r); }
function ug(e, t, n, o, r) { let i = zT(n); if (typeof i == "function") {
    if (!gc(t, e, o))
        return o & 1 ? ag(r, n, o) : cg(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Ua(n);
        else
            return s;
    }
    finally {
        mc();
    }
}
else if (typeof i == "number") {
    let s = null, a = sg(e, t), c = Rn, l = o & 1 ? t[K][le] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? nu(e, t) : t[a + 8], c === Rn || !Rp(o, !1) ? a = -1 : (s = t[m], a = zi(c), t = Gi(c, t))); a !== -1;) {
        let u = t[m];
        if (Ap(i, a, u.data)) {
            let d = $T(a, t, n, s, o, l);
            if (d !== Ye)
                return d;
        }
        c = t[a + 8], c !== Rn && Rp(o, t[m].data[a + 8] === l) && Ap(i, a, t) ? (s = u, a = zi(c), t = Gi(c, t)) : a = -1;
    }
} return r; }
function $T(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? ge(a) && Xc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = xi(a, s, n, c, l); return u !== null ? Ko(t, s, u, a, r) : Ye; }
function xi(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && be(p) && p.type === n)
        return c;
} return null; }
function Ko(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Jt) {
    let a = i;
    if (a.resolving)
        throw Wf("");
    let c = Wi(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Pt(a.injectImpl) : null, f = gc(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && kT(n, s[n], t);
    }
    finally {
        d !== null && Pt(d), Wi(c), a.resolving = !1, mc();
    }
} return i; }
function zT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(xt) ? e[xt] : void 0; return typeof t == "number" ? t >= 0 ? t & rg : GT : t; }
function Ap(e, t, n) { let o = 1 << e; return !!(n[t + (e >> ig)] & o); }
function Rp(e, t) { return !(e & 2) && !(e & 1 && t); }
var wt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return lg(this._tNode, this._lView, t, $a(o), n); }
};
function GT() { return new wt(M(), g()); }
function dg(e) { return Ze(() => { let t = e.prototype.constructor, n = t[gt] || tl(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[gt] || tl(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function tl(e) { return Kr(e) ? () => { let t = tl(G(e)); return t && t(); } : oi(e); }
function WT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !Ge(s);) {
    let a = ug(i, s, n, o | 2, Ye);
    if (a !== Ye)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Qa];
        if (l) {
            let u = l.get(n, Ye, o & -5);
            if (u !== Ye)
                return u;
        }
        c = fg(s), s = s[wo];
    }
    i = c;
} return r; }
function fg(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function vs(e) { return UT(M(), e); }
var pg = Qn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => vs(e) })), kp = null;
function ou() { return kp = kp || new Ui; }
function Es(e) { return hg(ou().parameters(e)); }
function hg(e) { return e.map(t => qT(t)); }
function qT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof $h || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Gh || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof zh || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Wh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Uh)
            t.token = o.token;
        else if (o instanceof pg) {
            if (o.attributeName === void 0)
                throw new _(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function QT(e, t) { let n = null, o = null; e.hasOwnProperty(Jr) || Object.defineProperty(e, Jr, { get: () => (n === null && (n = te({ usage: 0, kind: "injectable", type: e }).compileInjectable(wp, `ng:///${e.name}/\u0275prov.js`, JT(e, t))), n) }), e.hasOwnProperty(gt) || Object.defineProperty(e, gt, { get: () => { if (o === null) {
        let r = te({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(wp, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: Es(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var YT = Ha({ provide: String, useValue: Ha });
function Op(e) { return e.useClass !== void 0; }
function ZT(e) { return YT in e; }
function xp(e) { return e.useFactory !== void 0; }
function KT(e) { return e.useExisting !== void 0; }
function JT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Op(n) || xp(n)) && n.deps !== void 0 && (o.deps = hg(n.deps)), Op(n) ? o.useClass = n.useClass : ZT(n) ? o.useValue = n.useValue : xp(n) ? o.useFactory = n.useFactory : KT(n) && (o.useExisting = n.useExisting), o; }
var XT = yr("Injectable", void 0, void 0, void 0, (e, t) => QT(e, t));
function eM() { return Yn(M(), g()); }
function Yn(e, t) { return new vr(ie(e, t)); }
var vr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = eM;
} return e; })();
function gg(e) { return e instanceof vr ? e.nativeElement : e; }
function tM() { return this._results[Symbol.iterator](); }
var Qi = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Bh; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Le(t); (this._changesDetected = !Qf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = tM;
}, Zn = "ngSkipHydration", nM = "ngskiphydration";
function ru(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === nM)
        return !0;
} return !1; }
function mg(e) { return e.hasAttribute(Zn); }
function Jo(e) { return (e.flags & 128) === 128; }
function Kn(e) { if (Jo(e))
    return !0; let t = e.parent; for (; t;) {
    if (Jo(e) || ru(t))
        return !0;
    t = t.parent;
} return !1; }
function yg(e) { return Jo(e) || ru(e) || Kn(e); }
var Is = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(Is || {}), Ds = new Map, oM = 0;
function rM() { return oM++; }
function iM(e) { Ds.set(e[_e], e); }
function vg(e) { return Ds.get(e) || null; }
function nl(e) { Ds.delete(e[_e]); }
function sM() { return Ds; }
var Yi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return vg(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ve(e) { let t = Pi(e); if (t) {
    if (ne(t)) {
        let n = t, o, r, i;
        if (Eg(e)) {
            if (o = uM(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (cM(e)) {
            if (o = dM(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Ig(o, n);
        }
        else if (o = Lp(n, e), o == -1)
            return null;
        let s = P(n[o]), a = Pi(s), c = a && !Array.isArray(a) ? a : Pp(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Ae(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Ae(i[l], c);
        }
        Ae(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Pi(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Lp(i, n);
            if (s >= 0) {
                let a = P(i[s]), c = Pp(i, s, a);
                Ae(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Pp(e, t, n) { return new Yi(e[_e], t, n); }
var ol = "__ngContext__";
function Ae(e, t) { ne(t) ? (e[ol] = t[_e], iM(t)) : e[ol] = t; }
function Pi(e) { let t = e[ol]; return typeof t == "number" ? vg(t) : t || null; }
function aM(e) { let t = Pi(e); return t ? ne(t) ? t : t.lView : null; }
function Eg(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function cM(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Lp(e, t) { let n = e[m]; for (let o = v; o < n.bindingStartIndex; o++)
    if (P(e[o]) === t)
        return o; return -1; }
function lM(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function uM(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (fe(r, e)[H] === t)
            return r;
    }
else if (fe(v, e)[H] === t)
    return v; return -1; }
function dM(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = lM(n);
} return -1; }
function Ig(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return F; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Eg(i) || o.push(i);
} return o; }
function fM(e, t) { let n = t[m].data[e]; return ge(n) ? t[n.directiveStart + n.componentOffset] : null; }
function pM(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Dg(e) { return Tg(e[vt]); }
function Cg(e) { return Tg(e[ce]); }
function Tg(e) { for (; e !== null && !X(e);)
    e = e[ce]; return e; }
function Fp(e) { let t = ve(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = fM(t.nodeIndex, n);
} return t.component; }
function hM(e) { MM(e); let t = ve(e), n = t ? t.lView : null; return n === null ? null : n[H]; }
function gM(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = Bt(n));)
    n = o; return Ge(n) ? null : n[H]; }
function mM(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return Ce.NULL; let o = n[m].data[t.nodeIndex]; return new wt(o, n); }
function yM(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    TM(l) && (l = l.type), i.push(l);
} return i; }
function vM(e) { if (e instanceof Text)
    return []; let t = ve(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Ig(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var Mg = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(Mg || {}), Ng = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Ng || {});
function EM(e) { let t = ve(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = pM(n, t.nodeIndex);
} return t.localRefs || {}; }
function IM(e) { return ve(e).native; }
function DM(e) { let t = ve(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Lt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = P(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(CM), s; }
function CM(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function TM(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function MM(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var rl;
function NM(e) { rl = e; }
function Cs() { if (rl !== void 0)
    return rl; if (typeof document < "u")
    return document; throw new _(210, !1); }
var ct = new S("", { factory: () => wM }), wM = "ng";
var iu = new S(""), _M = new S("", { providedIn: "platform", factory: () => "unknown" }), SM = new S(""), bM = new S("", { factory: () => I(Ut).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), wg = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, AM = new S("", { factory: () => wg });
function RM(e) { return e; }
var Jn = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = _g(I(Ut), I(ct))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function _g(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var su = "h", au = "b", Sg = "f", bg = "n", Er = "e", Ts = "t", Xn = "c", Ir = "x", it = "r", Ms = "i", Dr = "n", eo = "d", Ns = "l", ws = "di", Cr = "s", cu = "p", Tr = "t", ln = new S(""), Ag = !1, lu = new S("", { factory: () => Ag }), uu = new S(""), _s = new S(""), du = !1, Rg = new S("", { factory: () => [] }), fu = new S(""), Mr = new S("", { factory: () => new Map }), kM = new S(""), Zi = { passive: !0, capture: !0 }, kc = new WeakMap, Oc = new WeakMap, Nt = new WeakMap, Ki = ["click", "keydown"], Ji = ["mouseenter", "mouseover", "focusin"], Ci = new Map, Xo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function kg(e, t) { let n = Oc.get(e); if (!n) {
    n = new Xo, Oc.set(e, n);
    for (let o of Ki)
        e.addEventListener(o, n.listener, Zi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Oc.delete(e);
    for (let i of Ki)
        e.removeEventListener(i, r, Zi);
} }; }
function Og(e, t) { let n = kc.get(e); if (!n) {
    n = new Xo, kc.set(e, n);
    for (let o of Ji)
        e.addEventListener(o, n.listener, Zi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Ji)
        e.removeEventListener(i, r, Zi);
    kc.delete(e);
} }; }
function OM(e) { let t = xg(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Nt.has(o.target) && Nt.get(o.target)?.get(t)?.listener(); }, e); }
function xM(e, t, n, o) { let r = xg(o), i = Nt.get(e)?.get(r); Ci.has(r) || Ci.set(r, { observer: n(o), count: 0 }); let s = Ci.get(r); if (!i) {
    i = new Xo, s.observer.observe(e);
    let a = Nt.get(e);
    a ? a.set(r, i) : (a = new Map, Nt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Nt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Nt.get(e);
        a && (a.delete(r), a.size === 0 && Nt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), Ci.delete(r));
} }; }
function xg(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var to = "ngb";
function pu(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(Cn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Cn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(to, i); }
var Pg = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, hu = (e, t) => { let n = e, o = n.getAttribute(to) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function PM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(gu);
} }
var gu = e => { e.removeAttribute(Cn.JSACTION), e.removeAttribute(to), e.__jsaction_fns = void 0; }, mu = new S("", { factory: () => ({}) });
function yu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var il = new Map;
function Lg(e, t) { return il.set(e, t), () => il.delete(e); }
var Hp = !1, Fg = (e, t, n, o) => { };
function LM(e, t, n, o) { Fg(e, t, n, o); }
function Hg() { Hp || (Fg = (e, t, n, o) => { let r = e[k].get(ct); il.get(r)?.(t, n, o); }, Hp = !0); }
var lt = new S(""), Vg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = I(Mr);
    contract = I(mu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { PM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function no(e) { return (e.flags & 32) === 32; }
var jg = "__nghData__", Ss = jg, Bg = "__nghDeferData__", bs = Bg;
function FM(e) { return e === jg || e === Bg; }
var kn = "ngh", Ug = "nghm", $g = () => null;
function HM(e, t, n = !1) { let o = e.getAttribute(kn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Jn, null, { optional: !0 });
    u !== null && (c = u.get(Ss, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, As(l, 0, e.nextSibling)), a ? e.setAttribute(kn, a) : e.removeAttribute(kn), l; }
function zg() { $g = HM; }
function Gg(e, t, n = !1) { return $g(e, t, n); }
function vu(e) { let t = e._lView; return t[m].type === 2 ? null : (Ge(t) && (t = t[v]), t); }
function VM(e) { return e.textContent?.replace(/\s/gm, ""); }
function jM(e) { let t = Cs(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = VM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Wg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Wg || {}), BM = "__ngDebugHydrationInfo__";
function UM(e) { return e[BM] ?? null; }
function As(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function sl(e, t) { return e.segmentHeads?.[t] ?? null; }
function Nr(e) { return e.get(fu, !1, { optional: !0 }); }
var $M = !1;
function zM() { $M = !1; }
function qg(e, t) { let n = e.data, o = n[Er]?.[t] ?? null; return o === null && n[Xn]?.[t] && (o = Eu(e, t)), o; }
function GM(e, t) { return e.data[Er]?.[t] !== void 0; }
function Qg(e, t) { return e.data[Xn]?.[t] ?? null; }
function Eu(e, t) { let n = Qg(e, t) ?? [], o = 0; for (let r of n)
    o += r[it] * (r[Ir] ?? 1); return o; }
function Yg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[eo];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Rs(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[eo];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Yg(e)?.has(t); }
function ks(e, t) { let n = e[re]; return n !== null && !ko() && !no(t) && !Rs(n, t.index - v); }
function Iu(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Zg(e) { let t = []; return e !== null && (e.has(4) && t.push(...Ji), e.has(3) && t.push(...Ki)), t; }
function WM(e, t) { let n = t.get(lt), r = t.get(Jn).get(bs, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][cu];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function qM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Ji.join(":;"), Ki.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Kg(e, t) { let n = qM(e), o = t.get(Mr); for (let r of n)
    hu(r, o); }
var Jg = () => ({});
function QM(e) { let t = e.get(Jn, null, { optional: !0 }); return t !== null ? t.get(bs, {}) : {}; }
function Xg() { Jg = QM; }
function YM(e) { return Jg(e); }
function ZM(e) { return typeof e == "object" && e.trigger === 5; }
function KM(e) { return e[Tr]?.find(n => ZM(n))?.delay ?? null; }
function JM(e) { let t = e[Tr]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function Vp(e, t) { return e[Tr]?.includes(t) ?? !1; }
function XM(e) { return { data: e, hydrate: { idle: Vp(e, 0), immediate: Vp(e, 1), timer: KM(e), viewport: JM(e) } }; }
function em(e) { let t = YM(e), n = new Map; for (let o in t)
    n.set(o, XM(t[o])); return n; }
function xc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Ug; }
function jp(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function tm(e) { for (let o of e.body.childNodes)
    if (xc(o))
        return; let t = jp(e.body.previousSibling); if (xc(t))
    return; let n = jp(e.head.lastChild); if (!xc(n))
    throw new _(-507, !1); }
function nm(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = x(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Oo(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        x(o);
    }
} }
function al(e, t, n) { Oo(0); let o = x(null); try {
    t(e, n);
}
finally {
    x(o);
} }
function Du(e, t, n) { if (Za(t)) {
    let o = x(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        x(o);
    }
} }
var Re = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Re || {}), eN = { name: "custom-elements" }, tN = { name: "no-errors-schema" }, om = !1;
function nN(e) { om = e; }
function oN() { return om; }
var rm = !1;
function rN(e) { rm = e; }
function iN() { return rm; }
var Ti;
function im() { if (Ti === void 0 && (Ti = null, Ee.trustedTypes))
    try {
        Ti = Ee.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ti; }
function oo(e) { return im()?.createHTML(e) || e; }
function sN(e) { return im()?.createScriptURL(e) || e; }
var Mi;
function Cu() { if (Mi === void 0 && (Mi = null, Ee.trustedTypes))
    try {
        Mi = Ee.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Mi; }
function Bp(e) { return Cu()?.createHTML(e) || e; }
function Up(e) { return Cu()?.createScript(e) || e; }
function $p(e) { return Cu()?.createScriptURL(e) || e; }
var st = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Qr})`; }
}, cl = class extends st {
    getTypeName() { return "HTML"; }
}, ll = class extends st {
    getTypeName() { return "Style"; }
}, ul = class extends st {
    getTypeName() { return "Script"; }
}, dl = class extends st {
    getTypeName() { return "URL"; }
}, fl = class extends st {
    getTypeName() { return "ResourceURL"; }
};
function ut(e) { return e instanceof st ? e.changingThisBreaksApplicationSecurity : e; }
function ro(e, t) { let n = sm(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Qr})`);
} return n === t; }
function sm(e) { return e instanceof st && e.getTypeName() || null; }
function aN(e) { return new cl(e); }
function cN(e) { return new ll(e); }
function lN(e) { return new ul(e); }
function uN(e) { return new dl(e); }
function dN(e) { return new fl(e); }
function am(e) { let t = new hl(e); return fN() ? new pl(t) : t; }
var pl = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(oo(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, hl = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = oo(t), n; }
};
function fN() { try {
    return !!new window.DOMParser().parseFromString(oo(""), "text/html");
}
catch {
    return !1;
} }
var pN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function wr(e) { return e = String(e), e.match(pN) ? e : "unsafe:" + e; }
function Ke(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function io(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var cm = Ke("area,br,col,hr,img,wbr"), lm = Ke("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), um = Ke("rp,rt"), hN = io(um, lm), gN = io(lm, Ke("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), mN = io(um, Ke("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), gl = io(cm, gN, mN, hN), Tu = Ke("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), yN = Ke("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), vN = Ke("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), ml = io(Tu, yN, vN), EN = Ke("script,style,template"), yl = io(Tu, Ke("action,formaction,data,codebase")), vl = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = CN(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = DN(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = zp(t).toLowerCase(); if (!gl.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !EN.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!ml.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Tu[a] && (c = wr(c)), this.buf.push(" ", s, '="', Gp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = zp(t).toLowerCase(); gl.hasOwnProperty(n) && !cm.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Gp(t)); }
};
function IN(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function DN(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw dm(t); return t; }
function CN(e) { let t = e.firstChild; if (t && IN(e, t))
    throw dm(t); return t; }
function zp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function dm(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var TN = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, MN = /([^\#-~ |!])/g;
function Gp(e) { return e.replace(/&/g, "&amp;").replace(TN, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(MN, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Ni;
function fm(e, t) { let n = null; try {
    Ni = Ni || am(e);
    let o = t ? String(t) : "";
    n = Ni.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Ni.getInertBodyElement(o);
    } while (o !== i);
    let a = new vl().sanitizeChildren(El(n) || n);
    return oo(a);
}
finally {
    if (n) {
        let o = El(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function El(e) { return "content" in e && NN(e) ? e.content : null; }
function NN(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var wN = /^>|^->|<!--|-->|--!>|<!-$/g, _N = /(<|>)/g, SN = "\u200B$1\u200B";
function bN(e) { return e.replace(wN, t => t.replace(_N, SN)); }
function Mu(e, t) { return e.createText(t); }
function pm(e, t, n) { e.setValue(t, n); }
function Nu(e, t) { return e.createComment(bN(t)); }
function Os(e, t, n) { return e.createElement(t, n); }
function Xt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function hm(e, t, n) { e.appendChild(t, n); }
function Wp(e, t, n, o, r) { o !== null ? Xt(e, t, n, o, r) : hm(e, t, n); }
function _r(e, t, n, o) { e.removeChild(null, t, n, o); }
function gm(e) { e.textContent = ""; }
function AN(e, t, n) { e.setAttribute(t, "style", n); }
function RN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function mm(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && LT(e, t, o), r !== null && RN(e, t, r), i !== null && AN(e, t, i); }
function kN(e) { let t = g(); e.src = "", e.srcdoc = oo(""), _r(t[T], e); }
var un = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(un || {});
function ym(e) { let t = Sr(); return t ? Bp(t.sanitize(un.HTML, e) || "") : ro(e, "HTML") ? Bp(ut(e)) : fm(Cs(), N(e)); }
function vm(e) { let t = Sr(); return t ? t.sanitize(un.STYLE, e) || "" : ro(e, "Style") ? ut(e) : N(e); }
function wu(e) { let t = Sr(); return t ? t.sanitize(un.URL, e) || "" : ro(e, "URL") ? ut(e) : wr(N(e)); }
function _u(e) { let t = Sr(); if (t)
    return $p(t.sanitize(un.RESOURCE_URL, e) || ""); if (ro(e, "ResourceURL"))
    return $p(ut(e)); throw new _(904, !1); }
function Em(e) { let t = Sr(); if (t)
    return Up(t.sanitize(un.SCRIPT, e) || ""); if (ro(e, "Script"))
    return Up(ut(e)); throw new _(905, !1); }
function Im(e) { return oo(e[0]); }
function Dm(e) { return sN(e[0]); }
var ON = new Set(["embed", "frame", "iframe", "media", "script"]), xN = new Set(["base", "link", "script"]);
function PN(e, t) { return t === "src" && ON.has(e) || t === "href" && xN.has(e) || t === "xlink:href" && e === "script" ? _u : wu; }
function Cm(e, t, n) { return PN(t, n)(e); }
function Sr() { let e = g(); return e && e[Ue].sanitizer; }
var wi = new Set(["attributename"]), LN = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: wi, set: wi, animatemotion: wi, animatetransform: wi };
function Tm(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!LN[o]?.has(r))
    return e; let i = De(); if (i.type !== 2)
    return e; let s = g(); if (o === "iframe") {
    let c = ie(i, s);
    kN(c);
} let a = !1; throw new _(-910, a); }
function FN() { return tt([]); }
function Mm(e) { return e.ownerDocument.defaultView; }
function Nm(e) { return e.ownerDocument; }
function Su(e) { return e.ownerDocument.body; }
var HN = "\uFFFD";
function Sn(e) { return e instanceof Function ? e() : e; }
function VN(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var wm = "ng-template";
function jN(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && VN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (bu(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function bu(e) { return e.type === 4 && e.value !== wm; }
function BN(e, t, n) { let o = e.type === 4 && !n ? wm : e.value; return t === o; }
function UN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? GN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Ve(o) && !Ve(c))
            return !1;
        if (s && Ve(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !BN(e, c, n) || c === "" && t.length === 1) {
                if (Ve(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !jN(e, r, c, n)) {
                if (Ve(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = $N(c, r, bu(e), n);
            if (u === -1) {
                if (Ve(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Ve(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Ve(o) || s; }
function Ve(e) { return (e & 1) === 0; }
function $N(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return WN(t, e); }
function _m(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (UN(e, t[o], n))
        return !0; return !1; }
function zN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function GN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (ng(n))
        return t;
} return e.length; }
function WN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function qN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function qp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function QN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Ve(s) && (t += qp(i, r), r = ""), o = s, i = i || !Ve(o);
    n++;
} return r !== "" && (t += qp(i, r)), t; }
function YN(e) { return e.map(QN).join(","); }
function ZN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Ve(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var L = {};
function Au(e, t, n, o, r, i, s, a, c, l, u) { let d = v + o, f = d + r, p = KN(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function KN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : L); return n; }
function Sm(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Au(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function xs(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[j] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), Ja(d), d[q] = d[wo] = e, d[H] = n, d[Ue] = s || e && e[Ue], d[T] = a || e && e[T], d[k] = c || e && e[k] || null, d[le] = i, d[_e] = rM(), d[re] = u, d[Qa] = l, d[K] = t.type == 2 ? e[K] : d, d; }
function JN(e, t, n) { let o = ie(t, e), r = Sm(n), i = e[Ue].rendererFactory, s = ku(e, xs(e, r, null, Ru(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Ru(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function br(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function ku(e, t) { return e[vt] ? e[No][ce] = t : e[vt] = t, e[No] = t, t; }
function bm(e = 1) { Am(w(), g(), se() + e, !1); }
function Am(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && ki(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Oi(t, i, 0, n);
    } Ct(n); }
var Ps = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Ps || {});
function _t(e, t, n, o) { let r = x(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Ps.SignalBased) !== 0 && (c = t[i][et]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Qh(t, c, i, o);
}
finally {
    x(r);
} }
var Xi = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Xi || {}), Il;
function Ou(e, t) { return Il(e, t); }
function XN(e) { Il === void 0 && (Il = e()); }
var Rm = new S("", { factory: () => !1 }), km = new S("", { factory: () => ew }), ew = 4e3, tw = !1, dn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Ls(e) { return e[k].get(Rm, tw); }
function nw(e, t, n) { let o = Hn.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Hn.set(e, { classList: t, cleanupFns: n }); }
function xu(e) { let t = Hn.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Hn.delete(e);
} Kt.delete(e); }
var ow = () => { }, Hn = new WeakMap, Kt = new WeakMap, er = new WeakMap, Vo = new WeakSet;
function Dl(e, t) { let n = er.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && er.delete(e); }
function rw(e, t) { let n = er.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Vo.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function Pu(e, t) { let n = er.get(e); n ? n.includes(t) || n.push(t) : er.set(e, [t]); }
function es(e) { let t = e[ze] ??= {}; return t.enter ??= new Map; }
function en(e) { let t = e[ze] ??= {}; return t.leave ??= new Map; }
function Om(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function iw(e, t) { if (!dn)
    return; let n = Hn.get(e); if (n && n.classList.length > 0 && sw(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); xu(e); }
function sw(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function tr(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function Lu(e, t) { let n = Kt.get(t); return n === void 0 ? !0 : t === tr(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function Fs(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Cl(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Tl(e, t) { let n = en(e).get(t.index); n && (n.resolvers = void 0); }
function _i(e, t, n, o, r) { Dl(t, n), Cl(o, r), Tl(e, t); }
function ts(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function Yt(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function aw(e) { let t = Yt(e, "transition-property"), n = Yt(e, "transition-duration"), o = Yt(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = ts(o[i]) + ts(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function cw(e) { let t = Yt(e, "animation-name"), n = Yt(e, "animation-delay"), o = Yt(e, "animation-duration"), r = Yt(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = ts(n[s]) + ts(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function xm(e, t) { return e !== void 0 && e.duration > t.duration; }
function Pm(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function lw(e, t) { let n = getComputedStyle(e), o = cw(n), r = aw(n), i = o.duration > r.duration ? o : r; xm(t.get(e), i) || Pm(i) && t.set(e, i); }
function Lm(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? lw(e, t) : uw(e, t, o); }
function uw(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} xm(t.get(e), o) || Pm(o) && t.set(e, o); }
var tn = new Set, Hs = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Hs || {}), fn = new S(""), Qp = new Set;
function Q(e) { Qp.has(e) || (Qp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Vs = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Fu = [0, 1, 2, 3], Hu = (() => { class e {
    ngZone = I(U);
    scheduler = I(Tt);
    errorHandler = I(Tc, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { I(fn, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && O(A.AfterRenderHooksStart), this.executing = !0; for (let o of Fu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && O(A.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Ft] ??= []).push(n), fi(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Hs.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), nr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Ft]; t && (this.view[Ft] = t.filter(n => n !== this)); }
};
function Fm(e, t) { let n = t?.injector ?? I(Ce); return typeof ngServerMode < "u" && ngServerMode ? js : (Q("NgAfterRender"), Hm(e, n, t, !1)); }
function Vu(e, t) { let n = t?.injector ?? I(Ce); return typeof ngServerMode < "u" && ngServerMode ? js : (Q("NgAfterNextRender"), Hm(e, n, t, !0)); }
function dw(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Hm(e, t, n, o) { let r = t.get(Vs); r.impl ??= t.get(Hu); let i = t.get(fn, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Po) : null, a = t.get(Ei, null, { optional: !0 }), c = new nr(r.impl, dw(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var js = { destroy() { } }, Bs = new S("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: I(yt) }) });
function Vm(e, t, n) { let o = e.get(Bs); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function fw(e, t) { let n = e.get(Bs); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function pw(e) { let t = e.get(Bs); t.isScheduled || (Vu(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function Us(e) { let t = e.get(Bs); t.scheduler = pw, t.scheduler(e); }
function ju(e, t) { for (let [n, o] of t)
    Vm(e, o.animateFns); }
function Yp(e, t, n, o) { let r = e?.[ze]?.enter; t !== null && r && r.has(n.index) && ju(o, r); }
function bn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    X(r) ? c = r : ne(r) && (l = !0, r = r[j]);
    let u = P(r);
    e === 0 && o !== null ? (Yp(a, o, i, n), s == null ? hm(t, o, u) : Xt(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Yp(a, o, i, n), Xt(t, o, u, s || null, !0), rw(i, u)) : e === 2 ? (a?.[ze]?.leave?.has(i.index) && Pu(i, u), Vo.delete(u), Zp(a, i, n, d => { if (Vo.has(u)) {
        Vo.delete(u);
        return;
    } _r(t, u, l, d); })) : e === 3 && (Vo.delete(u), Zp(a, i, n, () => { t.destroyNode(u); })), c != null && Iw(t, e, n, c, i, o, s);
} }
function jm(e, t) { Bm(e, t), t[j] = null, t[le] = null; }
function hw(e, t, n, o, r, i) { o[j] = r, o[le] = t, $s(e, o, n, 1, r, i); }
function Bm(e, t) { t[Ue].changeDetectionScheduler?.notify(9), $s(e, t, t[T], 2, null, null); }
function gw(e) { let t = e[vt]; if (!t)
    return Pc(e[m], e); for (; t;) {
    let n = null;
    if (ne(t))
        n = t[vt];
    else {
        let o = t[V];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ce] && t !== e;)
            ne(t) && Pc(t[m], t), t = t[q];
        t === null && (t = e), ne(t) && Pc(t[m], t), n = t && t[ce];
    }
    t = n;
} }
function Bu(e, t) { let n = e[Ht], o = n.indexOf(t); n.splice(o, 1); }
function Ar(e, t) { if (It(t))
    return; let n = t[T]; n.destroyNode && $s(e, t, n, 3, null, null), gw(t); }
function Pc(e, t) { if (It(t))
    return; let n = x(null); try {
    t[b] &= -129, t[b] |= 256, t[Se] && Eo(t[Se]), vw(e, t), yw(e, t), t[m].type === 1 && t[T].destroy();
    let o = t[Et];
    if (o !== null && X(t[q])) {
        o !== t[q] && Bu(o, t);
        let r = t[$e];
        r !== null && r.detachView(e);
    }
    nl(t);
}
finally {
    x(n);
} }
function Zp(e, t, n, o) { let r = e?.[ze]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && tn.add(e[_e]), Vm(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), mw(e, o);
}
else
    e && tn.delete(e[_e]), o(!1); }, r); }
function mw(e, t) { let n = e[ze]?.running; if (n) {
    n.then(() => { e[ze].running = void 0, tn.delete(e[_e]), t(!0); });
    return;
} t(!1); }
function yw(e, t) { let n = e.cleanup, o = t[Lt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Lt] = null); let r = t[Ya]; if (r !== null) {
    t[Ya] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[_o]; if (i !== null) {
    t[_o] = null;
    for (let s of i)
        s.destroy();
} }
function vw(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Jt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    O(A.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        O(A.LifecycleHookEnd, a, c);
                    }
                }
            else {
                O(A.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    O(A.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function Uu(e, t, n) { return Um(e, t.parent, n); }
function Um(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[j]; if (ge(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Re.None || r === Re.Emulated)
        return null;
} return ie(o, n); }
function $m(e, t, n) { return Gm(e, t, n); }
function zm(e, t, n) { return e.type & 40 ? ie(e, n) : null; }
var Gm = zm, Ml;
function Wm(e, t) { Gm = e, Ml = t; }
function $u(e, t, n, o) { let r = Uu(e, o, t), i = t[T], s = o.parent || t[le], a = $m(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Wp(i, r, n[c], a, !1);
    else
        Wp(i, r, n, a, !1); Ml !== void 0 && Ml(i, o, t, n, r); }
function Zt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ie(t, e);
    if (n & 4)
        return Nl(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Zt(e, o);
        {
            let r = e[t.index];
            return X(r) ? Nl(-1, r) : P(r);
        }
    }
    else {
        if (n & 128)
            return Zt(e, t.next);
        if (n & 32)
            return Ou(t, e)() || P(e[t.index]);
        {
            let o = qm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Bt(e[K]);
                return Zt(r, o);
            }
            else
                return Zt(e, t.next);
        }
    }
} return null; }
function qm(e, t) { if (t !== null) {
    let o = e[K][le], r = t.projection;
    return o.projection[r];
} return null; }
function Nl(e, t) { let n = V + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return Zt(o, r);
} return t[Fe]; }
function zu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[k];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Ae(P(c), o), n.flags |= 2), !no(n))
        if (l & 8)
            zu(e, t, n.child, o, r, i, !1), bn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Ou(n, o), d;
            for (; d = u();)
                bn(t, e, a, r, d, n, i, o);
            bn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Qm(e, t, o, n, r, i) : bn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function $s(e, t, n, o, r, i) { zu(n, o, e.firstChild, t, r, i, !1); }
function Ew(e, t, n) { let o = t[T], r = Uu(e, n, t), i = n.parent || t[le], s = $m(i, n, t); Qm(o, 0, t, n, r, s); }
function Qm(e, t, n, o, r, i) { let s = n[K], c = s[le].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        bn(t, e, n[k], r, u, o, i, n);
    }
else {
    let l = c, u = s[q];
    Jo(o) && (l.flags |= 128), zu(e, t, l, u, r, i, !0);
} }
function Iw(e, t, n, o, r, i, s) { let a = o[Fe], c = P(o); a !== c && bn(t, e, n, i, a, r, s); for (let l = V; l < o.length; l++) {
    let u = o[l];
    $s(u[m], u, e, t, i, a);
} }
function Dw(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Xi.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Xi.Important), e.setStyle(n, o, r, i));
} }
function Ym(e, t, n, o, r) { let i = se(), s = o & 2; try {
    Ct(-1), s && t.length > v && Am(e, t, v, !1);
    let a = s ? A.TemplateUpdateStart : A.TemplateCreateStart;
    O(a, r, n), n(o, r);
}
finally {
    Ct(i);
    let a = s ? A.TemplateUpdateEnd : A.TemplateCreateEnd;
    O(a, r, n);
} }
function zs(e, t, n) { ww(e, t, n), (n.flags & 64) === 64 && _w(e, t, n); }
function so(e, t, n = ie) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function Cw(e, t, n, o) { let i = o.get(lu, Ag) || n === Re.ShadowDom || n === Re.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return Tw(s), s; }
function Tw(e) { Zm(e); }
var Zm = () => null;
function Mw(e) { mg(e) ? gm(e) : jM(e); }
function Km() { Zm = Mw; }
function Nw(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Gu(e, t, n, o, r, i) { let s = t[m]; if (Qs(e, s, t, n, o)) {
    ge(e) && Jm(t, e.index);
    return;
} e.type & 3 && (n = Nw(n)), Wu(e, t, n, o, r, i); }
function Wu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ie(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Jm(e, t) { let n = fe(t, e); n[b] & 16 || (n[b] |= 64); }
function ww(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; ge(n) && JN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || qi(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Ko(t, e, s, n);
    if (Ae(c, t), i !== null && Aw(t, s - o, c, a, n, i), be(a)) {
        let l = fe(n.index, t);
        l[H] = Ko(t, e, s, n);
    }
} }
function _w(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = yp(); try {
    Ct(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        hc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && Sw(c, l);
    }
}
finally {
    Ct(-1), hc(s);
} }
function Sw(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function qu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        _m(t, i.selectors, !1) && (o ??= [], be(i) ? o.unshift(i) : o.push(i));
    } return o; }
function bw(e, t, n, o, r, i) { let s = ie(e, t); Gs(t[T], s, i, e.value, n, o, r); }
function Gs(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? N(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function Aw(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        _t(o, n, c, l);
    } }
function Ws(e, t, n, o, r) { let i = v + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, We(e, !0); let c = e.type === 2; return c ? (mm(t[T], a, e), (dp() === 0 || En(e)) && Ae(a, t), fp()) : Ae(a, t), xo() && (!c || !no(e)) && $u(s, t, a, e), e; }
function qs(e) { let t = e; return ac() ? cc() : (t = t.parent, We(t, !1)), t; }
function Xm(e, t, n) { return (e === null || be(e)) && (n = bo(n[t.index])), n[T]; }
function Qu(e, t) { let n = e[k]; if (!n)
    return; let o; try {
    o = n.get(zt, null);
}
catch {
    o = null;
} o?.(t); }
function Qs(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        _t(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        _t(u, l, o, r), a = !0;
    } return a; }
function Rw(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            _t(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (_t(o, n[s], r, i), l = !0), l; }
function kw(e, t) { let n = fe(t, e), o = n[m]; Ow(o, n); let r = n[j]; r !== null && n[re] === null && (n[re] = Gg(r, n[k])), O(A.ComponentStart); try {
    Ys(o, n, n[H]);
}
finally {
    O(A.ComponentEnd, n[H]);
} }
function Ow(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Ys(e, t, n) { yi(t); try {
    let o = e.viewQuery;
    o !== null && al(1, o, n);
    let r = e.template;
    r !== null && Ym(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[$e]?.finishViewCreation(e), e.staticContentQueries && nm(e, t), e.staticViewQueries && al(2, e.viewQuery, n);
    let i = e.components;
    i !== null && xw(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, vi();
} }
function xw(e, t) { for (let n = 0; n < t.length; n++)
    kw(e, t[n]); }
function ao(e, t, n, o) { let r = x(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = xs(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Et] = l;
    let u = e[$e];
    return u !== null && (c[$e] = u.createEmbeddedView(i)), Ys(i, c, n), c;
}
finally {
    x(r);
} }
function nn(e, t) { return !t || t.firstChild === null || Jo(e); }
function Vn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(P(i)), X(i) && Zs(i, o);
    let s = n.type;
    if (s & 8)
        Vn(e, t, n.child, o);
    else if (s & 32) {
        let a = Ou(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = qm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Bt(t[K]);
            Vn(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Zs(e, t) { for (let n = V; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && Vn(o[m], o, r, t);
} e[Fe] !== e[j] && t.push(e[Fe]); }
function ey(e) { if (e[Ft] !== null) {
    for (let t of e[Ft])
        t.impl.addSequence(t);
    e[Ft].length = 0;
} }
var ty = [];
function Pw(e) { return e[Se] ?? Lw(e); }
function Lw(e) { let t = ty.pop() ?? Object.create(Hw); return t.lView = e, t; }
function Fw(e) { e.lView[Se] !== e && (e.lView = null, ty.push(e)); }
var Hw = Xe(Z({}, Pa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { fi(e.lView); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function Vw(e) { let t = e[Se] ?? Object.create(jw); return t.lView = e, t; }
var jw = Xe(Z({}, Pa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Bt(e.lView); for (; t && !ny(t[m]);)
        t = Bt(t); t && ui(t); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function ny(e) { return e.type !== 2; }
function oy(e) { if (e[_o] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[_o])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var Bw = 100;
function ry(e, t = 0) { let o = e[Ue].rendererFactory, r = !1; r || o.begin?.(); try {
    Uw(e, t);
}
finally {
    r || o.end?.();
} }
function Uw(e, t) { let n = uc(); try {
    dc(!0), wl(e, t);
    let o = 0;
    for (; Ro(e);) {
        if (o === Bw)
            throw new _(103, !1);
        o++, wl(e, 1);
    }
}
finally {
    dc(n);
} }
function iy(e, t, n, o) { if (It(t))
    return; let r = t[b], i = !1, s = !1; yi(t); let a = !0, c = null, l = null; i || (ny(e) ? (l = Pw(t), c = vo(l)) : jf() === null ? (a = !1, l = Vw(t), c = vo(l)) : t[Se] && (Eo(t[Se]), t[Se] = null)); try {
    Ja(t), fc(e.bindingStartIndex), n !== null && Ym(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && ki(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Oi(t, p, 0, null), Ac(t, 0);
        }
    if (s || $w(t), oy(t), sy(t, 0), e.contentQueries !== null && nm(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && ki(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Oi(t, p, 1), Ac(t, 1);
        }
    Gw(e, t);
    let d = e.components;
    d !== null && cy(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && al(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && ki(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Oi(t, p, 2), Ac(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[li]) {
        for (let p of t[li])
            p();
        t[li] = null;
    }
    i || (ey(t), t[b] &= -73);
}
catch (u) {
    throw i || fi(t), u;
}
finally {
    l !== null && (Wr(l, c), a && Fw(l)), vi();
} }
function sy(e, t) { for (let n = Dg(e); n !== null; n = Cg(n))
    for (let o = V; o < n.length; o++) {
        let r = n[o];
        ay(r, t);
    } }
function $w(e) { for (let t = Dg(e); t !== null; t = Cg(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[Ht];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        ui(r);
    }
} }
function zw(e, t, n) { O(A.ComponentStart); let o = fe(t, e); try {
    ay(o, n);
}
finally {
    O(A.ComponentEnd, o[H]);
} }
function ay(e, t) { ip(e) && wl(e, t); }
function wl(e, t) { let o = e[m], r = e[b], i = e[Se], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && qr(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    iy(o, e, o.template, e[H]);
else if (r & 8192) {
    let a = x(null);
    try {
        oy(e), sy(e, 1);
        let c = o.components;
        c !== null && cy(e, c, 1), ey(e);
    }
    finally {
        x(a);
    }
} }
function cy(e, t, n) { for (let o = 0; o < t.length; o++)
    zw(e, t[o], n); }
function Gw(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Ct(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                mp(s, i);
                let c = t[i];
                O(A.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    O(A.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Ct(-1);
    } }
function Rr(e, t) { let n = uc() ? 64 : 1088; for (e[Ue].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = Bt(e);
    if (Ge(e) && !o)
        return e;
    e = o;
} return null; }
function ly(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function uy(e, t) { let n = V + t; if (n < e.length)
    return e[n]; }
function co(e, t, n, o = !0) { let r = t[m]; if (Ww(r, t, e, n), o) {
    let s = Nl(n, e), a = t[T], c = a.parentNode(e[Fe]);
    c !== null && hw(r, e[le], a, t, c, s);
} let i = t[re]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Yu(e, t) { let n = or(e, t); return n !== void 0 && Ar(n[m], n), n; }
function or(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n]; if (o) {
    let r = o[Et];
    r !== null && r !== e && Bu(r, o), t > 0 && (e[n - 1][ce] = o[ce]);
    let i = Co(e, V + t);
    jm(o[m], o);
    let s = i[$e];
    s !== null && s.detachView(i[m]), o[q] = null, o[ce] = null, o[b] &= -129;
} return o; }
function Ww(e, t, n, o) { let r = V + o, i = n.length; o > 0 && (n[r - 1][ce] = t), o < i - V ? (t[ce] = n[r], za(n, V + o, t)) : (n.push(t), t[ce] = null), t[q] = n; let s = t[Et]; s !== null && n !== s && dy(s, t); let a = t[$e]; a !== null && a.insertView(e), di(t), t[b] |= 128; }
function dy(e, t) { let n = e[Ht], o = t[q]; if (ne(o))
    e[b] |= 2;
else {
    let r = o[q][K];
    t[K] !== r && (e[b] |= 2);
} n === null ? e[Ht] = [t] : n.push(t); }
var bt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return Vn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[H]; }
    set context(t) { this._lView[H] = t; }
    get destroyed() { return It(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[q];
        if (X(t)) {
            let n = t[So], o = n ? n.indexOf(this) : -1;
            o > -1 && (or(t, o), Co(n, o));
        }
        this._attachedToViewContainer = !1;
    } Ar(this._lView[m], this._lView); }
    onDestroy(t) { pi(this._lView, t); }
    markForCheck() { Rr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { di(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, ry(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new _(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = Ge(this._lView), n = this._lView[Et]; n !== null && !t && Bu(n, this._lView), Bm(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new _(902, !1); this._appRef = t; let n = Ge(this._lView), o = this._lView[Et]; o !== null && !n && dy(o, this._lView), di(this._lView); }
};
function qw(e) { return Ro(e._lView) || !!(e._lView[b] & 64); }
function Qw(e) { ui(e._lView); }
var rr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = Yw;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = ao(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new bt(i); }
} return e; })();
function Yw() { return Ks(M(), g()); }
function Ks(e, t) { return e.type & 4 ? new rr(t, e, Yn(e, t)) : null; }
var _l = "<-- AT THIS LOCATION";
function Zw(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function Kw(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${t_(e, t, !1)}

`, r = o_();
    throw new _(-502, n + o + r);
}
function fy(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${n_(e)}

`, o = t + n + r_();
    return new _(-503, o);
}
function Jw(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${ns(r)}"`);
    } return t.join(" "); }
var Xw = new Set(["ngh", "ng-version", "ng-server-context"]);
function e_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    Xw.has(o.name) || t.push(`${o.name}="${ns(o.value)}"`);
} return t.join(" "); }
function Lc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = Jw(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${Zw(e.type)})`;
} }
function Li(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = e_(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? ns(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${ns(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function t_(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Lc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Lc(t) + `
`, r += `  <!-- container -->  ${_l}
`) : r += "  " + Lc(t) + `  ${_l}
`, r += `  \u2026
`;
    let i = t.type ? Uu(e[m], t, e) : null;
    return i && (r = Li(i, `
` + r)), r;
}
function n_(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Li(o.previousSibling) + `
`), n += "  " + Li(o) + `  ${_l}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Li(o.parentNode, `
` + n)), n;
}
function o_(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function r_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function i_(e) { return e.replace(/\s+/gm, ""); }
function ns(e, t = 50) { return e ? (e = i_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function py(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? zm(e, t, n) : P(n[r]); }
function hy(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Xt(e, s, l, a, !1);
        }
} }
function pn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Zu(e, t, n, o, r), gp() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = In();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return We(i, !0), i; }
function Zu(e, t, n, o, r) { let i = hp(), s = ac(), a = s ? i : i && i.parent, c = e.data[t] = a_(e, a, n, t, o, r); return s_(e, c, i, s), c; }
function s_(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function a_(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return ko() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function gy(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        my(o) || c_(o, t) && l_(o) === null && u_(o, t.index);
    } }
function my(e) { return !(e.type & 64); }
function c_(e, t) { return my(t) || e.index > t.index; }
function l_(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function u_(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Wm(py, hy), e.insertBeforeIndex = t); }
function Bo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function d_(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function f_(e, t) { let n = e.insertBeforeIndex; n === null ? (Wm(py, hy), n = e.insertBeforeIndex = [null, t]) : (Gf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function p_(e, t, n) { let o = Zu(e, n, 64, null, null); return gy(t, o), o; }
function Js(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function h_(e) { return e >>> 17; }
function g_(e) { return (e & 131070) >>> 1; }
function m_(e, t, n) { return e | t << 17 | n << 1; }
function yy(e) { return e === -1; }
function Ku(e, t, n) { e.index = 0; let o = Js(t, n); o !== null ? e.removes = t.remove[o] : e.removes = F; }
function os(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return Ku(e, o, e.lView), os(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), os(e)); }
function y_() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Ku(e, n.value, o), os.bind(null, e); } return t; }
function v_(e, t) { let n = { stack: [], index: -1, lView: t }; return Ku(n, e, t), os.bind(null, n); }
var E_ = new RegExp(`^(\\d+)*(${au}|${su})*(.*)`);
function I_(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function D_(e) { let t = e.match(E_), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function C_(e) { return !e.prev && e.parent?.type === 8; }
function Fc(e) { return e.index - v; }
function lo(e, t) { return !(e.type & 144) && !!t[e.index] && vy(P(t[e.index])); }
function vy(e) { return !!e && !e.isConnected; }
function Ey(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function T_(e, t, n) { let r = e.data[Dr]?.[n]; return r ? Iy(r, t) : null; }
function kr(e, t, n, o) { let r = Fc(o), i = Ey(e, r); if (i === void 0) {
    let s = e.data[Dr];
    if (s?.[r])
        i = Iy(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (C_(o)) {
            let l = Fc(o.parent);
            i = sl(e, l);
        }
        else {
            let l = ie(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Fc(c), d = sl(e, u);
                if (c.type === 2 && d) {
                    let p = Eu(e, u) + 1;
                    i = Xs(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Xs(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function M_(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Sg:
                n = n.firstChild;
                break;
            case bg:
                n = n.nextSibling;
                break;
        }
} return n; }
function Iy(e, t) { let [n, ...o] = D_(e), r; if (n === su)
    r = t[K][j];
else if (n === au)
    r = Su(t[K][j]);
else {
    let i = Number(n);
    r = P(t[i + v]);
} return M_(r, o); }
function Sl(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return N_(e, t); {
    let n = t.parentElement, o = Sl(e, n), r = Sl(n.firstChild, t);
    return !o || !r ? null : [...o, Sg, ...r];
} }
function N_(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(bg); return o == null ? null : n; }
function Kp(e, t, n) { let o = Sl(e, t); return o === null ? null : I_(n, o); }
function Dy(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (lo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = su, i = t[K][j]) : (r = o.index, i = P(t[r]), s = N(r - v)); let a = P(t[e.index]); if (e.type & 44) {
    let l = Zt(t, e);
    l && (a = l);
} let c = Kp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Kp(l, a, au), c === null)
        throw Kw(t, e);
} return c; }
function Cy(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: w_ }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function w_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Ty = !1, My = () => { };
function Ju(e) { Ty = e; }
function ea() { return Ty; }
function __(e, t, n, o) { My(e, t, n, o); }
function Ny() { My = k_; }
function wy(e) { return e = e ?? I(Ce), e.get(uu, !1); }
function _y(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = S_(e), t.i18nChildren.set(e, n)), n; }
function S_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = v; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Sy(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && yg(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return bl(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function bl(e, t, n, o) { let r = null; for (let i of o) {
    let s = A_(e, t, n, i);
    s && (b_(r, s) && t.disjointNodes.add(i.index - v), r = s);
} return r; }
function b_(e, t) { return e && e.nextSibling !== t; }
function A_(e, t, n, o) { let r = P(e[o.index]); if (!r || vy(r))
    return t.disconnectedNodes.add(o.index - v), null; let i = r; switch (o.kind) {
    case 0: {
        Iu(n, i);
        break;
    }
    case 1:
    case 2: {
        bl(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), bl(e, t, n, o.cases[a]);
        }
        break;
    }
} return R_(e, o); }
function R_(e, t) { let o = e[m].data[t.index]; return ys(o) ? Zt(e, o) : t.kind === 3 ? v_(o, e)() ?? P(e[t.index]) : P(e[t.index]) ?? null; }
function Wt(e, t) { e.currentNode = t; }
function Lo(e, t, n) { let o = n.index - v, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Hc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Vc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function k_(e, t, n, o) { let r = e[re]; if (!r || !ea() || n && (yg(n) || Rs(r, n.index - v)))
    return; let i = e[m], s = i.data[t]; function a() { if (yy(o)) {
    let p = kr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Yg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Ns]?.[t - v] ?? [], f = r.dehydratedIcuData ??= new Map; Tn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Tn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = T_(e.hydrationInfo, e.lView, r.index - v);
        i && (o = Vc(t, i)), Tn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - v))
        return;
    switch (n.kind) {
        case 0: {
            let o = Lo(e, t, n);
            Wt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Tn(e, Vc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Lo(e, t, n);
            Wt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - v, { hydrationInfo: r } = e, i = qg(r, o);
            switch (n.type) {
                case 0: {
                    let s = Lo(e, t, n);
                    if (GM(r, o)) {
                        Tn(e, t, n.children);
                        let a = Hc(t, 1);
                        Wt(t, a);
                    }
                    else if (Tn(e, Vc(t, t.currentNode?.firstChild ?? null), n.children), Wt(t, s?.nextSibling ?? null), i !== null) {
                        let a = Hc(t, i + 1);
                        Wt(t, a);
                    }
                    break;
                }
                case 1: {
                    Lo(e, t, n);
                    let s = Hc(t, i + 1);
                    Wt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Tn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Lo(e, t, n);
            Wt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var by = () => { };
function O_(e, t, n) { by(e, t, n); }
function Ay() { by = x_; }
function x_(e, t, n) { let o = e[re]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function P_(e) { let t = e[re]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            L_(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function L_(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - v);
    r && _r(e, r, !1);
} }
function ta(e) { let t = e[Ie] ?? [], o = e[q][T], r = []; for (let i of t)
    i.data[ws] !== void 0 ? r.push(i) : Ry(i, o); e[Ie] = r; }
function F_(e) { let { lContainer: t } = e, n = t[Ie]; if (n === null)
    return; let r = t[q][T]; for (let i of n)
    Ry(i, r); }
function Ry(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[it];
    for (; n < r;) {
        let i = o.nextSibling;
        _r(t, o, !1), o = i, n++;
    }
} }
function na(e) { ta(e); let t = e[j]; ne(t) && ir(t); for (let n = V; n < e.length; n++)
    ir(e[n]); }
function ir(e) { P_(e); let t = e[m]; for (let n = v; n < t.bindingStartIndex; n++)
    if (X(e[n])) {
        let o = e[n];
        na(o);
    }
    else
        ne(e[n]) && ir(e[n]); }
function Xu(e) { let t = e._views; for (let n of t) {
    let o = vu(n);
    o !== null && o[j] !== null && (ne(o) ? ir(o) : na(o));
} }
function H_(e, t, n, o) { e !== null && (n.cleanup(t), na(e.lContainer), Xu(o)); }
function V_(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[Ir] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[it] > 0 && (i.firstChild = e, e = Xs(o[it], e)), n.push(i);
    } return [e, n]; }
var ky = () => null, Oy = () => null;
function xy() { ky = j_, Oy = B_; }
function j_(e, t) { return Ly(e, t) ? e[Ie].shift() : (ta(e), null); }
function sr(e, t) { return ky(e, t); }
function B_(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = sr(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && U_(n, t), o; }
function Py(e, t, n) { return Oy(e, t, n); }
function U_(e, t) { let n = t; for (; n;) {
    if (Jp(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Jp(e, n))
        return;
    n = n.next;
} }
function Ly(e, t) { let n = e[Ie]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Ms] === t; }
function Jp(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return X(o) && Ly(o, n) ? (ta(o), !0) : !1; }
var Fy = class {
}, oa = class {
}, Al = class {
    resolveComponentFactory(t) { throw new _(917, !1); }
}, Or = class {
    static NULL = new Al;
}, ar = class {
}, $_ = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => z_();
} return e; })();
function z_() { let e = g(), t = M(), n = fe(t.index, e); return (ne(n) ? n : e)[T]; }
var Hy = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function ed(e) { return e.ngModule !== void 0; }
function qt(e) { return !!mn(e); }
function Si(e) { return !!Be(e); }
function Xp(e) { return !!Me(e); }
function Uo(e) { return !!W(e); }
function G_(e) { return W(e) ? "component" : Me(e) ? "directive" : Be(e) ? "pipe" : "type"; }
function W_(e, t) { if (Kr(e) && (e = G(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ne(t)}", to return a standalone entity or NgModule but got "${Ne(e) || e}".`); if (mn(e) == null) {
    let n = W(e) || Me(e) || Be(e);
    if (n != null) {
        if (!n.standalone) {
            let o = G_(e);
            throw new Error(`The "${Ne(e)}" ${o}, imported from "${Ne(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw ed(e) ? new Error(`A module with providers was imported from "${Ne(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ne(e)}" type, imported from "${Ne(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Rl = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = mn(t);
            if (n?.declarations)
                for (let o of Sn(n.declarations))
                    Uo(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!qt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = ti(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Sn(n.imports))
        if (qt(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else if (Do(r))
            if (Xp(r) || Uo(r))
                o.compilation.directives.add(r);
            else if (Si(r))
                o.compilation.pipes.add(r);
            else
                throw new _(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Sn(n.declarations)) {
            if (qt(r) || Do(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Si(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Sn(n.exports))
        if (qt(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.exported.directives), Mt(i.exported.pipes, o.exported.pipes), Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else
            Si(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Le(n ?? [])) {
        let i = G(r);
        try {
            W_(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (qt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Mt(s.exported.directives, o.compilation.directives), Mt(s.exported.pipes, o.compilation.pipes);
        }
        else if (Si(i))
            o.compilation.pipes.add(i);
        else if (Xp(i) || Uo(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Mt(e, t) { for (let n of e)
    t.add(n); }
var jn = new Rl, Fi = {}, On = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Fi, o); return r !== Fi || n === Fi ? r : this.parentInjector.get(t, n, o); }
};
function rs(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Zr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Zr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function uo(e, t = 0) { let n = g(); if (n === null)
    return Pe(e, t); let o = M(); return lg(o, n, G(e), t); }
function Vy() { let e = "invalid"; throw new Error(e); }
function jy(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Y_(e, t, n, a, i, c, l);
} i !== null && o !== null && q_(n, o, i); }
function q_(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new _(-301, !1);
    o.push(t[r], i);
} }
function Q_(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Y_(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && be(p) && (c = p, Q_(e, n, f)), el(qi(n, t), e, p.type);
} tS(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = br(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = Fn(n.mergedAttrs, p.hostAttrs), K_(e, n, t, d, p), eS(d, p, r), s !== null && s.has(p)) {
        let [y, E] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, E + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} Z_(e, n, i); }
function Z_(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        eh(0, t, r, o), eh(1, t, r, o), nh(t, o, !1);
    else {
        let i = n.get(r);
        th(0, t, i, o), th(1, t, i, o), nh(t, o, !0);
    }
} }
function eh(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), By(t, i);
    } }
function th(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), By(t, s);
    } }
function By(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function nh(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || bu(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function K_(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = oi(r.type, !0)), s = new Jt(i, be(r), uo, null); e.blueprint[o] = s, n[o] = s, J_(e, t, o, br(e, n, r.hostVars, L), r); }
function J_(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    X_(s) != a && s.push(a), s.push(n, o, i);
} }
function X_(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function eS(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    be(t) && (n[""] = e);
} }
function tS(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function td(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = ue(l, s), d = pn(c, e, n, o, u); return i && jy(c, t, d, ue(l, a), r), d.mergedAttrs = Fn(d.mergedAttrs, d.attrs), d.attrs !== null && rs(d, d.attrs, !1), d.mergedAttrs !== null && rs(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function nd(e, t) { Xh(e, t), Za(t) && e.queries.elementEnd(t); }
function Uy(e, t, n, o, r, i) { let s = t.consts, a = ue(s, r), c = pn(t, e, n, o, a); if (c.mergedAttrs = Fn(c.mergedAttrs, c.attrs), i != null) {
    let l = ue(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && rs(c, c.attrs, !1), c.mergedAttrs !== null && rs(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function cr(e) { return ra(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function nS(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function $y(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ra(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function zy(e, t) { let n = cr(e), o = cr(t); return n && o ? nS(e, t, zy) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function je(e, t, n) { return e[t] = n; }
function fo(e, t) { return e[t]; }
function z(e, t, n) { if (n === L)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function on(e, t, n, o) { let r = z(e, t, n); return z(e, t + 1, o) || r; }
function ia(e, t, n, o, r) { let i = on(e, t, n, o); return z(e, t + 2, r) || i; }
function ke(e, t, n, o, r, i) { let s = on(e, t, n, o); return on(e, t + 2, r, i) || s; }
function St(e, t, n) { return function o(r) { let i = ge(e) ? fe(e.index, t) : t; Rr(i, 5); let s = t[H], a = oh(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = oh(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function oh(e, t, n, o) { let r = Mn(null); try {
    return O(A.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return Qu(e, i), !1;
}
finally {
    O(A.OutputEnd, t, n), Mn(r);
} }
function od(e, t, n, o, r, i, s, a) { let c = En(e), l = !1, u = null; if (!o && c && (u = rS(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ie(e, n), f = o ? o(d) : d;
    LM(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!oS(i)) {
        let h = o ? y => o(P(y[e.index])) : e.index;
        Gy(h, t, n, i, a, p, !1);
    }
} return l; }
function oS(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function rS(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Lt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Gy(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? lp(t) : null, c = cp(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function iS(e, t, n, o, r) { let i = St(e, t, n), s = sS(e, t, o, r, i); }
function sS(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Bn(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Bn(e, t, i, o, o, r)), c; }
function Bn(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); Gy(e.index, a, t, r, i, d, !0); }
function Wy() { qy(); }
function qy() { let e = g(), t = w(), n = M(); if (t.firstCreatePass && aS(t, n), n.controlDirectiveIndex === -1)
    return; Q("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new is(e, t, n)); }
function Qy() { Yy(); }
function Yy() { let e = g(), t = w(), n = De(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new is(e, t, n)); }
var is = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { Zy(this.tView.data[this.tNode.customControlIndex], t) && Bn(this.tNode, this.lView, this.tNode.customControlIndex, t, t, St(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; Bn(this.tNode, this.lView, this.tNode.customControlIndex, n, n, St(this.tNode, this.lView, t)); }
    listenToDom(t, n) { od(this.tNode, this.tView, this.lView, void 0, this.lView[T], t, n, St(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            _t(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            _t(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; _t(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function aS(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} cS(e, t); }
function cS(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (rh(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (rh(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function rh(e, t) { return lS(e, t) && Zy(e, t + "Change"); }
function lS(e, t) { return t in e.inputs; }
function Zy(e, t) { return t in e.outputs; }
var rt = Symbol("BINDING"), ih = { kind: "input", requiredVars: 1 }, uS = { kind: "output", requiredVars: 0 };
function sh(e, t, n) { let o = g(), r = pe(); if (z(o, r, n)) {
    let i = o[m], s = De(), a = fe(s.index, o);
    Rr(a, 1);
    let c = i.directiveRegistry[e], l = Rw(s, i, o, c, t, n);
} }
function Ky(e, t) { if (e === "formField") {
    let o = { [rt]: ih, create: () => { qy(); }, update: () => { sh(o.targetIdx, e, t()), Yy(); } };
    return o;
} let n = { [rt]: ih, update: () => sh(n.targetIdx, e, t()) }; return n; }
function Jy(e, t) { let n = { [rt]: uS, create: () => { let o = g(), r = M(), s = o[m].directiveRegistry[n.targetIdx]; iS(r, o, t, s, e); } }; return n; }
function dS(e, t) { let n = Ky(e, t), o = Jy(e + "Change", i => t.set(i)); return { [rt]: { kind: "twoWay", requiredVars: n[rt].requiredVars + o[rt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function fS(e) { let t = e; for (; t;) {
    let n = aM(t);
    if (n !== null)
        for (let o = v; o < n.length; o++) {
            let r = n[o];
            if (!ne(r) && !X(r) || r[j] !== t)
                continue;
            let i = n[m], s = jt(i, o);
            if (ge(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = rd(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function rd(e) { return e.debugInfo?.className || e.type.name || null; }
var ss = class extends Or {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new At(n, this.ngModule); }
};
function pS(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Ps.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function hS(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function gS(e, t, n) { let o = t instanceof yt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new On(n, o) : n; }
function mS(e) { let t = e.get(ar, null); if (t === null)
    throw new _(407, !1); let n = e.get(Hy, null), o = e.get(Tt, null), r = e.get(fn, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function yS(e, t) { let n = Xy(e); return Os(t, n, n === "svg" ? tp : n === "math" ? np : null); }
function Xy(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var At = class extends oa {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= pS(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= hS(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = YN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { O(A.DynamicComponentStart); let a = x(null); try {
        let c = this.componentDef, l = gS(c, r || this.ngModule, t), u = mS(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(rd(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        x(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = vS(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? Cw(l, r, a.encapsulation, n) : yS(a, l), d = s?.some(ah) || i?.some(h => typeof h != "function" && h.bindings.some(ah)), f = xs(null, c, null, 512 | Ru(a), null, null, t, l, n, null, Gg(u, n, !0)); f[v] = u, yi(f); let p = null; try {
        let h = td(v, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        mm(l, u, h), Ae(u, f), zs(c, f, h), Du(c, h, f), nd(c, h), o !== void 0 && IS(h, this.ngContentSelectors, o), p = fe(h.index, f), f[H] = p[H], Ys(c, f, null);
    }
    catch (h) {
        throw p !== null && nl(p), nl(f), h;
    }
    finally {
        O(A.DynamicComponentEnd), vi();
    } return new as(this.componentType, f, !!d); }
};
function vS(e, t, n, o) { let r = e ? ["ng-version", "21.2.6"] : ZN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[rt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[rt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Me(d);
        c.push(f);
    } return Au(0, null, ES(i, s), 1, a, c, null, null, null, [r], null); }
function ES(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function ah(e) { let t = e[rt].kind; return t === "input" || t === "twoWay"; }
var as = class extends Fy {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = jt(n[m], v), this.location = Yn(this._tNode, n), this.instance = fe(this._tNode.index, n)[H], this.hostView = this.changeDetectorRef = new bt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Qs(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = fe(o.index, r); Rr(s, 1); }
    get injector() { return new wt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function IS(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var sa = (() => { class e {
    static __NG_ELEMENT_ID__ = DS;
} return e; })();
function DS() { let e = M(); return ev(e, g()); }
var kl = class e extends sa {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Yn(this._hostTNode, this._hostLView); }
    get injector() { return new wt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = nu(this._hostTNode, this._hostLView); if (og(t)) {
        let n = Gi(t, this._hostLView), o = zi(t), r = n[m].data[o + 8];
        return new wt(r, n);
    }
    else
        return new wt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = ch(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - V; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = sr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, nn(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Ho(t), l; if (c)
        l = n;
    else {
        let E = n || {};
        l = E.index, o = E.injector, r = E.projectableNodes, i = E.environmentInjector || E.ngModuleRef, s = E.directives, a = E.bindings;
    } let u = c ? t : new At(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(yt, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = sr(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, nn(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (sp(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[q], l = new e(c, c[le], c[q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return co(s, r, i, o), t.attachToViewContainerRef(), za(jc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = ch(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = or(this._lContainer, n); o && (Co(jc(this._lContainer), n), Ar(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = or(this._lContainer, n); return o && Co(jc(this._lContainer), n) != null ? new bt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function ch(e) { return e[So]; }
function jc(e) { return e[So] || (e[So] = []); }
function ev(e, t) { let n, o = t[e.index]; return X(o) ? n = o : (n = ly(o, t, null, e), t[e.index] = n, ku(t, n)), tv(n, t, e, o), new kl(n, e, t); }
function CS(e, t) { let n = e[T], o = n.createComment(""), r = ie(t, e), i = n.parentNode(r); return Xt(n, i, o, n.nextSibling(r), !1), o; }
var tv = ov, id = () => !1;
function nv(e, t, n) { return id(e, t, n); }
function ov(e, t, n, o) { if (e[Fe])
    return; let r; n.type & 8 ? r = P(o) : r = CS(t, n), e[Fe] = r; }
function TS(e, t, n) { if (e[Fe] && e[Ie])
    return !0; let o = n[re], r = t.index - v; if (!o || Kn(t) || Rs(o, r))
    return !1; let s = sl(o, r), a = o.data[Xn]?.[r], [c, l] = V_(s, a); return e[Fe] = c, e[Ie] = l, !0; }
function MS(e, t, n, o) { id(e, n, t) || ov(e, t, n, o); }
function rv() { tv = MS, id = TS; }
var Ol = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, xl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        ad(t, n).matches !== null && this.queries[n].setDirty(); }
}, cs = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = bS(t) : this.predicate = t; }
}, Pl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Ll = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, NS(n, i)), this.matchTNodeWithReadOption(t, n, xi(n, t, i, !1, !1));
        }
    else
        o === rr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, xi(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === vr || r === sa || r === rr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = xi(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function NS(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function wS(e, t) { return e.type & 11 ? Yn(e, t) : e.type & 4 ? Ks(e, t) : null; }
function _S(e, t, n, o) { return n === -1 ? wS(t, e) : n === -2 ? SS(e, t, o) : Ko(e, e[m], n, t); }
function SS(e, t, n) { if (n === vr)
    return Yn(t, e); if (n === rr)
    return Ks(t, e); if (n === sa)
    return ev(t, e); }
function iv(e, t, n, o) { let r = t[$e].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(_S(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Fl(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = iv(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = V; d < u.length; d++) {
                let f = u[d];
                f[Et] === f[q] && Fl(f[m], f, l, o);
            }
            if (u[Ht] !== null) {
                let d = u[Ht];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Fl(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function sd(e, t) { return e[$e].queries[t].queryList; }
function sv(e, t, n) { let o = new Qi((n & 4) === 4); return up(e, t, o, o.destroy), (t[$e] ??= new xl).queries.push(new Ol(o)) - 1; }
function av(e, t, n) { let o = w(); return o.firstCreatePass && (lv(o, new cs(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), sv(o, g(), t); }
function cv(e, t, n, o) { let r = w(); if (r.firstCreatePass) {
    let i = M();
    lv(r, new cs(t, n, o), i.index), AS(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return sv(r, g(), n); }
function bS(e) { return e.split(",").map(t => t.trim()); }
function lv(e, t, n) { e.queries === null && (e.queries = new Pl), e.queries.track(new Ll(t, n)); }
function AS(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function ad(e, t) { return e.queries.getByIndex(t); }
function uv(e, t) { let n = e[m], o = ad(n, t); return o.crossesNgTemplate ? Fl(n, e, t, []) : iv(n, e, o, t); }
function cd(e, t, n) { let o, r = Bf(() => { o._dirtyCounter(); let i = RS(o, e); if (t && i === void 0)
    throw new _(-951, !1); return i; }); return o = r[et], o._dirtyCounter = Nc(0), o._flatValue = void 0, r; }
function ld(e) { return cd(!0, !1, e); }
function ud(e) { return cd(!0, !0, e); }
function dd(e) { return cd(!1, !1, e); }
function dv(e, t) { let n = e[et]; n._lView = g(), n._queryIndex = t, n._queryList = sd(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function RS(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : F; let r = sd(n, o), i = uv(n, o); return r.reset(i, gg), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var rn = new Map, lr = new Set;
function fv(e) { return ht(this, null, function* () { let t = rn; rn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => LS(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => ht(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), lr.delete(i); })); yield Promise.all(r); }); }
function kS(e, t) { pv(t) && (rn.set(e, t), lr.add(e)); }
function OS(e) { return lr.has(e); }
function pv(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function xS() { let e = rn; return rn = new Map, e; }
function PS(e) { lr.clear(); for (let t of e.keys())
    lr.add(t); rn = e; }
function hv() { return rn.size === 0; }
function LS(e, t) { return ht(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new _(918, !1); return t.text(); }); }
var Hl = new Map, gv = !0;
function FS(e, t, n) { if (t && t !== n && gv)
    throw new _(921, !1); }
function fd(e, t) { let n = Hl.get(t) || null; FS(t, n, e), Hl.set(t, e); }
function pd(e) { return Hl.get(e); }
function HS(e) { gv = !e; }
var Un = class {
}, mv = class {
};
function yv(e, t) { return new $n(e, t ?? null, []); }
var VS = yv, $n = class extends Un {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new ss(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = mn(t); this._bootstrapComponents = Sn(i.bootstrap), this._r3Injector = Ep(t, n, [{ provide: Un, useValue: this }, { provide: Or, useValue: this.componentFactoryResolver }, ...o], Yr(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, zn = class extends mv {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new $n(this.moduleType, t, []); }
};
function vv(e, t, n) { return new $n(e, t, n, !1); }
var ur = class extends Un {
    injector;
    componentFactoryResolver = new ss(this);
    instance = null;
    constructor(t) { super(); let n = new qa([...t.providers, { provide: Un, useValue: this }, { provide: Or, useValue: this.componentFactoryResolver }], t.parent || ai(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function hd(e, t, n = null) { return new ur({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var jS = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Wa(!1, n.type), r = o.length > 0 ? hd([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(Pe(yt)) });
} return e; })();
function Ev(e) { return Ze(() => { let t = Tv(e), n = Xe(Z({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Is.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(jS).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Re.Emulated, styles: e.styles || F, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Q("NgStandalone"), Mv(n); let o = e.dependencies; return n.directiveDefs = ls(o, Iv), n.pipeDefs = ls(o, Be), n.id = zS(n), n; }); }
function Iv(e) { return W(e) || Me(e); }
function gd(e) { return Ze(() => ({ type: e.type, bootstrap: e.bootstrap || F, declarations: e.declarations || F, imports: e.imports || F, exports: e.exports || F, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function BS(e, t) { if (e == null)
    return we; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Ps.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function US(e) { if (e == null)
    return we; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function Dv(e) { return Ze(() => { let t = Tv(e); return Mv(t), t; }); }
function Cv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function Tv(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || we, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || F, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: BS(e.inputs, t), outputs: US(e.outputs), debugInfo: null }; }
function Mv(e) { e.features?.forEach(t => t(e)); }
function ls(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var $S = new Map;
function zS(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function Nv(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function wv(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = GS, n.hostDirectives = o ? e.map(Vl) : [e]) : o ? n.hostDirectives.unshift(...e.map(Vl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function GS(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, _v(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && be(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function _v(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                lh(Vl(i), t, n);
        }
        else
            lh(o, t, n); }
function lh(e, t, n) { let o = Me(e.directive); WS(o.declaredInputs, e.inputs), _v(o, t, n), n.set(o, e), t.push(o); }
function Vl(e) { return typeof e == "function" ? { directive: G(e), inputs: we, outputs: we } : { directive: G(e.directive), inputs: uh(e.inputs), outputs: uh(e.outputs) }; }
function uh(e) { if (e === void 0 || e.length === 0)
    return we; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function WS(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function qS(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function md(e) { let t = qS(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (be(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new _(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Bc(e.inputs), s.declaredInputs = Bc(e.declaredInputs), s.outputs = Bc(e.outputs);
            let a = r.hostBindings;
            a && JS(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && ZS(e, c), l && KS(e, l), QS(e, r), zf(e.outputs, r.outputs), be(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === md && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} YS(o); }
function QS(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function YS(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = Fn(r.hostAttrs, n = Fn(n, r.hostAttrs));
} }
function Bc(e) { return e === we ? {} : e === F ? [] : e; }
function ZS(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function KS(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function JS(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function Sv(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = Fn(e.mergedAttrs, e.attrs);
    let u = e.tView = Au(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), We(e, !1); let c = bv(n, t, e, o); xo() && $u(n, t, c, e), Ae(c, t); let l = ly(c, t, c, e); t[o + v] = l, ku(t, l), nv(l, e, t); }
function XS(e, t, n, o, r, i, s, a, c, l, u) { let d = n + v, f; return t.firstCreatePass ? (f = pn(t, d, 4, s || null, a || null), hi() && jy(t, e, f, ue(t.consts, l), qu), Xh(t, f)) : f = t.data[d], Sv(f, e, t, n, o, r, i, c), En(f) && zs(t, e, f), l != null && so(e, f, u), f; }
function sn(e, t, n, o, r, i, s, a, c, l, u) { let d = n + v, f; if (t.firstCreatePass) {
    if (f = pn(t, d, 4, s || null, a || null), l != null) {
        let p = ue(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return Sv(f, e, t, n, o, r, i, c), l != null && so(e, f, u), f; }
function yd(e, t, n, o, r, i, s, a) { let c = g(), l = w(), u = ue(l.consts, i); return XS(c, l, e, t, n, o, r, u, void 0, s, a), yd; }
function vd(e, t, n, o, r, i, s, a) { let c = g(), l = w(), u = ue(l.consts, i); return sn(c, l, e, t, n, o, r, u, void 0, s, a), vd; }
var bv = Av;
function Av(e, t, n, o) { return He(!0), t[T].createComment(""); }
function eb(e, t, n, o) { let r = !ks(t, n); He(r); let i = t[re]?.data[Ts]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return Av(e, t); let s = t[re], a = kr(s, e, t, n); As(s, o, a); let c = Eu(s, o); return Xs(c, a); }
function Rv() { bv = eb; }
var ee = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(ee || {}), dh = 0, tb = 1, $ = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })($ || {}), dr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(dr || {}), xn = 0, dt = 1, jo = 2, bi = 3, nb = 4, ob = 5, aa = 6, rb = 7, Pn = 8, ib = 9, Ed = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Ed || {});
function xr(e, t, n) { let o = Ov(e); t[o] === null && (t[o] = []), t[o].push(n); }
function Hi(e, t) { let n = Ov(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function kv(e) { Hi(1, e), Hi(0, e), Hi(2, e); }
function Ov(e) { let t = nb; return e === 1 ? t = ob : e === 2 && (t = ib), t; }
function Pr(e) { return e + 1; }
function me(e, t) { let n = e[m], o = Pr(t.index); return e[o]; }
function sb(e, t, n) { let o = e[m], r = Pr(t); e[r] = n; }
function ae(e, t) { let n = Pr(t.index); return e.data[n]; }
function ab(e, t, n) { let o = Pr(t); e.data[o] = n; }
function cb(e, t, n) { let o = t[m], r = ae(o, n); switch (e) {
    case $.Complete: return r.primaryTmplIndex;
    case $.Loading: return r.loadingTmplIndex;
    case $.Error: return r.errorTmplIndex;
    case $.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function jl(e, t) { return t === $.Placeholder ? e.placeholderBlockConfig?.[dh] ?? null : t === $.Loading ? e.loadingBlockConfig?.[dh] ?? null : null; }
function xv(e) { return e.loadingBlockConfig?.[tb] ?? null; }
function fh(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function lb(e, t) { let n = t.primaryTmplIndex + v; return jt(e, n); }
function Pv(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Lv(e, t) { let n = null, o = Pr(t.index); return v < o && o < e.bindingStartIndex && (n = ae(e, t)), !!n && Pv(n); }
function Id(e, t, n, o) { let r = n.get(U); return xM(e, () => r.run(t), i => r.runOutsideAngular(() => OM(i)), o); }
function ub(e, t, n) { return n == null ? e : n >= 0 ? ap(n, e) : e[t.index][V] ?? null; }
function db(e, t) { return Vt(v + t, e); }
function po(e, t, n, o, r, i, s, a) { let c = e[k], l = c.get(U), u; function d() { if (It(e)) {
    u.destroy();
    return;
} let f = me(e, t), p = f[dt]; if (p !== dr.Initial && p !== $.Placeholder) {
    u.destroy();
    return;
} let h = ub(e, t, o); if (!h || (u.destroy(), It(h)))
    return; let y = db(h, n), E = r(y, () => { l.run(() => { e !== h && Xa(h, E), i(); }); }, c, a); e !== h && pi(h, E), xr(s, f, E); } u = Fm({ read: d }, { injector: c }); }
function ca(e, t) { let n = t.get(hb), o = () => n.remove(e); return n.add(e), o; }
var fb = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, pb = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, hb = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = I(U);
    requestIdleCallbackFn = fb().bind(globalThis);
    cancelIdleCallbackFn = pb().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function la(e) { return (t, n) => Fv(e, t, n); }
function Fv(e, t, n) { let o = n.get(Hv), r = n.get(U), i = () => o.remove(t); return o.add(e, t, r), i; }
var Hv = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Yf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Ga(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Ga(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), gb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? hd(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), mb = new S("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Vv = new S("");
function Uc(e, t, n) { return e.get(gb).getOrCreateInjector(t, e, n, ""); }
function yb(e, t, n) { if (e instanceof On) {
    let r = e.injector, i = e.parentInjector, s = Uc(i, t, n);
    return new On(r, s);
} let o = e.get(yt); if (o !== e) {
    let r = Uc(o, t, n);
    return new On(e, r);
} return Uc(e, t, n); }
function ot(e, t, n, o = !1) { let r = n[q], i = r[m]; if (It(r))
    return; let s = me(r, t), a = s[dt], c = s[rb]; if (!(c !== null && e < c) && hh(a, e) && hh(s[xn] ?? -1, e)) {
    let l = ae(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (xv(l) !== null || jl(l, $.Loading) !== null || jl(l, $.Placeholder)) ? Bl : jv;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Qu(r, f);
    }
} }
function vb(e, t) { let n = e[Ie]?.findIndex(r => r.data[Cr] === t[dt]) ?? -1; return { dehydratedView: n > -1 ? e[Ie][n] : null, dehydratedViewIx: n }; }
function jv(e, t, n, o, r) { O(A.DeferBlockStateStart); let i = cb(e, r, o); if (i !== null) {
    t[dt] = e;
    let s = r[m], a = i + v, c = jt(s, a), l = 0;
    Yu(n, l);
    let u;
    if (e === $.Complete) {
        let h = ae(s, o), y = h.providers;
        y && y.length > 0 && (u = yb(r[k], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = vb(n, t), p = ao(r, c, null, { injector: u, dehydratedView: d });
    if (co(n, p, l, nn(c, d)), Rr(p, 2), f > -1 && n[Ie]?.splice(f, 1), (e === $.Complete || e === $.Error) && Array.isArray(t[Pn])) {
        for (let h of t[Pn])
            h();
        t[Pn] = null;
    }
} O(A.DeferBlockStateEnd); }
function Eb(e, t, n, o, r) { let i = Date.now(), s = r[m], a = ae(s, o); if (t[jo] === null || t[jo] <= i) {
    t[jo] = null;
    let c = xv(a), l = t[bi] !== null;
    if (e === $.Loading && c !== null && !l) {
        t[xn] = e;
        let u = ph(c, t, o, n, r);
        t[bi] = u;
    }
    else {
        e > $.Loading && l && (t[bi](), t[bi] = null, t[xn] = null), jv(e, t, n, o, r);
        let u = jl(a, e);
        u !== null && (t[jo] = i + u, ph(u, t, o, n, r));
    }
}
else
    t[xn] = e; }
function ph(e, t, n, o, r) { return Fv(e, () => { let s = t[xn]; t[jo] = null, t[xn] = null, s !== null && ot(s, n, o); }, r[k]); }
function hh(e, t) { return e < t; }
function ho(e, t) { let n = e[t.index]; ot($.Placeholder, t, n); }
function gh(e, t, n) { e.loadingPromise.then(() => { e.loadingState === ee.COMPLETE ? ot($.Complete, t, n) : e.loadingState === ee.FAILED && ot($.Error, t, n); }); }
var Bl = null;
function Bv(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ue(r, n)), o != null && (t.loadingBlockConfig = ue(r, o)), Bl === null && (Bl = Eb); }
var Vi = "__ngAsyncComponentMetadataFn__";
function Ib(e) { return e[Vi] ?? null; }
function Uv(e, t, n) { let o = e; return o[Vi] = () => Promise.all(t()).then(r => (n(...r), o[Vi] = null, r)), o[Vi]; }
function Dd(e, t, n, o) { return Ze(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = Z(Z({}, r.propDecorators), o) : r.propDecorators = o); }); }
var Db = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Cd(e) { return typeof e == "function" && e[et] !== void 0; }
function Td(e) { return Cd(e) && typeof e.set == "function"; }
function ji(e, t) { let n = e[m]; for (let o = v; o < n.bindingStartIndex; o++)
    if (X(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ae(n, s);
            if (Pv(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        ne(r[j]) && ji(r[j], t);
        for (let s = V; s < r.length; s++)
            ji(r[s], t);
    }
    else
        ne(e[o]) && ji(e[o], t); }
function Cb() { return Q("Chrome DevTools profiling"), () => { }; }
function Tb(e) { let t = e.get(Ut), n = e.get(ct), o = _g(t, n), r = {}; for (let [i, s] of Object.entries(o))
    FM(i) || (r[i] = s); return r; }
var mh = "ng";
function Mb(e, t) { Nb(e, t); }
function Nb(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Ee;
    n[mh] ??= {}, n[mh][e] = t;
} }
var $v = new S(""), zv = new S(""), wb = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Xf() && (this._destroyRef = I(Po, { optional: !0 }) ?? void 0), Md || (Wv(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { U.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Pe(U), Pe(Gv), Pe(zv)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), Gv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Md?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Wv(e) { Md = e; }
var Md;
function Nd(e) { return !!e && typeof e.then == "function"; }
function qv(e) { return !!e && typeof e.subscribe == "function"; }
var wd = new S("");
function Qv(e) { return tt([{ provide: wd, multi: !0, useValue: e }]); }
var _d = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = I(wd, { optional: !0 }) ?? [];
    injector = I(Ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ci(this.injector, r);
        if (Nd(i))
            n.push(i);
        else if (qv(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Lr = new S("");
function Sd() { Uf(() => { let e = ""; throw new _(600, e); }); }
function Yv(e) { return e.isBoundToModule; }
var _b = 10;
function bd(e, t) { return Array.isArray(t) ? t.reduce(bd, e) : Z(Z({}, e), t); }
var Oe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = I(zt);
    afterRenderManager = I(Vs);
    zonelessEnabled = I(Dn);
    rootEffectScheduler = I(_c);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Bh;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = I($t);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(TT(n => !n)); }
    constructor() { I(fn, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = I(yt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Ce.NULL) { return this._injector.get(U).run(() => { O(A.BootstrapComponentStart); let s = n instanceof oa; if (!this._injector.get(_d).done) {
        let h = "";
        throw new _(405, h);
    } let c; s ? c = n : c = this._injector.get(Or).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Yv(c) ? void 0 : this._injector.get(Un), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get($v, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), $o(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), O(A.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { O(A.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Hs.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw O(A.ChangeDetectionEnd), new _(101, !1); let n = x(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, x(n), this.afterTick.next(), O(A.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(ar, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < _b;) {
        O(A.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            O(A.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Ro(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            ry(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Ro(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; $o(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(Lr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => $o(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new _(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function $o(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function ua() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function Zv(e) { let t = g(), n = M(); if (ho(t, n), !Xv(0, t))
    return; let o = t[k], r = me(t, n), i = e(() => ye(0, t, n), o); xr(0, r, i); }
function Kv(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[k], o = M(), r = t[m], i = ae(r, o); if (i.loadingState === ee.NOT_STARTED) {
    let s = me(t, o), c = e(() => Fr(i, t, o), n);
    xr(1, s, c);
} }
function Jv(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[k], r = me(t, n), i = r[aa], s = e(() => ft(o, i), o); xr(2, r, s); }
function Fr(e, t, n) { da(e, t, n); }
function da(e, t, n) { let o = t[k], r = t[m]; if (e.loadingState !== ee.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = me(t, n), s = lb(r, e); e.loadingState = ee.IN_PROGRESS, Hi(1, i); let a = e.dependencyResolverFn, c = o.get(wc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, y = W(h) || Me(h);
        if (y)
            d.push(y);
        else {
            let E = Be(h);
            E && f.push(E);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = ee.FAILED, e.errorTmplIndex === null) {
        let h = new _(-750, !1);
        Qu(t, h);
    }
}
else {
    e.loadingState = ee.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = fh(p.directiveRegistry, d);
        let h = d.map(E => E.type), y = Wa(!1, ...h);
        e.providers = y;
    }
    f.length > 0 && (p.pipeRegistry = fh(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = ee.COMPLETE, c(); }), e.loadingPromise); }
function Xv(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[k].get(Vv, null, { optional: !0 })?.behavior === Ed.Manual); }
function ye(e, t, n) { let o = t[m], r = t[n.index]; if (!Xv(e, t))
    return; let i = me(t, n), s = ae(o, n); switch (kv(i), s.loadingState) {
    case ee.NOT_STARTED:
        ot($.Loading, n, r), da(s, t, n), s.loadingState === ee.IN_PROGRESS && gh(s, n, r);
        break;
    case ee.IN_PROGRESS:
        ot($.Loading, n, r), gh(s, n, r);
        break;
    case ee.COMPLETE:
        ot($.Complete, n, r);
        break;
    case ee.FAILED:
        ot($.Error, n, r);
        break;
    default:
} }
function ft(e, t, n) { return ht(this, null, function* () { let o = e.get(lt); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = WM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), Ab(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield yh(e, s, n) : o.awaitParentBlock(a, () => ht(null, null, function* () { return yield yh(e, s, n); })); }); }
function yh(e, t, n) { return ht(this, null, function* () { let o = e.get(lt), r = o.hydrating, i = e.get($t), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield kb(u), yield Rb(e), Sb(u)) {
            F_(u), vh(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        bb(c, t, o), vh(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), H_(o.get(a), t, o, e.get(Oe)); }); }
function Sb(e) { return me(e.lView, e.tNode)[dt] === $.Error; }
function bb(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && na(r.lContainer); }
function vh(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function Ab(e, t) { for (let n of t)
    e.hydrating.set(n, ua()); }
function Rb(e) { return new Promise(t => Vu(t, { injector: e })); }
function kb(e) { return ht(this, null, function* () { let { tNode: t, lView: n } = e, o = me(n, t); return new Promise(r => { Ob(o, r), ye(2, n, t); }); }); }
function Ob(e, t) { Array.isArray(e[Pn]) || (e[Pn] = []), e[Pn].push(t); }
function Y(e, t, n) { return e === 0 ? Eh(t, n) : e === 2 ? !Eh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function xb(e) { return e != null && (e & 1) === 1; }
function Eh(e, t) { let n = e[k], o = ae(e[m], t), r = Nr(n), i = xb(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = me(e, t)[aa] !== null; return !(i && a && r); }
function Rt(e, t) { let n = ae(e, t); return n.hydrateTriggers ??= new Map; }
function eE(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[it], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} Pb(e, o), Hb(e, s), Lb(e, i), Fb(e, r); }
function Pb(e, t) { for (let n of t) {
    let o = e.get(lt), i = ca(() => ft(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function Lb(e, t) { if (t.length > 0) {
    let n = e.get(lt);
    for (let o of t) {
        let r = Id(o.el, () => ft(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function Fb(e, t) { for (let n of t) {
    let o = e.get(lt), r = () => ft(e, n.blockName), s = la(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function Hb(e, t) { for (let n of t)
    ft(e, n.blockName); }
function tE(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = w(), f = e + v, p = sn(u, d, e, null, 0, 0), h = u[k], y = Nr(h); if (d.firstCreatePass) {
    Q("NgDefer");
    let Je = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: ee.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, Je, a, s), ab(d, f, Je);
} let E = u[f]; nv(E, p, u); let D = null, R = null; if (E[Ie]?.length > 0) {
    let Je = E[Ie][0].data;
    R = Je[ws] ?? null, D = Je[Cr];
} let J = [null, dr.Initial, null, null, null, null, R, D, null, null]; sb(u, f, J); let xe = null; R !== null && y && (xe = h.get(lt), xe.add(R, { lView: u, tNode: p, lContainer: E })); let Te = () => { kv(J), R !== null && xe?.cleanup([R]); }; xr(0, J, () => Xa(u, Te)), pi(u, Te); }
function nE(e) { let t = g(), n = De(); if (!Y(0, t, n))
    return; let o = pe(); if (z(t, o, e)) {
    let r = x(null);
    try {
        let i = !!e, a = me(t, n)[dt];
        i === !1 && a === dr.Initial ? ho(t, n) : i === !0 && (a === dr.Initial || a === $.Placeholder) && ye(0, t, n);
    }
    finally {
        x(r);
    }
} }
function oE(e) { let t = g(), n = De(); if (!Y(1, t, n))
    return; let o = pe(); if (z(t, o, e)) {
    let r = x(null);
    try {
        let i = !!e, s = t[m], a = ae(s, n);
        i === !0 && a.loadingState === ee.NOT_STARTED && Fr(a, t, n);
    }
    finally {
        x(r);
    }
} }
function rE(e) { let t = g(), n = De(); if (!Y(2, t, n))
    return; let o = pe(), r = w(); if (Rt(r, n).set(6, null), z(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        ye(2, t, n);
    else {
        let s = t[k], a = x(null);
        try {
            if (!!e === !0) {
                let u = me(t, n)[aa];
                ft(s, u);
            }
        }
        finally {
            x(a);
        }
    } }
function iE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(w(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function sE() { let e = g(), t = M(); Y(0, e, t) && Zv(ca); }
function aE() { let e = g(), t = M(); Y(1, e, t) && Kv(ca); }
function cE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(w(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? ye(2, e, t) : Jv(ca, e, t); }
function lE() { let e = g(), t = M(); if (!Y(0, e, t))
    return; ae(e[m], t).loadingTmplIndex === null && ho(e, t), ye(0, e, t); }
function uE() { let e = g(), t = M(); if (!Y(1, e, t))
    return; let n = e[m], o = ae(n, t); o.loadingState === ee.NOT_STARTED && da(o, e, t); }
function dE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; if (Rt(w(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    ye(2, e, t);
else {
    let o = e[k], i = me(e, t)[aa];
    ft(o, i);
} }
function fE(e) { let t = g(), n = M(); Y(0, t, n) && Zv(la(e)); }
function pE(e) { let t = g(), n = M(); Y(1, t, n) && Kv(la(e)); }
function hE(e) { let t = g(), n = M(); if (!Y(2, t, n))
    return; Rt(w(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? ye(2, t, n) : Jv(la(e), t, n); }
function gE(e, t) { let n = g(), o = M(); Y(0, n, o) && (ho(n, o), typeof ngServerMode < "u" && ngServerMode || po(n, o, e, t, Og, () => ye(0, n, o), 0)); }
function mE(e, t) { let n = g(), o = M(); if (!Y(1, n, o))
    return; let r = n[m], i = ae(r, o); i.loadingState === ee.NOT_STARTED && po(n, o, e, t, Og, () => Fr(i, n, o), 1); }
function yE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(w(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function vE(e, t) { let n = g(), o = M(); Y(0, n, o) && (ho(n, o), typeof ngServerMode < "u" && ngServerMode || po(n, o, e, t, kg, () => ye(0, n, o), 0)); }
function EE(e, t) { let n = g(), o = M(); if (!Y(1, n, o))
    return; let r = n[m], i = ae(r, o); i.loadingState === ee.NOT_STARTED && po(n, o, e, t, kg, () => Fr(i, n, o), 1); }
function IE() { let e = g(), t = M(); if (!Y(2, e, t))
    return; Rt(w(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function DE(e, t, n) { let o = g(), r = M(); Y(0, o, r) && (ho(o, r), typeof ngServerMode < "u" && ngServerMode || po(o, r, e, t, Id, () => ye(0, o, r), 0, n)); }
function CE(e, t, n) { let o = g(), r = M(); if (!Y(1, o, r))
    return; let i = o[m], s = ae(i, r); s.loadingState === ee.NOT_STARTED && po(o, r, e, t, Id, () => Fr(s, o, r), 1, n); }
function TE(e) { let t = g(), n = M(); if (!Y(2, t, n))
    return; Rt(w(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && ye(2, t, n); }
function Ad(e, t) { let n = g(), o = pe(); if (z(n, o, t)) {
    let r = w(), i = De();
    if (Qs(i, r, n, e, t))
        ge(i) && Jm(n, i.index);
    else {
        let a = ie(i, n);
        Gs(n[T], a, null, i.value, e, t, null);
    }
} return Ad; }
function Rd(e, t, n, o) { let r = g(), i = pe(); if (z(r, i, t)) {
    let s = w(), a = De();
    bw(a, r, e, t, n, o);
} return Rd; }
function zo(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !dn)
    return zo; let t = g(); if (Ls(t))
    return zo; let n = M(), o = t[k].get(U); return Fs(es(t), n, () => Vb(t, n, e, o)), Us(t[k]), ju(t[k], es(t)), zo; }
function Vb(e, t, n, o) { let r = ie(t, e), i = e[T], s = Om(n), a = [], c = !1, l = d => { if (tr(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { tr(d) === r && (Lu(d, r) && (c = !0), jb(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), nw(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (Lm(r, Kt, dn), !Kt.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        xu(r);
    } }); });
} }
function jb(e, t, n) { let o = Hn.get(t); if (!(tr(e) !== t || !o) && Lu(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    xu(t);
} }
function Go(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !dn)
    return Go; let t = g(); if (Ls(t))
    return Go; let n = M(); return Fs(es(t), n, () => Bb(t, n, e)), Us(t[k]), ju(t[k], es(t)), Go; }
function Bb(e, t, n) { let o = ie(t, e); n.call(e[H], { target: o, animationComplete: ow }); }
function Wo(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !dn)
    return Wo; let t = g(); if (Ls(t))
    return Wo; let o = M(), r = t[k].get(U); return Fs(en(t), o, () => Ub(t, o, e, r)), Us(t[k]), Wo; }
function Ub(e, t, n, o) { let { promise: r, resolve: i } = ua(), s = ie(t, e), a = e[T]; tn.add(e[_e]), (en(e).get(t.index).resolvers ??= []).push(i); let c = Om(n); return c && c.length > 0 ? $b(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function $b(e, t, n, o, r, i) { iw(e, r); let s = [], a = en(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(tr(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || Lu(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), Kt.delete(e), Dl(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    Cl(a, s), Tl(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), Pu(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; Lm(e, Kt, dn); let d = Kt.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (Dl(t, e), Cl(a, s), Tl(n, t)); }); }); }
function us(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !dn)
    return us; let t = g(), n = M(); tn.add(t[_e]); let o = t[k].get(U), r = t[k].get(km); return Fs(en(t), n, () => zb(t, n, e, o, r)), Us(t[k]), us; }
function zb(e, t, n, o, r) { let { promise: i, resolve: s } = ua(), a = ie(t, e), c = [], l = e[T], u = Ls(e); (en(e).get(t.index).resolvers ??= []).push(s); let d = en(e).get(t.index)?.resolvers; if (u)
    _i(e, t, a, d, c);
else {
    let f = setTimeout(() => _i(e, t, a, d, c), r), p = { target: a, animationComplete: () => { _i(e, t, a, d, c), clearTimeout(f); } };
    Pu(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { _i(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[H], p);
} return { promise: i, resolve: s }; }
function ME() { return g()[K][H]; }
var Ul = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function $c(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function Gb(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Mn(o);
    let l = t.length - 1;
    for (Mn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = $c(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = $c(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let E = n(s, u), D = n(a, p), R = n(s, d);
        if (Object.is(R, D)) {
            let J = n(l, h);
            Object.is(J, E) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new ds, i ??= Dh(e, s, a, n), $l(e, r, s, R))
            e.updateValue(s, d), s++, a++;
        else if (i.has(R))
            r.set(E, e.detach(s)), a--;
        else {
            let J = e.create(s, t[s]);
            e.attach(s, J), s++, a++;
        }
    }
    for (; s <= l;)
        Ih(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Mn(o);
    let l = t[Symbol.iterator]();
    Mn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = $c(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new ds, i ??= Dh(e, s, a, n);
            let h = n(s, f);
            if ($l(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        Ih(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function $l(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Ih(e, t, n, o, r) { if ($l(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Dh(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var ds = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function NE(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = g(), l = w(), u = ue(l.consts, i); return sn(c, l, e, t, n, o, r, u, 256, s, a), fa; }
function fa(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = g(), l = w(), u = ue(l.consts, i); return sn(c, l, e, t, n, o, r, u, 512, s, a), fa; }
function wE(e, t) { Q("NgControlFlow"); let n = g(), o = pe(), r = n[o] !== L ? n[o] : -1, i = r !== -1 ? fs(n, v + r) : void 0, s = 0; if (z(n, o, e)) {
    let a = x(null);
    try {
        if (i !== void 0 && Yu(i, s), e !== -1) {
            let c = v + e, l = fs(n, c), u = ql(n[m], c), d = Py(l, u, n), f = ao(n, u, t, { dehydratedView: d });
            co(l, f, s, nn(u, d));
        }
    }
    finally {
        x(a);
    }
}
else if (i !== void 0) {
    let a = uy(i, s);
    a !== void 0 && (a[H] = t);
} }
var zl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - V; }
};
function _E(e) { return e; }
function SE(e, t) { return t; }
var Gl = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function bE(e, t, n, o, r, i, s, a, c, l, u, d, f) { Q("NgControlFlow"); let p = g(), h = w(), y = c !== void 0, E = g(), D = a ? s.bind(E[K][H]) : s, R = new Gl(y, D); E[v + e] = R, sn(p, h, e + 1, t, n, o, r, ue(h.consts, i), 256), y && sn(p, h, e + 2, c, l, u, d, ue(h.consts, f), 512); }
var Wl = class extends Ul {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - V; }
    at(t) { return this.getLView(t)[H].$implicit; }
    attach(t, n) { let o = n[re]; this.needsIndexUpdate ||= t !== this.length, co(this.lContainer, n, t, nn(this.templateTNode, o)), Wb(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, qb(this.lContainer, t), Qb(this.lContainer, t); }
    create(t, n) { let o = sr(this.lContainer, this.templateTNode.tView.ssrId); return ao(this.hostLView, this.templateTNode, new zl(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { Ar(t[m], t); }
    updateValue(t, n) { this.getLView(t)[H].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[H].$index = t; }
    getLView(t) { return Yb(this.lContainer, t); }
};
function AE(e) { let t = x(null), n = se(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = fs(o, s);
    if (i.liveCollection === void 0) {
        let l = ql(r, s);
        i.liveCollection = new Wl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (Gb(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = pe(), u = c.length === 0;
        if (z(o, l, u)) {
            let d = n + 2, f = fs(o, d);
            if (u) {
                let p = ql(r, d), h = Py(f, p, o), y = ao(o, p, void 0, { dehydratedView: h });
                co(f, y, 0, nn(p, h));
            }
            else
                r.firstUpdatePass && ta(f), Yu(f, 0);
        }
    }
}
finally {
    x(t);
} }
function fs(e, t) { return e[t]; }
function Wb(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n], r = o ? o[ze] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[k];
    fw(i, r), tn.delete(o[_e]), r.detachedLeaveAnimationFns = void 0;
} }
function qb(e, t) { if (e.length <= V)
    return; let n = V + t, o = e[n], r = o ? o[ze] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function Qb(e, t) { return or(e, t); }
function Yb(e, t) { return uy(e, t); }
function ql(e, t) { return jt(e, t); }
function kd(e, t, n) { let o = g(), r = pe(); if (z(o, r, t)) {
    let i = w(), s = De();
    Gu(s, o, e, t, o[T], n);
} return kd; }
function Ql(e, t, n, o, r) { Qs(t, e, n, r ? "class" : "style", o); }
function fr(e, t, n, o) { let r = g(), i = r[m], s = e + v, a = i.firstCreatePass ? td(s, r, 2, t, qu, hi(), n, o) : i.data[s]; if (ge(a)) {
    let c = r[Ue].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(rd(l), () => (Ch(e, t, r, a, o), fr));
    }
} return Ch(e, t, r, a, o), fr; }
function Ch(e, t, n, o, r) { if (Ws(o, n, e, t, Pd), En(o)) {
    let i = n[m];
    zs(i, n, o), Du(i, o, n);
} r != null && so(n, o); }
function pa() { let e = w(), t = M(), n = qs(t); return e.firstCreatePass && nd(e, n), tc(n) && rc(), ec(), n.classesWithoutHost != null && xT(n) && Ql(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && PT(n) && Ql(e, n, g(), n.stylesWithoutHost, !1), pa; }
function Od(e, t, n, o) { return fr(e, t, n, o), pa(), Od; }
function ha(e, t, n, o) { let r = g(), i = r[m], s = e + v, a = i.firstCreatePass ? Uy(s, i, 2, t, n, o) : i.data[s]; return Ws(a, r, e, t, Pd), o != null && so(r, a), ha; }
function ga() { let e = M(), t = qs(e); return tc(t) && rc(), ec(), ga; }
function xd(e, t, n, o) { return ha(e, t, n, o), ga(), xd; }
var Pd = (e, t, n, o, r) => (He(!0), Os(t[T], o, Ic()));
function Zb(e, t, n, o, r) { let i = !ks(t, n); if (He(i), i)
    return Os(t[T], o, Ic()); let s = t[re], a = kr(s, e, t, n); return Qg(s, r) && As(s, r, a.nextSibling), s && (ru(n) || mg(a)) && ge(n) && (pp(n), gm(a)), a; }
function RE() { Pd = Zb; }
function ma(e, t, n) { let o = g(), r = o[m], i = e + v, s = r.firstCreatePass ? td(i, o, 8, "ng-container", qu, hi(), t, n) : r.data[i]; if (Ws(s, o, e, "ng-container", Vd), En(s)) {
    let a = o[m];
    zs(a, o, s), Du(a, s, o);
} return n != null && so(o, s), ma; }
function Hr() { let e = w(), t = M(), n = qs(t); return e.firstCreatePass && nd(e, n), Hr; }
function Ld(e, t, n) { return ma(e, t, n), Hr(), Ld; }
function ya(e, t, n) { let o = g(), r = o[m], i = e + v, s = r.firstCreatePass ? Uy(i, r, 8, "ng-container", t, n) : r.data[i]; return Ws(s, o, e, "ng-container", Vd), n != null && so(o, s), ya; }
function Fd() { let e = M(), t = qs(e); return Hr; }
function Hd(e, t, n) { return ya(e, t, n), Fd(), Hd; }
var Vd = (e, t, n, o, r) => (He(!0), Nu(t[T], ""));
function Kb(e, t, n, o, r) { let i, s = !ks(t, n); if (He(s), s)
    return Nu(t[T], ""); let a = t[re], c = kr(a, e, t, n), l = qg(a, r); return As(a, r, c), i = Xs(l, c), i; }
function kE() { Vd = Kb; }
function OE() { return g(); }
function jd(e, t, n) { let o = g(), r = pe(); if (z(o, r, t)) {
    let i = w(), s = De();
    Wu(s, o, e, t, o[T], n);
} return jd; }
function Bd(e, t, n) { let o = g(), r = pe(); if (z(o, r, t)) {
    let i = w(), s = De(), a = gi(i.data), c = Xm(a, s, o);
    Wu(s, o, e, t, c, n);
} return Bd; }
var Fo = void 0;
function Jb(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var Xb = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Fo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Fo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Fo, Fo, Fo], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", Jb], Ln = {};
function eA(e, t, n) { typeof t != "string" && (n = t, t = e[Gn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Ln[t] = e, n && (Ln[t][Gn.ExtraData] = n); }
function Ud(e) { let t = oA(e), n = Th(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Th(o), n)
    return n; if (o === "en")
    return Xb; throw new _(701, !1); }
function tA(e) { return Ud(e)[Gn.CurrencyCode] || null; }
function xE(e) { return Ud(e)[Gn.PluralCase]; }
function Th(e) { return e in Ln || (Ln[e] = Ee.ng && Ee.ng.common && Ee.ng.common.locales && Ee.ng.common.locales[e]), Ln[e]; }
function nA() { Ln = {}; }
var Gn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Gn || {});
function oA(e) { return e.toLowerCase().replace(/_/g, "-"); }
var rA = ["zero", "one", "two", "few", "many"];
function iA(e, t) { let n = xE(t)(parseInt(e, 10)), o = rA[n]; return o !== void 0 ? o : "other"; }
var Vr = "en-US", sA = "USD", PE = { marker: "element" }, LE = { marker: "ICU" }, nt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(nt || {}), FE = Vr;
function HE(e) { typeof e == "string" && (FE = e.toLowerCase().replace(/_/g, "-")); }
function aA() { return FE; }
var pr = 0, qo = 0;
function cA(e) { e && (pr = pr | 1 << Math.min(qo, 31)), qo++; }
function lA(e, t, n) { if (qo > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = qe() - qo - 1;
    UE(e, t, r, i, pr);
} pr = 0, qo = 0; }
function VE(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return Nu(o, t);
    case Node.TEXT_NODE: return Mu(o, t);
    case Node.ELEMENT_NODE: return Os(o, t, null);
} }
var Qo = (e, t, n, o) => (He(!0), VE(e, n, o));
function uA(e, t, n, o) { let r = e[re], i = t - v, s = !ea() || !r || ko() || Rs(r, i); return He(s), s ? VE(e, n, o) : Ey(r, i); }
function jE() { Qo = uA; }
function dA(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & nt.COMMENT) === nt.COMMENT, l = (s & nt.APPEND_EAGERLY) === nt.APPEND_EAGERLY, u = s >>> nt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Qo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = xo()), l && n !== null && f && Xt(r, n, d, o, !1);
} }
function BE(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Qo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = h_(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = P(n[l])), d !== null) {
                    let y = g_(c), E = n[y];
                    Xt(r, d, E, u, !1);
                    let D = Bo(e, y);
                    if (D !== null && typeof D == "object") {
                        let R = Js(D, n);
                        R !== null && BE(e, D.create[R], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Gs(r, Vt(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case LE:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Qo(n, u, l, Node.COMMENT_NODE);
                    Ae(p, n);
                }
                break;
            case PE:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Qo(n, f, d, Node.ELEMENT_NODE);
                    Ae(p, n);
                }
                break;
            default:
        }
} }
function UE(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += N(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Gs(t[T], t[d], null, h, f, c, p) : Gu(h, t, f, c, t[T], p);
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && pm(t[T], y, c);
                            break;
                        case 2:
                            fA(e, Bo(e, d), t, c);
                            break;
                        case 3:
                            Mh(e, Bo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Bo(e, l);
            t[u.currentCaseLViewIndex] < 0 && Mh(e, u, o, t);
        }
    }
    i += a;
} }
function Mh(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = pr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), UE(e, o, t.update[r], n, i);
} }
function fA(e, t, n, o) { let r = pA(t, o); if (Js(t, n) !== r && ($E(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && BE(e, t.create[r], n, s), O_(n, t.anchorIdx, r);
} }
function $E(e, t, n) { let o = Js(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Vt(s, n);
            a !== null && _r(n[T], a);
        }
        else
            $E(e, Bo(e, ~s), n);
    }
} }
function pA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = iA(t, aA());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ps = /�(\d+):?\d*�/gi, hA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, gA = /�(\d+)�/, zE = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Yo = "\uFFFD", mA = /�\/?\*(\d+:\d+)�/gi, yA = /�(\/?[#*]\d+):?\d*�/gi, vA = /\uE500/g;
function EA(e) { return e.replace(vA, " "); }
function IA(e, t, n, o, r, i) { let s = In(), a = [], c = [], l = [[]], u = [[]]; r = MA(r, i); let d = EA(r).split(yA); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = Yl(p);
        for (let y = 0; y < h.length; y++) {
            let E = h[y];
            if ((y & 1) === 0) {
                let D = E;
                D !== "" && DA(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = E;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let J = GE(e, s, l[0], n, a, "", !0).index;
                qE(u[0], e, n, c, t, D, J);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), E = v + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), We(In(), !1);
        else {
            let D = p_(e, l[0], E);
            l.unshift([]), We(D, !0);
            let R = { kind: 2, index: E, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(R), u.unshift(R.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function GE(e, t, n, o, r, i, s) { let a = br(e, o, 1, null), c = a << nt.SHIFT, l = In(); t === l && (l = null), l === null && (c |= nt.APPEND_EAGERLY), s && (c |= nt.COMMENT, XN(y_)), r.push(c, i === null ? "" : i); let u = Zu(e, a, s ? 32 : 1, i === null ? "" : i, null); gy(n, u); let d = u.index; return We(u, !1), l !== null && t !== l && f_(l, d), u; }
function DA(e, t, n, o, r, i, s, a) { let c = a.match(ps), u = GE(t, n, o, s, r, c ? null : a, !1).index; c && hs(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function CA(e, t, n) { let r = M().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (hA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            hs(i, c, r, a, TA(i), yl[a.toLowerCase()] ? wr : null);
        }
    }
    e.data[t] = i;
} }
function hs(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ps), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | WE(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function TA(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function WE(e) { return 1 << Math.min(e, 31); }
function Nh(e) { let t, n = "", o = 0, r = !1, i; for (; (t = mA.exec(e)) !== null;)
    r ? t[0] === `${Yo}/*${i}${Yo}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function MA(e, t) { if (yy(t))
    return Nh(e); {
    let n = e.indexOf(`:${t}${Yo}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Yo}\\/\\*\\d+:${t}${Yo}`));
    return Nh(e.substring(n, o));
} }
function qE(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: br(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; SA(o, i, s), d_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let E = f[y];
        if (typeof E != "string") {
            let D = p.push(E) - 1;
            f[y] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = wA(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && bA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function NA(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(zE, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Yl(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Yl(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Yl(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            zE.test(c) ? o.push(NA(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function wA(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = am(Cs()).getInertBodyElement(a), h = El(p) || p; return h ? QE(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function QE(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = br(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, E = y.tagName.toLowerCase();
            if (gl.hasOwnProperty(E)) {
                zc(i, PE, E, l, h), t.data[h] = E;
                let xe = y.attributes;
                for (let Je = 0; Je < xe.length; Je++) {
                    let Ot = xe.item(Je), zr = Ot.name.toLowerCase();
                    !!Ot.value.match(ps) ? ml.hasOwnProperty(zr) && hs(a, Ot.value, h, Ot.name, 0, yl[zr] ? wr : null) : ml[zr] && (yl[zr] ? _h(i, h, Ot.name, "unsafe:blocked") : _h(i, h, Ot.name, Ot.value));
                }
                let Te = { kind: 1, index: h, children: [] };
                e.push(Te), f = QE(Te.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, wh(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", R = D.match(ps);
            zc(i, null, R ? "" : D, l, h), wh(s, h, d), R && (f = hs(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let J = gA.exec(p.textContent || "");
            if (J) {
                let xe = parseInt(J[1], 10), Te = u[xe];
                zc(i, LE, "", l, h), qE(e, t, o, r, l, Te, h), _A(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function wh(e, t, n) { n === 0 && e.push(t); }
function _A(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function SA(e, t, n) { e.push(WE(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function bA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function zc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, m_(0, o, r)); }
function _h(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var Sh = 0, AA = /\[(�.+?�?)\]/, RA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, kA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, OA = /{([A-Z0-9_]+)}/g, xA = /�I18N_EXP_(ICU(_\d+)?)�/g, PA = /\/\*/, LA = /\d+\:(\d+)/;
function FA(e, t = {}) { let n = e; if (AA.test(e)) {
    let o = {}, r = [Sh];
    n = n.replace(RA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let E = y.match(LA), D = E ? parseInt(E[1], 10) : Sh, R = PA.test(y); l.push([D, R, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(kA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(OA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(xA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function $d(e, t, n = -1) { let o = w(), r = g(), i = v + e, s = ue(o.consts, t), a = In(); if (o.firstCreatePass && IA(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[K];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[le] ? null : a, u = Um(o, l, r), d = a && a.type & 8 ? r[a.index] : null; __(r, i, a, n), dA(r, c.create, u, d), pc(!0); }
function zd() { pc(!1); }
function YE(e, t, n) { $d(e, t, n), zd(); }
function ZE(e, t) { let n = w(), o = ue(n.consts, t); CA(n, e + v, o); }
function Gd(e) { let t = g(); return cA(z(t, pe(), e)), Gd; }
function KE(e) { lA(w(), g(), e + v); }
function JE(e, t = {}) { return FA(e, t); }
function Wd(e, t, n) { let o = g(), r = w(), i = M(); return Yd(r, o, o[T], i, e, t, n), Wd; }
function qd(e, t) { let n = M(), o = g(), r = w(), i = gi(r.data), s = Xm(i, n, o); return Yd(r, o, s, n, e, t), qd; }
function Qd(e, t, n) { let o = g(), r = w(), i = M(); return (i.type & 3 || n) && od(i, r, o, n, o[T], e, t, St(i, o, t)), Qd; }
function Yd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= St(o, t, i), od(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= St(o, t, i), Bn(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= St(o, t, i), Bn(o, t, d, r, r, c);
} }
function XE(e = 1) { return vp(e); }
function HA(e, t) { let n = null, o = zN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? _m(e, i, !0) : qN(o, i))
        return r;
} return n; }
function eI(e) { let t = g()[K][le]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = To(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? HA(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function tI(e, t = 0, n, o, r, i) { let s = g(), a = w(), c = o ? e + 1 : null; c !== null && sn(s, a, c, o, r, i, null, n); let l = pn(a, v + e, 16, null, n || null); l.projection === null && (l.projection = t), cc(); let d = !s[re] || ko(); s[K][le].projection[l.projection] === null && c !== null ? VA(s, a, c) : d && !no(l) && Ew(a, s, l); }
function VA(e, t, n) { let o = v + n, r = t.data[o], i = e[o], s = sr(i, r.tView.ssrId), a = ao(e, r, void 0, { dehydratedView: s }); co(i, a, 0, nn(r, s)); }
function Zd(e, t, n, o) { return cv(e, t, n, o), Zd; }
function Kd(e, t, n) { return av(e, t, n), Kd; }
function nI(e) { let t = g(), n = w(), o = mi(); Oo(o + 1); let r = ad(n, o); if (e.dirty && rp(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = uv(t, o);
        e.reset(i, gg), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function oI() { return sd(g(), mi()); }
function Jd(e, t, n, o, r) { return dv(t, cv(e, n, o, r)), Jd; }
function Xd(e, t, n, o) { return dv(e, av(t, n, o)), Xd; }
function rI(e = 1) { Oo(mi() + e); }
function iI(e) { let t = lc(); return Dt(t, v + e); }
function Ai(e, t) { return e << 17 | t << 2; }
function an(e) { return e >> 17 & 32767; }
function jA(e) { return (e & 2) == 2; }
function BA(e, t) { return e & 131071 | t << 17; }
function Zl(e) { return e | 2; }
function Wn(e) { return (e & 131068) >> 2; }
function Gc(e, t) { return e & -131069 | t << 2; }
function UA(e) { return (e & 1) === 1; }
function Kl(e) { return e | 1; }
function $A(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = an(s), c = Wn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || ii(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = an(e[a + 1]);
        e[o + 1] = Ai(f, a), f !== 0 && (e[f + 1] = Gc(e[f + 1], o)), e[a + 1] = BA(e[a + 1], o);
    }
    else
        e[o + 1] = Ai(a, 0), a !== 0 && (e[a + 1] = Gc(e[a + 1], o)), a = o;
else
    e[o + 1] = Ai(c, 0), a === 0 ? a = o : e[c + 1] = Gc(e[c + 1], o), c = o; l && (e[o + 1] = Zl(e[o + 1])), bh(e, u, o, !0), bh(e, u, o, !1), zA(t, u, e, o, i), s = Ai(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function zA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && ii(i, t) >= 0 && (n[o + 1] = Kl(n[o + 1])); }
function bh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? an(r) : Wn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    GA(c, t) && (a = !0, e[s + 1] = o ? Kl(l) : Zl(l)), s = o ? an(l) : Wn(l);
} a && (e[n + 1] = o ? Zl(r) : Kl(r)); }
function GA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? ii(e, t) >= 0 : !1; }
var oe = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function sI(e) { return e.substring(oe.key, oe.keyEnd); }
function WA(e) { return e.substring(oe.value, oe.valueEnd); }
function qA(e) { return lI(e), aI(e, qn(e, 0, oe.textEnd)); }
function aI(e, t) { let n = oe.textEnd; return n === t ? -1 : (t = oe.keyEnd = YA(e, oe.key = t, n), qn(e, t, n)); }
function QA(e) { return lI(e), cI(e, qn(e, 0, oe.textEnd)); }
function cI(e, t) { let n = oe.textEnd, o = oe.key = qn(e, t, n); return n === o ? -1 : (o = oe.keyEnd = ZA(e, o, n), o = Ah(e, o, n, 58), o = oe.value = qn(e, o, n), o = oe.valueEnd = KA(e, o, n), Ah(e, o, n, 59)); }
function lI(e) { oe.key = 0, oe.keyEnd = 0, oe.value = 0, oe.valueEnd = 0, oe.textEnd = e.length; }
function qn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function YA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function ZA(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Ah(e, t, n, o) { return t = qn(e, t, n), t < n && t++, t; }
function KA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Rh(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Rh(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Rh(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function ef(e, t, n) { return fI(e, t, n, !1), ef; }
function tf(e, t) { return fI(e, t, null, !0), tf; }
function uI(e) { pI(mI, JA, e, !1); }
function JA(e, t) { for (let n = QA(t); n >= 0; n = cI(t, n))
    mI(e, sI(t), WA(t)); }
function dI(e) { pI(iR, XA, e, !0); }
function XA(e, t) { for (let n = qA(t); n >= 0; n = aI(t, n))
    Mo(e, sI(t), !0); }
function fI(e, t, n, o) { let r = g(), i = w(), s = Qe(2); if (i.firstUpdatePass && gI(i, e, s, o), t !== L && z(r, s, t)) {
    let a = i.data[se()];
    yI(i, a, r, r[T], e, r[s + 1] = aR(t, n), o, s);
} }
function pI(e, t, n, o) { let r = w(), i = Qe(2); r.firstUpdatePass && gI(r, null, i, o); let s = g(); if (n !== L && z(s, i, n)) {
    let a = r.data[se()];
    if (vI(a, o) && !hI(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Zr(c, n || "")), Ql(r, a, s, n, o);
    }
    else
        sR(r, a, s, s[T], s[i + 1], s[i + 1] = rR(e, t, n), o, i);
} }
function hI(e, t) { return t >= e.expandoStartIndex; }
function gI(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[se()], s = hI(e, n);
    vI(i, o) && t === null && !s && (t = !1), t = eR(r, i, t, o), $A(r, i, t, n, s, o);
} }
function eR(e, t, n, o) { let r = gi(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Wc(null, e, t, n, o), n = hr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Wc(r, e, t, n, o), i === null) {
            let c = tR(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Wc(null, e, t, c[1], o), c = hr(c, t.attrs, o), nR(e, t, o, c));
        }
        else
            i = oR(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function tR(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Wn(o) !== 0)
    return e[an(o)]; }
function nR(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[an(r)] = o; }
function oR(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = hr(o, s, n);
} return hr(o, t.attrs, n); }
function Wc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = hr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function hr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Mo(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function rR(e, t, n) { if (n == null || n === "")
    return F; let o = [], r = ut(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (r instanceof Set)
    for (let i of r)
        e(o, i, !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function mI(e, t, n) { Mo(e, t, ut(n)); }
function iR(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Mo(e, o, n); }
function sR(e, t, n, o, r, i, s, a) { r === L && (r = F); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && yI(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function yI(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = UA(l) ? kh(c, t, n, r, Wn(l), s) : void 0; if (!gs(u)) {
    gs(i) || jA(l) && (i = kh(c, null, n, r, a, s));
    let d = Vt(se(), n);
    Dw(o, s, d, r, i);
} }
function kh(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === L && (f = d ? F : void 0);
    let p = d ? ri(f, o) : u === o ? f : void 0;
    if (l && !gs(p) && (p = ri(c, o)), gs(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? an(h) : Wn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = ri(c, o));
} return a; }
function gs(e) { return e !== void 0; }
function aR(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Yr(ut(e)))), e; }
function vI(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function EI(e, t = "") { let n = g(), o = w(), r = e + v, i = o.firstCreatePass ? pn(o, r, 1, t, null) : o.data[r], s = II(o, n, i, t); n[r] = s, xo() && $u(o, n, s, i), We(i, !1); }
var II = (e, t, n, o) => (He(!0), Mu(t[T], o));
function cR(e, t, n, o) { let r = !ks(t, n); if (He(r), r)
    return Mu(t[T], o); let i = t[re]; return kr(i, e, t, n); }
function DI() { II = cR; }
function CI(e, t) { let n = !1, o = qe(); for (let i = 1; i < t.length; i += 2)
    n = z(e, o++, t[i]) || n; if (fc(o), !n)
    return L; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += N(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function TI(e, t, n, o = "") { return z(e, pe(), n) ? t + N(n) + o : L; }
function MI(e, t, n, o, r, i = "") { let s = qe(), a = on(e, s, n, r); return Qe(2), a ? t + N(n) + o + N(r) + i : L; }
function NI(e, t, n, o, r, i, s, a = "") { let c = qe(), l = ia(e, c, n, r, s); return Qe(3), l ? t + N(n) + o + N(r) + i + N(s) + a : L; }
function wI(e, t, n, o, r, i, s, a, c, l = "") { let u = qe(), d = ke(e, u, n, r, s, c); return Qe(4), d ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l : L; }
function _I(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = qe(), p = ke(e, f, n, r, s, c); return p = z(e, f + 4, u) || p, Qe(5), p ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d : L; }
function SI(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = qe(), y = ke(e, h, n, r, s, c); return y = on(e, h + 4, u, f) || y, Qe(6), y ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p : L; }
function bI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let E = qe(), D = ke(e, E, n, r, s, c); return D = ia(e, E + 4, u, f, h) || D, Qe(7), D ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + y : L; }
function AI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E, D = "") { let R = qe(), J = ke(e, R, n, r, s, c); return J = ke(e, R + 4, u, f, h, E) || J, Qe(8), J ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + y + N(E) + D : L; }
function nf(e) { return va("", e), nf; }
function va(e, t, n) { let o = g(), r = TI(o, e, t, n); return r !== L && pt(o, se(), r), va; }
function of(e, t, n, o, r) { let i = g(), s = MI(i, e, t, n, o, r); return s !== L && pt(i, se(), s), of; }
function rf(e, t, n, o, r, i, s) { let a = g(), c = NI(a, e, t, n, o, r, i, s); return c !== L && pt(a, se(), c), rf; }
function sf(e, t, n, o, r, i, s, a, c) { let l = g(), u = wI(l, e, t, n, o, r, i, s, a, c); return u !== L && pt(l, se(), u), sf; }
function af(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = _I(d, e, t, n, o, r, i, s, a, c, l, u); return f !== L && pt(d, se(), f), af; }
function cf(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = SI(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== L && pt(p, se(), h), cf; }
function lf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), E = bI(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return E !== L && pt(y, se(), E), lf; }
function uf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E) { let D = g(), R = AI(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); return R !== L && pt(D, se(), R), uf; }
function df(e) { let t = g(), n = CI(t, e); return n !== L && pt(t, se(), n), df; }
function pt(e, t, n) { let o = Vt(t, e); pm(e[T], o, n); }
function ff(e, t, n) { Td(t) && (t = t()); let o = g(), r = pe(); if (z(o, r, t)) {
    let i = w(), s = De();
    Gu(s, o, e, t, o[T], n);
} return ff; }
function RI(e, t) { let n = Td(e); return n && e.set(t), n; }
function pf(e, t) { let n = g(), o = w(), r = M(); return Yd(o, n, n[T], r, e, t), pf; }
var kI = {};
function hf(e) { Q("NgLet"); let t = w(), n = g(), o = e + v, r = pn(t, o, 128, null, null); return We(r, !1), Ao(t, n, o, kI), hf; }
function OI(e) { let t = w(), n = g(), o = se(); return Ao(t, n, o, e), e; }
function xI(e) { let t = lc(), n = Dt(t, v + e); if (n === kI)
    throw new _(314, !1); return n; }
function PI(e, t) { let n = w(), o = g(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = jt(n, s + v), d = Vt(s + v, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function LI(e) { return z(g(), pe(), e) ? N(e) : L; }
function FI(e, t, n = "") { return TI(g(), e, t, n); }
function HI(e, t, n, o, r = "") { return MI(g(), e, t, n, o, r); }
function VI(e, t, n, o, r, i, s = "") { return NI(g(), e, t, n, o, r, i, s); }
function jI(e, t, n, o, r, i, s, a, c = "") { return wI(g(), e, t, n, o, r, i, s, a, c); }
function BI(e, t, n, o, r, i, s, a, c, l, u = "") { return _I(g(), e, t, n, o, r, i, s, a, c, l, u); }
function UI(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return SI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function $I(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return bI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function zI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E = "") { return AI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); }
function GI(e) { return CI(g(), e); }
function WI(e, t, n) { let o = de() + e, r = g(); return r[o] === L ? je(r, o, t(n, r)) : fo(r, o); }
function Oh(e, t, n) { let o = w(); o.firstCreatePass && qI(t, o.data, o.blueprint, be(e), n); }
function qI(e, t, n, o, r) { if (e = G(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        qI(e[i], t, n, o, r);
else {
    let i = w(), s = g(), a = M(), c = si(e) ? e : G(e.provide), l = Jf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (si(e) || !e.multi) {
        let p = new Jt(l, r, uo, null), h = Qc(c, t, r ? u : u + f, d);
        h === -1 ? (el(qi(a, s), i, c), qc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Qc(c, t, u + f, d), h = Qc(c, t, u, u + f), y = p >= 0 && n[p], E = h >= 0 && n[h];
        if (r && !E || !r && !y) {
            el(qi(a, s), i, c);
            let D = dR(r ? uR : lR, n.length, r, o, l, e);
            !r && E && (n[h].providerFactory = D), qc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = QI(n[r ? h : p], l, !r && o);
            qc(i, e, p > -1 ? p : h, D);
        }
        !r && o && E && n[h].componentProviders++;
    }
} }
function qc(e, t, n, o) { let r = si(t), i = Zf(t); if (r || i) {
    let c = (i ? G(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function QI(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Qc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function lR(e, t, n, o, r) { return Jl(this.multi, []); }
function uR(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Ko(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), Jl(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], Jl(i, s); return s; }
function Jl(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function dR(e, t, n, o, r, i) { let s = new Jt(e, n, uo, null); return s.multi = [], s.index = t, s.componentProviders = 0, QI(s, r, o && !n), s; }
function YI(e, t) { return n => { n.providersResolver = (o, r) => Oh(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => Oh(o, r ? r(t) : t, !0)); }; }
function ZI(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function KI(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = ls(t, Iv), o.pipeDefs = ls(n, Be); }
function JI(e, t) { return Ze(() => { let n = ti(e); n.declarations = Ri(t.declarations || F), n.imports = Ri(t.imports || F), n.exports = Ri(t.exports || F), t.bootstrap && (n.bootstrap = Ri(t.bootstrap)), jn.registerNgModule(e, t); }); }
function Ri(e) { if (typeof e == "function")
    return e; let t = Le(e); return t.some(Kr) ? () => t.map(G).map(xh) : t.map(xh); }
function xh(e) { return ed(e) ? e.ngModule : e; }
function XI(e, t) { let n = de() + e, o = g(); return o[n] === L ? je(o, n, t()) : fo(o, n); }
function eD(e, t, n) { return lD(g(), de(), e, t, n); }
function tD(e, t, n, o) { return uD(g(), de(), e, t, n, o); }
function nD(e, t, n, o, r) { return dD(g(), de(), e, t, n, o, r); }
function oD(e, t, n, o, r, i, s) { return fD(g(), de(), e, t, n, o, r, i); }
function rD(e, t, n, o, r, i, s) { let a = de() + e, c = g(), l = ke(c, a, n, o, r, i); return z(c, a + 4, s) || l ? je(c, a + 5, t(n, o, r, i, s)) : fo(c, a + 5); }
function iD(e, t, n, o, r, i, s, a) { let c = de() + e, l = g(), u = ke(l, c, n, o, r, i); return on(l, c + 4, s, a) || u ? je(l, c + 6, t(n, o, r, i, s, a)) : fo(l, c + 6); }
function sD(e, t, n, o, r, i, s, a, c) { let l = de() + e, u = g(), d = ke(u, l, n, o, r, i); return ia(u, l + 4, s, a, c) || d ? je(u, l + 7, t(n, o, r, i, s, a, c)) : fo(u, l + 7); }
function aD(e, t, n, o, r, i, s, a, c, l) { let u = de() + e, d = g(), f = ke(d, u, n, o, r, i); return ke(d, u + 4, s, a, c, l) || f ? je(d, u + 8, t(n, o, r, i, s, a, c, l)) : fo(d, u + 8); }
function cD(e, t, n) { return pD(g(), de(), e, t, n); }
function jr(e, t) { let n = e[t]; return n === L ? void 0 : n; }
function lD(e, t, n, o, r, i) { let s = t + n; return z(e, s, r) ? je(e, s + 1, i ? o.call(i, r) : o(r)) : jr(e, s + 1); }
function uD(e, t, n, o, r, i, s) { let a = t + n; return on(e, a, r, i) ? je(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : jr(e, a + 2); }
function dD(e, t, n, o, r, i, s, a) { let c = t + n; return ia(e, c, r, i, s) ? je(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : jr(e, c + 3); }
function fD(e, t, n, o, r, i, s, a, c) { let l = t + n; return ke(e, l, r, i, s, a) ? je(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : jr(e, l + 4); }
function pD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    z(e, s++, r[c]) && (a = !0); return a ? je(e, s, o.apply(i, r)) : jr(e, s); }
function hD(e, t) { let n = w(), o, r = e + v; n.firstCreatePass ? (o = fR(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = oi(o.type, !0)), s, a = Pt(uo); try {
    let c = Wi(!1), l = i();
    return Wi(c), Ao(n, g(), r, l), l;
}
finally {
    Pt(a);
} }
function fR(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function gD(e, t, n) { let o = e + v, r = g(), i = Dt(r, o); return Br(r, o) ? lD(r, de(), t, i.transform, n, i) : i.transform(n); }
function mD(e, t, n, o) { let r = e + v, i = g(), s = Dt(i, r); return Br(i, r) ? uD(i, de(), t, s.transform, n, o, s) : s.transform(n, o); }
function yD(e, t, n, o, r) { let i = e + v, s = g(), a = Dt(s, i); return Br(s, i) ? dD(s, de(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function vD(e, t, n, o, r, i) { let s = e + v, a = g(), c = Dt(a, s); return Br(a, s) ? fD(a, de(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function ED(e, t, n) { let o = e + v, r = g(), i = Dt(r, o); return Br(r, o) ? pD(r, de(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Br(e, t) { return e[m].data[t].pure; }
function ID(e, t) { return Ks(e, t); }
function DD(e, t) { return () => { try {
    return jn.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function CD(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function TD(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function MD(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = pR(s, W(e)); if (e[gn] = a, c.tView) {
    let l = sM().values();
    for (let u of l)
        Ge(u) && u[q] === null && Bi(r, i, a, c, u);
} }
function pR(e, t) { let n = Z({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Bi(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    gR(e, t, n, o, r);
    return;
} for (let s = v; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (X(a)) {
        ne(a[j]) && Bi(e, t, n, o, a[j]);
        for (let c = V; c < a.length; c++)
            Bi(e, t, n, o, a[c]);
    }
    else
        ne(a) && Bi(e, t, n, o, a);
} }
function hR(e, t) { e.componentReplaced?.(t.id); }
function gR(e, t, n, o, r) { let i = r[H], s = r[j], a = r[q], c = r[le], l = r[k].get(U, null), u = () => { if (o.encapsulation === Re.ShadowDom || o.encapsulation === Re.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = Sm(n), f = xs(a, d, i, Ru(n), s, c, null, null, null, null, null); mR(a, r, f, c.index), Ar(r[m], r), ir(r); let p = r[Ue].rendererFactory; hR(p, o), f[T] = p.createRenderer(s, n), jm(r[m], r), yR(c), Ys(d, f, i), iy(d, f, d.template, i); }; l === null ? Ph(e, t, u) : l.run(() => Ph(e, t, u)); }
function Ph(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function mR(e, t, n, o) { for (let r = v; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((ne(i) || X(i)) && i[ce] === t) {
        i[ce] = n;
        break;
    }
} e[vt] === t && (e[vt] = n), e[No] === t && (e[No] = n), n[ce] = t[ce], t[ce] = null, e[o] = n; }
function yR(e) { if (e.projection !== null) {
    for (let t of e.projection)
        ys(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var he = { \u0275\u0275animateEnter: zo, \u0275\u0275animateEnterListener: Go, \u0275\u0275animateLeave: Wo, \u0275\u0275animateLeaveListener: us, \u0275\u0275attribute: Rd, \u0275\u0275defineComponent: Ev, \u0275\u0275defineDirective: Dv, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Io, \u0275\u0275defineNgModule: gd, \u0275\u0275definePipe: Cv, \u0275\u0275directiveInject: uo, \u0275\u0275getInheritedFactory: dg, \u0275\u0275inject: Pe, \u0275\u0275injectAttribute: vs, \u0275\u0275invalidFactory: Vy, \u0275\u0275invalidFactoryDep: ni, \u0275\u0275templateRefExtractor: ID, \u0275\u0275resetView: sc, \u0275\u0275HostDirectivesFeature: wv, \u0275\u0275NgOnChangesFeature: Yh, \u0275\u0275ControlFeature: Nv, \u0275\u0275ProvidersFeature: YI, \u0275\u0275InheritDefinitionFeature: md, \u0275\u0275ExternalStylesFeature: ZI, \u0275\u0275nextContext: XE, \u0275\u0275namespaceHTML: Ec, \u0275\u0275namespaceMathML: vc, \u0275\u0275namespaceSVG: yc, \u0275\u0275enableBindings: nc, \u0275\u0275disableBindings: oc, \u0275\u0275elementStart: fr, \u0275\u0275elementEnd: pa, \u0275\u0275element: Od, \u0275\u0275elementContainerStart: ma, \u0275\u0275elementContainerEnd: Hr, \u0275\u0275domElement: xd, \u0275\u0275domElementStart: ha, \u0275\u0275domElementEnd: ga, \u0275\u0275domElementContainer: Hd, \u0275\u0275domElementContainerStart: ya, \u0275\u0275domElementContainerEnd: Fd, \u0275\u0275domTemplate: vd, \u0275\u0275domListener: Qd, \u0275\u0275elementContainer: Ld, \u0275\u0275pureFunction0: XI, \u0275\u0275pureFunction1: eD, \u0275\u0275pureFunction2: tD, \u0275\u0275pureFunction3: nD, \u0275\u0275pureFunction4: oD, \u0275\u0275pureFunction5: rD, \u0275\u0275pureFunction6: iD, \u0275\u0275pureFunction7: sD, \u0275\u0275pureFunction8: aD, \u0275\u0275pureFunctionV: cD, \u0275\u0275getCurrentView: OE, \u0275\u0275restoreView: ic, \u0275\u0275listener: Wd, \u0275\u0275projection: tI, \u0275\u0275syntheticHostProperty: Bd, \u0275\u0275syntheticHostListener: qd, \u0275\u0275pipeBind1: gD, \u0275\u0275pipeBind2: mD, \u0275\u0275pipeBind3: yD, \u0275\u0275pipeBind4: vD, \u0275\u0275pipeBindV: ED, \u0275\u0275projectionDef: eI, \u0275\u0275domProperty: jd, \u0275\u0275ariaProperty: Ad, \u0275\u0275property: kd, \u0275\u0275control: Qy, \u0275\u0275controlCreate: Wy, \u0275\u0275pipe: hD, \u0275\u0275queryRefresh: nI, \u0275\u0275queryAdvance: rI, \u0275\u0275viewQuery: Kd, \u0275\u0275viewQuerySignal: Xd, \u0275\u0275loadQuery: oI, \u0275\u0275contentQuery: Zd, \u0275\u0275contentQuerySignal: Jd, \u0275\u0275reference: iI, \u0275\u0275classMap: dI, \u0275\u0275styleMap: uI, \u0275\u0275styleProp: ef, \u0275\u0275classProp: tf, \u0275\u0275advance: bm, \u0275\u0275template: yd, \u0275\u0275conditional: wE, \u0275\u0275conditionalCreate: NE, \u0275\u0275conditionalBranchCreate: fa, \u0275\u0275defer: tE, \u0275\u0275deferWhen: nE, \u0275\u0275deferOnIdle: sE, \u0275\u0275deferOnImmediate: lE, \u0275\u0275deferOnTimer: fE, \u0275\u0275deferOnHover: gE, \u0275\u0275deferOnInteraction: vE, \u0275\u0275deferOnViewport: DE, \u0275\u0275deferPrefetchWhen: oE, \u0275\u0275deferPrefetchOnIdle: aE, \u0275\u0275deferPrefetchOnImmediate: uE, \u0275\u0275deferPrefetchOnTimer: pE, \u0275\u0275deferPrefetchOnHover: mE, \u0275\u0275deferPrefetchOnInteraction: EE, \u0275\u0275deferPrefetchOnViewport: CE, \u0275\u0275deferHydrateWhen: rE, \u0275\u0275deferHydrateNever: iE, \u0275\u0275deferHydrateOnIdle: cE, \u0275\u0275deferHydrateOnImmediate: dE, \u0275\u0275deferHydrateOnTimer: hE, \u0275\u0275deferHydrateOnHover: yE, \u0275\u0275deferHydrateOnInteraction: IE, \u0275\u0275deferHydrateOnViewport: TE, \u0275\u0275deferEnableTimerScheduling: Bv, \u0275\u0275repeater: AE, \u0275\u0275repeaterCreate: bE, \u0275\u0275repeaterTrackByIndex: _E, \u0275\u0275repeaterTrackByIdentity: SE, \u0275\u0275componentInstance: ME, \u0275\u0275text: EI, \u0275\u0275textInterpolate: nf, \u0275\u0275textInterpolate1: va, \u0275\u0275textInterpolate2: of, \u0275\u0275textInterpolate3: rf, \u0275\u0275textInterpolate4: sf, \u0275\u0275textInterpolate5: af, \u0275\u0275textInterpolate6: cf, \u0275\u0275textInterpolate7: lf, \u0275\u0275textInterpolate8: uf, \u0275\u0275textInterpolateV: df, \u0275\u0275i18n: YE, \u0275\u0275i18nAttributes: ZE, \u0275\u0275i18nExp: Gd, \u0275\u0275i18nStart: $d, \u0275\u0275i18nEnd: zd, \u0275\u0275i18nApply: KE, \u0275\u0275i18nPostprocess: JE, \u0275\u0275resolveWindow: Mm, \u0275\u0275resolveDocument: Nm, \u0275\u0275resolveBody: Su, \u0275\u0275setComponentScope: KI, \u0275\u0275setNgModuleScope: JI, \u0275\u0275registerNgModuleType: fd, \u0275\u0275getComponentDepsFactory: DD, \u0275setClassDebugInfo: CD, \u0275\u0275declareLet: hf, \u0275\u0275storeLet: OI, \u0275\u0275arrowFunction: WI, \u0275\u0275readContextLet: xI, \u0275\u0275attachSourceLocations: PI, \u0275\u0275interpolate: LI, \u0275\u0275interpolate1: FI, \u0275\u0275interpolate2: HI, \u0275\u0275interpolate3: VI, \u0275\u0275interpolate4: jI, \u0275\u0275interpolate5: BI, \u0275\u0275interpolate6: UI, \u0275\u0275interpolate7: $I, \u0275\u0275interpolate8: zI, \u0275\u0275interpolateV: GI, \u0275\u0275sanitizeHtml: ym, \u0275\u0275sanitizeStyle: vm, \u0275\u0275sanitizeResourceUrl: _u, \u0275\u0275sanitizeScript: Em, \u0275\u0275validateAttribute: Tm, \u0275\u0275sanitizeUrl: wu, \u0275\u0275sanitizeUrlOrResourceUrl: Cm, \u0275\u0275trustConstantHtml: Im, \u0275\u0275trustConstantResourceUrl: Dm, forwardRef: Va, resolveForwardRef: G, \u0275\u0275twoWayProperty: ff, \u0275\u0275twoWayBindingSet: RI, \u0275\u0275twoWayListener: pf, \u0275\u0275replaceMetadata: MD, \u0275\u0275getReplaceMetadataURL: TD }, An = null;
function ND(e) { An !== null && (e.defaultEncapsulation !== An.defaultEncapsulation || e.preserveWhitespaces !== An.preserveWhitespaces) || (An = e); }
function vR() { return An; }
function ER() { An = null; }
var Zo = [];
function IR(e, t) { Zo.push({ moduleType: e, ngModule: t }); }
var Yc = !1;
function wD() { if (!Yc) {
    Yc = !0;
    try {
        for (let e = Zo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Zo[e];
            n.declarations && n.declarations.every(_D) && (Zo.splice(e, 1), NR(t, n));
        }
    }
    finally {
        Yc = !1;
    }
} }
function _D(e) { return Array.isArray(e) ? e.every(_D) : !!G(e); }
function SD(e, t = {}) { bD(e, t), t.id !== void 0 && fd(e, t.id), IR(e, t); }
function bD(e, t, n = !1) { let o = Le(t.declarations || F), r = null; Object.defineProperty(e, Ba, { configurable: !0, get: () => (r === null && (r = te({ usage: 0, kind: "NgModule", type: e }).compileNgModule(he, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Le(t.bootstrap || F).map(G), declarations: o.map(G), imports: Le(t.imports || F).map(G).map(Lh), exports: Le(t.exports || F).map(G).map(Lh), schemas: t.schemas ? Le(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, gt, { get: () => { if (i === null) {
        let a = te({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(he, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: Es(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, ja, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || F, imports: [(t.imports || F).map(G), (t.exports || F).map(G)] };
        s = te({ usage: 0, kind: "NgModule", type: e }).compileInjector(he, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function DR(e, t) { let n = `Unexpected "${Ne(e)}" found in the "declarations" array of the`, o = `"${Ne(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var CR = new WeakMap, TR = new WeakMap;
function MR() { CR = new WeakMap, TR = new WeakMap, Zo.length = 0, $S.clear(); }
function NR(e, t) { let n = Le(t.declarations || F), o = mf(e); n.forEach(r => { if (r = G(r), r.hasOwnProperty(gn)) {
    let s = W(r);
    gf(s, o);
}
else
    !r.hasOwnProperty(Xr) && !r.hasOwnProperty(ei) && (r.ngSelectorScope = e); }); }
function gf(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(gn) ? W(n) : Me(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Be(n)), e.schemas = t.schemas, e.tView = null; }
function mf(e) { if (qt(e)) {
    let t = jn.getNgModuleScope(e), n = ti(e);
    return Z({ schemas: n.schemas || null }, t);
}
else if (Do(e)) {
    if ((W(e) || Me(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Be(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Lh(e) { return ed(e) ? e.ngModule : e; }
var Zc = 0;
function AD(e, t) {
    let n = null;
    kS(e, t), kD(e, t), Object.defineProperty(e, gn, { get: () => {
            if (n === null) {
                let o = te({ usage: 0, kind: "component", type: e });
                if (pv(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = vR(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Re.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = OD(e, t), l = Xe(Z({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || F, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Zc++;
                try {
                    if (l.usesInheritance && xD(e), n = o.compileComponent(he, a, l), l.isStandalone) {
                        let u = Le(t.imports || F), { directiveDefs: d, pipeDefs: f } = wR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(G);
                    }
                }
                finally {
                    Zc--;
                }
                if (Zc === 0 && wD(), _R(e)) {
                    let u = mf(e.ngSelectorScope);
                    gf(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ne(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function wR(e, t) { return { directiveDefs: () => Uo(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Me(i)).filter(i => i !== null) : [], pipeDefs: () => Uo(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Be(i)).filter(i => i !== null) : [] }; }
function _R(e) { return e.ngSelectorScope !== void 0; }
function yf(e, t) { let n = null; kD(e, t || {}), Object.defineProperty(e, Xr, { get: () => { if (n === null) {
        let o = RD(e, t || {});
        n = te({ usage: 0, kind: "directive", type: e }).compileDirective(he, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function RD(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = te({ usage: 0, kind: "directive", type: e }), i = OD(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && xD(e), { metadata: i, sourceMapUrl: o }; }
function kD(e, t) { let n = null; Object.defineProperty(e, gt, { get: () => { if (n === null) {
        let o = RD(e, t), r = te({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(he, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: Es(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function SR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function OD(e, t) { let n = ou(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || we, propMetadata: o, inputs: t.inputs || F, outputs: t.outputs || F, queries: Fh(e, o, PD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !SR(e), exportAs: RR(t.exportAs), providers: t.providers || null, viewQueries: Fh(e, o, LD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function xD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Me(n) && !W(n) && OR(n) && yf(n, null), n = Object.getPrototypeOf(n); }
function bR(e) { return typeof e == "string" ? HD(e) : G(e); }
function AR(e, t) { return { propertyName: e, predicate: bR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Fh(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Ne(e)}" since the query selector wasn't defined.`);
            if (i.some(FD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(AR(r, s));
        } });
    } return o; }
function RR(e) { return e === void 0 ? null : HD(e); }
function PD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function LD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function FD(e) { return e.ngMetadataName === "Input"; }
function HD(e) { return e.split(",").map(t => t.trim()); }
var kR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function OR(e) { let t = ou(); if (kR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (FD(s) || PD(s) || LD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function VD(e, t) { let n = null, o = null; Object.defineProperty(e, gt, { get: () => { if (o === null) {
        let r = Hh(e, t), i = te({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(he, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: Es(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, ei, { get: () => { if (n === null) {
        let r = Hh(e, t);
        n = te({ usage: 0, kind: "pipe", type: r.type }).compilePipe(he, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Hh(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var jD = yr("Directive", (e = {}) => e, void 0, void 0, (e, t) => yf(e, t)), xR = yr("Component", (e = {}) => Z({ changeDetection: Is.Eager }, e), jD, void 0, (e, t) => AD(e, t)), PR = yr("Pipe", e => Z({ pure: !0 }, e), void 0, void 0, (e, t) => VD(e, t)), LR = at("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), FR = at("Output", e => ({ alias: e })), HR = at("HostBinding", e => ({ hostPropertyName: e })), VR = at("HostListener", (e, t) => ({ eventName: e, args: t })), jR = yr("NgModule", e => e, void 0, void 0, (e, t) => SD(e, t)), ms = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, BR = (() => { class e {
    compileModuleSync(n) { return new zn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = mn(n), i = Sn(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new At(c)), s; }, []); return new ms(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), BD = new S(""), Xl = class {
};
var UD = (() => { class e {
    applicationErrorHandler = I(zt);
    appRef = I(Oe);
    taskService = I($t);
    ngZone = I(U);
    zonelessEnabled = I(Dn);
    tracing = I(fn, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new CT;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Dc) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (I(Ii, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? Tp : Cp; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Dc + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function UR() { return Q("NgZoneless"), tt([...Ea(), []]); }
function Ea() { return [{ provide: Tt, useExisting: UD }, { provide: U, useClass: Cc }, { provide: Dn, useValue: !0 }]; }
function $R() { return typeof $localize < "u" && $localize.locale || Vr; }
var vf = new S("", { factory: () => I(vf, { optional: !0, skipSelf: !0 }) || $R() }), zR = new S("", { factory: () => sA }), GR = new S(""), WR = new S(""), $D = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })($D || {}), eu = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function qR(e) { return e.map(t => t.nativeElement); }
var gr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new cn(t) : null; }
    get injector() { return mM(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Fp(t) || gM(t)); }
    get context() { return Fp(this.nativeNode) || hM(this.nativeNode); }
    get listeners() { return DM(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return EM(this.nativeNode); }
    get providerTokens() { return yM(this.nativeNode); }
}, cn = class extends gr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ve(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ve(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return QR(this.nativeElement, i), ZR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ve(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(mr(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(mr(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Vh(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Vh(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function QR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                YR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function YR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Vh(e, t, n, o) { let r = ve(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    Qt(s, i, t, n, o, e.nativeNode);
}
else
    Ef(e.nativeNode, t, n, o); }
function Qt(e, t, n, o, r, i) { let s = op(e, t); if (e.type & 11) {
    if (Kc(s, n, o, r, i), ge(e)) {
        let c = fe(e.index, t);
        c && c[m].firstChild && Qt(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && Qt(e.child, t, n, o, r, i), s && Ef(s, n, o, r);
    let a = t[e.index];
    X(a) && jh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    Kc(a[Fe], n, o, r, i), jh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[K], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            Kc(u, n, o, r, i);
    else if (l) {
        let u = a[q], d = u[m].data[l.index];
        Qt(d, u, n, o, r, i);
    }
}
else
    e.child && Qt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Qt(a, t, n, o, r, i);
} }
function jh(e, t, n, o, r) { for (let i = V; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && Qt(a, s, t, n, o, r);
} }
function Kc(e, t, n, o, r) { if (r !== e) {
    let i = mr(e);
    if (!i)
        return;
    (o && i instanceof cn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Ef(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = mr(a);
    c && ((o && c instanceof cn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Ef(a, t, n, o));
} }
function ZR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(HN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += N(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Jc = "__ng_debug__";
function mr(e) { return e instanceof Node ? (e.hasOwnProperty(Jc) || (e[Jc] = e.nodeType == Node.ELEMENT_NODE ? new cn(e) : new gr(e)), e[Jc]) : null; }
import { Subscription as Rk } from "rxjs";
var Mf = { JSACTION: "__jsaction", OWNER: "__owner" }, qD = {};
function KR(e) { return e[Mf.JSACTION]; }
function zD(e, t) { e[Mf.JSACTION] = t; }
function JR(e) { return qD[e]; }
function XR(e, t) { qD[e] = t; }
var C = { CLICK: "click", CLICKMOD: "clickmod", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", ERROR: "error", LOAD: "load", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", TOGGLE: "toggle" }, ek = [C.MOUSEENTER, C.MOUSELEAVE, "pointerenter", "pointerleave"], tk = [C.CLICK, C.DBLCLICK, C.FOCUSIN, C.FOCUSOUT, C.KEYDOWN, C.KEYUP, C.KEYPRESS, C.MOUSEOVER, C.MOUSEOUT, C.SUBMIT, C.TOUCHSTART, C.TOUCHEND, C.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], QD = [C.FOCUS, C.BLUR, C.ERROR, C.LOAD, C.TOGGLE], Na = e => QD.indexOf(e) >= 0, nk = tk.concat(QD), YD = e => nk.indexOf(e) >= 0;
function ok(e) { return e === C.MOUSEENTER ? C.MOUSEOVER : e === C.MOUSELEAVE ? C.MOUSEOUT : e === C.POINTERENTER ? C.POINTEROVER : e === C.POINTERLEAVE ? C.POINTEROUT : e; }
function rk(e, t, n, o) { let r = !1; Na(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function ik(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function sk(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var GD = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function ak(e) { return e.which === 2 || e.which == null && e.button === 4; }
function ck(e) { return GD && e.metaKey || !GD && e.ctrlKey || ak(e) || e.shiftKey; }
function lk(e, t, n) { let o = e.relatedTarget; return (e.type === C.MOUSEOVER && t === C.MOUSEENTER || e.type === C.MOUSEOUT && t === C.MOUSELEAVE || e.type === C.POINTEROVER && t === C.POINTERENTER || e.type === C.POINTEROUT && t === C.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function uk(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === C.MOUSEOVER ? n.type = C.MOUSEENTER : e.type === C.MOUSEOUT ? n.type = C.MOUSELEAVE : e.type === C.POINTEROVER ? n.type = C.POINTERENTER : n.type = C.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var dk = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), Ta = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { dk && (this.element.style.cursor = "pointer"), this.handlerInfos.push(rk(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        ik(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, fk = { EVENT_ACTION_SEPARATOR: ":" };
function kt(e) { return e.eventType; }
function Nf(e, t) { e.eventType = t; }
function Da(e) { return e.event; }
function ZD(e, t) { e.event = t; }
function KD(e) { return e.targetElement; }
function JD(e, t) { e.targetElement = t; }
function XD(e) { return e.eic; }
function pk(e, t) { e.eic = t; }
function hk(e) { return e.timeStamp; }
function gk(e, t) { e.timeStamp = t; }
function Ca(e) { return e.eia; }
function eC(e, t, n) { e.eia = [t, n]; }
function If(e) { e.eia = void 0; }
function Ia(e) { return e[1]; }
function mk(e) { return e.eirp; }
function tC(e, t) { e.eirp = t; }
function nC(e) { return e.eir; }
function oC(e, t) { e.eir = t; }
function rC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function yk(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Df = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return kt(this.eventInfo); }
    setEventType(t) { Nf(this.eventInfo, t); }
    getEvent() { return Da(this.eventInfo); }
    setEvent(t) { ZD(this.eventInfo, t); }
    getTargetElement() { return KD(this.eventInfo); }
    setTargetElement(t) { JD(this.eventInfo, t); }
    getContainer() { return XD(this.eventInfo); }
    setContainer(t) { pk(this.eventInfo, t); }
    getTimestamp() { return hk(this.eventInfo); }
    setTimestamp(t) { gk(this.eventInfo, t); }
    getAction() { let t = Ca(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        If(this.eventInfo);
        return;
    } eC(this.eventInfo, t.name, t.element); }
    getIsReplay() { return mk(this.eventInfo); }
    setIsReplay(t) { tC(this.eventInfo, t); }
    getResolved() { return nC(this.eventInfo); }
    setResolved(t) { oC(this.eventInfo, t); }
    clone() { return new e(rC(this.eventInfo)); }
}, vk = {}, Ek = /\s*;\s*/, Ik = C.CLICK, Cf = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && kt(t) === C.CLICK && ck(Da(t)) ? Nf(t, C.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { nC(t) || (this.populateAction(t, KD(t)), oC(t, !0)); }
    resolveParentAction(t) { let n = Ca(t), o = n && Ia(n); If(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== XD(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Ca(t));)
        o = this.getParentNode(o); let r = Ca(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (kt(t) === C.MOUSEENTER || kt(t) === C.MOUSELEAVE || kt(t) === C.POINTERENTER || kt(t) === C.POINTERLEAVE)))
        if (lk(Da(t), kt(t), Ia(r))) {
            let i = uk(Da(t), Ia(r));
            ZD(t, i), JD(t, Ia(r));
        }
        else
            If(t); }
    getParentNode(t) { let n = t[Mf.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[kt(n)]; r !== void 0 && eC(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = KR(t); if (!n) {
        let o = t.getAttribute(Cn.JSACTION);
        if (!o)
            n = vk, zD(t, n);
        else {
            if (n = JR(o), !n) {
                n = {};
                let r = o.split(Ek);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(fk.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Ik, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                XR(o, n);
            }
            zD(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, iC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(iC || {}), Tf = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Df(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && Dk(o.element, n) && sk(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Dk(e, t) { return e.tagName === "A" && (t.getEventType() === C.CLICK || t.getEventType() === C.CLICKMOD); }
var sC = Symbol.for("propagationStopped"), wf = { REPLAY: 101 };
var Ck = "`preventDefault` called during event replay.";
var Tk = "`composedPath` called during event replay.", Ma = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Cf({ clickModSupport: n }), this.dispatcher = new Tf(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && wk(t), Mk(t); t.getAction();) {
        if (_k(t), Na(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), Nk(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function Mk(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[sC] = !0, n(); }; hn(t, "stopPropagation", o), hn(t, "stopImmediatePropagation", o); }
function Nk(e) { return !!e.getEvent()[sC]; }
function wk(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); hn(t, "target", n), hn(t, "eventPhase", wf.REPLAY), hn(t, "preventDefault", () => { throw o(), new Error(Ck + ""); }), hn(t, "composedPath", () => { throw new Error(Tk + ""); }); }
function _k(e) { let t = e.getEvent(), n = e.getAction()?.element; n && hn(t, "currentTarget", n, { configurable: !0 }); }
function hn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function aC(e, t) { e.ecrd(n => { t.dispatch(n); }, iC.I_AM_THE_JSACTION_FRAMEWORK); }
function Sk(e) { return e?.q ?? []; }
function bk(e) { e && (WD(e.c, e.et, e.h), WD(e.c, e.etc, e.h, !0)); }
function WD(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var Ak = !1, cC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = Ak;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = yk(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        tC(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && ek.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = ok(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), bk(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = rC(r);
            Nf(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function lC(e, t = window) { return Sk(t._ejsas?.[e]); }
function _f(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "rxjs/operators";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var ka = Symbol("InputSignalNode#UNSET"), AC = Xe(Z({}, Fa), { transformFn: void 0, applyValueToInputSignal(e, t) { La(e, t); } }), mP = Symbol();
function RC(e, t) { let n = Object.create(AC); n.value = e, n.transformFn = t?.transform; function o() { if (Gr(n), n.value === ka) {
    let r = null;
    throw new _(-950, r);
} return n.value; } return o[et] = n, o; }
var go = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(go || {});
var kk = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(kk || {}), uC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => vs(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, yP = (() => { let e = new S(""); return e.__NG_ELEMENT_ID__ = t => { let n = M(); if (n === null)
    throw new _(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new _(-204, !1); }, e; })();
function vP(e) { return new Sc; }
function dC(e, t) { return RC(e, t); }
function Ok(e) { return RC(ka, e); }
var EP = (dC.required = Ok, dC);
function fC(e, t) { return ld(t); }
function xk(e, t) { return ud(t); }
var IP = (fC.required = xk, fC);
function DP(e, t) { return dd(t); }
function pC(e, t) { return ld(t); }
function Pk(e, t) { return ud(t); }
var CP = (pC.required = Pk, pC);
function TP(e, t) { return dd(t); }
function kC(e, t) { let n = Object.create(AC), o = new Sc; n.value = e; function r() { return Gr(n), hC(n.value), n.value; } return r[et] = n, r.asReadonly = Mp.bind(r), r.set = i => { n.equal(n.value, i) || (La(n, i), o.emit(i)); }, r.update = i => { hC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function hC(e) { if (e === ka)
    throw new _(952, !1); }
function gC(e, t) { return kC(e, t); }
function Lk(e) { return kC(ka, e); }
var MP = (gC.required = Lk, gC), OC = !0, yo = class {
}, NP = at("ContentChildren", (e, t = {}) => Z({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: OC }, t), yo), wP = at("ContentChild", (e, t = {}) => Z({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), yo), _P = at("ViewChildren", (e, t = {}) => Z({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: OC }, t), yo), SP = at("ViewChild", (e, t) => Z({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), yo);
function Fk(e, t, n) { let o = new zn(n); return Promise.resolve(o); }
function mC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Hk = (() => { class e {
    zone = I(U);
    changeDetectionScheduler = I(Tt);
    applicationRef = I(Oe);
    applicationErrorHandler = I(zt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Vk = new S("", { factory: () => !1 });
function jk({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new U(Xe(Z({}, xC()), { scheduleInRootZone: t })), [{ provide: Dn, useValue: !1 }, { provide: U, useFactory: e }, { provide: mt, multi: !0, useFactory: () => { let n = I(Hk, { optional: !0 }); return () => n.initialize(); } }, { provide: mt, multi: !0, useFactory: () => { let n = I(Bk); return () => { n.initialize(); }; } }, { provide: Ii, useValue: t ?? Ip }]; }
function bP(e) { let t = e?.scheduleInRootZone, n = jk({ ngZoneFactory: () => { let o = xC(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && Q("NgZone_CoalesceEvent"), new U(o); }, scheduleInRootZone: t }); return tt([{ provide: Vk, useValue: !0 }, n]); }
function xC(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var Bk = (() => { class e {
    subscription = new Rk;
    initialized = !1;
    zone = I(U);
    pendingTasks = I($t);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { U.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { U.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var _a = new S(""), Uk = new S("");
function Ur(e) { return !e.moduleRef; }
function PC(e) { let t = Ur(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(U); return n.run(() => { Ur(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(zt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Ur(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(_a);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(_a);
    s.add(i), e.moduleRef.onDestroy(() => { $o(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return zk(o, n, () => { let i = t.get($t), s = i.add(), a = t.get(_d); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(vf, Vr); if (HE(c || Vr), !t.get(Uk, !0))
    return Ur(e) ? t.get(Oe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Ur(e)) {
    let u = t.get(Oe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return LC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var LC;
function yC() { LC = $k; }
function $k(e, t) { let n = e.injector.get(Oe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new _(-403, !1); t.push(e); }
function zk(e, t, n) { try {
    let o = n();
    return Nd(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var FC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [Ea(), ...o?.applicationProviders ?? [], Mc], i = vv(n.moduleType, this.injector, r); return yC(), PC({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = bd({}, o); return yC(), Fk(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new _(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(_a, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Pe(Ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), mo = null;
function Gk(e) { if (Oa())
    throw new _(400, !1); Sd(), mo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(FC); return VC(e), t; }
function Wk(e, t, n = []) { let o = `Platform: ${t}`, r = new S(o); return (i = []) => { let s = Oa(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? Gk(HC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : qk(r); }; }
function HC(e = [], t) { return Ce.create({ name: t, providers: [{ provide: Kf, useValue: "platform" }, { provide: _a, useValue: new Set([() => mo = null]) }, ...e] }); }
function qk(e) { let t = Oa(); if (!t)
    throw new _(-401, !1); return t; }
function Oa() { return typeof ngServerMode < "u" && ngServerMode ? null : mo?.get(FC) ?? null; }
function AP() { Oa()?.destroy(); }
function Qk(e = []) { if (mo)
    return mo; let t = HC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (mo = t), Sd(), VC(t), t; }
function RP(e) { return { provide: iu, useValue: e, multi: !0 }; }
function VC(e) { let t = e.get(iu, null); ci(e, () => { t?.forEach(n => n()); }); }
function kP(e) { return tt([]); }
function OP() { return !1; }
function xP() { }
var wa = new WeakSet, vC = "";
function EC(e) { return e.get(_s, du); }
function Yk() { let e = [{ provide: _s, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = I(ct);
            t = !!window._ejsas?.[n];
        } return t && Q("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: mt, useValue: () => { let t = I(Oe), { injector: n } = t; if (!wa.has(t)) {
        let o = I(Mr);
        if (EC(n)) {
            Hg();
            let r = n.get(ct), i = Lg(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Pg(s, a, c), hu(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: Lr, useFactory: () => { let t = I(Oe), { injector: n } = t; return () => { if (!EC(n) || wa.has(t))
        return; wa.add(t); let o = n.get(ct); t.onDestroy(() => { wa.delete(t), typeof ngServerMode < "u" && !ngServerMode && _f(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(mu); Zk(r, n); let i = n.get(Mr); i.get(vC)?.forEach(gu), i.delete(vC); let s = r.instance; Nr(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var Zk = (e, t) => { let n = t.get(ct), o = window._ejsas[n], r = e.instance = new cC(new Ta(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = lC(n); r.replayEarlyEventInfos(i), _f(n); let s = new Ma(a => { Jk(t, a, a.currentTarget); }); aC(r, s); };
function Kk(e, t, n) { let o = new Map, r = t[Lt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!YD(l))
        continue;
    Na(l) ? n.capture.add(l) : n.regular.add(l);
    let u = P(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function Jk(e, t, n) { let o = (n && n.getAttribute(to)) ?? ""; /d\d+/.test(o) ? Xk(o, e, t, n) : t.eventPhase === wf.REPLAY && yu(t, n); }
function Xk(e, t, n, o) { let r = t.get(Rg); r.push({ event: n, currentTarget: o }), ft(t, e, eO(r)); }
function eO(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(to);
    n.has(s) ? yu(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var IC = !1, DC = !1, CC = !1, tO = 1e4;
function nO() { IC || (IC = !0, zg(), RE(), DI(), kE(), Rv(), rv(), xy(), Km()); }
function oO() { DC || (DC = !0, jE(), Ny(), Ay()); }
function rO() { CC || (CC = !0, Xg()); }
function iO(e) { return e.whenStable(); }
var PP = "ngcm";
function LP() { let e = [{ provide: ln, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!I(Jn, { optional: !0 })?.get(Ss, null)), t && Q("NgHydration"), t; } }, { provide: mt, useValue: () => { if (Ju(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = I(Ut); I(ln) && (tm(t), nO()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: lu, useFactory: () => I(ln) }, { provide: Lr, useFactory: () => { let t = I(Tt); if (I(ln)) {
        let n = I(Oe);
        return () => { iO(n).then(() => { n.destroyed || (Xu(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), tt(e); }
function FP() { return [{ provide: uu, useFactory: () => I(ln) }, { provide: mt, useValue: () => { I(ln) && (oO(), Ju(!0), Q("NgI18nHydration")); }, multi: !0 }]; }
function HP() { let e = [Yk(), { provide: fu, useValue: !0 }, { provide: lt, useClass: Vg }, { provide: mt, useValue: () => { rO(), Q("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Lr, useFactory: () => { let t = I(Ce), n = I(Ut); return () => { let o = em(t), r = Cy(n, n.body); eE(t, o, r), Kg(n, t); }; }, multi: !0 }), e; }
var TC = tO - 1e3, Af = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function VP() { let e = new Af, { openTasks: t } = e; return tt([{ provide: Dp, useValue: e }, Qv(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = I(U), o = I(Oe), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${TC / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, TC); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function jP(e) { let t = pd(e); if (!t)
    throw jC(e); return new zn(t); }
function BP(e) { let t = pd(e); if (!t)
    throw jC(e); return t; }
function jC(e) { return new _(920, !1); }
var sO = (() => { class e {
    static __NG_ELEMENT_ID__ = aO;
} return e; })();
function aO(e) { return cO(M(), g(), (e & 16) === 16); }
function cO(e, t, n) { if (ge(e) && !n) {
    let o = fe(e.index, t);
    return new bt(o, o);
}
else if (e.type & 175) {
    let o = t[K];
    return new bt(o, t);
} return null; }
var Rf = class extends sO {
}, MC = class extends Rf {
}, Sa = class {
    supports(t) { return cr(t); }
    create(t) { return new kf(t); }
}, lO = (e, t) => t, kf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || lO; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < NC(o, r, i) ? n : o, a = NC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !cr(t))
        throw new _(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, $y(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new Of(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new ba), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new ba), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, Of = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, xf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, ba = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new xf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function NC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Aa = class {
    supports(t) { return t instanceof Map || ra(t); }
    create() { return new Pf; }
}, Pf = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ra(t)))
        throw new _(900, !1); return this.check(t) ? this : null; }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Lf(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Lf = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function wC() { return new BC([new Sa]); }
var BC = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: wC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = I(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || wC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new _(901, !1); }
} return e; })();
function _C() { return new UC([new Aa]); }
var UC = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: _C });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = I(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || _C()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new _(901, !1); }
} return e; })(), uO = [new Aa], dO = [new Sa], UP = new BC(dO), $P = new UC(uO), zP = Wk(null, "core", []), GP = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Pe(Oe)); };
    static \u0275mod = gd({ type: e });
    static \u0275inj = Io({});
} return e; })();
function WP(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (O(A.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new _(-401, !1); try {
    let i = r?.injector ?? Qk(o), s = [Ea(), Mc, ...n || []], a = new ur({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return PC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    O(A.BootstrapApplicationEnd);
} }
var Ff = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, fO = 0;
function $C(e) { return e.ssrId || (e.ssrId = `t${fO++}`), e.ssrId; }
function zC(e, t, n) { let o = []; return Vn(e, t, n, o), o.length; }
function pO(e) { let t = []; return Zs(e, t), t.length; }
function GC(e, t) { let n = e[j]; return n && !n.hasAttribute(Zn) ? Ra(n, e, null, t) : null; }
function WC(e, t) { let n = bo(e[j]), o = GC(n, t); if (o === null)
    return; let r = P(n[j]), i = e[q], s = Ra(r, i, null, t), a = n[T], c = `${o}|${s}`; a.setAttribute(r, kn, c); }
function qP(e, t) { let n = e.injector, o = wy(n), r = Nr(n), i = new Ff, s = new Map, a = e._views, c = n.get(_s, du), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(ct); for (let p of a) {
    let h = vu(p);
    if (h !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        X(h) ? WC(h, y) : GC(h, y), vO(s, t);
    }
} let d = i.getAll(), f = n.get(Jn); if (f.set(Ss, d), u.size > 0) {
    let p = {};
    for (let [h, y] of u.entries())
        p[h] = y;
    f.set(bs, p);
} return l; }
function hO(e, t, n, o, r) { let i = [], s = ""; for (let a = V; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (Ge(c) && (c = c[v], X(c))) {
        u = pO(c) + 1, WC(c, r);
        let p = bo(c[j]);
        d = { [Ms]: p[m].ssrId, [it]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = $C(p), u = zC(p, c, p.firstChild)), d = { [Ms]: l, [it]: u };
        let h = !1;
        if (Lv(n[m], t)) {
            let y = me(n, t), E = ae(n[m], t);
            if (r.isIncrementalHydrationEnabled && E.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                E.hydrateTriggers.has(7) && (h = !0);
                let R = [];
                Zs(e, R);
                let J = { [it]: R.length, [Cr]: y[dt] }, xe = gO(E.hydrateTriggers);
                xe.length > 0 && (J[Tr] = xe), o !== null && (J[cu] = o), r.deferBlocks.set(D, J);
                let Te = P(e);
                Te !== void 0 ? Te.nodeType === Node.COMMENT_NODE && SC(Te, D) : SC(Te, D), h || IO(E, R, D, r), o = D, d[ws] = D;
            }
            d[Cr] = y[dt];
        }
        h || Object.assign(d, qC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Ir] ??= 1, p[Ir]++;
    }
    else
        s = f, i.push(d);
} return i; }
function gO(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function $r(e, t, n, o) { let r = t.index - v; e[Dr] ??= {}, e[Dr][r] ??= Dy(t, n, o); }
function Sf(e, t) { let n = typeof t == "number" ? t : t.index - v; e[eo] ??= [], e[eo].includes(n) || e[eo].push(n); }
function qC(e, t = null, n) { let o = {}, r = e[m], i = _y(r, n), s = n.shouldReplayEvents ? Kk(r, e, n.eventTypesToReplay) : null; for (let a = v; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - v, u = Sy(e, a, n);
    if (u) {
        o[Ns] ??= {}, o[Ns][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Sf(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + v];
            $r(o, f, e, i);
        }
        continue;
    }
    if (ys(c) && !no(c)) {
        if (X(e[a]) && c.tView && (o[Ts] ??= {}, o[Ts][l] = $C(c.tView)), lo(c, e) && EO(c)) {
            Sf(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Ka(d) && !Kn(d) && (lo(d, e) ? Sf(o, d) : $r(o, d, e, i));
                    else
                        throw fy(P(e[a]));
        }
        if (mO(o, c, e, i), X(e[a])) {
            let d = e[a][j];
            if (Array.isArray(d)) {
                let f = P(d);
                f.hasAttribute(Zn) || Ra(f, d, t, n);
            }
            o[Xn] ??= {}, o[Xn][l] = hO(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !tg(c)) {
            let d = P(e[a][j]);
            d.hasAttribute(Zn) || Ra(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[Er] ??= {}, o[Er][l] = zC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Kn(d) && $r(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = P(e[a]);
            Iu(n, d);
        }
        if (s && c.type & 2) {
            let d = P(e[a]);
            s.has(d) && pu(d, s.get(d), t);
        }
    }
} return o; }
function mO(e, t, n, o) { Ka(t) || (t.projectionNext && t.projectionNext !== t.next && !Kn(t.projectionNext) && $r(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && lo(t.parent, n) && !lo(t, n) && $r(e, t, n, o)); }
function yO(e) { let t = e[H]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Re.ShadowDom || n?.encapsulation === Re.ExperimentalIsolatedShadowDom; }
function Ra(e, t, n, o) { let r = t[T]; if (ep(t) && !ea() || yO(t))
    return r.setAttribute(e, Zn, ""), null; {
    let i = qC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, kn, s.toString()), s;
} }
function SC(e, t) { e.textContent = `ngh=${t}`; }
function vO(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function EO(e) { let t = e; for (; t != null;) {
    if (ge(t))
        return !0;
    t = t.parent;
} return !1; }
function IO(e, t, n, o) { let r = Zg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        pu(s, r, n);
} }
function QP(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function YP(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var DO = "\u{1F170}\uFE0F", xa = !1;
function ZP(e) { if (!xa)
    return; let { startLabel: t } = QC(e); performance.mark(t); }
function KP(e) { if (!xa)
    return; let { startLabel: t, labelName: n, endLabel: o } = QC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function QC(e) { let t = `${DO}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var bC = !1;
function JP() { if (!bC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    bC = !0, console.warn("Performance API is not supported on this platform");
    return;
} xa = !0; }
function XP() { xa = !1; }
function eL(e) { }
function tL(e) { return te({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(he, `ng:///${e.type.name}/\u0275fac.js`, e); }
function nL(e) { Dd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function oL(e) { Uv(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Dd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function rL(e) { return te({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(he, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function iL(e) { return te({ usage: 1, kind: CO(e.target), type: e.type }).compileFactoryDeclaration(he, `ng:///${e.type.name}/\u0275fac.js`, e); }
function CO(e) { switch (e) {
    case go.Directive: return "directive";
    case go.Component: return "component";
    case go.Injectable: return "injectable";
    case go.Pipe: return "pipe";
    case go.NgModule: return "NgModule";
} }
function sL(e) { return te({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(he, `ng:///${e.type.name}/\u0275prov.js`, e); }
function aL(e) { return te({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(he, `ng:///${e.type.name}/\u0275inj.js`, e); }
function cL(e) { return te({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(he, `ng:///${e.type.name}/\u0275mod.js`, e); }
function lL(e) { return te({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(he, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var bf = Symbol("NOT_SET"), YC = new Set, TO = Xe(Z({}, Fa), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: bf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== bf && !qr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? YC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = vo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Wr(this, n);
    } return (this.value === bf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Hf = class extends nr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Po), s), this.scheduler = r; for (let a of Fu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(TO);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Gr(l), l.value), l.signal[et] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? YC)
                    n();
            }
            finally {
                Eo(t);
            } }
};
function uL(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return js; let n = t?.injector ?? I(Ce), o = n.get(Tt), r = n.get(Vs), i = n.get(fn, null, { optional: !0 }); r.impl ??= n.get(Hu); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(Ei, null, { optional: !0 }), c = new Hf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function dL(e) { return new Vf(Cd(e) ? e : Gt(e)); }
var Vf = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = Gt(() => { if (this.state.status === "error")
        throw new Np(this.state.error); return this.state.value; });
    status = Gt(() => this.state.status);
    error = Gt(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = Gt(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = Gt(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function fL(e, t) { let n = W(e), o = t.elementInjector || ai(); return new At(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function pL(e) { let t = W(e); if (!t)
    return null; let n = new At(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function hL(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var gL = new S("", { providedIn: "platform", factory: () => null }), mL = new S("", { providedIn: "platform", factory: () => null }), yL = new S("", { providedIn: "platform", factory: () => null });
export { SM as ANIMATION_MODULE_TYPE, Lr as APP_BOOTSTRAP_LISTENER, ct as APP_ID, wd as APP_INITIALIZER, _d as ApplicationInitStatus, GP as ApplicationModule, Oe as ApplicationRef, pg as Attribute, BD as COMPILER_OPTIONS, bM as CSP_NONCE, eN as CUSTOM_ELEMENTS_SCHEMA, Is as ChangeDetectionStrategy, sO as ChangeDetectorRef, BR as Compiler, Xl as CompilerFactory, xR as Component, oa as ComponentFactory, Or as ComponentFactoryResolver, Fy as ComponentRef, wP as ContentChild, NP as ContentChildren, zR as DEFAULT_CURRENCY_CODE, Ut as DOCUMENT, cn as DebugElement, eu as DebugEventListener, gr as DebugNode, kf as DefaultIterableDiffer, Po as DestroyRef, jD as Directive, mt as ENVIRONMENT_INITIALIZER, vr as ElementRef, MC as EmbeddedViewRef, yt as EnvironmentInjector, Tc as ErrorHandler, lT as EventEmitter, yP as HOST_TAG_NAME, Wh as Host, uC as HostAttributeToken, HR as HostBinding, VR as HostListener, rT as INJECTOR, Uh as Inject, XT as Injectable, S as InjectionToken, Ce as Injector, LR as Input, BC as IterableDiffers, UC as KeyValueDiffers, vf as LOCALE_ID, km as MAX_ANIMATION_TIMEOUT, $D as MissingTranslationStrategy, ms as ModuleWithComponentFactories, tN as NO_ERRORS_SCHEMA, jR as NgModule, mv as NgModuleFactory, Un as NgModuleRef, U as NgZone, $h as Optional, FR as Output, Sc as OutputEmitterRef, _M as PLATFORM_ID, iu as PLATFORM_INITIALIZER, wc as PendingTasks, PR as Pipe, FC as PlatformRef, yo as Query, Qi as QueryList, gL as REQUEST, yL as REQUEST_CONTEXT, mL as RESPONSE_INIT, $_ as Renderer2, ar as RendererFactory2, Xi as RendererStyleFlags2, Hy as Sanitizer, un as SecurityContext, zh as Self, $i as SimpleChange, Gh as SkipSelf, GR as TRANSLATIONS, WR as TRANSLATIONS_FORMAT, rr as TemplateRef, wb as Testability, Gv as TestabilityRegistry, Jn as TransferState, qh as Type, JC as VERSION, KC as Version, SP as ViewChild, _P as ViewChildren, sa as ViewContainerRef, Re as ViewEncapsulation, Rf as ViewRef, Fm as afterEveryRender, Vu as afterNextRender, uL as afterRenderEffect, qR as asNativeElements, aT as assertInInjectionContext, fT as assertNotInReactiveContext, qk as assertPlatform, QP as booleanAttribute, Gt as computed, CP as contentChild, TP as contentChildren, fL as createComponent, hd as createEnvironmentInjector, yv as createNgModule, VS as createNgModuleRef, Gk as createPlatform, Wk as createPlatformFactory, AP as destroyPlatform, hT as effect, xP as enableProdMode, Cb as enableProfiling, Va as forwardRef, mr as getDebugNode, jP as getModuleFactory, BP as getNgModuleById, Oa as getPlatform, sT as importProvidersFrom, I as inject, EP as input, Ky as inputBinding, OP as isDevMode, Cd as isSignal, Do as isStandalone, Td as isWritableSignal, yT as linkedSignal, tt as makeEnvironmentProviders, RM as makeStateKey, hL as mergeApplicationConfig, MP as model, YP as numberAttribute, vP as output, Jy as outputBinding, zP as platformCore, Qv as provideAppInitializer, uT as provideBrowserGlobalErrorListeners, kP as provideCheckNoChangesConfig, iT as provideEnvironmentInitializer, FN as provideNgReflectAttributes, RP as providePlatformInitializer, VP as provideStabilityDebugging, bP as provideZoneChangeDetection, UR as provideZonelessChangeDetection, pL as reflectComponentType, G as resolveForwardRef, vT as resource, dL as resourceFromSnapshots, ci as runInInjectionContext, Wv as setTestabilityGetter, Nc as signal, dS as twoWayBinding, mT as untracked, IP as viewChild, DP as viewChildren, Rm as \u0275ANIMATIONS_DISABLED, Mg as \u0275AcxChangeDetectionStrategy, Ng as \u0275AcxViewEncapsulation, Vs as \u0275AfterRenderManager, PP as \u0275CLIENT_RENDER_MODE_FLAG, V as \u0275CONTAINER_HEADER_OFFSET, Tt as \u0275ChangeDetectionScheduler, oa as \u0275ComponentFactory, Db as \u0275Console, Vr as \u0275DEFAULT_LOCALE_ID, Vv as \u0275DEFER_BLOCK_CONFIG, mb as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, lt as \u0275DEHYDRATED_BLOCK_REGISTRY, Ed as \u0275DeferBlockBehavior, $ as \u0275DeferBlockState, Uk as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Rg as \u0275EVENT_REPLAY_QUEUE, _c as \u0275EffectScheduler, kk as \u0275Framework, Wg as \u0275HydrationStatus, AM as \u0275IMAGE_CONFIG, wg as \u0275IMAGE_CONFIG_DEFAULTS, Kf as \u0275INJECTOR_SCOPE, mP as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, zt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, kM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, ln as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, fu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Mr as \u0275JSACTION_BLOCK_ELEMENT_MAP, mu as \u0275JSACTION_EVENT_CONTRACT, Yi as \u0275LContext, Gn as \u0275LocaleDataIndex, gn as \u0275NG_COMP_DEF, Xr as \u0275NG_DIR_DEF, xt as \u0275NG_ELEMENT_ID, ja as \u0275NG_INJ_DEF, Ba as \u0275NG_MOD_DEF, ei as \u0275NG_PIPE_DEF, Jr as \u0275NG_PROV_DEF, Fi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, L as \u0275NO_CHANGE, zn as \u0275NgModuleFactory, Cc as \u0275NoopNgZone, DO as \u0275PERFORMANCE_MARK_PREFIX, Vk as \u0275PROVIDED_NG_ZONE, pT as \u0275PROVIDED_ZONELESS, $t as \u0275PendingTasksInternal, A as \u0275ProfilerEvent, qa as \u0275R3Injector, Ui as \u0275ReflectionCapabilities, At as \u0275Render3ComponentFactory, as as \u0275Render3ComponentRef, $n as \u0275Render3NgModuleRef, ET as \u0275ResourceImpl, _ as \u0275RuntimeError, et as \u0275SIGNAL, Ug as \u0275SSR_CONTENT_INTEGRITY_MARKER, $v as \u0275TESTABILITY, zv as \u0275TESTABILITY_GETTER, Hv as \u0275TimerScheduler, Hs as \u0275TracingAction, fn as \u0275TracingService, bt as \u0275ViewRef, Qr as \u0275XSS_SECURITY_URL, Dn as \u0275ZONELESS_ENABLED, fm as \u0275_sanitizeHtml, wr as \u0275_sanitizeUrl, tn as \u0275allLeavingAnimations, ro as \u0275allowSanitizationBypassAndThrow, qP as \u0275annotateForHydration, eL as \u0275assertType, aN as \u0275bypassSanitizationTrustHtml, dN as \u0275bypassSanitizationTrustResourceUrl, lN as \u0275bypassSanitizationTrustScript, cN as \u0275bypassSanitizationTrustStyle, uN as \u0275bypassSanitizationTrustUrl, xS as \u0275clearResolutionOfComponentResourcesQueue, AD as \u0275compileComponent, yf as \u0275compileDirective, SD as \u0275compileNgModule, bD as \u0275compileNgModuleDefs, Fk as \u0275compileNgModuleFactory, VD as \u0275compilePipe, $a as \u0275convertToBitFlags, cT as \u0275createInjector, Qk as \u0275createOrReusePlatformInjector, UP as \u0275defaultIterableDiffers, $P as \u0275defaultKeyValueDiffers, jn as \u0275depsTracker, zy as \u0275devModeEqual, XP as \u0275disableProfiling, JP as \u0275enableProfiling, IT as \u0275encapsulateResourceError, Ud as \u0275findLocaleData, wD as \u0275flushModuleScopingQueueAsMuchAsPossible, $f as \u0275formatRuntimeError, DR as \u0275generateStandaloneInDeclarationsError, Ib as \u0275getAsyncClassMetadataFn, fS as \u0275getClosestComponentName, W as \u0275getComponentDef, ji as \u0275getDeferBlocks, vM as \u0275getDirectives, Cs as \u0275getDocument, IM as \u0275getHostElement, eT as \u0275getInjectableDef, ve as \u0275getLContext, tA as \u0275getLocaleCurrencyCode, xE as \u0275getLocalePluralCase, gT as \u0275getOutputDestroyRef, sm as \u0275getSanitizationBypassType, Tb as \u0275getTransferState, oN as \u0275getUnknownElementStrictMode, iN as \u0275getUnknownPropertyStrictMode, Ee as \u0275global, Xy as \u0275inferTagNameFromDefinition, aO as \u0275injectChangeDetectorRef, WP as \u0275internalCreateApplication, jk as \u0275internalProvideZoneChangeDetection, Yv as \u0275isBoundToModule, OS as \u0275isComponentDefPendingResolution, oT as \u0275isEnvironmentProviders, tT as \u0275isInjectable, qt as \u0275isNgModule, Nd as \u0275isPromise, qv as \u0275isSubscribable, qw as \u0275isViewDirty, Qw as \u0275markForRefresh, Ze as \u0275noSideEffects, gf as \u0275patchComponentDefWithScope, Q as \u0275performanceMarkFeature, ua as \u0275promiseWithResolvers, Ea as \u0275provideZonelessChangeDetectionInternal, Mb as \u0275publishExternalGlobalUtil, UM as \u0275readHydrationInfo, eA as \u0275registerLocaleData, ot as \u0275renderDeferBlockState, MR as \u0275resetCompiledComponents, zM as \u0275resetIncrementalHydrationEnabledWarnedForTests, ER as \u0275resetJitOptions, fv as \u0275resolveComponentResources, PS as \u0275restoreComponentResolutionQueue, HS as \u0275setAllowDuplicateNgModuleIdsForTest, DT as \u0275setAlternateWeakRefImpl, CD as \u0275setClassDebugInfo, Dd as \u0275setClassMetadata, Uv as \u0275setClassMetadataAsync, ZC as \u0275setCurrentInjector, NM as \u0275setDocument, nT as \u0275setInjectorProfilerContext, HE as \u0275setLocaleId, nN as \u0275setUnknownElementStrictMode, rN as \u0275setUnknownPropertyStrictMode, ZP as \u0275startMeasuring, KP as \u0275stopMeasuring, Ao as \u0275store, Yr as \u0275stringify, mf as \u0275transitiveScopesFor, da as \u0275triggerResourceLoading, XC as \u0275truncateMiddle, nA as \u0275unregisterLocaleData, ut as \u0275unwrapSafeValue, dT as \u0275unwrapWritableSignal, LP as \u0275withDomHydration, Yk as \u0275withEventReplay, FP as \u0275withI18nSupport, HP as \u0275withIncrementalHydration, Nv as \u0275\u0275ControlFeature, ZI as \u0275\u0275ExternalStylesFeature, go as \u0275\u0275FactoryTarget, wv as \u0275\u0275HostDirectivesFeature, md as \u0275\u0275InheritDefinitionFeature, Yh as \u0275\u0275NgOnChangesFeature, YI as \u0275\u0275ProvidersFeature, bm as \u0275\u0275advance, zo as \u0275\u0275animateEnter, Go as \u0275\u0275animateEnterListener, Wo as \u0275\u0275animateLeave, us as \u0275\u0275animateLeaveListener, Ad as \u0275\u0275ariaProperty, WI as \u0275\u0275arrowFunction, PI as \u0275\u0275attachSourceLocations, Rd as \u0275\u0275attribute, dI as \u0275\u0275classMap, tf as \u0275\u0275classProp, ME as \u0275\u0275componentInstance, wE as \u0275\u0275conditional, fa as \u0275\u0275conditionalBranchCreate, NE as \u0275\u0275conditionalCreate, Zd as \u0275\u0275contentQuery, Jd as \u0275\u0275contentQuerySignal, Qy as \u0275\u0275control, Wy as \u0275\u0275controlCreate, hf as \u0275\u0275declareLet, tE as \u0275\u0275defer, Bv as \u0275\u0275deferEnableTimerScheduling, iE as \u0275\u0275deferHydrateNever, yE as \u0275\u0275deferHydrateOnHover, cE as \u0275\u0275deferHydrateOnIdle, dE as \u0275\u0275deferHydrateOnImmediate, IE as \u0275\u0275deferHydrateOnInteraction, hE as \u0275\u0275deferHydrateOnTimer, TE as \u0275\u0275deferHydrateOnViewport, rE as \u0275\u0275deferHydrateWhen, gE as \u0275\u0275deferOnHover, sE as \u0275\u0275deferOnIdle, lE as \u0275\u0275deferOnImmediate, vE as \u0275\u0275deferOnInteraction, fE as \u0275\u0275deferOnTimer, DE as \u0275\u0275deferOnViewport, mE as \u0275\u0275deferPrefetchOnHover, aE as \u0275\u0275deferPrefetchOnIdle, uE as \u0275\u0275deferPrefetchOnImmediate, EE as \u0275\u0275deferPrefetchOnInteraction, pE as \u0275\u0275deferPrefetchOnTimer, CE as \u0275\u0275deferPrefetchOnViewport, oE as \u0275\u0275deferPrefetchWhen, nE as \u0275\u0275deferWhen, Ev as \u0275\u0275defineComponent, Dv as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, Io as \u0275\u0275defineInjector, gd as \u0275\u0275defineNgModule, Cv as \u0275\u0275definePipe, uo as \u0275\u0275directiveInject, oc as \u0275\u0275disableBindings, xd as \u0275\u0275domElement, Hd as \u0275\u0275domElementContainer, Fd as \u0275\u0275domElementContainerEnd, ya as \u0275\u0275domElementContainerStart, ga as \u0275\u0275domElementEnd, ha as \u0275\u0275domElementStart, Qd as \u0275\u0275domListener, jd as \u0275\u0275domProperty, vd as \u0275\u0275domTemplate, Od as \u0275\u0275element, Ld as \u0275\u0275elementContainer, Hr as \u0275\u0275elementContainerEnd, ma as \u0275\u0275elementContainerStart, pa as \u0275\u0275elementEnd, fr as \u0275\u0275elementStart, nc as \u0275\u0275enableBindings, DD as \u0275\u0275getComponentDepsFactory, OE as \u0275\u0275getCurrentView, dg as \u0275\u0275getInheritedFactory, TD as \u0275\u0275getReplaceMetadataURL, YE as \u0275\u0275i18n, KE as \u0275\u0275i18nApply, ZE as \u0275\u0275i18nAttributes, zd as \u0275\u0275i18nEnd, Gd as \u0275\u0275i18nExp, JE as \u0275\u0275i18nPostprocess, $d as \u0275\u0275i18nStart, Pe as \u0275\u0275inject, vs as \u0275\u0275injectAttribute, LI as \u0275\u0275interpolate, FI as \u0275\u0275interpolate1, HI as \u0275\u0275interpolate2, VI as \u0275\u0275interpolate3, jI as \u0275\u0275interpolate4, BI as \u0275\u0275interpolate5, UI as \u0275\u0275interpolate6, $I as \u0275\u0275interpolate7, zI as \u0275\u0275interpolate8, GI as \u0275\u0275interpolateV, Vy as \u0275\u0275invalidFactory, ni as \u0275\u0275invalidFactoryDep, Wd as \u0275\u0275listener, oI as \u0275\u0275loadQuery, Ec as \u0275\u0275namespaceHTML, vc as \u0275\u0275namespaceMathML, yc as \u0275\u0275namespaceSVG, XE as \u0275\u0275nextContext, nL as \u0275\u0275ngDeclareClassMetadata, oL as \u0275\u0275ngDeclareClassMetadataAsync, rL as \u0275\u0275ngDeclareComponent, tL as \u0275\u0275ngDeclareDirective, iL as \u0275\u0275ngDeclareFactory, sL as \u0275\u0275ngDeclareInjectable, aL as \u0275\u0275ngDeclareInjector, cL as \u0275\u0275ngDeclareNgModule, lL as \u0275\u0275ngDeclarePipe, hD as \u0275\u0275pipe, gD as \u0275\u0275pipeBind1, mD as \u0275\u0275pipeBind2, yD as \u0275\u0275pipeBind3, vD as \u0275\u0275pipeBind4, ED as \u0275\u0275pipeBindV, tI as \u0275\u0275projection, eI as \u0275\u0275projectionDef, kd as \u0275\u0275property, XI as \u0275\u0275pureFunction0, eD as \u0275\u0275pureFunction1, tD as \u0275\u0275pureFunction2, nD as \u0275\u0275pureFunction3, oD as \u0275\u0275pureFunction4, rD as \u0275\u0275pureFunction5, iD as \u0275\u0275pureFunction6, sD as \u0275\u0275pureFunction7, aD as \u0275\u0275pureFunction8, cD as \u0275\u0275pureFunctionV, rI as \u0275\u0275queryAdvance, nI as \u0275\u0275queryRefresh, xI as \u0275\u0275readContextLet, iI as \u0275\u0275reference, fd as \u0275\u0275registerNgModuleType, AE as \u0275\u0275repeater, bE as \u0275\u0275repeaterCreate, SE as \u0275\u0275repeaterTrackByIdentity, _E as \u0275\u0275repeaterTrackByIndex, MD as \u0275\u0275replaceMetadata, sc as \u0275\u0275resetView, Su as \u0275\u0275resolveBody, Nm as \u0275\u0275resolveDocument, Mm as \u0275\u0275resolveWindow, ic as \u0275\u0275restoreView, ym as \u0275\u0275sanitizeHtml, _u as \u0275\u0275sanitizeResourceUrl, Em as \u0275\u0275sanitizeScript, vm as \u0275\u0275sanitizeStyle, wu as \u0275\u0275sanitizeUrl, Cm as \u0275\u0275sanitizeUrlOrResourceUrl, KI as \u0275\u0275setComponentScope, JI as \u0275\u0275setNgModuleScope, OI as \u0275\u0275storeLet, uI as \u0275\u0275styleMap, ef as \u0275\u0275styleProp, qd as \u0275\u0275syntheticHostListener, Bd as \u0275\u0275syntheticHostProperty, yd as \u0275\u0275template, ID as \u0275\u0275templateRefExtractor, EI as \u0275\u0275text, nf as \u0275\u0275textInterpolate, va as \u0275\u0275textInterpolate1, of as \u0275\u0275textInterpolate2, rf as \u0275\u0275textInterpolate3, sf as \u0275\u0275textInterpolate4, af as \u0275\u0275textInterpolate5, cf as \u0275\u0275textInterpolate6, lf as \u0275\u0275textInterpolate7, uf as \u0275\u0275textInterpolate8, df as \u0275\u0275textInterpolateV, Im as \u0275\u0275trustConstantHtml, Dm as \u0275\u0275trustConstantResourceUrl, RI as \u0275\u0275twoWayBindingSet, pf as \u0275\u0275twoWayListener, ff as \u0275\u0275twoWayProperty, Tm as \u0275\u0275validateAttribute, Kd as \u0275\u0275viewQuery, Xd as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.6
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
