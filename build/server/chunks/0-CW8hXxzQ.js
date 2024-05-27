import { c as createClient } from './prismicio-D9yCbB-I.js';
import '@prismicio/client';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

let prerender = "auto";
async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const settings = await client.getSingle("settings");
  return {
    settings
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Dk95VKEc.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.4wXvjLex.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js","_app/immutable/chunks/Header.svelte_svelte_type_style_lang.lGCJhhmZ.js","_app/immutable/chunks/clsx.Fe7kbsR9.js","_app/immutable/chunks/stores.CKTsA60F.js","_app/immutable/chunks/entry.DrlEW8Lw.js"];
const stylesheets = ["_app/immutable/assets/0.C5PeN6m9.css","_app/immutable/assets/Header.DHRtl2S6.css"];
const fonts = ["_app/immutable/assets/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2","_app/immutable/assets/dm-sans-latin-wght-normal.DeBecvsH.woff2","_app/immutable/assets/montserrat-cyrillic-ext-wght-normal.rV1oiNxr.woff2","_app/immutable/assets/montserrat-cyrillic-wght-normal.CHYi_LmU.woff2","_app/immutable/assets/montserrat-vietnamese-wght-normal.BXWSX9tz.woff2","_app/immutable/assets/montserrat-latin-ext-wght-normal.BIVePy9u.woff2","_app/immutable/assets/montserrat-latin-wght-normal.BDA6280a.woff2","_app/immutable/assets/russo-one-cyrillic-400-normal.BXZIn0h3.woff2","_app/immutable/assets/russo-one-cyrillic-400-normal.rRbrNFRA.woff","_app/immutable/assets/russo-one-latin-ext-400-normal.BLra56t7.woff2","_app/immutable/assets/russo-one-latin-ext-400-normal.Dr-qY1Ia.woff","_app/immutable/assets/russo-one-latin-400-normal.DqvwhL13.woff2","_app/immutable/assets/russo-one-latin-400-normal.CV3riu6B.woff","_app/immutable/assets/oswald-cyrillic-ext-wght-normal.DbOppiSS.woff2","_app/immutable/assets/oswald-cyrillic-wght-normal.CTOgAtCf.woff2","_app/immutable/assets/oswald-vietnamese-wght-normal.Ce-u7gGO.woff2","_app/immutable/assets/oswald-latin-ext-wght-normal.905GevJw.woff2","_app/immutable/assets/oswald-latin-wght-normal.CuJ2OKNG.woff2"];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-CW8hXxzQ.js.map
