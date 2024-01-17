import type { SandstoneConfig } from "sandstone";

export default {
  name: "TNTs & Creepers War",
  description: ["A datapack by ", { text: "Mizab", color: "gold" }],
  formatVersion: 26,
  namespace: "tnts_and_creepers_war",
  packUid: "-1o439o1",
  // saveOptions: { path: "./.sandstone/output/datapack" },
  saveOptions: { world: "Testing 4" },
  onConflict: {
    default: "warn",
  },
} as SandstoneConfig;
