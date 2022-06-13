// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
  
  event.create('fuelium_clump')
  .displayName('Fuelium Clump')
  .tooltip('Created by mixing ender sap and blaze juice. Use a mixer to convert this into liquid fuelium. Worth one bucket of fuelium.')
  .maxStackSize(4)
  
  event.create('osmium_sheet')
  .displayName('Osmium Sheet')
  .tooltip('Created by putting an osmium ingot into a Mechanical Press.')
  .maxStackSize(64)
  
    event.create('osmium_sheet_large')
  .displayName('Large Osmium Sheet')
  .tooltip('Created by using a mechanical press on 4 osmium sheets in a basin.')
  .maxStackSize(64)
  
  event.create('logic_unit')
  .displayName('Logic Unit')
  .tooltip('Created by using a mechanical saw on enriched redstone.')
  .maxStackSize(64)
  
  event.create('cache_unit')
  .displayName('Cache Unit')
  .tooltip('Created by using a mechanical saw on enriched redstone.')
  .maxStackSize(64)
  
  event.create('bus_unit')
  .displayName('Bus Unit')
  .tooltip('Created by using a mechanical saw on enriched redstone.')
  .maxStackSize(64)
  
  event.create('clock_unit')
  .displayName('Clock Unit')
  .tooltip('Created by using a mechanical saw on enriched redstone.')
  .maxStackSize(64)
  
  event.create('incomplete_basic_control_circuit')
  .type('create:sequenced_assembly')
  .displayName('Incomplete Assembeled Basic Control Circuit')
  
  event.create('assembled_control_circuit')
  .displayName('Assembled Control Circuit')
  .maxStackSize(64)
  
  event.create('rubber')
  .displayName('Rubber')
  .maxStackSize(64)
  
  event.create('rubber_raw')
  .displayName('Raw Rubber')
  .maxStackSize(64)
  
  event.create('silicon_plate')
  .displayName('Silicon Plate')
  .maxStackSize(64)

  
})

onEvent('block.registry', event => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
  
  event.create('quartz_sand').material('sand').hardness('0.5').displayName('Quartz Sand')
  event.create('silicon_block_processed').material('stone').hardness('0.5').displayName('Processed Silicon Block')
})