import { c as create_ssr_component, a as compute_rest_props, v as validate_component, l as each } from "./ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "./BreadcrumbItem.js";
import { H as Heading } from "./Heading.js";
import { C as Card } from "./Card.js";
const EmptyCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(Card, "Card").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `<div class="rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600" data-svelte-h="svelte-19yv5iz"><h3>Card header</h3></div> <div class="h-full rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600" data-svelte-h="svelte-1w2qt8a"><h3>Card body</h3></div> <div class="rounded border border-dashed border-gray-200 px-4 py-2 text-gray-400 dark:border-gray-600" data-svelte-h="svelte-xiuplx"><h3>Card footer</h3></div>`;
    }
  })}`;
});
const Playground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="grid grid-cols-1 pt-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4 xl:px-0"><div class="col-span-full mb-4 xl:mb-2">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "mb-5" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `Pages`;
        }
      })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
        default: () => {
          return `Playground`;
        }
      })}`;
    }
  })} ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "text-xl font-semibold sm:text-2xl"
    },
    {},
    {
      default: () => {
        return `Create something awesome here`;
      }
    }
  )}</div> <div class="col-span-full xl:col-auto">${validate_component(EmptyCard, "EmptyCard").$$render(
    $$result,
    {
      size: "xl",
      class: "mb-4 h-80 w-full space-y-6 2xl:col-span-2"
    },
    {},
    {}
  )} ${validate_component(EmptyCard, "EmptyCard").$$render(
    $$result,
    {
      size: "xl",
      class: "mb-4 h-80 w-full space-y-6 2xl:col-span-2"
    },
    {},
    {}
  )}</div> <div class="col-span-2">${validate_component(EmptyCard, "EmptyCard").$$render(
    $$result,
    {
      size: "none",
      class: "mb-4 h-80 w-full space-y-6"
    },
    {},
    {}
  )} ${validate_component(EmptyCard, "EmptyCard").$$render(
    $$result,
    {
      size: "none",
      class: "mb-4 h-80 w-full space-y-6"
    },
    {},
    {}
  )}</div></div> <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">${each(Array(4), (_, i) => {
    return `${validate_component(EmptyCard, "EmptyCard").$$render(
      $$result,
      {
        size: "xl",
        class: "h-60 w-full space-y-6 sm:p-6"
      },
      {},
      {}
    )}`;
  })}</div></main>`;
});
export {
  Playground as P
};
