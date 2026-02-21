import * as universal from '../entries/pages/authentication/_slug_/_page.js';

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/authentication/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/authentication/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/32.CPYX1sXY.js","_app/immutable/chunks/D6kgxu3v.js","_app/immutable/chunks/BxLOqBCD.js","_app/immutable/chunks/D2EQe8lx.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = [];
export const fonts = [];
