cubefile = "wp-1-1-4-abs2.cube"
isovalue = 0.008
load @cubefile
isosurface plus cutoff @isovalue @cubefile
isosurface fill translucent
background [255,255,255]
rotate z 180
