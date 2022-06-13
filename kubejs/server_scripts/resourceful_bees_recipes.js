
// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Make all Honey Comb Blocks crushable
  event.recipes.mekanism.crushing('9x resourcefulbees:catnip_honeycomb', 'resourcefulbees:catnip_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:starry_honeycomb', 'resourcefulbees:starry_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:coal_honeycomb', 'resourcefulbees:coal_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:creeper_honeycomb', 'resourcefulbees:creeper_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:dragon_honeycomb', 'resourcefulbees:dragon_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:emerald_honeycomb', 'resourcefulbees:emerald_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:ender_honeycomb', 'resourcefulbees:ender_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:gold_honeycomb', 'resourcefulbees:gold_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:iron_honeycomb', 'resourcefulbees:iron_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:lapis_honeycomb', 'resourcefulbees:lapis_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:netherite_honeycomb', 'resourcefulbees:netherite_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:nether_quartz_honeycomb', 'resourcefulbees:nether_quartz_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:pigman_honeycomb', 'resourcefulbees:pigman_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:redstone_honeycomb', 'resourcefulbees:redstone_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:rgbee_honeycomb', 'resourcefulbees:rgbee_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:skeleton_honeycomb', 'resourcefulbees:skeleton_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:wither_honeycomb', 'resourcefulbees:wither_honeycomb_block')
  event.recipes.mekanism.crushing('9x resourcefulbees:zombie_honeycomb', 'resourcefulbees:zombie_honeycomb_block')
  
  //Replace Recipe for Apirary
  event.remove({id: 'resourcefulbees:t1_apiary'})  
  event.shaped('1x resourcefulbees:t1_apiary', [
    'PHP',
    'HNH',
    'PHP'
  ], {
    P: 'minecraft:end_stone',
	N: 'minecraft:nether_star',
	H: 'resourcefulbees:t4_beehive'
  })
  
  //Tier 4 Hive
  event.remove({id: 'resourcefulbees:t4_hive_upgrade'})  
  event.shaped('1x resourcefulbees:t4_hive_upgrade', [
    'CHC',
    'HBH',
    'CHC'
  ], {
    C: 'resourcefulbees:gold_honeycomb_block',
	B: 'minecraft:honey_block',
	H: 'resourcefulbees:t3_hive_upgrade'
  })
  
  event.remove({id: 'resourcefulbees:t4_beehive_nests'})  
  event.shaped('1x resourcefulbees:t4_beehive', [
    'CHC',
    'HBH',
    'CHC'
  ], {
    C: 'resourcefulbees:gold_honeycomb_block',
	B: 'minecraft:honey_block',
	H: 'resourcefulbees:t3_beehive'
  })
  
  //Tier 3 Hive
  
  event.remove({id: 'resourcefulbees:t3_hive_upgrade'})  
  event.shaped('1x resourcefulbees:t3_hive_upgrade', [
    'CHC',
    'HBH',
    'CHC'
  ], {
    C: 'resourcefulbees:iron_honeycomb_block',
	B: 'minecraft:honey_block',
	H: 'resourcefulbees:t2_hive_upgrade'
  })
  
  event.remove({id: 'resourcefulbees:t3_beehive_nests'})  
  event.shaped('1x resourcefulbees:t3_beehive', [
    'CHC',
    'HBH',
    'CHC'
  ], {
    C: 'resourcefulbees:iron_honeycomb_block',
	B: 'minecraft:honey_block',
	H: 'resourcefulbees:t2_beehive'
  })
  
  //Tier 2 Hive
  
  event.remove({id: 'resourcefulbees:t2_hive_upgrade'})  
  event.shaped('1x resourcefulbees:t2_hive_upgrade', [
    'CHC',
    'HBH',
    'CHC'
  ], {
    C: 'resourcefulbees:coal_honeycomb_block',
	B: 'minecraft:honey_block',
	H: 'resourcefulbees:t1_hive_upgrade'
  })
  
  event.remove({id: 'resourcefulbees:t2_beehive_nests'})  
  event.shaped('1x resourcefulbees:t2_beehive', [
    'CHC',
    'HBH',
    'CHC'
  ], {
    C: 'resourcefulbees:coal_honeycomb_block',
	B: 'minecraft:honey_block',
	H: 'resourcefulbees:t1_beehive'
  })
  
 //Tier 1 Hive
  
  event.remove({id: 'resourcefulbees:t1_hive_upgrade'})  
  event.shaped('1x resourcefulbees:t1_hive_upgrade', [
    'CCC',
    'CPC',
    'CCC'
  ], {
    C: 'minecraft:honeycomb_block',
	P: '#minecraft:planks',
  })
  
  event.remove({id: 'resourcefulbees:t1_beehive'})  
  event.shaped('1x resourcefulbees:t1_beehive', [
    'CCC',
    'CHC',
    'CCC'
  ], {
    C: 'minecraft:honeycomb_block',
	H: '#minecraft:beehives',
  })
  
  
  //Replace Recipe for honey generator
  event.replaceInput({id: 'resourcefulbees:honey_generator'}, 'minecraft:redstone', 'create:refined_radiance')
})

onEvent('item.tags', event => {

})