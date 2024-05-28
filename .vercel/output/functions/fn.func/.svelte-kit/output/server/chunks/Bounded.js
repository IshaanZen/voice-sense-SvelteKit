import { c as create_ssr_component, j as compute_rest_props, d as spread, e as escape_object, k as escape_attribute_value } from "./ssr.js";
import clsx from "clsx";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Bounded = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "class"]);
  let { tag = "section" } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `  ${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(clsx("px-4 py-10 first:pt-0 md:px-6 md:py-20 lg:py-24", className))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `<div class="mx-auto flex w-full max-w-6xl flex-col items-center">${slots.default ? slots.default({}) : ``}</div>`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
export {
  Bounded as B
};
