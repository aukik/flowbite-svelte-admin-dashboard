import { c as create_ssr_component, a as compute_rest_props, f as add_attribute, b as spread, d as escape_attribute_value, e as escape_object, v as validate_component, h as escape, l as each, m as missing_component } from "../../../../../chunks/ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { C as CloseButton, M as Modal, T as Toolbar, E as EditOutline } from "../../../../../chunks/EditOutline.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { E as ExclamationCircleOutline, T as TrashBinSolid } from "../../../../../chunks/TrashBinSolid.js";
import { L as Label } from "../../../../../chunks/Label.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { S as Select } from "../../../../../chunks/Select.js";
import { T as Textarea } from "../../../../../chunks/Textarea.js";
import { C as CloseOutline } from "../../../../../chunks/CloseOutline.js";
import { C as ChevronDownOutline, D as Dropdown, a as DropdownItem } from "../../../../../chunks/ChevronDownOutline.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  let { activateClickOutside = true } = $$props;
  let { hidden = true } = $$props;
  let { position = "fixed" } = $$props;
  let { leftOffset = "inset-y-0 start-0" } = $$props;
  let { rightOffset = "inset-y-0 end-0" } = $$props;
  let { topOffset = "inset-x-0 top-0" } = $$props;
  let { bottomOffset = "inset-x-0 bottom-0" } = $$props;
  let { width = "w-80" } = $$props;
  let { backdrop = true } = $$props;
  let { bgColor = "bg-gray-900" } = $$props;
  let { bgOpacity = "bg-opacity-75" } = $$props;
  let { placement = "left" } = $$props;
  let { id = "drawer-example" } = $$props;
  let { divClass = "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800" } = $$props;
  let { transitionParams = {} } = $$props;
  let { transitionType = "fly" } = $$props;
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 start-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity);
  if ($$props.activateClickOutside === void 0 && $$bindings.activateClickOutside && activateClickOutside !== void 0)
    $$bindings.activateClickOutside(activateClickOutside);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.leftOffset === void 0 && $$bindings.leftOffset && leftOffset !== void 0)
    $$bindings.leftOffset(leftOffset);
  if ($$props.rightOffset === void 0 && $$bindings.rightOffset && rightOffset !== void 0)
    $$bindings.rightOffset(rightOffset);
  if ($$props.topOffset === void 0 && $$bindings.topOffset && topOffset !== void 0)
    $$bindings.topOffset(topOffset);
  if ($$props.bottomOffset === void 0 && $$bindings.bottomOffset && bottomOffset !== void 0)
    $$bindings.bottomOffset(bottomOffset);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgOpacity === void 0 && $$bindings.bgOpacity && bgOpacity !== void 0)
    $$bindings.bgOpacity(bgOpacity);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  return `${!hidden ? `${backdrop && activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : `${backdrop && !activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : ``}`} <div${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, width, position, placements[placement], $$props.class))
      },
      { tabindex: "-1" },
      {
        "aria-controls": escape_attribute_value(id)
      },
      {
        "aria-labelledby": escape_attribute_value(id)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ hidden }) : ``}</div>` : ``} `;
});
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidden = true } = $$props;
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  return `${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h5",
      class: "mb-6 text-sm font-semibold uppercase"
    },
    {},
    {
      default: () => {
        return `Add new product`;
      }
    }
  )} ${validate_component(CloseButton, "CloseButton").$$render(
    $$result,
    {
      class: "absolute right-2.5 top-2.5 text-gray-400 hover:text-black dark:text-white"
    },
    {},
    {}
  )} <form action="#"><div class="space-y-4">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-15ueaex">Name</span> ${validate_component(Input, "Input").$$render(
        $$result,
        {
          name: "title",
          class: "border font-normal outline-none",
          placeholder: "Type product name",
          required: true
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-hsale1">Price</span> ${validate_component(Input, "Input").$$render(
        $$result,
        {
          name: "price",
          class: "border font-normal outline-none",
          placeholder: "$2999",
          required: true
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-1pjw7e8">Technology</span> ${validate_component(Select, "Select").$$render(
        $$result,
        {
          class: "border-gray-300 font-normal outline-none"
        },
        {},
        {
          default: () => {
            return `<option selected value="Select category" data-svelte-h="svelte-1dx99kh">Select category</option> <option value="FL" data-svelte-h="svelte-1df5j2m">Flowbite</option> <option value="RE" data-svelte-h="svelte-d65wps">React</option> <option value="AN" data-svelte-h="svelte-154i9fj">Angular</option> <option value="VU" data-svelte-h="svelte-ffqyof">Vue</option>`;
          }
        }
      )}`;
    }
  })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-rmspr8">Description</span> ${validate_component(Textarea, "Textarea").$$render(
        $$result,
        {
          rows: "4",
          placeholder: "Enter event description here",
          class: "border-gray-300 font-normal outline-none"
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
    default: () => {
      return `<span data-svelte-h="svelte-1m3tn9l">Discount</span> ${validate_component(Select, "Select").$$render(
        $$result,
        {
          class: "border-gray-300 font-normal outline-none"
        },
        {},
        {
          default: () => {
            return `<option selected value="No" data-svelte-h="svelte-1h4qxg6">No</option> <option value="5" data-svelte-h="svelte-1r9fte9">5%</option> <option value="10" data-svelte-h="svelte-1ua6ly3">10%</option> <option value="20" data-svelte-h="svelte-1d6jax3">20%</option> <option value="30" data-svelte-h="svelte-16oh8nv">30%</option> <option value="40" data-svelte-h="svelte-1j42bgv">40%</option> <option value="50" data-svelte-h="svelte-pqiba3">50%</option>`;
          }
        }
      )}`;
    }
  })} <div class="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
    default: () => {
      return `Add product`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "w-full" }, {}, {
    default: () => {
      return `${validate_component(CloseOutline, "CloseOutline").$$render($$result, {}, {}, {})}
				Cancel`;
    }
  })}</div></div></form>`;
});
const Postupdate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
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
        title: Object.keys(data).length ? "Edit Post" : "Add new user",
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
              return `${escape(Object.keys(data).length ? "Save all" : "Add user")}`;
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
                return `<span data-svelte-h="svelte-1audq8a">Post Title</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "name",
                    class: "border outline-none",
                    placeholder: "e.g. Bonnie",
                    required: true,
                    value: data.title
                  },
                  {
                    value: ($$value) => {
                      data.title = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render($$result, { class: "col-span-6 space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1ncwbmt">Post Content</span> ${validate_component(Textarea, "Textarea").$$render(
                $$result,
                {
                  id: "biography",
                  rows: "4",
                  class: "bg-gray-50 outline-none dark:bg-gray-700",
                  placeholder: "👨‍💻Full-stack web developer. Open-source contributor.",
                  value: data.text_content
                },
                {
                  value: ($$value) => {
                    data.text_content = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `👨‍💻Full-stack web developer. Open-source contributor.`;
                  }
                }
              )}`;
            }
          })}</div></form></div> `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Addnewpost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  let user_label = "Select User";
  let userData = [];
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
        title: Object.keys(data).length ? "Edit Post" : "Add New Post",
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
              return `${escape(Object.keys(data).length ? "Save all" : "Add user")}`;
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
                return `<span data-svelte-h="svelte-1audq8a">Post Title</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "name",
                    class: "border outline-none",
                    placeholder: "",
                    required: true,
                    value: data.title
                  },
                  {
                    value: ($$value) => {
                      data.title = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-1vsc8uk">UserId</span>  <span></span> <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(user_label)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
                      $$result,
                      {
                        class: "w-6 h-6 ms-2 text-white dark:text-white"
                      },
                      {},
                      {}
                    )}`;
                  }
                })} ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
                  default: () => {
                    return `${each(userData, (user) => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(user?.name)}, ${escape(user?.email)}`;
                        }
                      })} `;
                    })}`;
                  }
                })}</div>`;
              }
            }
          )} ${validate_component(Label, "Label").$$render($$result, { class: "col-span-6 space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1ncwbmt">Post Content</span> ${validate_component(Textarea, "Textarea").$$render(
                $$result,
                {
                  id: "biography",
                  rows: "4",
                  class: "bg-gray-50 outline-none dark:bg-gray-700",
                  placeholder: "",
                  value: data.text_content
                },
                {
                  value: ($$value) => {
                    data.text_content = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `👨‍💻Full-stack web developer. Open-source contributor.`;
                  }
                }
              )}`;
            }
          })}</div></form></div> `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Delete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
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
          )} <h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400" data-svelte-h="svelte-kebk9l">Are you sure you want to delete this post?</h3> <div class="flex items-center justify-center">${validate_component(Button, "Button").$$render($$result, { color: "red", class: "mr-2" }, {}, {
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
const path = "/crud/products";
const description = "CRUD products examaple - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - CRUD Products";
const subtitle = "CRUD Products";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hidden = true;
  let drawerComponent = Product;
  let current_user = {};
  let openUser = false;
  let updateUser = false;
  let openDelete = false;
  let postData = [];
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
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/crud/products" }, {}, {
          default: () => {
            return `Posts`;
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
          return `All Posts`;
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
        end: () => {
          return `<div slot="end" class="space-x-2">${validate_component(Button, "Button").$$render($$result, { class: "whitespace-nowrap" }, {}, {
            default: () => {
              return `Add new Post`;
            }
          })}</div>`;
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
              return ` ${each(["Post Title", "Post Content", "Actions"], (title2) => {
                return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "ps-4 font-normal" }, {}, {
                  default: () => {
                    return `${escape(title2)}`;
                  }
                })}`;
              })}`;
            }
          }
        )} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(postData, (post) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { class: "text-base" }, {}, {
                default: () => {
                  return ` ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "flex items-center space-x-6 whitespace-nowrap p-4"
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="text-sm font-normal text-gray-500 dark:text-gray-400"><div class="text-base font-semibold text-gray-900 dark:text-white">${escape(post.title)} </div></div> `;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(post.text_content)}`;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "space-x-2" }, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, { size: "sm", class: "gap-2 px-3" }, {}, {
                        default: () => {
                          return `${validate_component(EditOutline, "EditOutline").$$render($$result, { size: "sm" }, {}, {})} Update
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
                            return `${validate_component(TrashBinSolid, "TrashBinSolid").$$render($$result, { size: "sm" }, {}, {})} Delete Post
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
    })}</main> ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        placement: "right",
        transitionType: "fly",
        hidden
      },
      {
        hidden: ($$value) => {
          hidden = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(drawerComponent || missing_component, "svelte:component").$$render(
            $$result,
            { hidden },
            {
              hidden: ($$value) => {
                hidden = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} ${validate_component(Postupdate, "Postupdate").$$render(
      $$result,
      { data: current_user, open: openUser },
      {
        open: ($$value) => {
          openUser = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Addnewpost, "Addnewpost").$$render(
      $$result,
      { data: current_user, open: updateUser },
      {
        open: ($$value) => {
          updateUser = $$value;
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
