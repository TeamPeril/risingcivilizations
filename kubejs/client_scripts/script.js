// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
  // Hide items in JEI here
  // event.hide('minecraft:cobblestone')
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
  
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_ingot'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_sword'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_pickaxe'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_shovel'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_axe'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_bow'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_shield'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_helmet'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_chestplate'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_leggings'/)
  event.hide(/'upgradednetherite:ultimate_upgraded_netherite_boots'/)
  event.hide(/'upgradednetherite:corrupt_upgraded_netherite_ingot'/)
  
  event.hide(/rats:assorted_vegetables/)
  event.hide(/rats:little_black_worm/)
  event.hide(/rats:confit_byaldi/)
  event.hide(/rats:potato_pancake/)  
  event.hide(/rats:rat_upgrade_god/)
  event.hide(/rats:ratlantis_helmet/) //Doesnt Work
  event.hide(/rats:ratlantis_chestplate/) //Doesnt Work
  event.hide(/rats:ratlantis_leggings/) //Doesnt Work
  event.hide(/rats:ratlantis_boots/) //Doesnt Work
  event.hide(/rats:ratlantis_sword/)  //Doesnt Work
  event.hide(/rats:ratlantis_pickaxe/) //Doesnt Work
  event.hide(/rats:ratlantis_shovel/) //Doesnt Work
  event.hide(/rats:ratlantis_axe/) //Doesnt Work
  event.hide(/rats:ratlantis_hoe/) //Doesnt Work
  event.hide(/rats:ratlantis_bow/) //Doesnt Work
  
  event.hide(/stalwart_dungeons:chorundum_sword/)
  event.hide(Item.of('stalwart_dungeons:chorundum_shovel').ignoreNBT()) //Doesnt Work
  event.hide(/stalwart_dungeons:chorundum_pickaxe/) //Doesnt Work
  event.hide(/stalwart_dungeons:chorundum_axe/) //Doesnt Work
  event.hide(/stalwart_dungeons:chorundum_hoe/) //Doesnt Work
  event.hide(/stalwart_dungeons:chorundum_armor_helmet/) //Doesnt Work
  event.hide(/stalwart_dungeons:chorundum_armor_chestplate/) //Doesnt Work
  event.hide(/stalwart_dungeons:chorundum_armor_leggings/) //Doesnt Work
  event.hide(/stalwart_dungeons:chorundum_armor_boots/) //Doesnt Work
  
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
})