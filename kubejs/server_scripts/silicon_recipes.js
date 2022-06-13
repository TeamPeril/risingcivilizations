// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {  
  event.recipes.createCrushing(['mekanism:dust_quartz'],'minecraft:quartz')
  
  event.recipes.createMixing('2x kubejs:quartz_sand',[
  '9x minecraft:sand',
  '9x mekanism:dust_quartz'
  ])
  
  event.recipes.mekanism.enriching('kubejs:silicon_block_processed', 'kubejs:quartz_sand')
  
  event.recipes.createCutting(['9x refinedstorage:silicon'], ['kubejs:silicon_block_processed'])
  
  event.recipes.createPressing('kubejs:silicon_plate', 'refinedstorage:silicon')
  
  event.shapeless('9x refinedstorage:silicon', 'kubejs:silicon_block_processed')
  
  event.shapeless('kubejs:silicon_block_processed', '9x refinedstorage:silicon')
})
