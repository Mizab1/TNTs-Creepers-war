import { playsound, rel, setblock, summon, NBT, MCFunction } from "sandstone";

/**
 * A function that spawns a TNT entity with custom properties.
 *
 * @param {string} tag - The tag to assign to the TNT entity.
 * @param {number} customModelData - The custom model data value to assign to the spawned armor stand's endermite spawn egg.
 * @return {() => void} A function that, when called, spawns the TNT entity and an armor stand with custom properties.
 */
export const spawnTNTGeneric = (tag: string, customModelData: number) => {
  const spawningFunction = MCFunction(
    `game/spawn/tnt/tnt_functions/spawn_${tag}`,
    () => {
      playsound("minecraft:block.grass.place", "block", "@a", rel(0, 0, 0));
      setblock(rel(0, 0, 0), "minecraft:tnt");
      summon("minecraft:armor_stand", rel(0, 1, 0), {
        NoGravity: NBT.byte(1),
        Invisible: NBT.byte(1),
        Tags: [`tnt.${tag}`, `tnt.as`],
        ArmorItems: [
          {},
          {},
          {},
          {
            id: "minecraft:endermite_spawn_egg",
            Count: NBT.byte(1),
            tag: { CustomModelData: customModelData },
          },
        ],
        DisabledSlots: 63,
      });
    }
  );
  spawningFunction();
};
