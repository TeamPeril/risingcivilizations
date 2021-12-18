// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here

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