import { j as a, n as B, o as f } from "@nf-internal/chunk-G2MZDV57";
import { a as n } from "@nf-internal/chunk-NZQG2D5G";
import { a as s } from "@nf-internal/chunk-JKOY2XUY";
import { InjectionToken as p, Injectable as h, inject as i, makeEnvironmentProviders as u, DestroyRef as g } from "@angular/core";
import { Observable as l } from "rxjs";
var o = new p("@lkovari/microfrontend-platform-communication/bus");
function E(e) { return u([{ provide: o, useFactory: () => { let r = a(e); return i(g).onDestroy(() => { r.dispose(); }), r; } }]); }
function R() { return i(o); }
var d = new p("@lkovari/microfrontend-platform-communication/host-bridge");
function S(e) { return u([{ provide: d, useFactory: () => { let r = i(o), t = f(s(s(s({ appId: r.appId, bus: r, remotes: e.remotes }, e.stateSync ? { stateSync: e.stateSync } : {}), e.onConflict ? { onConflict: e.onConflict } : {}), e.accessToken ? { accessToken: e.accessToken } : {})); return i(g).onDestroy(() => { t.dispose(); }), t; } }]); }
function H() { return i(d); }
function I(e) { return u([{ provide: o, useFactory: () => { if (typeof window > "u")
            throw new Error("provideRemotePlatformBus() requires a browser runtime with window.__MFE_BRIDGE__."); let r = window.__MFE_BRIDGE__; if (!B(r))
            throw new Error("provideRemotePlatformBus() requires a valid window.__MFE_BRIDGE__ from the host. Ensure the host called createHostBridge() before loading this remote."); return r.getBus(e?.accessToken); } }]); }
var v = class {
    bus = i(o, { optional: !0 });
    get requiredBus() { if (this.bus === null)
        throw new Error("BusService requires BUS_TOKEN. Call provideBus() in your application providers before injecting BusService."); return this.bus; }
    publish(e) { this.requiredBus.publish(e); }
    sendCommand(e) { return this.requiredBus.sendCommand(e); }
    request(e, r, t) { return t ? this.requiredBus.request(e, r, t) : this.requiredBus.request(e, r); }
    messages$(e, r) { return new l(t => { let c = this.requiredBus.subscribe(e, b => { t.next(b); }, r); return () => { c(); }; }); }
    observeAll$() { return new l(e => { let r = this.requiredBus.observeAll(t => { e.next(t); }); return () => { r(); }; }); }
    registerBeforeDeliver(e) { return this.requiredBus.registerBeforeDeliver(e); }
    dispose() { this.requiredBus.dispose(); }
};
v = n([h({ providedIn: "root" })], v);
var m = class {
    bridge = i(d, { optional: !0 });
    get requiredBridge() { if (this.bridge === null)
        throw new Error("HostBridgeService requires HOST_BRIDGE_TOKEN. Call provideHostBridge() in your application providers before injecting HostBridgeService."); return this.bridge; }
    tryPublish(e, r) { return this.requiredBridge.tryPublish(e, r); }
    getBus(e) { return this.requiredBridge.getBus(e); }
};
m = n([h({ providedIn: "root" })], m);
export { o as BUS_TOKEN, v as BusService, d as HOST_BRIDGE_TOKEN, m as HostBridgeService, R as injectBus, H as injectHostBridge, E as provideBus, S as provideHostBridge, I as provideRemotePlatformBus };
