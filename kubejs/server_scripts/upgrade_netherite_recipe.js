// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

  //Remove Overpowered Armor from Upgraded Netherite
  event.remove({input: 'upgradednetherite:ultimate_upgraded_netherite_ingot'})
  event.remove({output: 'upgradednetherite:ultimate_upgraded_netherite_ingot'})
  event.remove({input: 'upgradednetherite:corrupt_upgraded_netherite_ingot'})
  event.remove({output: 'upgradednetherite:corrupt_upgraded_netherite_ingot'})
  event.remove({id: 'upgradednetherite:ender_upgraded_netherite_pearl_smithing'})
})

onEvent('item.tags', event => {

})