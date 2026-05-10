import { a as K } from "@nf-internal/chunk-T2UUZI2G";
import { I as D, t as _, u, v as L, w as M, y as B } from "@nf-internal/chunk-MIZIHZD3";
import { a as v, b as z, d as b, e as m, f as A, h as T, o as P } from "@nf-internal/chunk-3NBCSNB6";
import { a as E, b as F } from "@nf-internal/chunk-JKOY2XUY";
export * from "primeng/types/select";
import * as d from "@angular/common";
import { CommonModule as Q } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as U, forwardRef as Ft, inject as f, EventEmitter as c, booleanAttribute as r, numberAttribute as C, input as G, computed as O, signal as h, effect as Lt } from "@angular/core";
import { NG_VALUE_ACCESSOR as Mt } from "@angular/forms";
import * as W from "primeng/api";
import { SharedModule as y, TranslationKeys as S, PrimeTemplate as Bt } from "primeng/api";
import { AutoFocus as Dt } from "primeng/autofocus";
import { BaseComponent as zt, PARENT_INSTANCE as j } from "primeng/basecomponent";
import { BaseInput as At } from "primeng/baseinput";
import * as x from "primeng/bind";
import { BindModule as Y, Bind as Pt } from "primeng/bind";
import { unblockBodyScroll as Kt } from "primeng/dom";
import { IconField as Nt } from "primeng/iconfield";
import { CheckIcon as Rt, BlankIcon as Gt, TimesIcon as Ht, ChevronDownIcon as $t, SearchIcon as qt } from "primeng/icons";
import { InputIcon as Qt } from "primeng/inputicon";
import { InputText as Ut } from "primeng/inputtext";
import { Overlay as Wt } from "primeng/overlay";
import { Ripple as jt } from "primeng/ripple";
import { Scroller as Yt } from "primeng/scroller";
import { Tooltip as Zt } from "primeng/tooltip";
var N = `
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        align-self: center;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
        transform-origin: inherit;
        will-change: transform;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled):hover {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }
   
    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }

    .p-floatlabel-in .p-select-filter {
        padding-block-start: dt('select.padding.y');
        padding-block-end: dt('select.padding.y');
    }
`;
import { BaseStyle as Jt } from "primeng/base";
var g = i => ({ height: i }), w = i => ({ $implicit: i });
function ee(i, s) { if (i & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 6)), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(t.cx("optionCheckIcon")), e.\u0275\u0275property("pBind", t.$pcSelect == null ? null : t.$pcSelect.ptm("optionCheckIcon"));
} }
function te(i, s) { if (i & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 7)), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(t.cx("optionBlankIcon")), e.\u0275\u0275property("pBind", t.$pcSelect == null ? null : t.$pcSelect.ptm("optionBlankIcon"));
} }
function ie(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, ee, 1, 3, "svg", 4)(2, te, 1, 3, "svg", 5), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.selected), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.selected);
} }
function ne(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("pBind", t.$pcSelect == null ? null : t.$pcSelect.ptm("optionLabel")), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label ?? "empty");
} }
function oe(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
var le = ["item"], ae = ["group"], se = ["loader"], re = ["selectedItem"], pe = ["header"], R = ["filter"], ce = ["footer"], de = ["emptyfilter"], ue = ["empty"], _e = ["dropdownicon"], me = ["loadingicon"], he = ["clearicon"], fe = ["filtericon"], ge = ["onicon"], be = ["officon"], ye = ["cancelicon"], xe = ["focusInput"], Ie = ["editableInput"], ve = ["items"], Te = ["scroller"], Oe = ["overlay"], Se = ["firstHiddenFocusableEl"], Ce = ["lastHiddenFocusableEl"], H = i => ({ class: i }), $ = i => ({ options: i }), q = (i, s) => ({ $implicit: i, options: s }), we = () => ({});
function Ve(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275text(1), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label() === "p-emptylabel" ? "\xA0" : t.label());
} }
function ke(i, s) { if (i & 1 && e.\u0275\u0275elementContainer(0, 24), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngTemplateOutlet", t.selectedItemTemplate || t._selectedItemTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, w, t.selectedOption));
} }
function Ee(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label() === "p-emptylabel" ? "\xA0" : t.label());
} }
function Fe(i, s) { if (i & 1 && e.\u0275\u0275template(0, Ee, 2, 1, "span", 18), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngIf", t.isSelectedOptionEmpty());
} }
function Le(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "span", 22, 3), e.\u0275\u0275listener("focus", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onInputFocus(o)); })("blur", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onInputBlur(o)); })("keydown", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onKeyDown(o)); }), e.\u0275\u0275template(2, Ve, 2, 1, "ng-container", 20)(3, ke, 1, 4, "ng-container", 23)(4, Fe, 1, 1, "ng-template", null, 4, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275reference(5), n = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(n.cx("label")), e.\u0275\u0275property("pBind", n.ptm("label"))("pTooltip", n.tooltip)("pTooltipUnstyled", n.unstyled())("tooltipPosition", n.tooltipPosition)("positionStyle", n.tooltipPositionStyle)("tooltipStyleClass", n.tooltipStyleClass)("pAutoFocus", n.autofocus), e.\u0275\u0275attribute("aria-disabled", n.$disabled())("id", n.inputId)("aria-label", n.ariaLabel || (n.label() === "p-emptylabel" ? void 0 : n.label()))("aria-labelledby", n.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", n.overlayVisible ?? !1)("aria-controls", n.overlayVisible ? n.id + "_list" : null)("tabindex", n.$disabled() ? -1 : n.tabindex)("aria-activedescendant", n.focused ? n.focusedOptionId : void 0)("aria-required", n.required())("required", n.required() ? "" : void 0)("disabled", n.$disabled() ? "" : void 0)("data-p", n.labelDataP), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", !n.selectedItemTemplate && !n._selectedItemTemplate)("ngIfElse", t), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", (n.selectedItemTemplate || n._selectedItemTemplate) && !n.isSelectedOptionEmpty());
} }
function Me(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "input", 25, 5), e.\u0275\u0275listener("input", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onEditableInput(o)); })("keydown", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onKeyDown(o)); })("focus", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onInputFocus(o)); })("blur", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onInputBlur(o)); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(t.cx("label")), e.\u0275\u0275property("pBind", t.ptm("label"))("pAutoFocus", t.autofocus), e.\u0275\u0275attribute("id", t.inputId)("aria-haspopup", "listbox")("placeholder", t.modelValue() === void 0 || t.modelValue() === null ? t.placeholder() : void 0)("aria-label", t.ariaLabel || (t.label() === "p-emptylabel" ? void 0 : t.label()))("aria-activedescendant", t.focused ? t.focusedOptionId : void 0)("name", t.name())("minlength", t.minlength())("min", t.min())("max", t.max())("pattern", t.pattern())("size", t.inputSize())("maxlength", t.maxlength())("required", t.required() ? "" : void 0)("readonly", t.readonly ? "" : void 0)("disabled", t.$disabled() ? "" : void 0)("data-p", t.labelDataP);
} }
function Be(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275namespaceSVG(), e.\u0275\u0275elementStart(0, "svg", 28), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(l.clear(o)); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(t.cx("clearIcon")), e.\u0275\u0275property("pBind", t.ptm("clearIcon")), e.\u0275\u0275attribute("data-pc-section", "clearicon");
} }
function De(i, s) { }
function ze(i, s) { i & 1 && e.\u0275\u0275template(0, De, 0, 0, "ng-template"); }
function Ae(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "span", 29), e.\u0275\u0275listener("click", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(l.clear(o)); }), e.\u0275\u0275template(1, ze, 1, 0, null, 30), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(t.cx("clearIcon")), e.\u0275\u0275property("pBind", t.ptm("clearIcon")), e.\u0275\u0275attribute("data-pc-section", "clearicon"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.clearIconTemplate || t._clearIconTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(6, H, t.cx("clearIcon")));
} }
function Pe(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, Be, 1, 4, "svg", 26)(2, Ae, 2, 8, "span", 27), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.clearIconTemplate && !t._clearIconTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.clearIconTemplate || t._clearIconTemplate);
} }
function Ke(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function Ne(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, Ke, 1, 0, "ng-container", 31), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.loadingIconTemplate || t._loadingIconTemplate);
} }
function Re(i, s) { if (i & 1 && e.\u0275\u0275element(0, "span", 33), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275classMap(t.cn(t.cx("loadingIcon"), "pi-spin" + t.loadingIcon)), e.\u0275\u0275property("pBind", t.ptm("loadingIcon"));
} }
function Ge(i, s) { if (i & 1 && e.\u0275\u0275element(0, "span", 33), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275classMap(t.cn(t.cx("loadingIcon"), "pi pi-spinner pi-spin")), e.\u0275\u0275property("pBind", t.ptm("loadingIcon"));
} }
function He(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, Re, 1, 3, "span", 32)(2, Ge, 1, 3, "span", 32), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.loadingIcon), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.loadingIcon);
} }
function $e(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, Ne, 2, 1, "ng-container", 18)(2, He, 3, 2, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.loadingIconTemplate || t._loadingIconTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.loadingIconTemplate && !t._loadingIconTemplate);
} }
function qe(i, s) { if (i & 1 && e.\u0275\u0275element(0, "span", 36), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275classMap(t.cn(t.cx("dropdownIcon"), t.dropdownIcon)), e.\u0275\u0275property("pBind", t.ptm("dropdownIcon"));
} }
function Qe(i, s) { if (i & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 37)), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275classMap(t.cx("dropdownIcon")), e.\u0275\u0275property("pBind", t.ptm("dropdownIcon"));
} }
function Ue(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, qe, 1, 3, "span", 34)(2, Qe, 1, 3, "svg", 35), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.dropdownIcon), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.dropdownIcon);
} }
function We(i, s) { }
function je(i, s) { i & 1 && e.\u0275\u0275template(0, We, 0, 0, "ng-template"); }
function Ye(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 36), e.\u0275\u0275template(1, je, 1, 0, null, 30), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(t.cx("dropdownIcon")), e.\u0275\u0275property("pBind", t.ptm("dropdownIcon")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.dropdownIconTemplate || t._dropdownIconTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(5, H, t.cx("dropdownIcon")));
} }
function Ze(i, s) { if (i & 1 && e.\u0275\u0275template(0, Ue, 3, 2, "ng-container", 18)(1, Ye, 2, 7, "span", 34), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngIf", !t.dropdownIconTemplate && !t._dropdownIconTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.dropdownIconTemplate || t._dropdownIconTemplate);
} }
function Je(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function Xe(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function et(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, Xe, 1, 0, "ng-container", 30), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.filterTemplate || t._filterTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, $, t.filterOptions));
} }
function tt(i, s) { if (i & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 45)), i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275property("pBind", t.ptm("filterIcon"));
} }
function it(i, s) { }
function nt(i, s) { i & 1 && e.\u0275\u0275template(0, it, 0, 0, "ng-template"); }
function ot(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 36), e.\u0275\u0275template(1, nt, 1, 0, null, 31), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275property("pBind", t.ptm("filterIcon")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.filterIconTemplate || t._filterIconTemplate);
} }
function lt(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "p-iconfield", 41)(1, "input", 42, 10), e.\u0275\u0275listener("input", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(l.onFilterInputChange(o)); })("keydown", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(l.onFilterKeyDown(o)); })("blur", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(l.onFilterBlur(o)); }), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "p-inputicon", 41), e.\u0275\u0275template(4, tt, 1, 1, "svg", 43)(5, ot, 2, 2, "span", 44), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275property("pt", t.ptm("pcFilterContainer"))("unstyled", t.unstyled()), e.\u0275\u0275advance(), e.\u0275\u0275classMap(t.cx("pcFilter")), e.\u0275\u0275property("pSize", t.size())("value", t._filterValue() || "")("variant", t.$variant())("pt", t.ptm("pcFilter"))("unstyled", t.unstyled()), e.\u0275\u0275attribute("placeholder", t.filterPlaceholder)("aria-owns", t.id + "_list")("aria-label", t.ariaFilterLabel)("aria-activedescendant", t.focusedOptionId), e.\u0275\u0275advance(2), e.\u0275\u0275property("pt", t.ptm("pcFilterIconContainer"))("unstyled", t.unstyled()), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.filterIconTemplate && !t._filterIconTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.filterIconTemplate || t._filterIconTemplate);
} }
function at(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 29), e.\u0275\u0275listener("click", function (n) { return n.stopPropagation(); }), e.\u0275\u0275template(1, et, 2, 4, "ng-container", 20)(2, lt, 6, 17, "ng-template", null, 9, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275reference(3), n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(n.cx("header")), e.\u0275\u0275property("pBind", n.ptm("header")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.filterTemplate || n._filterTemplate)("ngIfElse", t);
} }
function st(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function rt(i, s) { if (i & 1 && e.\u0275\u0275template(0, st, 1, 0, "ng-container", 30), i & 2) {
    let t = s.$implicit, n = s.options;
    e.\u0275\u0275nextContext(2);
    let o = e.\u0275\u0275reference(9);
    e.\u0275\u0275property("ngTemplateOutlet", o)("ngTemplateOutletContext", e.\u0275\u0275pureFunction2(2, q, t, n));
} }
function pt(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function ct(i, s) { if (i & 1 && e.\u0275\u0275template(0, pt, 1, 0, "ng-container", 30), i & 2) {
    let t = s.options, n = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275property("ngTemplateOutlet", n.loaderTemplate || n._loaderTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, $, t));
} }
function dt(i, s) { i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, ct, 1, 4, "ng-template", null, 12, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementContainerEnd()); }
function ut(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "p-scroller", 46, 11), e.\u0275\u0275listener("onLazyLoad", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(l.onLazyLoad.emit(o)); }), e.\u0275\u0275template(2, rt, 1, 5, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor)(4, dt, 3, 0, "ng-container", 18), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275styleMap(e.\u0275\u0275pureFunction1(9, g, t.scrollHeight)), e.\u0275\u0275property("items", t.visibleOptions())("itemSize", t.virtualScrollItemSize)("autoSize", !0)("lazy", t.lazy)("options", t.virtualScrollOptions)("pt", t.ptm("virtualScroller")), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngIf", t.loaderTemplate || t._loaderTemplate);
} }
function _t(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function mt(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, _t, 1, 0, "ng-container", 30), e.\u0275\u0275elementContainerEnd()), i & 2) {
    e.\u0275\u0275nextContext();
    let t = e.\u0275\u0275reference(9), n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", e.\u0275\u0275pureFunction2(3, q, n.visibleOptions(), e.\u0275\u0275pureFunction0(2, we)));
} }
function ht(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "span", 36), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(2).$implicit, n = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275classMap(n.cx("optionGroupLabel")), e.\u0275\u0275property("pBind", n.ptm("optionGroupLabel")), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.getOptionGroupLabel(t.optionGroup));
} }
function ft(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function gt(i, s) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "li", 50), e.\u0275\u0275template(2, ht, 2, 4, "span", 34)(3, ft, 1, 0, "ng-container", 30), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(), n = t.$implicit, o = t.index, l = e.\u0275\u0275nextContext().options, a = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275classMap(a.cx("optionGroup")), e.\u0275\u0275property("ngStyle", e.\u0275\u0275pureFunction1(8, g, l.itemSize + "px"))("pBind", a.ptm("optionGroup")), e.\u0275\u0275attribute("id", a.id + "_" + a.getOptionIndex(o, l)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !a.groupTemplate && !a._groupTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", a.groupTemplate || a._groupTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(10, w, n.optionGroup));
} }
function bt(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "p-selectItem", 51), e.\u0275\u0275listener("onClick", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext().$implicit, a = e.\u0275\u0275nextContext(3); return e.\u0275\u0275resetView(a.onOptionSelect(o, l)); })("onMouseEnter", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext().index, a = e.\u0275\u0275nextContext().options, p = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(p.onOptionMouseEnter(o, p.getOptionIndex(l, a))); }), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(), n = t.$implicit, o = t.index, l = e.\u0275\u0275nextContext().options, a = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("id", a.id + "_" + a.getOptionIndex(o, l))("option", n)("checkmark", a.checkmark)("selected", a.isSelected(n))("label", a.getOptionLabel(n))("disabled", a.isOptionDisabled(n))("template", a.itemTemplate || a._itemTemplate)("focused", a.focusedOptionIndex() === a.getOptionIndex(o, l))("ariaPosInset", a.getAriaPosInset(a.getOptionIndex(o, l)))("ariaSetSize", a.ariaSetSize)("index", o)("unstyled", a.unstyled())("scrollerOptions", l);
} }
function yt(i, s) { if (i & 1 && e.\u0275\u0275template(0, gt, 4, 12, "ng-container", 18)(1, bt, 2, 13, "ng-container", 18), i & 2) {
    let t = s.$implicit, n = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275property("ngIf", n.isOptionGroup(t)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.isOptionGroup(t));
} }
function xt(i, s) { if (i & 1 && e.\u0275\u0275text(0), i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275textInterpolate1(" ", t.emptyFilterMessageLabel, " ");
} }
function It(i, s) { i & 1 && e.\u0275\u0275elementContainer(0, null, 14); }
function vt(i, s) { if (i & 1 && e.\u0275\u0275template(0, It, 2, 0, "ng-container", 31), i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275property("ngTemplateOutlet", t.emptyFilterTemplate || t._emptyFilterTemplate || t.emptyTemplate || t._emptyTemplate);
} }
function Tt(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "li", 50), e.\u0275\u0275conditionalCreate(1, xt, 1, 1)(2, vt, 1, 1, "ng-container"), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext().options, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(n.cx("emptyMessage")), e.\u0275\u0275property("ngStyle", e.\u0275\u0275pureFunction1(5, g, t.itemSize + "px"))("pBind", n.ptm("emptyMessage")), e.\u0275\u0275advance(), e.\u0275\u0275conditional(!n.emptyFilterTemplate && !n._emptyFilterTemplate && !n.emptyTemplate ? 1 : 2);
} }
function Ot(i, s) { if (i & 1 && e.\u0275\u0275text(0), i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275textInterpolate1(" ", t.emptyMessageLabel || t.emptyFilterMessageLabel, " ");
} }
function St(i, s) { i & 1 && e.\u0275\u0275elementContainer(0, null, 15); }
function Ct(i, s) { if (i & 1 && e.\u0275\u0275template(0, St, 2, 0, "ng-container", 31), i & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275property("ngTemplateOutlet", t.emptyTemplate || t._emptyTemplate);
} }
function wt(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "li", 50), e.\u0275\u0275conditionalCreate(1, Ot, 1, 1)(2, Ct, 1, 1, "ng-container"), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext().options, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(n.cx("emptyMessage")), e.\u0275\u0275property("ngStyle", e.\u0275\u0275pureFunction1(5, g, t.itemSize + "px"))("pBind", n.ptm("emptyMessage")), e.\u0275\u0275advance(), e.\u0275\u0275conditional(!n.emptyTemplate && !n._emptyTemplate ? 1 : 2);
} }
function Vt(i, s) { if (i & 1 && (e.\u0275\u0275elementStart(0, "ul", 47, 13), e.\u0275\u0275template(2, yt, 2, 2, "ng-template", 48)(3, Tt, 3, 7, "li", 49)(4, wt, 3, 7, "li", 49), e.\u0275\u0275elementEnd()), i & 2) {
    let t = s.$implicit, n = s.options, o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275styleMap(n.contentStyle), e.\u0275\u0275classMap(o.cn(o.cx("list"), n.contentStyleClass)), e.\u0275\u0275property("pBind", o.ptm("list")), e.\u0275\u0275attribute("id", o.id + "_list")("aria-label", o.listLabel), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.filterValue && o.isEmpty()), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !o.filterValue && o.isEmpty());
} }
function kt(i, s) { i & 1 && e.\u0275\u0275elementContainer(0); }
function Et(i, s) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 38)(1, "span", 39, 6), e.\u0275\u0275listener("focus", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onFirstHiddenFocus(o)); }), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, Je, 1, 0, "ng-container", 31)(4, at, 4, 5, "div", 27), e.\u0275\u0275elementStart(5, "div", 36), e.\u0275\u0275template(6, ut, 5, 11, "p-scroller", 40)(7, mt, 2, 6, "ng-container", 18)(8, Vt, 5, 10, "ng-template", null, 7, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(10, kt, 1, 0, "ng-container", 31), e.\u0275\u0275elementStart(11, "span", 39, 8), e.\u0275\u0275listener("focus", function (o) { e.\u0275\u0275restoreView(t); let l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onLastHiddenFocus(o)); }), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(t.cn(t.cx("overlay"), t.panelStyleClass)), e.\u0275\u0275property("ngStyle", t.panelStyle)("pBind", t.ptm("overlay")), e.\u0275\u0275attribute("data-p", t.overlayDataP), e.\u0275\u0275advance(), e.\u0275\u0275property("pBind", t.ptm("hiddenFirstFocusableEl")), e.\u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", !0)("data-p-hidden-focusable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", t.headerTemplate || t._headerTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.filter), e.\u0275\u0275advance(), e.\u0275\u0275classMap(t.cx("listContainer")), e.\u0275\u0275styleProp("max-height", t.virtualScroll ? "auto" : t.scrollHeight || "auto"), e.\u0275\u0275property("pBind", t.ptm("listContainer")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.virtualScroll), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.virtualScroll), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngTemplateOutlet", t.footerTemplate || t._footerTemplate), e.\u0275\u0275advance(), e.\u0275\u0275property("pBind", t.ptm("hiddenLastFocusableEl")), e.\u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", !0)("data-p-hidden-focusable", !0);
} }
var Xt = `
    ${N}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`, ei = { root: ({ instance: i }) => ["p-select p-component p-inputwrapper", { "p-disabled": i.$disabled(), "p-variant-filled": i.$variant() === "filled", "p-focus": i.focused, "p-invalid": i.invalid(), "p-inputwrapper-filled": i.$filled(), "p-inputwrapper-focus": i.focused || i.overlayVisible, "p-select-open": i.overlayVisible, "p-select-fluid": i.hasFluid, "p-select-sm p-inputfield-sm": i.size() === "small", "p-select-lg p-inputfield-lg": i.size() === "large" }], label: ({ instance: i }) => ["p-select-label", { "p-placeholder": i.placeholder() && i.label() === i.placeholder(), "p-select-label-empty": !i.editable && !i.selectedItemTemplate && (i.label() === void 0 || i.label() === null || i.label() === "p-emptylabel" || i.label().length === 0) }], clearIcon: "p-select-clear-icon", dropdown: "p-select-dropdown", loadingIcon: "p-select-loading-icon", dropdownIcon: "p-select-dropdown-icon", overlay: "p-select-overlay p-component-overlay p-component", header: "p-select-header", pcFilter: "p-select-filter", listContainer: "p-select-list-container", list: "p-select-list", optionGroup: "p-select-option-group", optionGroupLabel: "p-select-option-group-label", option: ({ instance: i }) => ["p-select-option", { "p-select-option-selected": i.selected && !i.checkmark, "p-disabled": i.disabled, "p-focus": i.focused }], optionLabel: "p-select-option-label", optionCheckIcon: "p-select-option-check-icon", optionBlankIcon: "p-select-option-blank-icon", emptyMessage: "p-select-empty-message" }, I = (() => { class i extends Jt {
    name = "select";
    style = Xt;
    classes = ei;
    static \u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac });
} return i; })(), ti = (function (i) { return i.root = "p-select", i.label = "p-select-label", i.clearIcon = "p-select-clear-icon", i.dropdown = "p-select-dropdown", i.loadingIcon = "p-select-loading-icon", i.dropdownIcon = "p-select-dropdown-icon", i.overlay = "p-select-overlay", i.header = "p-select-header", i.pcFilter = "p-select-filter", i.listContainer = "p-select-list-container", i.list = "p-select-list", i.optionGroup = "p-select-option-group", i.optionGroupLabel = "p-select-option-group-label", i.option = "p-select-option", i.optionLabel = "p-select-option-label", i.optionCheckIcon = "p-select-option-check-icon", i.optionBlankIcon = "p-select-option-blank-icon", i.emptyMessage = "p-select-empty-message", i; })(ti || {}), Z = new U("SELECT_INSTANCE"), ii = new U("SELECT_ITEM_INSTANCE"), ni = { provide: Mt, useExisting: Ft(() => J), multi: !0 }, oi = (() => { class i extends zt {
    hostName = "select";
    $pcSelectItem = f(ii, { optional: !0, skipSelf: !0 }) ?? void 0;
    $pcSelect = f(Z, { optional: !0, skipSelf: !0 }) ?? void 0;
    id;
    option;
    selected;
    focused;
    label;
    disabled;
    visible;
    itemSize;
    ariaPosInset;
    ariaSetSize;
    template;
    checkmark;
    index;
    scrollerOptions;
    onClick = new c;
    onMouseEnter = new c;
    _componentStyle = f(I);
    onOptionClick(t) { this.onClick.emit(t); }
    onOptionMouseEnter(t) { this.onMouseEnter.emit(t); }
    getPTOptions() { return this.$pcSelect?.getPTItemOptions?.(this.option, this.scrollerOptions, this.index ?? 0, "option") ?? this.$pcSelect?.ptm("option", { context: { option: this.option, selected: this.selected, focused: this.focused, disabled: this.disabled } }); }
    static \u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(o || i); }; })();
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["p-selectItem"]], inputs: { id: "id", option: "option", selected: [2, "selected", "selected", r], focused: [2, "focused", "focused", r], label: "label", disabled: [2, "disabled", "disabled", r], visible: [2, "visible", "visible", r], itemSize: [2, "itemSize", "itemSize", C], ariaPosInset: "ariaPosInset", ariaSetSize: "ariaSetSize", template: "template", checkmark: [2, "checkmark", "checkmark", r], index: "index", scrollerOptions: "scrollerOptions" }, outputs: { onClick: "onClick", onMouseEnter: "onMouseEnter" }, features: [e.\u0275\u0275ProvidersFeature([I, { provide: j, useExisting: i }]), e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 21, consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "pBind", "ngStyle"], [4, "ngIf"], [3, "pBind", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "blank", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "blank", 3, "pBind"], [3, "pBind"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "li", 0), e.\u0275\u0275listener("click", function (a) { return o.onOptionClick(a); })("mouseenter", function (a) { return o.onOptionMouseEnter(a); }), e.\u0275\u0275template(1, ie, 3, 2, "ng-container", 1)(2, ne, 2, 2, "span", 2)(3, oe, 1, 0, "ng-container", 3), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275classMap(o.cx("option")), e.\u0275\u0275property("id", o.id)("pBind", o.getPTOptions())("ngStyle", e.\u0275\u0275pureFunction1(17, g, (o.scrollerOptions == null ? null : o.scrollerOptions.itemSize) + "px")), e.\u0275\u0275attribute("aria-label", o.label)("aria-setsize", o.ariaSetSize)("aria-posinset", o.ariaPosInset)("aria-selected", o.selected)("data-p-focused", o.focused)("data-p-highlight", o.selected)("data-p-selected", o.selected)("data-p-disabled", o.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.checkmark), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !o.template), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", o.template)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(19, w, o.option))); }, dependencies: [Q, d.NgIf, d.NgTemplateOutlet, d.NgStyle, y, jt, Rt, Gt, Y, x.Bind], encapsulation: 2 });
} return i; })(), J = (() => { class i extends At {
    zone;
    filterService;
    componentName = "Select";
    bindDirectiveInstance = f(Pt, { self: !0 });
    id;
    scrollHeight = "200px";
    filter;
    panelStyle;
    styleClass;
    panelStyleClass;
    readonly;
    editable;
    tabindex = 0;
    set placeholder(t) { this._placeholder.set(t); }
    get placeholder() { return this._placeholder.asReadonly(); }
    loadingIcon;
    filterPlaceholder;
    filterLocale;
    inputId;
    dataKey;
    filterBy;
    filterFields;
    autofocus;
    resetFilterOnHide = !1;
    checkmark = !1;
    dropdownIcon;
    loading = !1;
    optionLabel;
    optionValue;
    optionDisabled;
    optionGroupLabel = "label";
    optionGroupChildren = "items";
    group;
    showClear;
    emptyFilterMessage = "";
    emptyMessage = "";
    lazy = !1;
    virtualScroll;
    virtualScrollItemSize;
    virtualScrollOptions;
    overlayOptions;
    ariaFilterLabel;
    ariaLabel;
    ariaLabelledBy;
    filterMatchMode = "contains";
    tooltip = "";
    tooltipPosition = "right";
    tooltipPositionStyle = "absolute";
    tooltipStyleClass;
    focusOnHover = !0;
    selectOnFocus = !1;
    autoOptionFocus = !1;
    autofocusFilter = !0;
    get filterValue() { return this._filterValue(); }
    set filterValue(t) { setTimeout(() => { this._filterValue.set(t); }); }
    get options() { return this._options(); }
    set options(t) { z(t, this._options()) || this._options.set(t); }
    appendTo = G(void 0);
    motionOptions = G(void 0);
    onChange = new c;
    onFilter = new c;
    onFocus = new c;
    onBlur = new c;
    onClick = new c;
    onShow = new c;
    onHide = new c;
    onClear = new c;
    onLazyLoad = new c;
    _componentStyle = f(I);
    filterViewChild;
    focusInputViewChild;
    editableInputViewChild;
    itemsViewChild;
    scroller;
    overlayViewChild;
    firstHiddenFocusableElementOnOverlay;
    lastHiddenFocusableElementOnOverlay;
    itemsWrapper;
    $appendTo = O(() => this.appendTo() || this.config.overlayAppendTo());
    itemTemplate;
    groupTemplate;
    loaderTemplate;
    selectedItemTemplate;
    headerTemplate;
    filterTemplate;
    footerTemplate;
    emptyFilterTemplate;
    emptyTemplate;
    dropdownIconTemplate;
    loadingIconTemplate;
    clearIconTemplate;
    filterIconTemplate;
    onIconTemplate;
    offIconTemplate;
    cancelIconTemplate;
    templates;
    _itemTemplate;
    _selectedItemTemplate;
    _headerTemplate;
    _filterTemplate;
    _footerTemplate;
    _emptyFilterTemplate;
    _emptyTemplate;
    _groupTemplate;
    _loaderTemplate;
    _dropdownIconTemplate;
    _loadingIconTemplate;
    _clearIconTemplate;
    _filterIconTemplate;
    _cancelIconTemplate;
    _onIconTemplate;
    _offIconTemplate;
    filterOptions;
    _options = h(null);
    _placeholder = h(void 0);
    value;
    hover;
    focused;
    overlayVisible;
    optionsChanged;
    panel;
    dimensionsUpdated;
    hoveredItem;
    selectedOptionUpdated;
    _filterValue = h(null);
    searchValue;
    searchIndex;
    searchTimeout;
    previousSearchChar;
    currentSearchChar;
    preventModelTouched;
    focusedOptionIndex = h(-1);
    labelId;
    listId;
    clicked = h(!1);
    get emptyMessageLabel() { return this.emptyMessage || this.config.getTranslation(S.EMPTY_MESSAGE); }
    get emptyFilterMessageLabel() { return this.emptyFilterMessage || this.config.getTranslation(S.EMPTY_FILTER_MESSAGE); }
    get isVisibleClearIcon() { return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.$disabled(); }
    get listLabel() { return this.config.getTranslation(S.ARIA).listLabel; }
    get focusedOptionId() { return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null; }
    visibleOptions = O(() => { let t = this.getAllVisibleAndNonVisibleOptions(); if (this._filterValue()) {
        let o = !(this.filterBy || this.optionLabel) && !this.filterFields && !this.optionValue ? this.options?.filter(l => l.label ? l.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1 : l.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1) : this.filterService.filter(t, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
        if (this.group) {
            let l = this.options || [], a = [];
            return l.forEach(p => { let k = this.getOptionGroupChildren(p).filter(X => o?.includes(X)); k.length > 0 && a.push(F(E({}, p), { [typeof this.optionGroupChildren == "string" ? this.optionGroupChildren : "items"]: [...k] })); }), this.flatOptions(a);
        }
        return o;
    } return t; });
    label = O(() => { let t = this.getAllVisibleAndNonVisibleOptions(), n = t.findIndex(o => this.isOptionValueEqualsModelValue(o)); if (n !== -1) {
        let o = t[n];
        return this.getOptionLabel(o);
    } return this.placeholder() || "p-emptylabel"; });
    selectedOption;
    constructor(t, n) { super(), this.zone = t, this.filterService = n, Lt(() => { let o = this.modelValue(), l = this.visibleOptions(); if (l && b(l)) {
        let a = this.findSelectedOptionIndex();
        if (a !== -1 || o === void 0 || typeof o == "string" && o.length === 0 || this.isModelValueNotSet() || this.editable)
            this.selectedOption = l[a];
        else {
            let p = l.findIndex(V => this.isSelected(V));
            p !== -1 && (this.selectedOption = l[p]);
        }
    } v(l) && (o === void 0 || this.isModelValueNotSet()) && b(this.selectedOption) && (this.selectedOption = null), o !== void 0 && this.editable && this.updateEditableLabel(), this.cd.markForCheck(); }); }
    isModelValueNotSet() { return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption); }
    getAllVisibleAndNonVisibleOptions() { return this.group ? this.flatOptions(this.options) : this.options || []; }
    onInit() { this.id = this.id || K("pn_id_"), this.autoUpdateModel(), this.filterBy && (this.filterOptions = { filter: t => this.onFilterInputChange(t), reset: () => this.resetFilter() }); }
    onAfterContentInit() { this.templates.forEach(t => { switch (t.getType()) {
        case "item":
            this._itemTemplate = t.template;
            break;
        case "selectedItem":
            this._selectedItemTemplate = t.template;
            break;
        case "header":
            this._headerTemplate = t.template;
            break;
        case "filter":
            this._filterTemplate = t.template;
            break;
        case "footer":
            this._footerTemplate = t.template;
            break;
        case "emptyfilter":
            this._emptyFilterTemplate = t.template;
            break;
        case "empty":
            this._emptyTemplate = t.template;
            break;
        case "group":
            this._groupTemplate = t.template;
            break;
        case "loader":
            this._loaderTemplate = t.template;
            break;
        case "dropdownicon":
            this._dropdownIconTemplate = t.template;
            break;
        case "loadingicon":
            this._loadingIconTemplate = t.template;
            break;
        case "clearicon":
            this._clearIconTemplate = t.template;
            break;
        case "filtericon":
            this._filterIconTemplate = t.template;
            break;
        case "cancelicon":
            this._cancelIconTemplate = t.template;
            break;
        case "onicon":
            this._onIconTemplate = t.template;
            break;
        case "officon":
            this._offIconTemplate = t.template;
            break;
        default:
            this._itemTemplate = t.template;
            break;
    } }); }
    onAfterViewChecked() { if (this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"])), this.optionsChanged && this.overlayVisible && (this.optionsChanged = !1, this.zone.runOutsideAngular(() => { setTimeout(() => { this.overlayViewChild && this.overlayViewChild.alignOverlay(); }, 1); })), this.selectedOptionUpdated && this.itemsWrapper) {
        let t = _(this.overlayViewChild?.overlayViewChild?.nativeElement, 'li[data-p-selected="true"]');
        t && D(this.itemsWrapper, t), this.selectedOptionUpdated = !1;
    } }
    flatOptions(t) { return (t || []).reduce((n, o, l) => { n.push({ optionGroup: o, group: !0, index: l }); let a = this.getOptionGroupChildren(o); return a && a.forEach(p => n.push(p)), n; }, []); }
    autoUpdateModel() { this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption() && (this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()), this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], !1)); }
    onOptionSelect(t, n, o = !0, l = !1) { if (!this.isOptionDisabled(n)) {
        if (!this.isSelected(n)) {
            let a = this.getOptionValue(n);
            this.updateModel(a, t), this.focusedOptionIndex.set(this.findSelectedOptionIndex()), l === !1 && this.onChange.emit({ originalEvent: t, value: a });
        }
        o && this.hide(!0);
    } }
    onOptionMouseEnter(t, n) { this.focusOnHover && this.changeFocusedOptionIndex(t, n); }
    updateModel(t, n) { this.value = t, this.onModelChange(t), this.writeModelValue(t), this.selectedOptionUpdated = !0; }
    allowModelChange() { return !!this.modelValue() && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length; }
    isSelected(t) { return this.isOptionValueEqualsModelValue(t); }
    isOptionValueEqualsModelValue(t) { return t != null && !this.isOptionGroup(t) && A(this.modelValue(), this.getOptionValue(t), this.equalityKey()); }
    onAfterViewInit() { this.editable && this.updateEditableLabel(), this.updatePlaceHolderForFloatingLabel(); }
    updatePlaceHolderForFloatingLabel() { let t = this.el.nativeElement.parentElement, n = t?.classList.contains("p-float-label"); if (t && n && !this.selectedOption) {
        let o = t.querySelector("label");
        o && this._placeholder.set(o.textContent);
    } }
    updateEditableLabel() { this.editableInputViewChild && (this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || ""); }
    clearEditableLabel() { this.editableInputViewChild && (this.editableInputViewChild.nativeElement.value = ""); }
    getOptionIndex(t, n) { return this.virtualScrollerDisabled ? t : n && n.getItemOptions(t).index; }
    getOptionLabel(t) { return this.optionLabel !== void 0 && this.optionLabel !== null ? m(t, this.optionLabel) : t && t.label !== void 0 ? t.label : t; }
    getOptionValue(t) { return this.optionValue && this.optionValue !== null ? m(t, this.optionValue) : !this.optionLabel && t && t.value !== void 0 ? t.value : t; }
    getPTItemOptions(t, n, o, l) { return this.ptm(l, { context: { option: t, index: o, selected: this.isSelected(t), focused: this.focusedOptionIndex() === this.getOptionIndex(o, n), disabled: this.isOptionDisabled(t) } }); }
    isSelectedOptionEmpty() { return v(this.selectedOption); }
    isOptionDisabled(t) { return this.optionDisabled ? m(t, this.optionDisabled) : t && t.disabled !== void 0 ? t.disabled : !1; }
    getOptionGroupLabel(t) { return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? m(t, this.optionGroupLabel) : t && t.label !== void 0 ? t.label : t; }
    getOptionGroupChildren(t) { return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? m(t, this.optionGroupChildren) : t.items; }
    getAriaPosInset(t) { return (this.optionGroupLabel ? t - this.visibleOptions().slice(0, t).filter(n => this.isOptionGroup(n)).length : t) + 1; }
    get ariaSetSize() { return this.visibleOptions().filter(t => !this.isOptionGroup(t)).length; }
    resetFilter() { this._filterValue.set(null), this.filterViewChild && this.filterViewChild.nativeElement && (this.filterViewChild.nativeElement.value = ""); }
    onContainerClick(t) { this.$disabled() || this.readonly || this.loading || t.target.tagName === "INPUT" || t.target.getAttribute("data-pc-section") === "clearicon" || t.target.closest('[data-pc-section="clearicon"]') || ((!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(t.target)) && (this.overlayVisible ? this.hide(!0) : this.show(!0)), this.focusInputViewChild?.nativeElement.focus({ preventScroll: !0 }), this.onClick.emit(t), this.clicked.set(!0), this.cd.detectChanges()); }
    isEmpty() { return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0; }
    onEditableInput(t) { let n = t.target.value; this.searchValue = "", !this.searchOptions(t, n) && this.focusedOptionIndex.set(-1), this.onModelChange(n), this.updateModel(n || null, t), setTimeout(() => { this.onChange.emit({ originalEvent: t, value: n }); }, 1), !this.overlayVisible && b(n) && this.show(); }
    show(t) { this.overlayVisible = !0, this.focusedOptionIndex.set(this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex()), t && u(this.focusInputViewChild?.nativeElement), this.cd.markForCheck(); }
    onOverlayBeforeEnter(t) { if (this.itemsWrapper = _(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '[data-pc-name="virtualscroller"]' : '[data-pc-section="listcontainer"]'), this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement), this.options && this.options.length)
        if (this.virtualScroll) {
            let n = this.modelValue() ? this.focusedOptionIndex() : -1;
            n !== -1 && setTimeout(() => { this.scroller?.scrollToIndex(n); }, 10);
        }
        else {
            let n = _(this.itemsWrapper, '[data-p-selected="true"]');
            n && n.scrollIntoView({ block: "nearest", inline: "nearest" });
        } this.filterViewChild && this.filterViewChild.nativeElement && (this.preventModelTouched = !0, this.autofocusFilter && !this.editable && this.filterViewChild.nativeElement.focus()), this.onShow.emit(t); }
    onOverlayAfterLeave(t) { this.itemsWrapper = null, this.onModelTouched(), this.onHide.emit(t); }
    hide(t) { this.overlayVisible = !1, this.focusedOptionIndex.set(-1), this.clicked.set(!1), this.searchValue = "", this.overlayOptions?.mode === "modal" && Kt(), this.filter && this.resetFilterOnHide && this.resetFilter(), t && (this.focusInputViewChild && u(this.focusInputViewChild?.nativeElement), this.editable && this.editableInputViewChild && u(this.editableInputViewChild?.nativeElement)), this.cd.markForCheck(); }
    onInputFocus(t) { if (this.$disabled())
        return; this.focused = !0; let n = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1; this.focusedOptionIndex.set(n), this.overlayVisible && this.scrollInView(this.focusedOptionIndex()), this.onFocus.emit(t); }
    onInputBlur(t) { this.focused = !1, this.onBlur.emit(t), !this.preventModelTouched && !this.overlayVisible && this.onModelTouched(), this.preventModelTouched = !1; }
    onKeyDown(t, n = !1) { if (!(this.$disabled() || this.readonly || this.loading)) {
        switch (t.code) {
            case "ArrowDown":
                this.onArrowDownKey(t);
                break;
            case "ArrowUp":
                this.onArrowUpKey(t, this.editable);
                break;
            case "ArrowLeft":
            case "ArrowRight":
                this.onArrowLeftKey(t, this.editable);
                break;
            case "Delete":
                this.onDeleteKey(t);
                break;
            case "Home":
                this.onHomeKey(t, this.editable);
                break;
            case "End":
                this.onEndKey(t, this.editable);
                break;
            case "PageDown":
                this.onPageDownKey(t);
                break;
            case "PageUp":
                this.onPageUpKey(t);
                break;
            case "Space":
                this.onSpaceKey(t, n);
                break;
            case "Enter":
            case "NumpadEnter":
                this.onEnterKey(t);
                break;
            case "Escape":
                this.onEscapeKey(t);
                break;
            case "Tab":
                this.onTabKey(t);
                break;
            case "Backspace":
                this.onBackspaceKey(t, this.editable);
                break;
            case "ShiftLeft":
            case "ShiftRight": break;
            default:
                !t.metaKey && P(t.key) && (!this.overlayVisible && this.show(), !this.editable && this.searchOptions(t, t.key));
                break;
        }
        this.clicked.set(!1);
    } }
    onFilterKeyDown(t) { switch (t.code) {
        case "ArrowDown":
            this.onArrowDownKey(t);
            break;
        case "ArrowUp":
            this.onArrowUpKey(t, !0);
            break;
        case "ArrowLeft":
        case "ArrowRight":
            this.onArrowLeftKey(t, !0);
            break;
        case "Home":
            this.onHomeKey(t, !0);
            break;
        case "End":
            this.onEndKey(t, !0);
            break;
        case "Enter":
        case "NumpadEnter":
            this.onEnterKey(t, !0);
            break;
        case "Escape":
            this.onEscapeKey(t);
            break;
        case "Tab":
            this.onTabKey(t, !0);
            break;
        default: break;
    } }
    onFilterBlur(t) { this.focusedOptionIndex.set(-1); }
    onArrowDownKey(t) { if (!this.overlayVisible)
        this.show(), this.editable && this.changeFocusedOptionIndex(t, this.findSelectedOptionIndex());
    else {
        let n = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(t, n);
    } t.preventDefault(), t.stopPropagation(); }
    changeFocusedOptionIndex(t, n) { if (this.focusedOptionIndex() !== n && (this.focusedOptionIndex.set(n), this.scrollInView(), this.selectOnFocus)) {
        let o = this.visibleOptions()[n];
        this.onOptionSelect(t, o, !1);
    } }
    get virtualScrollerDisabled() { return !this.virtualScroll; }
    scrollInView(t = -1) { let n = t !== -1 ? `${this.id}_${t}` : this.focusedOptionId; if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
        let o = _(this.itemsViewChild.nativeElement, `li[id="${n}"]`);
        o ? o.scrollIntoView && o.scrollIntoView({ block: "nearest", inline: "nearest" }) : this.virtualScrollerDisabled || setTimeout(() => { this.virtualScroll && this.scroller?.scrollToIndex(t !== -1 ? t : this.focusedOptionIndex()); }, 0);
    } }
    hasSelectedOption() { return this.modelValue() !== void 0; }
    isValidSelectedOption(t) { return this.isValidOption(t) && this.isSelected(t); }
    equalityKey() { return this.optionValue ? void 0 : this.dataKey; }
    findFirstFocusedOptionIndex() { let t = this.findSelectedOptionIndex(); return t < 0 ? this.findFirstOptionIndex() : t; }
    findFirstOptionIndex() { return this.visibleOptions().findIndex(t => this.isValidOption(t)); }
    findSelectedOptionIndex() { return this.hasSelectedOption() ? this.visibleOptions().findIndex(t => this.isValidSelectedOption(t)) : -1; }
    findNextOptionIndex(t) { let n = t < this.visibleOptions().length - 1 ? this.visibleOptions().slice(t + 1).findIndex(o => this.isValidOption(o)) : -1; return n > -1 ? n + t + 1 : t; }
    findPrevOptionIndex(t) { let n = t > 0 ? T(this.visibleOptions().slice(0, t), o => this.isValidOption(o)) : -1; return n > -1 ? n : t; }
    findLastOptionIndex() { return T(this.visibleOptions(), t => this.isValidOption(t)); }
    findLastFocusedOptionIndex() { let t = this.findSelectedOptionIndex(); return t < 0 ? this.findLastOptionIndex() : t; }
    isValidOption(t) { return t != null && !(this.isOptionDisabled(t) || this.isOptionGroup(t)); }
    isOptionGroup(t) { return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && t.optionGroup !== void 0 && t.optionGroup !== null && t.group; }
    onArrowUpKey(t, n = !1) { if (t.altKey && !n) {
        if (this.focusedOptionIndex() !== -1) {
            let o = this.visibleOptions()[this.focusedOptionIndex()];
            this.onOptionSelect(t, o);
        }
        this.overlayVisible && this.hide();
    }
    else {
        let o = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(t, o), !this.overlayVisible && this.show();
    } t.preventDefault(), t.stopPropagation(); }
    onArrowLeftKey(t, n = !1) { n && this.focusedOptionIndex.set(-1); }
    onDeleteKey(t) { this.showClear && (this.clear(t), t.preventDefault()); }
    onHomeKey(t, n = !1) { if (n && t.currentTarget && t.currentTarget.setSelectionRange) {
        let o = t.currentTarget;
        t.shiftKey ? o.setSelectionRange(0, o.value.length) : (o.setSelectionRange(0, 0), this.focusedOptionIndex.set(-1));
    }
    else
        this.changeFocusedOptionIndex(t, this.findFirstOptionIndex()), !this.overlayVisible && this.show(); t.preventDefault(); }
    onEndKey(t, n = !1) { if (n && t.currentTarget && t.currentTarget.setSelectionRange) {
        let o = t.currentTarget;
        if (t.shiftKey)
            o.setSelectionRange(0, o.value.length);
        else {
            let l = o.value.length;
            o.setSelectionRange(l, l), this.focusedOptionIndex.set(-1);
        }
    }
    else
        this.changeFocusedOptionIndex(t, this.findLastOptionIndex()), !this.overlayVisible && this.show(); t.preventDefault(); }
    onPageDownKey(t) { this.scrollInView(this.visibleOptions().length - 1), t.preventDefault(); }
    onPageUpKey(t) { this.scrollInView(0), t.preventDefault(); }
    onSpaceKey(t, n = !1) { !this.editable && !n && this.onEnterKey(t); }
    onEnterKey(t, n = !1) { if (!this.overlayVisible)
        this.focusedOptionIndex.set(-1), this.onArrowDownKey(t);
    else {
        if (this.focusedOptionIndex() !== -1) {
            let o = this.visibleOptions()[this.focusedOptionIndex()];
            this.onOptionSelect(t, o);
        }
        !n && this.hide();
    } t.preventDefault(); }
    onEscapeKey(t) { this.overlayVisible && (this.hide(!0), t.preventDefault(), t.stopPropagation()); }
    onTabKey(t, n = !1) { if (!n)
        if (this.overlayVisible && this.hasFocusableElements())
            u(t.shiftKey ? this.lastHiddenFocusableElementOnOverlay?.nativeElement : this.firstHiddenFocusableElementOnOverlay?.nativeElement), t.preventDefault();
        else {
            if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
                let o = this.visibleOptions()[this.focusedOptionIndex()];
                this.onOptionSelect(t, o);
            }
            this.overlayVisible && this.hide(this.filter);
        } t.stopPropagation(); }
    onFirstHiddenFocus(t) { let n = t.relatedTarget === this.focusInputViewChild?.nativeElement ? M(this.overlayViewChild?.el?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement; u(n); }
    onLastHiddenFocus(t) { let n = t.relatedTarget === this.focusInputViewChild?.nativeElement ? B(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement; u(n); }
    hasFocusableElements() { return L(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0; }
    onBackspaceKey(t, n = !1) { n && !this.overlayVisible && this.show(); }
    searchFields() { return this.filterBy?.split(",") || this.filterFields || [this.optionLabel]; }
    searchOptions(t, n) { this.searchValue = (this.searchValue || "") + n; let o = -1, l = !1; return o = this.visibleOptions().findIndex(a => this.isOptionMatched(a)), o !== -1 && (l = !0), o === -1 && this.focusedOptionIndex() === -1 && (o = this.findFirstFocusedOptionIndex()), o !== -1 && setTimeout(() => { this.changeFocusedOptionIndex(t, o); }), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(() => { this.searchValue = "", this.searchTimeout = null; }, 500), l; }
    isOptionMatched(t) { return this.isValidOption(t) && this.getOptionLabel(t).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale)); }
    onFilterInputChange(t) { let n = t.target.value; this._filterValue.set(n), this.focusedOptionIndex.set(-1), this.onFilter.emit({ originalEvent: t, filter: this._filterValue() }), !this.virtualScrollerDisabled && this.scroller?.scrollToIndex(0), setTimeout(() => { this.overlayViewChild?.alignOverlay(); }), this.cd.markForCheck(); }
    applyFocus() { this.editable ? _(this.el.nativeElement, '[data-pc-section="label"]').focus() : u(this.focusInputViewChild?.nativeElement); }
    focus() { this.applyFocus(); }
    clear(t) { this.updateModel(null, t), this.clearEditableLabel(), this.onModelTouched(), this.onChange.emit({ originalEvent: t, value: this.value }), this.onClear.emit(t), this.resetFilter(); }
    writeControlValue(t, n) { this.filter && this.resetFilter(), this.value = t, this.allowModelChange() && this.onModelChange(t), n(this.value), this.updateEditableLabel(), this.cd.markForCheck(); }
    get containerDataP() { return this.cn({ invalid: this.invalid(), disabled: this.$disabled(), focus: this.focused, fluid: this.hasFluid, filled: this.$variant() === "filled", [this.size()]: this.size() }); }
    get labelDataP() { return this.cn({ placeholder: this.label === this.placeholder, clearable: this.showClear, disabled: this.$disabled(), [this.size()]: this.size(), empty: !this.editable && !this.selectedItemTemplate && (!this.label?.() || this.label() === "p-emptylabel" || this.label()?.length === 0) }); }
    get dropdownIconDataP() { return this.cn({ [this.size()]: this.size() }); }
    get overlayDataP() { return this.cn({ ["overlay-" + this.$appendTo()]: "overlay-" + this.$appendTo() }); }
    static \u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.NgZone), e.\u0275\u0275directiveInject(W.FilterService)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["p-select"]], contentQueries: function (n, o, l) { if (n & 1 && e.\u0275\u0275contentQuery(l, le, 4)(l, ae, 4)(l, se, 4)(l, re, 4)(l, pe, 4)(l, R, 4)(l, ce, 4)(l, de, 4)(l, ue, 4)(l, _e, 4)(l, me, 4)(l, he, 4)(l, fe, 4)(l, ge, 4)(l, be, 4)(l, ye, 4)(l, Bt, 4), n & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.itemTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.groupTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.loaderTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.selectedItemTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.headerTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.filterTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.footerTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.emptyFilterTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.emptyTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.dropdownIconTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.loadingIconTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.clearIconTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.filterIconTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.onIconTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.offIconTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.cancelIconTemplate = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.templates = a);
        } }, viewQuery: function (n, o) { if (n & 1 && e.\u0275\u0275viewQuery(R, 5)(xe, 5)(Ie, 5)(ve, 5)(Te, 5)(Oe, 5)(Se, 5)(Ce, 5), n & 2) {
            let l;
            e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.filterViewChild = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.focusInputViewChild = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.editableInputViewChild = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.itemsViewChild = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.scroller = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.overlayViewChild = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.firstHiddenFocusableElementOnOverlay = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.lastHiddenFocusableElementOnOverlay = l.first);
        } }, hostVars: 4, hostBindings: function (n, o) { n & 1 && e.\u0275\u0275listener("click", function (a) { return o.onContainerClick(a); }), n & 2 && (e.\u0275\u0275attribute("id", o.id)("data-p", o.containerDataP), e.\u0275\u0275classMap(o.cn(o.cx("root"), o.styleClass))); }, inputs: { id: "id", scrollHeight: "scrollHeight", filter: [2, "filter", "filter", r], panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", readonly: [2, "readonly", "readonly", r], editable: [2, "editable", "editable", r], tabindex: [2, "tabindex", "tabindex", C], placeholder: "placeholder", loadingIcon: "loadingIcon", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", inputId: "inputId", dataKey: "dataKey", filterBy: "filterBy", filterFields: "filterFields", autofocus: [2, "autofocus", "autofocus", r], resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", r], checkmark: [2, "checkmark", "checkmark", r], dropdownIcon: "dropdownIcon", loading: [2, "loading", "loading", r], optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", optionGroupLabel: "optionGroupLabel", optionGroupChildren: "optionGroupChildren", group: [2, "group", "group", r], showClear: [2, "showClear", "showClear", r], emptyFilterMessage: "emptyFilterMessage", emptyMessage: "emptyMessage", lazy: [2, "lazy", "lazy", r], virtualScroll: [2, "virtualScroll", "virtualScroll", r], virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", C], virtualScrollOptions: "virtualScrollOptions", overlayOptions: "overlayOptions", ariaFilterLabel: "ariaFilterLabel", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", tooltipStyleClass: "tooltipStyleClass", focusOnHover: [2, "focusOnHover", "focusOnHover", r], selectOnFocus: [2, "selectOnFocus", "selectOnFocus", r], autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", r], autofocusFilter: [2, "autofocusFilter", "autofocusFilter", r], filterValue: "filterValue", options: "options", appendTo: [1, "appendTo"], motionOptions: [1, "motionOptions"] }, outputs: { onChange: "onChange", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onShow: "onShow", onHide: "onHide", onClear: "onClear", onLazyLoad: "onLazyLoad" }, features: [e.\u0275\u0275ProvidersFeature([ni, I, { provide: Z, useExisting: i }, { provide: j, useExisting: i }]), e.\u0275\u0275HostDirectivesFeature([x.Bind]), e.\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 18, consts: [["elseBlock", ""], ["overlay", ""], ["content", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["loader", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], ["role", "combobox", 3, "class", "pBind", "pTooltip", "pTooltipUnstyled", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", 3, "class", "pBind", "pAutoFocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 3, "pBind"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onBeforeEnter", "onAfterLeave", "onHide", "hostAttrSelector", "visible", "options", "target", "appendTo", "unstyled", "pt", "motionOptions"], ["role", "combobox", 3, "focus", "blur", "keydown", "pBind", "pTooltip", "pTooltipUnstyled", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", 3, "input", "keydown", "focus", "blur", "pBind", "pAutoFocus"], ["data-p-icon", "times", 3, "class", "pBind", "click", 4, "ngIf"], [3, "class", "pBind", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "class", "pBind", 4, "ngIf"], ["aria-hidden", "true", 3, "pBind"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "class", "pBind", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind"], [3, "ngStyle", "pBind"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus", "pBind"], ["hostName", "select", 3, "items", "style", "itemSize", "autoSize", "lazy", "options", "pt", "onLazyLoad", 4, "ngIf"], [3, "pt", "unstyled"], ["pInputText", "", "type", "text", "role", "searchbox", "autocomplete", "off", 3, "input", "keydown", "blur", "pSize", "value", "variant", "pt", "unstyled"], ["data-p-icon", "search", 3, "pBind", 4, "ngIf"], [3, "pBind", 4, "ngIf"], ["data-p-icon", "search", 3, "pBind"], ["hostName", "select", 3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options", "pt"], ["role", "listbox", 3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "option", 3, "class", "ngStyle", "pBind", 4, "ngIf"], ["role", "option", 3, "ngStyle", "pBind"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize", "index", "unstyled", "scrollerOptions"]], template: function (n, o) { if (n & 1) {
            let l = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275template(0, Le, 6, 25, "span", 16)(1, Me, 2, 20, "input", 17)(2, Pe, 3, 2, "ng-container", 18), e.\u0275\u0275elementStart(3, "div", 19), e.\u0275\u0275template(4, $e, 3, 2, "ng-container", 20)(5, Ze, 2, 2, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "p-overlay", 21, 1), e.\u0275\u0275twoWayListener("visibleChange", function (p) { return e.\u0275\u0275restoreView(l), e.\u0275\u0275twoWayBindingSet(o.overlayVisible, p) || (o.overlayVisible = p), e.\u0275\u0275resetView(p); }), e.\u0275\u0275listener("onBeforeEnter", function (p) { return o.onOverlayBeforeEnter(p); })("onAfterLeave", function (p) { return o.onOverlayAfterLeave(p); })("onHide", function () { return o.hide(); }), e.\u0275\u0275template(9, Et, 13, 23, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd();
        } if (n & 2) {
            let l = e.\u0275\u0275reference(6);
            e.\u0275\u0275property("ngIf", !o.editable), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.editable), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.isVisibleClearIcon), e.\u0275\u0275advance(), e.\u0275\u0275classMap(o.cx("dropdown")), e.\u0275\u0275property("pBind", o.ptm("dropdown")), e.\u0275\u0275attribute("aria-expanded", o.overlayVisible ?? !1)("data-pc-section", "trigger"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.loading)("ngIfElse", l), e.\u0275\u0275advance(3), e.\u0275\u0275property("hostAttrSelector", o.$attrSelector), e.\u0275\u0275twoWayProperty("visible", o.overlayVisible), e.\u0275\u0275property("options", o.overlayOptions)("target", "@parent")("appendTo", o.$appendTo())("unstyled", o.unstyled())("pt", o.ptm("pcOverlay"))("motionOptions", o.motionOptions());
        } }, dependencies: [Q, d.NgForOf, d.NgIf, d.NgTemplateOutlet, d.NgStyle, oi, Wt, Zt, Dt, Ht, $t, qt, Ut, Nt, Qt, Yt, y, Y, x.Bind], encapsulation: 2, changeDetection: 0 });
} return i; })(), zi = (() => { class i {
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [J, y, y] });
} return i; })();
export { ni as SELECT_VALUE_ACCESSOR, J as Select, ti as SelectClasses, oi as SelectItem, zi as SelectModule, I as SelectStyle };
