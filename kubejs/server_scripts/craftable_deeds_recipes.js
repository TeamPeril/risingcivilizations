// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  //Replace Recipes for Land Claiming
  event.replaceInput({id: 'craftabledeeds:deed_pedestal'}, 'minecraft:netherite_ingot', 'minecraft:obsidian')
  event.replaceInput({id: 'craftabledeeds:deed_pedestal'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
})

onEvent('item.tags', event => {

})