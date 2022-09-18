// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
  // Hide items in JEI here
  // event.hide('minecraft:cobblestone')
  
  event.hide('/caves_and_cliffs_mod:tinted_glass/')
  
  event.hide('/caves_and_cliffs_mod:sculk_sensor/')
  event.hide('/caves_and_cliffs_mod:sculk_full_block/')
  event.hide('/caves_and_cliffs_mod:sculk_end_block/')
  event.hide('/caves_and_cliffs_mod:sculk_trap/')
  event.hide('/caves_and_cliffs_mod:sculk_carpet/')
  
  event.hide('/caves_and_cliffs_mod:spyglass/')
  event.hide('/caves_and_cliffs_mod:brush/')
  event.hide('/caves_and_cliffs_mod:rusty_brush/')
  event.hide('/caves_and_cliffs_mod:blue_ceramic_shard/')
  event.hide('/caves_and_cliffs_mod:orange_ceramic_shard/')
  event.hide('/caves_and_cliffs_mod:ceramic_shard_1/')
  event.hide('/caves_and_cliffs_mod:ceramic_shard_2/')
  event.hide('/caves_and_cliffs_mod:ceramic_shard_3/')
  
  event.hide('/caves_and_cliffs_mod:polished_grimstone/')
  event.hide('/caves_and_cliffs_mod:polished_grimstone_stairs/')
  event.hide('/caves_and_cliffs_mod:polished_grimstone_slab/')
  event.hide('/caves_and_cliffs_mod:polished_grimstone_wall/')
  
  event.hide('/caves_and_cliffs_mod:grimstone_bricks/')
  event.hide('/caves_and_cliffs_mod:grimstone_bricks_stairs/')
  event.hide('/caves_and_cliffs_mod:grimstone_bricks_slab/')
  event.hide('/caves_and_cliffs_mod:grimstone_bricks_wall/')
  
  event.hide('/caves_and_cliffs_mod:grimstone_tiles/')
  event.hide('/caves_and_cliffs_mod:grimstone_tiles_stairs/')
  event.hide('/caves_and_cliffs_mod:grimstone_tiles_slab/')
  event.hide('/caves_and_cliffs_mod:grimstone_tiles_wall/')
  
  event.hide('/caves_and_cliffs_mod:chiseled_deepslate/')
  event.hide('/caves_and_cliffs_mod:deepslate/')
  event.hide('/caves_and_cliffs_mod:cobbled_deepslate/')
  event.hide('/caves_and_cliffs_mod:infested_deepslate/')
  
  event.hide('/caves_and_cliffs_mod:cracked_deepslate_tiles/')
  event.hide('/caves_and_cliffs_mod:cracked_deepslate_bricks/')
  event.hide('/caves_and_cliffs_mod:cracked_deepslate/')
  
  event.hide('/caves_and_cliffs_mod:cobbled_deepslate_stairs/')
  event.hide('/caves_and_cliffs_mod:cobbled_deepslate_slab/')
  event.hide('/caves_and_cliffs_mod:cobbled_deepslate_wall/')
  

  //Mekanism
  event.hide('/mekanism:mekasuit_helmet/')
  event.hide('/mekanism:mekasuit_bodyarmor/')
  event.hide('/mekanism:mekasuit_pants/')
  event.hide('/mekanism:mekasuit_boots/')
  event.hide('mekanism:module_base')
  event.hide('mekanism:module_nutritional_injection_unit')
  event.hide('mekanism:module_jetpack_unit')
  event.hide('mekanism:module_vision_enhancement_unit')
  event.hide('mekanism:module_solar_recharging_unit')
  event.hide('mekanism:module_attack_amplification_unit')
  event.hide('mekanism:module_hydraulic_propulsion_unit')
  event.hide('mekanism:module_locomotive_boosting_unit')
  event.hide('mekanism:module_dosimeter_unit')
  event.hide('mekanism:module_excavation_escalation_unit')
  event.hide('mekanism:module_electrolytic_breathing_unit')
  event.hide('mekanism:module_gravitational_modulating_unit')
  event.hide('mekanism:module_vein_mining_unit')
  event.hide('mekanism:module_farming_unit')
  event.hide('mekanism:module_teleportation_unit')
  event.hide('mekanism:module_charge_distribution_unit')
  event.hide('mekanism:module_energy_unit')
  event.hide('mekanism:module_silk_touch_unit')
  event.hide('mekanism:module_radiation_shielding_unit')
  event.hide('mekanism:module_magnetic_attraction_unit')
  event.hide('mekanism:module_inhalation_purification_unit')
  event.hide('mekanism:upgrade_energy')
  
  //Upgraded Netherite  
  
  //Ultimite
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_ingot'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_ingot')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_ingot').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_sword'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_sword')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_sword').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_pickaxe'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_pickaxe')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_pickaxe').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_shovel'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_shovel')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_shovel').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_axe'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_axe')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_axe').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_bow'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_bow')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_bow').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_crossbow'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_crossbow')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_crossbow').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_shield'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_shield')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_shield').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_helmet'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_helmet')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_helmet').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_chestplate'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_chestplate')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_chestplate').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_leggings'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_leggings')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_leggings').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_boots'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_boots')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_boots').ignoreNBT())
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_horse_armor'/)
  event.hide('upgradednetherite:ultimate_upgraded_netherite_horse_armor')
  event.hide(Item.of('upgradednetherite:ultimate_upgraded_netherite_horse_armor').ignoreNBT())
  
  //Corruptite
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_ingot'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_ingot')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_ingot').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_sword'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_sword')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_sword').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_pickaxe'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_pickaxe')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_pickaxe').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_shovel'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_shovel')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_shovel').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_axe'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_axe')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_axe').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_bow'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_bow')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_bow').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_crossbow'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_crossbow')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_crossbow').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_shield'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_shield')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_shield').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_helmet'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_helmet')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_helmet').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_chestplate'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_chestplate')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_chestplate').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_leggings'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_leggings')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_leggings').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_boots'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_boots')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_boots').ignoreNBT())
  
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_horse_armor'/)
  event.hide('upgradednetherite:corrupt_upgraded_netherite_horse_armor')
  event.hide(Item.of('upgradednetherite:corrupt_upgraded_netherite_horse_armor').ignoreNBT())
  
  
  
  //Stalwart Chorundum Sword
  event.hide(/stalwart_dungeons:chorundum_sword/)
  event.hide('stalwart_dungeons:chorundum_sword')
  event.hide(Item.of('stalwart_dungeons:chorundum_sword').ignoreNBT())
  
  //Stalwart Chorundum Shovel
  event.hide(/stalwart_dungeons:chorundum_shovel/)
  event.hide('stalwart_dungeons:chorundum_shovel')
  event.hide(Item.of('stalwart_dungeons:chorundum_shovel').ignoreNBT())
  
  //Stalwart Chorundum Pickaxe
  event.hide(/stalwart_dungeons:chorundum_pickaxe/)
  event.hide('stalwart_dungeons:chorundum_pickaxe')
  event.hide(Item.of('stalwart_dungeons:chorundum_pickaxe').ignoreNBT())
  
  //Stalwart Chorundum Pickaxe 
  event.hide(/stalwart_dungeons:chorundum_axe/)
  event.hide('stalwart_dungeons:chorundum_axe')
  event.hide(Item.of('stalwart_dungeons:chorundum_axe').ignoreNBT())
  
  //Stalwart Chorundum Hoe
  event.hide(/stalwart_dungeons:chorundum_hoe/)
  event.hide('stalwart_dungeons:chorundum_hoe')
  event.hide(Item.of('stalwart_dungeons:chorundum_hoe').ignoreNBT())
  
  //Stalwart Chorundum Armor Helmet
  event.hide(/stalwart_dungeons:chorundum_armor_helmet/)
  event.hide('stalwart_dungeons:chorundum_armor_helmet')
  event.hide(Item.of('stalwart_dungeons:chorundum_armor_helmet').ignoreNBT())
  
  //Stalwart Chorundum Armor Chestplate
  event.hide(/stalwart_dungeons:chorundum_armor_chestplate/)
  event.hide('stalwart_dungeons:chorundum_armor_chestplate')
  event.hide(Item.of('stalwart_dungeons:chorundum_armor_chestplate').ignoreNBT())
  
  //Stalwart Chorundum Armor Leggings
  event.hide(/stalwart_dungeons:chorundum_armor_leggings/)
  event.hide('stalwart_dungeons:chorundum_armor_leggings')
  event.hide(Item.of('stalwart_dungeons:chorundum_armor_leggings').ignoreNBT())
  
  //Stalwart Chorundum Armor Boots
  event.hide(/stalwart_dungeons:chorundum_armor_boots/)
  event.hide('stalwart_dungeons:chorundum_armor_leggings')
  event.hide(Item.of('stalwart_dungeons:chorundum_armor_leggings').ignoreNBT())
  
  event.hide(/calemiutils:sledgehammer_wood/)
  event.hide(/calemiutils:sledgehammer_stone/)
  event.hide(/calemiutils:sledgehammer_iron/)
  event.hide(/calemiutils:sledgehammer_gold/)
  event.hide(/calemiutils:sledgehammer_diamond/)
  event.hide(/calemiutils:sledgehammer_netherite/)
  event.hide(/calemiutils:sledgehammer_starlight/)
  
  event.hide(/calemiutils:knob_wood/)
  event.hide(/calemiutils:knob_stone/)
  event.hide(/calemiutils:knob_iron/)
  event.hide(/calemiutils:knob_gold/)
  event.hide(/calemiutils:knob_diamond/)
  event.hide(/calemiutils:knob_netherite/)
  event.hide(/calemiutils:knob_starlight/)  
  event.hide(/calemiutils:book_stand/)
  event.hide(/calemiutils:link_book_location/)
  event.hide(/calemiutils:portal_projector/)
  
  event.hide('wstweaks:lava_blade')
  event.hide('wstweaks:blaze_blade')
})