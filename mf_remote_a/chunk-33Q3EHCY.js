var O = Object.defineProperty, P = Object.getOwnPropertyDescriptor, l = (s, e, v, p) => { for (var r = p > 1 ? void 0 : p ? P(e, v) : e, _ = s.length - 1, f; _ >= 0; _--)
    (f = s[_]) && (r = (p ? f(e, v, r) : f(r)) || r); return p && r && O(e, v, r), r; };
export { l as a };
