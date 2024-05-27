import { writeFileSync } from 'fs';
import { f as fail } from './index-DwrKR0Y-.js';

let prerender = false;
const actions = {
  default: async (event) => {
    const formdata = Object.fromEntries(await event.request.formData());
    if (!formdata.fileToUpload.name || formdata.fileToUpload.name === "undefined") {
      return fail(400, {
        error: true,
        message: "Provide a file to upload"
      });
    }
    const { fileToUpload } = formdata;
    writeFileSync(`static/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));
    return {
      success: true
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  prerender: prerender
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C2cBykeQ.js')).default;
const server_id = "src/routes/Feature-Record/+page.server.ts";
const imports = ["_app/immutable/nodes/2.NwjwpJ7F.js","_app/immutable/chunks/scheduler.DsWiACDR.js","_app/immutable/chunks/index.B0pGoJ8j.js","_app/immutable/chunks/entry.DrlEW8Lw.js","_app/immutable/chunks/Bounded.B1uaDdBS.js","_app/immutable/chunks/clsx.Fe7kbsR9.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-BVo1qCjA.js.map
