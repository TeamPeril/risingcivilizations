// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

  //Removing Extra from Calemi's Utilities
  event.remove({id: 'calemiutils:tools/sledgehammer_wood'})
  event.remove({id: 'calemiutils:tools/sledgehammer_stone'})
  event.remove({id: 'calemiutils:tools/sledgehammer_iron'})
  event.remove({id: 'calemiutils:tools/sledgehammer_gold'})
  event.remove({id: 'calemiutils:tools/sledgehammer_diamond'})
  event.remove({id: 'calemiutils:tools/sledgehammer_netherite'})
  event.remove({id: 'calemiutils:tools/sledgehammer_starlight'})
  
  event.remove({id: 'calemiutils:ingredients/knob_wood'})
  event.remove({id: 'calemiutils:ingredients/knob_stone'})
  event.remove({id: 'calemiutils:ingredients/knob_iron'})
  event.remove({id: 'calemiutils:ingredients/knob_gold'})
  event.remove({id: 'calemiutils:ingredients/knob_diamond'})
  event.remove({id: 'calemiutils:ingredients/knob_netherite'})
  event.remove({id: 'calemiutils:ingredients/knob_starlight'})
  
  event.remove({id: 'calemiutils:blocks/book_stand'})
  event.remove({id: 'calemiutils:tools/link_book_location'})  

  //Replace Calemi Recipes
  event.replaceInput({id: 'calemiutils:ingredients/motor'}, 'minecraft:redstone', 'create:precision_mechanism')
  event.replaceInput({id: 'calemiutils:blocks/mob_beacon'}, 'minecraft:iron_sword', 'minecraft:diamond')
})

onEvent('item.tags', event => {

})