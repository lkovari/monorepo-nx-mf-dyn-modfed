import { a as o, b as _, d as Pe, e as C } from "@nf-internal/chunk-JKOY2XUY";
var xe = {};
Pe(xe, { BRAND: () => ut, DIRTY: () => I, EMPTY_PATH: () => Ue, INVALID: () => y, NEVER: () => Yt, OK: () => T, ParseStatus: () => w, Schema: () => x, ZodAny: () => Q, ZodArray: () => q, ZodBigInt: () => oe, ZodBoolean: () => ce, ZodBranded: () => J, ZodCatch: () => ge, ZodDate: () => de, ZodDefault: () => _e, ZodDiscriminatedUnion: () => X, ZodEffects: () => L, ZodEnum: () => re, ZodError: () => N, ZodFirstPartyTypeKind: () => g, ZodFunction: () => ee, ZodIntersection: () => he, ZodIssueCode: () => u, ZodLazy: () => pe, ZodLiteral: () => me, ZodMap: () => Oe, ZodNaN: () => Ie, ZodNativeEnum: () => ye, ZodNever: () => j, ZodNull: () => le, ZodNullable: () => U, ZodNumber: () => ie, ZodObject: () => z, ZodOptional: () => E, ZodParsedType: () => f, ZodPipeline: () => Y, ZodPromise: () => se, ZodReadonly: () => ve, ZodRecord: () => K, ZodSchema: () => x, ZodSet: () => Re, ZodString: () => te, ZodSymbol: () => Ne, ZodTransformer: () => L, ZodTuple: () => D, ZodType: () => x, ZodUndefined: () => ue, ZodUnion: () => fe, ZodUnknown: () => W, ZodVoid: () => Ae, addIssueToContext: () => l, any: () => vt, array: () => wt, bigint: () => pt, boolean: () => Ve, coerce: () => Jt, custom: () => je, date: () => mt, datetimeRegex: () => Se, defaultErrorMap: () => A, discriminatedUnion: () => St, effect: () => zt, enum: () => Mt, function: () => It, getErrorMap: () => M, getParsedType: () => S, instanceof: () => ft, intersection: () => Nt, isAborted: () => H, isAsync: () => V, isDirty: () => G, isValid: () => R, late: () => lt, lazy: () => jt, literal: () => $t, makeIssue: () => F, map: () => Rt, nan: () => ht, nativeEnum: () => Vt, never: () => kt, null: () => gt, nullable: () => Lt, number: () => Me, object: () => Tt, objectUtil: () => ke, oboolean: () => qt, onumber: () => Wt, optional: () => Dt, ostring: () => Ft, pipeline: () => Bt, preprocess: () => Ut, promise: () => Pt, quotelessJson: () => ze, record: () => Ot, set: () => Et, setErrorMap: () => Le, strictObject: () => Zt, string: () => $e, symbol: () => yt, transformer: () => zt, tuple: () => At, undefined: () => _t, union: () => Ct, unknown: () => xt, util: () => b, void: () => bt });
var b;
(function (t) { t.assertEqual = s => { }; function n(s) { } t.assertIs = n; function e(s) { throw new Error; } t.assertNever = e, t.arrayToEnum = s => { let a = {}; for (let i of s)
    a[i] = i; return a; }, t.getValidEnumValues = s => { let a = t.objectKeys(s).filter(c => typeof s[s[c]] != "number"), i = {}; for (let c of a)
    i[c] = s[c]; return t.objectValues(i); }, t.objectValues = s => t.objectKeys(s).map(function (a) { return s[a]; }), t.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => { let a = []; for (let i in s)
    Object.prototype.hasOwnProperty.call(s, i) && a.push(i); return a; }, t.find = (s, a) => { for (let i of s)
    if (a(i))
        return i; }, t.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s; function r(s, a = " | ") { return s.map(i => typeof i == "string" ? `'${i}'` : i).join(a); } t.joinValues = r, t.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a; })(b || (b = {}));
var ke = (function (t) { return t.mergeShapes = (n, e) => o(o({}, n), e), t; })(ke || {}), f = b.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), S = t => { switch (typeof t) {
    case "undefined": return f.undefined;
    case "string": return f.string;
    case "number": return Number.isNaN(t) ? f.nan : f.number;
    case "boolean": return f.boolean;
    case "function": return f.function;
    case "bigint": return f.bigint;
    case "symbol": return f.symbol;
    case "object": return Array.isArray(t) ? f.array : t === null ? f.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? f.promise : typeof Map < "u" && t instanceof Map ? f.map : typeof Set < "u" && t instanceof Set ? f.set : typeof Date < "u" && t instanceof Date ? f.date : f.object;
    default: return f.unknown;
} };
var u = b.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]), ze = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:"), N = (() => { class t extends Error {
    get errors() { return this.issues; }
    constructor(e) { super(), this.issues = [], this.addIssue = s => { this.issues = [...this.issues, s]; }, this.addIssues = (s = []) => { this.issues = [...this.issues, ...s]; }; let r = new.target.prototype; Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e; }
    format(e) { let r = e || function (i) { return i.message; }, s = { _errors: [] }, a = i => { for (let c of i.issues)
        if (c.code === "invalid_union")
            c.unionErrors.map(a);
        else if (c.code === "invalid_return_type")
            a(c.returnTypeError);
        else if (c.code === "invalid_arguments")
            a(c.argumentsError);
        else if (c.path.length === 0)
            s._errors.push(r(c));
        else {
            let d = s, p = 0;
            for (; p < c.path.length;) {
                let m = c.path[p];
                p === c.path.length - 1 ? (d[m] = d[m] || { _errors: [] }, d[m]._errors.push(r(c))) : d[m] = d[m] || { _errors: [] }, d = d[m], p++;
            }
        } }; return a(this), s; }
    static assert(e) { if (!(e instanceof t))
        throw new Error(`Not a ZodError: ${e}`); }
    toString() { return this.message; }
    get message() { return JSON.stringify(this.issues, b.jsonStringifyReplacer, 2); }
    get isEmpty() { return this.issues.length === 0; }
    flatten(e = r => r.message) { let r = {}, s = []; for (let a of this.issues)
        if (a.path.length > 0) {
            let i = a.path[0];
            r[i] = r[i] || [], r[i].push(e(a));
        }
        else
            s.push(e(a)); return { formErrors: s, fieldErrors: r }; }
    get formErrors() { return this.flatten(); }
} return t.create = n => new t(n), t; })();
var De = (t, n) => { let e; switch (t.code) {
    case u.invalid_type:
        t.received === f.undefined ? e = "Required" : e = `Expected ${t.expected}, received ${t.received}`;
        break;
    case u.invalid_literal:
        e = `Invalid literal value, expected ${JSON.stringify(t.expected, b.jsonStringifyReplacer)}`;
        break;
    case u.unrecognized_keys:
        e = `Unrecognized key(s) in object: ${b.joinValues(t.keys, ", ")}`;
        break;
    case u.invalid_union:
        e = "Invalid input";
        break;
    case u.invalid_union_discriminator:
        e = `Invalid discriminator value. Expected ${b.joinValues(t.options)}`;
        break;
    case u.invalid_enum_value:
        e = `Invalid enum value. Expected ${b.joinValues(t.options)}, received '${t.received}'`;
        break;
    case u.invalid_arguments:
        e = "Invalid function arguments";
        break;
    case u.invalid_return_type:
        e = "Invalid function return type";
        break;
    case u.invalid_date:
        e = "Invalid date";
        break;
    case u.invalid_string:
        typeof t.validation == "object" ? "includes" in t.validation ? (e = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (e = `${e} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? e = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? e = `Invalid input: must end with "${t.validation.endsWith}"` : b.assertNever(t.validation) : t.validation !== "regex" ? e = `Invalid ${t.validation}` : e = "Invalid";
        break;
    case u.too_small:
        t.type === "array" ? e = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? e = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? e = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "bigint" ? e = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? e = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : e = "Invalid input";
        break;
    case u.too_big:
        t.type === "array" ? e = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? e = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? e = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? e = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? e = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : e = "Invalid input";
        break;
    case u.custom:
        e = "Invalid input";
        break;
    case u.invalid_intersection_types:
        e = "Intersection results could not be merged";
        break;
    case u.not_multiple_of:
        e = `Number must be a multiple of ${t.multipleOf}`;
        break;
    case u.not_finite:
        e = "Number must be finite";
        break;
    default: e = n.defaultError, b.assertNever(t);
} return { message: e }; }, A = De;
var be = A;
function Le(t) { be = t; }
function M() { return be; }
var F = t => { let { data: n, path: e, errorMaps: r, issueData: s } = t, a = [...e, ...s.path || []], i = _(o({}, s), { path: a }); if (s.message !== void 0)
    return _(o({}, s), { path: a, message: s.message }); let c = "", d = r.filter(p => !!p).slice().reverse(); for (let p of d)
    c = p(i, { data: n, defaultError: c }).message; return _(o({}, s), { path: a, message: c }); }, Ue = [];
function l(t, n) { let e = M(), r = F({ issueData: n, data: t.data, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, e, e === A ? void 0 : A].filter(s => !!s) }); t.common.issues.push(r); }
var w = class t {
    constructor() { this.value = "valid"; }
    dirty() { this.value === "valid" && (this.value = "dirty"); }
    abort() { this.value !== "aborted" && (this.value = "aborted"); }
    static mergeArray(n, e) { let r = []; for (let s of e) {
        if (s.status === "aborted")
            return y;
        s.status === "dirty" && n.dirty(), r.push(s.value);
    } return { status: n.value, value: r }; }
    static mergeObjectAsync(n, e) { return C(this, null, function* () { let r = []; for (let s of e) {
        let a = yield s.key, i = yield s.value;
        r.push({ key: a, value: i });
    } return t.mergeObjectSync(n, r); }); }
    static mergeObjectSync(n, e) { let r = {}; for (let s of e) {
        let { key: a, value: i } = s;
        if (a.status === "aborted" || i.status === "aborted")
            return y;
        a.status === "dirty" && n.dirty(), i.status === "dirty" && n.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[a.value] = i.value);
    } return { status: n.value, value: r }; }
}, y = Object.freeze({ status: "aborted" }), I = t => ({ status: "dirty", value: t }), T = t => ({ status: "valid", value: t }), H = t => t.status === "aborted", G = t => t.status === "dirty", R = t => t.status === "valid", V = t => typeof Promise < "u" && t instanceof Promise;
var h = (function (t) { return t.errToObj = n => typeof n == "string" ? { message: n } : n || {}, t.toString = n => typeof n == "string" ? n : n?.message, t; })(h || {});
var Z = class {
    constructor(n, e, r, s) { this._cachedPath = [], this.parent = n, this.data = e, this._path = r, this._key = s; }
    get path() { return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath; }
}, we = (t, n) => { if (R(n))
    return { success: !0, data: n.value }; if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected."); return { success: !1, get error() { if (this._error)
        return this._error; let e = new N(t.common.issues); return this._error = e, this._error; } }; };
function v(t) { if (!t)
    return {}; let { errorMap: n, invalid_type_error: e, required_error: r, description: s } = t; if (n && (e || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`); return n ? { errorMap: n, description: s } : { errorMap: (i, c) => { let { message: d } = t; return i.code === "invalid_enum_value" ? { message: d ?? c.defaultError } : typeof c.data > "u" ? { message: d ?? r ?? c.defaultError } : i.code !== "invalid_type" ? { message: c.defaultError } : { message: d ?? e ?? c.defaultError }; }, description: s }; }
var x = class {
    get description() { return this._def.description; }
    _getType(n) { return S(n.data); }
    _getOrReturnCtx(n, e) { return e || { common: n.parent.common, data: n.data, parsedType: S(n.data), schemaErrorMap: this._def.errorMap, path: n.path, parent: n.parent }; }
    _processInputParams(n) { return { status: new w, ctx: { common: n.parent.common, data: n.data, parsedType: S(n.data), schemaErrorMap: this._def.errorMap, path: n.path, parent: n.parent } }; }
    _parseSync(n) { let e = this._parse(n); if (V(e))
        throw new Error("Synchronous parse encountered promise."); return e; }
    _parseAsync(n) { let e = this._parse(n); return Promise.resolve(e); }
    parse(n, e) { let r = this.safeParse(n, e); if (r.success)
        return r.data; throw r.error; }
    safeParse(n, e) { let r = { common: { issues: [], async: e?.async ?? !1, contextualErrorMap: e?.errorMap }, path: e?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: n, parsedType: S(n) }, s = this._parseSync({ data: n, path: r.path, parent: r }); return we(r, s); }
    "~validate"(n) { let e = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: n, parsedType: S(n) }; if (!this["~standard"].async)
        try {
            let r = this._parseSync({ data: n, path: [], parent: e });
            return R(r) ? { value: r.value } : { issues: e.common.issues };
        }
        catch (r) {
            r?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), e.common = { issues: [], async: !0 };
        } return this._parseAsync({ data: n, path: [], parent: e }).then(r => R(r) ? { value: r.value } : { issues: e.common.issues }); }
    parseAsync(n, e) { return C(this, null, function* () { let r = yield this.safeParseAsync(n, e); if (r.success)
        return r.data; throw r.error; }); }
    safeParseAsync(n, e) { return C(this, null, function* () { let r = { common: { issues: [], contextualErrorMap: e?.errorMap, async: !0 }, path: e?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: n, parsedType: S(n) }, s = this._parse({ data: n, path: r.path, parent: r }), a = yield V(s) ? s : Promise.resolve(s); return we(r, a); }); }
    refine(n, e) { let r = s => typeof e == "string" || typeof e > "u" ? { message: e } : typeof e == "function" ? e(s) : e; return this._refinement((s, a) => { let i = n(s), c = () => a.addIssue(o({ code: u.custom }, r(s))); return typeof Promise < "u" && i instanceof Promise ? i.then(d => d ? !0 : (c(), !1)) : i ? !0 : (c(), !1); }); }
    refinement(n, e) { return this._refinement((r, s) => n(r) ? !0 : (s.addIssue(typeof e == "function" ? e(r, s) : e), !1)); }
    _refinement(n) { return new L({ schema: this, typeName: g.ZodEffects, effect: { type: "refinement", refinement: n } }); }
    superRefine(n) { return this._refinement(n); }
    constructor(n) { this.spa = this.safeParseAsync, this._def = n, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: e => this["~validate"](e) }; }
    optional() { return E.create(this, this._def); }
    nullable() { return U.create(this, this._def); }
    nullish() { return this.nullable().optional(); }
    array() { return q.create(this); }
    promise() { return se.create(this, this._def); }
    or(n) { return fe.create([this, n], this._def); }
    and(n) { return he.create(this, n, this._def); }
    transform(n) { return new L(_(o({}, v(this._def)), { schema: this, typeName: g.ZodEffects, effect: { type: "transform", transform: n } })); }
    default(n) { let e = typeof n == "function" ? n : () => n; return new _e(_(o({}, v(this._def)), { innerType: this, defaultValue: e, typeName: g.ZodDefault })); }
    brand() { return new J(o({ typeName: g.ZodBranded, type: this }, v(this._def))); }
    catch(n) { let e = typeof n == "function" ? n : () => n; return new ge(_(o({}, v(this._def)), { innerType: this, catchValue: e, typeName: g.ZodCatch })); }
    describe(n) { let e = this.constructor; return new e(_(o({}, this._def), { description: n })); }
    pipe(n) { return Y.create(this, n); }
    readonly() { return ve.create(this); }
    isOptional() { return this.safeParse(void 0).success; }
    isNullable() { return this.safeParse(null).success; }
}, Be = /^c[^\s-]{8,}$/i, Fe = /^[0-9a-z]+$/, We = /^[0-9A-HJKMNP-TV-Z]{26}$/i, qe = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Je = /^[a-z0-9_-]{21}$/i, Ye = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, He = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ge = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Qe = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", ne, Xe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ke = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, et = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, tt = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, rt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, st = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ze = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", nt = new RegExp(`^${Ze}$`);
function Ce(t) { let n = "[0-5]\\d"; t.precision ? n = `${n}\\.\\d{${t.precision}}` : t.precision == null && (n = `${n}(\\.\\d+)?`); let e = t.precision ? "+" : "?"; return `([01]\\d|2[0-3]):[0-5]\\d(:${n})${e}`; }
function at(t) { return new RegExp(`^${Ce(t)}$`); }
function Se(t) { let n = `${Ze}T${Ce(t)}`, e = []; return e.push(t.local ? "Z?" : "Z"), t.offset && e.push("([+-]\\d{2}:?\\d{2})"), n = `${n}(${e.join("|")})`, new RegExp(`^${n}$`); }
function it(t, n) { return !!((n === "v4" || !n) && Xe.test(t) || (n === "v6" || !n) && et.test(t)); }
function ot(t, n) { if (!Ye.test(t))
    return !1; try {
    let [e] = t.split(".");
    if (!e)
        return !1;
    let r = e.replace(/-/g, "+").replace(/_/g, "/").padEnd(e.length + (4 - e.length % 4) % 4, "="), s = JSON.parse(atob(r));
    return !(typeof s != "object" || s === null || "typ" in s && s?.typ !== "JWT" || !s.alg || n && s.alg !== n);
}
catch {
    return !1;
} }
function ct(t, n) { return !!((n === "v4" || !n) && Ke.test(t) || (n === "v6" || !n) && tt.test(t)); }
var te = (() => { class t extends x {
    _parse(e) { if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
        let i = this._getOrReturnCtx(e);
        return l(i, { code: u.invalid_type, expected: f.string, received: i.parsedType }), y;
    } let s = new w, a; for (let i of this._def.checks)
        if (i.kind === "min")
            e.data.length < i.value && (a = this._getOrReturnCtx(e, a), l(a, { code: u.too_small, minimum: i.value, type: "string", inclusive: !0, exact: !1, message: i.message }), s.dirty());
        else if (i.kind === "max")
            e.data.length > i.value && (a = this._getOrReturnCtx(e, a), l(a, { code: u.too_big, maximum: i.value, type: "string", inclusive: !0, exact: !1, message: i.message }), s.dirty());
        else if (i.kind === "length") {
            let c = e.data.length > i.value, d = e.data.length < i.value;
            (c || d) && (a = this._getOrReturnCtx(e, a), c ? l(a, { code: u.too_big, maximum: i.value, type: "string", inclusive: !0, exact: !0, message: i.message }) : d && l(a, { code: u.too_small, minimum: i.value, type: "string", inclusive: !0, exact: !0, message: i.message }), s.dirty());
        }
        else if (i.kind === "email")
            Ge.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "email", code: u.invalid_string, message: i.message }), s.dirty());
        else if (i.kind === "emoji")
            ne || (ne = new RegExp(Qe, "u")), ne.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "emoji", code: u.invalid_string, message: i.message }), s.dirty());
        else if (i.kind === "uuid")
            qe.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "uuid", code: u.invalid_string, message: i.message }), s.dirty());
        else if (i.kind === "nanoid")
            Je.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "nanoid", code: u.invalid_string, message: i.message }), s.dirty());
        else if (i.kind === "cuid")
            Be.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "cuid", code: u.invalid_string, message: i.message }), s.dirty());
        else if (i.kind === "cuid2")
            Fe.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "cuid2", code: u.invalid_string, message: i.message }), s.dirty());
        else if (i.kind === "ulid")
            We.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "ulid", code: u.invalid_string, message: i.message }), s.dirty());
        else if (i.kind === "url")
            try {
                new URL(e.data);
            }
            catch {
                a = this._getOrReturnCtx(e, a), l(a, { validation: "url", code: u.invalid_string, message: i.message }), s.dirty();
            }
        else
            i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "regex", code: u.invalid_string, message: i.message }), s.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (a = this._getOrReturnCtx(e, a), l(a, { code: u.invalid_string, validation: { includes: i.value, position: i.position }, message: i.message }), s.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (a = this._getOrReturnCtx(e, a), l(a, { code: u.invalid_string, validation: { startsWith: i.value }, message: i.message }), s.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (a = this._getOrReturnCtx(e, a), l(a, { code: u.invalid_string, validation: { endsWith: i.value }, message: i.message }), s.dirty()) : i.kind === "datetime" ? Se(i).test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { code: u.invalid_string, validation: "datetime", message: i.message }), s.dirty()) : i.kind === "date" ? nt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { code: u.invalid_string, validation: "date", message: i.message }), s.dirty()) : i.kind === "time" ? at(i).test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { code: u.invalid_string, validation: "time", message: i.message }), s.dirty()) : i.kind === "duration" ? He.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "duration", code: u.invalid_string, message: i.message }), s.dirty()) : i.kind === "ip" ? it(e.data, i.version) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "ip", code: u.invalid_string, message: i.message }), s.dirty()) : i.kind === "jwt" ? ot(e.data, i.alg) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "jwt", code: u.invalid_string, message: i.message }), s.dirty()) : i.kind === "cidr" ? ct(e.data, i.version) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "cidr", code: u.invalid_string, message: i.message }), s.dirty()) : i.kind === "base64" ? rt.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "base64", code: u.invalid_string, message: i.message }), s.dirty()) : i.kind === "base64url" ? st.test(e.data) || (a = this._getOrReturnCtx(e, a), l(a, { validation: "base64url", code: u.invalid_string, message: i.message }), s.dirty()) : b.assertNever(i); return { status: s.value, value: e.data }; }
    _regex(e, r, s) { return this.refinement(a => e.test(a), o({ validation: r, code: u.invalid_string }, h.errToObj(s))); }
    _addCheck(e) { return new t(_(o({}, this._def), { checks: [...this._def.checks, e] })); }
    email(e) { return this._addCheck(o({ kind: "email" }, h.errToObj(e))); }
    url(e) { return this._addCheck(o({ kind: "url" }, h.errToObj(e))); }
    emoji(e) { return this._addCheck(o({ kind: "emoji" }, h.errToObj(e))); }
    uuid(e) { return this._addCheck(o({ kind: "uuid" }, h.errToObj(e))); }
    nanoid(e) { return this._addCheck(o({ kind: "nanoid" }, h.errToObj(e))); }
    cuid(e) { return this._addCheck(o({ kind: "cuid" }, h.errToObj(e))); }
    cuid2(e) { return this._addCheck(o({ kind: "cuid2" }, h.errToObj(e))); }
    ulid(e) { return this._addCheck(o({ kind: "ulid" }, h.errToObj(e))); }
    base64(e) { return this._addCheck(o({ kind: "base64" }, h.errToObj(e))); }
    base64url(e) { return this._addCheck(o({ kind: "base64url" }, h.errToObj(e))); }
    jwt(e) { return this._addCheck(o({ kind: "jwt" }, h.errToObj(e))); }
    ip(e) { return this._addCheck(o({ kind: "ip" }, h.errToObj(e))); }
    cidr(e) { return this._addCheck(o({ kind: "cidr" }, h.errToObj(e))); }
    datetime(e) { return typeof e == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: e }) : this._addCheck(o({ kind: "datetime", precision: typeof e?.precision > "u" ? null : e?.precision, offset: e?.offset ?? !1, local: e?.local ?? !1 }, h.errToObj(e?.message))); }
    date(e) { return this._addCheck({ kind: "date", message: e }); }
    time(e) { return typeof e == "string" ? this._addCheck({ kind: "time", precision: null, message: e }) : this._addCheck(o({ kind: "time", precision: typeof e?.precision > "u" ? null : e?.precision }, h.errToObj(e?.message))); }
    duration(e) { return this._addCheck(o({ kind: "duration" }, h.errToObj(e))); }
    regex(e, r) { return this._addCheck(o({ kind: "regex", regex: e }, h.errToObj(r))); }
    includes(e, r) { return this._addCheck(o({ kind: "includes", value: e, position: r?.position }, h.errToObj(r?.message))); }
    startsWith(e, r) { return this._addCheck(o({ kind: "startsWith", value: e }, h.errToObj(r))); }
    endsWith(e, r) { return this._addCheck(o({ kind: "endsWith", value: e }, h.errToObj(r))); }
    min(e, r) { return this._addCheck(o({ kind: "min", value: e }, h.errToObj(r))); }
    max(e, r) { return this._addCheck(o({ kind: "max", value: e }, h.errToObj(r))); }
    length(e, r) { return this._addCheck(o({ kind: "length", value: e }, h.errToObj(r))); }
    nonempty(e) { return this.min(1, h.errToObj(e)); }
    trim() { return new t(_(o({}, this._def), { checks: [...this._def.checks, { kind: "trim" }] })); }
    toLowerCase() { return new t(_(o({}, this._def), { checks: [...this._def.checks, { kind: "toLowerCase" }] })); }
    toUpperCase() { return new t(_(o({}, this._def), { checks: [...this._def.checks, { kind: "toUpperCase" }] })); }
    get isDatetime() { return !!this._def.checks.find(e => e.kind === "datetime"); }
    get isDate() { return !!this._def.checks.find(e => e.kind === "date"); }
    get isTime() { return !!this._def.checks.find(e => e.kind === "time"); }
    get isDuration() { return !!this._def.checks.find(e => e.kind === "duration"); }
    get isEmail() { return !!this._def.checks.find(e => e.kind === "email"); }
    get isURL() { return !!this._def.checks.find(e => e.kind === "url"); }
    get isEmoji() { return !!this._def.checks.find(e => e.kind === "emoji"); }
    get isUUID() { return !!this._def.checks.find(e => e.kind === "uuid"); }
    get isNANOID() { return !!this._def.checks.find(e => e.kind === "nanoid"); }
    get isCUID() { return !!this._def.checks.find(e => e.kind === "cuid"); }
    get isCUID2() { return !!this._def.checks.find(e => e.kind === "cuid2"); }
    get isULID() { return !!this._def.checks.find(e => e.kind === "ulid"); }
    get isIP() { return !!this._def.checks.find(e => e.kind === "ip"); }
    get isCIDR() { return !!this._def.checks.find(e => e.kind === "cidr"); }
    get isBase64() { return !!this._def.checks.find(e => e.kind === "base64"); }
    get isBase64url() { return !!this._def.checks.find(e => e.kind === "base64url"); }
    get minLength() { let e = null; for (let r of this._def.checks)
        r.kind === "min" && (e === null || r.value > e) && (e = r.value); return e; }
    get maxLength() { let e = null; for (let r of this._def.checks)
        r.kind === "max" && (e === null || r.value < e) && (e = r.value); return e; }
} return t.create = n => new t(o({ checks: [], typeName: g.ZodString, coerce: n?.coerce ?? !1 }, v(n))), t; })();
function dt(t, n) { let e = (t.toString().split(".")[1] || "").length, r = (n.toString().split(".")[1] || "").length, s = e > r ? e : r, a = Number.parseInt(t.toFixed(s).replace(".", "")), i = Number.parseInt(n.toFixed(s).replace(".", "")); return a % i / 10 ** s; }
var ie = (() => { class t extends x {
    constructor() { super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf; }
    _parse(e) { if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
        let i = this._getOrReturnCtx(e);
        return l(i, { code: u.invalid_type, expected: f.number, received: i.parsedType }), y;
    } let s, a = new w; for (let i of this._def.checks)
        i.kind === "int" ? b.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), l(s, { code: u.invalid_type, expected: "integer", received: "float", message: i.message }), a.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (s = this._getOrReturnCtx(e, s), l(s, { code: u.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, exact: !1, message: i.message }), a.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (s = this._getOrReturnCtx(e, s), l(s, { code: u.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, exact: !1, message: i.message }), a.dirty()) : i.kind === "multipleOf" ? dt(e.data, i.value) !== 0 && (s = this._getOrReturnCtx(e, s), l(s, { code: u.not_multiple_of, multipleOf: i.value, message: i.message }), a.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), l(s, { code: u.not_finite, message: i.message }), a.dirty()) : b.assertNever(i); return { status: a.value, value: e.data }; }
    gte(e, r) { return this.setLimit("min", e, !0, h.toString(r)); }
    gt(e, r) { return this.setLimit("min", e, !1, h.toString(r)); }
    lte(e, r) { return this.setLimit("max", e, !0, h.toString(r)); }
    lt(e, r) { return this.setLimit("max", e, !1, h.toString(r)); }
    setLimit(e, r, s, a) { return new t(_(o({}, this._def), { checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: h.toString(a) }] })); }
    _addCheck(e) { return new t(_(o({}, this._def), { checks: [...this._def.checks, e] })); }
    int(e) { return this._addCheck({ kind: "int", message: h.toString(e) }); }
    positive(e) { return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: h.toString(e) }); }
    negative(e) { return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: h.toString(e) }); }
    nonpositive(e) { return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: h.toString(e) }); }
    nonnegative(e) { return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: h.toString(e) }); }
    multipleOf(e, r) { return this._addCheck({ kind: "multipleOf", value: e, message: h.toString(r) }); }
    finite(e) { return this._addCheck({ kind: "finite", message: h.toString(e) }); }
    safe(e) { return this._addCheck({ kind: "min", inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: h.toString(e) })._addCheck({ kind: "max", inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: h.toString(e) }); }
    get minValue() { let e = null; for (let r of this._def.checks)
        r.kind === "min" && (e === null || r.value > e) && (e = r.value); return e; }
    get maxValue() { let e = null; for (let r of this._def.checks)
        r.kind === "max" && (e === null || r.value < e) && (e = r.value); return e; }
    get isInt() { return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && b.isInteger(e.value)); }
    get isFinite() { let e = null, r = null; for (let s of this._def.checks) {
        if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
            return !0;
        s.kind === "min" ? (r === null || s.value > r) && (r = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    } return Number.isFinite(r) && Number.isFinite(e); }
} return t.create = n => new t(o({ checks: [], typeName: g.ZodNumber, coerce: n?.coerce || !1 }, v(n))), t; })(), oe = (() => { class t extends x {
    constructor() { super(...arguments), this.min = this.gte, this.max = this.lte; }
    _parse(e) { if (this._def.coerce)
        try {
            e.data = BigInt(e.data);
        }
        catch {
            return this._getInvalidInput(e);
        } if (this._getType(e) !== f.bigint)
        return this._getInvalidInput(e); let s, a = new w; for (let i of this._def.checks)
        i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (s = this._getOrReturnCtx(e, s), l(s, { code: u.too_small, type: "bigint", minimum: i.value, inclusive: i.inclusive, message: i.message }), a.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (s = this._getOrReturnCtx(e, s), l(s, { code: u.too_big, type: "bigint", maximum: i.value, inclusive: i.inclusive, message: i.message }), a.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), l(s, { code: u.not_multiple_of, multipleOf: i.value, message: i.message }), a.dirty()) : b.assertNever(i); return { status: a.value, value: e.data }; }
    _getInvalidInput(e) { let r = this._getOrReturnCtx(e); return l(r, { code: u.invalid_type, expected: f.bigint, received: r.parsedType }), y; }
    gte(e, r) { return this.setLimit("min", e, !0, h.toString(r)); }
    gt(e, r) { return this.setLimit("min", e, !1, h.toString(r)); }
    lte(e, r) { return this.setLimit("max", e, !0, h.toString(r)); }
    lt(e, r) { return this.setLimit("max", e, !1, h.toString(r)); }
    setLimit(e, r, s, a) { return new t(_(o({}, this._def), { checks: [...this._def.checks, { kind: e, value: r, inclusive: s, message: h.toString(a) }] })); }
    _addCheck(e) { return new t(_(o({}, this._def), { checks: [...this._def.checks, e] })); }
    positive(e) { return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: h.toString(e) }); }
    negative(e) { return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: h.toString(e) }); }
    nonpositive(e) { return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: h.toString(e) }); }
    nonnegative(e) { return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: h.toString(e) }); }
    multipleOf(e, r) { return this._addCheck({ kind: "multipleOf", value: e, message: h.toString(r) }); }
    get minValue() { let e = null; for (let r of this._def.checks)
        r.kind === "min" && (e === null || r.value > e) && (e = r.value); return e; }
    get maxValue() { let e = null; for (let r of this._def.checks)
        r.kind === "max" && (e === null || r.value < e) && (e = r.value); return e; }
} return t.create = n => new t(o({ checks: [], typeName: g.ZodBigInt, coerce: n?.coerce ?? !1 }, v(n))), t; })(), ce = (() => { class t extends x {
    _parse(e) { if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
        let s = this._getOrReturnCtx(e);
        return l(s, { code: u.invalid_type, expected: f.boolean, received: s.parsedType }), y;
    } return T(e.data); }
} return t.create = n => new t(o({ typeName: g.ZodBoolean, coerce: n?.coerce || !1 }, v(n))), t; })(), de = (() => { class t extends x {
    _parse(e) { if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
        let i = this._getOrReturnCtx(e);
        return l(i, { code: u.invalid_type, expected: f.date, received: i.parsedType }), y;
    } if (Number.isNaN(e.data.getTime())) {
        let i = this._getOrReturnCtx(e);
        return l(i, { code: u.invalid_date }), y;
    } let s = new w, a; for (let i of this._def.checks)
        i.kind === "min" ? e.data.getTime() < i.value && (a = this._getOrReturnCtx(e, a), l(a, { code: u.too_small, message: i.message, inclusive: !0, exact: !1, minimum: i.value, type: "date" }), s.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (a = this._getOrReturnCtx(e, a), l(a, { code: u.too_big, message: i.message, inclusive: !0, exact: !1, maximum: i.value, type: "date" }), s.dirty()) : b.assertNever(i); return { status: s.value, value: new Date(e.data.getTime()) }; }
    _addCheck(e) { return new t(_(o({}, this._def), { checks: [...this._def.checks, e] })); }
    min(e, r) { return this._addCheck({ kind: "min", value: e.getTime(), message: h.toString(r) }); }
    max(e, r) { return this._addCheck({ kind: "max", value: e.getTime(), message: h.toString(r) }); }
    get minDate() { let e = null; for (let r of this._def.checks)
        r.kind === "min" && (e === null || r.value > e) && (e = r.value); return e != null ? new Date(e) : null; }
    get maxDate() { let e = null; for (let r of this._def.checks)
        r.kind === "max" && (e === null || r.value < e) && (e = r.value); return e != null ? new Date(e) : null; }
} return t.create = n => new t(o({ checks: [], coerce: n?.coerce || !1, typeName: g.ZodDate }, v(n))), t; })(), Ne = (() => { class t extends x {
    _parse(e) { if (this._getType(e) !== f.symbol) {
        let s = this._getOrReturnCtx(e);
        return l(s, { code: u.invalid_type, expected: f.symbol, received: s.parsedType }), y;
    } return T(e.data); }
} return t.create = n => new t(o({ typeName: g.ZodSymbol }, v(n))), t; })(), ue = (() => { class t extends x {
    _parse(e) { if (this._getType(e) !== f.undefined) {
        let s = this._getOrReturnCtx(e);
        return l(s, { code: u.invalid_type, expected: f.undefined, received: s.parsedType }), y;
    } return T(e.data); }
} return t.create = n => new t(o({ typeName: g.ZodUndefined }, v(n))), t; })(), le = (() => { class t extends x {
    _parse(e) { if (this._getType(e) !== f.null) {
        let s = this._getOrReturnCtx(e);
        return l(s, { code: u.invalid_type, expected: f.null, received: s.parsedType }), y;
    } return T(e.data); }
} return t.create = n => new t(o({ typeName: g.ZodNull }, v(n))), t; })(), Q = (() => { class t extends x {
    constructor() { super(...arguments), this._any = !0; }
    _parse(e) { return T(e.data); }
} return t.create = n => new t(o({ typeName: g.ZodAny }, v(n))), t; })(), W = (() => { class t extends x {
    constructor() { super(...arguments), this._unknown = !0; }
    _parse(e) { return T(e.data); }
} return t.create = n => new t(o({ typeName: g.ZodUnknown }, v(n))), t; })(), j = (() => { class t extends x {
    _parse(e) { let r = this._getOrReturnCtx(e); return l(r, { code: u.invalid_type, expected: f.never, received: r.parsedType }), y; }
} return t.create = n => new t(o({ typeName: g.ZodNever }, v(n))), t; })(), Ae = (() => { class t extends x {
    _parse(e) { if (this._getType(e) !== f.undefined) {
        let s = this._getOrReturnCtx(e);
        return l(s, { code: u.invalid_type, expected: f.void, received: s.parsedType }), y;
    } return T(e.data); }
} return t.create = n => new t(o({ typeName: g.ZodVoid }, v(n))), t; })(), q = (() => { class t extends x {
    _parse(e) { let { ctx: r, status: s } = this._processInputParams(e), a = this._def; if (r.parsedType !== f.array)
        return l(r, { code: u.invalid_type, expected: f.array, received: r.parsedType }), y; if (a.exactLength !== null) {
        let c = r.data.length > a.exactLength.value, d = r.data.length < a.exactLength.value;
        (c || d) && (l(r, { code: c ? u.too_big : u.too_small, minimum: d ? a.exactLength.value : void 0, maximum: c ? a.exactLength.value : void 0, type: "array", inclusive: !0, exact: !0, message: a.exactLength.message }), s.dirty());
    } if (a.minLength !== null && r.data.length < a.minLength.value && (l(r, { code: u.too_small, minimum: a.minLength.value, type: "array", inclusive: !0, exact: !1, message: a.minLength.message }), s.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (l(r, { code: u.too_big, maximum: a.maxLength.value, type: "array", inclusive: !0, exact: !1, message: a.maxLength.message }), s.dirty()), r.common.async)
        return Promise.all([...r.data].map((c, d) => a.type._parseAsync(new Z(r, c, r.path, d)))).then(c => w.mergeArray(s, c)); let i = [...r.data].map((c, d) => a.type._parseSync(new Z(r, c, r.path, d))); return w.mergeArray(s, i); }
    get element() { return this._def.type; }
    min(e, r) { return new t(_(o({}, this._def), { minLength: { value: e, message: h.toString(r) } })); }
    max(e, r) { return new t(_(o({}, this._def), { maxLength: { value: e, message: h.toString(r) } })); }
    length(e, r) { return new t(_(o({}, this._def), { exactLength: { value: e, message: h.toString(r) } })); }
    nonempty(e) { return this.min(1, e); }
} return t.create = (n, e) => new t(o({ type: n, minLength: null, maxLength: null, exactLength: null, typeName: g.ZodArray }, v(e))), t; })();
function P(t) { if (t instanceof z) {
    let n = {};
    for (let e in t.shape) {
        let r = t.shape[e];
        n[e] = E.create(P(r));
    }
    return new z(_(o({}, t._def), { shape: () => n }));
}
else
    return t instanceof q ? new q(_(o({}, t._def), { type: P(t.element) })) : t instanceof E ? E.create(P(t.unwrap())) : t instanceof U ? U.create(P(t.unwrap())) : t instanceof D ? D.create(t.items.map(n => P(n))) : t; }
var z = (() => { class t extends x {
    constructor() { super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend; }
    _getCached() { if (this._cached !== null)
        return this._cached; let e = this._def.shape(), r = b.objectKeys(e); return this._cached = { shape: e, keys: r }, this._cached; }
    _parse(e) { if (this._getType(e) !== f.object) {
        let m = this._getOrReturnCtx(e);
        return l(m, { code: u.invalid_type, expected: f.object, received: m.parsedType }), y;
    } let { status: s, ctx: a } = this._processInputParams(e), { shape: i, keys: c } = this._getCached(), d = []; if (!(this._def.catchall instanceof j && this._def.unknownKeys === "strip"))
        for (let m in a.data)
            c.includes(m) || d.push(m); let p = []; for (let m of c) {
        let k = i[m], $ = a.data[m];
        p.push({ key: { status: "valid", value: m }, value: k._parse(new Z(a, $, a.path, m)), alwaysSet: m in a.data });
    } if (this._def.catchall instanceof j) {
        let m = this._def.unknownKeys;
        if (m === "passthrough")
            for (let k of d)
                p.push({ key: { status: "valid", value: k }, value: { status: "valid", value: a.data[k] } });
        else if (m === "strict")
            d.length > 0 && (l(a, { code: u.unrecognized_keys, keys: d }), s.dirty());
        else if (m !== "strip")
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    }
    else {
        let m = this._def.catchall;
        for (let k of d) {
            let $ = a.data[k];
            p.push({ key: { status: "valid", value: k }, value: m._parse(new Z(a, $, a.path, k)), alwaysSet: k in a.data });
        }
    } return a.common.async ? Promise.resolve().then(() => C(this, null, function* () { let m = []; for (let k of p) {
        let $ = yield k.key, B = yield k.value;
        m.push({ key: $, value: B, alwaysSet: k.alwaysSet });
    } return m; })).then(m => w.mergeObjectSync(s, m)) : w.mergeObjectSync(s, p); }
    get shape() { return this._def.shape(); }
    strict(e) { return h.errToObj, new t(o(_(o({}, this._def), { unknownKeys: "strict" }), e !== void 0 ? { errorMap: (r, s) => { let a = this._def.errorMap?.(r, s).message ?? s.defaultError; return r.code === "unrecognized_keys" ? { message: h.errToObj(e).message ?? a } : { message: a }; } } : {})); }
    strip() { return new t(_(o({}, this._def), { unknownKeys: "strip" })); }
    passthrough() { return new t(_(o({}, this._def), { unknownKeys: "passthrough" })); }
    extend(e) { return new t(_(o({}, this._def), { shape: () => o(o({}, this._def.shape()), e) })); }
    merge(e) { return new t({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: () => o(o({}, this._def.shape()), e._def.shape()), typeName: g.ZodObject }); }
    setKey(e, r) { return this.augment({ [e]: r }); }
    catchall(e) { return new t(_(o({}, this._def), { catchall: e })); }
    pick(e) { let r = {}; for (let s of b.objectKeys(e))
        e[s] && this.shape[s] && (r[s] = this.shape[s]); return new t(_(o({}, this._def), { shape: () => r })); }
    omit(e) { let r = {}; for (let s of b.objectKeys(this.shape))
        e[s] || (r[s] = this.shape[s]); return new t(_(o({}, this._def), { shape: () => r })); }
    deepPartial() { return P(this); }
    partial(e) { let r = {}; for (let s of b.objectKeys(this.shape)) {
        let a = this.shape[s];
        e && !e[s] ? r[s] = a : r[s] = a.optional();
    } return new t(_(o({}, this._def), { shape: () => r })); }
    required(e) { let r = {}; for (let s of b.objectKeys(this.shape))
        if (e && !e[s])
            r[s] = this.shape[s];
        else {
            let i = this.shape[s];
            for (; i instanceof E;)
                i = i._def.innerType;
            r[s] = i;
        } return new t(_(o({}, this._def), { shape: () => r })); }
    keyof() { return Ee(b.objectKeys(this.shape)); }
} return t.create = (n, e) => new t(o({ shape: () => n, unknownKeys: "strip", catchall: j.create(), typeName: g.ZodObject }, v(e))), t.strictCreate = (n, e) => new t(o({ shape: () => n, unknownKeys: "strict", catchall: j.create(), typeName: g.ZodObject }, v(e))), t.lazycreate = (n, e) => new t(o({ shape: n, unknownKeys: "strip", catchall: j.create(), typeName: g.ZodObject }, v(e))), t; })(), fe = (() => { class t extends x {
    _parse(e) { let { ctx: r } = this._processInputParams(e), s = this._def.options; function a(i) { for (let d of i)
        if (d.result.status === "valid")
            return d.result; for (let d of i)
        if (d.result.status === "dirty")
            return r.common.issues.push(...d.ctx.common.issues), d.result; let c = i.map(d => new N(d.ctx.common.issues)); return l(r, { code: u.invalid_union, unionErrors: c }), y; } if (r.common.async)
        return Promise.all(s.map(i => C(this, null, function* () { let c = _(o({}, r), { common: _(o({}, r.common), { issues: [] }), parent: null }); return { result: yield i._parseAsync({ data: r.data, path: r.path, parent: c }), ctx: c }; }))).then(a); {
        let i, c = [];
        for (let p of s) {
            let m = _(o({}, r), { common: _(o({}, r.common), { issues: [] }), parent: null }), k = p._parseSync({ data: r.data, path: r.path, parent: m });
            if (k.status === "valid")
                return k;
            k.status === "dirty" && !i && (i = { result: k, ctx: m }), m.common.issues.length && c.push(m.common.issues);
        }
        if (i)
            return r.common.issues.push(...i.ctx.common.issues), i.result;
        let d = c.map(p => new N(p));
        return l(r, { code: u.invalid_union, unionErrors: d }), y;
    } }
    get options() { return this._def.options; }
} return t.create = (n, e) => new t(o({ options: n, typeName: g.ZodUnion }, v(e))), t; })(), O = t => t instanceof pe ? O(t.schema) : t instanceof L ? O(t.innerType()) : t instanceof me ? [t.value] : t instanceof re ? t.options : t instanceof ye ? b.objectValues(t.enum) : t instanceof _e ? O(t._def.innerType) : t instanceof ue ? [void 0] : t instanceof le ? [null] : t instanceof E ? [void 0, ...O(t.unwrap())] : t instanceof U ? [null, ...O(t.unwrap())] : t instanceof J || t instanceof ve ? O(t.unwrap()) : t instanceof ge ? O(t._def.innerType) : [], X = class t extends x {
    _parse(n) { let { ctx: e } = this._processInputParams(n); if (e.parsedType !== f.object)
        return l(e, { code: u.invalid_type, expected: f.object, received: e.parsedType }), y; let r = this.discriminator, s = e.data[r], a = this.optionsMap.get(s); return a ? e.common.async ? a._parseAsync({ data: e.data, path: e.path, parent: e }) : a._parseSync({ data: e.data, path: e.path, parent: e }) : (l(e, { code: u.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [r] }), y); }
    get discriminator() { return this._def.discriminator; }
    get options() { return this._def.options; }
    get optionsMap() { return this._def.optionsMap; }
    static create(n, e, r) { let s = new Map; for (let a of e) {
        let i = O(a.shape[n]);
        if (!i.length)
            throw new Error(`A discriminator value for key \`${n}\` could not be extracted from all schema options`);
        for (let c of i) {
            if (s.has(c))
                throw new Error(`Discriminator property ${String(n)} has duplicate value ${String(c)}`);
            s.set(c, a);
        }
    } return new t(o({ typeName: g.ZodDiscriminatedUnion, discriminator: n, options: e, optionsMap: s }, v(r))); }
};
function ae(t, n) { let e = S(t), r = S(n); if (t === n)
    return { valid: !0, data: t }; if (e === f.object && r === f.object) {
    let s = b.objectKeys(n), a = b.objectKeys(t).filter(c => s.indexOf(c) !== -1), i = o(o({}, t), n);
    for (let c of a) {
        let d = ae(t[c], n[c]);
        if (!d.valid)
            return { valid: !1 };
        i[c] = d.data;
    }
    return { valid: !0, data: i };
}
else if (e === f.array && r === f.array) {
    if (t.length !== n.length)
        return { valid: !1 };
    let s = [];
    for (let a = 0; a < t.length; a++) {
        let i = t[a], c = n[a], d = ae(i, c);
        if (!d.valid)
            return { valid: !1 };
        s.push(d.data);
    }
    return { valid: !0, data: s };
}
else
    return e === f.date && r === f.date && +t == +n ? { valid: !0, data: t } : { valid: !1 }; }
var he = (() => { class t extends x {
    _parse(e) { let { status: r, ctx: s } = this._processInputParams(e), a = (i, c) => { if (H(i) || H(c))
        return y; let d = ae(i.value, c.value); return d.valid ? ((G(i) || G(c)) && r.dirty(), { status: r.value, value: d.data }) : (l(s, { code: u.invalid_intersection_types }), y); }; return s.common.async ? Promise.all([this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }), this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })]).then(([i, c]) => a(i, c)) : a(this._def.left._parseSync({ data: s.data, path: s.path, parent: s }), this._def.right._parseSync({ data: s.data, path: s.path, parent: s })); }
} return t.create = (n, e, r) => new t(o({ left: n, right: e, typeName: g.ZodIntersection }, v(r))), t; })(), D = (() => { class t extends x {
    _parse(e) { let { status: r, ctx: s } = this._processInputParams(e); if (s.parsedType !== f.array)
        return l(s, { code: u.invalid_type, expected: f.array, received: s.parsedType }), y; if (s.data.length < this._def.items.length)
        return l(s, { code: u.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), y; !this._def.rest && s.data.length > this._def.items.length && (l(s, { code: u.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }), r.dirty()); let i = [...s.data].map((c, d) => { let p = this._def.items[d] || this._def.rest; return p ? p._parse(new Z(s, c, s.path, d)) : null; }).filter(c => !!c); return s.common.async ? Promise.all(i).then(c => w.mergeArray(r, c)) : w.mergeArray(r, i); }
    get items() { return this._def.items; }
    rest(e) { return new t(_(o({}, this._def), { rest: e })); }
} return t.create = (n, e) => { if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])"); return new t(o({ items: n, typeName: g.ZodTuple, rest: null }, v(e))); }, t; })(), K = class t extends x {
    get keySchema() { return this._def.keyType; }
    get valueSchema() { return this._def.valueType; }
    _parse(n) { let { status: e, ctx: r } = this._processInputParams(n); if (r.parsedType !== f.object)
        return l(r, { code: u.invalid_type, expected: f.object, received: r.parsedType }), y; let s = [], a = this._def.keyType, i = this._def.valueType; for (let c in r.data)
        s.push({ key: a._parse(new Z(r, c, r.path, c)), value: i._parse(new Z(r, r.data[c], r.path, c)), alwaysSet: c in r.data }); return r.common.async ? w.mergeObjectAsync(e, s) : w.mergeObjectSync(e, s); }
    get element() { return this._def.valueType; }
    static create(n, e, r) { return e instanceof x ? new t(o({ keyType: n, valueType: e, typeName: g.ZodRecord }, v(r))) : new t(o({ keyType: te.create(), valueType: n, typeName: g.ZodRecord }, v(e))); }
}, Oe = (() => { class t extends x {
    get keySchema() { return this._def.keyType; }
    get valueSchema() { return this._def.valueType; }
    _parse(e) { let { status: r, ctx: s } = this._processInputParams(e); if (s.parsedType !== f.map)
        return l(s, { code: u.invalid_type, expected: f.map, received: s.parsedType }), y; let a = this._def.keyType, i = this._def.valueType, c = [...s.data.entries()].map(([d, p], m) => ({ key: a._parse(new Z(s, d, s.path, [m, "key"])), value: i._parse(new Z(s, p, s.path, [m, "value"])) })); if (s.common.async) {
        let d = new Map;
        return Promise.resolve().then(() => C(this, null, function* () { for (let p of c) {
            let m = yield p.key, k = yield p.value;
            if (m.status === "aborted" || k.status === "aborted")
                return y;
            (m.status === "dirty" || k.status === "dirty") && r.dirty(), d.set(m.value, k.value);
        } return { status: r.value, value: d }; }));
    }
    else {
        let d = new Map;
        for (let p of c) {
            let m = p.key, k = p.value;
            if (m.status === "aborted" || k.status === "aborted")
                return y;
            (m.status === "dirty" || k.status === "dirty") && r.dirty(), d.set(m.value, k.value);
        }
        return { status: r.value, value: d };
    } }
} return t.create = (n, e, r) => new t(o({ valueType: e, keyType: n, typeName: g.ZodMap }, v(r))), t; })(), Re = (() => { class t extends x {
    _parse(e) { let { status: r, ctx: s } = this._processInputParams(e); if (s.parsedType !== f.set)
        return l(s, { code: u.invalid_type, expected: f.set, received: s.parsedType }), y; let a = this._def; a.minSize !== null && s.data.size < a.minSize.value && (l(s, { code: u.too_small, minimum: a.minSize.value, type: "set", inclusive: !0, exact: !1, message: a.minSize.message }), r.dirty()), a.maxSize !== null && s.data.size > a.maxSize.value && (l(s, { code: u.too_big, maximum: a.maxSize.value, type: "set", inclusive: !0, exact: !1, message: a.maxSize.message }), r.dirty()); let i = this._def.valueType; function c(p) { let m = new Set; for (let k of p) {
        if (k.status === "aborted")
            return y;
        k.status === "dirty" && r.dirty(), m.add(k.value);
    } return { status: r.value, value: m }; } let d = [...s.data.values()].map((p, m) => i._parse(new Z(s, p, s.path, m))); return s.common.async ? Promise.all(d).then(p => c(p)) : c(d); }
    min(e, r) { return new t(_(o({}, this._def), { minSize: { value: e, message: h.toString(r) } })); }
    max(e, r) { return new t(_(o({}, this._def), { maxSize: { value: e, message: h.toString(r) } })); }
    size(e, r) { return this.min(e, r).max(e, r); }
    nonempty(e) { return this.min(1, e); }
} return t.create = (n, e) => new t(o({ valueType: n, minSize: null, maxSize: null, typeName: g.ZodSet }, v(e))), t; })(), ee = class t extends x {
    constructor() { super(...arguments), this.validate = this.implement; }
    _parse(n) { let { ctx: e } = this._processInputParams(n); if (e.parsedType !== f.function)
        return l(e, { code: u.invalid_type, expected: f.function, received: e.parsedType }), y; function r(c, d) { return F({ data: c, path: e.path, errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, M(), A].filter(p => !!p), issueData: { code: u.invalid_arguments, argumentsError: d } }); } function s(c, d) { return F({ data: c, path: e.path, errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, M(), A].filter(p => !!p), issueData: { code: u.invalid_return_type, returnTypeError: d } }); } let a = { errorMap: e.common.contextualErrorMap }, i = e.data; if (this._def.returns instanceof se) {
        let c = this;
        return T(function (...d) { return C(this, null, function* () { let p = new N([]), m = yield c._def.args.parseAsync(d, a).catch(B => { throw p.addIssue(r(d, B)), p; }), k = yield Reflect.apply(i, this, m); return yield c._def.returns._def.type.parseAsync(k, a).catch(B => { throw p.addIssue(s(k, B)), p; }); }); });
    }
    else {
        let c = this;
        return T(function (...d) { let p = c._def.args.safeParse(d, a); if (!p.success)
            throw new N([r(d, p.error)]); let m = Reflect.apply(i, this, p.data), k = c._def.returns.safeParse(m, a); if (!k.success)
            throw new N([s(m, k.error)]); return k.data; });
    } }
    parameters() { return this._def.args; }
    returnType() { return this._def.returns; }
    args(...n) { return new t(_(o({}, this._def), { args: D.create(n).rest(W.create()) })); }
    returns(n) { return new t(_(o({}, this._def), { returns: n })); }
    implement(n) { return this.parse(n); }
    strictImplement(n) { return this.parse(n); }
    static create(n, e, r) { return new t(o({ args: n || D.create([]).rest(W.create()), returns: e || W.create(), typeName: g.ZodFunction }, v(r))); }
}, pe = (() => { class t extends x {
    get schema() { return this._def.getter(); }
    _parse(e) { let { ctx: r } = this._processInputParams(e); return this._def.getter()._parse({ data: r.data, path: r.path, parent: r }); }
} return t.create = (n, e) => new t(o({ getter: n, typeName: g.ZodLazy }, v(e))), t; })(), me = (() => { class t extends x {
    _parse(e) { if (e.data !== this._def.value) {
        let r = this._getOrReturnCtx(e);
        return l(r, { received: r.data, code: u.invalid_literal, expected: this._def.value }), y;
    } return { status: "valid", value: e.data }; }
    get value() { return this._def.value; }
} return t.create = (n, e) => new t(o({ value: n, typeName: g.ZodLiteral }, v(e))), t; })();
function Ee(t, n) { return new re(o({ values: t, typeName: g.ZodEnum }, v(n))); }
var re = (() => { class t extends x {
    _parse(e) { if (typeof e.data != "string") {
        let r = this._getOrReturnCtx(e), s = this._def.values;
        return l(r, { expected: b.joinValues(s), received: r.parsedType, code: u.invalid_type }), y;
    } if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
        let r = this._getOrReturnCtx(e), s = this._def.values;
        return l(r, { received: r.data, code: u.invalid_enum_value, options: s }), y;
    } return T(e.data); }
    get options() { return this._def.values; }
    get enum() { let e = {}; for (let r of this._def.values)
        e[r] = r; return e; }
    get Values() { let e = {}; for (let r of this._def.values)
        e[r] = r; return e; }
    get Enum() { let e = {}; for (let r of this._def.values)
        e[r] = r; return e; }
    extract(e, r = this._def) { return t.create(e, o(o({}, this._def), r)); }
    exclude(e, r = this._def) { return t.create(this.options.filter(s => !e.includes(s)), o(o({}, this._def), r)); }
} return t.create = Ee, t; })(), ye = (() => { class t extends x {
    _parse(e) { let r = b.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e); if (s.parsedType !== f.string && s.parsedType !== f.number) {
        let a = b.objectValues(r);
        return l(s, { expected: b.joinValues(a), received: s.parsedType, code: u.invalid_type }), y;
    } if (this._cache || (this._cache = new Set(b.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
        let a = b.objectValues(r);
        return l(s, { received: s.data, code: u.invalid_enum_value, options: a }), y;
    } return T(e.data); }
    get enum() { return this._def.values; }
} return t.create = (n, e) => new t(o({ values: n, typeName: g.ZodNativeEnum }, v(e))), t; })(), se = (() => { class t extends x {
    unwrap() { return this._def.type; }
    _parse(e) { let { ctx: r } = this._processInputParams(e); if (r.parsedType !== f.promise && r.common.async === !1)
        return l(r, { code: u.invalid_type, expected: f.promise, received: r.parsedType }), y; let s = r.parsedType === f.promise ? r.data : Promise.resolve(r.data); return T(s.then(a => this._def.type.parseAsync(a, { path: r.path, errorMap: r.common.contextualErrorMap }))); }
} return t.create = (n, e) => new t(o({ type: n, typeName: g.ZodPromise }, v(e))), t; })(), L = (() => { class t extends x {
    innerType() { return this._def.schema; }
    sourceType() { return this._def.schema._def.typeName === g.ZodEffects ? this._def.schema.sourceType() : this._def.schema; }
    _parse(e) { let { status: r, ctx: s } = this._processInputParams(e), a = this._def.effect || null, i = { addIssue: c => { l(s, c), c.fatal ? r.abort() : r.dirty(); }, get path() { return s.path; } }; if (i.addIssue = i.addIssue.bind(i), a.type === "preprocess") {
        let c = a.transform(s.data, i);
        if (s.common.async)
            return Promise.resolve(c).then(d => C(this, null, function* () { if (r.value === "aborted")
                return y; let p = yield this._def.schema._parseAsync({ data: d, path: s.path, parent: s }); return p.status === "aborted" ? y : p.status === "dirty" ? I(p.value) : r.value === "dirty" ? I(p.value) : p; }));
        {
            if (r.value === "aborted")
                return y;
            let d = this._def.schema._parseSync({ data: c, path: s.path, parent: s });
            return d.status === "aborted" ? y : d.status === "dirty" ? I(d.value) : r.value === "dirty" ? I(d.value) : d;
        }
    } if (a.type === "refinement") {
        let c = d => { let p = a.refinement(d, i); if (s.common.async)
            return Promise.resolve(p); if (p instanceof Promise)
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead."); return d; };
        if (s.common.async === !1) {
            let d = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
            return d.status === "aborted" ? y : (d.status === "dirty" && r.dirty(), c(d.value), { status: r.value, value: d.value });
        }
        else
            return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then(d => d.status === "aborted" ? y : (d.status === "dirty" && r.dirty(), c(d.value).then(() => ({ status: r.value, value: d.value }))));
    } if (a.type === "transform")
        if (s.common.async === !1) {
            let c = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
            if (!R(c))
                return y;
            let d = a.transform(c.value, i);
            if (d instanceof Promise)
                throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: r.value, value: d };
        }
        else
            return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then(c => R(c) ? Promise.resolve(a.transform(c.value, i)).then(d => ({ status: r.value, value: d })) : y); b.assertNever(a); }
} return t.create = (n, e, r) => new t(o({ schema: n, typeName: g.ZodEffects, effect: e }, v(r))), t.createWithPreprocess = (n, e, r) => new t(o({ schema: e, effect: { type: "preprocess", transform: n }, typeName: g.ZodEffects }, v(r))), t; })();
var E = (() => { class t extends x {
    _parse(e) { return this._getType(e) === f.undefined ? T(void 0) : this._def.innerType._parse(e); }
    unwrap() { return this._def.innerType; }
} return t.create = (n, e) => new t(o({ innerType: n, typeName: g.ZodOptional }, v(e))), t; })(), U = (() => { class t extends x {
    _parse(e) { return this._getType(e) === f.null ? T(null) : this._def.innerType._parse(e); }
    unwrap() { return this._def.innerType; }
} return t.create = (n, e) => new t(o({ innerType: n, typeName: g.ZodNullable }, v(e))), t; })(), _e = (() => { class t extends x {
    _parse(e) { let { ctx: r } = this._processInputParams(e), s = r.data; return r.parsedType === f.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({ data: s, path: r.path, parent: r }); }
    removeDefault() { return this._def.innerType; }
} return t.create = (n, e) => new t(o({ innerType: n, typeName: g.ZodDefault, defaultValue: typeof e.default == "function" ? e.default : () => e.default }, v(e))), t; })(), ge = (() => { class t extends x {
    _parse(e) { let { ctx: r } = this._processInputParams(e), s = _(o({}, r), { common: _(o({}, r.common), { issues: [] }) }), a = this._def.innerType._parse({ data: s.data, path: s.path, parent: o({}, s) }); return V(a) ? a.then(i => ({ status: "valid", value: i.status === "valid" ? i.value : this._def.catchValue({ get error() { return new N(s.common.issues); }, input: s.data }) })) : { status: "valid", value: a.status === "valid" ? a.value : this._def.catchValue({ get error() { return new N(s.common.issues); }, input: s.data }) }; }
    removeCatch() { return this._def.innerType; }
} return t.create = (n, e) => new t(o({ innerType: n, typeName: g.ZodCatch, catchValue: typeof e.catch == "function" ? e.catch : () => e.catch }, v(e))), t; })(), Ie = (() => { class t extends x {
    _parse(e) { if (this._getType(e) !== f.nan) {
        let s = this._getOrReturnCtx(e);
        return l(s, { code: u.invalid_type, expected: f.nan, received: s.parsedType }), y;
    } return { status: "valid", value: e.data }; }
} return t.create = n => new t(o({ typeName: g.ZodNaN }, v(n))), t; })(), ut = Symbol("zod_brand"), J = class extends x {
    _parse(n) { let { ctx: e } = this._processInputParams(n), r = e.data; return this._def.type._parse({ data: r, path: e.path, parent: e }); }
    unwrap() { return this._def.type; }
}, Y = class t extends x {
    _parse(n) { let { status: e, ctx: r } = this._processInputParams(n); if (r.common.async)
        return C(this, null, function* () { let a = yield this._def.in._parseAsync({ data: r.data, path: r.path, parent: r }); return a.status === "aborted" ? y : a.status === "dirty" ? (e.dirty(), I(a.value)) : this._def.out._parseAsync({ data: a.value, path: r.path, parent: r }); }); {
        let s = this._def.in._parseSync({ data: r.data, path: r.path, parent: r });
        return s.status === "aborted" ? y : s.status === "dirty" ? (e.dirty(), { status: "dirty", value: s.value }) : this._def.out._parseSync({ data: s.value, path: r.path, parent: r });
    } }
    static create(n, e) { return new t({ in: n, out: e, typeName: g.ZodPipeline }); }
}, ve = (() => { class t extends x {
    _parse(e) { let r = this._def.innerType._parse(e), s = a => (R(a) && (a.value = Object.freeze(a.value)), a); return V(r) ? r.then(a => s(a)) : s(r); }
    unwrap() { return this._def.innerType; }
} return t.create = (n, e) => new t(o({ innerType: n, typeName: g.ZodReadonly }, v(e))), t; })();
function Te(t, n) { let e = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t; return typeof e == "string" ? { message: e } : e; }
function je(t, n = {}, e) { return t ? Q.create().superRefine((r, s) => { let a = t(r); if (a instanceof Promise)
    return a.then(i => { if (!i) {
        let c = Te(n, r), d = c.fatal ?? e ?? !0;
        s.addIssue(_(o({ code: "custom" }, c), { fatal: d }));
    } }); if (!a) {
    let i = Te(n, r), c = i.fatal ?? e ?? !0;
    s.addIssue(_(o({ code: "custom" }, i), { fatal: c }));
} }) : Q.create(); }
var lt = { object: z.lazycreate }, g = (function (t) { return t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly", t; })(g || {});
var ft = (t, n = { message: `Input not instance of ${t.name}` }) => je(e => e instanceof t, n), $e = te.create, Me = ie.create, ht = Ie.create, pt = oe.create, Ve = ce.create, mt = de.create, yt = Ne.create, _t = ue.create, gt = le.create, vt = Q.create, xt = W.create, kt = j.create, bt = Ae.create, wt = q.create, Tt = z.create, Zt = z.strictCreate, Ct = fe.create, St = X.create, Nt = he.create, At = D.create, Ot = K.create, Rt = Oe.create, Et = Re.create, It = ee.create, jt = pe.create, $t = me.create, Mt = re.create, Vt = ye.create, Pt = se.create, zt = L.create, Dt = E.create, Lt = U.create, Ut = L.createWithPreprocess, Bt = Y.create, Ft = () => $e().optional(), Wt = () => Me().optional(), qt = () => Ve().optional(), Jt = { string: t => te.create(_(o({}, t), { coerce: !0 })), number: t => ie.create(_(o({}, t), { coerce: !0 })), boolean: t => ce.create(_(o({}, t), { coerce: !0 })), bigint: t => oe.create(_(o({}, t), { coerce: !0 })), date: t => de.create(_(o({}, t), { coerce: !0 })) };
var Yt = y;
var br = xe;
export { ut as BRAND, I as DIRTY, Ue as EMPTY_PATH, y as INVALID, Yt as NEVER, T as OK, w as ParseStatus, x as Schema, Q as ZodAny, q as ZodArray, oe as ZodBigInt, ce as ZodBoolean, J as ZodBranded, ge as ZodCatch, de as ZodDate, _e as ZodDefault, X as ZodDiscriminatedUnion, L as ZodEffects, re as ZodEnum, N as ZodError, g as ZodFirstPartyTypeKind, ee as ZodFunction, he as ZodIntersection, u as ZodIssueCode, pe as ZodLazy, me as ZodLiteral, Oe as ZodMap, Ie as ZodNaN, ye as ZodNativeEnum, j as ZodNever, le as ZodNull, U as ZodNullable, ie as ZodNumber, z as ZodObject, E as ZodOptional, f as ZodParsedType, Y as ZodPipeline, se as ZodPromise, ve as ZodReadonly, K as ZodRecord, x as ZodSchema, Re as ZodSet, te as ZodString, Ne as ZodSymbol, L as ZodTransformer, D as ZodTuple, x as ZodType, ue as ZodUndefined, fe as ZodUnion, W as ZodUnknown, Ae as ZodVoid, l as addIssueToContext, vt as any, wt as array, pt as bigint, Ve as boolean, Jt as coerce, je as custom, mt as date, Se as datetimeRegex, br as default, A as defaultErrorMap, St as discriminatedUnion, zt as effect, Mt as enum, It as function, M as getErrorMap, S as getParsedType, ft as instanceof, Nt as intersection, H as isAborted, V as isAsync, G as isDirty, R as isValid, lt as late, jt as lazy, $t as literal, F as makeIssue, Rt as map, ht as nan, Vt as nativeEnum, kt as never, gt as null, Lt as nullable, Me as number, Tt as object, ke as objectUtil, qt as oboolean, Wt as onumber, Dt as optional, Ft as ostring, Bt as pipeline, Ut as preprocess, Pt as promise, ze as quotelessJson, Ot as record, Et as set, Le as setErrorMap, Zt as strictObject, $e as string, yt as symbol, zt as transformer, At as tuple, _t as undefined, Ct as union, xt as unknown, b as util, bt as void, xe as z };
