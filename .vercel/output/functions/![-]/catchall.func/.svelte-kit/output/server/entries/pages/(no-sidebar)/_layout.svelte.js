import { c as create_ssr_component, l as each, h as escape, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar_1 } from "../../../chunks/Navbar.js";
/* empty css                  */
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="px-4 py-6 md:flex md:items-center md:justify-between md:py-10 2xl:px-0"><p class="mb-4 text-center text-sm text-gray-500 md:mb-0" data-svelte-h="svelte-1mkv5m3">© 2019-2023 <a href="https://flowbite.com//" class="hover:underline" target="_blank">Flowbite.com
		</a>. All rights reserved</p> <ul class="flex flex-wrap items-center justify-center gap-6">${each(["Terms", "Licensing", "Cookie Policy", "Contact"], (elem) => {
    return `<li><a href="/" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">${escape(elem)}</a> </li>`;
  })}</ul></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">${validate_component(Navbar_1, "Navbar").$$render($$result, { fluid: false, list: true }, {}, {})}</header> <div class="mx-auto max-w-screen-2xl">${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
