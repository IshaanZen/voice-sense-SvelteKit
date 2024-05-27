import { c as create_ssr_component, v as validate_component } from './ssr-DGfTPAIz.js';
import { c as components, S as SliceZone } from './index2-BnwUEJ5A.js';
import '@prismicio/client';
import './Header.svelte_svelte_type_style_lang-Xht2EKzl.js';
import 'clsx';
import './Bounded-DqFwmi-8.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import 'tty';
import 'path';
import 'url';
import 'fs';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(SliceZone, "SliceZone").$$render(
    $$result,
    {
      slices: data.page.data.slices,
      components
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-T_Xo8l1N.js.map
