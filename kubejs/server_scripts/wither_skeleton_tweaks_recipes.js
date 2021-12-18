// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  //Remove OP Witherskeleton Tweaks Items
  event.remove({mod:'wstweaks', input: 'wstweaks:lava_blade'})
  event.remove({mod:'wstweaks', output: 'wstweaks:lava_blade'})
})

onEvent('item.tags', event => {

})