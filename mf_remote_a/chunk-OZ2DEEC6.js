import { d as A, g as U, h as V, i as T } from "@nf-internal/chunk-2KNMFBTY";
import { a as b, b as M, e as k } from "@nf-internal/chunk-JKOY2XUY";
import { ZodLiteral as $, ZodNumber as X, ZodObject as j, ZodEffects as q } from "zod";
function K(e) { let t = new Map; function r(s) { for (let [i, a] of t)
    s - a > e && t.delete(i); } return { shouldDrop(s, i) { return r(i), t.has(s) ? !0 : (t.set(s, i), !1); } }; }
function ee(e) { let t = [], r = !1, s = !1; function i() { if (!s) {
    for (s = !0, r = !1; t.length > 0;) {
        let a = t.shift();
        a && a();
    }
    s = !1;
} } return { enqueue(a) { t.push(a), !s && (r || (r = !0, e === "microtask" ? queueMicrotask(i) : i())); } }; }
var R = class extends Error {
    code;
    constructor(e, t = "unauthorized") { super(e), this.name = "BusPolicyError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
}, l = class extends Error {
    code;
    constructor(e, t = "validation") { super(e), this.name = "BusValidationError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
}, E = class extends Error {
    code;
    constructor(e, t = "conflict") { super(e), this.name = "HostBridgeError", this.code = t, Object.setPrototypeOf(this, new.target.prototype); }
};
function te(e) { if (e.sensitivity === "restricted")
    throw new R("restricted messages are not allowed on the bus", "unauthorized"); }
function re(...e) { return t => { for (let r of e)
    r(t); }; }
function G(e) { if (e instanceof j)
    return e; if (e instanceof q) {
    let t = e.innerType();
    if (t instanceof j)
        return t;
    if (t instanceof q)
        return G(t);
} }
function ne(e) { let t, r; for (let s of e._def.checks)
    s.kind === "min" && s.inclusive ? t = t === void 0 ? s.value : Math.max(t, s.value) : s.kind === "max" && s.inclusive && (r = r === void 0 ? s.value : Math.min(r, s.value)); return b(b({}, t !== void 0 ? { min: t } : {}), r !== void 0 ? { max: r } : {}); }
function se(e) { let t = G(e); if (!t)
    return {}; let r = t.shape.messageVersion; if (!r)
    return {}; if (r instanceof $) {
    let s = r.value;
    return typeof s == "number" ? { min: s, max: s } : {};
} return r instanceof X ? ne(r) : {}; }
var ie = class L {
    topics = new Map;
    register(t) { this.topics.set(t.messageName, t); }
    registerFromValidators(t) { for (let [r, s] of Object.entries(t)) {
        if (this.topics.has(r))
            continue;
        let i = se(s);
        this.topics.set(r, b(b({ messageName: r }, i.min !== void 0 ? { minMessageVersion: i.min } : {}), i.max !== void 0 ? { maxMessageVersion: i.max } : {}));
    } }
    static fromValidators(t) { let r = new L; return r.registerFromValidators(t), r; }
    getRegistration(t) { return this.topics.get(t); }
    assertCanPublish(t) { let r = this.topics.get(t.messageName); if (r) {
        if (r.allowedPublishers && !r.allowedPublishers.includes(t.source))
            throw new R("publisher not allowed for topic", "unauthorized");
        if (r.minMessageVersion !== void 0 && t.messageVersion < r.minMessageVersion)
            throw new R("messageVersion below minimum for topic", "incompatible-version");
        if (r.maxMessageVersion !== void 0 && t.messageVersion > r.maxMessageVersion)
            throw new R("messageVersion above maximum for topic", "incompatible-version");
    } }
    assertCanSubscribe(t, r) { let s = this.topics.get(t); if (s?.allowedSubscribers && !s.allowedSubscribers.includes(r))
        throw new R("subscriber not allowed for topic", "unauthorized"); }
}, oe = class {
    pendingByCausationId = new Map;
    waitForResponse(e, t) { return new Promise((r, s) => { let i = setTimeout(() => { this.pendingByCausationId.delete(e), s(new l("request timed out", "timeout")); }, t); this.pendingByCausationId.set(e, { resolve: r, reject: s, timer: i }); }); }
    cancelRequest(e, t) { let r = this.pendingByCausationId.get(e); r && (clearTimeout(r.timer), this.pendingByCausationId.delete(e), r.reject(t)); }
    tryResolve(e) { if (!e.causationId)
        return !1; let t = this.pendingByCausationId.get(e.causationId); return t ? (clearTimeout(t.timer), this.pendingByCausationId.delete(e.causationId), t.resolve(e), !0) : !1; }
    dispose() { for (let e of this.pendingByCausationId.values())
        clearTimeout(e.timer), e.reject(new l("bus disposed", "delivery")); this.pendingByCausationId.clear(); }
}, ae = A.passthrough();
function F(e) { if (!(e instanceof CustomEvent))
    return null; let t = ae.safeParse(e.detail); return t.success ? t.data : null; }
var ce = 5e3, ue = 5e3;
function de(e) { let t = T.safeParse(e); if (t.success)
    return t.data.timeoutMs; }
function le(e) { let t = T.safeParse(e); if (t.success)
    return t.data.expectedResult; }
function fe(e) { let t = V.safeParse(e); if (t.success)
    return t.data.ackTimeoutMs; }
function N(e, t) { let r = new Date().toISOString(); return t instanceof R || t instanceof l ? { accepted: !1, correlationId: e, errorCode: t.code, message: t.message, receivedAtUtc: r } : { accepted: !1, correlationId: e, errorCode: "unknown", message: t instanceof Error ? t.message : "unknown error", receivedAtUtc: r }; }
var S = "@lkovari/microfrontend-platform-communication/message";
function he(e, t) { let r = Date.parse(e); if (Number.isNaN(r))
    throw new l("invalid occurredAtUtc", "validation"); if (Date.now() - r > t)
    throw new l("message expired", "timeout"); }
function pe(e) { if (e.autoRegisterTopics !== !0)
    return e.registry; let t = e.registry ?? new ie; return t.registerFromValidators(e.validators), t; }
function xe(e) { let t = e.defaultSubscriberId ?? e.appId, r = new EventTarget, s = ee(e.dispatch ?? "microtask"), i = e.dedupe?.enabled === !0 ? K(e.dedupe.windowMs) : void 0, a = new oe, p = e.allowUnregisteredMessageNames === !0, _ = e.messageTtlMs, c = e.observability, d = pe(e), f = e.enableDefaultSensitivityPolicy ?? !0, y = re(...f ? [te] : [], ...e.policy ? [e.policy] : []), I = [], C = [], x = []; function O(n) { if (c?.onError(n, "subscriber"), e.onSubscriberError) {
    e.onSubscriberError(n);
    return;
} if (e.onDispatchError) {
    e.onDispatchError(n);
    return;
} console.error("[mfe-bus] subscriber handler error", n); } function Z(n) { let o = e.validators[n.messageName]; if (!o) {
    if (!p)
        throw new l(`no validator registered for ${n.messageName}`, "validation");
    return;
} let h = o.safeParse(n); if (!h.success)
    throw new l(h.error.message, "validation"); } function J(n) { c?.onDeliver(n); let o = new CustomEvent(S, { detail: n, bubbles: !1, cancelable: !1 }); r.dispatchEvent(o); } function W(n) { if (_ !== void 0 && he(n.occurredAtUtc, _), Z(n), i) {
    let o = Date.now();
    if (i.shouldDrop(n.messageId, o))
        return "dedupe";
} y(n), d?.assertCanPublish(n); for (let o of x)
    o(n); return "deliver"; } function Y(n, o) { if (c?.onError(n, o ? "request" : "dispatch"), e.onDispatchError) {
    if (e.onDispatchError(n), e.failFastOnDispatchError === !0 && o)
        throw n instanceof Error ? n : new l("unknown publish failure", "unknown");
    return;
} throw n instanceof Error ? n : new l("unknown publish failure", "unknown"); } function D(n, o) { c?.onPublish(n); let h; try {
    h = W(n);
}
catch (g) {
    return Y(g, o), { status: "rejected" };
} return h === "dedupe" ? (e.onDedupe?.(n), { status: "dedupe" }) : (s.enqueue(() => { J(n), a.tryResolve(n); }), { status: "delivered" }); } return { appId: e.appId, publish(n) { D(n, !1); }, attemptPublish(n) { return D(n, !1); }, sendCommand(n) { return k(this, null, function* () { let { correlationId: o } = n, h = fe(n) ?? ue, g = a.waitForResponse(n.messageId, h).catch(u => { throw u instanceof l && u.code === "timeout" && c?.onRequestTimeout(n.messageId), u; }); try {
        let u = D(n, !0);
        u.status === "dedupe" ? a.cancelRequest(n.messageId, new l("duplicate messageId", "dedupe")) : u.status === "rejected" && a.cancelRequest(n.messageId, new l("command publish rejected", "delivery"));
    }
    catch (u) {
        let m = u instanceof Error ? u : new l("command publish failed", "delivery");
        return a.cancelRequest(n.messageId, m), g.catch(() => { }), N(o, m);
    } try {
        return { accepted: !0, correlationId: (yield g).correlationId ?? o, receivedAtUtc: new Date().toISOString() };
    }
    catch (u) {
        return N(o, u);
    } }); }, request(n, o, h) { return k(this, null, function* () { let g = o ?? de(n) ?? ce, u = a.waitForResponse(n.messageId, g).catch(w => { throw w instanceof l && w.code === "timeout" && c?.onRequestTimeout(n.messageId), w; }); try {
        if (D(n, !0).status === "dedupe") {
            let B = new l("duplicate messageId", "dedupe");
            throw a.cancelRequest(n.messageId, B), B;
        }
    }
    catch (w) {
        let B = w instanceof Error ? w : new l("request publish failed", "delivery");
        throw a.cancelRequest(n.messageId, B), u.catch(() => { }), B;
    } let m = yield u; if (m.causationId !== n.messageId)
        throw new l("response causationId must equal request messageId", "validation"); if (h) {
        let w = h.safeParse(m);
        if (!w.success)
            throw new l(w.error.message, "validation");
        return w.data;
    } let v = le(n); if (v !== void 0 && m.messageName !== v)
        throw new l(`response messageName must equal expectedResult "${v}"`, "validation"); return m; }); }, subscribe(n, o, h) { let g = h?.subscriberId ?? t; d?.assertCanSubscribe(n, g); let u = m => { let v = F(m); v !== null && v.messageName === n && (v.target !== void 0 && v.target !== g || Promise.resolve(o(v)).catch(w => { O(w); })); }; return r.addEventListener(S, u), I.push({ messageName: n, listener: u }), () => { r.removeEventListener(S, u); let m = I.findIndex(v => v.listener === u); m >= 0 && I.splice(m, 1); }; }, observeAll(n) { let o = h => { let g = F(h); if (g !== null)
        try {
            n(g);
        }
        catch (u) {
            c?.onError(u, "observeAll"), O(u);
        } }; return r.addEventListener(S, o), C.push({ listener: o }), () => { r.removeEventListener(S, o); let h = C.findIndex(g => g.listener === o); h >= 0 && C.splice(h, 1); }; }, registerBeforeDeliver(n) { return x.push(n), () => { let o = x.indexOf(n); o >= 0 && x.splice(o, 1); }; }, dispose() { a.dispose(); for (let n of I)
        r.removeEventListener(S, n.listener); I.length = 0; for (let n of C)
        r.removeEventListener(S, n.listener); C.length = 0, x.length = 0; } }; }
function z(e) { return !(e === null || typeof e != "object" || Array.isArray(e)); }
function H(e, t) { if (!z(t))
    return t; let r = z(e) ? e : {}, s = b({}, r); for (let [i, a] of Object.entries(t)) {
    if (a === null) {
        delete s[i];
        continue;
    }
    s[i] = H(s[i], a);
} return s; }
function ge(e) { let t = U.safeParse(e); return t.success ? t.data : null; }
function we(e, t) { if (!t.enabled)
    return { getRevision: () => { }, getSnapshot: () => { }, dispose: () => { } }; let r = t.conflictStrategy ?? "last-writer-wins", s = new Map(t.initialRevisions ? Object.entries(t.initialRevisions) : []), i = new Map(t.initialSnapshots ? Object.entries(t.initialSnapshots) : []); function a(c, d) { let f = s.get(c) ?? 0, y = d.revision; if (r === "reject-if-stale" && y <= f)
    throw new l("stale state revision", "delivery"); if (r === "custom" && t.customConflict && t.customConflict({ stateKey: c, incoming: d, currentRevision: f, currentSnapshot: i.get(c) }) === "reject")
    throw new l("state conflict rejected", "delivery"); s.set(c, y), i.set(c, d.payload); } function p(c, d) { let f = i.get(c), y = H(f, d.payload), I = M(b({}, d), { operation: "replace", payload: y }); a(c, I); } let _ = e.registerBeforeDeliver(c => { if (c.kind !== "state")
    return; let d = ge(c); if (d === null)
    return; let f = d.stateKey; if (d.operation === "replace") {
    a(f, d);
    return;
} if (d.operation === "patch") {
    p(f, d);
    return;
} if (d.operation === "remove") {
    s.delete(f), i.delete(f);
    return;
} d.operation === "reset" && (s.set(f, 0), i.delete(f)); }); return { getRevision: c => s.get(c), getSnapshot: c => i.get(c), dispose: () => { _(); } }; }
var Q = 1, me = 16;
function Be() { let e = new Uint8Array(me); crypto.getRandomValues(e); let t = ""; for (let r of e)
    t += r.toString(16).padStart(2, "0"); return t; }
function ve(e, t) { if (typeof t != "string" || e.length !== t.length)
    return !1; let r = 0; for (let s = 0; s < e.length; s += 1)
    r |= e.charCodeAt(s) ^ t.charCodeAt(s); return r === 0; }
function be(e) { return M(b({}, e), { messageId: e.messageId ?? crypto.randomUUID(), correlationId: e.correlationId ?? crypto.randomUUID(), occurredAtUtc: e.occurredAtUtc ?? new Date().toISOString() }); }
function ye(e, t) { let r = new Date().toISOString(); return t instanceof E && t.code === "unauthorized" ? { accepted: !1, correlationId: e, errorCode: "unauthorized", message: t.message, receivedAtUtc: r } : t instanceof R ? { accepted: !1, correlationId: e, errorCode: t.code, message: t.message, receivedAtUtc: r } : t instanceof l ? { accepted: !1, correlationId: e, errorCode: t.code, message: t.message, receivedAtUtc: r } : { accepted: !1, correlationId: e, errorCode: "unknown", message: t instanceof Error ? t.message : "unknown error", receivedAtUtc: r }; }
function Ee(e, t) { if (e === void 0 && t === void 0)
    return !0; if (e === void 0 || t === void 0 || e.length !== t.length)
    return !1; for (let r = 0; r < e.length; r += 1)
    if (e[r] !== t[r])
        return !1; return !0; }
function Ie(e, t) { return JSON.stringify(e) === JSON.stringify(t); }
function P(e) { if (e === null || typeof e != "object" || Array.isArray(e) || Reflect.get(e, "protocolVersion") !== Q)
    return !1; let t = Reflect.get(e, "appId"); return !(typeof t != "string" || t.length === 0 || !Array.isArray(Reflect.get(e, "remotes")) || typeof Reflect.get(e, "getBus") != "function" || typeof Reflect.get(e, "tryPublish") != "function" || typeof Reflect.get(e, "dispose") != "function"); }
function Se(e, t) { if (e.appId !== t.appId)
    throw new E("Existing host bridge has a different appId; cannot reuse with onConflict: return-existing", "mismatch"); if (e.getBus(t.accessToken) !== t.bus)
    throw new E("Existing host bridge is bound to a different bus instance; cannot reuse with onConflict: return-existing", "mismatch"); if (!Ee(t.remotes, e.remotes))
    throw new E("Existing host bridge has different remotes; cannot reuse with onConflict: return-existing", "mismatch"); if (!Ie(t.stateSync, e.stateSync))
    throw new E("Existing host bridge has different stateSync options; cannot reuse with onConflict: return-existing", "mismatch"); }
function Re(e, t) { if (typeof window > "u")
    return null; let r = window.__MFE_BRIDGE__; if (r === void 0)
    return null; if (t === "return-existing") {
    if (!P(r))
        throw new E("window.__MFE_BRIDGE__ is not a valid MfeBridgeHandle. Remove it, use onConflict: replace, or fix the page script that set it.", "invalid-global");
    return Se(r, e), r;
} if (t === "throw")
    throw P(r) ? new E("Host bridge already initialized. Dispose the existing handle, use onConflict: return-existing with matching options, or onConflict: replace.", "conflict") : new E("window.__MFE_BRIDGE__ is already set to an invalid value. Remove it or use onConflict: replace before initializing the host bridge.", "invalid-global"); return P(r) ? r.dispose() : delete window.__MFE_BRIDGE__, null; }
function De(e) { let t = e.onConflict ?? "throw"; if (typeof window < "u") {
    let p = Re(e, t);
    if (p)
        return p;
} let r; e.stateSync && (r = we(e.bus, e.stateSync)); let s = e.accessToken; function i(p) { if (s !== void 0 && !ve(s, p))
    throw new E("Access denied: a valid host bridge access token is required to use the bus.", "unauthorized"); } let a = M(b(M(b({ protocolVersion: Q, appId: e.appId, remotes: e.remotes }, e.stateSync ? { stateSync: e.stateSync } : {}), { getBus: p => (i(p), e.bus), tryPublish: (p, _) => { let c = p.correlationId ?? crypto.randomUUID(), d = new Date().toISOString(); try {
        i(_);
        let f = be(M(b({}, p), { correlationId: c })), y = e.bus.attemptPublish(f);
        return y.status === "dedupe" ? { accepted: !1, correlationId: f.correlationId, errorCode: "dedupe", message: "duplicate messageId", receivedAtUtc: d } : y.status === "rejected" ? { accepted: !1, correlationId: f.correlationId, errorCode: "delivery", message: "publish rejected", receivedAtUtc: d } : { accepted: !0, correlationId: f.correlationId, receivedAtUtc: d };
    }
    catch (f) {
        return ye(c, f);
    } } }), r ? { getSnapshot: p => r.getSnapshot(p) } : {}), { dispose: () => { r?.dispose(), typeof window < "u" && window.__MFE_BRIDGE__ === a && delete window.__MFE_BRIDGE__; } }); return typeof window < "u" && (window.__MFE_BRIDGE__ = a), a; }
export { K as a, ee as b, R as c, l as d, E as e, te as f, re as g, ie as h, oe as i, xe as j, we as k, Q as l, Be as m, P as n, De as o };
