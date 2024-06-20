

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CjVzdeD-.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BjQvGqnw.js"];
export const stylesheets = ["_app/immutable/assets/3.BpMvNovo.css"];
export const fonts = [];
