cubefile = "wp-abs2diff.cube"
isovalue = 0.02
load @cubefile
isosurface plus cutoff @isovalue @cubefile
isosurface fill translucent
isosurface minus cutoff @{isovalue * -1} @cubefile
isosurface color red
isosurface fill translucent 
background [255,255,255]
rotate y 90
rotate z 180

