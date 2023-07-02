cubefile = "wp-1-1-4-real.cube"
isovalue = 0.06
load @cubefile
isosurface plus cutoff @isovalue @cubefile
isosurface fill translucent
isosurface minus cutoff @{isovalue * -1} @cubefile
isosurface color red
isosurface fill translucent 
background [255,255,255]
rotate y 180
rotate z 180

