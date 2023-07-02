cubefile = "wp-abs2.cube"
isovalue = 0.1
load @cubefile
isosurface plus cutoff @isovalue @cubefile
isosurface fill translucent
background [255,255,255]
rotate y 90
rotate z 180
