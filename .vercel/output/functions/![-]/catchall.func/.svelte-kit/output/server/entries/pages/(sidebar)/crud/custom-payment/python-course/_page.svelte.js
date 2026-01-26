import { c as create_ssr_component, g as getContext, s as subscribe, p as set_store_value, f as add_attribute, a as compute_rest_props, b as spread, d as escape_attribute_value, e as escape_object, h as escape, v as validate_component, l as each } from "../../../../../../chunks/ssr.js";
import { T as ToolbarButton } from "../../../../../../chunks/ToolbarButton.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as Checkbox } from "../../../../../../chunks/Checkbox.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../../chunks/TableHeadCell.js";
import { M as Modal, T as Toolbar, E as EditOutline } from "../../../../../../chunks/EditOutline.js";
import { twMerge } from "tailwind-merge";
import { H as Heading } from "../../../../../../chunks/Heading.js";
import { P as PlusOutline } from "../../../../../../chunks/PlusOutline.js";
import { E as ExclamationCircleOutline, T as TrashBinSolid } from "../../../../../../chunks/TrashBinSolid.js";
import { L as Label } from "../../../../../../chunks/Label.js";
import { I as Input } from "../../../../../../chunks/Input.js";
import { T as Toggle } from "../../../../../../chunks/Toggle.js";
import { M as MetaTag } from "../../../../../../chunks/MetaTag.js";
const ToolbarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $options, $$unsubscribe_options;
  let { divClass = "flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 first:sm:ps-0 last:sm:pe-0" } = $$props;
  const options = getContext("toolbar");
  $$unsubscribe_options = subscribe(options, (value) => $options = value);
  if (options)
    set_store_value(options, $options = true, $options);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  $$unsubscribe_options();
  return `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const CheckCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "check circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>`} `;
});
const CloseCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "close circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"></path></svg>`} `;
});
const CogSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "cog solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clip-rule="evenodd"></path></svg>`} `;
});
const DotsVerticalOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "withEvents", "title", "desc", "strokeLinecap", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { ariaLabel = "dots vertical outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)} stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)} stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"></path></svg>`} `;
});
const DownloadSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "download solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>`} `;
});
const ExclamationCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "exclamation circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>`} `;
});
const EyeOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "withEvents", "title", "desc", "strokeWidth", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "eye outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path><path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path><path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`} `;
});
const MailBoxSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "mail box solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"></path></svg>`} `;
});
const CustomPayment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "md",
        autoclose: false,
        class: "w-full",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="flex flex-col space-y-6" action="#"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-n6zne5">Edit Custom Payment</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-15ueaex">Name</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "name",
                  placeholder: "Enter name",
                  required: true,
                  value: data.name
                },
                {
                  value: ($$value) => {
                    data.name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "email",
                  name: "email",
                  placeholder: "Enter email",
                  required: true,
                  value: data.email
                },
                {
                  value: ($$value) => {
                    data.email = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-8gnyia">Email Verified</span> ${validate_component(Toggle, "Toggle").$$render(
                $$result,
                { checked: data.emailVerified },
                {
                  checked: ($$value) => {
                    data.emailVerified = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1395xuu">Amount</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "amount",
                  placeholder: "Enter amount",
                  required: true,
                  value: data.amount
                },
                {
                  value: ($$value) => {
                    data.amount = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1v9ej6h">What are you purchasing</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "what_are_you_purchasing",
                  placeholder: "Enter what you are purchasing",
                  required: true,
                  value: data.what_are_you_purchasing
                },
                {
                  value: ($$value) => {
                    data.what_are_you_purchasing = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1u14m21">Reference</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "reference",
                  placeholder: "Enter reference",
                  value: data.reference
                },
                {
                  value: ($$value) => {
                    data.reference = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-j5uxbr">Contact Number</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "contact_number",
                  placeholder: "Enter contact number",
                  value: data.contact_number
                },
                {
                  value: ($$value) => {
                    data.contact_number = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-169pvjn">Transaction ID</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "transaction_id",
                  placeholder: "Enter transaction ID",
                  value: data.transaction_id
                },
                {
                  value: ($$value) => {
                    data.transaction_id = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1y4xwdv">School Name</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "school_name",
                  placeholder: "Enter school name",
                  value: data.school_name
                },
                {
                  value: ($$value) => {
                    data.school_name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1fylgvn">Grade</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "grade",
                  placeholder: "Enter grade (e.g., Grade 8, Class 10)",
                  value: data.grade
                },
                {
                  value: ($$value) => {
                    data.grade = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1m90e9z">Coupon Code</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "coupon_code",
                  placeholder: "Enter coupon code (optional)",
                  value: data.coupon_code
                },
                {
                  value: ($$value) => {
                    data.coupon_code = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-rjy5f9">Discount Amount</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "number",
                  name: "discount_amount",
                  placeholder: "Enter discount amount (optional)",
                  value: data.discount_amount
                },
                {
                  value: ($$value) => {
                    data.discount_amount = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-g56oke">Final Amount</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "number",
                  name: "final_amount",
                  placeholder: "Enter final amount",
                  value: data.final_amount
                },
                {
                  value: ($$value) => {
                    data.final_amount = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
            default: () => {
              return `Update Custom Payment`;
            }
          })}</form>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AddCustomPayment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "md",
        autoclose: false,
        class: "w-full",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="flex flex-col space-y-6" action="#"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-c4py9w">Add New Custom Payment</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-15ueaex">Name</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "name",
                  placeholder: "Enter name",
                  required: true,
                  value: data.name
                },
                {
                  value: ($$value) => {
                    data.name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "email",
                  name: "email",
                  placeholder: "Enter email",
                  required: true,
                  value: data.email
                },
                {
                  value: ($$value) => {
                    data.email = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-8gnyia">Email Verified</span> ${validate_component(Toggle, "Toggle").$$render(
                $$result,
                { checked: data.emailVerified },
                {
                  checked: ($$value) => {
                    data.emailVerified = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1395xuu">Amount</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "amount",
                  placeholder: "Enter amount",
                  required: true,
                  value: data.amount
                },
                {
                  value: ($$value) => {
                    data.amount = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1v9ej6h">What are you purchasing</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "what_are_you_purchasing",
                  placeholder: "Enter what you are purchasing",
                  required: true,
                  value: data.what_are_you_purchasing
                },
                {
                  value: ($$value) => {
                    data.what_are_you_purchasing = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1u14m21">Reference</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "reference",
                  placeholder: "Enter reference",
                  value: data.reference
                },
                {
                  value: ($$value) => {
                    data.reference = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-j5uxbr">Contact Number</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "contact_number",
                  placeholder: "Enter contact number",
                  value: data.contact_number
                },
                {
                  value: ($$value) => {
                    data.contact_number = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-169pvjn">Transaction ID</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "transaction_id",
                  placeholder: "Enter transaction ID",
                  value: data.transaction_id
                },
                {
                  value: ($$value) => {
                    data.transaction_id = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1y4xwdv">School Name</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "school_name",
                  placeholder: "Enter school name",
                  value: data.school_name
                },
                {
                  value: ($$value) => {
                    data.school_name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1fylgvn">Grade</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "grade",
                  placeholder: "Enter grade (e.g., Grade 8, Class 10)",
                  value: data.grade
                },
                {
                  value: ($$value) => {
                    data.grade = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1m90e9z">Coupon Code</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "coupon_code",
                  placeholder: "Enter coupon code (optional)",
                  value: data.coupon_code
                },
                {
                  value: ($$value) => {
                    data.coupon_code = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-rjy5f9">Discount Amount</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "number",
                  name: "discount_amount",
                  placeholder: "Enter discount amount (optional)",
                  value: data.discount_amount
                },
                {
                  value: ($$value) => {
                    data.discount_amount = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-g56oke">Final Amount</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "number",
                  name: "final_amount",
                  placeholder: "Enter final amount",
                  value: data.final_amount
                },
                {
                  value: ($$value) => {
                    data.final_amount = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
            default: () => {
              return `Add Custom Payment`;
            }
          })}</form>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Delete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "md",
        autoclose: false,
        class: "w-full",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-center">${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render(
            $$result,
            {
              class: "mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
            },
            {},
            {}
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-ggyy9z">Are you sure you want to delete this custom payment?</h3> <div class="flex justify-center gap-4">${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
            default: () => {
              return `Yes, I&#39;m sure`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `No, cancel`;
            }
          })}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const LOGIN_URL = "https://octobrain.org/login";
const REGISTER_URL = "https://octobrain.org/register";
const EmailPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sampleEmailHTML;
  let { open = false } = $$props;
  let { selectedCount = 0 } = $$props;
  const createPythonCourseInvitationTemplate = (name) => {
    return `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Registration Verified - Python Course Invitation</title>
				<style>
					body {
						font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
						line-height: 1.6;
						color: #333;
						max-width: 600px;
						margin: 0 auto;
						padding: 20px;
						background-color: #f8f9fa;
					}
					.container {
						background-color: #ffffff;
						padding: 40px;
						border-radius: 10px;
						box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					}
					.header {
						text-align: center;
						margin-bottom: 30px;
					}
					.logo {
						color: #4CAF50;
						font-size: 28px;
						font-weight: bold;
						margin-bottom: 10px;
					}
					.title {
						color: #2c3e50;
						font-size: 24px;
						margin-bottom: 20px;
					}
					.message {
						font-size: 16px;
						margin-bottom: 30px;
						color: #555;
					}
					.cta-container {
						text-align: center;
						margin: 30px 0;
					}
					.cta-button {
						display: inline-block;
						padding: 15px 30px;
						margin: 10px;
						text-decoration: none;
						border-radius: 5px;
						font-weight: bold;
						font-size: 16px;
						transition: background-color 0.3s ease;
					}
					.primary-button {
						background-color: #4CAF50;
						color: white;
					}
					.secondary-button {
						background-color: #2196F3;
						color: white;
					}
					.footer {
						margin-top: 40px;
						padding-top: 20px;
						border-top: 1px solid #eee;
						text-align: center;
						color: #777;
						font-size: 14px;
					}
					.highlight {
						background-color: #e8f5e8;
						padding: 20px;
						border-radius: 5px;
						margin: 20px 0;
						border-left: 4px solid #4CAF50;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<div class="logo">🐙 Octobrain</div>
						<h1 class="title">Registration Successfully Verified!</h1>
					</div>
					
					<div class="message">
						<p>Dear ${name || "Student"},</p>
						
						<div class="highlight">
							<p><strong>Great news!</strong> Your registration has been successfully verified, and we're excited to invite you to join our comprehensive Python programming course.</p>
						</div>
						
						<p>Our Python course is designed to take you from beginner to confident programmer with:</p>
						<ul>
							<li>Interactive coding exercises and projects</li>
							<li>Expert instructor guidance</li>
							<li>Real-world programming challenges</li>
							<li>Certificate upon completion</li>
						</ul>
						
						<p>Ready to start your coding journey? Choose one of the options below:</p>
					</div>
					
					<div class="cta-container">
						<a href="${LOGIN_URL}" class="cta-button primary-button">
							🚀 Login to Join Python Course
						</a>
						<br>
						<a href="${REGISTER_URL}" class="cta-button secondary-button">
							📝 Register New Account
						</a>
					</div>
					
					<div class="message">
						<p>If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>
						<p>We look forward to seeing you in the course!</p>
					</div>
					
					<div class="footer">
						<p>Best regards,<br><strong>The Octobrain Team</strong></p>
						<p><em>This is an automated email. Please do not reply to this message.</em></p>
					</div>
				</div>
			</body>
			</html>
		`;
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.selectedCount === void 0 && $$bindings.selectedCount && selectedCount !== void 0)
    $$bindings.selectedCount(selectedCount);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    sampleEmailHTML = createPythonCourseInvitationTemplate("[Student Name]");
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xl",
        autoclose: false,
        class: "w-full",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col space-y-6"><div class="flex items-center space-x-2">${validate_component(EyeOutline, "EyeOutline").$$render($$result, { class: "h-6 w-6 text-blue-600" }, {}, {})} <h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1gedalk">Email Preview - Python Course Invitation</h3></div> <div class="bg-blue-50 border-l-4 border-blue-400 p-4 dark:bg-blue-900 dark:border-blue-600"><div class="flex"><div class="flex-shrink-0">${validate_component(MailBoxSolid, "MailBoxSolid").$$render($$result, { class: "h-5 w-5 text-blue-400" }, {}, {})}</div> <div class="ml-3"><p class="text-sm text-blue-700 dark:text-blue-200" data-svelte-h="svelte-oy56e0"><strong>Subject:</strong> Registration Verified - Join Our Python Course! 🐍</p> <p class="text-sm text-blue-700 dark:text-blue-200 mt-1"><strong data-svelte-h="svelte-1s85dm0">Recipients:</strong> ${escape(selectedCount)} selected payment${escape(selectedCount > 1 ? "s" : "")}</p></div></div></div> <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 max-h-96 overflow-y-auto"><h4 class="text-lg font-medium mb-3 text-gray-900 dark:text-white" data-svelte-h="svelte-yzl6f5">Email Content Preview:</h4> <div class="bg-white rounded border"><!-- HTML_TAG_START -->${sampleEmailHTML}<!-- HTML_TAG_END --></div></div> <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 dark:bg-yellow-900 dark:border-yellow-600" data-svelte-h="svelte-c8xevo"><div class="flex"><div class="ml-3"><p class="text-sm text-yellow-700 dark:text-yellow-200"><strong>Note:</strong> The actual emails will be personalized with each recipient&#39;s name. 
						Users without email addresses will be skipped automatically.</p></div></div></div> <div class="flex justify-end space-x-3">${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `Close Preview`;
            }
          })}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let customPaymentData = [];
  let selectedPayments = [];
  let selectAll = false;
  let emailSending = false;
  let openCustomPayment = false;
  let addCustomPayment = false;
  let openDelete = false;
  let openEmailPreview = false;
  let current_customPayment = {};
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render(
      $$result,
      {
        title: "Custom Payment - Python Course",
        description: "Manage custom payments for Python Course"
      },
      {},
      {}
    )} <main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900"><div class="mx-auto max-w-screen-2xl">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "mb-5" }, {}, {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/crud" }, {}, {
          default: () => {
            return `CRUD`;
          }
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `Custom Payment - Python Course`;
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
          return `Custom Payment - Python Course`;
        }
      }
    )} <p class="mb-6 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1wrx236">Manage custom payments for Python Course</p> <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">${validate_component(Toolbar, "Toolbar").$$render(
      $$result,
      {
        embedded: true,
        class: "w-full py-4 text-left text-gray-500 dark:text-gray-400"
      },
      {},
      {
        default: () => {
          return `${validate_component(ToolbarGroup, "ToolbarGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { class: "whitespace-nowrap" }, {}, {
                default: () => {
                  return `${validate_component(PlusOutline, "PlusOutline").$$render($$result, { class: "mr-2 h-3.5 w-3.5" }, {}, {})}
						Add Custom Payment`;
                }
              })} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  disabled: selectedPayments.length === 0,
                  class: "whitespace-nowrap ml-2",
                  color: "alternative"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(EyeOutline, "EyeOutline").$$render($$result, { class: "mr-2 h-3.5 w-3.5" }, {}, {})}
						Preview Email`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  disabled: selectedPayments.length === 0 || emailSending,
                  class: "whitespace-nowrap ml-2",
                  color: "blue"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(MailBoxSolid, "MailBoxSolid").$$render($$result, { class: "mr-2 h-3.5 w-3.5" }, {}, {})} ${`Send Python Course Emails (${escape(selectedPayments.length)})`}`;
                  }
                }
              )}`;
            }
          })} ${validate_component(ToolbarGroup, "ToolbarGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DownloadSolid, "DownloadSolid").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}`;
                }
              })} ${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CogSolid, "CogSolid").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}`;
                }
              })} ${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${selectedPayments.length > 0 ? `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 dark:bg-blue-900 dark:border-blue-600"><div class="flex"><div class="flex-shrink-0">${validate_component(MailBoxSolid, "MailBoxSolid").$$render($$result, { class: "h-5 w-5 text-blue-400" }, {}, {})}</div> <div class="ml-3"><p class="text-sm text-blue-700 dark:text-blue-200">${escape(selectedPayments.length)} payment${escape(selectedPayments.length > 1 ? "s" : "")} selected for email sending.
								Click &quot;Send Python Course Emails&quot; to notify these users about their verified registration.</p></div></div></div>` : ``} ${``} ${validate_component(Table, "Table").$$render($$result, { hoverable: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { checked: selectAll },
                  {
                    checked: ($$value) => {
                      selectAll = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Name`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Email`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Email Verified`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Amount`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Contact Number`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Transaction ID`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `School Name`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Grade`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Coupon Code`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Final Amount`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Reference`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Created At`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Actions`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(customPaymentData, (customPayment, index) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Checkbox, "Checkbox").$$render(
                        $$result,
                        {
                          checked: selectedPayments.includes(customPayment.id)
                        },
                        {},
                        {}
                      )} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(customPayment.name || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="flex items-center">${escape(customPayment.email || "N/A")} ${!customPayment.email ? `${validate_component(ExclamationCircleSolid, "ExclamationCircleSolid").$$render(
                        $$result,
                        {
                          class: "ml-2 h-4 w-4 text-red-500",
                          title: "No email address"
                        },
                        {},
                        {}
                      )}` : ``}</div> `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="flex items-center">${customPayment.emailVerified ? `${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render($$result, { class: "h-4 w-4 text-green-500 mr-1" }, {}, {})} <span class="text-green-700 dark:text-green-400" data-svelte-h="svelte-1b37fpk">Verified</span>` : `${validate_component(CloseCircleSolid, "CloseCircleSolid").$$render($$result, { class: "h-4 w-4 text-red-500 mr-1" }, {}, {})} <span class="text-red-700 dark:text-red-400" data-svelte-h="svelte-14zxyup">Not Verified</span>`}</div> `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(customPayment.amount || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(customPayment.contact_number || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(customPayment.transaction_id || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(customPayment.school_name || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(customPayment.grade || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${customPayment.coupon_code ? `<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">${escape(customPayment.coupon_code)} </span>` : `N/A`} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${customPayment.final_amount ? `<span class="font-semibold">৳${escape(customPayment.final_amount)}</span> ${customPayment.discount_amount ? `<span class="text-green-600 text-sm block">(-৳${escape(customPayment.discount_amount)})</span>` : ``}` : `${escape(customPayment.amount || "N/A")}`} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(customPayment.reference || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(formatDate(customPayment.createdAt))}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          class: "mr-2 font-medium text-primary-600 hover:underline dark:text-primary-500",
                          color: "none",
                          size: "sm"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(EditOutline, "EditOutline").$$render($$result, { class: "h-4 w-4" }, {}, {})} `;
                          }
                        }
                      )} ${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          class: "font-medium text-red-600 hover:underline dark:text-red-500",
                          color: "none",
                          size: "sm"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(TrashBinSolid, "TrashBinSolid").$$render($$result, { class: "h-4 w-4" }, {}, {})} `;
                          }
                        }
                      )} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div></div></main> ${validate_component(CustomPayment, "CustomPayment").$$render(
      $$result,
      {
        open: openCustomPayment,
        data: current_customPayment
      },
      {
        open: ($$value) => {
          openCustomPayment = $$value;
          $$settled = false;
        },
        data: ($$value) => {
          current_customPayment = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AddCustomPayment, "AddCustomPayment").$$render(
      $$result,
      {
        open: addCustomPayment,
        data: current_customPayment
      },
      {
        open: ($$value) => {
          addCustomPayment = $$value;
          $$settled = false;
        },
        data: ($$value) => {
          current_customPayment = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Delete, "Delete").$$render(
      $$result,
      {
        open: openDelete,
        data: current_customPayment
      },
      {
        open: ($$value) => {
          openDelete = $$value;
          $$settled = false;
        },
        data: ($$value) => {
          current_customPayment = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(EmailPreview, "EmailPreview").$$render(
      $$result,
      {
        selectedCount: selectedPayments.length,
        open: openEmailPreview
      },
      {
        open: ($$value) => {
          openEmailPreview = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
