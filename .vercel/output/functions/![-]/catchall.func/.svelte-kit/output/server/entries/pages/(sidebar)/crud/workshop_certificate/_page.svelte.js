import { c as create_ssr_component, v as validate_component, h as escape, f as add_attribute, s as subscribe, l as each } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { M as Modal, T as Toolbar, E as EditOutline } from "../../../../../chunks/EditOutline.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
import { L as Label } from "../../../../../chunks/Label.js";
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  let { workshopId = {} } = $$props;
  let placementRank = "";
  let buttonDisabled = false;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.workshopId === void 0 && $$bindings.workshopId && workshopId !== void 0)
    $$bindings.workshopId(workshopId);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Certificate",
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
          return `<div slot="footer">${validate_component(Button, "Button").$$render($$result, { disabled: buttonDisabled }, {}, {
            default: () => {
              return `${escape("Upload Certificate")}`;
            }
          })}</div>`;
        },
        default: () => {
          return ` <div class="space-y-6 p-0"><form><div class="flex flex-col"> ${data?.studentWorkshopCertificate?.[0]?.certificateUrl ? `${data.studentWorkshopCertificate[0].certificateUrl.toLowerCase().endsWith(".pdf") ? ` <iframe${add_attribute("src", `https://docs.google.com/viewer?url=${encodeURIComponent(data?.studentWorkshopCertificate?.[0]?.certificateUrl)}&embedded=true`, 0)} width="100%" height="600px" frameborder="0" title="Student Workshop Certificate PDF Viewer"><p class="text-white">Your browser doesn&#39;t support PDF viewing.
							<a${add_attribute("href", data?.studentWorkshopCertificate?.[0]?.certificateUrl, 0)} target="_blank" rel="noopener noreferrer">Click here to download the PDF
							</a>.</p></iframe> ` : `<img${add_attribute("src", data.studentWorkshopCertificate[0].certificateUrl, 0)} alt="certificate" class="col-span-6">`}` : `<p class="text-white" data-svelte-h="svelte-12qm640">No Certificate to show</p>`} ${validate_component(Label, "Label").$$render($$result, { class: "col-span-6 space-y-2 my-4" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-2jd5qh">Certificate Placement/Rank</span> ${data?.studentWorkshopCertificate?.[0]?.placementRank ? `${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "Certificate Placement",
                  placeholder: "Certificate Placement",
                  class: "border outline-none",
                  value: data.studentWorkshopCertificate[0].placementRank
                },
                {
                  value: ($$value) => {
                    data.studentWorkshopCertificate[0].placementRank = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : `${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "Certificate Placement",
                  placeholder: "Certificate Placement",
                  class: "border outline-none",
                  value: placementRank
                },
                {
                  value: ($$value) => {
                    placementRank = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "col-span-6 space-y-2 my-8" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-dxwp6u">Photo</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "file",
                  name: "photo",
                  accept: "image/*",
                  class: "border outline-none"
                },
                {},
                {}
              )}`;
            }
          })}</div></form></div> `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const path = "/crud/users";
const description = "CRUD users example - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - CRUD Users";
const subtitle = "CRUD Users";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let workshopId;
  let workshopName;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let userData = [];
  let currentPage = 1;
  let totalPages = 1;
  let searchQuery = "";
  let openUser = false;
  let current_user = {};
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    workshopId = $page.url.searchParams.get("workshopId");
    workshopName = $page.url.searchParams.get("workshopName");
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800"><div class="p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "mb-5" }, {}, {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/crud/workshops" }, {}, {
          default: () => {
            return `Workshops`;
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
          return `All Students under ${escape(workshopName)} Workshop`;
        }
      }
    )} ${validate_component(Toolbar, "Toolbar").$$render(
      $$result,
      {
        embedded: true,
        class: "w-full py-4 text-gray-500 dark:text-gray-400"
      },
      {},
      {
        default: () => {
          return `${validate_component(Input, "Input").$$render(
            $$result,
            {
              placeholder: "Search by Name",
              class: "me-4 w-80 border xl:w-96",
              value: searchQuery
            },
            {
              value: ($$value) => {
                searchQuery = $$value;
                $$settled = false;
              }
            },
            {}
          )} <select class="me-4 w-40 border xl:w-52 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 p-2"><option value="all" data-svelte-h="svelte-12muxgq">All Students</option><option value="true" data-svelte-h="svelte-12ssos7">Has Certificate</option><option value="false" data-svelte-h="svelte-jvz80r">No Certificate</option></select> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              class: "gap-2 whitespace-nowrap px-3"
            },
            {},
            {
              default: () => {
                return `Apply Filters`;
              }
            }
          )}`;
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
              return `${each(
                [
                  "Name",
                  "School",
                  "Contact Number",
                  "Email Verification",
                  "Has Certificate",
                  "Actions"
                ],
                (title2) => {
                  return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "p-4 font-medium" }, {}, {
                    default: () => {
                      return `${escape(title2)}`;
                    }
                  })}`;
                }
              )}`;
            }
          }
        )} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(userData, (user) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { class: "text-base" }, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "mr-12 flex items-center space-x-6 whitespace-nowrap p-4"
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="text-sm font-normal text-gray-500 dark:text-gray-400"><div class="text-base font-semibold text-gray-900 dark:text-white">${escape(user?.name)}</div> <div class="text-sm font-normal text-gray-500 dark:text-gray-400">${escape(user?.sso?.email)}</div></div> `;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user?.school?.name || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user?.phone_number || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user?.emailVerification || "False")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user?.haveCertificate ? "True" : "False")}`;
                    }
                  })}  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "space-x-2 p-4" }, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, { size: "sm", class: "gap-2 px-3" }, {}, {
                        default: () => {
                          return `${validate_component(EditOutline, "EditOutline").$$render($$result, { size: "sm" }, {}, {})} Certificate
						`;
                        }
                      })} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })} <div class="flex flex-col items-center"> <span class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">${escape(currentPage)}</span> of${escape(" ")} <span class="font-semibold text-gray-900 dark:text-white">${escape(totalPages)}</span> Entries</span> <div class="inline-flex mt-2 xs:mt-0"> <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" ${"disabled"}>Prev</button>  <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" ${"disabled"}>Next</button></div></div></main> ${validate_component(Edit, "User").$$render(
      $$result,
      {
        data: current_user,
        workshopId,
        open: openUser
      },
      {
        open: ($$value) => {
          openUser = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
