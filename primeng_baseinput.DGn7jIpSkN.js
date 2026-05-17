import "@nf-internal/chunk-JKOY2XUY";
import * as n from "@angular/core";
import { inject as a, input as e, booleanAttribute as u, computed as r } from "@angular/core";
import { BaseEditableHolder as o } from "primeng/baseeditableholder";
import { Fluid as m } from "primeng/fluid";
var v = (() => { class i extends o {
    pcFluid = a(m, { optional: !0, host: !0, skipSelf: !0 });
    fluid = e(void 0, { transform: u });
    variant = e();
    size = e();
    inputSize = e();
    pattern = e();
    min = e();
    max = e();
    step = e();
    minlength = e();
    maxlength = e();
    $variant = r(() => this.variant() || this.config.inputStyle() || this.config.inputVariant());
    get hasFluid() { return this.fluid() ?? !!this.pcFluid; }
    static \u0275fac = (() => { let t; return function (d) { return (t || (t = n.\u0275\u0275getInheritedFactory(i)))(d || i); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i, inputs: { fluid: [1, "fluid"], variant: [1, "variant"], size: [1, "size"], inputSize: [1, "inputSize"], pattern: [1, "pattern"], min: [1, "min"], max: [1, "max"], step: [1, "step"], minlength: [1, "minlength"], maxlength: [1, "maxlength"] }, features: [n.\u0275\u0275InheritDefinitionFeature] });
} return i; })();
export { v as BaseInput };
