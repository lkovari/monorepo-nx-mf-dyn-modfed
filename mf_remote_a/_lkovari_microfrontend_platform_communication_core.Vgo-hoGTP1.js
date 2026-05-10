import { a as r, b as t, c as o, d as a, e as n, f as c, g as l, h as u, i as p, j as m, k as d, l as b, m as w } from "@nf-internal/chunk-USLB4SST";
import "@nf-internal/chunk-33Q3EHCY";
import "@nf-internal/chunk-JKOY2XUY";
var f = class {
    topics = new Map;
    register(e) { this.topics.set(e.messageName, e); }
    assertCanPublish(e) { let i = this.topics.get(e.messageName); if (i) {
        if (i.allowedPublishers && !i.allowedPublishers.includes(e.source))
            throw new o("publisher not allowed for topic", "unauthorized");
        if (i.minMessageVersion !== void 0 && e.messageVersion < i.minMessageVersion)
            throw new o("messageVersion below minimum for topic", "incompatible-version");
        if (i.maxMessageVersion !== void 0 && e.messageVersion > i.maxMessageVersion)
            throw new o("messageVersion above maximum for topic", "incompatible-version");
    } }
    assertCanSubscribe(e, i) { let s = this.topics.get(e); if (s?.allowedSubscribers && !s.allowedSubscribers.includes(i))
        throw new o("subscriber not allowed for topic", "unauthorized"); }
};
export { o as BusPolicyError, a as BusValidationError, n as HostBridgeError, d as MFE_BRIDGE_PROTOCOL_VERSION, u as RequestResponseCoordinator, f as TopicRegistry, m as attachStateSync, l as composePolicies, p as createBus, r as createDedupeGate, w as createHostBridge, t as createMessageQueue, c as defaultSensitivityPolicy, b as isValidMfeBridgeHandle };
