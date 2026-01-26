import { error } from "@sveltejs/kit";
function load({ params }) {
  const status = +params.code;
  if (isNaN(status) || status < 400 || status > 599) {
    return error(500, "Wrong code");
  } else {
    const code = status;
    error(code, "Not found");
  }
}
export {
  load
};
