import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x780F33E9f0A136fa22E64FE5406dae84AA6d5119");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Sword and Shield",
        description: "This NFT will give you access to DragonslayerDAO!",
        image: readFileSync("/Users/Jimmy/websharp/projects/blockchain/dao-dapp/dragonslayer-dao/scripts/assets/sword and shield clipart.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();