import { c as create_ssr_component, v as validate_component, h as escape, l as each, f as add_attribute } from "../../../../../chunks/ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { M as Modal, T as Toolbar, E as EditOutline } from "../../../../../chunks/EditOutline.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { P as PlusOutline } from "../../../../../chunks/PlusOutline.js";
import { E as ExclamationCircleOutline, T as TrashBinSolid } from "../../../../../chunks/TrashBinSolid.js";
import { C as ChevronDownOutline, D as Dropdown, a as DropdownItem } from "../../../../../chunks/ChevronDownOutline.js";
import { C as Checkbox } from "../../../../../chunks/Checkbox.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { L as Label } from "../../../../../chunks/Label.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
const EditTeacher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  let schoolData = [];
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
        title: Object.keys(data).length ? "Edit Teacher" : "Add new user",
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
                    name: "email",
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
                return `<span data-svelte-h="svelte-af5rlc">Accreditation</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.teacher_institution_accreditation
                  },
                  {
                    value: ($$value) => {
                      data.teacher_institution_accreditation = $$value;
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
                return `<span data-svelte-h="svelte-ya95b2">School</span>  <span></span> <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(data.schoolName)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
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
                    return `${each(schoolData, (user) => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(user?.name)}, ${escape(user?.location)}`;
                        }
                      })} `;
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
                return `<span data-svelte-h="svelte-9a36tr">Designation</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.teacher_designation
                  },
                  {
                    value: ($$value) => {
                      data.teacher_designation = $$value;
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
                return `<span data-svelte-h="svelte-1bfukcj">Gender</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "gender",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.gender
                  },
                  {
                    value: ($$value) => {
                      data.gender = $$value;
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
                return `<span data-svelte-h="svelte-kpguo1">Birth Date</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "birth_date",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.birth_date
                  },
                  {
                    value: ($$value) => {
                      data.birth_date = $$value;
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
                return `<span data-svelte-h="svelte-ecako3">Phone Number</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "phone_number",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.phone_number
                  },
                  {
                    value: ($$value) => {
                      data.phone_number = $$value;
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
                return `<span data-svelte-h="svelte-10nsocv">User Bio</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "user_bio",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.user_bio
                  },
                  {
                    value: ($$value) => {
                      data.user_bio = $$value;
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
const Addnewteacher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  let user_label = "Select School";
  let tagArray = [];
  let tagData = [];
  let tag_label = "Select Tags";
  let schoolData = [];
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
        title: Object.keys(data).length ? "Add new user" : "Add new teacher",
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
              return `${escape(Object.keys(data).length ? "Save all" : "Add teacher")}`;
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
          )} ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-ya95b2">School</span> <div class="pt-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
                })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "overflow-y-auto max-h-80" }, {}, {
                  default: () => {
                    return `${each(schoolData, (user) => {
                      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(user?.name)}, ${escape(user?.location)}`;
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
                return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "email",
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
                return `<span data-svelte-h="svelte-af5rlc">Accreditation</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.teacher_institution_accreditation
                  },
                  {
                    value: ($$value) => {
                      data.teacher_institution_accreditation = $$value;
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
                return `<span data-svelte-h="svelte-9a36tr">Designation</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "student_id",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com",
                    value: data.teacher_designation
                  },
                  {
                    value: ($$value) => {
                      data.teacher_designation = $$value;
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
                return `<span data-svelte-h="svelte-1kvjhoz">Password</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "password",
                    type: "password",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.password
                  },
                  {
                    value: ($$value) => {
                      data.password = $$value;
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
                return `<span data-svelte-h="svelte-1bfukcj">Gender</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "gender",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.gender
                  },
                  {
                    value: ($$value) => {
                      data.gender = $$value;
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
                return `<span data-svelte-h="svelte-ecako3">Phone Number</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "phone_number",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.phone_number
                  },
                  {
                    value: ($$value) => {
                      data.phone_number = $$value;
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
                return `<span data-svelte-h="svelte-10nsocv">User Bio</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "user_bio",
                    type: "text",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true,
                    value: data.user_bio
                  },
                  {
                    value: ($$value) => {
                      data.user_bio = $$value;
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
          )} ${validate_component(Label, "Label").$$render($$result, { class: "col-span-6 space-y-2" }, {}, {
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
          )} <h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1ha4917">Are you sure you want to delete this Teacher?</h3> <div class="flex items-center justify-center">${validate_component(Button, "Button").$$render($$result, { color: "red", class: "mr-2" }, {}, {
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
        title: Object.keys(data).length ? "Verification Teacher" : "Add new user",
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
          )}</div></form>  <div class="space-y-4 mt-4">${each(data.verificationfileUrls, (url) => {
            return `<img${add_attribute("src", url, 0)} alt="Verification Image" class="w-full h-auto rounded-md shadow-md">`;
          })}</div></div> `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const path = "/crud/users";
const description = "CRUD users examaple - Octobrain Admin Dashboard";
const title = "Octobrain Admin Dashboard - CRUD Users";
const subtitle = "CRUD Users";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
            return `Users`;
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
          return `All teachers`;
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
                return `${validate_component(PlusOutline, "PlusOutline").$$render($$result, { size: "sm" }, {}, {})}Add teacher`;
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
              return ` ${each(
                [
                  "Name",
                  "School",
                  "Designation",
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
                  return ` ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "mr-12 flex items-center space-x-6 whitespace-nowrap p-4"
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="text-sm font-normal text-gray-500 dark:text-gray-400"><div class="text-base font-semibold text-gray-900 dark:text-white">${escape(user.name)}</div> <div class="text-sm font-normal text-gray-500 dark:text-gray-400">${escape(user.email)}</div></div> `;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.schoolName || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.teacher_designation || "N/A")}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.phone_number || "N/A")}`;
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
    })}</main>  ${validate_component(Verification, "Verification").$$render(
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
    )} ${validate_component(EditTeacher, "User").$$render(
      $$result,
      { data: current_user, open: openUser },
      {
        open: ($$value) => {
          openUser = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Addnewteacher, "Adduser").$$render(
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
