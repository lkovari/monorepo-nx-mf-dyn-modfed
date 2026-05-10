import "@nf-internal/chunk-JKOY2XUY";
export * from "primeng/types/fluid";
import { CommonModule as f } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as u, inject as r } from "@angular/core";
import { BaseComponent as p, PARENT_INSTANCE as l } from "primeng/basecomponent";
import * as a from "primeng/bind";
import { Bind as m } from "primeng/bind";
import { BaseStyle as g } from "primeng/base";
var d = ["*"], v = { root: "p-fluid" }, s = (() => { class t extends g {
    name = "fluid";
    classes = v;
    static \u0275fac = (() => { let n; return function (o) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(o || t); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), y = (function (t) { return t.root = "p-fluid", t; })(y || {}), c = new u("FLUID_INSTANCE"), F = (() => { class t extends p {
    componentName = "Fluid";
    $pcFluid = r(c, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = r(m, { self: !0 });
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    _componentStyle = r(s);
    static \u0275fac = (() => { let n; return function (o) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(o || t); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["p-fluid"]], hostVars: 2, hostBindings: function (i, o) { i & 2 && e.\u0275\u0275classMap(o.cx("root")); }, features: [e.\u0275\u0275ProvidersFeature([s, { provide: c, useExisting: t }, { provide: l, useExisting: t }]), e.\u0275\u0275HostDirectivesFeature([a.Bind]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: d, decls: 1, vars: 0, template: function (i, o) { i & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, dependencies: [f], encapsulation: 2, changeDetection: 0 });
} return t; })(), E = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [F] });
} return t; })();
export { F as Fluid, y as FluidClasses, E as FluidModule, s as FluidStyle };
