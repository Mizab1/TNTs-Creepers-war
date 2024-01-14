import { Coordinates, MCFunction, summon } from "sandstone";

/**
 * Spawns a custom creeper with the given name, tag, and coordinates.
 *
 * @param {string} name - The name of the custom creeper.
 * @param {string} tag - The tag of the custom creeper.
 * @param {Coordinates} coords - The coordinates where the custom creeper should be spawned.
 */
export const SpawnFileForCustomCreeper = (
  name: string,
  tag: string,
  coords: Coordinates
) => {
  MCFunction(
    `spawn_custom_creeper/spawn_${name.replace(" ", "_").toLocaleLowerCase()}`,
    () => {
      summon("minecraft:creeper", coords, {
        CustomName: `{"text": "${name}"}`,
        Tags: ["custom_creeper", tag],
      });
    }
  );
};
