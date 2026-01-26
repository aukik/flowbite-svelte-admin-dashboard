import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as Dashboard } from "../../../../../chunks/Dashboard.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
const path = "/layouts/stacked";
const description = "Stacked layout examaple - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - Stacked Layout";
const subtitle = "Stacked Layout";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="py-4">${validate_component(Dashboard, "Dashboard").$$render($$result, { data }, {}, {})}</main>`;
});
export {
  Page as default
};
