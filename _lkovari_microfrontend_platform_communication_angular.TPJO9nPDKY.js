import { i as u, m as c } from "@nf-internal/chunk-USLB4SST";
import { a as n } from "@nf-internal/chunk-33Q3EHCY";
import { a as s } from "@nf-internal/chunk-JKOY2XUY";
import { InjectionToken as l, Injectable as B, inject as i, makeEnvironmentProviders as p } from "@angular/core";
import { Observable as f } from "rxjs";
var t = new l("@lkovari/microfrontend-platform-communication/bus");
function y(r) { return p([{ provide: t, useFactory: () => u(r) }]); }
function E() { return i(t); }
var v = new l("@lkovari/microfrontend-platform-communication/host-bridge");
function H(r) { return p([{ provide: v, useFactory: () => { let e = i(t); return c(s(s({ appId: e.appId, bus: e, remotes: r.remotes }, r.stateSync ? { stateSync: r.stateSync } : {}), r.onConflict ? { onConflict: r.onConflict } : {})); } }]); }
var d = class {
    bus = i(t, { optional: !0 });
    get requiredBus() { if (this.bus === null)
        throw new Error("BusService requires BUS_TOKEN. Call provideBus() in your application providers before injecting BusService."); return this.bus; }
    publish(r) { this.requiredBus.publish(r); }
    request(r, e, o) { return this.requiredBus.request(r, e, o); }
    messages$(r, e) { return new f(o => { let m = this.requiredBus.subscribe(r, b => { o.next(b); }, e); return () => { m(); }; }); }
};
d = n([B({ providedIn: "root" })], d);
var a = class {
    bridge = i(v, { optional: !0 });
    get requiredBridge() { if (this.bridge === null)
        throw new Error("HostBridgeService requires HOST_BRIDGE_TOKEN. Call provideHostBridge() in your application providers before injecting HostBridgeService."); return this.bridge; }
    tryPublish(r) { return this.requiredBridge.tryPublish(r); }
    getBus() { return this.requiredBridge.getBus(); }
};
a = n([B({ providedIn: "root" })], a);
export { t as BUS_TOKEN, d as BusService, v as HOST_BRIDGE_TOKEN, a as HostBridgeService, E as injectBus, y as provideBus, H as provideHostBridge };
