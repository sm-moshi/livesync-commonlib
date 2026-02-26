// Stub for Deno environment — KeyValueDB is not used in server mode.
import type { KeyValueDatabase } from "../interfaces/KeyValueDatabase.ts";

export async function OpenKeyValueDatabase(_name: string): Promise<KeyValueDatabase> {
  throw new Error("KeyValueDB is not available in the Deno server environment.");
}
