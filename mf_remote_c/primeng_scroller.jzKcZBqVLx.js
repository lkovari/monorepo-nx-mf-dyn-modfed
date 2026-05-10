import { B as z, C as V, E as B, t as F, x as T } from "@nf-internal/chunk-MIZIHZD3";
import { a as x, b as E } from "@nf-internal/chunk-JKOY2XUY";
export * from "primeng/types/scroller";
import * as C from "@angular/common";
import { isPlatformBrowser as H, CommonModule as ut } from "@angular/common";
import * as e from "@angular/core";
import { InjectionToken as gt, inject as L, EventEmitter as O } from "@angular/core";
import { SharedModule as P, PrimeTemplate as ft } from "primeng/api";
import { BaseComponent as yt, PARENT_INSTANCE as wt } from "primeng/basecomponent";
import * as N from "primeng/bind";
import { Bind as W } from "primeng/bind";
import { SpinnerIcon as St } from "primeng/icons";
import { BaseStyle as Ct } from "primeng/base";
var D = ["content"], j = ["item"], Q = ["loader"], $ = ["loadericon"], q = ["element"], Z = ["*"], R = (s, d) => ({ $implicit: s, options: d }), G = s => ({ numCols: s }), k = s => ({ options: s }), J = () => ({ styleClass: "p-virtualscroller-loading-icon" }), K = (s, d) => ({ rows: s, columns: d });
function U(s, d) { s & 1 && e.\u0275\u0275elementContainer(0); }
function X(s, d) { if (s & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, U, 1, 0, "ng-container", 10), e.\u0275\u0275elementContainerEnd()), s & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.contentTemplate || t._contentTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction2(2, R, t.loadedItems, t.getContentOptions()));
} }
function Y(s, d) { s & 1 && e.\u0275\u0275elementContainer(0); }
function tt(s, d) { if (s & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, Y, 1, 0, "ng-container", 10), e.\u0275\u0275elementContainerEnd()), s & 2) {
    let t = d.$implicit, i = d.index, n = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", n.itemTemplate || n._itemTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction2(2, R, t, n.getOptions(i)));
} }
function et(s, d) { if (s & 1 && (e.\u0275\u0275elementStart(0, "div", 11, 3), e.\u0275\u0275template(2, tt, 2, 5, "ng-container", 12), e.\u0275\u0275elementEnd()), s & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275styleMap(t.contentStyle), e.\u0275\u0275classMap(t.cn(t.cx("content"), t.contentStyleClass)), e.\u0275\u0275property("pBind", t.ptm("content")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t.loadedItems)("ngForTrackBy", t._trackBy);
} }
function it(s, d) { if (s & 1 && e.\u0275\u0275element(0, "div", 13), s & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(t.cx("spacer")), e.\u0275\u0275property("ngStyle", t.spacerStyle)("pBind", t.ptm("spacer"));
} }
function st(s, d) { s & 1 && e.\u0275\u0275elementContainer(0); }
function nt(s, d) { if (s & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, st, 1, 0, "ng-container", 10), e.\u0275\u0275elementContainerEnd()), s & 2) {
    let t = d.index, i = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i.loaderTemplate || i._loaderTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(4, k, i.getLoaderOptions(t, i.both && e.\u0275\u0275pureFunction1(2, G, i.numItemsInViewport.cols))));
} }
function ot(s, d) { if (s & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, nt, 2, 6, "ng-container", 14), e.\u0275\u0275elementContainerEnd()), s & 2) {
    let t = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", t.loaderArr);
} }
function lt(s, d) { s & 1 && e.\u0275\u0275elementContainer(0); }
function rt(s, d) { if (s & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, lt, 1, 0, "ng-container", 10), e.\u0275\u0275elementContainerEnd()), s & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.loaderIconTemplate || t._loaderIconTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(3, k, e.\u0275\u0275pureFunction0(2, J)));
} }
function at(s, d) { if (s & 1 && (e.\u0275\u0275namespaceSVG(), e.\u0275\u0275element(0, "svg", 15)), s & 2) {
    let t = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275classMap(t.cx("loadingIcon")), e.\u0275\u0275property("spin", !0)("pBind", t.ptm("loadingIcon"));
} }
function ht(s, d) { if (s & 1 && e.\u0275\u0275template(0, rt, 2, 5, "ng-container", 6)(1, at, 1, 4, "ng-template", null, 5, e.\u0275\u0275templateRefExtractor), s & 2) {
    let t = e.\u0275\u0275reference(2), i = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275property("ngIf", i.loaderIconTemplate || i._loaderIconTemplate)("ngIfElse", t);
} }
function ct(s, d) { if (s & 1 && (e.\u0275\u0275elementStart(0, "div", 11), e.\u0275\u0275template(1, ot, 2, 1, "ng-container", 6)(2, ht, 3, 2, "ng-template", null, 4, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()), s & 2) {
    let t = e.\u0275\u0275reference(3), i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275classMap(i.cx("loader")), e.\u0275\u0275property("pBind", i.ptm("loader")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.loaderTemplate || i._loaderTemplate)("ngIfElse", t);
} }
function dt(s, d) { if (s & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div", 7, 1), e.\u0275\u0275listener("scroll", function (n) { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o.onContainerScroll(n)); }), e.\u0275\u0275template(3, X, 2, 5, "ng-container", 6)(4, et, 3, 7, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor)(6, it, 1, 4, "div", 8)(7, ct, 4, 5, "div", 9), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd();
} if (s & 2) {
    let t = e.\u0275\u0275reference(5), i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275classMap(i.cn(i.cx("root"), i.styleClass)), e.\u0275\u0275property("ngStyle", i._style)("pBind", i.ptm("root")), e.\u0275\u0275attribute("id", i._id)("tabindex", i.tabindex), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", i.contentTemplate || i._contentTemplate)("ngIfElse", t), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", i._showSpacer), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !i.loaderDisabled && i._showLoader && i.d_loading);
} }
function mt(s, d) { s & 1 && e.\u0275\u0275elementContainer(0); }
function pt(s, d) { if (s & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, mt, 1, 0, "ng-container", 10), e.\u0275\u0275elementContainerEnd()), s & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t.contentTemplate || t._contentTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction2(5, R, t.items, e.\u0275\u0275pureFunction2(2, K, t._items, t.loadedColumns)));
} }
function _t(s, d) { if (s & 1 && (e.\u0275\u0275projection(0), e.\u0275\u0275template(1, pt, 2, 8, "ng-container", 16)), s & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.contentTemplate || t._contentTemplate);
} }
var It = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`, vt = { root: ({ instance: s }) => ["p-virtualscroller", { "p-virtualscroller-inline": s.inline, "p-virtualscroller-both p-both-scroll": s.both, "p-virtualscroller-horizontal p-horizontal-scroll": s.horizontal }], content: "p-virtualscroller-content", spacer: "p-virtualscroller-spacer", loader: ({ instance: s }) => ["p-virtualscroller-loader", { "p-virtualscroller-loader-mask": !s.loaderTemplate }], loadingIcon: "p-virtualscroller-loading-icon" }, M = (() => { class s extends Ct {
    name = "virtualscroller";
    css = It;
    classes = vt;
    static \u0275fac = (() => { let t; return function (n) { return (t || (t = e.\u0275\u0275getInheritedFactory(s)))(n || s); }; })();
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac });
} return s; })(), Tt = (function (s) { return s.root = "p-virtualscroller", s.content = "p-virtualscroller-content", s.spacer = "p-virtualscroller-spacer", s.loader = "p-virtualscroller-loader", s.loadingIcon = "p-virtualscroller-loading-icon", s; })(Tt || {}), A = new gt("SCROLLER_INSTANCE"), zt = (() => { class s extends yt {
    zone;
    componentName = "VirtualScroller";
    bindDirectiveInstance = L(W, { self: !0 });
    $pcScroller = L(A, { optional: !0, skipSelf: !0 }) ?? void 0;
    hostName = "";
    get id() { return this._id; }
    set id(t) { this._id = t; }
    get style() { return this._style; }
    set style(t) { this._style = t; }
    get styleClass() { return this._styleClass; }
    set styleClass(t) { this._styleClass = t; }
    get tabindex() { return this._tabindex; }
    set tabindex(t) { this._tabindex = t; }
    get items() { return this._items; }
    set items(t) { this._items = t; }
    get itemSize() { return this._itemSize; }
    set itemSize(t) { this._itemSize = t; }
    get scrollHeight() { return this._scrollHeight; }
    set scrollHeight(t) { this._scrollHeight = t; }
    get scrollWidth() { return this._scrollWidth; }
    set scrollWidth(t) { this._scrollWidth = t; }
    get orientation() { return this._orientation; }
    set orientation(t) { this._orientation = t; }
    get step() { return this._step; }
    set step(t) { this._step = t; }
    get delay() { return this._delay; }
    set delay(t) { this._delay = t; }
    get resizeDelay() { return this._resizeDelay; }
    set resizeDelay(t) { this._resizeDelay = t; }
    get appendOnly() { return this._appendOnly; }
    set appendOnly(t) { this._appendOnly = t; }
    get inline() { return this._inline; }
    set inline(t) { this._inline = t; }
    get lazy() { return this._lazy; }
    set lazy(t) { this._lazy = t; }
    get disabled() { return this._disabled; }
    set disabled(t) { this._disabled = t; }
    get loaderDisabled() { return this._loaderDisabled; }
    set loaderDisabled(t) { this._loaderDisabled = t; }
    get columns() { return this._columns; }
    set columns(t) { this._columns = t; }
    get showSpacer() { return this._showSpacer; }
    set showSpacer(t) { this._showSpacer = t; }
    get showLoader() { return this._showLoader; }
    set showLoader(t) { this._showLoader = t; }
    get numToleratedItems() { return this._numToleratedItems; }
    set numToleratedItems(t) { this._numToleratedItems = t; }
    get loading() { return this._loading; }
    set loading(t) { this._loading = t; }
    get autoSize() { return this._autoSize; }
    set autoSize(t) { this._autoSize = t; }
    get trackBy() { return this._trackBy; }
    set trackBy(t) { this._trackBy = t; }
    get options() { return this._options; }
    set options(t) { this._options = t, t && typeof t == "object" && (Object.entries(t).forEach(([i, n]) => this[`_${i}`] !== n && (this[`_${i}`] = n)), Object.entries(t).forEach(([i, n]) => this[`${i}`] !== n && (this[`${i}`] = n))); }
    onLazyLoad = new O;
    onScroll = new O;
    onScrollIndexChange = new O;
    elementViewChild;
    contentViewChild;
    height;
    _id;
    _style;
    _styleClass;
    _tabindex = 0;
    _items;
    _itemSize = 0;
    _scrollHeight;
    _scrollWidth;
    _orientation = "vertical";
    _step = 0;
    _delay = 0;
    _resizeDelay = 10;
    _appendOnly = !1;
    _inline = !1;
    _lazy = !1;
    _disabled = !1;
    _loaderDisabled = !1;
    _columns;
    _showSpacer = !0;
    _showLoader = !1;
    _numToleratedItems;
    _loading;
    _autoSize = !1;
    _trackBy;
    _options;
    d_loading = !1;
    d_numToleratedItems;
    contentEl;
    contentTemplate;
    itemTemplate;
    loaderTemplate;
    loaderIconTemplate;
    templates;
    _contentTemplate;
    _itemTemplate;
    _loaderTemplate;
    _loaderIconTemplate;
    first = 0;
    last = 0;
    page = 0;
    isRangeChanged = !1;
    numItemsInViewport = 0;
    lastScrollPos = 0;
    lazyLoadState = {};
    loaderArr = [];
    spacerStyle = {};
    contentStyle = {};
    scrollTimeout;
    resizeTimeout;
    initialized = !1;
    windowResizeListener;
    defaultWidth;
    defaultHeight;
    defaultContentWidth;
    defaultContentHeight;
    _contentStyleClass;
    get contentStyleClass() { return this._contentStyleClass; }
    set contentStyleClass(t) { this._contentStyleClass = t; }
    get vertical() { return this._orientation === "vertical"; }
    get horizontal() { return this._orientation === "horizontal"; }
    get both() { return this._orientation === "both"; }
    get loadedItems() { return this._items && !this.d_loading ? this.both ? this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map(t => this._columns ? t : Array.isArray(t) ? t.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols) : t) : this.horizontal && this._columns ? this._items : this._items.slice(this._appendOnly ? 0 : this.first, this.last) : []; }
    get loadedRows() { return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems; }
    get loadedColumns() { return this._columns && (this.both || this.horizontal) ? this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last) : this._columns; }
    _componentStyle = L(M);
    constructor(t) { super(), this.zone = t; }
    onInit() { this.setInitialState(); }
    onChanges(t) { let i = !1; if (this.scrollHeight == "100%" && (this.height = "100%"), t.loading) {
        let { previousValue: n, currentValue: o } = t.loading;
        this.lazy && n !== o && o !== this.d_loading && (this.d_loading = o, i = !0);
    } if (t.orientation && (this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0), t.numToleratedItems) {
        let { previousValue: n, currentValue: o } = t.numToleratedItems;
        n !== o && o !== this.d_numToleratedItems && (this.d_numToleratedItems = o);
    } if (t.options) {
        let { previousValue: n, currentValue: o } = t.options;
        this.lazy && n?.loading !== o?.loading && o?.loading !== this.d_loading && (this.d_loading = o.loading, i = !0), n?.numToleratedItems !== o?.numToleratedItems && o?.numToleratedItems !== this.d_numToleratedItems && (this.d_numToleratedItems = o.numToleratedItems);
    } this.initialized && !i && (t.items?.previousValue?.length !== t.items?.currentValue?.length || t.itemSize || t.scrollHeight || t.scrollWidth) && this.init(); }
    onAfterContentInit() { this.templates.forEach(t => { switch (t.getType()) {
        case "content":
            this._contentTemplate = t.template;
            break;
        case "item":
            this._itemTemplate = t.template;
            break;
        case "loader":
            this._loaderTemplate = t.template;
            break;
        case "loadericon":
            this._loaderIconTemplate = t.template;
            break;
        default:
            this._itemTemplate = t.template;
            break;
    } }); }
    onAfterViewInit() { Promise.resolve().then(() => { this.viewInit(); }); }
    onAfterViewChecked() { this.bindDirectiveInstance.setAttrs(this.ptm("host")), this.initialized || this.viewInit(); }
    onDestroy() { this.unbindResizeListener(), this.contentEl = null, this.initialized = !1; }
    viewInit() { H(this.platformId) && !this.initialized && V(this.elementViewChild?.nativeElement) && (this.setInitialState(), this.setContentEl(this.contentEl), this.init(), this.defaultWidth = z(this.elementViewChild?.nativeElement), this.defaultHeight = T(this.elementViewChild?.nativeElement), this.defaultContentWidth = z(this.contentEl), this.defaultContentHeight = T(this.contentEl), this.initialized = !0); }
    init() { this._disabled || (this.bindResizeListener(), setTimeout(() => { this.setSpacerSize(), this.setSize(), this.calculateOptions(), this.calculateAutoSize(), this.cd.detectChanges(); }, 1)); }
    setContentEl(t) { this.contentEl = t || this.contentViewChild?.nativeElement || F(this.elementViewChild?.nativeElement, ".p-virtualscroller-content"); }
    setInitialState() { this.first = this.both ? { rows: 0, cols: 0 } : 0, this.last = this.both ? { rows: 0, cols: 0 } : 0, this.numItemsInViewport = this.both ? { rows: 0, cols: 0 } : 0, this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0, (this.d_loading === void 0 || this.d_loading === !1) && (this.d_loading = this._loading || !1), this.d_numToleratedItems = this._numToleratedItems, this.loaderArr = this.loaderArr.length > 0 ? this.loaderArr : []; }
    getElementRef() { return this.elementViewChild; }
    getPageByFirst(t) { return Math.floor(((t ?? this.first) + this.d_numToleratedItems * 4) / (this._step || 1)); }
    isPageChanged(t) { return this._step ? this.page !== this.getPageByFirst(t ?? this.first) : !0; }
    scrollTo(t) { this.elementViewChild?.nativeElement?.scrollTo(t); }
    scrollToIndex(t, i = "auto") { if (this.both ? t.every(o => o > -1) : t > -1) {
        let o = this.first, { scrollTop: l = 0, scrollLeft: r = 0 } = this.elementViewChild?.nativeElement, { numToleratedItems: _ } = this.calculateNumItems(), m = this.getContentPosition(), c = this.itemSize, f = (h = 0, p) => h <= p ? 0 : h, u = (h, p, y) => h * p + y, w = (h = 0, p = 0) => this.scrollTo({ left: h, top: p, behavior: i }), g = this.both ? { rows: 0, cols: 0 } : 0, I = !1, a = !1;
        this.both ? (g = { rows: f(t[0], _[0]), cols: f(t[1], _[1]) }, w(u(g.cols, c[1], m.left), u(g.rows, c[0], m.top)), a = this.lastScrollPos.top !== l || this.lastScrollPos.left !== r, I = g.rows !== o.rows || g.cols !== o.cols) : (g = f(t, _), this.horizontal ? w(u(g, c, m.left), l) : w(r, u(g, c, m.top)), a = this.lastScrollPos !== (this.horizontal ? r : l), I = g !== o), this.isRangeChanged = I, a && (this.first = g);
    } }
    scrollInView(t, i, n = "auto") { if (i) {
        let { first: o, viewport: l } = this.getRenderedRange(), r = (c = 0, f = 0) => this.scrollTo({ left: c, top: f, behavior: n }), _ = i === "to-start", m = i === "to-end";
        if (_) {
            if (this.both)
                l.first.rows - o.rows > t[0] ? r(l.first.cols * this._itemSize[1], (l.first.rows - 1) * this._itemSize[0]) : l.first.cols - o.cols > t[1] && r((l.first.cols - 1) * this._itemSize[1], l.first.rows * this._itemSize[0]);
            else if (l.first - o > t) {
                let c = (l.first - 1) * this._itemSize;
                this.horizontal ? r(c, 0) : r(0, c);
            }
        }
        else if (m) {
            if (this.both)
                l.last.rows - o.rows <= t[0] + 1 ? r(l.first.cols * this._itemSize[1], (l.first.rows + 1) * this._itemSize[0]) : l.last.cols - o.cols <= t[1] + 1 && r((l.first.cols + 1) * this._itemSize[1], l.first.rows * this._itemSize[0]);
            else if (l.last - o <= t + 1) {
                let c = (l.first + 1) * this._itemSize;
                this.horizontal ? r(c, 0) : r(0, c);
            }
        }
    }
    else
        this.scrollToIndex(t, n); }
    getRenderedRange() { let t = (o, l) => l || o ? Math.floor(o / (l || o)) : 0, i = this.first, n = 0; if (this.elementViewChild?.nativeElement) {
        let { scrollTop: o, scrollLeft: l } = this.elementViewChild.nativeElement;
        if (this.both)
            i = { rows: t(o, this._itemSize[0]), cols: t(l, this._itemSize[1]) }, n = { rows: i.rows + this.numItemsInViewport.rows, cols: i.cols + this.numItemsInViewport.cols };
        else {
            let r = this.horizontal ? l : o;
            i = t(r, this._itemSize), n = i + this.numItemsInViewport;
        }
    } return { first: this.first, last: this.last, viewport: { first: i, last: n } }; }
    calculateNumItems() { let t = this.getContentPosition(), i = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - t.left : 0) || 0, n = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - t.top : 0) || 0, o = (m, c) => c || m ? Math.ceil(m / (c || m)) : 0, l = m => Math.ceil(m / 2), r = this.both ? { rows: o(n, this._itemSize[0]), cols: o(i, this._itemSize[1]) } : o(this.horizontal ? i : n, this._itemSize), _ = this.d_numToleratedItems || (this.both ? [l(r.rows), l(r.cols)] : l(r)); return { numItemsInViewport: r, numToleratedItems: _ }; }
    calculateOptions() { let { numItemsInViewport: t, numToleratedItems: i } = this.calculateNumItems(), n = (r, _, m, c = !1) => this.getLast(r + _ + (r < m ? 2 : 3) * m, c), o = this.first, l = this.both ? { rows: n(this.first.rows, t.rows, i[0]), cols: n(this.first.cols, t.cols, i[1], !0) } : n(this.first, t, i); this.last = l, this.numItemsInViewport = t, this.d_numToleratedItems = i, this._showLoader && (this.loaderArr = this.both ? Array.from({ length: t.rows }).map(() => Array.from({ length: t.cols })) : Array.from({ length: t })), this._lazy && Promise.resolve().then(() => { this.lazyLoadState = { first: this._step ? this.both ? { rows: 0, cols: o.cols } : 0 : o, last: Math.min(this._step ? this._step : this.last, this._items.length) }, this.handleEvents("onLazyLoad", this.lazyLoadState); }); }
    calculateAutoSize() { this._autoSize && !this.d_loading && Promise.resolve().then(() => { if (this.contentEl) {
        this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto", this.contentEl.style.position = "relative", this.elementViewChild.nativeElement.style.contain = "none";
        let [t, i] = [z(this.contentEl), T(this.contentEl)];
        t !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = ""), i !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = "");
        let [n, o] = [z(this.elementViewChild.nativeElement), T(this.elementViewChild.nativeElement)];
        (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = n < this.defaultWidth ? n + "px" : this._scrollWidth || this.defaultWidth + "px"), (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = o < this.defaultHeight ? o + "px" : this._scrollHeight || this.defaultHeight + "px"), this.contentEl.style.minHeight = this.contentEl.style.minWidth = "", this.contentEl.style.position = "", this.elementViewChild.nativeElement.style.contain = "";
    } }); }
    getLast(t = 0, i = !1) { return this._items ? Math.min(i ? (this._columns || this._items[0]).length : this._items.length, t) : 0; }
    getContentPosition() { if (this.contentEl) {
        let t = getComputedStyle(this.contentEl), i = parseFloat(t.paddingLeft) + Math.max(parseFloat(t.left) || 0, 0), n = parseFloat(t.paddingRight) + Math.max(parseFloat(t.right) || 0, 0), o = parseFloat(t.paddingTop) + Math.max(parseFloat(t.top) || 0, 0), l = parseFloat(t.paddingBottom) + Math.max(parseFloat(t.bottom) || 0, 0);
        return { left: i, right: n, top: o, bottom: l, x: i + n, y: o + l };
    } return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 }; }
    setSize() { if (this.elementViewChild?.nativeElement) {
        let t = this.elementViewChild.nativeElement, i = t.parentElement?.parentElement, n = t.offsetWidth, o = i?.offsetWidth || 0, l = this._scrollWidth || `${n || o}px`, r = t.offsetHeight, _ = i?.offsetHeight || 0, m = this._scrollHeight || `${r || _}px`, c = (f, u) => t.style[f] = u;
        this.both || this.horizontal ? (c("height", m), c("width", l)) : c("height", m);
    } }
    setSpacerSize() { if (this._items) {
        let t = this.getContentPosition(), i = (n, o, l, r = 0) => this.spacerStyle = E(x({}, this.spacerStyle), { [`${n}`]: (o || []).length * l + r + "px" });
        this.both ? (i("height", this._items, this._itemSize[0], t.y), i("width", this._columns || this._items[1], this._itemSize[1], t.x)) : this.horizontal ? i("width", this._columns || this._items, this._itemSize, t.x) : i("height", this._items, this._itemSize, t.y);
    } }
    setContentPosition(t) { if (this.contentEl && !this._appendOnly) {
        let i = t ? t.first : this.first, n = (l, r) => l * r, o = (l = 0, r = 0) => this.contentStyle = E(x({}, this.contentStyle), { transform: `translate3d(${l}px, ${r}px, 0)` });
        if (this.both)
            o(n(i.cols, this._itemSize[1]), n(i.rows, this._itemSize[0]));
        else {
            let l = n(i, this._itemSize);
            this.horizontal ? o(l, 0) : o(0, l);
        }
    } }
    onScrollPositionChange(t) { let i = t.target; if (!i)
        throw new Error("Event target is null"); let n = this.getContentPosition(), o = (a, h) => a ? a > h ? a - h : a : 0, l = (a, h) => h || a ? Math.floor(a / (h || a)) : 0, r = (a, h, p, y, S, v) => a <= S ? S : v ? p - y - S : h + S - 1, _ = (a, h, p, y, S, v, b) => a <= v ? 0 : Math.max(0, b ? a < h ? p : a - v : a > h ? p : a - 2 * v), m = (a, h, p, y, S, v = !1) => { let b = h + y + 2 * S; return a >= S && (b += S + 1), this.getLast(b, v); }, c = o(i.scrollTop, n.top), f = o(i.scrollLeft, n.left), u = this.both ? { rows: 0, cols: 0 } : 0, w = this.last, g = !1, I = this.lastScrollPos; if (this.both) {
        let a = this.lastScrollPos.top <= c, h = this.lastScrollPos.left <= f;
        if (!this._appendOnly || this._appendOnly && (a || h)) {
            let p = { rows: l(c, this._itemSize[0]), cols: l(f, this._itemSize[1]) }, y = { rows: r(p.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], a), cols: r(p.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], h) };
            u = { rows: _(p.rows, y.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], a), cols: _(p.cols, y.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], h) }, w = { rows: m(p.rows, u.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]), cols: m(p.cols, u.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], !0) }, g = u.rows !== this.first.rows || w.rows !== this.last.rows || u.cols !== this.first.cols || w.cols !== this.last.cols || this.isRangeChanged, I = { top: c, left: f };
        }
    }
    else {
        let a = this.horizontal ? f : c, h = this.lastScrollPos <= a;
        if (!this._appendOnly || this._appendOnly && h) {
            let p = l(a, this._itemSize), y = r(p, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, h);
            u = _(p, y, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, h), w = m(p, u, this.last, this.numItemsInViewport, this.d_numToleratedItems), g = u !== this.first || w !== this.last || this.isRangeChanged, I = a;
        }
    } return { first: u, last: w, isRangeChanged: g, scrollPos: I }; }
    onScrollChange(t) { let { first: i, last: n, isRangeChanged: o, scrollPos: l } = this.onScrollPositionChange(t); if (o) {
        let r = { first: i, last: n };
        if (this.setContentPosition(r), this.first = i, this.last = n, this.lastScrollPos = l, this.handleEvents("onScrollIndexChange", r), this._lazy && this.isPageChanged(i)) {
            let _ = { first: this._step ? Math.min(this.getPageByFirst(i) * this._step, this._items.length - this._step) : i, last: Math.min(this._step ? (this.getPageByFirst(i) + 1) * this._step : n, this._items.length) };
            (this.lazyLoadState.first !== _.first || this.lazyLoadState.last !== _.last) && this.handleEvents("onLazyLoad", _), this.lazyLoadState = _;
        }
    } }
    onContainerScroll(t) { if (this.handleEvents("onScroll", { originalEvent: t }), this._delay) {
        if (this.scrollTimeout && clearTimeout(this.scrollTimeout), !this.d_loading && this._showLoader) {
            let { isRangeChanged: i } = this.onScrollPositionChange(t);
            (i || this._step && this.isPageChanged()) && (this.d_loading = !0, this.cd.detectChanges());
        }
        this.scrollTimeout = setTimeout(() => { this.onScrollChange(t), this.d_loading && this._showLoader && (!this._lazy || this._loading === void 0) && (this.d_loading = !1, this.page = this.getPageByFirst()), this.cd.detectChanges(); }, this._delay);
    }
    else
        !this.d_loading && this.onScrollChange(t); }
    bindResizeListener() { H(this.platformId) && (this.windowResizeListener || this.zone.runOutsideAngular(() => { let t = this.document.defaultView, i = B() ? "orientationchange" : "resize"; this.windowResizeListener = this.renderer.listen(t, i, this.onWindowResize.bind(this)); })); }
    unbindResizeListener() { this.windowResizeListener && (this.windowResizeListener(), this.windowResizeListener = null); }
    onWindowResize() { this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => { if (V(this.elementViewChild?.nativeElement)) {
        let [t, i] = [z(this.elementViewChild?.nativeElement), T(this.elementViewChild?.nativeElement)], [n, o] = [t !== this.defaultWidth, i !== this.defaultHeight];
        (this.both ? n || o : this.horizontal ? n : this.vertical && o) && this.zone.run(() => { this.d_numToleratedItems = this._numToleratedItems, this.defaultWidth = t, this.defaultHeight = i, this.defaultContentWidth = z(this.contentEl), this.defaultContentHeight = T(this.contentEl), this.init(); });
    } }, this._resizeDelay); }
    handleEvents(t, i) { return this.options && this.options[t] ? this.options[t](i) : this[t].emit(i); }
    getContentOptions() { return { contentStyleClass: `p-virtualscroller-content ${this.d_loading ? "p-virtualscroller-loading" : ""}`, items: this.loadedItems, getItemOptions: t => this.getOptions(t), loading: this.d_loading, getLoaderOptions: (t, i) => this.getLoaderOptions(t, i), itemSize: this._itemSize, rows: this.loadedRows, columns: this.loadedColumns, spacerStyle: this.spacerStyle, contentStyle: this.contentStyle, vertical: this.vertical, horizontal: this.horizontal, both: this.both, scrollTo: this.scrollTo.bind(this), scrollToIndex: this.scrollToIndex.bind(this), orientation: this._orientation, scrollableElement: this.elementViewChild?.nativeElement }; }
    getOptions(t) { let i = (this._items || []).length, n = this.both ? this.first.rows + t : this.first + t; return { index: n, count: i, first: n === 0, last: n === i - 1, even: n % 2 === 0, odd: n % 2 !== 0 }; }
    getLoaderOptions(t, i) { let n = this.loaderArr.length; return x({ index: t, count: n, first: t === 0, last: t === n - 1, even: t % 2 === 0, odd: t % 2 !== 0, loading: this.d_loading }, i); }
    static \u0275fac = function (i) { return new (i || s)(e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: s, selectors: [["p-scroller"], ["p-virtualscroller"], ["p-virtual-scroller"], ["p-virtualScroller"]], contentQueries: function (i, n, o) { if (i & 1 && e.\u0275\u0275contentQuery(o, D, 4)(o, j, 4)(o, Q, 4)(o, $, 4)(o, ft, 4), i & 2) {
            let l;
            e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (n.contentTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (n.itemTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (n.loaderTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (n.loaderIconTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (n.templates = l);
        } }, viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(q, 5)(D, 5), i & 2) {
            let o;
            e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (n.elementViewChild = o.first), e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (n.contentViewChild = o.first);
        } }, hostVars: 2, hostBindings: function (i, n) { i & 2 && e.\u0275\u0275styleProp("height", n.height); }, inputs: { hostName: "hostName", id: "id", style: "style", styleClass: "styleClass", tabindex: "tabindex", items: "items", itemSize: "itemSize", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth", orientation: "orientation", step: "step", delay: "delay", resizeDelay: "resizeDelay", appendOnly: "appendOnly", inline: "inline", lazy: "lazy", disabled: "disabled", loaderDisabled: "loaderDisabled", columns: "columns", showSpacer: "showSpacer", showLoader: "showLoader", numToleratedItems: "numToleratedItems", loading: "loading", autoSize: "autoSize", trackBy: "trackBy", options: "options" }, outputs: { onLazyLoad: "onLazyLoad", onScroll: "onScroll", onScrollIndexChange: "onScrollIndexChange" }, features: [e.\u0275\u0275ProvidersFeature([M, { provide: A, useExisting: s }, { provide: wt, useExisting: s }]), e.\u0275\u0275HostDirectivesFeature([N.Bind]), e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Z, decls: 3, vars: 2, consts: [["disabledContainer", ""], ["element", ""], ["buildInContent", ""], ["content", ""], ["buildInLoader", ""], ["buildInLoaderIcon", ""], [4, "ngIf", "ngIfElse"], [3, "scroll", "ngStyle", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "pBind"], [4, "ngFor", "ngForOf"], ["data-p-icon", "spinner", 3, "spin", "pBind"], [4, "ngIf"]], template: function (i, n) { if (i & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275template(0, dt, 8, 10, "ng-container", 6)(1, _t, 2, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)), i & 2) {
            let o = e.\u0275\u0275reference(2);
            e.\u0275\u0275property("ngIf", !n._disabled)("ngIfElse", o);
        } }, dependencies: [ut, C.NgForOf, C.NgIf, C.NgTemplateOutlet, C.NgStyle, St, P, W], encapsulation: 2 });
} return s; })(), $t = (() => { class s {
    static \u0275fac = function (i) { return new (i || s); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: s });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [zt, P, P] });
} return s; })();
export { zt as Scroller, Tt as ScrollerClasses, $t as ScrollerModule, M as ScrollerStyle };
