import { c as create_ssr_component, f as add_attribute, h as escape, v as validate_component } from "./ssr.js";
import { L as Label } from "./Label.js";
import { I as Input } from "./Input.js";
import { B as Button } from "./Button.js";
import { C as Card } from "./Card.js";
import { C as Checkbox } from "./Checkbox.js";
import { A } from "./A.js";
import { M as MetaTag } from "./MetaTag.js";
const SignUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "Create a Free Account" } = $$props;
  let { site = {
    name: "Flowbite1",
    img: "/images/flowbite-svelte-icon-logo.svg",
    link: "/",
    imgAlt: "FlowBite Logo1"
  } } = $$props;
  let { acceptTerms: acceptTerms2 = true } = $$props;
  let { haveAccount: haveAccount2 = true } = $$props;
  let { btnTitle: btnTitle2 = "Create account" } = $$props;
  let { termsLink: termsLink2 = "/" } = $$props;
  let { loginLink: loginLink2 = "/" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900 w-full" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-11" } = $$props;
  let { cardH1Class = "text-2xl font-bold text-gray-900 dark:text-white" } = $$props;
  let { haveAccountDivClass = "text-sm font-medium text-gray-500 dark:text-gray-400" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.site === void 0 && $$bindings.site && site !== void 0)
    $$bindings.site(site);
  if ($$props.acceptTerms === void 0 && $$bindings.acceptTerms && acceptTerms2 !== void 0)
    $$bindings.acceptTerms(acceptTerms2);
  if ($$props.haveAccount === void 0 && $$bindings.haveAccount && haveAccount2 !== void 0)
    $$bindings.haveAccount(haveAccount2);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle2 !== void 0)
    $$bindings.btnTitle(btnTitle2);
  if ($$props.termsLink === void 0 && $$bindings.termsLink && termsLink2 !== void 0)
    $$bindings.termsLink(termsLink2);
  if ($$props.loginLink === void 0 && $$bindings.loginLink && loginLink2 !== void 0)
    $$bindings.loginLink(loginLink2);
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
  if ($$props.haveAccountDivClass === void 0 && $$bindings.haveAccountDivClass && haveAccountDivClass !== void 0)
    $$bindings.haveAccountDivClass(haveAccountDivClass);
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
        return `<h1${add_attribute("class", cardH1Class, 0)}>${escape(title2)}</h1> <form class="mt-8 space-y-6">${slots.default ? slots.default({}) : ``} ${acceptTerms2 ? `${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "pt-1", name: "accept" }, {}, {
          default: () => {
            return `<span>I accept the ${validate_component(A, "A").$$render($$result, { href: termsLink2 }, {}, {
              default: () => {
                return `Terms and Conditions`;
              }
            })}</span>`;
          }
        })}` : ``} ${validate_component(Button, "Button").$$render($$result, { type: "submit", size: "lg" }, {}, {
          default: () => {
            return `${escape(btnTitle2)}`;
          }
        })} ${haveAccount2 ? `<div${add_attribute("class", haveAccountDivClass, 0)}>Already have an account? ${validate_component(A, "A").$$render($$result, { href: loginLink2 }, {}, {
          default: () => {
            return `Login here`;
          }
        })}</div>` : ``}</form>`;
      }
    }
  )}</div></main> `;
});
const title = "Create a Free Account";
const acceptTerms = true;
const haveAccount = true;
const btnTitle = "Create account";
const termsLink = "/";
const loginLink = "sign-in";
const labelClass = "space-y-2 dark:text-white";
const path = "/authentication/sign-up";
const description = "Sign up example - Octobrain Admin Dashboard";
const metaTitle = "Octobrain Admin Dashboard - Sign up";
const subtitle = "Sign up";
const Sign_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )} ${validate_component(SignUp, "SignUp").$$render(
    $$result,
    {
      title,
      site,
      acceptTerms,
      haveAccount,
      btnTitle,
      termsLink,
      loginLink
    },
    {},
    {
      default: () => {
        return `<div>${validate_component(Label, "Label").$$render($$result, { class: labelClass }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-17zhp19">Your email</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "email",
                name: "email",
                placeholder: "name@company.com",
                required: true,
                class: "border outline-none dark:border-gray-600 dark:bg-gray-700"
              },
              {},
              {}
            )}`;
          }
        })}</div> <div>${validate_component(Label, "Label").$$render($$result, { class: labelClass }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-1nyqqaq">Your password</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "password",
                name: "password",
                placeholder: "••••••••",
                required: true,
                class: "border outline-none dark:border-gray-600 dark:bg-gray-700"
              },
              {},
              {}
            )}`;
          }
        })}</div> <div>${validate_component(Label, "Label").$$render($$result, { class: labelClass }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-1ftz1a7">Confirm password</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "password",
                name: "confirm-password",
                placeholder: "••••••••",
                required: true,
                class: "border outline-none dark:border-gray-600 dark:bg-gray-700"
              },
              {},
              {}
            )}`;
          }
        })}</div>`;
      }
    }
  )}`;
});
export {
  Sign_up as default
};
