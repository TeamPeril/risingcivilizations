// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  //Replace Gun Workbench Recipe
  event.remove({id: 'cgm:workbench'})
  event.shaped('1x cgm:workbench', [
    'OUO',
    'HCH',
    'H H'
  ], {
    O: 'mekanism:pellet_polonium',
	U: 'mekanism:pellet_plutonium',
	H: 'mekanism:hdpe_sheet',
	C: 'mekanism:ultimate_control_circuit'
  })
  
  //Remove timeless_and_classic bench recipe and just make it an alternative to the original workbench
  event.remove({id: 'timeless_and_classic:craft_timeless_workbench'})
  event.shapeless('1x timeless_and_classic:timeless_workbench', '1x cgm:workbench')
  event.shapeless('1x cgm:workbench', '1x timeless_and_classic:timeless_workbench')
  
  //Change Vehicle Workbench Recipe
  event.replaceInput({id: 'vehicle:workstation'}, 'minecraft:chest', 'create:precision_mechanism')
  
  //Remove Fluid Extractor because it is unecessary
  event.remove({id: 'vehicle:fluid_extractor'})
  
  //Remove Fluid Mixer because it is unecessary
  event.remove({id: 'vehicle:fluid_mixer'})  
  
  //Replace Recipes with Fluid Extractor/Mixer with create mixer 
  event.recipes.createMixing(Fluid.of('vehicle:blaze_juice', 1000),[
  'minecraft:blaze_rod'
  ])
  event.recipes.createMixing(Fluid.of('vehicle:ender_sap', 1000),[
  'minecraft:ender_pearl'
  ])
  event.recipes.createMixing('kubejs:fuelium_clump',[
  Fluid.of('vehicle:blaze_juice', 250),
  Fluid.of('vehicle:ender_sap', 250)
  ]).heated()
  
  event.recipes.createMixing(Fluid.of('vehicle:fuelium', 1000),[
  'kubejs:fuelium_clump'
  ])
  
  //Make engines more expensive
  event.replaceInput({id: 'vehicle:small_engine_wood'}, 'minecraft:furnace', 'create:precision_mechanism')  
  event.replaceInput({id: 'vehicle:large_engine_wood'}, 'minecraft:furnace', 'create:precision_mechanism')  
  event.replaceInput({id: 'vehicle:electric_engine_wood'}, 'minecraft:redstone', 'create:precision_mechanism')
})

onEvent('item.tags', event => {

})