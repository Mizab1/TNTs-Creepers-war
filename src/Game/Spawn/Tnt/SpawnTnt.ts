import { MCFunction, playsound, rel } from "sandstone";
import { spawnTNTGeneric } from "./Generics";

const spawnRandomTNT = MCFunction("game/spawn/tnt/spawn_random_tnt", () => {
  spawnTNTGeneric("5x", 110001);
  spawnTNTGeneric("10x", 110002);
});
