import { c as create_ssr_component, f as add_attribute, h as escape, v as validate_component } from "./ssr.js";
import { C as Checkbox } from "./Checkbox.js";
import { I as Input } from "./Input.js";
import { L as Label } from "./Label.js";
import { A } from "./A.js";
import { B as Button } from "./Button.js";
import { C as Card } from "./Card.js";
import { P } from "./P.js";
import { M as MetaTag } from "./MetaTag.js";
const ForgotPassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "Forgot your password?" } = $$props;
  let { site = {
    name: "Flowbite",
    img: "/images/flowbite-svelte-icon-logo.svg",
    link: "/",
    imgAlt: "FlowBite Logo"
  } } = $$props;
  let { btnTitle = "Reset password" } = $$props;
  let { pageDescription = "Don't fret! Just type in your email and we will send you a code to reset your password!" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-11" } = $$props;
  let { cardH1Class = "mb-3 text-2xl font-bold text-gray-900 dark:text-white" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.site === void 0 && $$bindings.site && site !== void 0)
    $$bindings.site(site);
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
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><a${add_attribute("href", site.link, 0)}${add_attribute("class", siteLinkClass, 0)}><img${add_attribute("src", site.img, 0)}${add_attribute("class", siteImgClass, 0)}${add_attribute("alt", site.imgAlt, 0)}> <span>${escape(site.name)}</span></a>  ${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md", border: false }, {}, {
    default: () => {
      return `<h1${add_attribute("class", cardH1Class, 0)}>${escape(title2)}</h1> ${validate_component(P, "P").$$render(
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
      )} <form class="mt-8 space-y-6">${slots.default ? slots.default({}) : ``} ${validate_component(Button, "Button").$$render($$result, { type: "submit", size: "lg" }, {}, {
        default: () => {
          return `${escape(btnTitle)}`;
        }
      })}</form>`;
    }
  })}</div></main> `;
});
const path = "/authentication/forgot-password";
const description = "Forgot password example - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - Forgot password";
const subtitle = "Forgot password";
const Forgot_password = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} ${validate_component(ForgotPassword, "ForgotPassword").$$render($$result, {}, {}, {
    default: () => {
      return `<div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
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
          class: "border outline-none"
        },
        {},
        {}
      )}</div> ${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "gap-1" }, {}, {
        default: () => {
          return `I accept the ${validate_component(A, "A").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `Terms and Conditions`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Forgot_password as default
};
