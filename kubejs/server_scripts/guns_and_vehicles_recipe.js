// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  //Replace Recipe for Wheels
  event.remove({id: 'vehicle:wheel_standard'})
  event.shaped('vehicle:standard_wheel', [
    'RRR',
    'RIR',
    'RRR'
  ], {
    R: 'kubejs:rubber',
	I: 'minecraft:iron_ingot'
  })
  
  event.remove({id: 'vehicle:wheel_sports'})
  event.shaped('vehicle:sports_wheel', [
    'RRR',
    'RGR',
    'RRR'
  ], {
    R: 'kubejs:rubber',
	G: 'minecraft:gold_ingot'
  })
  
  event.remove({id: 'vehicle:wheel_racing'})
  event.shaped('vehicle:racing_wheel', [
    'RRR',
    'RDR',
    'RRR'
  ], {
    R: 'kubejs:rubber',
	D: 'minecraft:diamond'
  })
  
  event.remove({id: 'vehicle:wheel_off_road'})
  event.shaped('vehicle:off_road_wheel', [
    'RRR',
    'RDR',
    'RRR'
  ], {
    R: 'kubejs:rubber',
	D: 'minecraft:dirt'
  })
  
  event.remove({id: 'vehicle:wheel_snow'})
  event.shaped('vehicle:snow_wheel', [
    'RRR',
    'RIR',
    'RRR'
  ], {
    R: 'kubejs:rubber',
	D: 'minecraft:ice'
  })
  
  event.remove({id: 'vehicle:wheel_all_terrain'})
  event.shaped('vehicle:all_terrain_wheel', [
    'RRR',
    'RER',
    'RRR'
  ], {
    R: 'kubejs:rubber',
	E: 'minecraft:end_stone'
  })
  
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
  Fluid.of('vehicle:blaze_juice', 50),
  Fluid.of('vehicle:ender_sap', 50)
  ])
  
  event.recipes.createMixing(Fluid.of('vehicle:fuelium', 1000),[
  'kubejs:fuelium_clump'
  ]).heated()
  
  //Make engines more expensive
  event.replaceInput({id: 'vehicle:small_engine_wood'}, 'minecraft:furnace', 'create:precision_mechanism')  
  event.replaceInput({id: 'vehicle:large_engine_wood'}, 'minecraft:furnace', 'create:precision_mechanism')  
  event.replaceInput({id: 'vehicle:electric_engine_wood'}, 'minecraft:redstone', 'create:precision_mechanism')
})

onEvent('item.tags', event => {

})