import { d as M, f as x } from "@nf-internal/chunk-REX6ES5Q";
import { a as E, b as _, e as P } from "@nf-internal/chunk-JKOY2XUY";
function H(e) { let t = new Map; function n(s) { for (let [i, c] of t)
    s - c > e && t.delete(i); } return { shouldDrop(s, i) { return n(i), t.has(s) ? !0 : (t.set(s, i), !1); } }; }
function L(e) { let t = [], n = !1, s = !1; function i() { if (!s) {
    for (s = !0, n = !1; t.length > 0;) {
        let c = t.shift();
        c && c();
    }
    s = !1;
} } return { enqueue(c) { t.push(c), !s && (n || (n = !0, e === "microtask" ? queueMicrotask(i) : i())); } }; }
var j = class extends Error {
    code;
    constructor(e, t = "unauthorized") { super(e), this.name = "BusPolicyError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
}, l = class extends Error {
    code;
    constructor(e, t = "validation") { super(e), this.name = "BusValidationError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
}, S = class extends Error {
    code;
    constructor(e, t = "conflict") { super(e), this.name = "HostBridgeError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
};
function V(e) { if (e.sensitivity === "restricted")
    throw new j("restricted messages are not allowed on the bus", "unauthorized"); }
function z(...e) { return t => { for (let n of e)
    n(t); }; }
var J = class {
    pendingByCausationId = new Map;
    waitForResponse(e, t) { return new Promise((n, s) => { let i = setTimeout(() => { this.pendingByCausationId.delete(e), s(new l("request timed out", "timeout")); }, t); this.pendingByCausationId.set(e, { resolve: n, reject: s, timer: i }); }); }
    cancelRequest(e, t) { let n = this.pendingByCausationId.get(e); n && (clearTimeout(n.timer), this.pendingByCausationId.delete(e), n.reject(t)); }
    tryResolve(e) { if (!e.causationId)
        return !1; let t = this.pendingByCausationId.get(e.causationId); return t ? (clearTimeout(t.timer), this.pendingByCausationId.delete(e.causationId), t.resolve(e), !0) : !1; }
    dispose() { for (let e of this.pendingByCausationId.values())
        clearTimeout(e.timer), e.reject(new l("bus disposed", "delivery")); this.pendingByCausationId.clear(); }
}, W = M.passthrough();
function O(e) { if (!(e instanceof CustomEvent))
    return null; let t = W.safeParse(e.detail); return t.success ? t.data : null; }
var I = "@lkovari/microfrontend-platform-communication/message";
function Q(e, t) { let n = Date.parse(e); if (Number.isNaN(n))
    throw new l("invalid occurredAtUtc", "validation"); if (Date.now() - n > t)
    throw new l("message expired", "timeout"); }
function se(e) { let t = e.defaultSubscriberId ?? e.appId, n = new EventTarget, s = L(e.dispatch ?? "microtask"), i = e.dedupe?.enabled === !0 ? H(e.dedupe.windowMs) : void 0, c = new J, m = e.allowUnregisteredMessageNames === !0, g = e.messageTtlMs, o = e.observability, u = e.enableDefaultSensitivityPolicy ?? !0, h = z(...u ? [V] : [], ...e.policy ? [e.policy] : []), v = [], b = [], R = []; function D(r) { if (o?.onError(r, "subscriber"), e.onSubscriberError) {
    e.onSubscriberError(r);
    return;
} if (e.onDispatchError) {
    e.onDispatchError(r);
    return;
} console.error("[mfe-bus] subscriber handler error", r); } function A(r) { let a = e.validators[r.messageName]; if (!a) {
    if (!m)
        throw new l(`no validator registered for ${r.messageName}`, "validation");
    return;
} let f = a.safeParse(r); if (!f.success)
    throw new l(f.error.message, "validation"); } function F(r) { o?.onDeliver(r); let a = new CustomEvent(I, { detail: r, bubbles: !1, cancelable: !1 }); n.dispatchEvent(a); } function T(r) { if (g !== void 0 && Q(r.occurredAtUtc, g), A(r), i) {
    let a = Date.now();
    if (i.shouldDrop(r.messageId, a))
        return "dedupe";
} h(r), e.registry?.assertCanPublish(r); for (let a of R)
    a(r); return "deliver"; } function G(r, a) { if (o?.onError(r, a ? "request" : "dispatch"), e.onDispatchError) {
    if (e.onDispatchError(r), e.failFastOnDispatchError === !0 && a)
        throw r instanceof Error ? r : new l("unknown publish failure", "unknown");
    return;
} throw r instanceof Error ? r : new l("unknown publish failure", "unknown"); } function B(r, a) { o?.onPublish(r); let f; try {
    f = T(r);
}
catch (w) {
    return G(w, a), { status: "rejected" };
} return f === "dedupe" ? (e.onDedupe?.(r), { status: "dedupe" }) : (s.enqueue(() => { F(r), c.tryResolve(r); }), { status: "delivered" }); } return { appId: e.appId, publish(r) { B(r, !1); }, attemptPublish(r) { return B(r, !1); }, request(r, a = 5e3, f) { return P(this, null, function* () { let w = c.waitForResponse(r.messageId, a).catch(d => { throw d instanceof l && d.code === "timeout" && o?.onRequestTimeout(r.messageId), d; }); try {
        if (B(r, !0).status === "dedupe") {
            let p = new l("duplicate messageId", "dedupe");
            throw c.cancelRequest(r.messageId, p), p;
        }
    }
    catch (d) {
        let p = d instanceof Error ? d : new l("request publish failed", "delivery");
        throw c.cancelRequest(r.messageId, p), w.catch(() => { }), p;
    } let y = yield w; if (y.causationId !== r.messageId)
        throw new l("response causationId must equal request messageId", "validation"); if (f) {
        let d = f.safeParse(y);
        if (!d.success)
            throw new l(d.error.message, "validation");
        return d.data;
    } return y; }); }, subscribe(r, a, f) { let w = f?.subscriberId ?? t; e.registry?.assertCanSubscribe(r, w); let y = d => { let p = O(d); p !== null && p.messageName === r && (p.target !== void 0 && p.target !== w || Promise.resolve(a(p)).catch(N => { D(N); })); }; return n.addEventListener(I, y), v.push({ messageName: r, listener: y }), () => { n.removeEventListener(I, y); let d = v.findIndex(p => p.listener === y); d >= 0 && v.splice(d, 1); }; }, observeAll(r) { let a = f => { let w = O(f); if (w !== null)
        try {
            r(w);
        }
        catch (y) {
            o?.onError(y, "observeAll"), D(y);
        } }; return n.addEventListener(I, a), b.push({ listener: a }), () => { n.removeEventListener(I, a); let f = b.findIndex(w => w.listener === a); f >= 0 && b.splice(f, 1); }; }, registerBeforeDeliver(r) { return R.push(r), () => { let a = R.indexOf(r); a >= 0 && R.splice(a, 1); }; }, dispose() { c.dispose(); for (let r of v)
        n.removeEventListener(I, r.listener); v.length = 0; for (let r of b)
        n.removeEventListener(I, r.listener); b.length = 0, R.length = 0; } }; }
function k(e) { return !(e === null || typeof e != "object" || Array.isArray(e)); }
function U(e, t) { if (!k(t))
    return t; let n = k(e) ? e : {}, s = E({}, n); for (let [i, c] of Object.entries(t)) {
    if (c === null) {
        delete s[i];
        continue;
    }
    s[i] = U(s[i], c);
} return s; }
function Y(e) { let t = x.safeParse(e); return t.success ? t.data : null; }
function $(e, t) { if (!t.enabled)
    return { getRevision: () => { }, getSnapshot: () => { }, dispose: () => { } }; let n = t.conflictStrategy ?? "last-writer-wins", s = new Map(t.initialRevisions ? Object.entries(t.initialRevisions) : []), i = new Map(t.initialSnapshots ? Object.entries(t.initialSnapshots) : []); function c(o, u) { let h = s.get(o) ?? 0, v = u.revision; if (n === "reject-if-stale" && v <= h)
    throw new l("stale state revision", "delivery"); if (n === "custom" && t.customConflict && t.customConflict({ stateKey: o, incoming: u, currentRevision: h, currentSnapshot: i.get(o) }) === "reject")
    throw new l("state conflict rejected", "delivery"); s.set(o, v), i.set(o, u.payload); } function m(o, u) { let h = i.get(o), v = U(h, u.payload), b = _(E({}, u), { operation: "replace", payload: v }); c(o, b); } let g = e.registerBeforeDeliver(o => { if (o.kind !== "state")
    return; let u = Y(o); if (u === null)
    return; let h = u.stateKey; if (u.operation === "replace") {
    c(h, u);
    return;
} if (u.operation === "patch") {
    m(h, u);
    return;
} if (u.operation === "remove") {
    s.delete(h), i.delete(h);
    return;
} u.operation === "reset" && (s.set(h, 0), i.delete(h)); }); return { getRevision: o => s.get(o), getSnapshot: o => i.get(o), dispose: () => { g(); } }; }
var q = 1;
function X(e) { return _(E({}, e), { messageId: e.messageId ?? crypto.randomUUID(), correlationId: e.correlationId ?? crypto.randomUUID(), occurredAtUtc: e.occurredAtUtc ?? new Date().toISOString() }); }
function Z(e, t) { let n = new Date().toISOString(); return t instanceof j ? { accepted: !1, correlationId: e, errorCode: t.code, message: t.message, receivedAtUtc: n } : t instanceof l ? { accepted: !1, correlationId: e, errorCode: t.code, message: t.message, receivedAtUtc: n } : { accepted: !1, correlationId: e, errorCode: "unknown", message: t instanceof Error ? t.message : "unknown error", receivedAtUtc: n }; }
function K(e, t) { if (e === void 0 && t === void 0)
    return !0; if (e === void 0 || t === void 0 || e.length !== t.length)
    return !1; for (let n = 0; n < e.length; n += 1)
    if (e[n] !== t[n])
        return !1; return !0; }
function ee(e, t) { return JSON.stringify(e) === JSON.stringify(t); }
function C(e) { if (e === null || typeof e != "object" || Array.isArray(e) || Reflect.get(e, "protocolVersion") !== q)
    return !1; let t = Reflect.get(e, "appId"); return !(typeof t != "string" || t.length === 0 || !Array.isArray(Reflect.get(e, "remotes")) || typeof Reflect.get(e, "getBus") != "function" || typeof Reflect.get(e, "tryPublish") != "function" || typeof Reflect.get(e, "dispose") != "function"); }
function te(e, t) { if (e.appId !== t.appId)
    throw new S("Existing host bridge has a different appId; cannot reuse with onConflict: return-existing", "mismatch"); if (e.getBus() !== t.bus)
    throw new S("Existing host bridge is bound to a different bus instance; cannot reuse with onConflict: return-existing", "mismatch"); if (!K(t.remotes, e.remotes))
    throw new S("Existing host bridge has different remotes; cannot reuse with onConflict: return-existing", "mismatch"); if (!ee(t.stateSync, e.stateSync))
    throw new S("Existing host bridge has different stateSync options; cannot reuse with onConflict: return-existing", "mismatch"); }
function re(e, t) { if (typeof window > "u")
    return null; let n = window.__MFE_BRIDGE__; if (n === void 0)
    return null; if (t === "return-existing") {
    if (!C(n))
        throw new S("window.__MFE_BRIDGE__ is not a valid MfeBridgeHandle. Remove it, use onConflict: replace, or fix the page script that set it.", "invalid-global");
    return te(n, e), n;
} if (t === "throw")
    throw C(n) ? new S("Host bridge already initialized. Dispose the existing handle, use onConflict: return-existing with matching options, or onConflict: replace.", "conflict") : new S("window.__MFE_BRIDGE__ is already set to an invalid value. Remove it or use onConflict: replace before initializing the host bridge.", "invalid-global"); return C(n) ? n.dispose() : delete window.__MFE_BRIDGE__, null; }
function oe(e) { let t = e.onConflict ?? "throw"; if (typeof window < "u") {
    let i = re(e, t);
    if (i)
        return i;
} let n; e.stateSync && (n = $(e.bus, e.stateSync)); let s = _(E(_(E({ protocolVersion: q, appId: e.appId, remotes: e.remotes }, e.stateSync ? { stateSync: e.stateSync } : {}), { getBus: () => e.bus, tryPublish: i => { let c = i.correlationId ?? crypto.randomUUID(), m = new Date().toISOString(); try {
        let g = X(_(E({}, i), { correlationId: c })), o = e.bus.attemptPublish(g);
        return o.status === "dedupe" ? { accepted: !1, correlationId: g.correlationId, errorCode: "dedupe", message: "duplicate messageId", receivedAtUtc: m } : o.status === "rejected" ? { accepted: !1, correlationId: g.correlationId, errorCode: "delivery", message: "publish rejected", receivedAtUtc: m } : { accepted: !0, correlationId: g.correlationId, receivedAtUtc: m };
    }
    catch (g) {
        return Z(c, g);
    } } }), n ? { getSnapshot: i => n.getSnapshot(i) } : {}), { dispose: () => { n?.dispose(), typeof window < "u" && window.__MFE_BRIDGE__ === s && delete window.__MFE_BRIDGE__; } }); return typeof window < "u" && (window.__MFE_BRIDGE__ = s), s; }
export { H as a, L as b, j as c, l as d, S as e, V as f, z as g, J as h, se as i, $ as j, q as k, C as l, oe as m };
