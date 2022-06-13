// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {  
  //Creating Gunpwoder
  event.remove({id: 'create:filling/gunpowder'})
  event.remove({id: 'mekanism:crushing/flint_to_gunpowder'})
  event.remove({id: 'mekanism:enriching/conversion/sulfur_to_gunpowder'})
  
  event.recipes.createMixing('minecraft:gunpowder', [
   Fluid.of('minecraft:lava', 1000),
  'eidolon:sulfur',
  'minecraft:flint',
  'minecraft:sand'
  ])
  
  event.replaceOutput({}, 'mekanism:dust_sulfur', 'eidolon:sulfur')
  
})
