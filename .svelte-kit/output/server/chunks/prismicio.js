import * as prismic from "@prismicio/client";
import "./client.js";
const enableAutoPreviews = (config) => {
  if (!config.cookies) {
    return;
  }
  const cookie = config.cookies.get(prismic.cookie.preview);
  if (cookie && /\.prismic\.io/.test(cookie)) {
    config.client.queryContentFromRef(cookie);
  }
};
const repositoryName$1 = "voice-sense";
const adapter = "@slicemachine/adapter-sveltekit";
const libraries = [
  "./src/lib/slices"
];
const localSliceSimulatorURL = "http://localhost:5173/slice-simulator";
const apiEndpoint = "";
const sm = {
  repositoryName: repositoryName$1,
  adapter,
  libraries,
  localSliceSimulatorURL,
  apiEndpoint
};
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const repositoryName = define_import_meta_env_default.VITE_PRISMIC_ENVIRONMENT || sm.repositoryName;
const routes = [
  { type: "page", path: "/", uid: "home" },
  { type: "page", path: "/:uid" }
];
const createClient = ({ cookies, ...config } = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config
  });
  enableAutoPreviews({ client, cookies });
  return client;
};
export {
  createClient as c,
  repositoryName as r
};
