import { d as o } from "@nf-internal/chunk-3NBCSNB6";
import "@nf-internal/chunk-JKOY2XUY";
import * as e from "@angular/core";
import { signal as d, computed as n } from "@angular/core";
import { BaseComponent as a } from "primeng/basecomponent";
var c = (() => { class t extends a {
    modelValue = d(void 0);
    $filled = n(() => o(this.modelValue()));
    writeModelValue(i) { this.modelValue.set(i); }
    static \u0275fac = (() => { let i; return function (r) { return (i || (i = e.\u0275\u0275getInheritedFactory(t)))(r || t); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: t, features: [e.\u0275\u0275InheritDefinitionFeature] });
} return t; })();
export { c as BaseModelHolder };
