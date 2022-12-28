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

onEvent('block.modification', event => {
	let basic_blocks = [
		'refinedstorage:disk_drive',
		'refinedstorage:cable',
		'refinedstorage:64k_storage_block',
		'refinedstorage:creative_storage_block',
		'refinedstorage:64k_fluid_storage_block',
		'refinedstorage:256k_fluid_storage_block',
		'refinedstorage:1024k_fluid_storage_block',
		'refinedstorage:4096k_fluid_storage_block',
		'refinedstorage:creative_fluid_storage_block',
		'refinedstorage:external_storage',
		'refinedstorage:importer',
		'refinedstorage:exporter',
		'refinedstorage:interface',
		'refinedstorage:fluid_interface',
		'refinedstorage:storage_monitor',
		'refinedstorage:constructor',
		'refinedstorage:destructor',
		'refinedstorage:controller',
		'refinedstorage:creative_controller',
		'refinedstorage:grid',
		'refinedstorage:crafting_grid',
		'refinedstorage:pattern_grid',
		'refinedstorage:fluid_grid',
		'refinedstorage:network_reciever',
		'refinedstorage:network_transmitter',
		'refinedstorage:relay',
		'refinedstorage:detector',
		'refinedstorage:security_manager',
		'refinedstorage:wireless_transmitter',
		'refinedstorage:disk_manipulator',
		'refinedstorage:crafter',
		'refinedstorage:crafter_manager',
		'refinedstorage:crafting_monitor']
		
	let controller_blocks = [
		'refinedstorage:white_controller', 
		'refinedstorage:orange_controller', 
		'refinedstorage:magenta_controller', 
		'refinedstorage:yellow_controller', 
		'refinedstorage:lime_controller', 
		'refinedstorage:pink_controller', 
		'refinedstorage:gray_controller', 
		'refinedstorage:light_gray_controller', 
		'refinedstorage:cyan_controller', 
		'refinedstorage:purple_controller', 
		'refinedstorage:blue_controller', 
		'refinedstorage:brown_controller', 
		'refinedstorage:green_controller', 
		'refinedstorage:red_controller', 
		'refinedstorage:black_controller', 
		'refinedstorage:white_creative_controller', 
		'refinedstorage:orange_creative_controller', 
		'refinedstorage:magenta_creative_controller', 
		'refinedstorage:yellow_creative_controller', 
		'refinedstorage:lime_creative_controller', 
		'refinedstorage:pink_creative_controller', 
		'refinedstorage:gray_creative_controller', 
		'refinedstorage:light_gray_creative_controller', 
		'refinedstorage:cyan_creative_controller', 
		'refinedstorage:purple_creative_controller', 
		'refinedstorage:blue_creative_controller', 
		'refinedstorage:brown_creative_controller', 
		'refinedstorage:green_creative_controller', 
		'refinedstorage:red_creative_controller', 
		'refinedstorage:black_creative_controller']
		
	let grid_blocks = [
		'refinedstorage:white_grid',
		'refinedstorage:orange_grid',
		'refinedstorage:magenta_grid',
		'refinedstorage:yellow_grid',
		'refinedstorage:lime_grid',
		'refinedstorage:pink_grid',
		'refinedstorage:gray_grid',
		'refinedstorage:light_gray_grid',
		'refinedstorage:cyan_grid',
		'refinedstorage:purple_grid',
		'refinedstorage:blue_grid',
		'refinedstorage:brown_grid',
		'refinedstorage:red_grid',
		'refinedstorage:black_grid']
		
	let crafting_grid_blocks = [
		'refinedstorage:white_crafting_grid',
		'refinedstorage:orange_crafting_grid',
		'refinedstorage:magenta_crafting_grid',
		'refinedstorage:yellow_crafting_grid',
		'refinedstorage:lime_crafting_grid',
		'refinedstorage:pink_crafting_grid',
		'refinedstorage:gray_crafting_grid',
		'refinedstorage:light_gray_crafting_grid',
		'refinedstorage:cyan_crafting_grid',
		'refinedstorage:purple_crafting_grid',
		'refinedstorage:blue_crafting_grid',
		'refinedstorage:brown_crafting_grid',
		'refinedstorage:red_crafting_grid',
		'refinedstorage:black_crafting_grid']
		
	let pattern_grid_blocks = [
		'refinedstorage:white_pattern_grid',
		'refinedstorage:orange_pattern_grid',
		'refinedstorage:magenta_pattern_grid',
		'refinedstorage:yellow_pattern_grid',
		'refinedstorage:lime_pattern_grid',
		'refinedstorage:pink_pattern_grid',
		'refinedstorage:gray_pattern_grid',
		'refinedstorage:light_gray_pattern_grid',
		'refinedstorage:cyan_pattern_grid',
		'refinedstorage:purple_pattern_grid',
		'refinedstorage:blue_pattern_grid',
		'refinedstorage:brown_pattern_grid',
		'refinedstorage:red_pattern_grid',
		'refinedstorage:black_pattern_grid']
		
	let fluid_grid_blocks = [
		'refinedstorage:white_fluid_grid',
		'refinedstorage:orange_fluid_grid',
		'refinedstorage:magenta_fluid_grid',
		'refinedstorage:yellow_fluid_grid',
		'refinedstorage:lime_fluid_grid',
		'refinedstorage:pink_fluid_grid',
		'refinedstorage:gray_fluid_grid',
		'refinedstorage:light_gray_fluid_grid',
		'refinedstorage:cyan_fluid_grid',
		'refinedstorage:purple_fluid_grid',
		'refinedstorage:blue_fluid_grid',
		'refinedstorage:brown_fluid_grid',
		'refinedstorage:red_fluid_grid',
		'refinedstorage:black_fluid_grid']
		
	let network_blocks = [
		'refinedstorage:white_network_reciever',
		'refinedstorage:orange_network_reciever',
		'refinedstorage:magenta_network_reciever',
		'refinedstorage:yellow_network_reciever',
		'refinedstorage:lime_network_reciever',
		'refinedstorage:pink_network_reciever',
		'refinedstorage:gray_network_reciever',
		'refinedstorage:light_gray_network_reciever',
		'refinedstorage:cyan_network_reciever',
		'refinedstorage:purple_network_reciever',
		'refinedstorage:blue_network_reciever',
		'refinedstorage:brown_network_reciever',
		'refinedstorage:red_network_reciever',
		'refinedstorage:black_network_reciever',
		'refinedstorage:white_network_transmitter',
		'refinedstorage:orange_network_transmitter',
		'refinedstorage:magenta_network_transmitter',
		'refinedstorage:yellow_network_transmitter',
		'refinedstorage:lime_network_transmitter',
		'refinedstorage:pink_network_transmitter',
		'refinedstorage:gray_network_transmitter',
		'refinedstorage:light_gray_network_transmitter',
		'refinedstorage:cyan_network_transmitter',
		'refinedstorage:purple_network_transmitter',
		'refinedstorage:blue_network_transmitter',
		'refinedstorage:brown_network_transmitter',
		'refinedstorage:red_network_transmitter',
		'refinedstorage:black_network_transmitter']
		
	let relay_blocks = [
		'refinedstorage:white_relay',
		'refinedstorage:orange_relay',
		'refinedstorage:magenta_relay',
		'refinedstorage:yellow_relay',
		'refinedstorage:lime_relay',
		'refinedstorage:pink_relay',
		'refinedstorage:gray_relay',
		'refinedstorage:light_gray_relay',
		'refinedstorage:cyan_relay',
		'refinedstorage:purple_relay',
		'refinedstorage:blue_relay',
		'refinedstorage:brown_relay',
		'refinedstorage:red_relay',
		'refinedstorage:black_relay']
		
	let detector_blocks = [
		'refinedstorage:white_detector',
		'refinedstorage:orange_detector',
		'refinedstorage:magenta_detector',
		'refinedstorage:yellow_detector',
		'refinedstorage:lime_detector',
		'refinedstorage:pink_detector',
		'refinedstorage:gray_detector',
		'refinedstorage:light_gray_detector',
		'refinedstorage:cyan_detector',
		'refinedstorage:purple_detector',
		'refinedstorage:blue_detector',
		'refinedstorage:brown_detector',
		'refinedstorage:red_detector',
		'refinedstorage:black_detector']
		
	let security_blocks = [
		'refinedstorage:white_security_manager',
		'refinedstorage:orange_security_manager',
		'refinedstorage:magenta_security_manager',
		'refinedstorage:yellow_security_manager',
		'refinedstorage:lime_security_manager',
		'refinedstorage:pink_security_manager',
		'refinedstorage:gray_security_manager',
		'refinedstorage:light_gray_security_manager',
		'refinedstorage:cyan_security_manager',
		'refinedstorage:purple_security_manager',
		'refinedstorage:blue_security_manager',
		'refinedstorage:brown_security_manager',
		'refinedstorage:red_security_manager',
		'refinedstorage:black_security_manager']
		
	let wireless_transmitter_blocks = [
		'refinedstorage:white_wireless_transmitter',
		'refinedstorage:orange_wireless_transmitter',
		'refinedstorage:magenta_wireless_transmitter',
		'refinedstorage:yellow_wireless_transmitter',
		'refinedstorage:lime_wireless_transmitter',
		'refinedstorage:pink_wireless_transmitter',
		'refinedstorage:gray_wireless_transmitter',
		'refinedstorage:light_gray_wireless_transmitter',
		'refinedstorage:cyan_wireless_transmitter',
		'refinedstorage:purple_wireless_transmitter',
		'refinedstorage:blue_wireless_transmitter',
		'refinedstorage:brown_wireless_transmitter',
		'refinedstorage:red_wireless_transmitter',
		'refinedstorage:black_wireless_transmitter']
		
	let disk_manipulator_blocks = [
		'refinedstorage:white_disk_manipulator',
		'refinedstorage:orange_disk_manipulator',
		'refinedstorage:magenta_disk_manipulator',
		'refinedstorage:yellow_disk_manipulator',
		'refinedstorage:lime_disk_manipulator',
		'refinedstorage:pink_disk_manipulator',
		'refinedstorage:gray_disk_manipulator',
		'refinedstorage:light_gray_disk_manipulator',
		'refinedstorage:cyan_disk_manipulator',
		'refinedstorage:purple_disk_manipulator',
		'refinedstorage:blue_disk_manipulator',
		'refinedstorage:brown_disk_manipulator',
		'refinedstorage:red_disk_manipulator',
		'refinedstorage:black_disk_manipulator']
	
	let crafter_blocks = [
		'refinedstorage:white_crafter',
		'refinedstorage:orange_crafter',
		'refinedstorage:magenta_crafter',
		'refinedstorage:yellow_crafter',
		'refinedstorage:lime_crafter',
		'refinedstorage:pink_crafter',
		'refinedstorage:gray_crafter',
		'refinedstorage:light_gray_crafter',
		'refinedstorage:cyan_crafter',
		'refinedstorage:purple_crafter',
		'refinedstorage:blue_crafter',
		'refinedstorage:brown_crafter',
		'refinedstorage:red_crafter',
		'refinedstorage:black_crafter']
		
	let crafting_manager_blocks = [
		'refinedstorage:white_crafter_manager',
		'refinedstorage:orange_crafter_manager',
		'refinedstorage:magenta_crafter_manager',
		'refinedstorage:yellow_crafter_manager',
		'refinedstorage:lime_crafter_manager',
		'refinedstorage:pink_crafter_manager',
		'refinedstorage:gray_crafter_manager',
		'refinedstorage:light_gray_crafter_manager',
		'refinedstorage:cyan_crafter_manager',
		'refinedstorage:purple_crafter_manager',
		'refinedstorage:blue_crafter_manager',
		'refinedstorage:brown_crafter_manager',
		'refinedstorage:red_crafter_manager',
		'refinedstorage:black_crafter_manager']
		
	let crafting_monitor_blocks = [
		'refinedstorage:white_crafter_monitor',
		'refinedstorage:orange_crafter_monitor',
		'refinedstorage:magenta_crafter_monitor',
		'refinedstorage:yellow_crafter_monitor',
		'refinedstorage:lime_crafter_monitor',
		'refinedstorage:pink_crafter_monitor',
		'refinedstorage:gray_crafter_monitor',
		'refinedstorage:light_gray_crafter_monitor',
		'refinedstorage:cyan_crafter_monitor',
		'refinedstorage:purple_crafter_monitor',
		'refinedstorage:blue_crafter_monitor',
		'refinedstorage:brown_crafter_monitor',
		'refinedstorage:red_crafter_monitor',
		'refinedstorage:black_crafter_monitor']
		
	// Loop through each item in the list	
	for(blockID of basic_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of controller_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of grid_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of crafting_grid_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of pattern_grid_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of fluid_grid_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of network_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of relay_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of detector_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of security_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of wireless_transmitter_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of disk_manipulator_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of crafter_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// NOTE: DOES NOT WORK FOR SOME REASON
	for(blockID of crafting_manager_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
	
	// Loop through each item in the list	
	for(blockID of crafting_monitor_blocks)
	{
		event.modify(blockID, block => {
		  block.explosionResistance = 1200.0
		})
	}
})