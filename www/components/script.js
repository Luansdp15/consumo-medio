const voltarNormal = () => {
  document.getElementById("dif").style.background = "transparent";
  document.getElementById("dif2").style.background = "transparent";
  document.getElementById("dif3").style.background = "transparent";
  document.getElementById("dif4").style.background = "transparent";
}

const calcularconsumo = () => {
  var km, gas, consumo, marca, modelo

  marca = document.querySelector("#marca").value
  modelo = document.querySelector("#modelo").value
  km = document.getElementById('km').value
  gas = document.getElementById('gas').value

  consumo = km / gas

  document.querySelector("h1").innerHTML = "Seu " + marca + " " + modelo + " fez " + consumo + " KM/L";

  voltarNormal();

  if (consumo >= 20) {
    document.getElementById("dif").style.backgroundColor = "DeepPink";
  }
  else if (consumo < 20 && consumo >= 12) {
    document.getElementById("dif2").style.backgroundColor = "DeepPink";
  }
  else if (consumo >= 8 && consumo < 12) {
    document.getElementById("dif3").style.backgroundColor = "DeepPink";
  }
  else if (consumo <= 8) {
    document.getElementById("dif4").style.backgroundColor = "DeepPink";
  }

}

