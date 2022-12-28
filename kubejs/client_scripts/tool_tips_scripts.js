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
				
	tooltip.add(['minecraft:crimson_fungus', 'minecraft:warped_fungus']
				, 'Needs bonemeal to grow. Can only be grown on netherrack.')

})