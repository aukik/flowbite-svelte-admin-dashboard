import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.C_43k7s-.js","_app/immutable/chunks/scheduler.CZChlkOT.js","_app/immutable/chunks/index.Cp7-hqOe.js"];
export const stylesheets = [];
export const fonts = [];
