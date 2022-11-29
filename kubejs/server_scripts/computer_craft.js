// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Replace Recipe for Computer
  event.remove({id: 'computercraft:computer_normal'})  
  event.shaped('1x computercraft:computer_normal', [
    'III',
    'ICI',
    'IPI'
  ], {
    C: 'mekanism:basic_control_circuit',
	I: 'create:iron_sheet',
	P: 'refinedstorage:basic_processor'
  })
  
  //Replace Recipe for Advanced Computer
  event.remove({id: 'computercraft:computer_advanced_upgrade'}) 
  event.remove({id: 'computercraft:computer_advanced'})  
  event.shaped('1x computercraft:computer_advanced', [
    'III',
    'ICI',
    'IPI'
  ], {
    C: 'mekanism:advanced_control_circuit',
	I: 'create:golden_sheet',
	P: 'refinedstorage:improved_processor'
  })
  
  //Replace Recipe for Pocket Computer
  event.remove({id: 'computercraft:pocket_computer_normal'})  
  event.shaped('1x computercraft:pocket_computer_normal', [
    ' I ',
    'ICI',
    ' P '
  ], {
    C: 'mekanism:elite_control_circuit',
	I: 'create:iron_sheet',
	P: 'refinedstorage:advanced_processor'
  })
  
  //Replace Recipe for Advanced Pocket Computer
  event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
  event.remove({id: 'computercraft:pocket_computer_advanced'})  
  event.shaped('1x computercraft:pocket_computer_advanced', [
	' I ',
    'ICI',
    ' P '
  ], {
    C: 'mekanism:elite_control_circuit',
	I: 'create:golden_sheet',
	P: 'refinedstorage:advanced_processor'
  })
  
  event.replaceInput({mod: 'computercraft'}, '#forge:stone', 'create:iron_sheet')
  event.replaceInput({mod: 'computercraft'}, 'minecraft:iron_ingot', 'create:iron_sheet')
  event.replaceInput({mod: 'computercraft'}, 'minecraft:gold_ingot', 'create:golden_sheet')
  
  //---------- ADVANCED PERIPHERALS ------------------------
  
  
  //Replace Recipe for Peripheral Casing
  event.remove({id: 'advancedperipherals:peripheral_casing'})  
  event.shaped('1x advancedperipherals:peripheral_casing', [
    'IRI',
    'RCR',
    'IRI'
  ], {
    C: 'mekanism:basic_control_circuit',
	I: 'create:iron_sheet',
	R: 'minecraft:redstone'
  })
  
  //Replace Recipe for Chunk Loader
  event.remove({id: 'advancedperipherals:chunk_controller'})  
  event.shaped('1x advancedperipherals:chunk_controller', [
    'IRI',
    'RLR',
    'ICI'
  ], {
    C: 'mekanism:basic_control_circuit',
	L: 'chunkloaders:single_chunk_loader',
	I: 'create:iron_sheet',
	R: 'minecraft:redstone'
  })
  
  //Replace Recipe for AR Goggles
  event.remove({id: 'advancedperipherals:ar_goggles'})  
  event.shaped('1x advancedperipherals:ar_goggles', [
    ' C ',
    'GSG',
    ' E '
  ], {
    G: '#forge:glass/black',
	S: 'minecraft:stick',
	E: 'minecraft:ender_pearl',
	C: 'mekanism:basic_control_circuit'
  })
  
  //Replace Recipe for Memory Chip
  event.remove({id: 'advancedperipherals:memory_card'})  
  event.shaped('1x advancedperipherals:memory_card', [
    'III',
    'ICI',
    'IRI'
  ], {
    C: 'mekanism:basic_control_circuit',
	I: 'minecraft:iron_nugget',
	R: 'minecraft:redstone'
  })

})
