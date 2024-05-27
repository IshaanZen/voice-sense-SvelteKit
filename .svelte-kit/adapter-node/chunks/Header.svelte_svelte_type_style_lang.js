import { c as create_ssr_component, j as compute_rest_props, d as spread, e as escape_object, k as escape_attribute_value, v as validate_component } from "./ssr.js";
import clsx from "clsx";
import { asLinkAttrs } from "@prismicio/client";
const PrismicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkAttrs;
  let resolvedRel;
  let $$restProps = compute_rest_props($$props, ["field", "document", "rel"]);
  let { field = void 0 } = $$props;
  let { document = void 0 } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.document === void 0 && $$bindings.document && document !== void 0)
    $$bindings.document(document);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  linkAttrs = asLinkAttrs(field ?? document, {
    rel: typeof rel === "function" ? rel : void 0
  });
  resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
  return ` <a${spread(
    [
      escape_object(linkAttrs),
      { rel: escape_attribute_value(resolvedRel) },
      {
        href: escape_attribute_value(linkAttrs.href)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const ButtonLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `  ${validate_component(PrismicLink, "PrismicLink").$$render(
    $$result,
    Object.assign({}, { field: $$restProps.field }, { document: $$restProps.document }, $$restProps, {
      class: clsx("relative group inline-flex items-center h-fit w-fit overflow-hidden rounded-full border border-violet-300 bg-violet-50 px-10 py-2 text-black outline-none hover:text-white hover:bg-violet-600 hover:transition-all hover:animate-pulse duration:600 ", className)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  ButtonLinks as B,
  PrismicLink as P
};
