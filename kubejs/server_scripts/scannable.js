// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Replace Recipe for Scanner
  event.remove({id: 'scannable:scanner'})  
  event.shaped('1x scannable:scanner', [
    'IRI',
    'ICI',
    'IEI'
  ], {
    C: 'mekanism:basic_control_circuit',
	E: 'mekanism:energy_tablet',
	I: 'minecraft:iron_ingot',
	R: 'create:redstone_link'
  })
  
  //Replace Recipe for Blank Module
  event.remove({id: 'scannable:module_blank'})  
  event.shaped('1x scannable:module_blank', [
    'ICI',
    'IGI',
    '   '
  ], {
    C: 'mekanism:basic_control_circuit',
	G: 'minecraft:gold_ingot',
	I: 'minecraft:iron_ingot'
  })

})
