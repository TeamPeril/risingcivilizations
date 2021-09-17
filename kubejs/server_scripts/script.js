// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  //Item Banning--------------------------------------------------
  
  //Remove Create Block Zapper because it can cause crashes
  event.remove({id: 'create:crafting/curiosities/handheld_blockzapper'})
  
  //Remove OP Witherskeleton Tweaks Items
  event.remove({mod:'wstweaks', input: 'wstweaks:lava_blade'})
  event.remove({mod:'wstweaks', output: 'wstweaks:lava_blade'})
  
  //Remove Overpowered Armor from Upgraded Netherite
  event.remove({input: 'upgradednetherite:ultimate_upgraded_netherite_ingot'})
  event.remove({output: 'upgradednetherite:ultimate_upgraded_netherite_ingot'})
  event.remove({input: 'upgradednetherite:corrupt_upgraded_netherite_ingot'})
  event.remove({output: 'upgradednetherite:corrupt_upgraded_netherite_ingot'})
  event.remove({id: 'upgradednetherite:ender_upgraded_netherite_pearl_smithing'})
  
  //Remove OP Rat Stuff
  //event.remove({id: 'rats:rat_upgrade_god'})
  //event.remove({id: 'rats:ratlantis_helmet'}) 
  //event.remove({id: 'rats:ratlantis_chestplate'})
  //event.remove({id: 'rats:ratlantis_leggings'})
  //event.remove({id: 'rats:ratlantis_boots'})
  //event.remove({id: 'rats:ratlantis_sword'})  
  //event.remove({id: 'rats:ratlantis_pickaxe'})
  //event.remove({id: 'rats:ratlantis_shovel'})
  //event.remove({id: 'rats:ratlantis_axe'})
  //event.remove({id: 'rats:ratlantis_hoe'})
  //event.remove({id: 'rats:ratlantis_bow'})
  
  //Energy
  event.remove({id: 'mekanism:upgrade/energy'})
  
  //Get rid of Assorted Veggies
  //event.remove({id: 'rats:assorted_vegetables'})
  //event.remove({id: 'rats:little_black_worm'})
  
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
  
  //Remove Unbalanced Chorundum Armor & Tools
  event.remove({id: 'stalwart_dungeons:chorundum_armor_boots_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_armor_leggings_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_armor_body_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_armor_helmet_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_sword_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_hoe_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_pickaxe_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_shovel_recipe'})
  event.remove({id: 'stalwart_dungeons:chorundum_axe_recipe'})
  event.shapeless('2x minecraft:diamond', ['stalwart_dungeons:chorundum', 'minecraft:diamond'])
  event.shapeless('2x minecraft:netherite_ingot', ['stalwart_dungeons:chorundum', 'minecraft:netherite_ingot'])

  //Removing Extra from Calemi's Utilities
  event.remove({id: 'calemiutils:tools/sledgehammer_wood'})
  event.remove({id: 'calemiutils:tools/sledgehammer_stone'})
  event.remove({id: 'calemiutils:tools/sledgehammer_iron'})
  event.remove({id: 'calemiutils:tools/sledgehammer_gold'})
  event.remove({id: 'calemiutils:tools/sledgehammer_diamond'})
  event.remove({id: 'calemiutils:tools/sledgehammer_netherite'})
  event.remove({id: 'calemiutils:tools/sledgehammer_starlight'})
  
  event.remove({id: 'calemiutils:ingredients/knob_wood'})
  event.remove({id: 'calemiutils:ingredients/knob_stone'})
  event.remove({id: 'calemiutils:ingredients/knob_iron'})
  event.remove({id: 'calemiutils:ingredients/knob_gold'})
  event.remove({id: 'calemiutils:ingredients/knob_diamond'})
  event.remove({id: 'calemiutils:ingredients/knob_netherite'})
  event.remove({id: 'calemiutils:ingredients/knob_starlight'})
  
  event.remove({id: 'calemiutils:blocks/book_stand'})
  event.remove({id: 'calemiutils:tools/link_book_location'})
  //-------------------------------------------------------------------
  
  //Remove Recipe for Chunk Loader so its not spamable
  event.remove({id: 'weirdinggadget:weirding_gadget'})
  
  
  //Replace Calemi Recipes
  event.replaceInput({id: 'calemiutils:ingredients/motor'}, 'minecraft:redstone', 'create:precision_mechanism')
  event.replaceInput({id: 'calemiutils:blocks/mob_beacon'}, 'minecraft:iron_sword', 'minecraft:diamond')
  
  //Make Ratlantis Coin Craftable
  //event.remove({id: 'rats:chunky_cheese_token'})
  //event.recipes.create.mixing('rats:nether_cheese', [
  //'rats:cheese',
  //'minecraft:nether_star',
  //Fluid.of('create:potion', 500, {Potion:"minecraft:fire_resistance"}),
  //Fluid.of('minecraft:lava', 500)
  //]).superheated()
  
  //event.recipes.create.mixing('rats:blue_cheese', [
  //'rats:cheese',
  //'minecraft:blue_ice'
  //])
  
  //event.shaped('1x rats:chunky_cheese_token', [
    //'ECE',
    //'NTB',
    //'EUE'
  //], {
    //T: 'rats:token_piece',
	//N: 'rats:nether_cheese',
	//B: 'rats:blue_cheese',
	//E: 'minecraft:ender_eye',
	//C: 'rats:corrupt_rat_skull',
	//U: 'minecraft:totem_of_undying'
  //})
  
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
  
  //Replace Recipe for Apirary
  event.remove({id: 'resourcefulbees:t1_apiary'})  
  event.shaped('1x resourcefulbees:t1_apiary', [
    'PHP',
    'HNH',
    'PHP'
  ], {
    P: 'minecraft:purpur_block',
	N: 'minecraft:nether_star',
	H: 'resourcefulbees:t4_beehive'
  })
  
  
  //Replace Recipe for honey generator
  event.replaceInput({id: 'resourcefulbees:honey_generator'}, 'minecraft:redstone', 'create:refined_radiance')
  
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
    'HDH',
    'HUH'
  ], {
    U: 'mekanism:ultimate_control_circuit',
	H: 'mekanism:hdpe_sheet',
	D: 'minecraft:diamond_block'
  })
  
  //Filter
  event.remove({id: 'mekanism:upgrade/filter'})
  event.shaped('1x mekanism:upgrade_filter', [
    'HUH',
    'HFH',
    'HUH'
  ], {
    U: 'mekanism:ultimate_control_circuit',
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
    U: 'mekanism:ultimate_control_circuit',
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
    U: 'mekanism:ultimate_control_circuit',
	H: 'mekanism:hdpe_sheet',
	R: 'minecraft:redstone_block'
  })
  
  //Gas
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
  
  //Replace Recipies for Land Claiming
  event.replaceInput({id: 'craftabledeeds:deed_pedestal'}, 'minecraft:netherite_ingot', 'minecraft:obsidian')
  event.replaceInput({id: 'craftabledeeds:deed_pedestal'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
  
  //Create recipie for name tags
  event.remove({id: 'minecraft:name_tag'})
  event.remove({id: 'craftable_saddles:nametag'})
  event.shaped('1x minecraft:name_tag', [
    ' S ',
    ' P ',
    '   '
  ], {
    S: 'minecraft:string',
	P: 'minecraft:paper'
  })
  
  //Replace Recipe for Bread
  event.remove({type:'minecraft:crafting_shaped', id:'minecraft:bread'}) 
  event.shapeless('1x create:dough', '3x minecraft:wheat')
  
  
  //Cobbled Deepslater  
  event.stonecutting('caves_and_cliffs_mod:cobbled_deepslate_stairs', 'caves_and_cliffs_mod:cobbled_deepslate')
  event.stonecutting('caves_and_cliffs_mod:cobbled_deepslate_slab', 'caves_and_cliffs_mod:cobbled_deepslate')
  event.stonecutting('caves_and_cliffs_mod:cobbled_deepslate_wall', 'caves_and_cliffs_mod:cobbled_deepslate')
  
  //Polished Deepslate  
  event.stonecutting('caves_and_cliffs_mod:polished_grimstone_stairs', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('caves_and_cliffs_mod:polished_grimstone_slab', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('caves_and_cliffs_mod:polished_grimstone_wall', 'caves_and_cliffs_mod:polished_grimstone')
  
  //Deepslate Brick
  event.stonecutting('caves_and_cliffs_mod:grimstone_bricks', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('caves_and_cliffs_mod:grimstone_bricks_stairs', 'caves_and_cliffs_mod:grimstone_bricks')
  event.stonecutting('caves_and_cliffs_mod:grimstone_bricks_slab', 'caves_and_cliffs_mod:grimstone_bricks')
  event.stonecutting('caves_and_cliffs_mod:grimstone_bricks_wall', 'caves_and_cliffs_mod:grimstone_bricks')
  event.stonecutting('caves_and_cliffs_mod:cracked_deepslate_bricks', 'caves_and_cliffs_mod:grimstone_bricks')
  
  //Deepslate Tile
  event.stonecutting('caves_and_cliffs_mod:grimstone_tiles', 'caves_and_cliffs_mod:polished_grimstone')
  event.stonecutting('caves_and_cliffs_mod:grimstone_tiles_stairs', 'caves_and_cliffs_mod:grimstone_tiles')
  event.stonecutting('caves_and_cliffs_mod:grimstone_tiles_slab', 'caves_and_cliffs_mod:grimstone_tiles')
  event.stonecutting('caves_and_cliffs_mod:grimstone_tiles_wall', 'caves_and_cliffs_mod:grimstone_tiles')
  event.stonecutting('caves_and_cliffs_mod:cracked_deepslate_tiles', 'caves_and_cliffs_mod:grimstone_tiles')
  
  //Chiseled Deepslate
  event.stonecutting('caves_and_cliffs_mod:chiseled_deepslate', 'caves_and_cliffs_mod:polished_grimstone')
  
  //Deepslate Cobble to Deepslate
  event.smelting('1x caves_and_cliffs_mod:deepslate', 'caves_and_cliffs_mod:cobbled_deepslate')
  
  //Create Recipie Replacement
  event.replaceInput({mod: 'create'}, 'create:powdered_obsidian', '#forge:dusts/obsidian')
  
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
  event.remove({id: 'timeless_and_classic:craft_timeless_workbench'})
  event.shapeless('1x timeless_and_classic:timeless_workbench', '1x cgm:workbench')
  event.shapeless('1x cgm:workbench', '1x timeless_and_classic:timeless_workbench')
  
  //Mr.Cray's Vehicle Mod Workshop Recipie Chance
  event.replaceInput({id: 'vehicle:workstation'}, 'minecraft:chest', 'create:precision_mechanism')
  
  event.replaceInput({id: 'vehicle:fluid_extractor'}, 'minecraft:piston', 'create:precision_mechanism')
  
  event.replaceInput({id: 'vehicle:fluid_mixer'}, 'minecraft:hopper', 'create:precision_mechanism')
  
  event.replaceInput({id: 'vehicle:small_engine_wood'}, 'minecraft:furnace', 'create:precision_mechanism')
  
  event.replaceInput({id: 'vehicle:large_engine_wood'}, 'minecraft:furnace', 'create:precision_mechanism')
  
  event.replaceInput({id: 'vehicle:electric_engine_wood'}, 'minecraft:redstone', 'create:precision_mechanism')
	
  //Deepslate 
  event.smelting('1x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  event.recipes.create.crushing('2x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  event.recipes.mekanism.smelting('1x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  //event.recipes.mekanism.milling('1x minecraft:diamond', 'caves_and_cliffs_mod:deepslate_diamond_ore')
  
  event.smelting('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  event.recipes.create.crushing('8x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  event.recipes.mekanism.smelting('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  //event.recipes.mekanism.milling('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  
  event.smelting('1x minecraft:emerald', 'caves_and_cliffs_mod:deepslate_emerald_ore')
  event.recipes.create.crushing('2x minecraft:emerald', 'caves_and_cliffs_mod:deepslate_emerald_ore')
  event.recipes.mekanism.smelting('1x minecraft:emerald', 'caves_and_cliffs_mod:deepslate_emerald_ore')
  //event.recipes.mekanism.milling('2x minecraft:redstone', 'caves_and_cliffs_mod:deepslate_redstone_ore')
  
  event.smelting('2x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
  event.recipes.create.crushing('12x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
  event.recipes.mekanism.smelting('2x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
  //event.recipes.mekanism.milling('2x minecraft:lapis_lazuli', 'caves_and_cliffs_mod:deepslate_lapis_ore')
})

onEvent('item.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
  
  //Obsidian Dust
  event.get('create:powdered_obsidian').add('mekanism:dust_obsidian')
  event.get('forge:dusts/obsidian').add('create:powdered_obsidian')
  
  //Copper & Dust
  event.get('forge:ores/copper').add('caves_and_cliffs_mod:deepslate_copper_ore')
  event.get('forge:ores/copper').add('caves_and_cliffs_mod:copper_ore')
  event.get('forge:ingots/copper').add('caves_and_cliffs_mod:copper_ingot')
  event.get('forge:ingots').add('caves_and_cliffs_mod:copper_ingot')
  event.get('forge:dusts').add('create:crushed_copper_ore')
  event.get('forge:dusts/copper').add('create:crushed_copper_ore')
  
  //Iron
  event.get('forge:ores/iron').add('caves_and_cliffs_mod:deepslate_iron_ore')
  event.get('forge:ores').add('caves_and_cliffs_mod:deepslate_iron_ore')
  event.get('forge:dusts').add('create:crushed_iron_ore')
  event.get('forge:dusts/iron').add('create:crushed_iron_ore')
  
  //Gold
  event.get('forge:ores/gold').add('caves_and_cliffs_mod:deepslate_gold_ore')
  event.get('forge:ores').add('caves_and_cliffs_mod:deepslate_gold_ore')
  event.get('forge:dusts').add('create:crushed_gold_ore')
  event.get('forge:dusts/gold').add('create:crushed_gold_ore')
  
  //Lapis
  event.get('forge:ores/lapis').add('caves_and_cliffs_mod:deepslate_lapis_ore')
  event.get('forge:ores').add('caves_and_cliffs_mod:deepslate_lapis_ore')
  
  //Lead
  event.get('forge:ingots').add('eidolon:lead_ingot') //Eidolon ingot isnt taged as ingot
  event.get('forge:dusts').add('create:crushed_lead_ore')
  event.get('forge:dusts/lead').add('create:crushed_lead_ore')
  
  //Redstone
  event.get('forge:ores/redstone').add('caves_and_cliffs_mod:deepslate_redstone_ore')
  event.get('forge:ores').add('caves_and_cliffs_mod:deepslate_redstone_ore')
  
  //Coal
  event.get('forge:ores/coal').add('caves_and_cliffs_mod:deepslate_coal_ore')
  event.get('forge:ores').add('caves_and_cliffs_mod:deepslate_coal_ore')
  
  //Diamond
  event.get('forge:ores/diamond').add('caves_and_cliffs_mod:deepslate_diamond_ore')
  event.get('forge:ores').add('caves_and_cliffs_mod:deepslate_diamond_ore')
  
  //Emerald
  event.get('forge:ores/emerald').add('caves_and_cliffs_mod:deepslate_emerald_ore')
  event.get('forge:ores').add('caves_and_cliffs_mod:deepslate_emerald_ore')

  //Osmium
  event.get('forge:dusts').add('create:crushed_osmium_ore')
  event.get('forge:dusts/osmium').add('create:crushed_osmium_ore')
  
  //Uranium
  event.get('forge:dusts').add('create:crushed_uranium_ore')
  event.get('forge:dusts/uranium').add('create:crushed_uranium_ore')
  
  //Tin
  event.get('forge:dusts').add('create:crushed_tin_ore')
  event.get('forge:dusts/tin').add('create:crushed_tin_ore')
  
})