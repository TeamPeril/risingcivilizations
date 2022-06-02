// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Custom Recipe to wash dustrial decor items to make them rusty
  
  event.remove({mod:'dustrial_decor', id:'dustrial_decor:rusty_iron_nugget'})
  event.recipes.createSplashing('dustrial_decor:rusty_iron_nugget','minecraft:iron_nugget')
  
  event.remove({mod:'dustrial_decor', id:'dustrial_decor:rusty_iron_ingot'})
  event.recipes.createSplashing('dustrial_decor:rusty_iron_ingot','minecraft:iron_ingot')
  
  event.recipes.createSplashing('dustrial_decor:rusty_iron_block','minecraft:iron_block')
  
  event.remove({mod:'dustrial_decor', id:'dustrial_decor:rusty_sheet_metal'})
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal','dustrial_decor:sheet_metal')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_plating','dustrial_decor:sheet_metal_plating')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_plating_slab','dustrial_decor:sheet_metal_plating_slab')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_plating_vertical_slab','dustrial_decor:sheet_metal_plating_vertical_slab')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_plating_stairs','dustrial_decor:sheet_metal_plating_stairs')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_paneling','dustrial_decor:sheet_metal_paneling')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_siding','dustrial_decor:sheet_metal_siding')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_walling','dustrial_decor:sheet_metal_walling')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_treading','dustrial_decor:sheet_metal_treading')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_treading_slab','dustrial_decor:sheet_metal_treading_slab')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_treading_vertical_slab','dustrial_decor:sheet_metal_treading_vertical_slab')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_treading_stairs','dustrial_decor:sheet_metal_treading_stairs')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_trapdoor','dustrial_decor:sheet_metal_trapdoor')
  
  event.recipes.createSplashing('dustrial_decor:rusty_sheet_metal_door','dustrial_decor:sheet_metal_door')
  
  event.recipes.createSplashing('dustrial_decor:rusty_iron_trapdoor','minecraft:iron_trapdoor')
  
  event.recipes.createSplashing('dustrial_decor:rusty_iron_door','minecraft:iron_door')

})
