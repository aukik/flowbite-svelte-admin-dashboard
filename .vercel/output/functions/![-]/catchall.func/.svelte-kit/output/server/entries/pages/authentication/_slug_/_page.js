import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../forgot-password.svelte": () => import("../../../../chunks/forgot-password.js"), "../profile-lock.svelte": () => import("../../../../chunks/profile-lock.js"), "../reset-password.svelte": () => import("../../../../chunks/reset-password.js"), "../sign-in.svelte": () => import("../../../../chunks/sign-in.js"), "../sign-up.svelte": () => import("../../../../chunks/sign-up.js") }), `../${params.slug}.svelte`);
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
