// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  //Remove Unbalanced Chorundum Armor & Tools
  event.remove({id: 'stalwart_dungeons:chorundum_armor_boots_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_armor_leggings_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_armor_body_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_armor_helmet_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_sword_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_hoe_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_pickaxe_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_shovel_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_axe_recipe'})
  event.shapeless('2x minecraft:diamond', ['stalwart_dungeons:chorundum', 'minecraft:diamond'])
  event.shapeless('2x minecraft:netherite_ingot', ['stalwart_dungeons:chorundum', 'minecraft:netherite_ingot'])
})

onEvent('item.tags', event => {

})