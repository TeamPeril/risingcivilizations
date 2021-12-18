// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Custom Recipe to create lava from flint + hellbark 
  event.recipes.createMixing(Fluid.of('minecraft:lava', 250),[
  'minecraft:flint',
  'biomesoplenty:hellbark_log'
  ]).heated()
  
  //Replace Recipe for Bread
  event.remove({type:'minecraft:crafting_shaped', id:'minecraft:bread'}) 
  event.shapeless('1x create:dough', '3x minecraft:wheat')
  //Create recipie for name tags
  event.remove({id: 'minecraft:name_tag'})
  event.remove({id: 'craftable_saddles:nametag'})
  event.shaped('1x minecraft:name_tag', [
    ' S ',
    ' P ',
    '   '
  ], {
    S: 'minecraft:string',
	P: 'minecraft:paper'
  })
  
  //Create Recipie Replacement
  event.replaceInput({mod: 'create'}, 'create:powdered_obsidian', '#forge:dusts/obsidian')
  
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

onEvent('item.tags', event => {

})