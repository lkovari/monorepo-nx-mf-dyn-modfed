import { a as i, b as t, c as s, d as a, e as n, f as l, g as c, h as u, i as m, j as p, k as b, l as d, m as f } from "@nf-internal/chunk-2GVLLAK2";
import "@nf-internal/chunk-REX6ES5Q";
import "@nf-internal/chunk-JKOY2XUY";
var g = class {
    topics = new Map;
    register(e) { this.topics.set(e.messageName, e); }
    assertCanPublish(e) { let o = this.topics.get(e.messageName); if (o) {
        if (o.allowedPublishers && !o.allowedPublishers.includes(e.source))
            throw new s("publisher not allowed for topic", "unauthorized");
        if (o.minMessageVersion !== void 0 && e.messageVersion < o.minMessageVersion)
            throw new s("messageVersion below minimum for topic", "incompatible-version");
        if (o.maxMessageVersion !== void 0 && e.messageVersion > o.maxMessageVersion)
            throw new s("messageVersion above maximum for topic", "incompatible-version");
    } }
    assertCanSubscribe(e, o) { let r = this.topics.get(e); if (r?.allowedSubscribers && !r.allowedSubscribers.includes(o))
        throw new s("subscriber not allowed for topic", "unauthorized"); }
}, w = class {
    onPublish(e) { console.info("[mfe-bus] publish", e.messageName, e.messageId); }
    onDeliver(e) { console.info("[mfe-bus] deliver", e.messageName, e.messageId); }
    onError(e, o) { console.error("[mfe-bus] error", o, e); }
    onRequestTimeout(e) { console.warn("[mfe-bus] request timeout", e); }
};
export { s as BusPolicyError, a as BusValidationError, w as ConsoleObservabilityAdapter, n as HostBridgeError, b as MFE_BRIDGE_PROTOCOL_VERSION, u as RequestResponseCoordinator, g as TopicRegistry, p as attachStateSync, c as composePolicies, m as createBus, i as createDedupeGate, f as createHostBridge, t as createMessageQueue, l as defaultSensitivityPolicy, d as isValidMfeBridgeHandle };
