import { c as create_ssr_component, i as compute_slots, f as add_attribute, a as compute_rest_props, b as spread, d as escape_attribute_value, e as escape_object, h as escape, v as validate_component, g as getContext, l as each, m as missing_component } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { L as Label } from "../../../../chunks/Label.js";
import { S as Select } from "../../../../chunks/Select.js";
import { C as Card } from "../../../../chunks/Card.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { i as is_void } from "../../../../chunks/names.js";
import { twMerge } from "tailwind-merge";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { I as Input } from "../../../../chunks/Input.js";
import { A } from "../../../../chunks/A.js";
import { G as GithubSolid } from "../../../../chunks/GithubSolid.js";
import { i as imagesPath } from "../../../../chunks/variables.js";
import { U as Users } from "../../../../chunks/users.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 start-0",
    "top-center": "top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "top-right": "top-0 end-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 start-0",
    center: "top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 end-0",
    // bottom
    "bottom-left": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "bottom-right": "bottom-0 end-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3 rtl:translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3 rtl:-translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36",
    none: ""
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ms-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `  <svg class="${"w-full h-full " + escape(rounded ? "rounded" : "rounded-full", true)}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> `}`} ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`} `;
});
const DesktopPcOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "desktop pc outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path></svg>`} `;
});
const DribbbleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "dribbble solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"></path></svg>`} `;
});
const FacebookSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "facebook solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"></path></svg>`} `;
});
const MobilePhoneOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "mobile phone outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"></path></svg>`} `;
});
const TwitterSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "twitter solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"></path></svg>`} `;
});
const UploadSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "upload solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>`} `;
});
const Card_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { subtitle: subtitle2 = "" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle2 !== void 0)
    $$bindings.subtitle(subtitle2);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "shadow-sm " + clazz }, {}, {
    default: () => {
      return `<div class="mb-4 mt-px lg:mb-0">${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "-ml-0.25 mb-2 text-xl font-semibold dark:text-white"
        },
        {},
        {
          default: () => {
            return `${escape(title2)}`;
          }
        }
      )} ${subtitle2 ? `<span class="text-base font-normal text-gray-500 dark:text-gray-400">${escape(subtitle2)}</span>` : ``}</div> ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const LanguageTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const languages = [
    { name: "English (US)", value: "en" },
    { name: "Italiano", value: "it" },
    { name: "Français (France)", value: "fr" },
    { name: "正體字", value: "ch" },
    { name: "Español (España)", value: "es" },
    { name: "Deutsch", value: "de" },
    { name: "Português (Brasil)", value: "pt" }
  ];
  const timezones = [
    {
      name: "GMT+0 Greenwich Mean Time (GMT)",
      value: "0"
    },
    {
      name: "GMT+1 Central European Time (CET)",
      value: "1"
    },
    {
      name: "GMT+2 Eastern European Time (EET)",
      value: "2"
    },
    {
      name: "GMT+3 Moscow Time (MSK)",
      value: "3"
    },
    {
      name: "GMT+5 Pakistan Standard Time (PKT)",
      value: "4"
    },
    {
      name: "GMT+8 China Standard Time (CST)",
      value: "5"
    },
    {
      name: "GMT+10 Eastern Australia Standard Time (AEST)",
      value: "6"
    }
  ];
  return `${validate_component(Card_1, "Card").$$render($$result, { title: "Language & Time" }, {}, {
    default: () => {
      return `<div class="space-y-4">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1gbwyn8">Select language</span> ${validate_component(Select, "Select").$$render($$result, { items: languages, class: "font-normal" }, {}, {})}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1cvrbc1">Time Zone</span> ${validate_component(Select, "Select").$$render($$result, { items: timezones, class: "font-normal" }, {}, {})}`;
        }
      })}</div> ${validate_component(Button, "Button").$$render($$result, { class: "mt-6 w-fit" }, {}, {
        default: () => {
          return `Save all`;
        }
      })}`;
    }
  })}`;
});
const ProfilePicture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      size: "xl",
      class: "block shadow-sm sm:flex sm:space-x-4 sm:py-6 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4",
      horizontal: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            src,
            class: "mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0",
            size: "none",
            rounded: true
          },
          {},
          {}
        )} <div class="py-0.5">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "text-xl" }, {}, {
          default: () => {
            return `Profile picture`;
          }
        })} <p class="mb-4 mt-1 pt-px text-sm" data-svelte-h="svelte-11zwp1h">JPG, GIF or PNG. Max size of 800K</p> <div class="flex items-center space-x-4">${validate_component(Button, "Button").$$render($$result, { size: "sm", class: "px-3" }, {}, {
          default: () => {
            return `${validate_component(UploadSolid, "UploadSolid").$$render($$result, { size: "sm", class: "-ms-1 me-2" }, {}, {})} Upload picture`;
          }
        })} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            class: "px-3",
            color: "alternative"
          },
          {},
          {
            default: () => {
              return `Delete`;
            }
          }
        )}</div></div>`;
      }
    }
  )} `;
});
const GeneralInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const inputs = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Bonnie"
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Green"
    },
    {
      label: "Country",
      type: "text",
      placeholder: "United States"
    },
    {
      label: "City",
      type: "text",
      placeholder: "e.g. San Francisco"
    },
    {
      label: "Address",
      type: "text",
      placeholder: "e.g. California"
    },
    {
      label: "Email",
      type: "text",
      placeholder: "example@company.com"
    },
    {
      label: "Phone Number",
      type: "text",
      placeholder: "e.g. +(12)3456 789"
    },
    {
      label: "Birthday",
      type: "text",
      placeholder: "15/08/1980"
    },
    {
      label: "Organization",
      type: "text",
      placeholder: "Company Name"
    },
    {
      label: "Role",
      type: "text",
      placeholder: "Svelte Developer"
    },
    {
      label: "Department",
      type: "text",
      placeholder: "Development"
    },
    {
      label: "Zip/postal code",
      type: "text",
      placeholder: "123456"
    }
  ];
  return `${validate_component(Card_1, "Card").$$render(
    $$result,
    {
      title: "General Information",
      class: "-mt-px"
    },
    {},
    {
      default: () => {
        return `<form class="grid grid-cols-6 gap-6">${each(inputs, ({ label, type, placeholder }) => {
          return `${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span>${escape(label)}</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    type,
                    placeholder,
                    class: "border font-normal outline-none"
                  },
                  {},
                  {}
                )} `;
              }
            }
          )}`;
        })} ${validate_component(Button, "Button").$$render($$result, { class: "w-fit whitespace-nowrap" }, {}, {
          default: () => {
            return `Save all`;
          }
        })}</form>`;
      }
    }
  )}`;
});
const PasswordInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card_1, "Card").$$render($$result, { title: "Password Information" }, {}, {
    default: () => {
      return `<div class="grid grid-cols-6 gap-6">${validate_component(Label, "Label").$$render(
        $$result,
        {
          class: "col-span-6 space-y-2 sm:col-span-3"
        },
        {},
        {
          default: () => {
            return `<span data-svelte-h="svelte-1w6vfks">Current password</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                placeholder: "••••••••",
                class: "border font-normal outline-none"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Label, "Label").$$render(
        $$result,
        {
          class: "col-span-6 space-y-2 sm:col-span-3"
        },
        {},
        {
          default: () => {
            return `<span data-svelte-h="svelte-1dz5299">New password</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                placeholder: "••••••••",
                class: "border font-normal outline-none"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Label, "Label").$$render(
        $$result,
        {
          class: "col-span-6 space-y-2 sm:col-span-3"
        },
        {},
        {
          default: () => {
            return `<span data-svelte-h="svelte-1ftz1a7">Confirm password</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                placeholder: "••••••••",
                class: "border font-normal outline-none"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Button, "Button").$$render($$result, { class: "sm:col-full col-span-6 w-fit" }, {}, {
        default: () => {
          return `Save all`;
        }
      })}</div>`;
    }
  })}`;
});
const Sessions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card_1, "Card").$$render($$result, { title: "Sessions" }, {}, {
    default: () => {
      return `<ul class="divide-y divide-gray-200 dark:divide-gray-700"><li class="py-4"><div class="flex items-center space-x-4">${validate_component(DesktopPcOutline, "DesktopPcOutline").$$render(
        $$result,
        {
          size: "lg",
          class: "text-gray-900 dark:text-white"
        },
        {},
        {}
      )} <div class="min-w-0 flex-1" data-svelte-h="svelte-my1w7j"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">California 123.123.123.123</p> <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Chrome on macOS</p></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "#top",
          class: "px-3 py-2 dark:text-gray-400 dark:hover:text-white",
          color: "light"
        },
        {},
        {
          default: () => {
            return `Revoke`;
          }
        }
      )}</div></li> <li class="py-4"><div class="flex items-center space-x-4">${validate_component(MobilePhoneOutline, "MobilePhoneOutline").$$render(
        $$result,
        {
          size: "lg",
          class: "text-gray-900 dark:text-white"
        },
        {},
        {}
      )} <div class="min-w-0 flex-1" data-svelte-h="svelte-jarzkl"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">Rome 24.456.355.98</p> <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Safari on iPhone</p></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "#top",
          class: "px-3 py-2 dark:text-gray-400 dark:hover:text-white",
          color: "light"
        },
        {},
        {
          default: () => {
            return `Revoke`;
          }
        }
      )}</div></li></ul> ${validate_component(Button, "Button").$$render($$result, { class: "w-fit" }, {}, {
        default: () => {
          return `See more`;
        }
      })}`;
    }
  })}`;
});
const SocialAccounts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      icon: FacebookSolid,
      name: "Facebook account",
      link: "www.facebook.com/themesberg"
    },
    {
      icon: TwitterSolid,
      name: "Twitter account",
      link: "www.twitter.com/themesberg"
    },
    {
      icon: GithubSolid,
      name: "Github account",
      link: ""
    },
    {
      icon: DribbbleSolid,
      name: "Dribble account",
      link: ""
    }
  ];
  return `${validate_component(Card_1, "Card").$$render($$result, { title: "Social accounts" }, {}, {
    default: () => {
      return `<ul class="divide-y divide-gray-200 dark:divide-gray-700">${each(items, ({ icon, name, link }) => {
        return `<li class="py-4"><div class="flex items-center space-x-4"><div class="flex-shrink-0">${validate_component(icon || missing_component, "svelte:component").$$render(
          $$result,
          {
            size: "lg",
            class: "text-gray-900 dark:text-white"
          },
          {},
          {}
        )}</div> <div class="min-w-0 flex-1"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">${escape(name)}</p> <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">${link ? `${validate_component(A, "A").$$render($$result, { href: "" }, {}, {
          default: () => {
            return `${escape(link)}`;
          }
        })}` : `Not connected`} </p></div> <div class="inline-flex items-center">${link ? `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2", color: "alternative" }, {}, {
          default: () => {
            return `Disconnect`;
          }
        })}` : `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2" }, {}, {
          default: () => {
            return `Connect`;
          }
        })}`} </div></div> </li>`;
      })}</ul> ${validate_component(Button, "Button").$$render($$result, { class: "mt-2 w-fit" }, {}, {
        default: () => {
          return `Save all`;
        }
      })}`;
    }
  })}`;
});
const Accounts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "text-xl font-semibold tracking-wide"
        },
        {},
        {
          default: () => {
            return `Other accounts`;
          }
        }
      )} <ul class="divide-y divide-gray-200 dark:divide-gray-700">${each(Users.slice(0, 4), ({ avatar, name, country, status }) => {
        return `<li class="flex items-center justify-between space-x-4 py-4"><div class="flex items-start space-x-4">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            src: imagesPath(avatar, "users"),
            size: "xs",
            class: "mt-1"
          },
          {},
          {}
        )} <div class="min-w-0 flex-1"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">${escape(name)}</p> <p class="truncate text-sm font-normal text-primary-700 dark:text-primary-500">${escape(country)}</p> <p class="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">Last seen: ${escape(Math.ceil(Math.random() * 10))} min ago</p> </div></div> ${status === "Active" ? `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2", color: "alternative" }, {}, {
          default: () => {
            return `Disconnect`;
          }
        })}` : `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2" }, {}, {
          default: () => {
            return `Connect`;
          }
        })}`} </li>`;
      })}</ul> ${validate_component(Button, "Button").$$render($$result, { class: "mt-2 w-fit" }, {}, {
        default: () => {
          return `Save all`;
        }
      })}`;
    }
  })}`;
});
const CardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "subtitle", "buttonLabel", "items"]);
  let { title: title2 } = $$props;
  let { subtitle: subtitle2 = "" } = $$props;
  let { buttonLabel = "Save all" } = $$props;
  let { items = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle2 !== void 0)
    $$bindings.subtitle(subtitle2);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0)
    $$bindings.buttonLabel(buttonLabel);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `${validate_component(Card_1, "Card").$$render($$result, Object.assign({}, { title: title2 }, $$restProps), {}, {
    default: () => {
      return `${subtitle2 ? `<p class="text-sm font-normal text-gray-500 dark:text-gray-400">${escape(subtitle2)}</p>` : ``} <ul class="divide-y divide-gray-200 dark:divide-gray-700">${each(items, (item) => {
        return `<li class="py-4">${slots.default ? slots.default({ item }) : ``} </li>`;
      })}</ul> ${validate_component(Button, "Button").$$render($$result, { class: "mt-2 w-fit" }, {}, {
        default: () => {
          return `${escape(buttonLabel)}`;
        }
      })}`;
    }
  })} `;
});
const Alerts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      title: "Company News",
      subtitle: "Get Themesberg news, announcements, and product updates",
      active: false
    },
    {
      title: "Account Activity",
      subtitle: "Get important notifications about you or activity you've missed",
      active: true
    },
    {
      title: "Meetups Near You",
      subtitle: "Get an email when a Dribbble Meetup is posted close to my location",
      active: true
    },
    {
      title: "New Messages",
      subtitle: "Get Themsberg news, announcements, and product updates",
      active: false
    }
  ];
  return `${validate_component(CardList, "CardList").$$render(
    $$result,
    {
      title: "Alerts & Notifications",
      subtitle: "You can set up Themesberg to get notifications",
      items
    },
    {},
    {
      default: ({ item }) => {
        return `<div class="flex items-center justify-between"><div class="flex flex-grow flex-col"><div class="text-lg font-semibold text-gray-900 dark:text-white">${escape(item.title)}</div> <div class="text-base font-normal text-gray-500 dark:text-gray-400">${escape(item.subtitle)}</div></div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            checked: item.active,
            classDiv: "peer-focus:ring-0 me-0"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
const Emails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      title: "Rating reminders",
      subtitle: "Send an email reminding me to rate an item a week after purchase",
      active: true
    },
    {
      title: "Item update notifications",
      subtitle: "Send user and product notifications for you",
      active: false
    },
    {
      title: "Item comment notifications",
      subtitle: "Send me an email when someone comments on one of my items",
      active: true
    },
    {
      title: "Buyer review notifications",
      subtitle: "Send me an email when someone leaves a review with their rating",
      active: false
    }
  ];
  return `${validate_component(CardList, "CardList").$$render(
    $$result,
    {
      title: "Email Notifications",
      subtitle: "You can set up Themesberg to get email notifications ",
      items
    },
    {},
    {
      default: ({ item }) => {
        return `<div class="flex items-center justify-between"><div class="flex flex-grow flex-col"><div class="text-lg font-semibold text-gray-900 dark:text-white">${escape(item.title)}</div> <div class="text-base font-normal text-gray-500 dark:text-gray-400">${escape(item.subtitle)}</div></div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            checked: item.active,
            classDiv: "peer-focus:ring-0 me-0"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
const path = "/settings";
const description = "Settings examaple - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - Settings";
const subtitle = "Settings";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="p-4"><div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5"><div class="col-span-full xl:mb-0">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
        $$result,
        {
          class: "inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white",
          href: "/curd/users"
        },
        {},
        {
          default: () => {
            return `Users`;
          }
        }
      )} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
        default: () => {
          return `Settings`;
        }
      })}`;
    }
  })} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl"
    },
    {},
    {
      default: () => {
        return `User settings`;
      }
    }
  )}</div> <div class="col-span-full space-y-4 xl:col-auto">${validate_component(ProfilePicture, "ProfilePicture").$$render(
    $$result,
    {
      src: imagesPath(Users[4].avatar, "users")
    },
    {},
    {}
  )} ${validate_component(LanguageTime, "LanguageTime").$$render($$result, {}, {}, {})} ${validate_component(SocialAccounts, "SocialAccounts").$$render($$result, {}, {}, {})} ${validate_component(Accounts, "Accounts").$$render($$result, {}, {}, {})}</div> <div class="col-span-2 space-y-4">${validate_component(GeneralInfo, "GeneralInfo").$$render($$result, {}, {}, {})} ${validate_component(PasswordInfo, "PasswordInfo").$$render($$result, {}, {}, {})} ${validate_component(Sessions, "Sessions").$$render($$result, {}, {}, {})}</div></div> <div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-4">${validate_component(Alerts, "Alerts").$$render($$result, {}, {}, {})} ${validate_component(Emails, "Emails").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Page as default
};
