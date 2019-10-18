
var minSkatt = beregnSkatt(500000,30);
document.write(minSkatt);

function beregnSkatt(inntekt,prosent){
  var skatt = inntekt*prosent/100;
  return skatt;
}
