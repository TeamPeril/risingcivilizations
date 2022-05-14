// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

  
  event.remove({id: 'chunkloaders:basic_chunk_loader'})
  event.shaped('1x chunkloaders:basic_chunk_loader', [
    'BEB',
    'ECE',
    'BEB'
  ], {
    E: 'minecraft:ender_eye',
	C: 'minecraft:nether_star',
	B: 'quark:biotite'
  })
})

onEvent('item.tags', event => {

})