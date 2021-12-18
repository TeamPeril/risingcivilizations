// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
  
  event.create('fuelium_clump')
  .displayName('Fuelium Clump')
  .tooltip('Created from mixing ender sap and blaze juice. Use a mixer to convert this into liquid fuelium. Worth one bucket of fuelium.')
  .maxStackSize(4)
})

onEvent('block.registry', event => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})