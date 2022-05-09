// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('item.tooltip', tooltip => {
    tooltip.add(['ironchest:iron_chest',
				'ironchest:gold_chest',
				'ironchest:diamond_chest',
				'ironchest:copper_chest',
				'ironchest:silver_chest',
				'ironchest:crystal_chest',
				'ironchest:obsidian_chest',
				'ironchest:dirt_chest']
				, 'Cannot be used with create contraptions.')
				
	tooltip.add(['betterendforge:aeternium_hammer',
				'betterendforge:iron_hammer',
				'betterendforge:golden_hammer',
				'betterendforge:diamond_hammer',
				'betterendforge:netherite_hammer',
				'betterendforge:thallasium_hammer',
				'betterendforge:terminite_hammer',]
				, 'Used for crafting, not mining.')
				
	tooltip.add(['omnis:ravaged_hammer',
				'omnis:haunted_hammer']
				, 'A combat hammer, not for mining.')
				
	tooltip.add(['stalwart_dungeons:tungsten_hammer',
				'stalwart_dungeons:nether_hammer',
				'stalwart_dungeons:wooden_hammer',
				'stalwart_dungeons:stone_hammer',
				'stalwart_dungeons:iron_hammer',
				'stalwart_dungeons:iron_hammer',
				'stalwart_dungeons:golden_hammer',
				'stalwart_dungeons:diamond_hammer',
				'stalwart_dungeons:netherite_hammer']
				, 'A combat and mining hammer.')
})