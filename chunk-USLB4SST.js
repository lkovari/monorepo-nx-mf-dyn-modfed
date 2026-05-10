import { a as E, b as I, e as x } from "@nf-internal/chunk-JKOY2XUY";
function q(e) { let t = new Map; function r(i) { for (let [s, c] of t)
    i - c > e && t.delete(s); } return { shouldDrop(i, s) { return r(s), t.has(i) ? !0 : (t.set(i, s), !1); } }; }
function G(e) { let t = [], r = !1, i = !1; function s() { if (!i) {
    for (i = !0, r = !1; t.length > 0;) {
        let c = t.shift();
        c && c();
    }
    i = !1;
} } return { enqueue(c) { t.push(c), !i && (r || (r = !0, e === "microtask" ? queueMicrotask(s) : s())); } }; }
var O = class extends Error {
    code;
    constructor(e, t = "unauthorized") { super(e), this.name = "BusPolicyError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
}, l = class extends Error {
    code;
    constructor(e, t = "validation") { super(e), this.name = "BusValidationError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
}, m = class extends Error {
    code;
    constructor(e, t = "conflict") { super(e), this.name = "HostBridgeError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
};
function N(e) { if (e.sensitivity === "restricted")
    throw new O("restricted messages are not allowed on the bus", "unauthorized"); }
function T(...e) { return t => { for (let r of e)
    r(t); }; }
var H = class {
    pendingByCausationId = new Map;
    waitForResponse(e, t) { return new Promise((r, i) => { let s = setTimeout(() => { this.pendingByCausationId.delete(e), i(new l("request timed out", "timeout")); }, t); this.pendingByCausationId.set(e, { resolve: r, reject: i, timer: s }); }); }
    tryResolve(e) { if (!e.causationId)
        return !1; let t = this.pendingByCausationId.get(e.causationId); return t ? (clearTimeout(t.timer), this.pendingByCausationId.delete(e.causationId), t.resolve(e), !0) : !1; }
    dispose() { for (let e of this.pendingByCausationId.values())
        clearTimeout(e.timer), e.reject(new l("bus disposed", "delivery")); this.pendingByCausationId.clear(); }
}, b = "@lkovari/microfrontend-platform-communication/message";
function L(e, t) { let r = Date.parse(e); if (Number.isNaN(r))
    throw new l("invalid occurredAtUtc", "validation"); if (Date.now() - r > t)
    throw new l("message expired", "timeout"); }
function X(e) { let t = e.defaultSubscriberId ?? e.appId, r = new EventTarget, i = G(e.dispatch ?? "microtask"), s = e.dedupe?.enabled === !0 ? q(e.dedupe.windowMs) : void 0, c = new H, w = e.allowUnregisteredMessageNames === !0, _ = e.messageTtlMs, a = e.enableDefaultSensitivityPolicy ?? !0, d = T(...a ? [N] : [], ...e.policy ? [e.policy] : []), u = [], h = [], g = []; function B(n) { if (e.onSubscriberError) {
    e.onSubscriberError(n);
    return;
} if (e.onDispatchError) {
    e.onDispatchError(n);
    return;
} console.error("[mfe-bus] subscriber handler error", n); } function k(n) { let o = e.validators[n.messageName]; if (!o) {
    if (!w)
        throw new l(`no validator registered for ${n.messageName}`, "validation");
    return;
} let f = o.safeParse(n); if (!f.success)
    throw new l(f.error.message, "validation"); } function A(n) { let o = new CustomEvent(b, { detail: n, bubbles: !1, cancelable: !1 }); r.dispatchEvent(o); } function j(n) { if (_ !== void 0 && L(n.occurredAtUtc, _), k(n), s) {
    let o = Date.now();
    if (s.shouldDrop(n.messageId, o))
        return !1;
} d(n), e.registry?.assertCanPublish(n); for (let o of g)
    o(n); return !0; } let D = { appId: e.appId, publish(n) { try {
        if (!j(n))
            return;
    }
    catch (o) {
        if (e.onDispatchError) {
            e.onDispatchError(o);
            return;
        }
        throw o instanceof Error ? o : new l("unknown publish failure", "unknown");
    } i.enqueue(() => { A(n), c.tryResolve(n); }); }, request(n, o = 5e3, f) { return x(this, null, function* () { let y = c.waitForResponse(n.messageId, o); D.publish(n); let p = yield y; if (p.causationId !== n.messageId)
        throw new l("response causationId must equal request messageId", "validation"); if (f) {
        let v = f.safeParse(p);
        if (!v.success)
            throw new l(v.error.message, "validation");
    } return p; }); }, subscribe(n, o, f) { let y = f?.subscriberId ?? t; e.registry?.assertCanSubscribe(n, y); let p = v => { let S = v.detail; S.messageName === n && (S.target !== void 0 && S.target !== y || Promise.resolve(o(S)).catch(F => { B(F); })); }; return r.addEventListener(b, p), u.push({ messageName: n, listener: p }), () => { r.removeEventListener(b, p); let v = u.findIndex(C => C.listener === p); v >= 0 && u.splice(v, 1); }; }, observeAll(n) { let o = f => { let y = f; try {
        n(y.detail);
    }
    catch (p) {
        B(p);
    } }; return r.addEventListener(b, o), h.push({ listener: o }), () => { r.removeEventListener(b, o); let f = h.findIndex(y => y.listener === o); f >= 0 && h.splice(f, 1); }; }, registerBeforeDeliver(n) { return g.push(n), () => { let o = g.indexOf(n); o >= 0 && g.splice(o, 1); }; }, dispose() { c.dispose(); for (let n of u)
        r.removeEventListener(b, n.listener); u.length = 0; for (let n of h)
        r.removeEventListener(b, n.listener); h.length = 0, g.length = 0; } }; return D; }
function M(e) { return !(e === null || typeof e != "object" || Array.isArray(e)); }
function P(e, t) { if (!M(t))
    return t; let r = M(e) ? e : {}, i = E({}, r); for (let [s, c] of Object.entries(t)) {
    if (c === null) {
        delete i[s];
        continue;
    }
    i[s] = P(i[s], c);
} return i; }
function V(e, t) { if (!t.enabled)
    return { getRevision: () => { }, getSnapshot: () => { }, dispose: () => { } }; let r = t.conflictStrategy ?? "last-writer-wins", i = new Map(t.initialRevisions ? Object.entries(t.initialRevisions) : []), s = new Map(t.initialSnapshots ? Object.entries(t.initialSnapshots) : []); function c(a, d) { let u = i.get(a) ?? 0, h = d.revision; if (r === "reject-if-stale" && h <= u)
    throw new l("stale state revision", "delivery"); if (r === "custom" && t.customConflict && t.customConflict({ stateKey: a, incoming: d, currentRevision: u, currentSnapshot: s.get(a) }) === "reject")
    throw new l("state conflict rejected", "delivery"); i.set(a, h), s.set(a, d.payload); } function w(a, d) { let u = s.get(a), h = P(u, d.payload), g = I(E({}, d), { operation: "replace", payload: h }); c(a, g); } let _ = e.registerBeforeDeliver(a => { if (a.kind !== "state")
    return; let d = a, u = d.stateKey; if (d.operation === "replace") {
    c(u, d);
    return;
} if (d.operation === "patch") {
    w(u, d);
    return;
} if (d.operation === "remove") {
    i.delete(u), s.delete(u);
    return;
} d.operation === "reset" && (i.set(u, 0), s.delete(u)); }); return { getRevision: a => i.get(a), getSnapshot: a => s.get(a), dispose: () => { _(); } }; }
var U = 1;
function z(e) { return I(E({}, e), { messageId: e.messageId ?? crypto.randomUUID(), correlationId: e.correlationId ?? crypto.randomUUID(), occurredAtUtc: e.occurredAtUtc ?? new Date().toISOString() }); }
function J(e, t) { let r = new Date().toISOString(); return t instanceof O ? { accepted: !1, correlationId: e, errorCode: t.code, message: t.message, receivedAtUtc: r } : t instanceof l ? { accepted: !1, correlationId: e, errorCode: t.code, message: t.message, receivedAtUtc: r } : { accepted: !1, correlationId: e, errorCode: "unknown", message: t instanceof Error ? t.message : "unknown error", receivedAtUtc: r }; }
function W(e, t) { if (e === void 0 && t === void 0)
    return !0; if (e === void 0 || t === void 0 || e.length !== t.length)
    return !1; for (let r = 0; r < e.length; r += 1)
    if (e[r] !== t[r])
        return !1; return !0; }
function Q(e, t) { return JSON.stringify(e) === JSON.stringify(t); }
function R(e) { if (e === null || typeof e != "object" || Array.isArray(e) || Reflect.get(e, "protocolVersion") !== U)
    return !1; let t = Reflect.get(e, "appId"); return !(typeof t != "string" || t.length === 0 || !Array.isArray(Reflect.get(e, "remotes")) || typeof Reflect.get(e, "getBus") != "function" || typeof Reflect.get(e, "tryPublish") != "function" || typeof Reflect.get(e, "dispose") != "function"); }
function Y(e, t) { if (e.appId !== t.appId)
    throw new m("Existing host bridge has a different appId; cannot reuse with onConflict: return-existing", "mismatch"); if (e.getBus() !== t.bus)
    throw new m("Existing host bridge is bound to a different bus instance; cannot reuse with onConflict: return-existing", "mismatch"); if (!W(t.remotes, e.remotes))
    throw new m("Existing host bridge has different remotes; cannot reuse with onConflict: return-existing", "mismatch"); if (!Q(t.stateSync, e.stateSync))
    throw new m("Existing host bridge has different stateSync options; cannot reuse with onConflict: return-existing", "mismatch"); }
function $(e, t) { if (typeof window > "u")
    return null; let r = window.__MFE_BRIDGE__; if (r === void 0)
    return null; if (t === "return-existing") {
    if (!R(r))
        throw new m("window.__MFE_BRIDGE__ is not a valid MfeBridgeHandle. Remove it, use onConflict: replace, or fix the page script that set it.", "invalid-global");
    return Y(r, e), r;
} if (t === "throw")
    throw R(r) ? new m("Host bridge already initialized. Dispose the existing handle, use onConflict: return-existing with matching options, or onConflict: replace.", "conflict") : new m("window.__MFE_BRIDGE__ is already set to an invalid value. Remove it or use onConflict: replace before initializing the host bridge.", "invalid-global"); return R(r) ? r.dispose() : delete window.__MFE_BRIDGE__, null; }
function Z(e) { let t = e.onConflict ?? "throw"; if (typeof window < "u") {
    let s = $(e, t);
    if (s)
        return s;
} let r; e.stateSync && (r = V(e.bus, e.stateSync)); let i = I(E({ protocolVersion: U, appId: e.appId, remotes: e.remotes }, e.stateSync ? { stateSync: e.stateSync } : {}), { getBus: () => e.bus, tryPublish: s => { let c = s.correlationId ?? crypto.randomUUID(); try {
        let w = z(I(E({}, s), { correlationId: c }));
        return e.bus.publish(w), { accepted: !0, correlationId: w.correlationId, receivedAtUtc: new Date().toISOString() };
    }
    catch (w) {
        return J(c, w);
    } }, dispose: () => { r?.dispose(), typeof window < "u" && window.__MFE_BRIDGE__ === i && delete window.__MFE_BRIDGE__; } }); return typeof window < "u" && (window.__MFE_BRIDGE__ = i), i; }
export { q as a, G as b, O as c, l as d, m as e, N as f, T as g, H as h, X as i, V as j, U as k, R as l, Z as m };
