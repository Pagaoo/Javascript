//intervalos e time-outs
function exibeAlgo(){
  console.log("Aloooo")
}

//medida em mile-segundos
//setInterval, roda a função a cada 1 seg
setInterval(exibeAlgo, 1000);
//setTimeout roda a função apenas uma vez, porém com um delay de 5 seg.
setTimeout(exibeAlgo, 5000);