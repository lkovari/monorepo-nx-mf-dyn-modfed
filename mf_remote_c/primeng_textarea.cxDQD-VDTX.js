import "@nf-internal/chunk-JKOY2XUY";
import * as t from "@angular/core";
import { InjectionToken as x, inject as i, input as r, booleanAttribute as d, computed as g, EventEmitter as h, effect as s } from "@angular/core";
import { NgControl as v } from "@angular/forms";
import { PARENT_INSTANCE as m } from "primeng/basecomponent";
import { BaseModelHolder as b } from "primeng/basemodelholder";
import * as c from "primeng/bind";
import { Bind as y } from "primeng/bind";
import { Fluid as T } from "primeng/fluid";
var l = `
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;
import { BaseStyle as z } from "primeng/base";
var E = `
    ${l}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`, S = { root: ({ instance: e }) => ["p-textarea p-component", { "p-filled": e.$filled(), "p-textarea-resizable ": e.autoResize, "p-variant-filled": e.$variant() === "filled", "p-textarea-fluid": e.hasFluid, "p-inputfield-sm p-textarea-sm": e.pSize === "small", "p-textarea-lg p-inputfield-lg": e.pSize === "large", "p-invalid": e.invalid() }] }, u = (() => { class e extends z {
    name = "textarea";
    style = E;
    classes = S;
    static \u0275fac = (() => { let n; return function (o) { return (n || (n = t.\u0275\u0275getInheritedFactory(e)))(o || e); }; })();
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), k = (function (e) { return e.root = "p-textarea", e; })(k || {}), p = new x("TEXTAREA_INSTANCE"), X = (() => { class e extends b {
    componentName = "Textarea";
    bindDirectiveInstance = i(y, { self: !0 });
    $pcTextarea = i(p, { optional: !0, skipSelf: !0 }) ?? void 0;
    pTextareaPT = r();
    pTextareaUnstyled = r();
    autoResize;
    pSize;
    variant = r();
    fluid = r(void 0, { transform: d });
    invalid = r(void 0, { transform: d });
    $variant = g(() => this.variant() || this.config.inputStyle() || this.config.inputVariant());
    onResize = new h;
    ngControlSubscription;
    _componentStyle = i(u);
    ngControl = i(v, { optional: !0, self: !0 });
    pcFluid = i(T, { optional: !0, host: !0, skipSelf: !0 });
    get hasFluid() { return this.fluid() ?? !!this.pcFluid; }
    constructor() { super(), s(() => { let n = this.pTextareaPT(); n && this.directivePT.set(n); }), s(() => { this.pTextareaUnstyled() && this.directiveUnstyled.set(this.pTextareaUnstyled()); }); }
    onInit() { this.ngControl && (this.ngControlSubscription = this.ngControl.valueChanges.subscribe(() => { this.updateState(); })); }
    onAfterViewInit() { this.autoResize && this.resize(), this.cd.detectChanges(); }
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])), this.autoResize && this.resize(), this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value); }
    onInput(n) { this.writeModelValue(n.target?.value), this.updateState(); }
    resize(n) { this.el.nativeElement.style.height = "auto", this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px", parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight) ? (this.el.nativeElement.style.overflowY = "scroll", this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight) : this.el.nativeElement.style.overflow = "hidden", this.onResize.emit(n || {}); }
    updateState() { this.autoResize && this.resize(); }
    onDestroy() { this.ngControlSubscription && this.ngControlSubscription.unsubscribe(); }
    static \u0275fac = function (a) { return new (a || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "pTextarea", ""], ["", "pInputTextarea", ""]], hostVars: 2, hostBindings: function (a, o) { a & 1 && t.\u0275\u0275listener("input", function (f) { return o.onInput(f); }), a & 2 && t.\u0275\u0275classMap(o.cx("root")); }, inputs: { pTextareaPT: [1, "pTextareaPT"], pTextareaUnstyled: [1, "pTextareaUnstyled"], autoResize: [2, "autoResize", "autoResize", d], pSize: "pSize", variant: [1, "variant"], fluid: [1, "fluid"], invalid: [1, "invalid"] }, outputs: { onResize: "onResize" }, features: [t.\u0275\u0275ProvidersFeature([u, { provide: p, useExisting: e }, { provide: m, useExisting: e }]), t.\u0275\u0275HostDirectivesFeature([c.Bind]), t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), G = (() => { class e {
    static \u0275fac = function (a) { return new (a || e); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = t.\u0275\u0275defineInjector({});
} return e; })();
export { X as Textarea, k as TextareaClasses, G as TextareaModule, u as TextareaStyle };
