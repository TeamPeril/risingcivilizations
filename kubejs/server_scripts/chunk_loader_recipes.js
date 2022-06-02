// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

  
  event.remove({id: 'chunkloaders:basic_chunk_loader'})
  event.shaped('1x chunkloaders:basic_chunk_loader', [
    'NEN',
    'EHE',
    'NDN'
  ], {
    E: 'minecraft:ender_eye',
	D: 'minecraft:diamond_block',
	H: 'quark:diamond_heart',
	N: 'minecraft:netherite_ingot'
  })
})
