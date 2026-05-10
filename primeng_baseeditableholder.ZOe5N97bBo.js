import "@nf-internal/chunk-JKOY2XUY";
import * as d from "@angular/core";
import { input as t, booleanAttribute as a, signal as o, computed as s } from "@angular/core";
import { BaseModelHolder as l } from "primeng/basemodelholder";
var m = (() => { class i extends l {
    required = t(void 0, { transform: a });
    invalid = t(void 0, { transform: a });
    disabled = t(void 0, { transform: a });
    name = t();
    _disabled = o(!1);
    $disabled = s(() => this.disabled() || this._disabled());
    onModelChange = () => { };
    onModelTouched = () => { };
    writeDisabledState(e) { this._disabled.set(e); }
    writeControlValue(e, n) { }
    writeValue(e) { this.writeControlValue(e, this.writeModelValue.bind(this)); }
    registerOnChange(e) { this.onModelChange = e; }
    registerOnTouched(e) { this.onModelTouched = e; }
    setDisabledState(e) { this.writeDisabledState(e), this.cd.markForCheck(); }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = d.\u0275\u0275getInheritedFactory(i)))(r || i); }; })();
    static \u0275dir = d.\u0275\u0275defineDirective({ type: i, inputs: { required: [1, "required"], invalid: [1, "invalid"], disabled: [1, "disabled"], name: [1, "name"] }, features: [d.\u0275\u0275InheritDefinitionFeature] });
} return i; })();
export { m as BaseEditableHolder };
