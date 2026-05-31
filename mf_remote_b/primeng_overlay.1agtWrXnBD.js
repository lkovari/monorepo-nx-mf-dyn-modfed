import { E as a, b as g, d as b, k as O, m as C, n as x, o as E, p as y, u } from "@nf-internal/chunk-MIZIHZD3";
import { a as l } from "@nf-internal/chunk-JKOY2XUY";
import * as v from "@angular/common";
import { isPlatformBrowser as V, CommonModule as B } from "@angular/common";
import * as t from "@angular/core";
import { InjectionToken as N, inject as m, input as h, computed as w, EventEmitter as r, signal as j } from "@angular/core";
import * as A from "primeng/api";
import { SharedModule as _, PrimeTemplate as Z } from "primeng/api";
import { BaseComponent as z, PARENT_INSTANCE as H } from "primeng/basecomponent";
import * as I from "primeng/bind";
import { Bind as L } from "primeng/bind";
import { ConnectedOverlayScrollHandler as F } from "primeng/dom";
import * as M from "primeng/motion";
import { MotionModule as $ } from "primeng/motion";
import { ObjectUtils as c, ZIndexUtils as f } from "primeng/utils";
import { BaseStyle as P } from "primeng/base";
var T = ["content"], K = ["overlay"], S = ["*", "*"], Q = () => ({ mode: null }), R = i => ({ $implicit: i }), q = i => ({ mode: i });
function Y(i, d) { i & 1 && t.\u0275\u0275elementContainer(0); }
function U(i, d) { if (i & 1 && (t.\u0275\u0275projection(0), t.\u0275\u0275template(1, Y, 1, 0, "ng-container", 3)), i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e.contentTemplate || e._contentTemplate)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(3, R, t.\u0275\u0275pureFunction0(2, Q)));
} }
function W(i, d) { i & 1 && t.\u0275\u0275elementContainer(0); }
function G(i, d) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 5, 0), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let o = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(o.onOverlayClick()); }), t.\u0275\u0275elementStart(2, "p-motion", 6), t.\u0275\u0275listener("onBeforeEnter", function (o) { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(s.onOverlayBeforeEnter(o)); })("onEnter", function (o) { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(s.onOverlayEnter(o)); })("onAfterEnter", function (o) { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(s.onOverlayAfterEnter(o)); })("onBeforeLeave", function (o) { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(s.onOverlayBeforeLeave(o)); })("onLeave", function (o) { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(s.onOverlayLeave(o)); })("onAfterLeave", function (o) { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(s.onOverlayAfterLeave(o)); }), t.\u0275\u0275elementStart(3, "div", 5, 1), t.\u0275\u0275listener("click", function (o) { t.\u0275\u0275restoreView(e); let s = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(s.onOverlayContentClick(o)); }), t.\u0275\u0275projection(5, 1), t.\u0275\u0275template(6, W, 1, 0, "ng-container", 3), t.\u0275\u0275elementEnd()()();
} if (i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275styleMap(e.sx("root")), t.\u0275\u0275classMap(e.cn(e.cx("root"), e.styleClass)), t.\u0275\u0275property("pBind", e.ptm("root")), t.\u0275\u0275advance(2), t.\u0275\u0275property("visible", e.visible)("appear", !0)("options", e.computedMotionOptions()), t.\u0275\u0275advance(), t.\u0275\u0275classMap(e.cn(e.cx("content"), e.contentStyleClass)), t.\u0275\u0275property("pBind", e.ptm("content")), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngTemplateOutlet", e.contentTemplate || e._contentTemplate)("ngTemplateOutletContext", t.\u0275\u0275pureFunction1(15, R, t.\u0275\u0275pureFunction1(13, q, e.overlayMode)));
} }
function J(i, d) { if (i & 1 && t.\u0275\u0275template(0, G, 7, 17, "div", 4), i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("ngIf", e.modalVisible);
} }
var X = { root: () => ({ position: "absolute", top: "0" }) }, ee = `
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`, te = { host: "p-overlay-host", root: ({ instance: i }) => ["p-overlay p-component", { "p-overlay-modal p-overlay-mask p-overlay-mask-enter-active": i.modal, "p-overlay-center": i.modal && i.overlayResponsiveDirection === "center", "p-overlay-top": i.modal && i.overlayResponsiveDirection === "top", "p-overlay-top-start": i.modal && i.overlayResponsiveDirection === "top-start", "p-overlay-top-end": i.modal && i.overlayResponsiveDirection === "top-end", "p-overlay-bottom": i.modal && i.overlayResponsiveDirection === "bottom", "p-overlay-bottom-start": i.modal && i.overlayResponsiveDirection === "bottom-start", "p-overlay-bottom-end": i.modal && i.overlayResponsiveDirection === "bottom-end", "p-overlay-left": i.modal && i.overlayResponsiveDirection === "left", "p-overlay-left-start": i.modal && i.overlayResponsiveDirection === "left-start", "p-overlay-left-end": i.modal && i.overlayResponsiveDirection === "left-end", "p-overlay-right": i.modal && i.overlayResponsiveDirection === "right", "p-overlay-right-start": i.modal && i.overlayResponsiveDirection === "right-start", "p-overlay-right-end": i.modal && i.overlayResponsiveDirection === "right-end" }], content: "p-overlay-content" }, D = (() => { class i extends P {
    name = "overlay";
    style = ee;
    classes = te;
    inlineStyles = X;
    static \u0275fac = (() => { let e; return function (o) { return (e || (e = t.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac });
} return i; })(), k = new N("OVERLAY_INSTANCE"), ie = (() => { class i extends z {
    overlayService;
    zone;
    componentName = "Overlay";
    $pcOverlay = m(k, { optional: !0, skipSelf: !0 }) ?? void 0;
    hostName = "";
    get visible() { return this._visible; }
    set visible(e) { this._visible = e, this._visible && !this.modalVisible && (this.modalVisible = !0); }
    get mode() { return this._mode || this.overlayOptions?.mode; }
    set mode(e) { this._mode = e; }
    get style() { return c.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style); }
    set style(e) { this._style = e; }
    get styleClass() { return c.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass); }
    set styleClass(e) { this._styleClass = e; }
    get contentStyle() { return c.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle); }
    set contentStyle(e) { this._contentStyle = e; }
    get contentStyleClass() { return c.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass); }
    set contentStyleClass(e) { this._contentStyleClass = e; }
    get target() { let e = this._target || this.overlayOptions?.target; return e === void 0 ? "@prev" : e; }
    set target(e) { this._target = e; }
    get autoZIndex() { let e = this._autoZIndex || this.overlayOptions?.autoZIndex; return e === void 0 ? !0 : e; }
    set autoZIndex(e) { this._autoZIndex = e; }
    get baseZIndex() { let e = this._baseZIndex || this.overlayOptions?.baseZIndex; return e === void 0 ? 0 : e; }
    set baseZIndex(e) { this._baseZIndex = e; }
    get showTransitionOptions() { let e = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions; return e === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : e; }
    set showTransitionOptions(e) { this._showTransitionOptions = e; }
    get hideTransitionOptions() { let e = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions; return e === void 0 ? ".1s linear" : e; }
    set hideTransitionOptions(e) { this._hideTransitionOptions = e; }
    get listener() { return this._listener || this.overlayOptions?.listener; }
    set listener(e) { this._listener = e; }
    get responsive() { return this._responsive || this.overlayOptions?.responsive; }
    set responsive(e) { this._responsive = e; }
    get options() { return this._options; }
    set options(e) { this._options = e; }
    appendTo = h(void 0);
    inline = h(!1);
    motionOptions = h(void 0);
    computedMotionOptions = w(() => l(l({}, this.ptm("motion")), this.motionOptions() || this.overlayOptions?.motionOptions));
    visibleChange = new r;
    onBeforeShow = new r;
    onShow = new r;
    onBeforeHide = new r;
    onHide = new r;
    onAnimationStart = new r;
    onAnimationDone = new r;
    onBeforeEnter = new r;
    onEnter = new r;
    onAfterEnter = new r;
    onBeforeLeave = new r;
    onLeave = new r;
    onAfterLeave = new r;
    overlayViewChild;
    contentViewChild;
    contentTemplate;
    templates;
    hostAttrSelector = h();
    $appendTo = w(() => this.appendTo() || this.config.overlayAppendTo());
    _contentTemplate;
    _visible = !1;
    _mode;
    _style;
    _styleClass;
    _contentStyle;
    _contentStyleClass;
    _target;
    _autoZIndex;
    _baseZIndex;
    _showTransitionOptions;
    _hideTransitionOptions;
    _listener;
    _responsive;
    _options;
    modalVisible = !1;
    isOverlayClicked = !1;
    isOverlayContentClicked = !1;
    scrollHandler;
    documentClickListener;
    documentResizeListener;
    _componentStyle = m(D);
    bindDirectiveInstance = m(L, { self: !0 });
    documentKeyboardListener;
    parentDragSubscription = null;
    window;
    transformOptions = { default: "scaleY(0.8)", center: "scale(0.7)", top: "translate3d(0px, -100%, 0px)", "top-start": "translate3d(0px, -100%, 0px)", "top-end": "translate3d(0px, -100%, 0px)", bottom: "translate3d(0px, 100%, 0px)", "bottom-start": "translate3d(0px, 100%, 0px)", "bottom-end": "translate3d(0px, 100%, 0px)", left: "translate3d(-100%, 0px, 0px)", "left-start": "translate3d(-100%, 0px, 0px)", "left-end": "translate3d(-100%, 0px, 0px)", right: "translate3d(100%, 0px, 0px)", "right-start": "translate3d(100%, 0px, 0px)", "right-end": "translate3d(100%, 0px, 0px)" };
    get modal() { if (V(this.platformId))
        return this.mode === "modal" || this.overlayResponsiveOptions && this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches; }
    get overlayMode() { return this.mode || (this.modal ? "modal" : "overlay"); }
    get overlayOptions() { return l(l({}, this.config?.overlayOptions), this.options); }
    get overlayResponsiveOptions() { return l(l({}, this.overlayOptions?.responsive), this.responsive); }
    get overlayResponsiveDirection() { return this.overlayResponsiveOptions?.direction || "center"; }
    get overlayEl() { return this.overlayViewChild?.nativeElement; }
    get contentEl() { return this.contentViewChild?.nativeElement; }
    get targetEl() { return E(this.target, this.el?.nativeElement); }
    constructor(e, n) { super(), this.overlayService = e, this.zone = n; }
    onAfterContentInit() { this.templates?.forEach(e => { e.getType() === "content" ? this._contentTemplate = e.template : this._contentTemplate = e.template; }); }
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptm("host")); }
    show(e, n = !1) { this.onVisibleChange(!0), this.handleEvents("onShow", { overlay: e || this.overlayEl, target: this.targetEl, mode: this.overlayMode }), n && u(this.targetEl), this.modal && g(this.document?.body, "p-overflow-hidden"); }
    hide(e, n = !1) { if (this.visible)
        this.onVisibleChange(!1), this.handleEvents("onHide", { overlay: e || this.overlayEl, target: this.targetEl, mode: this.overlayMode }), n && u(this.targetEl), this.modal && b(this.document?.body, "p-overflow-hidden");
    else
        return; }
    onVisibleChange(e) { this._visible = e, this.visibleChange.emit(e); }
    onOverlayClick() { this.isOverlayClicked = !0; }
    onOverlayContentClick(e) { this.overlayService.add({ originalEvent: e, target: this.targetEl }), this.isOverlayContentClicked = !0; }
    container = j(void 0);
    onOverlayBeforeEnter(e) { this.handleEvents("onBeforeShow", { overlay: this.overlayEl, target: this.targetEl, mode: this.overlayMode }), this.container.set(this.overlayEl || e.element), this.show(this.overlayEl, !0), this.hostAttrSelector() && this.overlayEl && this.overlayEl.setAttribute(this.hostAttrSelector(), ""), this.appendOverlay(), this.alignOverlay(), this.bindParentDragListener(), this.setZIndex(), this.handleEvents("onBeforeEnter", e); }
    onOverlayEnter(e) { this.handleEvents("onEnter", e); }
    onOverlayAfterEnter(e) { this.bindListeners(), this.handleEvents("onAfterEnter", e); }
    onOverlayBeforeLeave(e) { this.handleEvents("onBeforeHide", { overlay: this.overlayEl, target: this.targetEl, mode: this.overlayMode }), this.handleEvents("onBeforeLeave", e); }
    onOverlayLeave(e) { this.handleEvents("onLeave", e); }
    onOverlayAfterLeave(e) { this.hide(this.overlayEl, !0), this.container.set(null), this.unbindListeners(), this.appendOverlay(), f.clear(this.overlayEl), this.modalVisible = !1, this.cd.markForCheck(), this.handleEvents("onAfterLeave", e); }
    handleEvents(e, n) { this[e].emit(n), this.options && this.options[e] && this.options[e](n), this.config?.overlayOptions && (this.config?.overlayOptions)[e] && (this.config?.overlayOptions)[e](n); }
    setZIndex() { this.autoZIndex && f.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]); }
    appendOverlay() { this.$appendTo() && this.$appendTo() !== "self" && (this.$appendTo() === "body" ? y(this.document.body, this.overlayEl) : y(this.$appendTo(), this.overlayEl)); }
    alignOverlay() { this.modal || this.overlayEl && this.targetEl && (this.overlayEl.style.minWidth = C(this.targetEl) + "px", this.$appendTo() === "self" ? x(this.overlayEl, this.targetEl) : O(this.overlayEl, this.targetEl)); }
    bindListeners() { this.bindScrollListener(), this.bindDocumentClickListener(), this.bindDocumentResizeListener(), this.bindDocumentKeyboardListener(); }
    unbindListeners() { this.unbindScrollListener(), this.unbindDocumentClickListener(), this.unbindDocumentResizeListener(), this.unbindDocumentKeyboardListener(), this.unbindParentDragListener(); }
    bindParentDragListener() { !this.parentDragSubscription && this.$appendTo() !== "self" && this.targetEl && (this.parentDragSubscription = this.overlayService.parentDragObservable.subscribe(e => { e.contains(this.targetEl) && this.hide(this.overlayEl, !0); })); }
    unbindParentDragListener() { this.parentDragSubscription && (this.parentDragSubscription.unsubscribe(), this.parentDragSubscription = null); }
    bindScrollListener() { this.scrollHandler || (this.scrollHandler = new F(this.targetEl, e => { (!this.listener || this.listener(e, { type: "scroll", mode: this.overlayMode, valid: !0 })) && this.hide(e, !0); })), this.scrollHandler.bindScrollListener(); }
    unbindScrollListener() { this.scrollHandler && this.scrollHandler.unbindScrollListener(); }
    bindDocumentClickListener() { this.documentClickListener || (this.documentClickListener = this.renderer.listen(this.document, "click", e => { let o = !(this.targetEl && (this.targetEl.isSameNode(e.target) || !this.isOverlayClicked && this.targetEl.contains(e.target))) && !this.isOverlayContentClicked; (this.listener ? this.listener(e, { type: "outside", mode: this.overlayMode, valid: e.which !== 3 && o }) : o) && this.hide(e), this.isOverlayClicked = this.isOverlayContentClicked = !1; })); }
    unbindDocumentClickListener() { this.documentClickListener && (this.documentClickListener(), this.documentClickListener = null); }
    bindDocumentResizeListener() { this.documentResizeListener || (this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", e => { (this.listener ? this.listener(e, { type: "resize", mode: this.overlayMode, valid: !a() }) : !a()) && this.hide(e, !0); })); }
    unbindDocumentResizeListener() { this.documentResizeListener && (this.documentResizeListener(), this.documentResizeListener = null); }
    bindDocumentKeyboardListener() { this.documentKeyboardListener || this.zone.runOutsideAngular(() => { this.documentKeyboardListener = this.renderer.listen(this.document.defaultView, "keydown", e => { if (this.overlayOptions.hideOnEscape === !1 || e.code !== "Escape")
        return; (this.listener ? this.listener(e, { type: "keydown", mode: this.overlayMode, valid: !a() }) : !a()) && this.zone.run(() => { this.hide(e, !0); }); }); }); }
    unbindDocumentKeyboardListener() { this.documentKeyboardListener && (this.documentKeyboardListener(), this.documentKeyboardListener = null); }
    onDestroy() { this.hide(this.overlayEl, !0), this.overlayEl && this.$appendTo() !== "self" && (this.renderer.appendChild(this.el.nativeElement, this.overlayEl), f.clear(this.overlayEl)), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.unbindListeners(); }
    static \u0275fac = function (n) { return new (n || i)(t.\u0275\u0275directiveInject(A.OverlayService), t.\u0275\u0275directiveInject(t.NgZone)); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["p-overlay"]], contentQueries: function (n, o, s) { if (n & 1 && t.\u0275\u0275contentQuery(s, T, 4)(s, Z, 4), n & 2) {
            let p;
            t.\u0275\u0275queryRefresh(p = t.\u0275\u0275loadQuery()) && (o.contentTemplate = p.first), t.\u0275\u0275queryRefresh(p = t.\u0275\u0275loadQuery()) && (o.templates = p);
        } }, viewQuery: function (n, o) { if (n & 1 && t.\u0275\u0275viewQuery(K, 5)(T, 5), n & 2) {
            let s;
            t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (o.overlayViewChild = s.first), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (o.contentViewChild = s.first);
        } }, inputs: { hostName: "hostName", visible: "visible", mode: "mode", style: "style", styleClass: "styleClass", contentStyle: "contentStyle", contentStyleClass: "contentStyleClass", target: "target", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", listener: "listener", responsive: "responsive", options: "options", appendTo: [1, "appendTo"], inline: [1, "inline"], motionOptions: [1, "motionOptions"], hostAttrSelector: [1, "hostAttrSelector"] }, outputs: { visibleChange: "visibleChange", onBeforeShow: "onBeforeShow", onShow: "onShow", onBeforeHide: "onBeforeHide", onHide: "onHide", onAnimationStart: "onAnimationStart", onAnimationDone: "onAnimationDone", onBeforeEnter: "onBeforeEnter", onEnter: "onEnter", onAfterEnter: "onAfterEnter", onBeforeLeave: "onBeforeLeave", onLeave: "onLeave", onAfterLeave: "onAfterLeave" }, features: [t.\u0275\u0275ProvidersFeature([D, { provide: k, useExisting: i }, { provide: H, useExisting: i }]), t.\u0275\u0275HostDirectivesFeature([I.Bind]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: S, decls: 2, vars: 1, consts: [["overlay", ""], ["content", ""], [3, "class", "style", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "style", "pBind", "click", 4, "ngIf"], [3, "click", "pBind"], ["name", "p-anchored-overlay", 3, "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave", "visible", "appear", "options"]], template: function (n, o) { n & 1 && (t.\u0275\u0275projectionDef(S), t.\u0275\u0275conditionalCreate(0, U, 2, 5)(1, J, 1, 1, "div", 2)), n & 2 && t.\u0275\u0275conditional(o.inline() ? 0 : 1); }, dependencies: [B, v.NgIf, v.NgTemplateOutlet, _, L, $, M.Motion], encapsulation: 2, changeDetection: 0 });
} return i; })(), xe = (() => { class i {
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [ie, _, _] });
} return i; })();
export { ie as Overlay, xe as OverlayModule, D as OverlayStyle };
