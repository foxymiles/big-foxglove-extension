import { ExtensionContext } from "@foxglove/studio";

import { initExamplePanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "Big Image Example Panel", initPanel: initExamplePanel });
}
