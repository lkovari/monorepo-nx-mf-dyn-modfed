import "@nf-internal/chunk-JKOY2XUY";
import * as n from "@angular/core";
import { InjectionToken as f, input as o, inject as r, booleanAttribute as u, computed as x, effect as a } from "@angular/core";
import { NgControl as g } from "@angular/forms";
import { PARENT_INSTANCE as v } from "primeng/basecomponent";
import { BaseModelHolder as h } from "primeng/basemodelholder";
import * as c from "primeng/bind";
import { Bind as m } from "primeng/bind";
import { Fluid as b } from "primeng/fluid";
var p = `
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;
import { BaseStyle as I } from "primeng/base";
var T = `
    ${p}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`, y = { root: ({ instance: t }) => ["p-inputtext p-component", { "p-filled": t.$filled(), "p-inputtext-sm": t.pSize === "small", "p-inputtext-lg": t.pSize === "large", "p-invalid": t.invalid(), "p-variant-filled": t.$variant() === "filled", "p-inputtext-fluid": t.hasFluid }] }, l = (() => { class t extends I {
    name = "inputtext";
    style = T;
    classes = y;
    static \u0275fac = (() => { let e; return function (d) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(d || t); }; })();
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), N = (function (t) { return t.root = "p-inputtext", t; })(N || {}), s = new f("INPUTTEXT_INSTANCE"), j = (() => { class t extends h {
    componentName = "InputText";
    hostName = "";
    ptInputText = o();
    pInputTextPT = o();
    pInputTextUnstyled = o();
    bindDirectiveInstance = r(m, { self: !0 });
    $pcInputText = r(s, { optional: !0, skipSelf: !0 }) ?? void 0;
    ngControl = r(g, { optional: !0, self: !0 });
    pcFluid = r(b, { optional: !0, host: !0, skipSelf: !0 });
    pSize;
    variant = o();
    fluid = o(void 0, { transform: u });
    invalid = o(void 0, { transform: u });
    $variant = x(() => this.variant() || this.config.inputStyle() || this.config.inputVariant());
    _componentStyle = r(l);
    constructor() { super(), a(() => { let e = this.ptInputText() || this.pInputTextPT(); e && this.directivePT.set(e); }), a(() => { this.pInputTextUnstyled() && this.directiveUnstyled.set(this.pInputTextUnstyled()); }); }
    onAfterViewInit() { this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value), this.cd.detectChanges(); }
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptm("root")); }
    onDoCheck() { this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value); }
    onInput() { this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value); }
    get hasFluid() { return this.fluid() ?? !!this.pcFluid; }
    get dataP() { return this.cn({ invalid: this.invalid(), fluid: this.hasFluid, filled: this.$variant() === "filled", [this.pSize]: this.pSize }); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "pInputText", ""]], hostVars: 3, hostBindings: function (i, d) { i & 1 && n.\u0275\u0275listener("input", function () { return d.onInput(); }), i & 2 && (n.\u0275\u0275attribute("data-p", d.dataP), n.\u0275\u0275classMap(d.cx("root"))); }, inputs: { hostName: "hostName", ptInputText: [1, "ptInputText"], pInputTextPT: [1, "pInputTextPT"], pInputTextUnstyled: [1, "pInputTextUnstyled"], pSize: "pSize", variant: [1, "variant"], fluid: [1, "fluid"], invalid: [1, "invalid"] }, features: [n.\u0275\u0275ProvidersFeature([l, { provide: s, useExisting: t }, { provide: v, useExisting: t }]), n.\u0275\u0275HostDirectivesFeature([c.Bind]), n.\u0275\u0275InheritDefinitionFeature] });
} return t; })(), H = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = n.\u0275\u0275defineInjector({});
} return t; })();
export { j as InputText, N as InputTextClasses, H as InputTextModule, l as InputTextStyle };
