import "../../../../chunks/client.js";
import * as prismic from "@prismicio/client";
import { c as createClient } from "../../../../chunks/prismicio.js";
const redirectToPreviewURL = async (config) => {
  const previewToken = new URL(config.request.url).searchParams.get("token") ?? void 0;
  const documentID = new URL(config.request.url).searchParams.get("documentId") ?? void 0;
  const routePrefix = config.routePrefix ?? "preview";
  const previewURL = await config.client.resolvePreviewURL({
    previewToken,
    documentID,
    defaultURL: config.defaultURL || "/"
  });
  if (previewToken) {
    config.cookies.set(prismic.cookie.preview, previewToken, {
      path: "/",
      httpOnly: false
    });
  }
  return new Response(void 0, {
    status: 307,
    headers: {
      Location: "/" + routePrefix + previewURL
    }
  });
};
async function GET({ fetch, request, cookies }) {
  const client = createClient({ fetch });
  return await redirectToPreviewURL({ client, request, cookies });
}
export {
  GET
};
