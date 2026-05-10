import { a as Q, d as f, g as N, i as x, j as P, n as ue, p as b, q as te, s as Y } from "@nf-internal/chunk-3NBCSNB6";
function he() { let e = new Map; return { on(t, r) { let s = e.get(t); return s ? s.push(r) : s = [r], e.set(t, s), this; }, off(t, r) { let s = e.get(t); return s && s.splice(s.indexOf(r) >>> 0, 1), this; }, emit(t, r) { let s = e.get(t); s && s.forEach(l => { l(r); }); }, clear() { e.clear(); } }; }
var De = Object.defineProperty, Ke = Object.defineProperties, ze = Object.getOwnPropertyDescriptors, ee = Object.getOwnPropertySymbols, de = Object.prototype.hasOwnProperty, pe = Object.prototype.propertyIsEnumerable, me = (e, t, r) => t in e ? De(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, k = (e, t) => { for (var r in t || (t = {}))
    de.call(t, r) && me(e, r, t[r]); if (ee)
    for (var r of ee(t))
        pe.call(t, r) && me(e, r, t[r]); return e; }, re = (e, t) => Ke(e, ze(t)), _ = (e, t) => { var r = {}; for (var s in e)
    de.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]); if (e != null && ee)
    for (var s of ee(e))
        t.indexOf(s) < 0 && pe.call(e, s) && (r[s] = e[s]); return r; };
var Ue = he(), O = Ue, R = /{([^}]*)}/g, fe = /(\d+\s+[\+\-\*\/]\s+\d+)/g, ge = /var\([^)]+\)/g;
function ce(e) { return P(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e; }
function Xe(e) { return N(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e; }
function Be(e) { return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-"); }
function se(e = "", t = "") { return Be(`${P(e, !1) && P(t, !1) ? `${e}-` : e}${t}`); }
function ye(e = "", t = "") { return `--${se(e, t)}`; }
function Ge(e = "") { let t = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length; return (t + r) % 2 !== 0; }
function ve(e, t = "", r = "", s = [], l) { if (P(e)) {
    let h = e.trim();
    if (Ge(h))
        return;
    if (b(h, R)) {
        let a = h.replaceAll(R, n => { let i = n.replace(/{|}/g, "").split(".").filter(o => !s.some(u => b(o, u))); return `var(${ye(r, Y(i.join("-")))}${f(l) ? `, ${l}` : ""})`; });
        return b(a.replace(ge, "0"), fe) ? `calc(${a})` : a;
    }
    return h;
}
else if (ue(e))
    return e; }
function We(e, t, r) { P(t, !1) && e.push(`${t}:${r};`); }
function C(e, t) { return e ? `${e}{${t}}` : ""; }
function Se(e, t) { if (e.indexOf("dt(") === -1)
    return e; function r(a, n) { let i = [], o = 0, u = "", d = null, c = 0; for (; o <= a.length;) {
    let m = a[o];
    if ((m === '"' || m === "'" || m === "`") && a[o - 1] !== "\\" && (d = d === m ? null : m), !d && (m === "(" && c++, m === ")" && c--, (m === "," || o === a.length) && c === 0)) {
        let p = u.trim();
        p.startsWith("dt(") ? i.push(Se(p, n)) : i.push(s(p)), u = "", o++;
        continue;
    }
    m !== void 0 && (u += m), o++;
} return i; } function s(a) { let n = a[0]; if ((n === '"' || n === "'" || n === "`") && a[a.length - 1] === n)
    return a.slice(1, -1); let i = Number(a); return isNaN(i) ? a : i; } let l = [], h = []; for (let a = 0; a < e.length; a++)
    if (e[a] === "d" && e.slice(a, a + 3) === "dt(")
        h.push(a), a += 2;
    else if (e[a] === ")" && h.length > 0) {
        let n = h.pop();
        h.length === 0 && l.push([n, a]);
    } if (!l.length)
    return e; for (let a = l.length - 1; a >= 0; a--) {
    let [n, i] = l[a], o = e.slice(n + 3, i), u = r(o, t), d = t(...u);
    e = e.slice(0, n) + d + e.slice(i + 1);
} return e; }
var tt = e => { var t; let r = T.getTheme(), s = ae(r, e, void 0, "variable"), l = (t = s?.match(/--[\w-]+/g)) == null ? void 0 : t[0], h = ae(r, e, void 0, "value"); return { name: l, variable: s, value: h }; }, j = (...e) => ae(T.getTheme(), ...e), ae = (e = {}, t, r, s) => { if (t) {
    let { variable: l, options: h } = T.defaults || {}, { prefix: a, transform: n } = e?.options || h || {}, i = b(t, R) ? t : `{${t}}`;
    return s === "value" || Q(s) && n === "strict" ? T.getTokenValue(t) : ve(i, void 0, a, [l.excludedKeyRegex], r);
} return ""; };
function rt(e, ...t) { if (e instanceof Array) {
    let r = e.reduce((s, l, h) => { var a; return s + l + ((a = x(t[h], { dt: j })) != null ? a : ""); }, "");
    return Se(r, j);
} return x(e, { dt: j }); }
function Ie(e, t = {}) { let r = T.defaults.variable, { prefix: s = r.prefix, selector: l = r.selector, excludedKeyRegex: h = r.excludedKeyRegex } = t, a = [], n = [], i = [{ node: e, path: s }]; for (; i.length;) {
    let { node: u, path: d } = i.pop();
    for (let c in u) {
        let m = u[c], p = Xe(m), y = b(c, h) ? se(d) : se(d, Y(c));
        if (N(p))
            i.push({ node: p, path: y });
        else {
            let g = ye(y), v = ve(p, y, s, [h]);
            We(n, g, v);
            let S = y;
            s && S.startsWith(s + "-") && (S = S.slice(s.length + 1)), a.push(S.replace(/-/g, "."));
        }
    }
} let o = n.join(""); return { value: n, tokens: a, declarations: o, css: C(l, o) }; }
var $ = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) { return { type: "class", selector: e, matched: this.pattern.test(e.trim()) }; } }, attr: { pattern: /^\[(.*)\]$/, resolve(e) { return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) }; } }, media: { pattern: /^@media (.*)$/, resolve(e) { return { type: "media", selector: e, matched: this.pattern.test(e.trim()) }; } }, system: { pattern: /^system$/, resolve(e) { return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) }; } }, custom: { resolve(e) { return { type: "custom", selector: e, matched: !0 }; } } }, resolve(e) { let t = Object.keys(this.rules).filter(r => r !== "custom").map(r => this.rules[r]); return [e].flat().map(r => { var s; return (s = t.map(l => l.resolve(r)).find(l => l.matched)) != null ? s : this.rules.custom.resolve(r); }); } }, _toVariables(e, t) { return Ie(e, { prefix: t?.prefix }); }, getCommon({ name: e = "", theme: t = {}, params: r, set: s, defaults: l }) { var h, a, n, i, o, u, d; let { preset: c, options: m } = t, p, y, g, v, S, L, M; if (f(c) && m.transform !== "strict") {
        let { primitive: A, semantic: D, extend: K } = c, w = D || {}, { colorScheme: z } = w, U = _(w, ["colorScheme"]), X = K || {}, { colorScheme: B } = X, V = _(X, ["colorScheme"]), E = z || {}, { dark: G } = E, W = _(E, ["dark"]), I = B || {}, { dark: Z } = I, q = _(I, ["dark"]), H = f(A) ? this._toVariables({ primitive: A }, m) : {}, F = f(U) ? this._toVariables({ semantic: U }, m) : {}, J = f(W) ? this._toVariables({ light: W }, m) : {}, le = f(G) ? this._toVariables({ dark: G }, m) : {}, ie = f(V) ? this._toVariables({ semantic: V }, m) : {}, ne = f(q) ? this._toVariables({ light: q }, m) : {}, oe = f(Z) ? this._toVariables({ dark: Z }, m) : {}, [be, $e] = [(h = H.declarations) != null ? h : "", H.tokens], [ke, _e] = [(a = F.declarations) != null ? a : "", F.tokens || []], [Ne, xe] = [(n = J.declarations) != null ? n : "", J.tokens || []], [Oe, Pe] = [(i = le.declarations) != null ? i : "", le.tokens || []], [Ce, Le] = [(o = ie.declarations) != null ? o : "", ie.tokens || []], [we, Ve] = [(u = ne.declarations) != null ? u : "", ne.tokens || []], [Ee, je] = [(d = oe.declarations) != null ? d : "", oe.tokens || []];
        p = this.transformCSS(e, be, "light", "variable", m, s, l), y = $e;
        let Re = this.transformCSS(e, `${ke}${Ne}`, "light", "variable", m, s, l), Te = this.transformCSS(e, `${Oe}`, "dark", "variable", m, s, l);
        g = `${Re}${Te}`, v = [...new Set([..._e, ...xe, ...Pe])];
        let Me = this.transformCSS(e, `${Ce}${we}color-scheme:light`, "light", "variable", m, s, l), Ae = this.transformCSS(e, `${Ee}color-scheme:dark`, "dark", "variable", m, s, l);
        S = `${Me}${Ae}`, L = [...new Set([...Le, ...Ve, ...je])], M = x(c.css, { dt: j });
    } return { primitive: { css: p, tokens: y }, semantic: { css: g, tokens: v }, global: { css: S, tokens: L }, style: M }; }, getPreset({ name: e = "", preset: t = {}, options: r, params: s, set: l, defaults: h, selector: a }) { var n, i, o; let u, d, c; if (f(t) && r.transform !== "strict") {
        let m = e.replace("-directive", ""), p = t, { colorScheme: y, extend: g, css: v } = p, S = _(p, ["colorScheme", "extend", "css"]), L = g || {}, { colorScheme: M } = L, A = _(L, ["colorScheme"]), D = y || {}, { dark: K } = D, w = _(D, ["dark"]), z = M || {}, { dark: U } = z, X = _(z, ["dark"]), B = f(S) ? this._toVariables({ [m]: k(k({}, S), A) }, r) : {}, V = f(w) ? this._toVariables({ [m]: k(k({}, w), X) }, r) : {}, E = f(K) ? this._toVariables({ [m]: k(k({}, K), U) }, r) : {}, [G, W] = [(n = B.declarations) != null ? n : "", B.tokens || []], [I, Z] = [(i = V.declarations) != null ? i : "", V.tokens || []], [q, H] = [(o = E.declarations) != null ? o : "", E.tokens || []], F = this.transformCSS(m, `${G}${I}`, "light", "variable", r, l, h, a), J = this.transformCSS(m, q, "dark", "variable", r, l, h, a);
        u = `${F}${J}`, d = [...new Set([...W, ...Z, ...H])], c = x(v, { dt: j });
    } return { css: u, tokens: d, style: c }; }, getPresetC({ name: e = "", theme: t = {}, params: r, set: s, defaults: l }) { var h; let { preset: a, options: n } = t, i = (h = a?.components) == null ? void 0 : h[e]; return this.getPreset({ name: e, preset: i, options: n, params: r, set: s, defaults: l }); }, getPresetD({ name: e = "", theme: t = {}, params: r, set: s, defaults: l }) { var h, a; let n = e.replace("-directive", ""), { preset: i, options: o } = t, u = ((h = i?.components) == null ? void 0 : h[n]) || ((a = i?.directives) == null ? void 0 : a[n]); return this.getPreset({ name: n, preset: u, options: o, params: r, set: s, defaults: l }); }, applyDarkColorScheme(e) { return !(e.darkModeSelector === "none" || e.darkModeSelector === !1); }, getColorSchemeOption(e, t) { var r; return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : []; }, getLayerOrder(e, t = {}, r, s) { let { cssLayer: l } = t; return l ? `@layer ${x(l.order || l.name || "primeui", r)}` : ""; }, getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: s = {}, set: l, defaults: h }) { let a = this.getCommon({ name: e, theme: t, params: r, set: l, defaults: h }), n = Object.entries(s).reduce((i, [o, u]) => i.push(`${o}="${u}"`) && i, []).join(" "); return Object.entries(a || {}).reduce((i, [o, u]) => { if (N(u) && Object.hasOwn(u, "css")) {
        let d = te(u.css), c = `${o}-variables`;
        i.push(`<style type="text/css" data-primevue-style-id="${c}" ${n}>${d}</style>`);
    } return i; }, []).join(""); }, getStyleSheet({ name: e = "", theme: t = {}, params: r, props: s = {}, set: l, defaults: h }) { var a; let n = { name: e, theme: t, params: r, set: l, defaults: h }, i = (a = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : a.css, o = Object.entries(s).reduce((u, [d, c]) => u.push(`${d}="${c}"`) && u, []).join(" "); return i ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${te(i)}</style>` : ""; }, createTokens(e = {}, t, r = "", s = "", l = {}) { let h = function (n, i = {}, o = []) { if (o.includes(this.path))
        return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: n, path: this.path, paths: i, value: void 0 }; o.push(this.path), i.name = this.path, i.binding || (i.binding = {}); let u = this.value; if (typeof this.value == "string" && R.test(this.value)) {
        let d = this.value.trim().replace(R, c => { var m; let p = c.slice(1, -1), y = this.tokens[p]; if (!y)
            return console.warn(`Token not found for path: ${p}`), "__UNRESOLVED__"; let g = y.computed(n, i, o); return Array.isArray(g) && g.length === 2 ? `light-dark(${g[0].value},${g[1].value})` : (m = g?.value) != null ? m : "__UNRESOLVED__"; });
        u = fe.test(d.replace(ge, "0")) ? `calc(${d})` : d;
    } return Q(i.binding) && delete i.binding, o.pop(), { colorScheme: n, path: this.path, paths: i, value: u.includes("__UNRESOLVED__") ? void 0 : u }; }, a = (n, i, o) => { Object.entries(n).forEach(([u, d]) => { let c = b(u, t.variable.excludedKeyRegex) ? i : i ? `${i}.${ce(u)}` : ce(u), m = o ? `${o}.${u}` : u; N(d) ? a(d, c, m) : (l[c] || (l[c] = { paths: [], computed: (p, y = {}, g = []) => { if (l[c].paths.length === 1)
            return l[c].paths[0].computed(l[c].paths[0].scheme, y.binding, g); if (p && p !== "none")
            for (let v = 0; v < l[c].paths.length; v++) {
                let S = l[c].paths[v];
                if (S.scheme === p)
                    return S.computed(p, y.binding, g);
            } return l[c].paths.map(v => v.computed(v.scheme, y[v.scheme], g)); } }), l[c].paths.push({ path: m, value: d, scheme: m.includes("colorScheme.light") ? "light" : m.includes("colorScheme.dark") ? "dark" : "none", computed: h, tokens: l })); }); }; return a(e, r, s), l; }, getTokenValue(e, t, r) { var s; let l = (n => n.split(".").filter(i => !b(i.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), h = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [(s = e[l]) == null ? void 0 : s.computed(h)].flat().filter(n => n); return a.length === 1 ? a[0].value : a.reduce((n = {}, i) => { let o = i, { colorScheme: u } = o, d = _(o, ["colorScheme"]); return n[u] = d, n; }, void 0); }, getSelectorRule(e, t, r, s) { return r === "class" || r === "attr" ? C(f(t) ? `${e}${t},${e} ${t}` : e, s) : C(e, C(t ?? ":root,:host", s)); }, transformCSS(e, t, r, s, l = {}, h, a, n) { if (f(t)) {
        let { cssLayer: i } = l;
        if (s !== "style") {
            let o = this.getColorSchemeOption(l, a);
            t = r === "dark" ? o.reduce((u, { type: d, selector: c }) => (f(c) && (u += c.includes("[CSS]") ? c.replace("[CSS]", t) : this.getSelectorRule(c, n, d, t)), u), "") : C(n ?? ":root,:host", t);
        }
        if (i) {
            let o = { name: "primeui", order: "primeui" };
            N(i) && (o.name = x(i.name, { name: e, type: s })), f(o.name) && (t = C(`@layer ${o.name}`, t), h?.layerNames(o.name));
        }
        return t;
    } return ""; } }, T = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: new Set, _loadedStyleNames: new Set, _loadingStyles: new Set, _tokens: {}, update(e = {}) { let { theme: t } = e; t && (this._theme = re(k({}, t), { options: k(k({}, this.defaults.options), t.options) }), this._tokens = $.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames()); }, get theme() { return this._theme; }, get preset() { var e; return ((e = this.theme) == null ? void 0 : e.preset) || {}; }, get options() { var e; return ((e = this.theme) == null ? void 0 : e.options) || {}; }, get tokens() { return this._tokens; }, getTheme() { return this.theme; }, setTheme(e) { this.update({ theme: e }), O.emit("theme:change", e); }, getPreset() { return this.preset; }, setPreset(e) { this._theme = re(k({}, this.theme), { preset: e }), this._tokens = $.createTokens(e, this.defaults), this.clearLoadedStyleNames(), O.emit("preset:change", e), O.emit("theme:change", this.theme); }, getOptions() { return this.options; }, setOptions(e) { this._theme = re(k({}, this.theme), { options: e }), this.clearLoadedStyleNames(), O.emit("options:change", e), O.emit("theme:change", this.theme); }, getLayerNames() { return [...this._layerNames]; }, setLayerNames(e) { this._layerNames.add(e); }, getLoadedStyleNames() { return this._loadedStyleNames; }, isStyleNameLoaded(e) { return this._loadedStyleNames.has(e); }, setLoadedStyleName(e) { this._loadedStyleNames.add(e); }, deleteLoadedStyleName(e) { this._loadedStyleNames.delete(e); }, clearLoadedStyleNames() { this._loadedStyleNames.clear(); }, getTokenValue(e) { return $.getTokenValue(this.tokens, e, this.defaults); }, getCommon(e = "", t) { return $.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }); }, getComponent(e = "", t) { let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }; return $.getPresetC(r); }, getDirective(e = "", t) { let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }; return $.getPresetD(r); }, getCustomPreset(e = "", t, r, s) { let l = { name: e, preset: t, options: this.options, selector: r, params: s, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }; return $.getPreset(l); }, getLayerOrderCSS(e = "") { return $.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults); }, transformCSS(e = "", t, r = "style", s) { return $.transformCSS(e, t, s, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults); }, getCommonStyleSheet(e = "", t, r = {}) { return $.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }); }, getStyleSheet(e, t, r = {}) { return $.getStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } }); }, onStyleMounted(e) { this._loadingStyles.add(e); }, onStyleUpdated(e) { this._loadingStyles.add(e); }, onStyleLoaded(e, { name: t }) { this._loadingStyles.size && (this._loadingStyles.delete(t), O.emit(`theme:${t}:load`, e), !this._loadingStyles.size && O.emit("theme:load")); } };
export { O as a, tt as b, j as c, rt as d, T as e };
