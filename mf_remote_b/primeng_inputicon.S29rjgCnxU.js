import "@nf-internal/chunk-JKOY2XUY";
import { CommonModule as d } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as u, inject as s } from "@angular/core";
import { SharedModule as r } from "primeng/api";
import { BaseComponent as l, PARENT_INSTANCE as f } from "primeng/basecomponent";
import * as p from "primeng/bind";
import { Bind as m, BindModule as I } from "primeng/bind";
import { BaseStyle as y } from "primeng/base";
var g = ["*"], v = { root: "p-inputicon" }, c = (() => { class t extends y {
    name = "inputicon";
    classes = v;
    static \u0275fac = (() => { let n; return function (o) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(o || t); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), a = new u("INPUTICON_INSTANCE"), N = (() => { class t extends l {
    componentName = "InputIcon";
    hostName = "";
    styleClass;
    _componentStyle = s(c);
    $pcInputIcon = s(a, { optional: !0, skipSelf: !0 }) ?? void 0;
    bindDirectiveInstance = s(m, { self: !0 });
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])); }
    static \u0275fac = (() => { let n; return function (o) { return (n || (n = e.\u0275\u0275getInheritedFactory(t)))(o || t); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["p-inputicon"], ["p-inputIcon"]], hostVars: 2, hostBindings: function (i, o) { i & 2 && e.\u0275\u0275classMap(o.cn(o.cx("root"), o.styleClass)); }, inputs: { hostName: "hostName", styleClass: "styleClass" }, features: [e.\u0275\u0275ProvidersFeature([c, { provide: a, useExisting: t }, { provide: f, useExisting: t }]), e.\u0275\u0275HostDirectivesFeature([p.Bind]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: g, decls: 1, vars: 0, template: function (i, o) { i & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, dependencies: [d, r, I], encapsulation: 2, changeDetection: 0 });
} return t; })(), b = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [N, r, r] });
} return t; })();
export { N as InputIcon, b as InputIconModule, c as InputIconStyle };
