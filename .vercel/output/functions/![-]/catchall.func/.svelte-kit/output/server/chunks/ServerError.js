import { c as create_ssr_component, f as add_attribute, h as escape, v as validate_component } from "./ssr.js";
import { i as imagesPath } from "./variables.js";
import { B as Button } from "./Button.js";
import { P } from "./P.js";
const ServerError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Something has gone seriously wrong" } = $$props;
  let { description = "It's always time for a coffee break. We should be back by the time you finish your coffee." } = $$props;
  let { image = {
    src: imagesPath("illustrations/500.svg"),
    alt: "astronaut"
  } } = $$props;
  let { btnHref = "/" } = $$props;
  let { btnTitle = "Go back home" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900" } = $$props;
  let { mainDivClass = "flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900" } = $$props;
  let { h1Class = "mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white" } = $$props;
  let { imgDiv = "block md:max-w-lg" } = $$props;
  let { div2Class = "text-center xl:max-w-4xl" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.btnHref === void 0 && $$bindings.btnHref && btnHref !== void 0)
    $$bindings.btnHref(btnHref);
  if ($$props.btnTitle === void 0 && $$bindings.btnTitle && btnTitle !== void 0)
    $$bindings.btnTitle(btnTitle);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0)
    $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0)
    $$bindings.mainDivClass(mainDivClass);
  if ($$props.h1Class === void 0 && $$bindings.h1Class && h1Class !== void 0)
    $$bindings.h1Class(h1Class);
  if ($$props.imgDiv === void 0 && $$bindings.imgDiv && imgDiv !== void 0)
    $$bindings.imgDiv(imgDiv);
  if ($$props.div2Class === void 0 && $$bindings.div2Class && div2Class !== void 0)
    $$bindings.div2Class(div2Class);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><div${add_attribute("class", imgDiv, 0)}><img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.alt, 0)}></div> <div${add_attribute("class", div2Class, 0)}><h1${add_attribute("class", h1Class, 0)}>${escape(title)}</h1> ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-5 text-base font-normal text-gray-500 dark:text-gray-400 md:text-lg"
    },
    {},
    {
      default: () => {
        return `${escape(description)}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render($$result, { href: btnHref }, {}, {
    default: () => {
      return `<svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ${escape(btnTitle)}`;
    }
  })}</div></div></main> `;
});
export {
  ServerError as S
};
