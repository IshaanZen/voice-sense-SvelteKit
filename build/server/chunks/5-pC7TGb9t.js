import { asText } from '@prismicio/client';
import { c as createClient } from './prismicio-D9yCbB-I.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const page = await client.getByUID("page", "home");
  return {
    page,
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url
  };
}
function entries() {
  return [{}];
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  entries: entries,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-T_Xo8l1N.js')).default;
const server_id = "src/routes/[[preview=preview]]/+page.server.js";
const imports = ["_app/immutable/nodes/5.CReoog6u.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js","_app/immutable/chunks/index.Dz0L3U0W.js","_app/immutable/chunks/Header.svelte_svelte_type_style_lang.lGCJhhmZ.js","_app/immutable/chunks/clsx.Fe7kbsR9.js","_app/immutable/chunks/Bounded.B1uaDdBS.js","_app/immutable/chunks/entry.DrlEW8Lw.js"];
const stylesheets = ["_app/immutable/assets/index.DQvbHM0D.css","_app/immutable/assets/Header.DHRtl2S6.css"];
const fonts = ["_app/immutable/assets/oswald-cyrillic-ext-wght-normal.DbOppiSS.woff2","_app/immutable/assets/oswald-cyrillic-wght-normal.CTOgAtCf.woff2","_app/immutable/assets/oswald-vietnamese-wght-normal.Ce-u7gGO.woff2","_app/immutable/assets/oswald-latin-ext-wght-normal.905GevJw.woff2","_app/immutable/assets/oswald-latin-wght-normal.CuJ2OKNG.woff2"];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-pC7TGb9t.js.map
