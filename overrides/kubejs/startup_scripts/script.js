// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
  
  event.create('lootbox_stone')
  .displayName('Stone Lootbox Icon')
  .maxStackSize(1)
  
  event.create('lootbox_food')
  .displayName('Food Lootbox Icon')
  .maxStackSize(1)
  
  event.create('lootbox_iron')
  .displayName('Iron Lootbox Icon')
  .maxStackSize(1)
  
  event.create('lootbox_modern')
  .displayName('Modern Lootbox Icon')
  .maxStackSize(1)

  
})

onEvent('block.registry', event => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
  
})
