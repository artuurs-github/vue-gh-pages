import { Store } from "@store/index.ts";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
