import { c as create_ssr_component, v as validate_component, h as escape, l as each } from "../../../../../chunks/ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { M as Modal, T as Toolbar, E as EditOutline } from "../../../../../chunks/EditOutline.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { P as PlusOutline } from "../../../../../chunks/PlusOutline.js";
import { E as ExclamationCircleOutline, T as TrashBinSolid } from "../../../../../chunks/TrashBinSolid.js";
import { L as Label } from "../../../../../chunks/Label.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
var define_process_env_default$2 = { VITE_API_URL: "https://prodbackend.octobrain.org" };
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  const apiUrl = define_process_env_default$2.VITE_API_URL;
  console.log("API URL:", apiUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Edit Tag",
        size: "md",
        class: "m-4",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<div slot="footer">${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${escape("Update")}`;
            }
          })}</div>`;
        },
        default: () => {
          return ` <div class="space-y-6 p-0"><form><div class="grid grid-cols-6 gap-6">${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-1v75qet">Tag Name</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "name",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. Technology, Sports",
                    value: data.name
                  },
                  {
                    value: ($$value) => {
                      data.name = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}</div></form></div> `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Add = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let data = { name: "" };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Add new Tag",
        size: "md",
        class: "m-4",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<div slot="footer">${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Add Tag`;
            }
          })}</div>`;
        },
        default: () => {
          return ` <div class="space-y-6 p-0"><form><div class="grid grid-cols-6 gap-6">${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-1v75qet">Tag Name</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "name",
                    class: "border outline-none",
                    placeholder: "e.g. Technology, Traveling ",
                    required: true,
                    value: data.name
                  },
                  {
                    value: ($$value) => {
                      data.name = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}</div></form></div> `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
var define_process_env_default$1 = { VITE_API_URL: "https://prodbackend.octobrain.org" };
const Delete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  const apiUrl = define_process_env_default$1.VITE_API_URL;
  console.log("API URL:", apiUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "sm", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render(
            $$result,
            {
              class: "mx-auto mb-4 mt-8 h-10 w-10 text-red-600"
            },
            {},
            {}
          )} <h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1hj8unp">Are you sure you want to delete this AnnouncedFeaturedPosts?</h3> <div class="flex items-center justify-center">${validate_component(Button, "Button").$$render($$result, { color: "red", class: "mr-2" }, {}, {
            default: () => {
              return `Yes, I&#39;m sure`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `No, cancel`;
            }
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
var define_process_env_default = { VITE_API_URL: "https://prodbackend.octobrain.org" };
const path = "/crud/users";
const description = "CRUD users examaple - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - CRUD Users";
const subtitle = "CRUD Users";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const apiUrl = define_process_env_default.VITE_API_URL;
  console.log("API URL:", apiUrl);
  let userData = [];
  let openUser = false;
  let addUser = false;
  let openDelete = false;
  let current_user = {};
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800"><div class="p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "mb-5" }, {}, {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/crud/users" }, {}, {
          default: () => {
            return `Timeline`;
          }
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `List`;
          }
        })}`;
      }
    })} ${validate_component(Heading, "Heading").$$render(
      $$result,
      {
        tag: "h1",
        class: "text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl"
      },
      {},
      {
        default: () => {
          return `All Tags`;
        }
      }
    )} ${validate_component(Toolbar, "Toolbar").$$render(
      $$result,
      {
        embedded: true,
        class: "w-full py-4 text-gray-500  dark:text-gray-400"
      },
      {},
      {
        end: () => {
          return `<div slot="end" class="flex items-center space-x-2">${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              class: "gap-2 whitespace-nowrap px-3"
            },
            {},
            {
              default: () => {
                return `${validate_component(PlusOutline, "PlusOutline").$$render($$result, { size: "sm" }, {}, {})}Add a Tag`;
              }
            }
          )} </div>`;
        }
      }
    )}</div> ${validate_component(Table, "Table").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render(
          $$result,
          {
            class: "border-y border-gray-200 bg-gray-100 dark:border-gray-700"
          },
          {},
          {
            default: () => {
              return ` ${each(["No.", "Tag Name", "Actions"], (title2) => {
                return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "p-4 font-medium" }, {}, {
                  default: () => {
                    return `${escape(title2)}`;
                  }
                })}`;
              })}`;
            }
          }
        )} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(userData, (user, index) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { class: "text-base" }, {}, {
                default: () => {
                  return ` ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(index + 1 || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user?.name || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "space-x-2 p-4" }, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, { size: "sm", class: "gap-2 px-3" }, {}, {
                        default: () => {
                          return `${validate_component(EditOutline, "EditOutline").$$render($$result, { size: "sm" }, {}, {})} Edit
						`;
                        }
                      })} ${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          color: "red",
                          size: "sm",
                          class: "gap-2 px-3"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(TrashBinSolid, "TrashBinSolid").$$render($$result, { size: "sm" }, {}, {})} Delete
						`;
                          }
                        }
                      )} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</main>  ${validate_component(Edit, "User").$$render(
      $$result,
      { data: current_user, open: openUser },
      {
        open: ($$value) => {
          openUser = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Add, "Adduser").$$render(
      $$result,
      { data: current_user, open: addUser },
      {
        open: ($$value) => {
          addUser = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Delete, "Delete").$$render(
      $$result,
      { data: current_user, open: openDelete },
      {
        open: ($$value) => {
          openDelete = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
