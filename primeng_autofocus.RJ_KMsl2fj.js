import "@nf-internal/chunk-JKOY2XUY";
import { DOCUMENT as n, isPlatformBrowser as f } from "@angular/common";
import * as e from "@angular/core";
import { inject as s, PLATFORM_ID as r, ElementRef as c } from "@angular/core";
import { BaseComponent as a } from "primeng/basecomponent";
import { DomHandler as d } from "primeng/dom";
var D = (() => { class t extends a {
    autofocus = !1;
    focused = !1;
    platformId = s(r);
    document = s(n);
    host = s(c);
    onAfterContentChecked() { this.autofocus === !1 ? this.host.nativeElement.removeAttribute("autofocus") : this.host.nativeElement.setAttribute("autofocus", !0), this.focused || this.autoFocus(); }
    onAfterViewChecked() { this.focused || this.autoFocus(); }
    autoFocus() { f(this.platformId) && this.autofocus && setTimeout(() => { let o = d.getFocusableElements(this.host?.nativeElement); o.length === 0 && this.host.nativeElement.focus(), o.length > 0 && o[0].focus(), this.focused = !0; }); }
    static \u0275fac = (() => { let o; return function (u) { return (o || (o = e.\u0275\u0275getInheritedFactory(t)))(u || t); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: t, selectors: [["", "pAutoFocus", ""]], inputs: { autofocus: [0, "pAutoFocus", "autofocus"] }, features: [e.\u0275\u0275InheritDefinitionFeature] });
} return t; })(), A = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = e.\u0275\u0275defineInjector({});
} return t; })();
export { D as AutoFocus, A as AutoFocusModule };
