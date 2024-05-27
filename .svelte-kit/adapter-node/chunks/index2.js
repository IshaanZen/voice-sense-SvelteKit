import { c as create_ssr_component, b as add_attribute, j as compute_rest_props, d as spread, k as escape_attribute_value, e as escape_object, v as validate_component, h as each, g as escape, m as missing_component, l as null_to_empty } from "./ssr.js";
import { isFilled, asImageWidthSrcSet, asImagePixelDensitySrcSet, asText } from "@prismicio/client";
import { asTree } from "@prismicio/richtext";
import { P as PrismicLink, B as ButtonLinks } from "./Header.svelte_svelte_type_style_lang.js";
import { B as Bounded } from "./Bounded.js";
import clsx from "clsx";
import "devalue";
import "./client.js";
import "postcss";
const PrismicEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return ` ${isFilled.embed(field) ? `<div${add_attribute("data-oembed", field.embed_url, 0)}${add_attribute("data-oembed-type", field.type, 0)}${add_attribute("data-oembed-provider", field.provider_name, 0)}> <!-- HTML_TAG_START -->${field.html}<!-- HTML_TAG_END --></div>` : ``}`;
});
const PrismicImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "field",
    "imgixParams",
    "alt",
    "fallbackAlt",
    "width",
    "height",
    "widths",
    "pixelDensities"
  ]);
  let { field } = $$props;
  let { imgixParams = {} } = $$props;
  let { alt = void 0 } = $$props;
  let { fallbackAlt = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { widths = void 0 } = $$props;
  let { pixelDensities = void 0 } = $$props;
  let src = void 0;
  let srcset = void 0;
  let resolvedWidth = void 0;
  let resolvedHeight = void 0;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.imgixParams === void 0 && $$bindings.imgixParams && imgixParams !== void 0)
    $$bindings.imgixParams(imgixParams);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fallbackAlt === void 0 && $$bindings.fallbackAlt && fallbackAlt !== void 0)
    $$bindings.fallbackAlt(fallbackAlt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  if ($$props.pixelDensities === void 0 && $$bindings.pixelDensities && pixelDensities !== void 0)
    $$bindings.pixelDensities(pixelDensities);
  {
    {
      if (isFilled.imageThumbnail(field)) {
        const castInt = (input) => {
          if (typeof input === "number" || typeof input === "undefined" || input === null) {
            return input;
          } else {
            const parsed = Number.parseInt(input);
            if (Number.isNaN(parsed)) {
              return void 0;
            } else {
              return parsed;
            }
          }
        };
        const ar = field.dimensions.width / field.dimensions.height;
        const castedWidth = castInt(width);
        const castedHeight = castInt(height);
        resolvedWidth = castedWidth ?? field.dimensions.width;
        resolvedHeight = castedHeight ?? field.dimensions.height;
        if (castedWidth != null && castedHeight == null) {
          resolvedHeight = castedWidth / ar;
        } else if (castedWidth == null && castedHeight != null) {
          resolvedWidth = castedHeight * ar;
        }
        if (widths || !pixelDensities) {
          const res = asImageWidthSrcSet(field, {
            ...imgixParams,
            widths: widths === "defaults" ? void 0 : widths
          });
          src = res.src;
          srcset = res.srcset;
        } else if (pixelDensities) {
          const res = asImagePixelDensitySrcSet(field, {
            ...imgixParams,
            pixelDensities: pixelDensities === "defaults" ? void 0 : pixelDensities
          });
          src = res.src;
          srcset = res.srcset;
        }
      }
    }
  }
  return ` ${isFilled.imageThumbnail(field) ? `<img${spread(
    [
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      {
        alt: escape_attribute_value(alt ?? (field.alt || fallbackAlt))
      },
      {
        width: escape_attribute_value(resolvedWidth)
      },
      {
        height: escape_attribute_value(resolvedHeight)
      },
      escape_object($$restProps)
    ],
    {}
  )}>` : ``}`;
});
const DefaultComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  return `${node.type === "heading1" ? `<h1>${slots.default ? slots.default({}) : ``}</h1>` : `${node.type === "heading2" ? `<h2>${slots.default ? slots.default({}) : ``}</h2>` : `${node.type === "heading3" ? `<h3>${slots.default ? slots.default({}) : ``}</h3>` : `${node.type === "heading4" ? `<h4>${slots.default ? slots.default({}) : ``}</h4>` : `${node.type === "heading5" ? `<h5>${slots.default ? slots.default({}) : ``}</h5>` : `${node.type === "heading6" ? `<h6>${slots.default ? slots.default({}) : ``}</h6>` : `${node.type === "paragraph" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${node.type === "preformatted" ? `<pre>${slots.default ? slots.default({}) : ``}</pre>` : `${node.type === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${node.type === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${node.type === "list-item" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "o-list-item" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "group-list-item" ? `<ul>${slots.default ? slots.default({}) : ``}</ul>` : `${node.type === "group-o-list-item" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `${node.type === "image" ? `<p class="block-img">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: node }, {}, {})}</p>` : `${node.type === "embed" ? `${validate_component(PrismicEmbed, "PrismicEmbed").$$render($$result, { field: node.oembed }, {}, {})}` : `${node.type === "hyperlink" ? `${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: node.data }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${node.type === "label" ? `<span${add_attribute("class", node.data.label, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${each(node.text.split("\n"), (line, index) => {
    return `${index > 0 ? `<br>` : ``}${escape(line)}`;
  })}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
const Serialize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components: components2 = {} } = $$props;
  let { children } = $$props;
  const CHILD_TYPE_RENAMES = {
    "list-item": "listItem",
    "o-list-item": "oListItem",
    "group-list-item": "list",
    "group-o-list-item": "oList"
  };
  function getComponent(child) {
    return components2[CHILD_TYPE_RENAMES[child.type] || child.type] || DefaultComponent;
  }
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  return `${each(children, (child) => {
    return `${validate_component(getComponent(child) || missing_component, "svelte:component").$$render($$result, { node: child.node }, {}, {
      default: () => {
        return ` ${child.children.length > 0 ? `${validate_component(Serialize, "svelte:self").$$render($$result, { children: child.children, components: components2 }, {}, {})}` : ``}`;
      }
    })}`;
  })}`;
});
const PrismicRichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let children;
  let { field } = $$props;
  let { components: components2 = {} } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  children = asTree(field).children;
  return ` ${validate_component(Serialize, "Serialize").$$render($$result, { children, components: components2 }, {}, {})}`;
});
const PrismicText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  compute_rest_props($$props, ["field", "separator", "fallback"]);
  let { field } = $$props;
  let { separator = void 0 } = $$props;
  let { fallback = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.separator === void 0 && $$bindings.separator && separator !== void 0)
    $$bindings.separator(separator);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  return ` ${isFilled.richText(field) ? `${escape(asText(field, { separator }))}` : `${fallback !== void 0 ? `${escape(fallback)}` : ``}`}`;
});
const TodoComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  "slice_type" in slice ? slice.slice_type : slice.type;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `${``}`;
});
const SliceZone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slices = [] } = $$props;
  let { components: components2 = {} } = $$props;
  let { context = {} } = $$props;
  let { defaultComponent = void 0 } = $$props;
  if ($$props.slices === void 0 && $$bindings.slices && slices !== void 0)
    $$bindings.slices(slices);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.defaultComponent === void 0 && $$bindings.defaultComponent && defaultComponent !== void 0)
    $$bindings.defaultComponent(defaultComponent);
  return ` ${each(slices, (slice, index) => {
    let type = "slice_type" in slice ? slice.slice_type : slice.type, Component = components2[type] || defaultComponent;
    return `  ${Component ? `${slice.__mapped ? (() => {
      let { __mapped, ...mappedProps } = slice;
      return ` ${validate_component(Component || missing_component, "svelte:component").$$render($$result, Object.assign({}, mappedProps), {}, {})}`;
    })() : `${validate_component(Component || missing_component, "svelte:component").$$render($$result, { slice, slices, context, index }, {}, {})}`}` : `${validate_component(TodoComponent, "TodoComponent").$$render($$result, { slice }, {}, {})}`}`;
  })}`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  return `${node.data.label === "codespan" ? `<code>${slots.default ? slots.default({}) : ``}</code>` : `<span${add_attribute("class", node.data.label, 0)}>${slots.default ? slots.default({}) : ``}</span>`}`;
});
const StarGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const grid = [14, 30];
  return `  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 935 425" class="absolute -left-2 -top-14 -z-10" id="star-grid"${add_attribute("opacity", 1, 0)} style="mask-image: linear-gradient(black);"><g class="star-grid-group">${each(Array(grid[0]), (_, i) => {
    return `${each(Array(grid[1]), (__, j) => {
      return `<path fill="#000" opacity=".2" class="star-grid-item"${add_attribute("d", `M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`, 0)}></path>`;
    })}`;
  })}</g></svg>`;
});
const HighlightedText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<em class="bg-gradient-to-b from-yellow-100 to-yellow-600 bg-clip-text text-transparent">${slots.default ? slots.default({}) : ``}</em>`;
});
const css$1 = {
  code: ".image-glow.svelte-1o3n9sb.svelte-1o3n9sb{position:absolute;height:50%;width:50%;border-radius:9999px;opacity:0;mix-blend-mode:screen;--tw-blur:blur(64px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms\n}.group.svelte-1o3n9sb:hover .image-glow.svelte-1o3n9sb{opacity:0.3\n}",
  map: null
};
const AboutUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  $$result.css.add(css$1);
  return `${validate_component(Bounded, "Bounded").$$render(
    $$result,
    {
      "data-slice-type": slice.slice_type,
      "data-slice-variation": slice.variation
    },
    {},
    {
      default: () => {
        return `<div class="relative text-center mt-10">${validate_component(StarGrid, "StarGrid").$$render($$result, {}, {}, {})} ${slice.primary.heading_aboutpage ? `<h1 class="mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">${validate_component(PrismicRichText, "PrismicRichText").$$render(
          $$result,
          {
            field: slice.primary.heading_aboutpage,
            components: { em: HighlightedText }
          },
          {},
          {}
        )}</h1>` : ``} ${slice.primary.content_aboutpage ? `<p class="mx-auto mt-6 max-w-4xl text-balance text-black md:4xl">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.content_aboutpage }, {}, {})}</p>` : ``} <div class="mt-20 grid gap-20 text-center max-w-5xl">${each(slice.items, (item, index) => {
          return `<div class="relative group grid gap-4 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:gap-8 lg:gap-20 md:grid-cols-2 lg:grid-cols-3  svelte-1o3n9sb"><div class="flex col-span-1 flex-col justify-center gap-10"><h3 class="text-3xl max-w-6xl "><u>${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: item.dev_name }, {}, {})} </u></h3> <div class="max-w-md">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: item.dev_description }, {}, {})} </div></div> <div class="${escape(null_to_empty(clsx("relative lg:col-span-2", index % 2 && "md:-order-1")), true) + " svelte-1o3n9sb"}"><div class="image-glow bg-orange-500 -bottom-8 -left-4 svelte-1o3n9sb"></div> <div class="image-glow bg-violet-800 -top-8 -right-4 svelte-1o3n9sb"></div> ${validate_component(PrismicImage, "PrismicImage").$$render(
            $$result,
            {
              field: item.dev_image,
              class: "z-20 scale-[0.98] rounded-xl transition-transform duration-300 group-hover:scale-100 max-h-[50vh] w-auto"
            },
            {},
            {}
          )}</div> </div>`;
        })}</div></div>`;
      }
    }
  )}`;
});
const Heading2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="text-balance text-center text-5xl font-medium md:text-7xl max-w-4xl">${slots.default ? slots.default({}) : ``}</h2>`;
});
const BentoBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `${validate_component(Bounded, "Bounded").$$render(
    $$result,
    {
      "data-slice-type": slice.slice_type,
      "data-slice-variation": slice.variation
    },
    {},
    {
      default: () => {
        return ` ${validate_component(PrismicRichText, "PrismicRichText").$$render(
          $$result,
          {
            field: slice.primary.heading,
            components: { em: HighlightedText, heading2: Heading2 }
          },
          {},
          {}
        )} <div class="mx-auto mt-6 max-w-md text-balance text-center text-black">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.body }, {}, {})}</div> <div class="mt-16 grid max-w-4xl gap-8 grid-rows-[auto_auto_auto] md:grid-cols-3 md:gap-10 ">${each(slice.items, (item) => {
          return `<div${add_attribute("class", clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gray-950/40 p-4 before:bg-gray-100/10", item.iswide ? "md:col-span-2" : "md:col-span-1"), 0)}><h3 class="text-2xl">${validate_component(PrismicText, "PrismicText").$$render($$result, { field: item.bentotitle }, {}, {})}</h3> <div class="max-w-md text-white text-balance">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: item.bentobody }, {}, {})}</div> ${validate_component(PrismicImage, "PrismicImage").$$render(
            $$result,
            {
              field: item.bentoimage,
              class: "max-h-36 w-auto"
            },
            {},
            {}
          )} </div>`;
        })}</div>`;
      }
    }
  )}`;
});
const Documentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `${validate_component(Bounded, "Bounded").$$render(
    $$result,
    {
      "data-slice-type": slice.slice_type,
      "data-slice-variation": slice.variation
    },
    {},
    {
      default: () => {
        return `<div class="relative text-center mt-10 bg-white">${slice.primary.docs_heading ? `<h1 class="mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.docs_heading }, {}, {})}</h1>` : ``} ${slice.primary.docs_content ? `<p class="mx-auto mt-6 max-w-4xl text-balance text-black md:4xl">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.docs_content }, {}, {})}</p>` : ``} <div class="mt-20 grid gap-20 text-center max-w-5xl">${each(slice.items, (item, index) => {
          return `<div class="relative group justify-end grid gap-6 md:gap-8 bg-amber-50 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 "><div class="flex col-span-1 flex-col justify-center gap-10 bg-red-400"><h3 class="text-3xl max-w-6xl "><u>${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: item.title }, {}, {})} </u></h3> <div class="max-w-md text-justify pl-4">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: item.summary }, {}, {})} </div></div> <div class="${escape(clsx("relative lg:col-span-2", index % 2 && "md:-order-1"), true) + " max-w-96 m-4 border-black border-2 rounded-lg"}">${validate_component(PrismicImage, "PrismicImage").$$render(
            $$result,
            {
              field: item.diagrams,
              class: "z-20 scale-[0.96] rounded-xl "
            },
            {},
            {}
          )}</div> </div>`;
        })}</div></div>`;
      }
    }
  )}`;
});
const FeatureExtraction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let recording;
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  recording = false;
  return `${validate_component(Bounded, "Bounded").$$render(
    $$result,
    {
      "data-slice-type": slice.slice_type,
      "data-slice-variation": slice.variation
    },
    {},
    {
      default: () => {
        return `<div class="mt-6 relative text-center">${validate_component(StarGrid, "StarGrid").$$render($$result, {}, {}, {})} <h3 class="max-w-2xl text-center text-balance text-5xl font-medium md:text-7xl">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.heading }, {}, {})}</h3> <div class="text-balance mx-auto mt-6 max-w-md text-center text-gray-300">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.body }, {}, {})}</div> <div class="mt-20 grid gap-16" data-svelte-h="svelte-1cbuwvk"></div> <div class="glass-container m-6 p-10"><button id="Record" class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-black bg-green-500 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out" ${recording ? "disabled" : ""}>${recording ? `Recording ....` : `Record`}</button> <button id="Stop" class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-white bg-red-600 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out" data-svelte-h="svelte-pnkxaq">Stop</button></div> <form method="post" action="/recorder_endpoint" enctype="multipart/form-data"><input type="file" name="audio-upload" id="audio-upload" class="invisible"> <div class="grid grid-rows-2">${``}</div></form></div>`;
      }
    }
  )}`;
});
const css = {
  code: ":root{--color-bg1:rgb(235, 244, 250);--color-bg2:rgb(252, 238, 223);--color1:18, 113, 255;--color2:221, 74, 255;--color3:100, 220, 255;--color4:200, 50, 50;--color5:180, 180, 50;--color-interactive:140, 100, 255;--circle-size:80%;--blending:hard-light}@keyframes svelte-siv6yi-moveInCircle{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}@keyframes svelte-siv6yi-moveVertical{0%{transform:translateY(-50%)}50%{transform:translateY(50%)}100%{transform:translateY(-50%)}}@keyframes svelte-siv6yi-moveHorizontal{0%{transform:translateX(-50%) translateY(-10%)}50%{transform:translateX(50%) translateY(10%)}100%{transform:translateX(-50%) translateY(-10%)}}.gradient-bg.svelte-siv6yi.svelte-siv6yi{width:100vw;height:100vh;position:relative;overflow:hidden;margin:0;background:linear-gradient(40deg, var(--color-bg1), var(--color-bg2));top:0;left:0}.gradient-bg.svelte-siv6yi svg.svelte-siv6yi{display:none}.gradient-bg.svelte-siv6yi .gradients-container.svelte-siv6yi{filter:url(#goo) blur(40px);width:100%;height:100%}.gradient-bg.svelte-siv6yi .g1.svelte-siv6yi{position:absolute;background:radial-gradient(circle at center, rgba(var(--color1), 0.5) 0, rgba(var(--color1), 0) 30%) no-repeat;mix-blend-mode:var(--blending);width:var(--circle-size);height:var(--circle-size);top:calc(50% - var(--circle-size) / 2);left:calc(50% - var(--circle-size) / 2);transform-origin:center center;animation:svelte-siv6yi-moveVertical 30s ease infinite;opacity:0.8}.gradient-bg.svelte-siv6yi .g2.svelte-siv6yi{position:absolute;background:radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;mix-blend-mode:var(--blending);width:var(--circle-size);height:var(--circle-size);top:calc(50% - var(--circle-size) / 2);left:calc(50% - var(--circle-size) / 2);transform-origin:calc(50% - 400px);animation:svelte-siv6yi-moveInCircle 20s reverse infinite;opacity:0.8}.gradient-bg.svelte-siv6yi .g3.svelte-siv6yi{position:absolute;background:radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;mix-blend-mode:var(--blending);width:var(--circle-size);height:var(--circle-size);top:calc(50% - var(--circle-size) / 2 + 200px);left:calc(50% - var(--circle-size) / 2 - 500px);transform-origin:calc(50% + 400px);animation:svelte-siv6yi-moveInCircle 40s linear infinite;opacity:0.8}.gradient-bg.svelte-siv6yi .g4.svelte-siv6yi{position:absolute;background:radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;mix-blend-mode:var(--blending);width:var(--circle-size);height:var(--circle-size);top:calc(50% - var(--circle-size) / 2);left:calc(50% - var(--circle-size) / 2);transform-origin:calc(50% - 200px);animation:svelte-siv6yi-moveHorizontal 40s ease infinite;opacity:0.7}.gradient-bg.svelte-siv6yi .g5.svelte-siv6yi{position:absolute;background:radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;mix-blend-mode:var(--blending);width:calc(var(--circle-size) * 2);height:calc(var(--circle-size) * 2);top:calc(50% - var(--circle-size));left:calc(50% - var(--circle-size));transform-origin:calc(50% - 800px) calc(50% + 200px);animation:svelte-siv6yi-moveInCircle 20s ease infinite;opacity:0.6}.gradient-bg.svelte-siv6yi .interactive.svelte-siv6yi{position:absolute;background:radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;mix-blend-mode:var(--blending);width:100%;height:100%;top:-50%;left:-50%;opacity:0.7}",
  map: null
};
const Gradient_back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="gradient-bg svelte-siv6yi" data-svelte-h="svelte-1mgzn06"><svg xmlns="http://www.w3.org/2000/svg" class="svelte-siv6yi"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"></feColorMatrix><feBlend in="SourceGraphic" in2="goo"></feBlend></filter></defs></svg> <div class="gradients-container svelte-siv6yi"><div class="g1 svelte-siv6yi"></div> <div class="g2 svelte-siv6yi"></div> <div class="g3 svelte-siv6yi"></div> <div class="g4 svelte-siv6yi"></div> <div class="g5 svelte-siv6yi"></div> <div class="interactive svelte-siv6yi"></div></div> </div>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `${validate_component(Bounded, "Bounded").$$render(
    $$result,
    {
      "data-slice-type": slice.slice_type,
      "data-slice-variation": slice.variation
    },
    {},
    {
      default: () => {
        return `<div class="text-container relative z-[100] mt-6 text-center">${slice.primary.heading ? `<h1 class="Hero__Heading mx-auto max-w-7xl text-balance text-5xl text-white font-medium opacity-0 md:text-6xl">${validate_component(PrismicText, "PrismicText").$$render($$result, { field: slice.primary.heading }, {}, {})}</h1>` : ``} ${slice.primary.body ? `<div class="Hero__body glass-container mx-auto mt-6 max-w-xl opacity-0"> <div class="Hero__Glow Hero__Glow--one absolute left-1/3 top-0 -z-10 h-[70%] w-[70%] bg-violet-700 mix-blend-screen blur-3xl filter md:blur-[120px]"></div> <div class="Hero__Glow Hero__Glow--two absolute left-0 top-1/3 -z-10 h-[70%] w-[70%] bg-orange-700 mix-blend-screen blur-3xl filter md:blur-[120px]"></div> ${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.body }, {}, {})}</div>` : ``} ${slice.primary.button_link ? `${validate_component(ButtonLinks, "ButtonLinks").$$render(
          $$result,
          {
            href: "Feature-Record",
            class: "Hero__Button mb-8  mt-8 items-center p-10 px-11 text-2xl opacity-0",
            field: slice.primary.button_link
          },
          {},
          {
            default: () => {
              return `${escape(slice.primary.button_lable)} <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align f-ui-1 relative top-[0.1em] -mr-4 ml-2 " stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="2em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
            }
          }
        )}` : ``} </div> ${validate_component(Gradient_back, "GradientBack").$$render($$result, {}, {}, {})}`;
      }
    }
  )}`;
});
const Results = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)}>Placeholder component for ${escape(slice.slice_type)} (variation: ${escape(slice.variation)}) Slices</section>`;
});
const RichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `<section class="">${validate_component(PrismicRichText, "PrismicRichText").$$render(
    $$result,
    {
      field: slice.primary.content,
      components: { label: Label }
    },
    {},
    {}
  )}</section>`;
});
const components = {
  about_us: AboutUs,
  bento_box: BentoBox,
  documentation: Documentation,
  feature_extraction: FeatureExtraction,
  hero: Hero,
  results: Results,
  rich_text: RichText
};
export {
  SliceZone as S,
  components as c
};
