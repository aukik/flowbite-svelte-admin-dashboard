import { c as create_ssr_component, s as subscribe, v as validate_component, m as missing_component } from "../../chunks/ssr.js";
/* empty css               */
import { p as page } from "../../chunks/stores.js";
import { N as NotFound } from "../../chunks/NotFound.js";
import { M as Maintenance } from "../../chunks/Maintenance.js";
import { S as ServerError } from "../../chunks/ServerError.js";
import { M as MetaTag } from "../../chunks/MetaTag.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pages = {
    400: Maintenance,
    404: NotFound,
    500: ServerError
  };
  const status = +$page.status;
  const index = Object.keys(pages).map((x) => +x).reduce((p, c) => p < status ? c : p);
  const component = pages[index];
  const path = `/errors/${index}`;
  const description = `${index} - Octobrain Admin Dashboard`;
  const title = `Octobrain Admin Dashboard - ${index} page`;
  const subtitle = `${index} page`;
  $$unsubscribe_page();
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
});
export {
  Error as default
};
