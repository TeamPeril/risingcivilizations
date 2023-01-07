// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {  
  
  
	event.recipes.createFilling('farmersdelight:milk_bottle', [
	'minecraft:glass_bottle',
	Fluid.of('minecraft:milk', 250)
	])
	
	event.recipes.createFilling('resourcefulbees:catnip_honey_bottle', [
	'minecraft:glass_bottle',
	Fluid.of('resourcefulbees:catnip_honey', 250)
	])
	
	event.recipes.createFilling('resourcefulbees:starry_honey_bottle', [
	'minecraft:glass_bottle',
	Fluid.of('resourcefulbees:starry_honey', 250)
	])
	
	event.recipes.createFilling('resourcefulbees:rainbow_honey_bottle', [
	'minecraft:glass_bottle',
	Fluid.of('resourcefulbees:rainbow_honey', 250)
	])

})
