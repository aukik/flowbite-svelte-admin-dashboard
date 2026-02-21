import { c as create_ssr_component, a as compute_rest_props, g as getContext, v as validate_component, f as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { C as Checkbox } from "./Checkbox.js";
const common = "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "group", "value", "checked", "customSize"]);
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let { customSize = "" } = $$props;
  let background = getContext("background");
  const colors = {
    primary: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
    secondary: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",
    custom: customSize
  };
  let divClass;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    divClass = twMerge(
      common,
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "primary"],
      sizes[size],
      "relative",
      $$props.classDiv
    );
    $$rendered = `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      Object.assign({}, { custom: true }, $$restProps, { class: $$props.class }, { value }, { checked }, { group }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span${add_attribute("class", divClass, 0)}></span> ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
export {
  Toggle as T
};
