// Stubs for Obsidian-specific types that don't exist in the Deno server environment.
// These are imported by upstream library files but never used at runtime in the bridge.

// deno-lint-ignore no-explicit-any
export type App = any;
// deno-lint-ignore no-explicit-any
export type Plugin = any;
// deno-lint-ignore no-explicit-any
export type ObsidianLiveSyncPlugin = any;
export default ObsidianLiveSyncPlugin;
