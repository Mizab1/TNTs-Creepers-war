import { MCFunction, rel } from "sandstone";
import { SpawnFileForCustomCreeper } from "./Private/CustomCreeperComponents";

SpawnFileForCustomCreeper("Instant Creeper", "instant_creeper", rel(0, 0, 0));

MCFunction(
  "custom_creeper/tick",
  () => {
    // Tick
  },
  {
    runEachTick: true,
  }
);
