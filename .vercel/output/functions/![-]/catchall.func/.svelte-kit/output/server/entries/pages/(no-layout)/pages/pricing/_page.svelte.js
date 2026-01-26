import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, f as add_attribute, h as escape, i as compute_slots, g as getContext, v as validate_component, l as each } from "../../../../../chunks/ssr.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { T as Toggle } from "../../../../../chunks/Toggle.js";
import { N as Navbar, b as NavBrand, a as NavHamburger, c as NavUl, d as NavLi } from "../../../../../chunks/NavUl.js";
import { twMerge } from "tailwind-merge";
import { C as CloseOutline } from "../../../../../chunks/CloseOutline.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["footerType"]);
  let { footerType = void 0 } = $$props;
  let footerClass = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", $$props.class);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0)
    $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(footerClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer> `;
});
const FooterBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "spanClass", "imgClass", "href", "src", "alt", "name", "target"]);
  let { aClass = "flex items-center" } = $$props;
  let { spanClass = "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" } = $$props;
  let { imgClass = "me-3 h-8" } = $$props;
  let { href = "" } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { name = "" } = $$props;
  let { target = void 0 } = $$props;
  let aCls = twMerge(aClass, $$props.classA);
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let imgCls = twMerge(imgClass, $$props.classImg);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}><img${add_attribute("src", src, 0)}${add_attribute("class", imgCls, 0)}${add_attribute("alt", alt, 0)}> <span${add_attribute("class", spanCls, 0)}>${escape(name)}</span> ${slots.default ? slots.default({}) : ``}</a>` : `<img${spread(
    [
      escape_object($$restProps),
      { src: escape_attribute_value(src) },
      { class: escape_attribute_value(imgCls) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`} `;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0)
    $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0)
    $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", spanCls, 0)}>© ${escape(year)} ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ms-1">${escape(by)}</span>`} ${escape(copyrightMessage)}</span> `;
});
const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["liClass", "aClass", "href", "target"]);
  let { liClass = "me-4 last:me-0 md:me-6" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { href = "" } = $$props;
  let { target = void 0 } = $$props;
  let liCls = twMerge(liClass, $$props.classLi);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<li${add_attribute("class", liCls, 0)}><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aCls) },
      { target: escape_attribute_value(target) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a></li> `;
});
const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ulClass = "text-gray-600 dark:text-gray-400" } = $$props;
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  return `<ul${add_attribute("class", twMerge(ulClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "divClass", "hrClass", "iconDivClass", "textSpanClass", "innerDivClass"]);
  let $$slots = compute_slots(slots);
  let { icon = false } = $$props;
  let { divClass = "inline-flex items-center justify-center w-full" } = $$props;
  let { hrClass = "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" } = $$props;
  let { iconDivClass = "absolute start-1/2 px-4 bg-white -translate-x-1/2 rtl:translate-x-1/2 " } = $$props;
  let { textSpanClass = "absolute px-3 font-medium text-gray-900 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:text-white dark:bg-gray-900 " } = $$props;
  let { innerDivClass = "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900" } = $$props;
  let horizontalCls = twMerge(hrClass, $$props.classHr);
  let divCls = twMerge(divClass, $$slots && "relative", $$props.classDiv);
  let innerDivCls = twMerge(innerDivClass, icon ? iconDivClass : textSpanClass, $$props.classInnerDiv);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.hrClass === void 0 && $$bindings.hrClass && hrClass !== void 0)
    $$bindings.hrClass(hrClass);
  if ($$props.iconDivClass === void 0 && $$bindings.iconDivClass && iconDivClass !== void 0)
    $$bindings.iconDivClass(iconDivClass);
  if ($$props.textSpanClass === void 0 && $$bindings.textSpanClass && textSpanClass !== void 0)
    $$bindings.textSpanClass(textSpanClass);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0)
    $$bindings.innerDivClass(innerDivClass);
  return `${$$slots.default ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divCls) }], {})}><hr${add_attribute("class", horizontalCls, 0)}> <div${add_attribute("class", innerDivCls, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<hr${add_attribute("class", horizontalCls, 0)}>`} `;
});
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = twMerge(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li> `;
});
const ArrowLeftToBracketOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "arrow left to bracket outline" } = $$props;
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"></path></svg>`} `;
});
const CheckOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "check outline" } = $$props;
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 11.917 9.724 16.5 19 7.5"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 11.917 9.724 16.5 19 7.5"></path></svg>`} `;
});
const PriceCardListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Li, "Li").$$render($$result, { icon: true, class: "space-x-3" }, {}, {
    default: () => {
      return `${slots.icon ? slots.icon({}) : ` ${validate_component(CheckOutline, "CheckOutline").$$render(
        $$result,
        {
          size: "md",
          class: "text-green-500 dark:text-green-400"
        },
        {},
        {}
      )} `} <span class="dark:text-white">${slots.default ? slots.default({}) : ``}</span>`;
    }
  })}`;
});
const PriceCardPrice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { period = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.period === void 0 && $$bindings.period && period !== void 0)
    $$bindings.period(period);
  return `<div class="my-8 flex items-baseline"><span class="mr-2 text-5xl font-extrabold dark:text-white">${escape(value)}</span> ${period ? `<span class="text-gray-500 dark:text-gray-400">/${escape(period)}</span>` : ``}</div>`;
});
const PriceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title: title2 } = $$props;
  let { price } = $$props;
  let { period = "month" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.period === void 0 && $$bindings.period && period !== void 0)
    $$bindings.period(period);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      size: "none",
      class: "mx-auto max-w-lg text-gray-900",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<h3 class="mb-4 text-2xl font-semibold dark:text-white">${escape(title2)}</h3> ${$$slots.subtitle ? `<p class="font-light text-gray-500 dark:text-gray-400 sm:text-lg">${slots.subtitle ? slots.subtitle({}) : ``}</p>` : ``} ${validate_component(PriceCardPrice, "PriceCardPrice").$$render($$result, { value: price, period }, {}, {})}  <ul role="list" class="mb-8 space-y-4 text-left">${slots.default ? slots.default({ Item: PriceCardListItem }) : ``}</ul> <a href="#top" class="rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:focus:ring-primary-900" data-svelte-h="svelte-1lzz1r0">Get started</a>`;
      }
    }
  )}`;
});
const ComparisonTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { columns = ["Freelancer", "Company", "Enterprise"] } = $$props;
  let { rows = [
    {
      name: "Seperate business/personal",
      freelancer: true,
      company: true,
      enterprise: true
    },
    {
      name: "Estimate tax payments",
      freelancer: true,
      company: true,
      enterprise: true
    },
    {
      name: "Stock control",
      freelancer: true,
      company: true,
      enterprise: true
    },
    {
      name: "Create invoices & estimates",
      freelancer: false,
      company: true,
      enterprise: true
    },
    {
      name: "Manage bills & payments",
      freelancer: false,
      company: true,
      enterprise: true
    },
    {
      name: "Run payroll",
      freelancer: false,
      company: true,
      enterprise: true
    },
    {
      name: "Handle multiple currencies",
      freelancer: false,
      company: false,
      enterprise: true
    },
    {
      name: "Number of Users",
      freelancer: "1 User",
      company: "5-10 Users",
      enterprise: "20+ Users"
    },
    {
      name: "Track deductible mileage",
      freelancer: false,
      company: false,
      enterprise: true
    },
    {
      name: "Track employee time",
      freelancer: false,
      company: false,
      enterprise: true
    },
    {
      name: "Multi-device",
      freelancer: false,
      company: false,
      enterprise: true
    }
  ] } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  return `${validate_component(Table, "Table").$$render($$result, { striped: true, bordered: false }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, { class: "normal-case" }, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {})} ${each(columns, (column) => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render(
              $$result,
              {
                class: "p-4 text-right text-base font-semibold tracking-wider text-gray-900 dark:text-white"
              },
              {},
              {
                default: () => {
                  return `${escape(column)}`;
                }
              }
            )}`;
          })}`;
        }
      })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { class: "border-none" }, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                  $$result,
                  {
                    class: "whitespace-nowrap rounded-l-lg p-4 text-base font-normal text-gray-500 dark:text-gray-400"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(row.name)} `;
                    }
                  }
                )} ${each(columns, (column) => {
                  let value = row[column.toLowerCase()];
                  return ` ${typeof value === "boolean" ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${value ? `${validate_component(CheckOutline, "CheckOutline").$$render($$result, { class: "ml-auto text-green-400" }, {}, {})}` : `${validate_component(CloseOutline, "CloseOutline").$$render($$result, { class: "ml-auto text-red-500" }, {}, {})}`} `;
                    }
                  })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "flex-shrink-0 text-right text-xs font-medium text-gray-900 dark:text-white sm:text-sm md:text-base"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(value)} `;
                      }
                    }
                  )}`}`;
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}`;
});
const FAQ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      size: "xl",
      class: "mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight"
    },
    {},
    {
      default: () => {
        return `Frequently asked questions`;
      }
    }
  )} <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-xl" data-svelte-h="svelte-3n4xeb">All types of businesses need access to development resources, so we give you the option to decide
	how much you need to use.</p> ${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})} <div class="columns-3 gap-8 space-y-10" data-svelte-h="svelte-1fve0bx"><div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What do you mean by &quot;Figma assets&quot;?</h3> <p class="text-gray-600 dark:text-gray-400">You will have access to download the full Figma project including all of the pages, the
			components, responsive pages, and also the icons, illustrations, and images included in the
			screens.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What does &quot;lifetime access&quot; exactly mean?</h3> <p class="text-gray-600 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all
			of the future updates based on the roadmap, free of charge.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">How does support work?</h3> <p class="text-gray-600 dark:text-gray-400">We&#39;re aware of the importance of well qualified support, that is why we decided that support
			will only be provided by the authors that actually worked on this project.</p> <p class="text-gray-600 dark:text-gray-400">Feel free to <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> and we&#39;ll help you out as soon as we can.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">I want to build more than one project with FlowBite. Is that allowed?</h3> <p class="text-gray-600 dark:text-gray-400">You can use FlowBite for an unlimited amount of projects, whether it&#39;s a personal website, a
			SaaS app, or a website for a client. As long as you don&#39;t build a product that will directly
			compete with FlowBite either as a UI kit, theme, or template, it&#39;s fine.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link to="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What does &quot;free updates&quot; include?</h3> <p class="text-gray-600 dark:text-gray-400">The free updates that will be provided is based on the <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates
			outside of the roadmap as well.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What does the free version include?</h3> <p class="text-gray-600 dark:text-gray-400">The <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">free version</a> of FlowBite includes a minimal style guidelines, component variants, and a dashboard page with
			the mobile version alongside it.</p> <p class="text-gray-600 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What is the difference between FlowBite and Tailwind UI?</h3> <p class="text-gray-600 dark:text-gray-400">Although both FlowBite and Tailwind UI are built for integration with Tailwind CSS, the main
			difference is in the design, the pages, the extra components and UI elements that FlowBite
			includes.</p> <p class="text-gray-600 dark:text-gray-400">Additionally, FlowBite is a project that is still in development, and later it will include
			both the application, marketing, and e-commerce UI interfaces.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">How do I purchase a license for my entire team?</h3> <p class="text-gray-600 dark:text-gray-400">You can purchase a license that you can share with your entire team here:</p> <ul class="list-disc pl-4"><li class="mb-2 text-gray-600"><span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Figma Files - Buy a team license for $299 USD</span></li> <li class="mb-2 text-gray-600"><span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Figma Files + Tailwind CSS code pre-order - Buy a team license for <del>$699</del> $559 USD</span></li> <li class="text-gray-600 dark:text-gray-400"><span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Tailwind CSS code pre-order - Buy a team license for <del>$399</del> $319 USD</span></li></ul> <p class="text-gray-600 dark:text-gray-400">Please use a single account to share with your team to access the download files.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I build/sell templates or themes using FlowBite?</h3> <p class="text-gray-600 dark:text-gray-400">It is not allowed to use FlowBite or parts of the project to build themes, templates, UI kits,
			or page builders.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link to="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I use FlowBite in open-source projects?</h3> <p class="text-gray-600 dark:text-gray-400">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI
			library, a theme, a template, a page-builder that would be considered as an alternative to
			FlowBite itself.</p> <p class="text-gray-600 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link to="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I use FlowBite for commercial purposes?</h3> <p class="text-gray-600 dark:text-gray-400">Absolutely! You can use this design kit to build any type of commercial business, whether it&#39;s
			a SaaS, an e-commerce app, an application UI.</p> <p class="text-gray-600 dark:text-gray-400">As long as it is not a design resource that you will re-sell, it is alright to use it for
			commercial purposes.</p> <p class="text-gray-600 dark:text-gray-400">Find out more information by <link to="/license" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">reading the license.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I get an invoice?</h3> <p class="text-gray-600 dark:text-gray-400">After opening the checkout process, you will be able to add all of your personal or company
			information that you want to be available on the invoice. After the purchase, you will get an
			email with the invoice.</p> <p class="text-gray-600 dark:text-gray-400">If you forgot to complete the information, or you didn&#39;t get the invoice by email, feel free
			to <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> and help you out with the invoice.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">When will I get access to the Tailwind CSS code if I pre-ordered it?</h3> <p class="text-gray-600 dark:text-gray-400">The official date that we have set out to release the code version of FlowBite is the <span class="font-medium text-gray-900">25th of September, 2021</span>. We are already working on the integration and if you have a pre-order, you will also get
			frequent updates about the progress.</p> <p class="text-gray-600 dark:text-gray-400">You&#39;ll be one of the first to know when it will be available.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">What is your refund policy?</h3> <p class="text-gray-600 dark:text-gray-400">If you are unhappy with your purchase, just <a href="/" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> within 30 days and we&#39;ll issue a full refund.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Is it allowed to use the design assets, such as the fonts, icons, and illustrations?</h3> <p class="text-gray-600 dark:text-gray-400">What you see is what you get. Which means that all icons, fonts, and illustrations can be used
			based on the licensing that we researched or purchased. For example, we purchased rights to
			use the illustrations in Flowbite.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Where can I access my download files?</h3> <p class="text-gray-600 dark:text-gray-400">After you purchased one of the plans, you will get two emails: one for the invoice, and
			another one with the download files.</p> <p class="text-gray-600 dark:text-gray-400">Soon we will create a way that you will be able to access the download files from the FlowBite
			dashboard from this website.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">I have a company registered for VAT. Where can I add the VAT for the invoice?</h3> <p class="text-gray-600 dark:text-gray-400">After initializing the checkout process from Paddle, you will be able to see a text &quot;Add VAT
			code&quot;. Click on that, and add the VAT code for your company. This will also remove the extra
			VAT tax from the purchase.</p></div> <div class="space-y-4"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Why would I pre-order the Tailwind CSS code?</h3> <p class="text-gray-600 dark:text-gray-400">If you decide to pre-order the Tailwind CSS code, which will arrive on the 25th of September
			2021, you can get a base 20% price reduction and purchase it only for $119, instead of $149.</p></div></div>`;
});
const Footer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      footerType: "socialmedia",
      class: "mt-12"
    },
    {},
    {
      default: () => {
        return `<div class="container mx-auto px-4 sm:py-12 md:px-0"><div class="md:flex md:justify-between"><div class="grid grid-cols-2 gap-8 sm:grid-cols-6 sm:gap-6"><div class="col-span-2 mb-6 md:mb-0">${validate_component(FooterBrand, "FooterBrand").$$render(
          $$result,
          {
            href: "https://flowbite.com",
            src: "/images/flowbite-svelte-icon-logo.svg",
            alt: "Flowbite Logo",
            name: "Flowbite"
          },
          {},
          {}
        )} <p class="mt-4 max-w-lg text-gray-500 dark:text-gray-400" data-svelte-h="svelte-12wk7c7">Flowbite is a UI library of elements &amp; components based on Tailwind CSS that can get
						you started building websites faster and more efficiently.</p></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-v73z7q">Resources</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Flowbite`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Figma`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Tailwind CSS`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Blog`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Blocks`;
              }
            })}`;
          }
        })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-nicwzu">Help and support</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `GitHub Repository`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Flowbite Library`;
              }
            })}`;
          }
        })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-3n6jls">Follow us</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `GitHub`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Twitter`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Facebook`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `LinkedIn`;
              }
            })}`;
          }
        })}</div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white" data-svelte-h="svelte-pqem6v">Legal</h2> ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Privacy Policy`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `Terms &amp; Conditions`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/" }, {}, {
              default: () => {
                return `EULA`;
              }
            })}`;
          }
        })}</div></div></div> <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"> <div class="sm:flex sm:items-center sm:justify-center">${validate_component(FooterCopyright, "FooterCopyright").$$render($$result, { href: "/", by: "Flowbite™" }, {}, {})}</div></div>`;
      }
    }
  )}`;
});
const path = "/pages/pricing";
const description = "Pricing examaple - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - Pricing";
const subtitle = "Pricing";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let period;
  let yearly = false;
  let prices = [["$24", "$200"], ["$49", "$400"], ["$499", "$1500"]];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    period = yearly ? "year" : "month";
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(Navbar, "Navbar").$$render(
      $$result,
      {
        class: "fixed start-0 top-0 z-20 w-full border-b border-gray-200 px-2 py-1 dark:border-gray-700 sm:px-4",
        color: "dark"
      },
      {},
      {
        default: () => {
          return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-1wylxxg">Flowbite</span>`;
            }
          })} ${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})} ${validate_component(NavUl, "NavUl").$$render($$result, { class: "me-auto ms-8" }, {}, {
            default: () => {
              return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/", active: true }, {}, {
                default: () => {
                  return `Home`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
                default: () => {
                  return `Team`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/pricing" }, {}, {
                default: () => {
                  return `Pricing`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/contact" }, {}, {
                default: () => {
                  return `Contact`;
                }
              })}`;
            }
          })} <div class="py-4">${validate_component(Button, "Button").$$render($$result, { class: "gap-2 px-3" }, {}, {
            default: () => {
              return `${validate_component(ArrowLeftToBracketOutline, "ArrowLeftToBracketOutline").$$render($$result, {}, {}, {})}Login/Register`;
            }
          })}</div>`;
        }
      }
    )} <main class="mx-auto bg-gray-50 dark:bg-gray-900"><div class="container mx-auto px-4 pt-24 dark:bg-gray-900 md:pt-32 lg:px-0"><h1 class="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight" data-svelte-h="svelte-e24ymn">Our pricing plan made simple</h1> <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-xl" data-svelte-h="svelte-h3ossv">All types of businesses need access to development resources, so we give you the option to
			decide how much you need to use.</p> <div class="flex items-center"><span class="text-base font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-15dt1j6">Monthly</span> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "ms-3",
        classDiv: "peer-focus:ring-0",
        checked: yearly
      },
      {
        checked: ($$value) => {
          yearly = $$value;
          $$settled = false;
        }
      },
      {}
    )} <span class="text-base font-medium text-gray-900 dark:text-gray-400" data-svelte-h="svelte-16al18a">Yearly</span></div> <section class="grid grid-cols-1 space-y-12 pt-9 md:grid-cols-2 md:gap-6 md:gap-x-6 md:space-y-0 lg:grid-cols-3">${validate_component(PriceCard, "PriceCard").$$render(
      $$result,
      {
        title: "Starter",
        price: prices[0][+yearly],
        period
      },
      {},
      {
        subtitle: () => {
          return `Best option for personal use and for your next project.
				`;
        },
        default: ({ Item }) => {
          return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Individual configuration`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `No setup, or hidden fees`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Team size: <span class="font-semibold" data-svelte-h="svelte-i3awpz">1 developer</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            icon: () => {
              return `${validate_component(CloseOutline, "CloseOutline").$$render(
                $$result,
                {
                  slot: "icon",
                  class: "text-red-500 dark:text-red-400"
                },
                {},
                {}
              )}`;
            },
            default: () => {
              return `Premium support`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            icon: () => {
              return `${validate_component(CloseOutline, "CloseOutline").$$render(
                $$result,
                {
                  slot: "icon",
                  class: "text-red-500 dark:text-red-400"
                },
                {},
                {}
              )}`;
            },
            default: () => {
              return `Free updates`;
            }
          })}`;
        }
      }
    )} ${validate_component(PriceCard, "PriceCard").$$render(
      $$result,
      {
        title: "Company",
        price: prices[1][+yearly],
        period
      },
      {},
      {
        subtitle: () => {
          return `Relevant for multiple users, extended &amp; premium support.
				`;
        },
        default: ({ Item }) => {
          return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Individual configuration`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `No setup, or hidden fees`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Team size: <span class="font-semibold" data-svelte-h="svelte-k8s9fs">10 developers</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Premium support: <span class="font-semibold" data-svelte-h="svelte-sek7sf">24 months</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Free updates: <span class="font-semibold" data-svelte-h="svelte-sek7sf">24 months</span>`;
            }
          })}`;
        }
      }
    )} ${validate_component(PriceCard, "PriceCard").$$render(
      $$result,
      {
        title: "Enterprise",
        price: prices[2][+yearly],
        period
      },
      {},
      {
        subtitle: () => {
          return `Best for large scale uses and extended redistribution rights.
				`;
        },
        default: ({ Item }) => {
          return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Individual configuration`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `No setup, or hidden fees`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Team size: <span class="font-semibold" data-svelte-h="svelte-14sm2xa">100 developers</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Premium support: <span class="font-semibold" data-svelte-h="svelte-1oszxo">36 months</span>`;
            }
          })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
            default: () => {
              return `Free updates: <span class="font-semibold" data-svelte-h="svelte-1oszxo">36 months</span>`;
            }
          })}`;
        }
      }
    )}</section> <section class="flex flex-col pt-10 md:pt-20"><div class="overflow-x-auto rounded-lg"><div class="inline-block min-w-full align-middle"><div class="overflow-hidden shadow sm:rounded-lg">${validate_component(ComparisonTable, "ComparisonTable").$$render($$result, {}, {}, {})}</div></div></div></section> <section class="pt-20">${validate_component(FAQ, "Faq").$$render($$result, {}, {}, {})}</section></div></main> ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
