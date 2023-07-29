// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	
	event.remove({id: 'gag:time_sand_pouch'})
	event.remove({id: 'gag:escape_rope'})
	event.remove({id: 'gag:hearthstone'})
	
	event.remove({id: 'gateways:creeper_gate_small'})
	event.remove({id: 'gateways:creeper_gate'})
	event.remove({id: 'gateways:zombie_gate_small'})
	event.remove({id: 'gateways:zombie_gate'})
	event.remove({id: 'gateways:skeleton_gate_small'})
	event.remove({id: 'gateways:skeleton_gate'})
	event.remove({id: 'gateways:witch_gate_small'})
	event.remove({id: 'gateways:witch_gate'})
	event.remove({id: 'gateways:slime_gate_small'})
	event.remove({id: 'gateways:slime_gate'})
	event.remove({id: 'gateways:enderman_gate_small'})
	event.remove({id: 'gateways:enderman_gate'})
	event.remove({id: 'gateways:spider_gate_small'})
	event.remove({id: 'gateways:spider_gate'})
	
	
	event.remove({id: 'createaddition:crafting/rolling_mill'})
	event.shaped('1x createaddition:rolling_mill', [
    'PSP',
    'ASA',
    'ACA'
  ], {
    C: 'immersiveengineering:cokebrick',
	A: 'create:andesite_alloy',
	S: 'create:shaft',
	P: '#forge:plates/iron'
  })
	
	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
	event.recipes.createMixing('immersiveengineering:cokebrick', [
	  '#forge:ingots/brick',
	  '#forge:ingots/brick',
	  '#forge:ingots/brick',
	  '#forge:ingots/brick',
	  'minecraft:clay',
	  'minecraft:clay',
	  'minecraft:clay',
	  'minecraft:clay',
	  'minecraft:deepslate'
	  ]).superheated()
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	//event.get('forge:ores').add('createindustry:bauxite')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})