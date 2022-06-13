// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {  
  //Create Rubber and Belts
  event.recipes.createCompacting(['kubejs:rubber_raw', 'farmersdelight:tree_bark'], ['#minecraft:logs'])
  
  event.smelting('kubejs:rubber', 'kubejs:rubber_raw')
  
  
  event.remove({id: 'create:crafting/kinetics/belt_connector'})
  event.shaped('1x create:belt_connector', [
    'RRR',
    'RKR',
    'RRR'
  ], {
    K: 'minecraft:dried_kelp',
	R: 'kubejs:rubber'
  })

})
