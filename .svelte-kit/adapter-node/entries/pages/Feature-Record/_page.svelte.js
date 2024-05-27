import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "devalue";
import "../../../chunks/client.js";
import { B as Bounded } from "../../../chunks/Bounded.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let recording;
  recording = false;
  return `${$$result.head += `<!-- HEAD_svelte-1fiqkv_START -->${$$result.title = `<title>Feature Extraction</title>`, ""}<!-- HEAD_svelte-1fiqkv_END -->`, ""} ${validate_component(Bounded, "Bounded").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="mt-16 p-10 relative text-center"><h3 class="max-w-6xl text-center text-balance text-5xl font-medium md:text-7xl" data-svelte-h="svelte-ytgpgm">EMOTION DETECTION</h3> <div class="text-balance mx-auto mt-6 max-w-md text-center text-black text-xl" data-svelte-h="svelte-1i03oex"><p>Our Most Advanced Emotion Detection System 
                Predict your emotions in a few simple Steps</p></div> <div class="glass-container bg-gray-200/50 rounded-3xl m-6 p-10"><button id="Record" class="m-4 p-4 px-10 border-2 rounded-full max-w-3xl text-balance text-black bg-green-500 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out" ${recording ? "disabled" : ""}>${recording ? `RECORDING....` : `RECORD`}</button> <button id="Stop" class="m-4 p-4 px-8 border-2 rounded-full max-w-3xl text-balance text-white bg-red-600 font-medium scale-1 hover:scale-[1.15] transition duration-300 ease-in-out" data-svelte-h="svelte-1rd1k4y">STOP</button></div> <form method="post" enctype="multipart/form-data"><input type="file" name="fileToUpload" class="invisible"> <div class="grid grid-rows-2">${``}</div></form></div>`;
    }
  })}`;
});
export {
  Page as default
};
