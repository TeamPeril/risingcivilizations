// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

	event.shaped('1x chimes:copper_chimes', [
	' W ',
	' S ',
	' C '
	], {
	S: 'minecraft:string',
	W: '#minecraft:wooden_slabs',
	C: 'create:copper_ingot'
	})

	event.shaped('1x chimes:amethyst_chimes', [
		' W ',
		' S ',
		' A '
	  ], {
		S: 'minecraft:string',
		W: '#minecraft:wooden_slabs',
		A: 'caves_and_cliffs_mod:amethyst_shard'
	  })
})
