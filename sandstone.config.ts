import type { SandstoneConfig } from "sandstone";

export default {
  name: "CustomTNT4",
  description: ["A datapack by ", { text: "Mizab", color: "gold" }],
  formatVersion: 15,
  namespace: "custom_tnt_4",
  packUid: "-1o439o1",
  // saveOptions: { path: "./.sandstone/output/datapack" },
  saveOptions: { world: "Testing 4" },
  onConflict: {
    default: "warn",
  },
} as SandstoneConfig;
