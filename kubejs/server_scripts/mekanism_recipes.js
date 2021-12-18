// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Energy
  event.remove({id: 'mekanism:upgrade/energy'})
  
  //Get rid of mekanism meka armor & upgrades
  event.remove({id: 'mekanism:mekasuit_helmet'})
  event.remove({id: 'mekanism:mekasuit_bodyarmor'})
  event.remove({id: 'mekanism:mekasuit_pants'})
  event.remove({id: 'mekanism:mekasuit_boots'})
  event.remove({id: 'mekanism:module_base'})
  event.remove({id: 'mekanism:module_nutritional_injection_unit'})
  event.remove({id: 'mekanism:module_jetpack_unit'})
  event.remove({id: 'mekanism:module_vision_enhancement_unit'})
  event.remove({id: 'mekanism:module_solar_recharging_unit'})
  event.remove({id: 'mekanism:module_attack_amplification_unit'})
  event.remove({id: 'mekanism:module_hydraulic_propulsion_unit'})
  event.remove({id: 'mekanism:module_locomotive_boosting_unit'})
  event.remove({id: 'mekanism:module_dosimeter_unit'})
  event.remove({id: 'mekanism:module_excavation_escalation_unit'})
  event.remove({id: 'mekanism:module_electrolytic_breathing_unit'})
  event.remove({id: 'mekanism:module_gravitational_modulating_unit'})
  event.remove({id: 'mekanism:module_vein_mining_unit'})
  event.remove({id: 'mekanism:module_farming_unit'})
  event.remove({id: 'mekanism:module_teleportation_unit'})
  event.remove({id: 'mekanism:module_charge_distribution_unit'})
  event.remove({id: 'mekanism:module_energy_unit'})
  event.remove({id: 'mekanism:module_silk_touch_unit'})
  event.remove({id: 'mekanism:module_radiation_shielding_unit'})
  event.remove({id: 'mekanism:module_magnetic_attraction_unit'})
  event.remove({id: 'mekanism:module_inhalation_purification_unit'})
  
  //Adding Compatability between Farmer's Delight and the Bio Generator
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'farmersdelight:cabbage')
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'farmersdelight:tomato')
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'farmersdelight:onion')
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'farmersdelight:rice_panicle')
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'farmersdelight:rice')
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'farmersdelight:cabbage_seeds')
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'farmersdelight:tomato_seeds')
  
  //Replace Recipies For Mekanism Energy Producing Machines
  event.replaceInput({id: 'mekanismgenerators:generator/heat'}, 'mekanism:ingot_osmium', 'create:refined_radiance')
  event.replaceInput({id: 'mekanismgenerators:generator/solar'}, '#forge:ingots/iron', 'create:refined_radiance')
  event.replaceInput({id: 'mekanism:electrolytic_core'}, 'mekanism:dust_iron', 'create:refined_radiance') //This is for gas generator
  event.replaceInput({id: 'mekanismgenerators:bio_generator'}, 'mekanism:basic_control_circuit', 'create:refined_radiance')
  event.remove({id: 'mekanismgenerators:generator/wind'})
  event.shaped('1x mekanismgenerators:wind_generator', [
    'OPO',
    'OEO',
    'OBO'
  ], {
    E: 'mekanism:energy_tablet',
	P: 'create:precision_mechanism',
	B: 'mekanism:basic_control_circuit',
	O: 'mekanism:ingot_osmium'
  })
  
  //Replace Recipies For Mekanism utility Machines
  event.replaceInput({id: 'mekanism:steel_casing'}, 'mekanism:ingot_osmium', 'create:precision_mechanism')
  
  //Replace Recipies For Mekanism Energy Tablets
  event.replaceInput({id: 'mekanism:energy_tablet'}, 'minecraft:gold_ingot', 'create:refined_radiance')
  event.remove({id: 'mekanism:energy_tablet'})
  event.shaped('1x mekanism:energy_tablet', [
    'RGR',
    'IEI',
    'RGR'
  ], {
    R: 'minecraft:redstone',
	I: 'mekanism:alloy_infused',
	G: 'minecraft:gold_ingot',
	E: 'create:refined_radiance'
  })
  
  //Replace Recipe Mekanism Upgrades  
  
  //Speed
  event.remove({id: 'mekanism:upgrade/speed'})
  event.shaped('1x mekanism:upgrade_speed', [
    'HUH',
    'HGH',
    'HUH'
  ], {
    U: 'mekanism:advanced_control_circuit',
	H: 'mekanism:hdpe_sheet',
	G: 'minecraft:gold_ingot'
  })
  
  //Filter
  event.remove({id: 'mekanism:upgrade/filter'})
  event.shaped('1x mekanism:upgrade_filter', [
    'HUH',
    'HFH',
    'HUH'
  ], {
    U: 'mekanism:advanced_control_circuit',
	H: 'mekanism:hdpe_sheet',
	F: 'create:attribute_filter'
  })
  
  //Muffle
  event.remove({id: 'mekanism:upgrade/muffling'})
  event.shaped('1x mekanism:upgrade_muffling', [
    'HUH',
    'HWH',
    'HUH'
  ], {
    U: 'mekanism:advanced_control_circuit',
	H: 'mekanism:hdpe_sheet',
	W: '#forge:wool'
  })
  
  //Gas
  event.remove({id: 'mekanism:upgrade/gas'})
  event.shaped('1x mekanism:upgrade_gas', [
    'HUH',
    'HRH',
    'HUH'
  ], {
    U: 'mekanism:advanced_control_circuit',
	H: 'mekanism:hdpe_sheet',
	R: 'minecraft:redstone_block'
  })
  
  //Anchor
  event.remove({id: 'mekanism:upgrade/anchor'})
  event.shaped('1x mekanism:upgrade_anchor', [
    'HUH',
    'HNH',
    'HUH'
  ], {
    U: 'mekanism:ultimate_control_circuit',
	H: 'mekanism:hdpe_sheet',
	N: 'minecraft:nether_star'
  })
  
  //Replace Recipe Mekanism Jetpack
  event.remove({id: 'mekanism:jetpack'})
  event.shaped('1x mekanism:jetpack', [
    'SUS',
    'HTH',
    ' H '
  ], {
    U: 'mekanism:ultimate_control_circuit',
	T: 'mekanism:basic_chemical_tank',
	H: 'mekanism:hdpe_sheet',
	S: 'mekanism:ingot_steel'
  })
  
  //Replace Recipe for Atomic Disassebler
  event.remove({id: 'mekanism:atomic_disassembler'})  
  
  event.shaped('1x mekanism:atomic_disassembler', [
    'SNS',
    'SAS',
    'SRS'
  ], {
    N: 'mekanism:pellet_polonium',
	A: 'mekanism:alloy_atomic',
	R: 'mekanism:hdpe_rod',
	S: 'mekanism:hdpe_sheet'
  })
  
  //Replace Recipie for Teleporter
  event.replaceInput({id: 'mekanism:teleporter'}, 'mekanism:basic_control_circuit', 'mekanism:ultimate_control_circuit')
  event.replaceInput({id: 'mekanism:teleporter'}, 'mekanism:teleportation_core', 'mekanism:pellet_plutonium')
  event.replaceInput({id: 'mekanism:teleporter'}, 'mekanism:steel_casing', 'mekanism:teleportation_core')
  event.remove({id: 'mekanism:portable_teleporter'})  
  event.shaped('1x mekanism:portable_teleporter', [
    'FAF',
    'PTP',
    'FPF'
  ], {
    P: 'mekanism:pellet_plutonium',
	T: 'mekanism:teleporter',
	A: 'mekanism:pellet_antimatter',
	F: 'mekanism:teleporter_frame'
  })
  
  //Recipie Compatability between create and mekanism  
  event.recipes.mekanism.crushing('create:cinder_flour', 'minecraft:netherrack')
})

onEvent('item.tags', event => {

})