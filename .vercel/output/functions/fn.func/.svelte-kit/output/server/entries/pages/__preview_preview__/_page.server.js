import { asText } from "@prismicio/client";
import { c as createClient } from "../../../chunks/prismicio.js";
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
export {
  entries,
  load
};
