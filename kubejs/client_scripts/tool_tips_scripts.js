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
				
	tooltip.add(['craftabledeeds:filled_deed'], 'Place on deed pedestal to protect land.')
	tooltip.add(['craftabledeeds:empty_deed'], 'Use to claim a 8x8 chunk area of land.')
	tooltip.add(['craftabledeeds:deed_pedestal'], 
	'Place non-empty deed on this to activate land protection. Warning: If a player finds your deed pedestal they can deactivate it by right clicking it, resulting in a explosion and the drop of a nether star, the area becoming claimable again by others after an hour.')

})