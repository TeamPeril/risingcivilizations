// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  
  //Sandstone variations from chisel (because you cannot use the chisel for it)
  event.stonecutting('chisel:sandstone/cracked', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/solid_bricks', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/small_bricks', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/soft_bricks', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/cracked_bricks', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/triple_bricks', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/encased_bricks', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/chaotic_bricks', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/array', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/tiles_medium', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/tiles_large', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/tiles_small', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/chaotic_medium', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/chaotic_small', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/braid', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/dent', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/french_1', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/french_2', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/jellybean', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/layers', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/mosaic', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/ornate', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/panel', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/road', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/slanted', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/road', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/zag', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/circular', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/circularct', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/weaver', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/pillar', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/twisted', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/prism', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/cuts', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/extra/bevel_creeper', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/extra/glyphs', 'minecraft:sandstone')
  event.stonecutting('chisel:sandstone/extra/small', 'minecraft:sandstone')
  
  //Emerald variations from chisel (because you cannot use the chisel for it)
  event.stonecutting('chisel:emerald/panel', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/panelclassic', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/smooth', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/chunk', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/panel', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/goldborder', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/zelda', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/cell', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/cellbismuth', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/four', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/fourornate', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/ornate', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/masonryemerald', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/emeraldcircle', 'minecraft:emerald_block')
  event.stonecutting('chisel:emerald/emeraldprismatic', 'minecraft:emerald_block')
})

onEvent('item.tags', event => {

})