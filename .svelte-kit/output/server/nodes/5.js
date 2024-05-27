import * as server from '../entries/pages/__preview_preview__/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__preview_preview__/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[preview=preview]]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.CReoog6u.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js","_app/immutable/chunks/index.Dz0L3U0W.js","_app/immutable/chunks/Header.svelte_svelte_type_style_lang.lGCJhhmZ.js","_app/immutable/chunks/clsx.Fe7kbsR9.js","_app/immutable/chunks/Bounded.B1uaDdBS.js","_app/immutable/chunks/entry.DrlEW8Lw.js"];
export const stylesheets = ["_app/immutable/assets/index.DQvbHM0D.css","_app/immutable/assets/Header.DHRtl2S6.css"];
export const fonts = ["_app/immutable/assets/oswald-cyrillic-ext-wght-normal.DbOppiSS.woff2","_app/immutable/assets/oswald-cyrillic-wght-normal.CTOgAtCf.woff2","_app/immutable/assets/oswald-vietnamese-wght-normal.Ce-u7gGO.woff2","_app/immutable/assets/oswald-latin-ext-wght-normal.905GevJw.woff2","_app/immutable/assets/oswald-latin-wght-normal.CuJ2OKNG.woff2"];
