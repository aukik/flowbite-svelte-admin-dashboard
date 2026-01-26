import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { S as ServerError } from "./ServerError.js";
const _500 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ServerError, "ServerError").$$render($$result, {}, {}, {})}`;
});
export {
  _500 as default
};
