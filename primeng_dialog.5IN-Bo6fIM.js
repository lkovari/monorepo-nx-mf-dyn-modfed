import { a as I } from "@nf-internal/chunk-T2UUZI2G";
import { A as C, J as D, a as O, d as v, h as T, l as z, m as w, p as B } from "@nf-internal/chunk-MIZIHZD3";
import { a as h } from "@nf-internal/chunk-JKOY2XUY";
export * from "primeng/types/dialog";
import * as c from "@angular/common";
import { isPlatformBrowser as Oe, CommonModule as Be } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as Ae, inject as x, input as M, computed as k, EventEmitter as u, signal as E, NgZone as Ve, booleanAttribute as r, numberAttribute as L } from "@angular/core";
import { TranslationKeys as R, OverlayService as Pe, SharedModule as S, PrimeTemplate as Re } from "primeng/api";
import { BaseComponent as Ne, PARENT_INSTANCE as Fe } from "primeng/basecomponent";
import * as $ from "primeng/bind";
import { Bind as N } from "primeng/bind";
import { Button as He } from "primeng/button";
import { DomHandler as Xe, blockBodyScroll as F, unblockBodyScroll as H } from "primeng/dom";
import { FocusTrap as Ye } from "primeng/focustrap";
import { TimesIcon as $e, WindowMaximizeIcon as Qe, WindowMinimizeIcon as Ze } from "primeng/icons";
import * as Q from "primeng/motion";
import { MotionModule as je } from "primeng/motion";
import { ZIndexUtils as b } from "primeng/utils";
var A = `
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
        will-change: transform;
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 1rem;
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;
import { BaseStyle as qe } from "primeng/base";
var Z = ["header"], V = ["content"], P = ["footer"], j = ["closeicon"], q = ["maximizeicon"], G = ["minimizeicon"], W = ["headless"], K = ["titlebar"], U = ["*", [["p-footer"]]], J = ["*", "p-footer"], ee = i => ({ ariaLabelledBy: i });
function te(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function ie(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, te, 1, 0, "ng-container", 11), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t._headlessTemplate || t.headlessTemplate || t.headlessT);
} }
function ne(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 16), e.\u0275\u0275listener("mousedown", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4); return e.\u0275\u0275resetView(a.initResize(o)); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275classMap(t.cx("resizeHandle")), e.\u0275\u0275styleProp("z-index", 90), e.\u0275\u0275property("pBind", t.ptm("resizeHandle"));
} }
function oe(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 21), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(5);
    e.\u0275\u0275classMap(t.cx("title")), e.\u0275\u0275property("id", t.ariaLabelledBy)("pBind", t.ptm("title")), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.header);
} }
function ae(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function se(i, s) { if (i & 1 && e.\u0275\u0275element(0, "span", 25), i & 2) {
    let t = e.\u0275\u0275nextContext(7);
    e.\u0275\u0275property("ngClass", t.maximized ? t.minimizeIcon : t.maximizeIcon);
} }
function le(i, s) { i & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 28)); }
function re(i, s) { i & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 29)); }
function de(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, le, 1, 0, "svg", 26)(2, re, 1, 0, "svg", 27), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(7);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.maximized && !t._maximizeiconTemplate && !t.maximizeIconTemplate && !t.maximizeIconT), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.maximized && !t._minimizeiconTemplate && !t.minimizeIconTemplate && !t.minimizeIconT);
} }
function pe(i, s) { }
function ce(i, s) { i & 1 && e.\u0275\u0275template(0, pe, 0, 0, "ng-template"); }
function me(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, ce, 1, 0, null, 11), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(7);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t._maximizeiconTemplate || t.maximizeIconTemplate || t.maximizeIconT);
} }
function _e(i, s) { }
function ge(i, s) { i & 1 && e.\u0275\u0275template(0, _e, 0, 0, "ng-template"); }
function he(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, ge, 1, 0, null, 11), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(7);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t._minimizeiconTemplate || t.minimizeIconTemplate || t.minimizeIconT);
} }
function ue(i, s) { if (i & 1 && e.\u0275\u0275template(0, se, 1, 1, "span", 23)(1, de, 3, 2, "ng-container", 24)(2, me, 2, 1, "ng-container", 24)(3, he, 2, 1, "ng-container", 24), i & 2) {
    let t = e.\u0275\u0275nextContext(6);
    e.\u0275\u0275property("ngIf", t.maximizeIcon && !t._maximizeiconTemplate && !t._minimizeiconTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.maximizeIcon && !(t.maximizeButtonProps != null && t.maximizeButtonProps.icon)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.maximized), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.maximized);
} }
function fe(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "p-button", 22), e.\u0275\u0275listener("onClick", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(5); return e.\u0275\u0275resetView(o.maximize()); })("keydown.enter", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(5); return e.\u0275\u0275resetView(o.maximize()); }), e.\u0275\u0275template(1, ue, 4, 4, "ng-template", null, 4, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(5);
    e.\u0275\u0275property("pt", t.ptm("pcMaximizeButton"))("styleClass", t.cx("pcMaximizeButton"))("ariaLabel", t.maximized ? t.minimizeLabel : t.maximizeLabel)("tabindex", t.maximizable ? "0" : "-1")("buttonProps", t.maximizeButtonProps)("unstyled", t.unstyled()), e.\u0275\u0275attribute("data-pc-group-section", "headericon");
} }
function xe(i, s) { if (i & 1 && e.\u0275\u0275element(0, "span"), i & 2) {
    let t = e.\u0275\u0275nextContext(8);
    e.\u0275\u0275classMap(t.closeIcon);
} }
function be(i, s) { i & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 32)); }
function ye(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, xe, 1, 2, "span", 30)(2, be, 1, 0, "svg", 31), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(7);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.closeIcon), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.closeIcon);
} }
function Ce(i, s) { }
function ve(i, s) { i & 1 && e.\u0275\u0275template(0, Ce, 0, 0, "ng-template"); }
function Te(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275template(1, ve, 1, 0, null, 11), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(7);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t._closeiconTemplate || t.closeIconTemplate || t.closeIconT);
} }
function ze(i, s) { if (i & 1 && e.\u0275\u0275template(0, ye, 3, 2, "ng-container", 24)(1, Te, 2, 1, "span", 24), i & 2) {
    let t = e.\u0275\u0275nextContext(6);
    e.\u0275\u0275property("ngIf", !t._closeiconTemplate && !t.closeIconTemplate && !t.closeIconT && !(t.closeButtonProps != null && t.closeButtonProps.icon)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t._closeiconTemplate || t.closeIconTemplate || t.closeIconT);
} }
function we(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "p-button", 22), e.\u0275\u0275listener("onClick", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(5); return e.\u0275\u0275resetView(a.close(o)); })("keydown.enter", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(5); return e.\u0275\u0275resetView(a.close(o)); }), e.\u0275\u0275template(1, ze, 2, 2, "ng-template", null, 4, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(5);
    e.\u0275\u0275property("pt", t.ptm("pcCloseButton"))("styleClass", t.cx("pcCloseButton"))("ariaLabel", t.closeAriaLabel)("tabindex", t.closeTabindex)("buttonProps", t.closeButtonProps)("unstyled", t.unstyled()), e.\u0275\u0275attribute("data-pc-group-section", "headericon");
} }
function De(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 16, 3), e.\u0275\u0275listener("mousedown", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4); return e.\u0275\u0275resetView(a.initDrag(o)); }), e.\u0275\u0275template(2, oe, 2, 5, "span", 17)(3, ae, 1, 0, "ng-container", 18), e.\u0275\u0275elementStart(4, "div", 19), e.\u0275\u0275template(5, fe, 3, 7, "p-button", 20)(6, we, 3, 7, "p-button", 20), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275classMap(t.cx("header")), e.\u0275\u0275property("pBind", t.ptm("header")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", !t._headerTemplate && !t.headerTemplate && !t.headerT), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t._headerTemplate || t.headerTemplate || t.headerT)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(11, ee, t.ariaLabelledBy)), e.\u0275\u0275advance(), e.\u0275\u0275classMap(t.cx("headerActions")), e.\u0275\u0275property("pBind", t.ptm("headerActions")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.maximizable), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.closable);
} }
function Ie(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function Me(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function ke(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 19, 5), e.\u0275\u0275projection(2, 1), e.\u0275\u0275template(3, Me, 1, 0, "ng-container", 11), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275classMap(t.cx("footer")), e.\u0275\u0275property("pBind", t.ptm("footer")), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngTemplateOutlet", t._footerTemplate || t.footerTemplate || t.footerT);
} }
function Ee(i, s) { if (i & 1 && (e.\u0275\u0275template(0, ne, 1, 5, "div", 12)(1, De, 7, 13, "div", 13), e.\u0275\u0275elementStart(2, "div", 14, 2), e.\u0275\u0275projection(4), e.\u0275\u0275template(5, Ie, 1, 0, "ng-container", 11), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(6, ke, 4, 4, "div", 15)), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275property("ngIf", t.resizable), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.showHeader), e.\u0275\u0275advance(), e.\u0275\u0275classMap(t.cn(t.cx("content"), t.contentStyleClass)), e.\u0275\u0275property("ngStyle", t.contentStyle)("pBind", t.ptm("content")), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngTemplateOutlet", t._contentTemplate || t.contentTemplate || t.contentT), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t._footerTemplate || t.footerTemplate || t.footerT);
} }
function Le(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 9, 0), e.\u0275\u0275listener("pMotionOnBeforeEnter", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.onBeforeEnter(o)); })("pMotionOnAfterEnter", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.onAfterEnter(o)); })("pMotionOnBeforeLeave", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.onBeforeLeave(o)); })("pMotionOnAfterLeave", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.onAfterLeave(o)); }), e.\u0275\u0275template(2, ie, 2, 1, "ng-container", 10)(3, Ee, 7, 8, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275reference(4), n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275styleMap(n.sx("root")), e.\u0275\u0275classMap(n.cn(n.cx("root"), n.styleClass)), e.\u0275\u0275property("ngStyle", n.style)("pBind", n.ptm("root"))("pFocusTrapDisabled", n.focusTrap === !1)("pMotion", n.visible)("pMotionAppear", !0)("pMotionName", "p-dialog")("pMotionOptions", n.computedMotionOptions()), e.\u0275\u0275attribute("role", n.role)("aria-labelledby", n.ariaLabelledBy)("aria-modal", !0)("data-p", n.dataP), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", n._headlessTemplate || n.headlessTemplate || n.headlessT)("ngIfElse", t);
} }
function Se(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 7), e.\u0275\u0275listener("pMotionOnAfterLeave", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o.onMaskAfterLeave()); }), e.\u0275\u0275conditionalCreate(1, Le, 5, 17, "div", 8), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275styleMap(t.sx("mask")), e.\u0275\u0275classMap(t.cn(t.cx("mask"), t.maskStyleClass)), e.\u0275\u0275property("ngStyle", t.maskStyle)("pBind", t.ptm("mask"))("pMotion", t.maskVisible)("pMotionAppear", !0)("pMotionEnterActiveClass", t.modal ? "p-overlay-mask-enter-active" : "")("pMotionLeaveActiveClass", t.modal ? "p-overlay-mask-leave-active" : "")("pMotionOptions", t.computedMaskMotionOptions()), e.\u0275\u0275attribute("data-p-scrollblocker-active", t.modal || t.blockScroll)("data-p", t.dataP), e.\u0275\u0275advance(), e.\u0275\u0275conditional(t.renderDialog() ? 1 : -1);
} }
var Ge = { mask: ({ instance: i }) => ({ position: "fixed", height: "100%", width: "100%", left: 0, top: 0, display: "flex", justifyContent: i.position === "left" || i.position === "topleft" || i.position === "bottomleft" ? "flex-start" : i.position === "right" || i.position === "topright" || i.position === "bottomright" ? "flex-end" : "center", alignItems: i.position === "top" || i.position === "topleft" || i.position === "topright" ? "flex-start" : i.position === "bottom" || i.position === "bottomleft" || i.position === "bottomright" ? "flex-end" : "center", pointerEvents: i.modal ? "auto" : "none" }), root: { display: "flex", flexDirection: "column", pointerEvents: "auto" } }, We = { mask: ({ instance: i }) => { let t = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"].find(n => n === i.position); return ["p-dialog-mask", { "p-overlay-mask": i.modal }, t ? `p-dialog-${t}` : ""]; }, root: ({ instance: i }) => ["p-dialog p-component", { "p-dialog-maximized": i.maximizable && i.maximized }], header: "p-dialog-header", title: "p-dialog-title", resizeHandle: "p-resizable-handle", headerActions: "p-dialog-header-actions", pcMaximizeButton: "p-dialog-maximize-button", pcCloseButton: "p-dialog-close-button", content: () => ["p-dialog-content"], footer: "p-dialog-footer" }, X = (() => { class i extends qe {
    name = "dialog";
    style = A;
    classes = We;
    inlineStyles = Ge;
    static \u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac });
} return i; })(), Ke = (function (i) { return i.mask = "p-dialog-mask", i.root = "p-dialog", i.header = "p-dialog-header", i.title = "p-dialog-title", i.headerActions = "p-dialog-header-actions", i.pcMaximizeButton = "p-dialog-maximize-button", i.pcCloseButton = "p-dialog-close-button", i.content = "p-dialog-content", i.footer = "p-dialog-footer", i; })(Ke || {}), Y = new Ae("DIALOG_INSTANCE"), Ue = (() => {
    class i extends Ne {
        componentName = "Dialog";
        hostName = "";
        $pcDialog = x(Y, { optional: !0, skipSelf: !0 }) ?? void 0;
        bindDirectiveInstance = x(N, { self: !0 });
        onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptm("host")); }
        header;
        draggable = !0;
        resizable = !0;
        contentStyle;
        contentStyleClass;
        modal = !1;
        closeOnEscape = !0;
        dismissableMask = !1;
        rtl = !1;
        closable = !0;
        breakpoints;
        styleClass;
        maskStyleClass;
        maskStyle;
        showHeader = !0;
        blockScroll = !1;
        autoZIndex = !0;
        baseZIndex = 0;
        minX = 0;
        minY = 0;
        focusOnShow = !0;
        maximizable = !1;
        keepInViewport = !0;
        focusTrap = !0;
        transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
        maskMotionOptions = M(void 0);
        computedMaskMotionOptions = k(() => h(h({}, this.ptm("maskMotion")), this.maskMotionOptions()));
        motionOptions = M(void 0);
        computedMotionOptions = k(() => h(h({}, this.ptm("motion")), this.motionOptions()));
        closeIcon;
        closeAriaLabel;
        closeTabindex = "0";
        minimizeIcon;
        maximizeIcon;
        closeButtonProps = { severity: "secondary", variant: "text", rounded: !0 };
        maximizeButtonProps = { severity: "secondary", variant: "text", rounded: !0 };
        get visible() { return this._visible; }
        set visible(t) { this._visible = t, this._visible && !this.maskVisible && (this.maskVisible = !0, this.renderMask.set(!0), this.renderDialog.set(!0)); }
        get style() { return this._style; }
        set style(t) { t && (this._style = h({}, t), this.originalStyle = t); }
        position;
        role = "dialog";
        appendTo = M(void 0);
        onShow = new u;
        onHide = new u;
        visibleChange = new u;
        onResizeInit = new u;
        onResizeEnd = new u;
        onDragEnd = new u;
        onMaximize = new u;
        headerViewChild;
        contentViewChild;
        footerViewChild;
        headerTemplate;
        contentTemplate;
        footerTemplate;
        closeIconTemplate;
        maximizeIconTemplate;
        minimizeIconTemplate;
        headlessTemplate;
        _headerTemplate;
        _contentTemplate;
        _footerTemplate;
        _closeiconTemplate;
        _maximizeiconTemplate;
        _minimizeiconTemplate;
        _headlessTemplate;
        $appendTo = k(() => this.appendTo() || this.config.overlayAppendTo());
        renderMask = E(!1);
        renderDialog = E(!1);
        _visible = !1;
        maskVisible;
        container = E(null);
        wrapper;
        dragging;
        ariaLabelledBy = this.getAriaLabelledBy();
        documentDragListener;
        documentDragEndListener;
        resizing;
        documentResizeListener;
        documentResizeEndListener;
        documentEscapeListener;
        maskClickListener;
        lastPageX;
        lastPageY;
        preventVisibleChangePropagation;
        maximized;
        preMaximizeContentHeight;
        preMaximizeContainerWidth;
        preMaximizeContainerHeight;
        preMaximizePageX;
        preMaximizePageY;
        id = I("pn_id_");
        _style = {};
        originalStyle;
        transformOptions = "scale(0.7)";
        styleElement;
        window;
        _componentStyle = x(X);
        headerT;
        contentT;
        footerT;
        closeIconT;
        maximizeIconT;
        minimizeIconT;
        headlessT;
        zIndexForLayering;
        get maximizeLabel() { return this.config.getTranslation(R.ARIA).maximizeLabel; }
        get minimizeLabel() { return this.config.getTranslation(R.ARIA).minimizeLabel; }
        zone = x(Ve);
        overlayService = x(Pe);
        get maskClass() { let n = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"].find(o => o === this.position); return { "p-dialog-mask": !0, "p-overlay-mask": this.modal || this.dismissableMask, [`p-dialog-${n}`]: n }; }
        onInit() { this.breakpoints && this.createStyle(); }
        templates;
        onAfterContentInit() { this.templates?.forEach(t => { switch (t.getType()) {
            case "header":
                this.headerT = t.template;
                break;
            case "content":
                this.contentT = t.template;
                break;
            case "footer":
                this.footerT = t.template;
                break;
            case "closeicon":
                this.closeIconT = t.template;
                break;
            case "maximizeicon":
                this.maximizeIconT = t.template;
                break;
            case "minimizeicon":
                this.minimizeIconT = t.template;
                break;
            case "headless":
                this.headlessT = t.template;
                break;
            default:
                this.contentT = t.template;
                break;
        } }); }
        getAriaLabelledBy() { return this.header !== null ? I("pn_id_") + "_header" : null; }
        parseDurationToMilliseconds(t) { let n = /([\d\.]+)(ms|s)\b/g, o = 0, a; for (; (a = n.exec(t)) !== null;) {
            let l = parseFloat(a[1]), m = a[2];
            m === "ms" ? o += l : m === "s" && (o += l * 1e3);
        } if (o !== 0)
            return o; }
        _focus(t) { if (t) {
            let n = this.parseDurationToMilliseconds(this.transitionOptions), o = Xe.getFocusableElements(t);
            if (o && o.length > 0)
                return this.zone.runOutsideAngular(() => { setTimeout(() => o[0].focus(), n || 5); }), !0;
        } return !1; }
        focus(t = this.contentViewChild?.nativeElement) { let n = this._focus(t); n || (n = this._focus(this.footerViewChild?.nativeElement), n || (n = this._focus(this.headerViewChild?.nativeElement), n || this._focus(this.contentViewChild?.nativeElement))); }
        close(t) { this.visible = !1, this.visibleChange.emit(this.visible), t.preventDefault(); }
        enableModality() { this.closable && this.dismissableMask && (this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", t => { this.wrapper && this.wrapper.isSameNode(t.target) && this.close(t); })), this.modal && F(); }
        disableModality() { if (this.wrapper) {
            this.dismissableMask && this.unbindMaskClickListener();
            let t = document.querySelectorAll('[data-p-scrollblocker-active="true"]');
            this.modal && t && t.length == 1 && H(), this.cd.destroyed || this.cd.detectChanges();
        } }
        maximize() { this.maximized = !this.maximized, !this.modal && !this.blockScroll && (this.maximized ? F() : H()), this.onMaximize.emit({ maximized: this.maximized }); }
        unbindMaskClickListener() { this.maskClickListener && (this.maskClickListener(), this.maskClickListener = null); }
        moveOnTop() { this.autoZIndex ? (b.set("modal", this.container(), this.baseZIndex + this.config.zIndex.modal), this.wrapper.style.zIndex = String(parseInt(this.container().style.zIndex, 10) - 1)) : this.zIndexForLayering = b.generateZIndex("modal", (this.baseZIndex ?? 0) + this.config.zIndex.modal); }
        createStyle() {
            if (Oe(this.platformId) && !this.styleElement && !this.$unstyled()) {
                this.styleElement = this.renderer.createElement("style"), this.styleElement.type = "text/css", D(this.styleElement, "nonce", this.config?.csp()?.nonce), this.renderer.appendChild(this.document.head, this.styleElement);
                let t = "";
                for (let n in this.breakpoints)
                    t += `
                        @media screen and (max-width: ${n}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;
                this.renderer.setProperty(this.styleElement, "innerHTML", t), D(this.styleElement, "nonce", this.config?.csp()?.nonce);
            }
        }
        initDrag(t) { t.target.closest("div")?.getAttribute("data-pc-section") !== "headeractions" && this.draggable && (this.dragging = !0, this.lastPageX = t.pageX, this.lastPageY = t.pageY, this.container().style.margin = "0", this.document.body.setAttribute("data-p-unselectable-text", "true"), !this.$unstyled() && z(this.document.body, { "user-select": "none" })); }
        onDrag(t) { if (this.dragging && this.container()) {
            let n = w(this.container()), o = C(this.container()), a = t.pageX - this.lastPageX, l = t.pageY - this.lastPageY, m = this.container().getBoundingClientRect(), _ = getComputedStyle(this.container()), g = parseFloat(_.marginLeft), y = parseFloat(_.marginTop), d = m.left + a - g, p = m.top + l - y, f = T();
            this.container().style.position = "fixed", this.keepInViewport ? (d >= this.minX && d + n < f.width && (this._style.left = `${d}px`, this.lastPageX = t.pageX, this.container().style.left = `${d}px`), p >= this.minY && p + o < f.height && (this._style.top = `${p}px`, this.lastPageY = t.pageY, this.container().style.top = `${p}px`)) : (this.lastPageX = t.pageX, this.container().style.left = `${d}px`, this.lastPageY = t.pageY, this.container().style.top = `${p}px`), this.overlayService.emitParentDrag(this.container());
        } }
        endDrag(t) { this.dragging && (this.dragging = !1, this.document.body.removeAttribute("data-p-unselectable-text"), !this.$unstyled() && (this.document.body.style["user-select"] = ""), this.cd.detectChanges(), this.onDragEnd.emit(t)); }
        resetPosition() { this.container().style.position = "", this.container().style.left = "", this.container().style.top = "", this.container().style.margin = ""; }
        center() { this.resetPosition(); }
        initResize(t) { this.resizable && (this.resizing = !0, this.lastPageX = t.pageX, this.lastPageY = t.pageY, this.document.body.setAttribute("data-p-unselectable-text", "true"), !this.$unstyled() && z(this.document.body, { "user-select": "none" }), this.onResizeInit.emit(t)); }
        onResize(t) { if (this.resizing) {
            let n = t.pageX - this.lastPageX, o = t.pageY - this.lastPageY, a = w(this.container()), l = C(this.container()), m = C(this.contentViewChild?.nativeElement), _ = a + n, g = l + o, y = this.container().style.minWidth, d = this.container().style.minHeight, p = this.container().getBoundingClientRect(), f = T();
            (!parseInt(this.container().style.top) || !parseInt(this.container().style.left)) && (_ += n, g += o), (!y || _ > parseInt(y)) && p.left + _ < f.width && (this._style.width = _ + "px", this.container().style.width = this._style.width), (!d || g > parseInt(d)) && p.top + g < f.height && (this.contentViewChild.nativeElement.style.height = m + g - l + "px", this._style.height && (this._style.height = g + "px", this.container().style.height = this._style.height)), this.lastPageX = t.pageX, this.lastPageY = t.pageY;
        } }
        resizeEnd(t) { this.resizing && (this.resizing = !1, this.document.body.removeAttribute("data-p-unselectable-text"), !this.$unstyled() && (this.document.body.style["user-select"] = ""), this.onResizeEnd.emit(t)); }
        bindGlobalListeners() { this.draggable && (this.bindDocumentDragListener(), this.bindDocumentDragEndListener()), this.resizable && this.bindDocumentResizeListeners(), this.closeOnEscape && this.closable && this.bindDocumentEscapeListener(); }
        unbindGlobalListeners() { this.unbindDocumentDragListener(), this.unbindDocumentDragEndListener(), this.unbindDocumentResizeListeners(), this.unbindDocumentEscapeListener(); }
        bindDocumentDragListener() { this.documentDragListener || this.zone.runOutsideAngular(() => { this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onDrag.bind(this)); }); }
        unbindDocumentDragListener() { this.documentDragListener && (this.documentDragListener(), this.documentDragListener = null); }
        bindDocumentDragEndListener() { this.documentDragEndListener || this.zone.runOutsideAngular(() => { this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.endDrag.bind(this)); }); }
        unbindDocumentDragEndListener() { this.documentDragEndListener && (this.documentDragEndListener(), this.documentDragEndListener = null); }
        bindDocumentResizeListeners() { !this.documentResizeListener && !this.documentResizeEndListener && this.zone.runOutsideAngular(() => { this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onResize.bind(this)), this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.resizeEnd.bind(this)); }); }
        unbindDocumentResizeListeners() { this.documentResizeListener && this.documentResizeEndListener && (this.documentResizeListener(), this.documentResizeEndListener(), this.documentResizeListener = null, this.documentResizeEndListener = null); }
        bindDocumentEscapeListener() { let t = this.el ? this.el.nativeElement.ownerDocument : "document"; this.documentEscapeListener = this.renderer.listen(t, "keydown", n => { if (n.key == "Escape") {
            let o = this.container();
            if (!o)
                return;
            let a = b.getCurrent();
            (parseInt(o.style.zIndex) == a || this.zIndexForLayering == a) && this.close(n);
        } }); }
        unbindDocumentEscapeListener() { this.documentEscapeListener && (this.documentEscapeListener(), this.documentEscapeListener = null); }
        appendContainer() { this.$appendTo() !== "self" && B(this.document.body, this.wrapper); }
        restoreAppend() { this.container() && this.$appendTo() !== "self" && this.renderer.appendChild(this.el.nativeElement, this.wrapper); }
        onBeforeEnter(t) { this.container.set(t.element), this.wrapper = this.container()?.parentElement, this.$attrSelector && this.container()?.setAttribute(this.$attrSelector, ""), this.appendContainer(), this.moveOnTop(), this.bindGlobalListeners(), this.container()?.setAttribute(this.id, ""), this.modal && this.enableModality(); }
        onAfterEnter() { this.focusOnShow && this.focus(), this.onShow.emit({}); }
        onBeforeLeave() { this.modal && (this.maskVisible = !1); }
        onAfterLeave() { this.onContainerDestroy(), this.renderDialog.set(!1), this.modal ? this.renderMask.set(!1) : this.maskVisible = !1, this.onHide.emit({}), this.cd.markForCheck(); }
        onMaskAfterLeave() { this.renderDialog() || this.renderMask.set(!1); }
        onContainerDestroy() { this.unbindGlobalListeners(), this.dragging = !1, this.maximized && (v(this.document.body, "p-overflow-hidden"), this.document.body.style.removeProperty("--scrollbar-width"), this.maximized = !1), this.modal && this.disableModality(), O(this.document.body, "p-overflow-hidden") && v(this.document.body, "p-overflow-hidden"), this.container() && this.autoZIndex && b.clear(this.container()), this.zIndexForLayering && b.revertZIndex(this.zIndexForLayering), this.container.set(null), this.wrapper = null, this._style = this.originalStyle ? h({}, this.originalStyle) : {}; }
        destroyStyle() { this.styleElement && (this.renderer.removeChild(this.document.head, this.styleElement), this.styleElement = null); }
        onDestroy() { this.container() && (this.restoreAppend(), this.onContainerDestroy()), this.destroyStyle(); }
        get dataP() { return this.cn({ maximized: this.maximized, modal: this.modal }); }
        static \u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["p-dialog"]], contentQueries: function (n, o, a) { if (n & 1 && e.\u0275\u0275contentQuery(a, Z, 4)(a, V, 4)(a, P, 4)(a, j, 4)(a, q, 4)(a, G, 4)(a, W, 4)(a, Re, 4), n & 2) {
                let l;
                e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o._headerTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o._contentTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o._footerTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o._closeiconTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o._maximizeiconTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o._minimizeiconTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o._headlessTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.templates = l);
            } }, viewQuery: function (n, o) { if (n & 1 && e.\u0275\u0275viewQuery(K, 5)(V, 5)(P, 5), n & 2) {
                let a;
                e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.headerViewChild = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.contentViewChild = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.footerViewChild = a.first);
            } }, inputs: { hostName: "hostName", header: "header", draggable: [2, "draggable", "draggable", r], resizable: [2, "resizable", "resizable", r], contentStyle: "contentStyle", contentStyleClass: "contentStyleClass", modal: [2, "modal", "modal", r], closeOnEscape: [2, "closeOnEscape", "closeOnEscape", r], dismissableMask: [2, "dismissableMask", "dismissableMask", r], rtl: [2, "rtl", "rtl", r], closable: [2, "closable", "closable", r], breakpoints: "breakpoints", styleClass: "styleClass", maskStyleClass: "maskStyleClass", maskStyle: "maskStyle", showHeader: [2, "showHeader", "showHeader", r], blockScroll: [2, "blockScroll", "blockScroll", r], autoZIndex: [2, "autoZIndex", "autoZIndex", r], baseZIndex: [2, "baseZIndex", "baseZIndex", L], minX: [2, "minX", "minX", L], minY: [2, "minY", "minY", L], focusOnShow: [2, "focusOnShow", "focusOnShow", r], maximizable: [2, "maximizable", "maximizable", r], keepInViewport: [2, "keepInViewport", "keepInViewport", r], focusTrap: [2, "focusTrap", "focusTrap", r], transitionOptions: "transitionOptions", maskMotionOptions: [1, "maskMotionOptions"], motionOptions: [1, "motionOptions"], closeIcon: "closeIcon", closeAriaLabel: "closeAriaLabel", closeTabindex: "closeTabindex", minimizeIcon: "minimizeIcon", maximizeIcon: "maximizeIcon", closeButtonProps: "closeButtonProps", maximizeButtonProps: "maximizeButtonProps", visible: "visible", style: "style", position: "position", role: "role", appendTo: [1, "appendTo"], headerTemplate: [0, "content", "headerTemplate"], contentTemplate: "contentTemplate", footerTemplate: "footerTemplate", closeIconTemplate: "closeIconTemplate", maximizeIconTemplate: "maximizeIconTemplate", minimizeIconTemplate: "minimizeIconTemplate", headlessTemplate: "headlessTemplate" }, outputs: { onShow: "onShow", onHide: "onHide", visibleChange: "visibleChange", onResizeInit: "onResizeInit", onResizeEnd: "onResizeEnd", onDragEnd: "onDragEnd", onMaximize: "onMaximize" }, features: [e.\u0275\u0275ProvidersFeature([X, { provide: Y, useExisting: i }, { provide: Fe, useExisting: i }]), e.\u0275\u0275HostDirectivesFeature([$.Bind]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: J, decls: 1, vars: 1, consts: [["container", ""], ["notHeadless", ""], ["content", ""], ["titlebar", ""], ["icon", ""], ["footer", ""], [3, "class", "style", "ngStyle", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], [3, "pMotionOnAfterLeave", "ngStyle", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], ["pFocusTrap", "", 3, "class", "style", "ngStyle", "pBind", "pFocusTrapDisabled", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], ["pFocusTrap", "", 3, "pMotionOnBeforeEnter", "pMotionOnAfterEnter", "pMotionOnBeforeLeave", "pMotionOnAfterLeave", "ngStyle", "pBind", "pFocusTrapDisabled", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [3, "class", "pBind", "z-index", "mousedown", 4, "ngIf"], [3, "class", "pBind", "mousedown", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "mousedown", "pBind"], [3, "id", "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [3, "pt", "styleClass", "ariaLabel", "tabindex", "buttonProps", "unstyled", "onClick", "keydown.enter", 4, "ngIf"], [3, "id", "pBind"], [3, "onClick", "keydown.enter", "pt", "styleClass", "ariaLabel", "tabindex", "buttonProps", "unstyled"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], ["data-p-icon", "window-maximize", 4, "ngIf"], ["data-p-icon", "window-minimize", 4, "ngIf"], ["data-p-icon", "window-maximize"], ["data-p-icon", "window-minimize"], [3, "class", 4, "ngIf"], ["data-p-icon", "times", 4, "ngIf"], ["data-p-icon", "times"]], template: function (n, o) { n & 1 && (e.\u0275\u0275projectionDef(U), e.\u0275\u0275conditionalCreate(0, Se, 2, 14, "div", 6)), n & 2 && e.\u0275\u0275conditional(o.renderMask() ? 0 : -1); }, dependencies: [Be, c.NgClass, c.NgIf, c.NgTemplateOutlet, c.NgStyle, He, Ye, $e, Qe, Ze, S, N, je, Q.MotionDirective], encapsulation: 2, changeDetection: 0 });
    }
    return i;
})(), wt = (() => { class i {
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [Ue, S, S] });
} return i; })();
export { Ue as Dialog, Ke as DialogClasses, wt as DialogModule, X as DialogStyle };
