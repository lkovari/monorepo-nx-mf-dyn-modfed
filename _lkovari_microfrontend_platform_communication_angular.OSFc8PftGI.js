import { i as a, l as f, m as l } from "@nf-internal/chunk-2GVLLAK2";
import { a as n } from "@nf-internal/chunk-REX6ES5Q";
import { a as s } from "@nf-internal/chunk-JKOY2XUY";
import { InjectionToken as g, Injectable as h, inject as i, makeEnvironmentProviders as u, DestroyRef as m } from "@angular/core";
import { Observable as B } from "rxjs";
var o = new g("@lkovari/microfrontend-platform-communication/bus");
function E(e) { return u([{ provide: o, useFactory: () => { let r = a(e); return i(m).onDestroy(() => { r.dispose(); }), r; } }]); }
function R() { return i(o); }
var d = new g("@lkovari/microfrontend-platform-communication/host-bridge");
function S(e) { return u([{ provide: d, useFactory: () => { let r = i(o), t = l(s(s({ appId: r.appId, bus: r, remotes: e.remotes }, e.stateSync ? { stateSync: e.stateSync } : {}), e.onConflict ? { onConflict: e.onConflict } : {})); return i(m).onDestroy(() => { t.dispose(); }), t; } }]); }
function H() { return i(d); }
function I() { return u([{ provide: o, useFactory: () => { if (typeof window > "u")
            throw new Error("provideRemotePlatformBus() requires a browser runtime with window.__MFE_BRIDGE__."); let e = window.__MFE_BRIDGE__; if (!f(e))
            throw new Error("provideRemotePlatformBus() requires a valid window.__MFE_BRIDGE__ from the host. Ensure the host called createHostBridge() before loading this remote."); return e.getBus(); } }]); }
var v = class {
    bus = i(o, { optional: !0 });
    get requiredBus() { if (this.bus === null)
        throw new Error("BusService requires BUS_TOKEN. Call provideBus() in your application providers before injecting BusService."); return this.bus; }
    publish(e) { this.requiredBus.publish(e); }
    request(e, r, t) { return t ? this.requiredBus.request(e, r, t) : this.requiredBus.request(e, r); }
    messages$(e, r) { return new B(t => { let c = this.requiredBus.subscribe(e, b => { t.next(b); }, r); return () => { c(); }; }); }
    observeAll$() { return new B(e => { let r = this.requiredBus.observeAll(t => { e.next(t); }); return () => { r(); }; }); }
    registerBeforeDeliver(e) { return this.requiredBus.registerBeforeDeliver(e); }
    dispose() { this.requiredBus.dispose(); }
};
v = n([h({ providedIn: "root" })], v);
var p = class {
    bridge = i(d, { optional: !0 });
    get requiredBridge() { if (this.bridge === null)
        throw new Error("HostBridgeService requires HOST_BRIDGE_TOKEN. Call provideHostBridge() in your application providers before injecting HostBridgeService."); return this.bridge; }
    tryPublish(e) { return this.requiredBridge.tryPublish(e); }
    getBus() { return this.requiredBridge.getBus(); }
};
p = n([h({ providedIn: "root" })], p);
export { o as BUS_TOKEN, v as BusService, d as HOST_BRIDGE_TOKEN, p as HostBridgeService, R as injectBus, H as injectHostBridge, E as provideBus, S as provideHostBridge, I as provideRemotePlatformBus };
