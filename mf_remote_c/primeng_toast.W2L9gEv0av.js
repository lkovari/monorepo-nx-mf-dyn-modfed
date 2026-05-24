import { a as v } from "@nf-internal/chunk-T2UUZI2G";
import { J as g } from "@nf-internal/chunk-MIZIHZD3";
import { a as b } from "@nf-internal/chunk-3NBCSNB6";
import { a as u } from "@nf-internal/chunk-JKOY2XUY";
export * from "primeng/types/toast";
import * as l from "@angular/common";
import { CommonModule as C } from "@angular/common";
import * as t from "@angular/core";
import { InjectionToken as J, input as _, output as x, EventEmitter as I, inject as c, signal as w, effect as K, numberAttribute as d, computed as W, booleanAttribute as f } from "@angular/core";
import { SharedModule as p, MessageService as tt, PrimeTemplate as et } from "primeng/api";
import { BaseComponent as k, PARENT_INSTANCE as nt } from "primeng/basecomponent";
import * as A from "primeng/bind";
import { Bind as O } from "primeng/bind";
import { CheckIcon as ot, ExclamationTriangleIcon as st, InfoCircleIcon as it, TimesIcon as at, TimesCircleIcon as rt } from "primeng/icons";
import * as M from "primeng/motion";
import { MotionModule as lt } from "primeng/motion";
import { ZIndexUtils as h } from "primeng/utils";
var y = `
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;
import { BaseStyle as ct } from "primeng/base";
var E = (n, i) => ({ $implicit: n, closeFn: i }), S = n => ({ $implicit: n });
function B(n, i) { n & 1 && t.\u0275\u0275elementContainer(0); }
function D(n, i) { if (n & 1 && t.\u0275\u0275template(0, B, 1, 0, "ng-container", 3), n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngTemplateOutlet", e.headlessTemplate)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, E, e.message, e.onCloseIconClick));
} }
function N(n, i) { if (n & 1 && t.\u0275\u0275element(0, "span", 4), n & 2) {
    let e = t.\u0275\u0275nextContext(3);
    t.\u0275\u0275classMap(e.cn(e.cx("messageIcon"), e.message == null ? null : e.message.icon)), t.\u0275\u0275property("pBind", e.ptm("messageIcon"));
} }
function V(n, i) { if (n & 1 && (t.\u0275\u0275namespaceSVG(), t.\u0275\u0275element(0, "svg", 11)), n & 2) {
    let e = t.\u0275\u0275nextContext(4);
    t.\u0275\u0275classMap(e.cx("messageIcon")), t.\u0275\u0275property("pBind", e.ptm("messageIcon")), t.\u0275\u0275attribute("aria-hidden", !0);
} }
function F(n, i) { if (n & 1 && (t.\u0275\u0275namespaceSVG(), t.\u0275\u0275element(0, "svg", 12)), n & 2) {
    let e = t.\u0275\u0275nextContext(4);
    t.\u0275\u0275classMap(e.cx("messageIcon")), t.\u0275\u0275property("pBind", e.ptm("messageIcon")), t.\u0275\u0275attribute("aria-hidden", !0);
} }
function z(n, i) { if (n & 1 && (t.\u0275\u0275namespaceSVG(), t.\u0275\u0275element(0, "svg", 13)), n & 2) {
    let e = t.\u0275\u0275nextContext(4);
    t.\u0275\u0275classMap(e.cx("messageIcon")), t.\u0275\u0275property("pBind", e.ptm("messageIcon")), t.\u0275\u0275attribute("aria-hidden", !0);
} }
function P(n, i) { if (n & 1 && (t.\u0275\u0275namespaceSVG(), t.\u0275\u0275element(0, "svg", 14)), n & 2) {
    let e = t.\u0275\u0275nextContext(4);
    t.\u0275\u0275classMap(e.cx("messageIcon")), t.\u0275\u0275property("pBind", e.ptm("messageIcon")), t.\u0275\u0275attribute("aria-hidden", !0);
} }
function Z(n, i) { if (n & 1 && (t.\u0275\u0275namespaceSVG(), t.\u0275\u0275element(0, "svg", 12)), n & 2) {
    let e = t.\u0275\u0275nextContext(4);
    t.\u0275\u0275classMap(e.cx("messageIcon")), t.\u0275\u0275property("pBind", e.ptm("messageIcon")), t.\u0275\u0275attribute("aria-hidden", !0);
} }
function L(n, i) { if (n & 1 && t.\u0275\u0275conditionalCreate(0, V, 1, 4, ":svg:svg", 7)(1, F, 1, 4, ":svg:svg", 8)(2, z, 1, 4, ":svg:svg", 9)(3, P, 1, 4, ":svg:svg", 10)(4, Z, 1, 4, ":svg:svg", 8), n & 2) {
    let e, s = t.\u0275\u0275nextContext(3);
    t.\u0275\u0275conditional((e = s.message.severity) === "success" ? 0 : e === "info" ? 1 : e === "error" ? 2 : e === "warn" ? 3 : 4);
} }
function $(n, i) { if (n & 1 && (t.\u0275\u0275elementContainerStart(0), t.\u0275\u0275conditionalCreate(1, N, 1, 3, "span", 2)(2, L, 5, 1), t.\u0275\u0275elementStart(3, "div", 6)(4, "div", 6), t.\u0275\u0275text(5), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(6, "div", 6), t.\u0275\u0275text(7), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementContainerEnd()), n & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.message.icon ? 1 : 2), t.\u0275\u0275advance(2), t.\u0275\u0275property("pBind", e.ptm("messageText"))("ngClass", e.cx("messageText")), t.\u0275\u0275attribute("data-p", e.dataP), t.\u0275\u0275advance(), t.\u0275\u0275property("pBind", e.ptm("summary"))("ngClass", e.cx("summary")), t.\u0275\u0275attribute("data-p", e.dataP), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", e.message.summary, " "), t.\u0275\u0275advance(), t.\u0275\u0275property("pBind", e.ptm("detail"))("ngClass", e.cx("detail")), t.\u0275\u0275attribute("data-p", e.dataP), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.message.detail);
} }
function j(n, i) { n & 1 && t.\u0275\u0275elementContainer(0); }
function G(n, i) { if (n & 1 && t.\u0275\u0275element(0, "span", 4), n & 2) {
    let e = t.\u0275\u0275nextContext(4);
    t.\u0275\u0275classMap(e.cn(e.cx("closeIcon"), e.message == null ? null : e.message.closeIcon)), t.\u0275\u0275property("pBind", e.ptm("closeIcon"));
} }
function Q(n, i) { if (n & 1 && t.\u0275\u0275template(0, G, 1, 3, "span", 17), n & 2) {
    let e = t.\u0275\u0275nextContext(3);
    t.\u0275\u0275property("ngIf", e.message.closeIcon);
} }
function H(n, i) { if (n & 1 && (t.\u0275\u0275namespaceSVG(), t.\u0275\u0275element(0, "svg", 18)), n & 2) {
    let e = t.\u0275\u0275nextContext(3);
    t.\u0275\u0275classMap(e.cx("closeIcon")), t.\u0275\u0275property("pBind", e.ptm("closeIcon")), t.\u0275\u0275attribute("aria-hidden", !0);
} }
function R(n, i) { if (n & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div")(1, "button", 15), t.\u0275\u0275listener("click", function (o) { t.\u0275\u0275restoreView(e); let a = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(a.onCloseIconClick(o)); })("keydown.enter", function (o) { t.\u0275\u0275restoreView(e); let a = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(a.onCloseIconClick(o)); }), t.\u0275\u0275conditionalCreate(2, Q, 1, 1, "span", 2)(3, H, 1, 4, ":svg:svg", 16), t.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275advance(), t.\u0275\u0275property("pBind", e.ptm("closeButton")), t.\u0275\u0275attribute("class", e.cx("closeButton"))("aria-label", e.closeAriaLabel)("data-p", e.dataP), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.message.closeIcon ? 2 : 3);
} }
function q(n, i) { if (n & 1 && (t.\u0275\u0275elementStart(0, "div", 4), t.\u0275\u0275template(1, $, 8, 12, "ng-container", 5)(2, j, 1, 0, "ng-container", 3), t.\u0275\u0275conditionalCreate(3, R, 4, 5, "div"), t.\u0275\u0275elementEnd()), n & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classMap(e.cn(e.cx("messageContent"), e.message == null ? null : e.message.contentStyleClass)), t.\u0275\u0275property("pBind", e.ptm("messageContent")), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", !e.template), t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.template)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(7, S, e.message)), t.\u0275\u0275advance(), t.\u0275\u0275conditional((e.message == null ? null : e.message.closable) !== !1 ? 3 : -1);
} }
var Y = ["message"], X = ["headless"];
function U(n, i) { if (n & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "p-toastItem", 1), t.\u0275\u0275listener("onClose", function (o) { t.\u0275\u0275restoreView(e); let a = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(a.onMessageClose(o)); })("onAnimationEnd", function () { t.\u0275\u0275restoreView(e); let o = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(o.onAnimationEnd()); })("onAnimationStart", function () { t.\u0275\u0275restoreView(e); let o = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(o.onAnimationStart()); }), t.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = i.$implicit, s = i.index, o = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("message", e)("index", s)("life", o.life)("clearAll", o.clearAllTrigger())("template", o.template || o._template)("headlessTemplate", o.headlessTemplate || o._headlessTemplate)("pt", o.pt)("unstyled", o.unstyled())("motionOptions", o.computedMotionOptions());
} }
var dt = { root: ({ instance: n }) => { let { _position: i } = n; return { position: "fixed", top: i === "top-right" || i === "top-left" || i === "top-center" ? "20px" : i === "center" ? "50%" : null, right: (i === "top-right" || i === "bottom-right") && "20px", bottom: (i === "bottom-left" || i === "bottom-right" || i === "bottom-center") && "20px", left: i === "top-left" || i === "bottom-left" ? "20px" : i === "center" || i === "top-center" || i === "bottom-center" ? "50%" : null }; } }, pt = { root: ({ instance: n }) => ["p-toast p-component", `p-toast-${n._position}`], message: ({ instance: n }) => ({ "p-toast-message": !0, "p-toast-message-info": n.message.severity === "info" || n.message.severity === void 0, "p-toast-message-warn": n.message.severity === "warn", "p-toast-message-error": n.message.severity === "error", "p-toast-message-success": n.message.severity === "success", "p-toast-message-secondary": n.message.severity === "secondary", "p-toast-message-contrast": n.message.severity === "contrast" }), messageContent: "p-toast-message-content", messageIcon: ({ instance: n }) => ({ "p-toast-message-icon": !0, [`pi ${n.message.icon}`]: !!n.message.icon }), messageText: "p-toast-message-text", summary: "p-toast-summary", detail: "p-toast-detail", closeButton: "p-toast-close-button", closeIcon: ({ instance: n }) => ({ "p-toast-close-icon": !0, [`pi ${n.message.closeIcon}`]: !!n.message.closeIcon }) }, m = (() => { class n extends ct {
    name = "toast";
    style = y;
    classes = pt;
    inlineStyles = dt;
    static \u0275fac = (() => { let e; return function (o) { return (e || (e = t.\u0275\u0275getInheritedFactory(n)))(o || n); }; })();
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), mt = (function (n) { return n.root = "p-toast", n.message = "p-toast-message", n.messageContent = "p-toast-message-content", n.messageIcon = "p-toast-message-icon", n.messageText = "p-toast-message-text", n.summary = "p-toast-summary", n.detail = "p-toast-detail", n.closeButton = "p-toast-close-button", n.closeIcon = "p-toast-close-icon", n; })(mt || {}), T = new J("TOAST_INSTANCE"), ut = (() => { class n extends k {
    zone;
    message;
    index;
    life;
    template;
    headlessTemplate;
    showTransformOptions;
    hideTransformOptions;
    showTransitionOptions;
    hideTransitionOptions;
    motionOptions = _();
    clearAll = _(null);
    onAnimationStart = x();
    onAnimationEnd = x();
    onBeforeEnter(e) { this.onAnimationStart.emit(e.element); }
    onAfterLeave(e) { !this.visible() && !this.isDestroyed && (this.onClose.emit({ index: this.index, message: this.message }), this.isDestroyed || this.onAnimationEnd.emit(e.element)); }
    onClose = new I;
    _componentStyle = c(m);
    timeout;
    visible = w(void 0);
    isDestroyed = !1;
    isClosing = !1;
    constructor(e) { super(), this.zone = e, K(() => { this.clearAll() && this.visible.set(!1); }); }
    onAfterViewInit() { this.message?.sticky && this.visible.set(!0), this.initTimeout(); }
    initTimeout() { this.message?.sticky || (this.clearTimeout(), this.zone.runOutsideAngular(() => { this.visible.set(!0), this.timeout = setTimeout(() => { this.visible.set(!1); }, this.message?.life || this.life || 3e3); })); }
    clearTimeout() { this.timeout && (clearTimeout(this.timeout), this.timeout = null); }
    onMouseEnter() { this.clearTimeout(); }
    onMouseLeave() { this.isClosing || this.initTimeout(); }
    onCloseIconClick = e => { this.isClosing = !0, this.clearTimeout(), this.visible.set(!1), e.preventDefault(); };
    get closeAriaLabel() { return this.config.translation.aria ? this.config.translation.aria.close : void 0; }
    onDestroy() { this.isDestroyed = !0, this.clearTimeout(), this.visible.set(!1); }
    get dataP() { return this.cn({ [this.message?.severity]: this.message?.severity }); }
    static \u0275fac = function (s) { return new (s || n)(t.\u0275\u0275directiveInject(t.NgZone)); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["p-toastItem"]], inputs: { message: "message", index: [2, "index", "index", d], life: [2, "life", "life", d], template: "template", headlessTemplate: "headlessTemplate", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", motionOptions: [1, "motionOptions"], clearAll: [1, "clearAll"] }, outputs: { onAnimationStart: "onAnimationStart", onAnimationEnd: "onAnimationEnd", onClose: "onClose" }, features: [t.\u0275\u0275ProvidersFeature([m]), t.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 10, consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "mouseenter", "mouseleave", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "pBind"], [3, "pBind", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "check", 3, "pBind", "class"], ["data-p-icon", "info-circle", 3, "pBind", "class"], ["data-p-icon", "times-circle", 3, "pBind", "class"], ["data-p-icon", "exclamation-triangle", 3, "pBind", "class"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "info-circle", 3, "pBind"], ["data-p-icon", "times-circle", 3, "pBind"], ["data-p-icon", "exclamation-triangle", 3, "pBind"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], [3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "times", 3, "pBind"]], template: function (s, o) { s & 1 && (t.\u0275\u0275elementStart(0, "div", 1, 0), t.\u0275\u0275listener("pMotionOnBeforeEnter", function (r) { return o.onBeforeEnter(r); })("pMotionOnAfterLeave", function (r) { return o.onAfterLeave(r); })("mouseenter", function () { return o.onMouseEnter(); })("mouseleave", function () { return o.onMouseLeave(); }), t.\u0275\u0275conditionalCreate(2, D, 1, 5, "ng-container")(3, q, 4, 9, "div", 2), t.\u0275\u0275elementEnd()), s & 2 && (t.\u0275\u0275classMap(o.cn(o.cx("message"), o.message == null ? null : o.message.styleClass)), t.\u0275\u0275property("pMotion", o.visible())("pMotionAppear", !0)("pMotionName", "p-toast-message")("pMotionOptions", o.motionOptions())("pBind", o.ptm("message")), t.\u0275\u0275attribute("id", o.message == null ? null : o.message.id)("data-p", o.dataP), t.\u0275\u0275advance(2), t.\u0275\u0275conditional(o.headlessTemplate ? 2 : 3)); }, dependencies: [C, l.NgClass, l.NgIf, l.NgTemplateOutlet, ot, st, it, at, rt, p, O, lt, M.MotionDirective], encapsulation: 2, changeDetection: 0 });
} return n; })(), gt = (() => {
    class n extends k {
        componentName = "Toast";
        $pcToast = c(T, { optional: !0, skipSelf: !0 }) ?? void 0;
        bindDirectiveInstance = c(O, { self: !0 });
        onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
        key;
        autoZIndex = !0;
        baseZIndex = 0;
        life = 3e3;
        styleClass;
        get position() { return this._position; }
        set position(e) { this._position = e, this.cd.markForCheck(); }
        preventOpenDuplicates = !1;
        preventDuplicates = !1;
        showTransformOptions = "translateY(100%)";
        hideTransformOptions = "translateY(-100%)";
        showTransitionOptions = "300ms ease-out";
        hideTransitionOptions = "250ms ease-in";
        motionOptions = _(void 0);
        computedMotionOptions = W(() => u(u({}, this.ptm("motion")), this.motionOptions()));
        breakpoints;
        onClose = new I;
        template;
        headlessTemplate;
        messageSubscription;
        clearSubscription;
        messages;
        messagesArchieve;
        _position = "top-right";
        messageService = c(tt);
        _componentStyle = c(m);
        styleElement;
        id = v("pn_id_");
        templates;
        clearAllTrigger = w(null);
        constructor() { super(); }
        onInit() { this.messageSubscription = this.messageService.messageObserver.subscribe(e => { if (e)
            if (Array.isArray(e)) {
                let s = e.filter(o => this.canAdd(o));
                this.add(s);
            }
            else
                this.canAdd(e) && this.add([e]); }), this.clearSubscription = this.messageService.clearObserver.subscribe(e => { e ? this.key === e && this.clearAll() : this.clearAll(), this.cd.markForCheck(); }); }
        clearAll() { this.clearAllTrigger.set({}); }
        _template;
        _headlessTemplate;
        onAfterContentInit() { this.templates?.forEach(e => { switch (e.getType()) {
            case "message":
                this._template = e.template;
                break;
            case "headless":
                this._headlessTemplate = e.template;
                break;
            default:
                this._template = e.template;
                break;
        } }); }
        onAfterViewInit() { this.breakpoints && this.createStyle(); }
        add(e) { this.messages = this.messages ? [...this.messages, ...e] : [...e], this.preventDuplicates && (this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...e] : [...e]), this.cd.markForCheck(); }
        canAdd(e) { let s = this.key === e.key; return s && this.preventOpenDuplicates && (s = !this.containsMessage(this.messages, e)), s && this.preventDuplicates && (s = !this.containsMessage(this.messagesArchieve, e)), s; }
        containsMessage(e, s) { return e ? e.find(o => o.summary === s.summary && o.detail == s.detail && o.severity === s.severity) != null : !1; }
        onMessageClose(e) { this.messages?.splice(e.index, 1), this.onClose.emit({ message: e.message }), this.onAnimationEnd(), this.cd.detectChanges(); }
        onAnimationStart() { this.renderer.setAttribute(this.el?.nativeElement, this.id, ""), this.autoZIndex && this.el?.nativeElement.style.zIndex === "" && h.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal); }
        onAnimationEnd() { this.autoZIndex && b(this.messages) && h.clear(this.el?.nativeElement); }
        createStyle() {
            if (!this.styleElement) {
                this.styleElement = this.renderer.createElement("style"), this.styleElement.type = "text/css", g(this.styleElement, "nonce", this.config?.csp()?.nonce), this.renderer.appendChild(this.document.head, this.styleElement);
                let e = "";
                for (let s in this.breakpoints) {
                    let o = "";
                    for (let a in this.breakpoints[s])
                        o += a + ":" + this.breakpoints[s][a] + " !important;";
                    e += `
                    @media screen and (max-width: ${s}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `;
                }
                this.renderer.setProperty(this.styleElement, "innerHTML", e), g(this.styleElement, "nonce", this.config?.csp()?.nonce);
            }
        }
        destroyStyle() { this.styleElement && (this.renderer.removeChild(this.document.head, this.styleElement), this.styleElement = null); }
        onDestroy() { this.messageSubscription && this.messageSubscription.unsubscribe(), this.el && this.autoZIndex && h.clear(this.el.nativeElement), this.clearSubscription && this.clearSubscription.unsubscribe(), this.destroyStyle(); }
        get dataP() { return this.cn({ [this.position]: this.position }); }
        static \u0275fac = function (s) { return new (s || n); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: n, selectors: [["p-toast"]], contentQueries: function (s, o, a) { if (s & 1 && t.\u0275\u0275contentQuery(a, Y, 5)(a, X, 5)(a, et, 4), s & 2) {
                let r;
                t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (o.template = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (o.headlessTemplate = r.first), t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (o.templates = r);
            } }, hostVars: 5, hostBindings: function (s, o) { s & 2 && (t.\u0275\u0275attribute("data-p", o.dataP), t.\u0275\u0275styleMap(o.sx("root")), t.\u0275\u0275classMap(o.cn(o.cx("root"), o.styleClass))); }, inputs: { key: "key", autoZIndex: [2, "autoZIndex", "autoZIndex", f], baseZIndex: [2, "baseZIndex", "baseZIndex", d], life: [2, "life", "life", d], styleClass: "styleClass", position: "position", preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", f], preventDuplicates: [2, "preventDuplicates", "preventDuplicates", f], showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", motionOptions: [1, "motionOptions"], breakpoints: "breakpoints" }, outputs: { onClose: "onClose" }, features: [t.\u0275\u0275ProvidersFeature([m, { provide: T, useExisting: n }, { provide: nt, useExisting: n }]), t.\u0275\u0275HostDirectivesFeature([A.Bind]), t.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "onClose", "onAnimationEnd", "onAnimationStart", 4, "ngFor", "ngForOf"], [3, "onClose", "onAnimationEnd", "onAnimationStart", "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions"]], template: function (s, o) { s & 1 && t.\u0275\u0275template(0, U, 1, 9, "p-toastItem", 0), s & 2 && t.\u0275\u0275property("ngForOf", o.messages); }, dependencies: [C, l.NgForOf, ut, p], encapsulation: 2, changeDetection: 0 });
    }
    return n;
})(), Ft = (() => { class n {
    static \u0275fac = function (s) { return new (s || n); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [gt, p, p] });
} return n; })();
export { gt as Toast, mt as ToastClasses, ut as ToastItem, Ft as ToastModule, m as ToastStyle };
