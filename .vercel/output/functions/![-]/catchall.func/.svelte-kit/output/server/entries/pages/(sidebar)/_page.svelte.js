import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/thickbars_teachers.js";
import "dayjs";
import "dayjs/plugin/localizedFormat.js";
import { M as MetaTag } from "../../../chunks/MetaTag.js";
import "../../../chunks/client.js";
const path = "";
const description = "Admin Dashboard example using Flowbite Svelte";
const title = "Octobrain Admin Dashboard - Home";
const subtitle = "Admin Dashboard";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="p-4 flex flex-col items-center align-center" data-svelte-h="svelte-g3bdhs">  <p class="text-6xl font-bold text-white">Welcome To Octobrain Admin Panel</p></main>`;
});
export {
  Page as default
};
