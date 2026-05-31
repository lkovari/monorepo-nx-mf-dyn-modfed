import { b as s, c as r, d as a, e as n, f as o, g as i, h as m, i as c } from "@nf-internal/chunk-NZQG2D5G";
import "@nf-internal/chunk-JKOY2XUY";
import { z as e } from "zod";
var g = a.extend({ kind: e.literal("event"), eventKind: e.string().min(1), payload: e.unknown() }).strict(), t = e.object({ userId: e.string().min(1), displayName: e.string().min(1), avatarUrl: e.string().url().optional(), rolesForUi: e.array(e.string()), tenantId: e.string().optional(), locale: e.string().optional(), featureFlags: e.record(e.boolean()).optional(), sessionVersion: e.string().optional() }).strict(), l = a.extend({ kind: e.literal("user-context"), payload: t }).strict();
export { m as CommandMessageSchema, g as EventMessageSchema, a as MessageBaseSchema, s as MessageKindSchema, c as QueryMessageSchema, r as SensitivitySchema, i as StateMessageSchema, o as StateOperationSchema, l as UserContextMessageSchema, t as UserContextSchema, n as versionedMessageSchema };
