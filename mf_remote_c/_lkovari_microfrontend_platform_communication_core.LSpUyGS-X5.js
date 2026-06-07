import { a as r, b as s, c as t, d as i, e as a, f as n, g as l, h as c, i as u, j as d, k as m, l as p, m as b, n as f, o as g } from "@nf-internal/chunk-OZ2DEEC6";
import "@nf-internal/chunk-2KNMFBTY";
import "@nf-internal/chunk-JKOY2XUY";
var y = class {
    onPublish(e) { console.info("[mfe-bus] publish", e.messageName, e.messageId); }
    onDeliver(e) { console.info("[mfe-bus] deliver", e.messageName, e.messageId); }
    onError(e, o) { console.error("[mfe-bus] error", o, e); }
    onRequestTimeout(e) { console.warn("[mfe-bus] request timeout", e); }
};
export { t as BusPolicyError, i as BusValidationError, y as ConsoleObservabilityAdapter, a as HostBridgeError, p as MFE_BRIDGE_PROTOCOL_VERSION, u as RequestResponseCoordinator, c as TopicRegistry, m as attachStateSync, l as composePolicies, d as createBus, r as createDedupeGate, g as createHostBridge, s as createMessageQueue, n as defaultSensitivityPolicy, b as generateAccessToken, f as isValidMfeBridgeHandle };
