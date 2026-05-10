import { a as y } from "@nf-internal/chunk-T2UUZI2G";
import { a as b, b as s, d as a, r as h } from "@nf-internal/chunk-MIZIHZD3";
import { a as f, d as c } from "@nf-internal/chunk-3NBCSNB6";
import "@nf-internal/chunk-JKOY2XUY";
import { CommonModule as I } from "@angular/common";
import * as d from "@angular/core";
import { InjectionToken as D, inject as o, input as r, effect as m, booleanAttribute as M } from "@angular/core";
import { SharedModule as p } from "primeng/api";
import { BaseComponent as B, PARENT_INSTANCE as C } from "primeng/basecomponent";
import * as E from "primeng/bind";
import { Bind as k, BindModule as T } from "primeng/bind";
var v = `
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;
import { BaseStyle as A } from "primeng/base";
var F = `
    ${v}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`, P = { root: ({ instance: t }) => { let l = typeof t.value == "function" ? t.value() : t.value, i = typeof t.size == "function" ? t.size() : t.size, e = typeof t.badgeSize == "function" ? t.badgeSize() : t.badgeSize, n = typeof t.severity == "function" ? t.severity() : t.severity; return ["p-badge p-component", { "p-badge-circle": c(l) && String(l).length === 1, "p-badge-dot": f(l), "p-badge-sm": i === "small" || e === "small", "p-badge-lg": i === "large" || e === "large", "p-badge-xl": i === "xlarge" || e === "xlarge", "p-badge-info": n === "info", "p-badge-success": n === "success", "p-badge-warn": n === "warn", "p-badge-danger": n === "danger", "p-badge-secondary": n === "secondary", "p-badge-contrast": n === "contrast" }]; } }, g = (() => { class t extends A {
    name = "badge";
    style = F;
    classes = P;
    static \u0275fac = (() => { let i; return function (n) { return (i || (i = d.\u0275\u0275getInheritedFactory(t)))(n || t); }; })();
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), V = (function (t) { return t.root = "p-badge", t; })(V || {}), S = new D("BADGE_INSTANCE"), z = new D("BADGE_DIRECTIVE_INSTANCE"), ee = (() => { class t extends B {
    $pcBadgeDirective = o(z, { optional: !0, skipSelf: !0 }) ?? void 0;
    ptBadgeDirective = r();
    pBadgePT = r();
    pBadgeUnstyled = r();
    disabled;
    badgeSize;
    set size(i) { this._size = i, console.log("size property is deprecated and will removed in v18, use badgeSize instead."); }
    get size() { return this._size; }
    _size;
    severity;
    value;
    badgeStyle;
    badgeStyleClass;
    id;
    badgeEl;
    _componentStyle = o(g);
    get activeElement() { return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement; }
    get canUpdateBadge() { return c(this.id) && !this.disabled; }
    constructor() { super(), m(() => { let i = this.ptBadgeDirective() || this.pBadgePT(); i && this.directivePT.set(i); }), m(() => { this.pBadgeUnstyled() && this.directiveUnstyled.set(this.pBadgeUnstyled()); }); }
    onChanges(i) { let { value: e, size: n, severity: u, disabled: x, badgeStyle: N, badgeStyleClass: w } = i; x && this.toggleDisableState(), this.canUpdateBadge && (u && this.setSeverity(u.previousValue), n && this.setSizeClasses(), e && this.setValue(), (N || w) && this.applyStyles()); }
    onAfterViewInit() { this.id = y("pn_id_") + "_badge", this.renderBadgeContent(); }
    setValue(i) { let e = i ?? this.document.getElementById(this.id); if (!e)
        return; this.value != null ? (b(e, "p-badge-dot") && a(e, "p-badge-dot"), this.value && String(this.value).length === 1 ? s(e, "p-badge-circle") : a(e, "p-badge-circle")) : (b(e, "p-badge-dot") || s(e, "p-badge-dot"), a(e, "p-badge-circle")), e.textContent = ""; let n = this.value != null ? String(this.value) : ""; this.renderer.appendChild(e, this.document.createTextNode(n)); }
    setSizeClasses(i) { let e = i ?? this.document.getElementById(this.id); e && (this.badgeSize ? (this.badgeSize === "large" && (s(e, "p-badge-lg"), a(e, "p-badge-xl")), this.badgeSize === "xlarge" && (s(e, "p-badge-xl"), a(e, "p-badge-lg"))) : this.size && !this.badgeSize ? (this.size === "large" && (s(e, "p-badge-lg"), a(e, "p-badge-xl")), this.size === "xlarge" && (s(e, "p-badge-xl"), a(e, "p-badge-lg"))) : (a(e, "p-badge-lg"), a(e, "p-badge-xl"))); }
    renderBadgeContent() { if (this.disabled)
        return; let i = this.activeElement, e = h("span", { class: this.cx("root"), id: this.id, "p-bind": this.ptm("root") }); this.setSeverity(null, e), this.setSizeClasses(e), this.setValue(e), s(i, "p-overlay-badge"), this.renderer.appendChild(i, e), this.badgeEl = e, this.applyStyles(); }
    applyStyles() { if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle == "object")
        for (let [i, e] of Object.entries(this.badgeStyle))
            this.renderer.setStyle(this.badgeEl, i, e); this.badgeEl && this.badgeStyleClass && this.badgeEl.classList.add(...this.badgeStyleClass.split(" ")); }
    setSeverity(i, e) { let n = e ?? this.document.getElementById(this.id); n && (this.severity && s(n, `p-badge-${this.severity}`), i && a(n, `p-badge-${i}`)); }
    toggleDisableState() { if (this.id)
        if (this.disabled) {
            let i = this.activeElement?.querySelector(`#${this.id}`);
            i && this.renderer.removeChild(this.activeElement, i);
        }
        else
            this.renderBadgeContent(); }
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: t, selectors: [["", "pBadge", ""]], inputs: { ptBadgeDirective: [1, "ptBadgeDirective"], pBadgePT: [1, "pBadgePT"], pBadgeUnstyled: [1, "pBadgeUnstyled"], disabled: [0, "badgeDisabled", "disabled"], badgeSize: "badgeSize", size: "size", severity: "severity", value: "value", badgeStyle: "badgeStyle", badgeStyleClass: "badgeStyleClass" }, features: [d.\u0275\u0275ProvidersFeature([g, { provide: z, useExisting: t }, { provide: C, useExisting: t }]), d.\u0275\u0275InheritDefinitionFeature] });
} return t; })(), j = (() => { class t extends B {
    componentName = "Badge";
    $pcBadge = o(S, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = o(k, { self: !0 });
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    styleClass = r();
    badgeSize = r();
    size = r();
    severity = r();
    value = r();
    badgeDisabled = r(!1, { transform: M });
    _componentStyle = o(g);
    get dataP() { return this.cn({ circle: this.value() != null && String(this.value()).length === 1, empty: this.value() == null, disabled: this.badgeDisabled(), [this.severity()]: this.severity(), [this.size()]: this.size() }); }
    static \u0275fac = (() => { let i; return function (n) { return (i || (i = d.\u0275\u0275getInheritedFactory(t)))(n || t); }; })();
    static \u0275cmp = d.\u0275\u0275defineComponent({ type: t, selectors: [["p-badge"]], hostVars: 5, hostBindings: function (e, n) { e & 2 && (d.\u0275\u0275attribute("data-p", n.dataP), d.\u0275\u0275classMap(n.cn(n.cx("root"), n.styleClass())), d.\u0275\u0275styleProp("display", n.badgeDisabled() ? "none" : null)); }, inputs: { styleClass: [1, "styleClass"], badgeSize: [1, "badgeSize"], size: [1, "size"], severity: [1, "severity"], value: [1, "value"], badgeDisabled: [1, "badgeDisabled"] }, features: [d.\u0275\u0275ProvidersFeature([g, { provide: S, useExisting: t }, { provide: C, useExisting: t }]), d.\u0275\u0275HostDirectivesFeature([E.Bind]), d.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, template: function (e, n) { e & 1 && d.\u0275\u0275text(0), e & 2 && d.\u0275\u0275textInterpolate(n.value()); }, dependencies: [I, p, T], encapsulation: 2, changeDetection: 0 });
} return t; })(), te = (() => { class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = d.\u0275\u0275defineInjector({ imports: [j, p, p] });
} return t; })();
export { j as Badge, V as BadgeClasses, ee as BadgeDirective, te as BadgeModule, g as BadgeStyle };
