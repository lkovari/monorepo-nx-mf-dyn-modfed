import { D as R, F as b, K as S, b as E, d as I, g as V } from "@nf-internal/chunk-MIZIHZD3";
import { t as F } from "@nf-internal/chunk-3NBCSNB6";
import { a as T, e as B } from "@nf-internal/chunk-JKOY2XUY";
import * as a from "@angular/core";
import { InjectionToken as J, inject as D, input as i, output as v, computed as K, signal as me, effect as $, afterRenderEffect as Q, untracked as X } from "@angular/core";
import { CommonModule as Ce } from "@angular/common";
var oe = Object.defineProperty, W = Object.getOwnPropertySymbols, ie = Object.prototype.hasOwnProperty, ae = Object.prototype.propertyIsEnumerable, q = (t, o, e) => o in t ? oe(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, U = (t, o) => { for (var e in o || (o = {}))
    ie.call(o, e) && q(t, e, o[e]); if (W)
    for (var e of W(o))
        ae.call(o, e) && q(t, e, o[e]); return t; }, se = (t, o, e) => new Promise((n, r) => { var s = l => { try {
    c(e.next(l));
}
catch (f) {
    r(f);
} }, u = l => { try {
    c(e.throw(l));
}
catch (f) {
    r(f);
} }, c = l => l.done ? n(l.value) : Promise.resolve(l.value).then(s, u); c((e = e.apply(t, o)).next()); }), L = "animation", g = "transition";
function re(t) { return t ? t.disabled || !!(t.safe && R()) : !1; }
function le(t, o) { return t ? U(U({}, t), Object.entries(o).reduce((e, [n, r]) => { var s; return e[n] = (s = t[n]) != null ? s : r, e; }, {})) : o; }
function de(t) { let { name: o, enterClass: e, leaveClass: n } = t || {}; return { enter: { from: e?.from || `${o}-enter-from`, to: e?.to || `${o}-enter-to`, active: e?.active || `${o}-enter-active` }, leave: { from: n?.from || `${o}-leave-from`, to: n?.to || `${o}-leave-to`, active: n?.active || `${o}-leave-active` } }; }
function ve(t) { return { enter: { onBefore: t?.onBeforeEnter, onStart: t?.onEnter, onAfter: t?.onAfterEnter, onCancelled: t?.onEnterCancelled }, leave: { onBefore: t?.onBeforeLeave, onStart: t?.onLeave, onAfter: t?.onAfterLeave, onCancelled: t?.onLeaveCancelled } }; }
function ue(t, o) { let e = window.getComputedStyle(t), n = p => { let M = e[`${p}Delay`], C = e[`${p}Duration`]; return [M.split(", ").map(F), C.split(", ").map(F)]; }, [r, s] = n(g), [u, c] = n(L), l = Math.max(...s.map((p, M) => p + r[M])), f = Math.max(...c.map((p, M) => p + u[M])), d, h = 0, m = 0; return o === g ? l > 0 && (d = g, h = l, m = s.length) : o === L ? f > 0 && (d = L, h = f, m = c.length) : (h = Math.max(l, f), d = h > 0 ? l > f ? g : L : void 0, m = d ? d === g ? s.length : c.length : 0), { type: d, timeout: h, count: m }; }
function A(t, o) { return typeof t == "number" ? t : typeof t == "object" && t[o] != null ? t[o] : null; }
function fe(t, o = !0, e = !1) { if (!o && !e)
    return; let n = V(t); o && S(t, "--pui-motion-height", n.height + "px"), e && S(t, "--pui-motion-width", n.width + "px"); }
var he = { name: "p", safe: !0, disabled: !1, enter: !0, leave: !0, autoHeight: !0, autoWidth: !1 };
function w(t, o) { if (!t)
    throw new Error("Element is required."); let e = {}, n = !1, r = {}, s = null, u = {}, c = d => { if (Object.assign(e, le(d, he)), !e.enter && !e.leave)
    throw new Error("Enter or leave must be true."); u = ve(e), n = re(e), r = de(e), s = null; }, l = d => se(null, null, function* () { s?.(); let { onBefore: h, onStart: m, onAfter: p, onCancelled: M } = u[d] || {}, C = { element: t }; if (n) {
    h?.(C), m?.(C), p?.(C);
    return;
} let { from: j, active: H, to: k } = r[d] || {}; return fe(t, e.autoHeight, e.autoWidth), h?.(C), E(t, j), E(t, H), t.offsetHeight, I(t, j), E(t, k), m?.(C), new Promise(P => { let te = A(e.duration, d), _ = () => { I(t, [k, H]), s = null; }, ne = () => { _(), p?.(C), P(); }; s = () => { _(), M?.(C), P(); }, ce(t, e.type, te, ne); }); }); c(o); let f = { enter: () => e.enter ? l("enter") : Promise.resolve(), leave: () => e.leave ? l("leave") : Promise.resolve(), cancel: () => { s?.(), s = null; }, update: (d, h) => { if (!d)
        throw new Error("Element is required."); t = d, f.cancel(), c(h); } }; return e.appear && f.enter(), f; }
var pe = 0;
function ce(t, o, e, n) { let r = t._motionEndId = ++pe, s = () => { r === t._motionEndId && n(); }; if (e != null)
    return setTimeout(s, e); let { type: u, timeout: c, count: l } = ue(t, o); if (!u) {
    n();
    return;
} let f = u + "end", d = 0, h = () => { t.removeEventListener(f, m, !0), s(); }, m = p => { p.target === t && ++d >= l && h(); }; t.addEventListener(f, m, { capture: !0, once: !0 }), setTimeout(() => { d < l && h(); }, c + 1); }
import { BaseComponent as Y, PARENT_INSTANCE as Z } from "primeng/basecomponent";
import * as ee from "primeng/bind";
import { Bind as Me, BindModule as ge } from "primeng/bind";
import { BaseStyle as ye } from "primeng/base";
var Ee = ["*"];
function be(t, o) { t & 1 && a.\u0275\u0275projection(0); }
var N = new WeakMap;
function y(t, o) { if (t)
    switch (N.has(t) || N.set(t, { display: t.style.display, visibility: t.style.visibility, maxHeight: t.style.maxHeight, overflow: t.style.overflow }), o) {
        case "display":
            t.style.display = "none";
            break;
        case "visibility":
            t.style.visibility = "hidden", t.style.maxHeight = "0", t.style.overflow = "hidden";
            break;
    } }
function O(t, o) { if (!t)
    return; let e = N.get(t) ?? t.style; switch (o) {
    case "display":
        t.style.display = e?.display || "";
        break;
    case "visibility":
        t.style.visibility = e?.visibility || "", t.style.maxHeight = e?.maxHeight || "", t.style.overflow = e?.overflow || "";
        break;
} N.delete(t); }
var Le = `
    .p-motion {
        display: block;
    }
`, Ae = { root: "p-motion" }, x = (() => { class t extends ye {
    name = "motion";
    style = Le;
    classes = Ae;
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = a.\u0275\u0275getInheritedFactory(t)))(r || t); }; })();
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
var z = new J("MOTION_INSTANCE"), De = (() => { class t extends Y {
    $pcMotion = D(z, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = D(Me, { self: !0 });
    onAfterViewChecked() { let n = this.options()?.root || {}; this.bindDirectiveInstance.setAttrs(T(T({}, this.ptms(["host", "root"])), n)); }
    _componentStyle = D(x);
    visible = i(!1);
    mountOnEnter = i(!0);
    unmountOnLeave = i(!0);
    name = i(void 0);
    type = i(void 0);
    safe = i(void 0);
    disabled = i(!1);
    appear = i(!1);
    enter = i(!0);
    leave = i(!0);
    duration = i(void 0);
    hideStrategy = i("display");
    enterFromClass = i(void 0);
    enterToClass = i(void 0);
    enterActiveClass = i(void 0);
    leaveFromClass = i(void 0);
    leaveToClass = i(void 0);
    leaveActiveClass = i(void 0);
    options = i({});
    onBeforeEnter = v();
    onEnter = v();
    onAfterEnter = v();
    onEnterCancelled = v();
    onBeforeLeave = v();
    onLeave = v();
    onAfterLeave = v();
    onLeaveCancelled = v();
    motionOptions = K(() => { let e = this.options(); return { name: e.name ?? this.name(), type: e.type ?? this.type(), safe: e.safe ?? this.safe(), disabled: e.disabled ?? this.disabled(), appear: !1, enter: e.enter ?? this.enter(), leave: e.leave ?? this.leave(), duration: e.duration ?? this.duration(), enterClass: { from: e.enterClass?.from ?? (e.name ? void 0 : this.enterFromClass()), to: e.enterClass?.to ?? (e.name ? void 0 : this.enterToClass()), active: e.enterClass?.active ?? (e.name ? void 0 : this.enterActiveClass()) }, leaveClass: { from: e.leaveClass?.from ?? (e.name ? void 0 : this.leaveFromClass()), to: e.leaveClass?.to ?? (e.name ? void 0 : this.leaveToClass()), active: e.leaveClass?.active ?? (e.name ? void 0 : this.leaveActiveClass()) }, onBeforeEnter: e.onBeforeEnter ?? this.handleBeforeEnter, onEnter: e.onEnter ?? this.handleEnter, onAfterEnter: e.onAfterEnter ?? this.handleAfterEnter, onEnterCancelled: e.onEnterCancelled ?? this.handleEnterCancelled, onBeforeLeave: e.onBeforeLeave ?? this.handleBeforeLeave, onLeave: e.onLeave ?? this.handleLeave, onAfterLeave: e.onAfterLeave ?? this.handleAfterLeave, onLeaveCancelled: e.onLeaveCancelled ?? this.handleLeaveCancelled }; });
    motion;
    isInitialMount = !0;
    cancelled = !1;
    destroyed = !1;
    rendered = me(!1);
    handleBeforeEnter = e => !this.destroyed && this.onBeforeEnter.emit(e);
    handleEnter = e => !this.destroyed && this.onEnter.emit(e);
    handleAfterEnter = e => !this.destroyed && this.onAfterEnter.emit(e);
    handleEnterCancelled = e => !this.destroyed && this.onEnterCancelled.emit(e);
    handleBeforeLeave = e => !this.destroyed && this.onBeforeLeave.emit(e);
    handleLeave = e => !this.destroyed && this.onLeave.emit(e);
    handleAfterLeave = e => !this.destroyed && this.onAfterLeave.emit(e);
    handleLeaveCancelled = e => !this.destroyed && this.onLeaveCancelled.emit(e);
    constructor() { super(), $(() => { let e = this.hideStrategy(); this.isInitialMount ? (y(this.$el, e), this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter())) : this.visible() && !this.rendered() && (y(this.$el, e), this.rendered.set(!0)); }), $(() => { this.motion || (this.motion = w(this.$el, this.motionOptions())); }), Q(() => B(this, null, function* () { if (!this.$el)
        return; let e = this.isInitialMount && this.visible() && this.appear(), n = this.hideStrategy(); this.visible() ? (yield b(), O(this.$el, n), (e || !this.isInitialMount) && (this.applyMotionDuration("enter"), this.motion?.enter())) : this.isInitialMount || (yield b(), this.applyMotionDuration("leave"), this.motion?.leave()?.then(() => B(this, null, function* () { this.$el && !this.cancelled && !this.visible() && (y(this.$el, n), this.unmountOnLeave() && (yield b(), this.cancelled || this.rendered.set(!1))); }))), this.isInitialMount = !1; })); }
    applyMotionDuration(e) { let n = X(this.motionOptions), r = A(n.duration, e); if (r == null || !this.$el)
        return; let s = this.$el, u = `${r}ms`; n.type === "transition" ? s.style.transitionDuration = u : s.style.animationDuration = u; }
    onDestroy() { this.destroyed = !0, this.cancelled = !0, this.motion?.cancel(), this.motion = void 0, O(this.$el, this.hideStrategy()), this.$el?.remove(), this.isInitialMount = !0; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275cmp = a.\u0275\u0275defineComponent({ type: t, selectors: [["p-motion"]], hostVars: 2, hostBindings: function (n, r) { n & 2 && a.\u0275\u0275classMap(r.cx("root")); }, inputs: { visible: [1, "visible"], mountOnEnter: [1, "mountOnEnter"], unmountOnLeave: [1, "unmountOnLeave"], name: [1, "name"], type: [1, "type"], safe: [1, "safe"], disabled: [1, "disabled"], appear: [1, "appear"], enter: [1, "enter"], leave: [1, "leave"], duration: [1, "duration"], hideStrategy: [1, "hideStrategy"], enterFromClass: [1, "enterFromClass"], enterToClass: [1, "enterToClass"], enterActiveClass: [1, "enterActiveClass"], leaveFromClass: [1, "leaveFromClass"], leaveToClass: [1, "leaveToClass"], leaveActiveClass: [1, "leaveActiveClass"], options: [1, "options"] }, outputs: { onBeforeEnter: "onBeforeEnter", onEnter: "onEnter", onAfterEnter: "onAfterEnter", onEnterCancelled: "onEnterCancelled", onBeforeLeave: "onBeforeLeave", onLeave: "onLeave", onAfterLeave: "onAfterLeave", onLeaveCancelled: "onLeaveCancelled" }, features: [a.\u0275\u0275ProvidersFeature([x, { provide: z, useExisting: t }, { provide: Z, useExisting: t }]), a.\u0275\u0275HostDirectivesFeature([ee.Bind]), a.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Ee, decls: 1, vars: 1, template: function (n, r) { n & 1 && (a.\u0275\u0275projectionDef(), a.\u0275\u0275conditionalCreate(0, be, 1, 0)), n & 2 && a.\u0275\u0275conditional(r.rendered() ? 0 : -1); }, dependencies: [Ce, ge], encapsulation: 2 });
} return t; })(), G = new J("MOTION_DIRECTIVE_INSTANCE"), _e = (() => { class t extends Y {
    $pcMotionDirective = D(G, { optional: !0, skipSelf: !0 }) ?? void 0;
    visible = i(!1, { alias: "pMotion" });
    name = i(void 0, { alias: "pMotionName" });
    type = i(void 0, { alias: "pMotionType" });
    safe = i(void 0, { alias: "pMotionSafe" });
    disabled = i(!1, { alias: "pMotionDisabled" });
    appear = i(!1, { alias: "pMotionAppear" });
    enter = i(!0, { alias: "pMotionEnter" });
    leave = i(!0, { alias: "pMotionLeave" });
    duration = i(void 0, { alias: "pMotionDuration" });
    hideStrategy = i("display", { alias: "pMotionHideStrategy" });
    enterFromClass = i(void 0, { alias: "pMotionEnterFromClass" });
    enterToClass = i(void 0, { alias: "pMotionEnterToClass" });
    enterActiveClass = i(void 0, { alias: "pMotionEnterActiveClass" });
    leaveFromClass = i(void 0, { alias: "pMotionLeaveFromClass" });
    leaveToClass = i(void 0, { alias: "pMotionLeaveToClass" });
    leaveActiveClass = i(void 0, { alias: "pMotionLeaveActiveClass" });
    options = i({}, { alias: "pMotionOptions" });
    onBeforeEnter = v({ alias: "pMotionOnBeforeEnter" });
    onEnter = v({ alias: "pMotionOnEnter" });
    onAfterEnter = v({ alias: "pMotionOnAfterEnter" });
    onEnterCancelled = v({ alias: "pMotionOnEnterCancelled" });
    onBeforeLeave = v({ alias: "pMotionOnBeforeLeave" });
    onLeave = v({ alias: "pMotionOnLeave" });
    onAfterLeave = v({ alias: "pMotionOnAfterLeave" });
    onLeaveCancelled = v({ alias: "pMotionOnLeaveCancelled" });
    motionOptions = K(() => { let e = this.options() ?? {}; return { name: e.name ?? this.name(), type: e.type ?? this.type(), safe: e.safe ?? this.safe(), disabled: e.disabled ?? this.disabled(), appear: !1, enter: e.enter ?? this.enter(), leave: e.leave ?? this.leave(), duration: e.duration ?? this.duration(), enterClass: { from: e.enterClass?.from ?? (e.name ? void 0 : this.enterFromClass()), to: e.enterClass?.to ?? (e.name ? void 0 : this.enterToClass()), active: e.enterClass?.active ?? (e.name ? void 0 : this.enterActiveClass()) }, leaveClass: { from: e.leaveClass?.from ?? (e.name ? void 0 : this.leaveFromClass()), to: e.leaveClass?.to ?? (e.name ? void 0 : this.leaveToClass()), active: e.leaveClass?.active ?? (e.name ? void 0 : this.leaveActiveClass()) }, onBeforeEnter: e.onBeforeEnter ?? this.handleBeforeEnter, onEnter: e.onEnter ?? this.handleEnter, onAfterEnter: e.onAfterEnter ?? this.handleAfterEnter, onEnterCancelled: e.onEnterCancelled ?? this.handleEnterCancelled, onBeforeLeave: e.onBeforeLeave ?? this.handleBeforeLeave, onLeave: e.onLeave ?? this.handleLeave, onAfterLeave: e.onAfterLeave ?? this.handleAfterLeave, onLeaveCancelled: e.onLeaveCancelled ?? this.handleLeaveCancelled }; });
    motion;
    isInitialMount = !0;
    cancelled = !1;
    destroyed = !1;
    handleBeforeEnter = e => !this.destroyed && this.onBeforeEnter.emit(e);
    handleEnter = e => !this.destroyed && this.onEnter.emit(e);
    handleAfterEnter = e => !this.destroyed && this.onAfterEnter.emit(e);
    handleEnterCancelled = e => !this.destroyed && this.onEnterCancelled.emit(e);
    handleBeforeLeave = e => !this.destroyed && this.onBeforeLeave.emit(e);
    handleLeave = e => !this.destroyed && this.onLeave.emit(e);
    handleAfterLeave = e => !this.destroyed && this.onAfterLeave.emit(e);
    handleLeaveCancelled = e => !this.destroyed && this.onLeaveCancelled.emit(e);
    constructor() { super(), $(() => { this.motion || (this.motion = w(this.$el, this.motionOptions())); }), Q(() => { if (!this.$el)
        return; let e = this.isInitialMount && this.visible() && this.appear(), n = this.hideStrategy(); this.visible() ? (O(this.$el, n), (e || !this.isInitialMount) && (this.applyMotionDuration("enter"), this.motion?.enter())) : this.isInitialMount ? y(this.$el, n) : (this.applyMotionDuration("leave"), this.motion?.leave()?.then(() => { this.$el && !this.cancelled && !this.visible() && y(this.$el, n); })), this.isInitialMount = !1; }); }
    applyMotionDuration(e) { let n = X(this.motionOptions), r = A(n.duration, e); if (r == null || !this.$el)
        return; let s = this.$el, u = `${r}ms`; n.type === "transition" ? s.style.transitionDuration = u : s.style.animationDuration = u; }
    onDestroy() { this.destroyed = !0, this.cancelled = !0, this.motion?.cancel(), this.motion = void 0, O(this.$el, this.hideStrategy()), this.$el?.remove(), this.isInitialMount = !0; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "pMotion", ""]], inputs: { visible: [1, "pMotion", "visible"], name: [1, "pMotionName", "name"], type: [1, "pMotionType", "type"], safe: [1, "pMotionSafe", "safe"], disabled: [1, "pMotionDisabled", "disabled"], appear: [1, "pMotionAppear", "appear"], enter: [1, "pMotionEnter", "enter"], leave: [1, "pMotionLeave", "leave"], duration: [1, "pMotionDuration", "duration"], hideStrategy: [1, "pMotionHideStrategy", "hideStrategy"], enterFromClass: [1, "pMotionEnterFromClass", "enterFromClass"], enterToClass: [1, "pMotionEnterToClass", "enterToClass"], enterActiveClass: [1, "pMotionEnterActiveClass", "enterActiveClass"], leaveFromClass: [1, "pMotionLeaveFromClass", "leaveFromClass"], leaveToClass: [1, "pMotionLeaveToClass", "leaveToClass"], leaveActiveClass: [1, "pMotionLeaveActiveClass", "leaveActiveClass"], options: [1, "pMotionOptions", "options"] }, outputs: { onBeforeEnter: "pMotionOnBeforeEnter", onEnter: "pMotionOnEnter", onAfterEnter: "pMotionOnAfterEnter", onEnterCancelled: "pMotionOnEnterCancelled", onBeforeLeave: "pMotionOnBeforeLeave", onLeave: "pMotionOnLeave", onAfterLeave: "pMotionOnAfterLeave", onLeaveCancelled: "pMotionOnLeaveCancelled" }, features: [a.\u0275\u0275ProvidersFeature([x, { provide: G, useExisting: t }, { provide: Z, useExisting: t }]), a.\u0275\u0275InheritDefinitionFeature] });
} return t; })(), Ve = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = a.\u0275\u0275defineInjector({ imports: [De] });
} return t; })();
export { De as Motion, _e as MotionDirective, Ve as MotionModule };
