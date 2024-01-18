import { MCFunction, NBT, Objective, Selector, kill } from "sandstone";
import { AddGravity } from "./CustomTnt/Auxillary/AddGravityToTnt";
import { AddDarkness } from "./CustomTnt/Auxillary/GhostTnt/AddDarkness";
import { decrementFuseTime } from "./CustomTnt/Fuse";
import { handler, setTntblock } from "./CustomTnt/Tick";
import { hitGround } from "./Items/Dynamite";
import { Fireball } from "./Objects/Fireball";

const fuseTimeObj = Objective.create("fuse_time_obj", "dummy");
const rngObj = Objective.create("rng_obj", "dummy");
const privateObj = Objective.create("private_obj", "dummy");

export const fuseTime = fuseTimeObj("@s");

export const self = Selector("@s");

const tick = MCFunction(
  "tick",
  () => {
    // TNT related
    setTntblock();
    handler();

    // Dynamite
    hitGround();

    // Disable slots of the Armor stand disguised as Custom TNT
    // teleportSlime();
    // spawnSlime();
    decrementFuseTime();

    // Aux TNT functions
    AddGravity();
    AddDarkness();

    // Fireball
    Fireball();

    // Kill the TNT item on the ground
    kill(
      Selector("@e", {
        type: "minecraft:item",
        nbt: { Item: { id: "minecraft:tnt", Count: NBT.byte(1) } },
      })
    );
  },
  { runEachTick: true }
);
