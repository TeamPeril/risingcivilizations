
// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  //Remove OP Witherskeleton Tweaks Items
  event.remove({mod:'morevanillalib', input: 'morevanillalib:obsidian_shard'})
  event.remove({mod:'morevanillalib', output: 'morevanillalib:obsidian_shard'})
})
