import {
  Data,
  MCFunction,
  Objective,
  ObjectiveInstance,
  Selector,
  execute,
  rel,
  say,
  scoreboard,
} from "sandstone";
import { createCustomCreeper } from "./Private/CustomCreeperComponents";

const self = Selector("@s");

/* LOAD */
var fuseObj: ObjectiveInstance<string> = Objective.create(
  "creeper_fuse_obj",
  "dummy"
);

/* TICK */
MCFunction(
  "custom_creeper/tick",
  () => {
    // Run the creeper handler every tick and create a creeper file once
    //! This function will create a file regardless of the condition status, but it will run the handler function on only "dynamic" creeper
    execute
      .as(Selector("@e", { type: "minecraft:creeper", tag: "dynamic" }))
      .at(self)
      .run(() => {
        // Detecting if the creeper is ignited and storing its Fuse in a scoreboard
        execute.store.result
          .score(self, "creeper_fuse_obj")
          // @ts-ignore
          .run.data.get.entity(self, "fuse");

        /* Start creating custom creeper from here */
        createCustomCreeper(
          "Instant Creeper",
          "instant_creeper",
          rel(0, 0, 0),
          5,
          1,
          1,
          () => {
            say("Hello");
          }
        );
      });
  },
  {
    runEachTick: true,
  }
);
