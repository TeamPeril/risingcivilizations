// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  
  event.remove({id: 'buildinggadgets:gadget_building'})
  event.shaped('1x buildinggadgets:gadget_building', [
    'ITI',
    'DCD',
    'ILI'
  ], {
    C: 'mekanism:advanced_control_circuit',
	T: 'mekanism:energy_tablet',
	I: 'create:iron_sheet',
	D: 'minecraft:diamond',
	L: 'create:linked_controller'
  })
  
  event.remove({id: 'buildinggadgets:gadget_exchanging'})
  event.shaped('1x buildinggadgets:gadget_exchanging', [
    'ITI',
    'DCD',
    'ILI'
  ], {
    C: 'mekanism:basic_control_circuit',
	T: 'mekanism:energy_tablet',
	I: 'create:iron_sheet',
	D: 'minecraft:diamond',
	L: 'create:linked_controller'
  })
  
  event.remove({id: 'buildinggadgets:gadget_copy_paste'})
  event.shaped('1x buildinggadgets:gadget_copy_paste', [
    'ITI',
    'ECE',
    'ILI'
  ], {
    C: 'mekanism:elite_control_circuit',
	T: 'mekanism:energy_tablet',
	I: 'create:iron_sheet',
	E: 'minecraft:emerald',
	L: 'create:linked_controller'
  })
  
  event.remove({id: 'buildinggadgets:gadget_destruction'})
  event.shaped('1x buildinggadgets:gadget_destruction', [
    'ITI',
    'ECE',
    'ILI'
  ], {
    C: 'mekanism:ultimate_control_circuit',
	T: 'mekanism:energy_tablet',
	I: 'create:iron_sheet',
	E: 'minecraft:ender_pearl',
	L: 'create:linked_controller'
  })
  
  event.remove({id: 'buildinggadgets:template_manager'})
  event.shaped('1x buildinggadgets:template_manager', [
    'ICI',
    'EGE',
    'ICI'
  ], {
    C: 'mekanism:basic_control_circuit',
	I: 'create:golden_sheet',
	E: 'minecraft:emerald',
	G: 'buildinggadgets:gadget_building'
  })
  
})
