import * as universal from '../entries/pages/authentication/_slug_/_page.js';

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/authentication/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/authentication/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/32.zGd9B0q1.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/dynamic-import-helper.BxLOqBCD.js","_app/immutable/chunks/scheduler.CZChlkOT.js","_app/immutable/chunks/index.Cp7-hqOe.js"];
export const stylesheets = [];
export const fonts = [];
