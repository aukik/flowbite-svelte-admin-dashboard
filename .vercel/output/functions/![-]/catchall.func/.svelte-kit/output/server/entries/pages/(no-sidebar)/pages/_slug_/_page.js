import { _ as __variableDynamicImportRuntimeHelper } from "../../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../404.svelte": () => import("../../../../../chunks/404.js"), "../500.svelte": () => import("../../../../../chunks/500.js"), "../maintenance.svelte": () => import("../../../../../chunks/maintenance2.js") }), `../../../(no-sidebar)/pages/${params.slug}.svelte`);
  const content = post.default;
  return {
    content
    // title,
    // dir
  };
}
export {
  load
};
