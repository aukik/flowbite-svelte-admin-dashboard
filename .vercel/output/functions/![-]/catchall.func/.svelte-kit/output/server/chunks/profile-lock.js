import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, d as escape_attribute_value, e as escape_object, f as add_attribute, h as escape, v as validate_component } from "./ssr.js";
import { L as Label } from "./Label.js";
import { I as Input } from "./Input.js";
import { B as Button } from "./Button.js";
import { C as Card } from "./Card.js";
import { C as Checkbox } from "./Checkbox.js";
import { P } from "./P.js";
import { twMerge } from "tailwind-merge";
import { i as imagesPath } from "./variables.js";
import { U as Users } from "./users.js";
import { M as MetaTag } from "./MetaTag.js";
const LockOpenSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "lock open solid" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M15 7a2 2 0 1 1 4 0v4a1 1 0 1 0 2 0V7a4 4 0 0 0-8 0v3H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V7Zm-5 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M15 7a2 2 0 1 1 4 0v4a1 1 0 1 0 2 0V7a4 4 0 0 0-8 0v3H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V7Zm-5 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path></svg>`} `;
});
const ProfileLock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { site = {
    name: "Flowbite",
    img: "/images/flowbite-svelte-icon-logo.svg",
    link: "/",
    imgAlt: "FlowBite Logo"
  } } = $$props;
  let { user = {
    name: "Bonnie Green",
    img: "/images/users/bonnie-green.png",
    imgAlt: "Bonnie Green"
  } } = $$props;
  let { btnTitle = "Unlock" } = $$props;
  let { pageDescription = "Better to be safe than sorry." } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900 w-full" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-11" } = $$props;
  let { cardH1Class = "mb-3 text-2xl font-bold text-gray-900 dark:text-white" } = $$props;
  let { cardDiv3Class = "flex space-x-4" } = $$props;
  let { userImgClass = "w-8 h-8 rounded-full" } = $$props;
  let { acceptTerms = true } = $$props;
  let { termsLink = "/" } = $$props;
  let { termsLinkClass = "text-primary-700 hover:underline dark:text-primary-500" } = $$props;
  if ($$props.site === void 0 && $$bindings.site && site !== void 0)
    $$bindings.site(site);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle !== void 0)
    $$bindings.btnTitle(btnTitle);
  if ($$props.pageDescription === void 0 && $$bindings.pageDescription && pageDescription !== void 0)
    $$bindings.pageDescription(pageDescription);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0)
    $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0)
    $$bindings.mainDivClass(mainDivClass);
  if ($$props.siteLinkClass === void 0 && $$bindings.siteLinkClass && siteLinkClass !== void 0)
    $$bindings.siteLinkClass(siteLinkClass);
  if ($$props.siteImgClass === void 0 && $$bindings.siteImgClass && siteImgClass !== void 0)
    $$bindings.siteImgClass(siteImgClass);
  if ($$props.cardH1Class === void 0 && $$bindings.cardH1Class && cardH1Class !== void 0)
    $$bindings.cardH1Class(cardH1Class);
  if ($$props.cardDiv3Class === void 0 && $$bindings.cardDiv3Class && cardDiv3Class !== void 0)
    $$bindings.cardDiv3Class(cardDiv3Class);
  if ($$props.userImgClass === void 0 && $$bindings.userImgClass && userImgClass !== void 0)
    $$bindings.userImgClass(userImgClass);
  if ($$props.acceptTerms === void 0 && $$bindings.acceptTerms && acceptTerms !== void 0)
    $$bindings.acceptTerms(acceptTerms);
  if ($$props.termsLink === void 0 && $$bindings.termsLink && termsLink !== void 0)
    $$bindings.termsLink(termsLink);
  if ($$props.termsLinkClass === void 0 && $$bindings.termsLinkClass && termsLinkClass !== void 0)
    $$bindings.termsLinkClass(termsLinkClass);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><a${add_attribute("href", site.link, 0)}${add_attribute("class", siteLinkClass, 0)}><img${add_attribute("src", site.img, 0)}${add_attribute("class", siteImgClass, 0)}${add_attribute("alt", site.imgAlt, 0)}> <span>${escape(site.name)}</span></a>  ${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md", border: false }, {}, {
    default: () => {
      return `<div${add_attribute("class", cardDiv3Class, 0)}><img${add_attribute("class", userImgClass, 0)}${add_attribute("src", user.img, 0)}${add_attribute("alt", user.imgAlt, 0)}> <h1${add_attribute("class", cardH1Class, 0)}>${escape(user.name)}</h1></div> ${validate_component(P, "P").$$render(
        $$result,
        {
          class: "text-base font-normal text-gray-500 dark:text-gray-400"
        },
        {},
        {
          default: () => {
            return `${escape(pageDescription)}`;
          }
        }
      )} <form class="mt-8 space-y-6">${slots.default ? slots.default({}) : ``} ${acceptTerms ? `${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "accent-primary-600" }, {}, {
        default: () => {
          return `<span>I accept the <a${add_attribute("href", termsLink, 0)}${add_attribute("class", termsLinkClass, 0)}>Terms and Conditions</a></span>`;
        }
      })}` : ``} ${validate_component(Button, "Button").$$render($$result, { size: "lg", type: "submit" }, {}, {
        default: () => {
          return `${validate_component(LockOpenSolid, "LockOpenSolid").$$render($$result, { size: "lg", class: "mr-2" }, {}, {})} ${escape(btnTitle)}`;
        }
      })}</form>`;
    }
  })}</div></main> `;
});
const path = "/authentication/profile-lock";
const description = "Profile lock example - Octobrain Admin Dashboard";
const metaTitle = "Octobrain Admin Dashboard - Profile lock";
const subtitle = "Profile lock";
const Profile_lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user = {
    img: imagesPath(Users[0].avatar, "users"),
    imgAlt: Users[0].name,
    name: Users[0].name
  };
  return `${validate_component(MetaTag, "MetaTag").$$render(
    $$result,
    {
      path,
      description,
      title: metaTitle,
      subtitle
    },
    {},
    {}
  )} ${validate_component(ProfileLock, "ProfileLock").$$render($$result, { user }, {}, {
    default: () => {
      return `<div>${validate_component(Label, "Label").$$render(
        $$result,
        {
          for: "password",
          class: "mb-2 dark:text-white"
        },
        {},
        {
          default: () => {
            return `Your password`;
          }
        }
      )} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "password",
          name: "password",
          id: "password",
          placeholder: "••••••••",
          required: true,
          class: "border outline-none dark:border-gray-600 dark:bg-gray-700"
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
export {
  Profile_lock as default
};
