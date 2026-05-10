import { r as o, u as l, w as d, y as r } from "@nf-internal/chunk-MIZIHZD3";
import "@nf-internal/chunk-JKOY2XUY";
import { DOCUMENT as m, isPlatformBrowser as c } from "@angular/common";
import * as s from "@angular/core";
import { inject as u, PLATFORM_ID as p, booleanAttribute as b } from "@angular/core";
import { BaseComponent as F } from "primeng/basecomponent";
var g = (() => { class t extends F {
    pFocusTrapDisabled = !1;
    platformId = u(p);
    document = u(m);
    firstHiddenFocusableElement;
    lastHiddenFocusableElement;
    onInit() { c(this.platformId) && !this.pFocusTrapDisabled && !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements(); }
    onChanges(e) { e.pFocusTrapDisabled && c(this.platformId) && (e.pFocusTrapDisabled.currentValue ? this.removeHiddenFocusableElements() : this.createHiddenFocusableElements()); }
    removeHiddenFocusableElements() { this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode && this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement), this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode && this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement); }
    getComputedSelector(e) { return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e ?? ""}`; }
    createHiddenFocusableElements() { let n = i => o("span", { class: "p-hidden-accessible p-hidden-focusable", tabindex: "0", role: "presentation", "aria-hidden": !0, "data-p-hidden-accessible": !0, "data-p-hidden-focusable": !0, onFocus: i?.bind(this) }); this.firstHiddenFocusableElement = n(this.onFirstHiddenElementFocus), this.lastHiddenFocusableElement = n(this.onLastHiddenElementFocus), this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement"), this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement"), this.el.nativeElement.prepend(this.firstHiddenFocusableElement), this.el.nativeElement.append(this.lastHiddenFocusableElement); }
    onFirstHiddenElementFocus(e) { let { currentTarget: n, relatedTarget: i } = e, a = i === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(i) ? d(n.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement; l(a); }
    onLastHiddenElementFocus(e) { let { currentTarget: n, relatedTarget: i } = e, a = i === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(i) ? r(n.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement; l(a); }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = s.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275dir = s.\u0275\u0275defineDirective({ type: t, selectors: [["", "pFocusTrap", ""]], inputs: { pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", b] }, features: [s.\u0275\u0275InheritDefinitionFeature] });
} return t; })(), I = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = s.\u0275\u0275defineInjector({});
} return t; })();
export { g as FocusTrap, I as FocusTrapModule };
