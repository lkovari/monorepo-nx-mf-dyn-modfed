import { A as u, B as l, G as h, b as p, d as s, m as d, x as a, z as c } from "@nf-internal/chunk-MIZIHZD3";
import "@nf-internal/chunk-JKOY2XUY";
import { isPlatformBrowser as k } from "@angular/common";
import * as n from "@angular/core";
import { inject as f, NgZone as b, effect as D } from "@angular/core";
import { BaseComponent as w } from "primeng/basecomponent";
var m = `
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;
import { BaseStyle as A } from "primeng/base";
var I = `
    ${m}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`, L = { root: "p-ink" }, y = (() => { class i extends A {
    name = "ripple";
    style = I;
    classes = L;
    static \u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac });
} return i; })(), M = (function (i) { return i.root = "p-ink", i; })(M || {}), B = (() => { class i extends w {
    componentName = "Ripple";
    zone = f(b);
    _componentStyle = f(y);
    animationListener;
    mouseDownListener;
    timeout;
    constructor() { super(), D(() => { k(this.platformId) && (this.config.ripple() ? this.zone.runOutsideAngular(() => { this.create(), this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this)); }) : this.remove()); }); }
    onAfterViewInit() { }
    onMouseDown(e) { let t = this.getInk(); if (!t || this.document.defaultView?.getComputedStyle(t, null).display === "none")
        return; if (!this.$unstyled() && s(t, "p-ink-active"), t.setAttribute("data-p-ink-active", "false"), !a(t) && !l(t)) {
        let r = Math.max(d(this.el.nativeElement), u(this.el.nativeElement));
        t.style.height = r + "px", t.style.width = r + "px";
    } let o = c(this.el.nativeElement), v = e.pageX - o.left + this.document.body.scrollTop - l(t) / 2, g = e.pageY - o.top + this.document.body.scrollLeft - a(t) / 2; this.renderer.setStyle(t, "top", g + "px"), this.renderer.setStyle(t, "left", v + "px"), !this.$unstyled() && p(t, "p-ink-active"), t.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(() => { let r = this.getInk(); r && (!this.$unstyled() && s(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false")); }, 401); }
    getInk() { let e = this.el.nativeElement.children; for (let t = 0; t < e.length; t++)
        if (typeof e[t].className == "string" && e[t].className.indexOf("p-ink") !== -1)
            return e[t]; return null; }
    resetInk() { let e = this.getInk(); e && (!this.$unstyled() && s(e, "p-ink-active"), e.setAttribute("data-p-ink-active", "false")); }
    onAnimationEnd(e) { this.timeout && clearTimeout(this.timeout), !this.$unstyled() && s(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false"); }
    create() { let e = this.renderer.createElement("span"); this.renderer.addClass(e, "p-ink"), this.renderer.appendChild(this.el.nativeElement, e), this.renderer.setAttribute(e, "data-p-ink", "true"), this.renderer.setAttribute(e, "data-p-ink-active", "false"), this.renderer.setAttribute(e, "aria-hidden", "true"), this.renderer.setAttribute(e, "role", "presentation"), this.animationListener || (this.animationListener = this.renderer.listen(e, "animationend", this.onAnimationEnd.bind(this))); }
    remove() { let e = this.getInk(); e && (this.mouseDownListener && this.mouseDownListener(), this.animationListener && this.animationListener(), this.mouseDownListener = null, this.animationListener = null, h(e)); }
    onDestroy() { this.config && this.config.ripple() && this.remove(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i, selectors: [["", "pRipple", ""]], hostAttrs: [1, "p-ripple"], features: [n.\u0275\u0275ProvidersFeature([y]), n.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), R = (() => { class i {
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = n.\u0275\u0275defineInjector({});
} return i; })();
export { B as Ripple, M as RippleClasses, R as RippleModule, y as RippleStyle };
