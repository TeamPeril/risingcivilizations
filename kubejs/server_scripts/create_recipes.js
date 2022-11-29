// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {  
  
  //Create Chunk Loader
  event.replaceInput({mod: 'createchunkloading'}, 'minecraft:beacon', 'chunkloaders:single_chunk_loader')
  
  //Custom Recipe to create lava & sulfur from flint + Crimson Bark
  event.remove({id: 'create:mixing/lava_from_cobble'})
  event.recipes.createMixing([Fluid.of('minecraft:lava', 100), Item.of('eidolon:sulfur').withChance(0.2), Item.of('minecraft:blackstone')],[
  'minecraft:flint',
  '#minecraft:crimson_stems'
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
  
  event.replaceInput({mod: 'create'}, 'minecraft:coal_ore', '#forge:ores/coal')
  
  event.replaceInput({mod: 'create'}, 'minecraft:lapis_ore', '#forge:ores/lapis')
  
  event.replaceInput({mod: 'create'}, 'minecraft:diamond_ore', '#forge:ores/diamond')
  
  event.replaceInput({mod: 'create'}, 'minecraft:emerald_ore', '#forge:ores/emerald')
  
  event.replaceInput({mod: 'create'}, 'minecraft:redstone_ore', '#forge:ores/redstone')

})
