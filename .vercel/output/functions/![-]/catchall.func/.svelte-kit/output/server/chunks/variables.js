const imgDir = "https://flowbite-admin-dashboard.vercel.app/images";
const imagesPath = (src, ...subdirs) => [imgDir, ...subdirs, src].filter(Boolean).join("/");
export {
  imagesPath as i
};
