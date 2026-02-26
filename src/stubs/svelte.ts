// Minimal Svelte stub for the Deno server environment.
// SvelteDialog.ts is in the import graph via HeadlessServices, but the headless
// implementation never calls mount/unmount at runtime — only types are needed.

// deno-lint-ignore no-explicit-any
export type Component = any;

// deno-lint-ignore no-explicit-any
export function getContext(_key: unknown): any {
  return undefined;
}

export function setContext(_key: unknown, _value: unknown): void { }

// deno-lint-ignore no-explicit-any
export function mount(_component: unknown, _options: unknown): any {
  throw new Error("svelte mount() is not available in headless/Deno mode");
}

export function unmount(_component: unknown): void {
  throw new Error("svelte unmount() is not available in headless/Deno mode");
}
