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
  event.get('forge:dusts').add('create:crushed_copper_ore')
  event.get('forge:dusts/copper').add('create:crushed_copper_ore')
  
  //Iron
  event.get('forge:dusts').add('create:crushed_iron_ore')
  event.get('forge:dusts/iron').add('create:crushed_iron_ore')
  
  //Gold
  event.get('forge:dusts').add('create:crushed_gold_ore')
  event.get('forge:dusts/gold').add('create:crushed_gold_ore')
  
  //Lead
  event.get('forge:ingots').add('eidolon:lead_ingot') //Eidolon ingot isnt taged as ingot
  event.get('forge:dusts').add('create:crushed_lead_ore')
  event.get('forge:dusts/lead').add('create:crushed_lead_ore')
  

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