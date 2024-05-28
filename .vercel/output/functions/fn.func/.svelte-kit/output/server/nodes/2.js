import * as server from '../entries/pages/Feature-Record/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Feature-Record/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Feature-Record/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BfnF1Tnf.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js","_app/immutable/chunks/entry.DemABWH3.js","_app/immutable/chunks/Bounded.B1uaDdBS.js","_app/immutable/chunks/clsx.Fe7kbsR9.js"];
export const stylesheets = [];
export const fonts = [];
