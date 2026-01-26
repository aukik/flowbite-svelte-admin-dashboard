import { c as create_ssr_component, f as add_attribute, h as escape, v as validate_component } from "./ssr.js";
import { L as Label } from "./Label.js";
import { I as Input } from "./Input.js";
import { B as Button } from "./Button.js";
import { C as Card } from "./Card.js";
import { C as Checkbox } from "./Checkbox.js";
import { M as MetaTag } from "./MetaTag.js";
const ResetPassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "Reset your password" } = $$props;
  let { site = {
    name: "Flowbite",
    img: "/images/flowbite-svelte-icon-logo.svg",
    link: "/",
    imgAlt: "FlowBite Logo"
  } } = $$props;
  let { acceptTerms: acceptTerms2 = true } = $$props;
  let { btnTitle: btnTitle2 = "Create account" } = $$props;
  let { termsLink: termsLink2 = "/" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900 w-full" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-11" } = $$props;
  let { cardH1Class = "text-2xl font-bold text-gray-900 dark:text-white" } = $$props;
  let { termsLinkClass = "text-primary-700 hover:underline dark:text-primary-500" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.site === void 0 && $$bindings.site && site !== void 0)
    $$bindings.site(site);
  if ($$props.acceptTerms === void 0 && $$bindings.acceptTerms && acceptTerms2 !== void 0)
    $$bindings.acceptTerms(acceptTerms2);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle2 !== void 0)
    $$bindings.btnTitle(btnTitle2);
  if ($$props.termsLink === void 0 && $$bindings.termsLink && termsLink2 !== void 0)
    $$bindings.termsLink(termsLink2);
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
  if ($$props.termsLinkClass === void 0 && $$bindings.termsLinkClass && termsLinkClass !== void 0)
    $$bindings.termsLinkClass(termsLinkClass);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><a${add_attribute("href", site.link, 0)}${add_attribute("class", siteLinkClass, 0)}><img${add_attribute("src", site.img, 0)}${add_attribute("class", siteImgClass, 0)}${add_attribute("alt", site.imgAlt, 0)}> <span>${escape(site.name)}</span></a>  ${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "w-full",
      size: "md",
      border: false
    },
    {},
    {
      default: () => {
        return `<h1${add_attribute("class", cardH1Class, 0)}>${escape(title2)}</h1> <form class="mt-8 space-y-6">${slots.default ? slots.default({}) : ``} ${acceptTerms2 ? `${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "accent-primary-600" }, {}, {
          default: () => {
            return `<span>I accept the <a${add_attribute("href", termsLink2, 0)}${add_attribute("class", termsLinkClass, 0)}>Terms and Conditions</a></span>`;
          }
        })}` : ``} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
          default: () => {
            return `${escape(btnTitle2)}`;
          }
        })}</form>`;
      }
    }
  )}</div></main> `;
});
const title = "Reset your password";
const acceptTerms = true;
const btnTitle = "Create account";
const termsLink = "/";
const labelClass = "mb-2 dark:text-white";
const inputClass = "border outline-none dark:border-gray-600 dark:bg-gray-700";
const path = "/authentication/reset-password";
const description = "Reset password example - Octobrain Admin Dashboard";
const metaTitle = "Octobrain Admin Dashboard - Reset password";
const subtitle = "Reset password";
const Reset_password = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const site = {
    name: "Flowbite",
    img: "/images/flowbite-svelte-icon-logo.svg",
    link: "/",
    imgAlt: "FlowBite Logo"
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
  )} ${validate_component(ResetPassword, "ResetPassword").$$render(
    $$result,
    {
      title,
      site,
      acceptTerms,
      btnTitle,
      termsLink
    },
    {},
    {
      default: () => {
        return `<div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: labelClass }, {}, {
          default: () => {
            return `Your email`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "email",
            name: "email",
            id: "email",
            placeholder: "name@company.com",
            required: true,
            class: inputClass
          },
          {},
          {}
        )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "password", class: labelClass }, {}, {
          default: () => {
            return `Your password`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "••••••••",
            required: true,
            class: inputClass
          },
          {},
          {}
        )}</div> <div>${validate_component(Label, "Label").$$render(
          $$result,
          {
            for: "confirm-password",
            class: labelClass
          },
          {},
          {
            default: () => {
              return `Confirm password`;
            }
          }
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "password",
            name: "confirm-password",
            id: "confirm-password",
            placeholder: "••••••••",
            required: true,
            class: inputClass
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
export {
  Reset_password as default
};
