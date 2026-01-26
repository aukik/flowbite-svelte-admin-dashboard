import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
