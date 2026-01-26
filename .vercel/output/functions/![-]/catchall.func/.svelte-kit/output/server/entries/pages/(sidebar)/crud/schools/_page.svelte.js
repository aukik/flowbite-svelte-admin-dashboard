import { c as create_ssr_component, v as validate_component, h as escape, l as each, f as add_attribute } from "../../../../../chunks/ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { M as Modal, T as Toolbar, E as EditOutline } from "../../../../../chunks/EditOutline.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { P as PlusOutline } from "../../../../../chunks/PlusOutline.js";
import { E as ExclamationCircleOutline, T as TrashBinSolid } from "../../../../../chunks/TrashBinSolid.js";
import { C as ChevronDownOutline, D as Dropdown, a as DropdownItem } from "../../../../../chunks/ChevronDownOutline.js";
import { C as Checkbox } from "../../../../../chunks/Checkbox.js";
import { L as Label } from "../../../../../chunks/Label.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  let teacherData = [];
  let teacher_label = "Select Teacher";
  let tagData = [];
  let tag_label = "Select Tags";
  function isTagSelected(tagId) {
    return data.tags && data.tags.some((tag) => tag.tag.id === tagId);
  }
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
        title: Object.keys(data).length ? "Edit School" : "Add new user",
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
                return `<span data-svelte-h="svelte-15ueaex">Name</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "name",
                    class: "border outline-none",
                    placeholder: "e.g. Bonnie",
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
          )}  ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-19laep1">Established Year</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.established_year
                  },
                  {
                    value: ($$value) => {
                      data.established_year = $$value;
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
                return `<span data-svelte-h="svelte-xdaux9">Motto</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.motto
                  },
                  {
                    value: ($$value) => {
                      data.motto = $$value;
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
                return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "email",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.email
                  },
                  {
                    value: ($$value) => {
                      data.email = $$value;
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
                return `<span data-svelte-h="svelte-j5uxbr">Contact Number</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.contact_number
                  },
                  {
                    value: ($$value) => {
                      data.contact_number = $$value;
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
                return `<span data-svelte-h="svelte-1afekip">School Code</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.school_code
                  },
                  {
                    value: ($$value) => {
                      data.school_code = $$value;
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
                return `<span data-svelte-h="svelte-g3cgml">About Us</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.about_us
                  },
                  {
                    value: ($$value) => {
                      data.about_us = $$value;
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
                return `<span data-svelte-h="svelte-11zxlyy">Website Url</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.websiteUrl
                  },
                  {
                    value: ($$value) => {
                      data.websiteUrl = $$value;
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
                return `<span data-svelte-h="svelte-1ez4627">Address Line 1</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.address_line_1
                  },
                  {
                    value: ($$value) => {
                      data.address_line_1 = $$value;
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
                return `<span data-svelte-h="svelte-uxn3cq">Address Line 2</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.address_line_2
                  },
                  {
                    value: ($$value) => {
                      data.address_line_2 = $$value;
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
                return `<span data-svelte-h="svelte-1y9xqd6">Zip Code</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.zipcode
                  },
                  {
                    value: ($$value) => {
                      data.zipcode = $$value;
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
                return `<span data-svelte-h="svelte-1t0bd2t">City</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.city
                  },
                  {
                    value: ($$value) => {
                      data.city = $$value;
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
                return `<span data-svelte-h="svelte-170f2h0">Country</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.country
                  },
                  {
                    value: ($$value) => {
                      data.country = $$value;
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
                return `<span data-svelte-h="svelte-iwafao">Creator Teacher</span> <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(teacher_label)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
                      $$result,
                      {
                        class: "w-6 h-6 ms-2 text-white dark:text-white"
                      },
                      {},
                      {}
                    )}`;
                  }
                })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "overflow-y-auto max-h-80" }, {}, {
                  default: () => {
                    return `${each(teacherData, (teacher) => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(teacher.name)}, ${escape(teacher.teacher_designation)}`;
                        }
                      })}`;
                    })}`;
                  }
                })}</div>`;
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
                return `<span data-svelte-h="svelte-fsa5fj">Tags</span> <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(tag_label)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
                      $$result,
                      {
                        class: "w-6 h-6 ms-2 text-white dark:text-white"
                      },
                      {},
                      {}
                    )}`;
                  }
                })} ${validate_component(Dropdown, "Dropdown").$$render(
                  $$result,
                  {
                    class: "overflow-y-auto max-h-80 w-44 p-3 space-y-3 text-sm"
                  },
                  {},
                  {
                    default: () => {
                      return `${each(tagData, (tag) => {
                        return `<li>${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: isTagSelected(tag.id) }, {}, {
                          default: () => {
                            return `${escape(tag.name)} `;
                          }
                        })} </li>`;
                      })}`;
                    }
                  }
                )}</div>`;
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
  let { data = {} } = $$props;
  let teacherData = [];
  let tagArray = [];
  let teacher_label = "Select Teacher";
  let tagData = [];
  let tag_label = "Select Tags";
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
        title: Object.keys(data).length ? "Edit user" : "Add new School",
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
              return `${escape(Object.keys(data).length ? "Save all" : "Add student")}`;
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
                return `<span data-svelte-h="svelte-15ueaex">Name</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "name",
                    class: "border outline-none",
                    placeholder: "e.g. Bonnie",
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
          )}   ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-19laep1">Established Year</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.established_year
                  },
                  {
                    value: ($$value) => {
                      data.established_year = $$value;
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
                return `<span data-svelte-h="svelte-xdaux9">Motto</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.motto
                  },
                  {
                    value: ($$value) => {
                      data.motto = $$value;
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
                return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "email",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.email
                  },
                  {
                    value: ($$value) => {
                      data.email = $$value;
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
                return `<span data-svelte-h="svelte-j5uxbr">Contact Number</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.contact_number
                  },
                  {
                    value: ($$value) => {
                      data.contact_number = $$value;
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
                return `<span data-svelte-h="svelte-1afekip">School Code</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.school_code
                  },
                  {
                    value: ($$value) => {
                      data.school_code = $$value;
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
                return `<span data-svelte-h="svelte-g3cgml">About Us</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.about_us
                  },
                  {
                    value: ($$value) => {
                      data.about_us = $$value;
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
                return `<span data-svelte-h="svelte-11zxlyy">Website Url</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.websiteUrl
                  },
                  {
                    value: ($$value) => {
                      data.websiteUrl = $$value;
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
                return `<span data-svelte-h="svelte-1ez4627">Address Line 1</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.address_line_1
                  },
                  {
                    value: ($$value) => {
                      data.address_line_1 = $$value;
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
                return `<span data-svelte-h="svelte-uxn3cq">Address Line 2</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.address_line_2
                  },
                  {
                    value: ($$value) => {
                      data.address_line_2 = $$value;
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
                return `<span data-svelte-h="svelte-1y9xqd6">Zip Code</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.zipcode
                  },
                  {
                    value: ($$value) => {
                      data.zipcode = $$value;
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
                return `<span data-svelte-h="svelte-1t0bd2t">City</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.city
                  },
                  {
                    value: ($$value) => {
                      data.city = $$value;
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
                return `<span data-svelte-h="svelte-170f2h0">Country</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.country
                  },
                  {
                    value: ($$value) => {
                      data.country = $$value;
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
                return `<span data-svelte-h="svelte-iwafao">Creator Teacher</span> <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(teacher_label)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
                      $$result,
                      {
                        class: "w-6 h-6 ms-2 text-white dark:text-white"
                      },
                      {},
                      {}
                    )}`;
                  }
                })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "overflow-y-auto max-h-80" }, {}, {
                  default: () => {
                    return `${each(teacherData, (teacher) => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(teacher.name)}, ${escape(teacher.teacher_designation)}`;
                        }
                      })}`;
                    })}`;
                  }
                })}</div>`;
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
                return `<span data-svelte-h="svelte-fsa5fj">Tags</span> <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(tag_label)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
                      $$result,
                      {
                        class: "w-6 h-6 ms-2 text-white dark:text-white"
                      },
                      {},
                      {}
                    )}`;
                  }
                })} ${validate_component(Dropdown, "Dropdown").$$render(
                  $$result,
                  {
                    class: "overflow-y-auto max-h-80 w-44 p-3 space-y-3 text-sm"
                  },
                  {},
                  {
                    default: () => {
                      return `${each(tagData, (tag) => {
                        return `<li>${validate_component(Checkbox, "Checkbox").$$render(
                          $$result,
                          {
                            checked: tagArray.some((t) => t.tagId === tag.id)
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(tag.name)} `;
                            }
                          }
                        )} </li>`;
                      })}`;
                    }
                  }
                )}</div>`;
              }
            }
          )}</div></form></div> `;
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
          )} <h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400" data-svelte-h="svelte-eezrej">Are you sure you want to delete this School?</h3> <div class="flex items-center justify-center">${validate_component(Button, "Button").$$render($$result, { color: "red", class: "mr-2" }, {}, {
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
const Verification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        title: Object.keys(data).length ? "Verification School" : "Add new user",
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
                return `<span data-svelte-h="svelte-vvodup">Verification</span>  <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(data.isVerified)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
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
                    return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `True`;
                      }
                    })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `False`;
                      }
                    })}`;
                  }
                })}</div>`;
              }
            }
          )}</div></form>  <div class="space-y-4 mt-4">${each(data.verification_fileUrls, (url) => {
            return `<img${add_attribute("src", url, 0)} alt="Verification Image" class="w-full h-auto rounded-md shadow-md">`;
          })}</div></div> `;
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
  let currentPage = 1;
  let totalPages = 1;
  let searchQuery = "";
  let userData = [];
  let openVerification = false;
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
            return `Institution`;
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
          return `All Schools`;
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
                return `${validate_component(PlusOutline, "PlusOutline").$$render($$result, { size: "sm" }, {}, {})}Add Schools`;
              }
            }
          )} </div>`;
        },
        default: () => {
          return ` ${validate_component(Input, "Input").$$render(
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
          )} <select class="me-4 w-40 border xl:w-52 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 p-2"><option value="all" data-svelte-h="svelte-1mxpcvp">All Verification</option><option value="true" data-svelte-h="svelte-13czf5q">Verified</option><option value="false" data-svelte-h="svelte-1613hao">Not Verified</option></select> <select class="me-4 w-40 border xl:w-52 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 p-2"><option value="all" data-svelte-h="svelte-16ltho9">All Cities</option><option value="Dhaka" data-svelte-h="svelte-14x215w">Dhaka</option><option value="Chattogram" data-svelte-h="svelte-1a6ojwu">Chattogram</option><option value="Khulna" data-svelte-h="svelte-15fa1ze">Khulna</option><option value="Sylhet" data-svelte-h="svelte-1a0hw5q">Sylhet</option><option value="Rajshahi" data-svelte-h="svelte-hfw4p2">Rajshahi</option><option value="Mymensingh" data-svelte-h="svelte-mnxx8q">Mymensingh</option><option value="Rangpur" data-svelte-h="svelte-70t8v0">Rangpur</option><option value="Barisal" data-svelte-h="svelte-nm1h6">Barisal</option><option value="Cumilla" data-svelte-h="svelte-bqsctc">Cumilla</option><option value="Gazipur" data-svelte-h="svelte-14z34wi">Gazipur</option><option value="Narayanganj" data-svelte-h="svelte-1mnu7fy">Narayanganj</option></select> ${validate_component(Button, "Button").$$render(
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
              return ` ${each(
                [
                  "Name",
                  "Location",
                  "Email",
                  "Phone Number",
                  "Is Verified",
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
                  return ` ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.name || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "mr-12 flex items-center space-x-6 whitespace-nowrap p-4"
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="text-sm font-normal text-gray-500 dark:text-gray-400"><div class="text-base font-semibold text-gray-900 dark:text-white">${escape(user?.city)}</div> <div class="text-sm font-normal text-gray-500 dark:text-gray-400">${escape(user?.country)}</div></div> `;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.email || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.contact_number || "N/A")}`;
                    }
                  })}  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "space-x-2 p-4" }, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, { size: "sm", class: "gap-2 px-3" }, {}, {
                        default: () => {
                          return `${validate_component(EditOutline, "EditOutline").$$render($$result, { size: "sm" }, {}, {})}${escape(user.isVerified)} `;
                        }
                      })} `;
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
    })}</main> <div class="flex flex-col items-center"> <span class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">${escape(currentPage)}</span> of${escape(" ")} <span class="font-semibold text-gray-900 dark:text-white">${escape(totalPages)}</span> Entries</span> <div class="inline-flex mt-2 xs:mt-0"> <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" ${"disabled"}>Prev</button>  <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" ${"disabled"}>Next</button></div></div> ${validate_component(Verification, "Verification").$$render(
      $$result,
      {
        data: current_user,
        open: openVerification
      },
      {
        open: ($$value) => {
          openVerification = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Edit, "User").$$render(
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
