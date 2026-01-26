import { c as create_ssr_component, f as add_attribute, a as compute_rest_props, g as getContext, b as spread, d as escape_attribute_value, e as escape_object, h as escape, v as validate_component, l as each } from "./ssr.js";
import { c as chartOptions, a as chartOptions$1 } from "./thickbars_teachers.js";
import { twMerge } from "tailwind-merge";
import { C as Card } from "./Card.js";
import { H as Heading } from "./Heading.js";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import { C as ChevronDownOutline, D as Dropdown, a as DropdownItem } from "./ChevronDownOutline.js";
import { I as Input } from "./Input.js";
import { U as UsersGroupSolid } from "./UsersGroupSolid.js";
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options: options2 } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options2 !== void 0)
    $$bindings.options(options2);
  return `<div${add_attribute("class", $$props.class, 0)}></div> `;
});
const BookOpenSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "book open solid" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"></path></svg>`} `;
});
const BriefcaseSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "briefcase solid" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>`} `;
});
const CalendarMonthOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "calendar month outline" } = $$props;
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
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"></path></svg>`} `;
});
const signupsChartColors = {
  backgroundBarColors: ["#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB"]
};
const thinfillbars = {
  series: [
    {
      name: "Users",
      data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
    }
  ],
  labels: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
  chart: {
    type: "bar",
    height: "140px",
    foreColor: "#4B5563",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      color: "#EF562F"
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "25%",
      borderRadius: 3,
      colors: {
        backgroundBarColors: signupsChartColors.backgroundBarColors,
        backgroundBarRadius: 3
      }
    }
    // dataLabels: {
    //     hideOverflowingLabels: false
    // }
  },
  xaxis: {
    floating: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontSize: "14px",
      fontFamily: "Inter, sans-serif"
    }
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 0.8
      }
    }
  },
  fill: {
    opacity: 1
  },
  yaxis: {
    show: false
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  }
};
const colorUp = "text-green-500 dark:text-green-400";
const colorDown = "text-red-500 dark:text-red-400";
const Change = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { unit = "%" } = $$props;
  let { since = "vs last month" } = $$props;
  let { size = "md" } = $$props;
  let { equalHeight = false } = $$props;
  const textSize = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };
  const spanTextSize = {
    xs: "text-sm",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl"
  };
  let divClass;
  let color;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.since === void 0 && $$bindings.since && since !== void 0)
    $$bindings.since(since);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.equalHeight === void 0 && $$bindings.equalHeight && equalHeight !== void 0)
    $$bindings.equalHeight(equalHeight);
  divClass = twMerge(textSize[size], $$props.class);
  color = value > 0 ? colorUp : value < 0 ? colorDown : "";
  return `<div${add_attribute("class", divClass, 0)}><span${add_attribute("class", color, 0)}>${value > 0 ? `<span class="text-base leading-4" data-svelte-h="svelte-jk74o">↑</span>${escape(value)}${escape(unit)}` : `${value < 0 ? `<span class="text-base leading-4" data-svelte-h="svelte-1bjzet6">↓</span>${escape(Math.abs(value))}${escape(unit)}` : `--`}`}</span> 
	${equalHeight ? `<span>${escape(since)}</span>` : `<span${add_attribute("class", spanTextSize[size], 0)}>${escape(since)}</span>`}</div>`;
});
const LastRange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let start;
  let end;
  dayjs.extend(LocalizedFormat);
  let { timeslot = "Last 7 days" } = $$props;
  let { timeslots = {
    Yesterday: -1,
    Today: 0,
    "Last 7 days": 7,
    "Last 30 days": 30,
    "Last 90 days": 90
  } } = $$props;
  let timeslots_keys = Object.keys(timeslots);
  let today = dayjs();
  if ($$props.timeslot === void 0 && $$bindings.timeslot && timeslot !== void 0)
    $$bindings.timeslot(timeslot);
  if ($$props.timeslots === void 0 && $$bindings.timeslots && timeslots !== void 0)
    $$bindings.timeslots(timeslots);
  start = today.subtract(timeslots[timeslot], "days").format("ll");
  end = timeslot == "Yesterday" ? start : today.format("ll");
  return `<div class="font-normal"><button class="mt-0.5 inline-flex gap-1 rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">${escape(timeslot)} ${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { size: "lg" }, {}, {})}</button> ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "min-w-48" }, {}, {
    footer: () => {
      return `<div slot="footer" role="none">${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "font-normal", href: "#" }, {}, {
        default: () => {
          return `Custom...`;
        }
      })}</div>`;
    },
    header: () => {
      return `<div slot="header" role="none">${validate_component(DropdownItem, "DropdownItem").$$render(
        $$result,
        {
          class: "truncate text-gray-900 dark:text-white",
          href: "#"
        },
        {},
        {
          default: () => {
            return `${start == end ? `${escape(start)}` : `${escape(start)} - ${escape(end)}`}`;
          }
        }
      )}</div>`;
    },
    default: () => {
      return `${each(timeslots_keys, (slot) => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "font-normal", href: "#" }, {}, {
          default: () => {
            return `${escape(slot)} `;
          }
        })}`;
      })}`;
    }
  })}</div>`;
});
const ChartWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { chartOptions: chartOptions2 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.chartOptions === void 0 && $$bindings.chartOptions && chartOptions2 !== void 0)
    $$bindings.chartOptions(chartOptions2);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      size: "xl",
      class: "w-full max-w-none 2xl:col-span-2"
    },
    {},
    {
      default: () => {
        return `<div class="mb-4 flex items-center justify-between"><div class="flex-shrink-0">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "text-2xl" }, {}, {
          default: () => {
            return `${escape(title)}`;
          }
        })} <p class="text-base font-light text-gray-500 dark:text-gray-400">${escape(subtitle)}</p></div> ${validate_component(Change, "Change").$$render(
          $$result,
          {
            value: 12.5,
            since: "",
            class: "justify-end font-medium"
          },
          {},
          {}
        )}</div> ${validate_component(Chart, "Chart").$$render($$result, { options: chartOptions2 }, {}, {})} <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">${validate_component(LastRange, "LastRange").$$render($$result, {}, {}, {})} </div>`;
      }
    }
  )} `;
});
const options$1 = {
  colors: ["#EF562F", "#FDBA8C"],
  series: [
    {
      name: "Desktop PC",
      color: "#EF562F",
      data: [
        { x: "01 Feb", y: 170 },
        { x: "02 Feb", y: 180 },
        { x: "03 Feb", y: 164 },
        { x: "04 Feb", y: 145 },
        { x: "05 Feb", y: 194 },
        { x: "06 Feb", y: 170 },
        { x: "07 Feb", y: 155 }
      ]
    },
    {
      name: "Phones",
      color: "#FDBA8C",
      data: [
        { x: "01 Feb", y: 120 },
        { x: "02 Feb", y: 294 },
        { x: "03 Feb", y: 167 },
        { x: "04 Feb", y: 179 },
        { x: "05 Feb", y: 245 },
        { x: "06 Feb", y: 182 },
        { x: "07 Feb", y: 143 }
      ]
    },
    {
      name: "Gaming/Console",
      color: "#17B0BD",
      data: [
        { x: "01 Feb", y: 220 },
        { x: "02 Feb", y: 194 },
        { x: "03 Feb", y: 217 },
        { x: "04 Feb", y: 279 },
        { x: "05 Feb", y: 215 },
        { x: "06 Feb", y: 263 },
        { x: "07 Feb", y: 183 }
      ]
    }
  ],
  chart: {
    type: "bar",
    height: "420px",
    fontFamily: "Inter, sans-serif",
    foreColor: "#4B5563",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "90%",
      borderRadius: 3
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontSize: "14px",
      fontFamily: "Inter, sans-serif"
    }
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1
      }
    }
  },
  stroke: {
    show: true,
    width: 5,
    colors: ["transparent"]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    floating: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  fill: {
    opacity: 1
  }
};
const DesktopPc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "h-fit" }, {}, {
    default: () => {
      return `<div class="items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex"><div class="mb-4 w-full sm:mb-0" data-svelte-h="svelte-1napwzm"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Club, Workshop and Events</h3> <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">Growth</span> </div> <div class="w-full max-w-lg"><div class="grid grid-cols-2 items-center gap-4">${validate_component(Input, "Input").$$render($$result, { placeholder: "From", class: "border" }, {}, {
        left: () => {
          return `${validate_component(CalendarMonthOutline, "CalendarMonthOutline").$$render($$result, { slot: "left", size: "md" }, {}, {})}`;
        }
      })} ${validate_component(Input, "Input").$$render($$result, { placeholder: "To", class: "border" }, {}, {
        left: () => {
          return `${validate_component(CalendarMonthOutline, "CalendarMonthOutline").$$render($$result, { slot: "left", size: "md" }, {}, {})}`;
        }
      })}</div></div></div> ${validate_component(Chart, "Chart").$$render($$result, { options: options$1 }, {}, {})} <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">${validate_component(LastRange, "LastRange").$$render($$result, {}, {}, {})} </div>`;
    }
  })}`;
});
const options = (dark) => {
  let trafficChannelsChartColors = { strokeColor: "#ffffff" };
  if (dark) {
    trafficChannelsChartColors = {
      strokeColor: "#1f2937"
    };
  } else {
    trafficChannelsChartColors = {
      strokeColor: "#ffffff"
    };
  }
  return {
    series: [70, 5, 25],
    labels: ["Student", "Sponsors", "Teacher"],
    colors: ["#16BDCA", "#FDBA8C", "#1A56DB"],
    chart: {
      type: "donut",
      height: 400,
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false
      }
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            height: 300
          }
        }
      }
    ],
    stroke: {
      colors: [trafficChannelsChartColors.strokeColor]
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9
        }
      }
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif"
      },
      x: {
        show: true,
        formatter: function(_, { seriesIndex, w }) {
          const label = w.config.labels[seriesIndex];
          return label;
        }
      },
      y: {
        formatter: function(value) {
          return value + "%";
        }
      }
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
};
const SmallPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle = "" } = $$props;
  let { change = 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  return `<div>${slots.icon ? slots.icon({}) : ``} <h3 class="text-gray-500 dark:text-gray-400">${escape(title)}</h3> <h4 class="text-xl font-bold dark:text-white">${escape(subtitle)}</h4> ${change ? `${validate_component(Change, "Change").$$render(
    $$result,
    {
      value: change,
      size: "sm",
      equalHeight: true
    },
    {},
    {}
  )}` : ``}</div>`;
});
const Traffic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark = false } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "h-fit" }, {}, {
    default: () => {
      return `<div class="mb-4 items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex" data-svelte-h="svelte-15bv539"><div class="mb-4 w-full sm:mb-0"> <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">Total Users</span> <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">percentage %</h3></div> </div> ${validate_component(Chart, "Chart").$$render($$result, { options: options(dark) }, {}, {})} <div class="mb-4 flex items-center justify-between pt-4 sm:pt-6 lg:justify-evenly">${validate_component(SmallPanel, "SmallPanel").$$render(
        $$result,
        {
          title: "Student",
          subtitle: "22",
          change: 4
        },
        {},
        {
          icon: () => {
            return `${validate_component(UsersGroupSolid, "UsersGroupSolid").$$render($$result, { slot: "icon", size: "xl", class: "mb-1" }, {}, {})}`;
          }
        }
      )} ${validate_component(SmallPanel, "SmallPanel").$$render(
        $$result,
        {
          title: "Sponsors",
          subtitle: "4",
          change: -1
        },
        {},
        {
          icon: () => {
            return `${validate_component(BookOpenSolid, "BookOpenSolid").$$render($$result, { slot: "icon", size: "xl", class: "mb-1" }, {}, {})}`;
          }
        }
      )} ${validate_component(SmallPanel, "SmallPanel").$$render(
        $$result,
        {
          title: "Teacher",
          subtitle: "12",
          change: -0.6
        },
        {},
        {
          icon: () => {
            return `${validate_component(BriefcaseSolid, "BriefcaseSolid").$$render($$result, { slot: "icon", size: "xl", class: "mb-1" }, {}, {})}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
function chart_options_func(dark) {
  let mainChartColors;
  if (dark) {
    mainChartColors = {
      borderColor: "#374151",
      labelColor: "#9CA3AF",
      opacityFrom: 0,
      opacityTo: 0.15
    };
  } else {
    mainChartColors = {
      borderColor: "#F3F4F6",
      labelColor: "#6B7280",
      opacityFrom: 0.45,
      opacityTo: 0
    };
  }
  return {
    chart: {
      height: 420,
      type: "area",
      fontFamily: "Inter, sans-serif",
      foreColor: mainChartColors.labelColor,
      toolbar: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        enabled: true,
        opacityFrom: mainChartColors.opacityFrom,
        opacityTo: mainChartColors.opacityTo
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif"
      }
    },
    grid: {
      show: true,
      borderColor: mainChartColors.borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15
      }
    },
    series: [],
    markers: {
      size: 5,
      strokeColors: "#ffffff",
      hover: {
        size: void 0,
        sizeOffset: 3
      }
    },
    xaxis: {
      categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 500
        }
      },
      axisBorder: {
        color: mainChartColors.borderColor
      },
      axisTicks: {
        color: mainChartColors.borderColor
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: mainChartColors.borderColor,
          width: 1,
          dashArray: 10
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 500
        },
        formatter: function(value) {
          return "$" + value;
        }
      }
    },
    legend: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: [mainChartColors.labelColor]
      },
      itemMargin: {
        horizontal: 10
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false
            }
          }
        }
      }
    ]
  };
}
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let chartOptions$2 = chart_options_func(false);
  chartOptions$2.series = data.series;
  let dark = false;
  let studentCount = 2340;
  let teacherCount = 23;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mt-px space-y-4"><div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">${validate_component(ChartWidget, "ChartWidget").$$render(
    $$result,
    {
      chartOptions: chartOptions$2,
      title: "22 Students",
      subtitle: "Total Number of Students"
    },
    {},
    {}
  )} ${validate_component(Traffic, "Traffic").$$render($$result, { dark }, {}, {})} </div> <div class="grid grid-cols-2 gap-4"><div class="grid grid-cols-1 grid-rows-3 gap-4 xl:grid-cols-2 xl:grid-rows-3 2xl:grid-cols-2 2xl:grid-rows-3">${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full"><p data-svelte-h="svelte-endu3i">New students</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">${escape(studentCount)}</p> <p data-svelte-h="svelte-y8f7q">Since Last week</p> </div> ${validate_component(Chart, "Chart").$$render($$result, { options: chartOptions, class: "w-full" }, {}, {})}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full"><p data-svelte-h="svelte-1waec9j">New teachers</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">${escape(teacherCount)}</p>  <p data-svelte-h="svelte-y8f7q">Since Last week</p></div> ${validate_component(Chart, "Chart").$$render(
          $$result,
          {
            options: chartOptions$1,
            class: "w-full"
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full" data-svelte-h="svelte-1l2xwu0"><p>New Students</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">18</p>  <p>Since Last Month</p></div> ${validate_component(Chart, "Chart").$$render($$result, { options: thinfillbars, class: "w-full" }, {}, {})}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full" data-svelte-h="svelte-ula5z3"><p>New Teachers</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">12</p> <p>Since Last Month</p> </div> ${validate_component(Chart, "Chart").$$render($$result, { options: thinfillbars, class: "w-full" }, {}, {})}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full" data-svelte-h="svelte-2ngbsf"><p>New Clubs</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">5</p> <p>Since Last Month</p> </div> ${validate_component(Chart, "Chart").$$render(
          $$result,
          {
            options: {
              ...thinfillbars,
              plotOptions: {
                ...thinfillbars.plotOptions,
                bar: {
                  ...thinfillbars.plotOptions?.bar,
                  horizontal: true
                }
              }
            }
          },
          {},
          {}
        )}
				/&gt;`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full" data-svelte-h="svelte-kjms6o"><p>New Workshop</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">6</p> <p>Since Last Month</p> </div> ${validate_component(Chart, "Chart").$$render(
          $$result,
          {
            options: {
              ...thinfillbars,
              plotOptions: {
                ...thinfillbars.plotOptions,
                bar: {
                  ...thinfillbars.plotOptions?.bar,
                  horizontal: true
                }
              }
            }
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> ${validate_component(DesktopPc, "DesktopPc").$$render($$result, {}, {}, {})}</div>     </div>`;
});
export {
  Dashboard as D
};
