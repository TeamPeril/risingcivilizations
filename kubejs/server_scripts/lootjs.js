// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('lootjs', event => {

	event
	.addBlockLootModifier("nether_wart_block")
	.randomChanceWithLooting(0.3, 1) // 30%
	.thenAdd("crimson_fungus");
	
	event
	.addBlockLootModifier("warped_wart_block")
	.randomChanceWithLooting(0.3, 1) // 30%
	.thenAdd("warped_fungus");
})
