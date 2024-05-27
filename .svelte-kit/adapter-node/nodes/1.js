

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Bn08gNlV.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js","_app/immutable/chunks/stores.CKTsA60F.js","_app/immutable/chunks/entry.DrlEW8Lw.js"];
export const stylesheets = [];
export const fonts = [];
