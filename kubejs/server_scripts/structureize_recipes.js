// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  //Cream bricks and Cream stone bricks
  event.stonecutting('2x structurize:cream_brick_slab', 'structurize:cream_bricks')
  event.stonecutting('structurize:cream_brick_stairs', 'structurize:cream_bricks')
  event.stonecutting('structurize:cream_brick_wall', 'structurize:cream_bricks')
  event.stonecutting('2x structurize:cream_stone_brick_slab', 'structurize:cream_stone_bricks')
  event.stonecutting('structurize:cream_stone_brick_stairs', 'structurize:cream_stone_bricks')
  event.stonecutting('structurize:cream_stone_brick_wall', 'structurize:cream_stone_bricks')
})

onEvent('item.tags', event => {

})