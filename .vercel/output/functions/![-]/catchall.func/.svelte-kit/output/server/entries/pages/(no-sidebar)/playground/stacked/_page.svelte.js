import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { P as Playground } from "../../../../../chunks/Playground.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
const path = "/playground/stacked";
const description = "Playground stacked example - Octobrain Admin Dashboard";
const metaTitle = "Octobrain Admin Dashboard - Playground stacked";
const subtitle = "Playground stacked";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MetaTag, "MetaTag").$$render(
    $$result,
    {
      path,
      description,
      title: metaTitle,
      subtitle
    },
    {},
    {}
  )} <div id="main-content" class="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto bg-gray-50 dark:bg-gray-900">${validate_component(Playground, "Playground").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
