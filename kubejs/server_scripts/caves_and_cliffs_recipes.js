// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

	
  //Remove All Instances of Recipes involving this copper
  event.replaceInput({}, 'caves_and_cliffs_mod:copper_ingot', 'create:copper_ingot')
  event.replaceOutput({}, 'caves_and_cliffs_mod:copper_ingot', 'create:copper_ingot')
  
  //Cobbled Deepslate  
  event.stonecutting('caves_and_cliffs_mod:cobbled_deepslate_stairs', 'caves_and_cliffs_mod:cobbled_deepslate')
  event.stonecutting('2x caves_and_cliffs_mod:cobbled_deepslate_slab', 'caves_and_cliffs_mod:cobbled_deepslate')
  event.stonecutting('caves_and_cliffs_mod:cobbled_deepslate_wall', 'caves_and_cliffs_mod:cobbled_deepslate')
  
  //Polished Deepslate  
  event.stonecutting('caves_and_cliffs_mod:polished_grimstone_stairs', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('2x caves_and_cliffs_mod:polished_grimstone_slab', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('caves_and_cliffs_mod:polished_grimstone_wall', 'caves_and_cliffs_mod:polished_grimstone')
  
  //Deepslate Brick
  event.stonecutting('caves_and_cliffs_mod:grimstone_bricks', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('caves_and_cliffs_mod:grimstone_bricks_stairs', 'caves_and_cliffs_mod:grimstone_bricks')
  event.stonecutting('2x caves_and_cliffs_mod:grimstone_bricks_slab', 'caves_and_cliffs_mod:grimstone_bricks')
  event.stonecutting('caves_and_cliffs_mod:grimstone_bricks_wall', 'caves_and_cliffs_mod:grimstone_bricks')
  event.stonecutting('caves_and_cliffs_mod:cracked_deepslate_bricks', 'caves_and_cliffs_mod:grimstone_bricks')
  
  //Deepslate Tile
  event.stonecutting('caves_and_cliffs_mod:grimstone_tiles', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('caves_and_cliffs_mod:grimstone_tiles_stairs', 'caves_and_cliffs_mod:grimstone_tiles')
  event.stonecutting('2x caves_and_cliffs_mod:grimstone_tiles_slab', 'caves_and_cliffs_mod:grimstone_tiles')
  event.stonecutting('caves_and_cliffs_mod:grimstone_tiles_wall', 'caves_and_cliffs_mod:grimstone_tiles')
  event.stonecutting('caves_and_cliffs_mod:cracked_deepslate_tiles', 'caves_and_cliffs_mod:grimstone_tiles')
  
  //Chiseled Deepslate
  event.stonecutting('caves_and_cliffs_mod:chiseled_deepslate', 'caves_and_cliffs_mod:polished_grimstone')
  
  //Deepslate Cobble to Deepslate
  event.smelting('1x caves_and_cliffs_mod:deepslate', 'caves_and_cliffs_mod:cobbled_deepslate')
  
  //Deepslate 
  event.smelting('1x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  event.recipes.create.crushing('2x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  event.recipes.mekanism.smelting('1x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  //event.recipes.mekanism.milling('1x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  
  event.smelting('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  event.recipes.create.crushing('8x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  event.recipes.mekanism.smelting('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  //event.recipes.mekanism.milling('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  
  event.smelting('1x minecraft:emerald', 'caves_and_cliffs_mod:deepslate_emerald_ore')
  event.recipes.create.crushing('2x minecraft:emerald', 'caves_and_cliffs_mod:deepslate_emerald_ore')
  event.recipes.mekanism.smelting('1x minecraft:emerald', 'caves_and_cliffs_mod:deepslate_emerald_ore')
  //event.recipes.mekanism.milling('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  
  event.smelting('2x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
  event.recipes.create.crushing('12x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
  event.recipes.mekanism.smelting('2x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
  //event.recipes.mekanism.milling('2x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
})
