import "@nf-internal/chunk-JKOY2XUY";
import { CommonModule as f } from "@angular/common";
import * as i from "@angular/core";
import { InjectionToken as p, inject as s } from "@angular/core";
import { BaseComponent as a, PARENT_INSTANCE as m } from "primeng/basecomponent";
import * as r from "primeng/bind";
import { Bind as u, BindModule as g } from "primeng/bind";
var d = `
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;
import { BaseStyle as h } from "primeng/base";
var y = ["*"], I = { root: ({ instance: n }) => ["p-iconfield", { "p-iconfield-left": n.iconPosition == "left", "p-iconfield-right": n.iconPosition == "right" }] }, c = (() => { class n extends h {
    name = "iconfield";
    style = d;
    classes = I;
    static \u0275fac = (() => { let e; return function (t) { return (e || (e = i.\u0275\u0275getInheritedFactory(n)))(t || n); }; })();
    static \u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), v = (function (n) { return n.root = "p-iconfield", n; })(v || {}), l = new p("ICONFIELD_INSTANCE"), F = (() => { class n extends a {
    componentName = "IconField";
    hostName = "";
    _componentStyle = s(c);
    $pcIconField = s(l, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = s(u, { self: !0 });
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    iconPosition = "left";
    styleClass;
    static \u0275fac = (() => { let e; return function (t) { return (e || (e = i.\u0275\u0275getInheritedFactory(n)))(t || n); }; })();
    static \u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["p-iconfield"], ["p-iconField"], ["p-icon-field"]], hostVars: 2, hostBindings: function (o, t) { o & 2 && i.\u0275\u0275classMap(t.cn(t.cx("root"), t.styleClass)); }, inputs: { hostName: "hostName", iconPosition: "iconPosition", styleClass: "styleClass" }, features: [i.\u0275\u0275ProvidersFeature([c, { provide: l, useExisting: n }, { provide: m, useExisting: n }]), i.\u0275\u0275HostDirectivesFeature([r.Bind]), i.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: y, decls: 1, vars: 0, template: function (o, t) { o & 1 && (i.\u0275\u0275projectionDef(), i.\u0275\u0275projection(0)); }, dependencies: [f, g], encapsulation: 2, changeDetection: 0 });
} return n; })(), A = (() => { class n {
    static \u0275fac = function (o) { return new (o || n); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = i.\u0275\u0275defineInjector({ imports: [F] });
} return n; })();
export { F as IconField, v as IconFieldClasses, A as IconFieldModule, c as IconFieldStyle };
