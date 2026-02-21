import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { N as NotFound } from "./NotFound.js";
const _404 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NotFound, "NotFound").$$render($$result, {}, {}, {})}`;
});
export {
  _404 as default
};
