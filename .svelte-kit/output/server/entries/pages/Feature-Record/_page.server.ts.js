import { writeFileSync } from "fs";
import { f as fail } from "../../../chunks/index.js";
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
export {
  actions,
  prerender
};
