// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Replace Recipe for Apirary
  event.remove({id: 'resourcefulbees:t1_apiary'})  
  event.shaped('1x resourcefulbees:t1_apiary', [
    'PHP',
    'HNH',
    'PHP'
  ], {
    P: 'minecraft:end_stone',
	N: 'minecraft:nether_star',
	H: 'resourcefulbees:t4_beehive'
  })
  
  
  //Replace Recipe for honey generator
  event.replaceInput({id: 'resourcefulbees:honey_generator'}, 'minecraft:redstone', 'create:refined_radiance')
})

onEvent('item.tags', event => {

})