import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_attribute_value, e as escape_object, f as add_attribute, v as validate_component, i as compute_slots, l as each, g as getContext, h as escape, m as missing_component } from "./ssr.js";
import { T as ToolbarButton } from "./ToolbarButton.js";
import { twMerge } from "tailwind-merge";
import { P as Popper, D as Dropdown, a as DropdownItem, C as ChevronDownOutline } from "./ChevronDownOutline.js";
import "./client.js";
import { G as GithubSolid } from "./GithubSolid.js";
import { U as UsersGroupSolid } from "./UsersGroupSolid.js";
import { N as Navbar, a as NavHamburger, b as NavBrand, c as NavUl, d as NavLi } from "./NavUl.js";
/* empty css    */
import { U as Users } from "./users.js";
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size", "ariaLabel"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  let { ariaLabel = "Dark mode" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const DropdownDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "my-1 h-px bg-gray-100 dark:bg-gray-600" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}></div> `;
});
const DropdownHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "divider"]);
  let { divClass = "py-2 px-4 text-gray-700 dark:text-white" } = $$props;
  let { divider = true } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> ${divider ? `${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})}` : ``} `;
});
const MegaMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["items", "full", "open", "ulClass"]);
  let $$slots = compute_slots(slots);
  let { items = [] } = $$props;
  let { full = false } = $$props;
  let { open = false } = $$props;
  let { ulClass = "grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max" } = $$props;
  let wrapperClass;
  let ulCls;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.full === void 0 && $$bindings.full && full !== void 0)
    $$bindings.full(full);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    wrapperClass = twMerge(full && "border-y w-full", $$props.class);
    ulCls = twMerge(
      ulClass,
      full && $$slots.extra ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3",
      "text-sm font-medium",
      full && $$slots.extra && "md:w-2/3",
      $$props.classUl
    );
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { color: full ? "default" : "dropdown" }, { border: !full }, { rounded: !full }, { activeContent: true }, { arrow: false }, { trigger: "click" }, { placement: "bottom" }, { yOnly: full }, $$restProps, { class: wrapperClass }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2"><ul${add_attribute("class", ulCls, 0)}>${items.length ? each(items, (item, index) => {
            return `<li>${slots.default ? slots.default({ item, index }) : ``} </li>`;
          }) : `${slots.default ? slots.default({ item: items[0], index: 0 }) : ``}`}</ul> ${full && $$slots.extra ? `<div class="md:w-1/3 mt-4 md:mt-0">${slots.extra ? slots.extra({}) : ``}</div>` : ``}</div>`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const ArchiveSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "archive solid" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z"></path></svg>`} `;
});
const GridSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "grid solid" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"></path></svg>`} `;
});
const AppsMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const menu = [
    // { name: 'Sales', href: '/sales', icon: ShoppingBagSolid },
    {
      name: "Admin",
      href: "/crud/users",
      icon: UsersGroupSolid,
      onClick: () => {
        return;
      }
    },
    // { name: 'Inbox', href: '/inbox', icon: InboxOutline },
    // { name: 'Profile', href: '/profile', icon: ProfileCardOutline },
    // { name: 'Settings', href: '/settings', icon: CogOutline },
    {
      name: "Student",
      href: "/crud/students",
      icon: ArchiveSolid,
      onClick: () => {
        return;
      }
    },
    {
      name: "Teacher",
      href: "https://github.com/aukik/flowbite-svelte-admin-dashboard",
      icon: GithubSolid,
      onClick: () => {
        return;
      }
    }
  ];
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
    $$result,
    {
      size: "lg",
      class: "-mx-0.5 hover:text-gray-900 dark:hover:text-white"
    },
    {},
    {
      default: () => {
        return `${validate_component(GridSolid, "GridSolid").$$render($$result, { size: "lg" }, {}, {})}`;
      }
    }
  )} ${validate_component(MegaMenu, "MegaMenu").$$render($$result, { items: menu }, {}, {
    default: ({ item }) => {
      return `<a${add_attribute("href", item.href, 0)} class="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">${validate_component(item.icon || missing_component, "svelte:component").$$render(
        $$result,
        {
          class: "mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
        },
        {},
        {}
      )} <div class="text-sm font-medium text-gray-900 dark:text-white">${escape(item.name)}</div></a>`;
    }
  })}`;
});
const UserMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { avatar = "" } = $$props;
  let { email = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  return `<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600" data-svelte-h="svelte-f29uhu"><svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"></path></svg></button> ${validate_component(Dropdown, "Dropdown").$$render($$result, { placement: "bottom-end" }, {}, {
    default: () => {
      return `${validate_component(DropdownHeader, "DropdownHeader").$$render($$result, {}, {}, {
        default: () => {
          return `<span class="block text-sm">${escape(name)}</span> <span class="block truncate text-sm font-medium">${escape(email)}</span>`;
        }
      })}  ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Sign out`;
        }
      })}`;
    }
  })} `;
});
const Navbar_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fluid = true } = $$props;
  let { drawerHidden = false } = $$props;
  let { list = false } = $$props;
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  if ($$props.drawerHidden === void 0 && $$bindings.drawerHidden && drawerHidden !== void 0)
    $$bindings.drawerHidden(drawerHidden);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  return `${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      fluid,
      class: "text-black",
      color: "default"
    },
    {},
    {
      default: ({ NavContainer }) => {
        return `${validate_component(NavContainer, "NavContainer").$$render($$result, { class: "mb-px mt-px px-1", fluid }, {}, {
          default: () => {
            return `${validate_component(NavHamburger, "NavHamburger").$$render(
              $$result,
              {
                onClick: () => drawerHidden = !drawerHidden,
                class: "m-0 me-3 md:block lg:hidden"
              },
              {},
              {}
            )} ${validate_component(NavBrand, "NavBrand").$$render(
              $$result,
              {
                href: "/",
                class: list ? "w-40" : "lg:w-60"
              },
              {},
              {
                default: () => {
                  return `<img src="https://cvanalyzersmartgrad.blob.core.windows.net/tempphotos/9.png" class="me-2.5 h-6 sm:h-8" alt="Flowbite Logo"> <span class="ml-px self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl" data-svelte-h="svelte-14p29c1">Octobrain</span>`;
                }
              }
            )} <div class="hidden lg:block lg:ps-3">${list ? `${validate_component(NavUl, "NavUl").$$render(
              $$result,
              {
                class: "ml-2",
                activeUrl: "/",
                activeClass: "text-primary-600 dark:text-primary-500"
              },
              {},
              {
                default: () => {
                  return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
                    default: () => {
                      return `Home`;
                    }
                  })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "#top" }, {}, {
                    default: () => {
                      return `Messages`;
                    }
                  })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "#top" }, {}, {
                    default: () => {
                      return `Profile`;
                    }
                  })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "#top" }, {}, {
                    default: () => {
                      return `Settings`;
                    }
                  })} ${validate_component(NavLi, "NavLi").$$render($$result, { class: "cursor-pointer" }, {}, {
                    default: () => {
                      return `Dropdown
						${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
                        $$result,
                        {
                          class: "ms-2 inline h-3 w-3 text-primary-800 dark:text-white"
                        },
                        {},
                        {}
                      )}`;
                    }
                  })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "z-20 w-44" }, {}, {
                    default: () => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#top" }, {}, {
                        default: () => {
                          return `Item 1`;
                        }
                      })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#top" }, {}, {
                        default: () => {
                          return `Item 2`;
                        }
                      })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "#top" }, {}, {
                        default: () => {
                          return `Item 3`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}` : ``}</div> <div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2"> ${validate_component(AppsMenu, "AppsMenu").$$render($$result, {}, {}, {})} ${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})} ${validate_component(UserMenu, "UserMenu").$$render($$result, Object.assign({}, Users[4]), {}, {})}</div>`;
          }
        })}`;
      }
    }
  )}`;
});
export {
  Navbar_1 as N
};
