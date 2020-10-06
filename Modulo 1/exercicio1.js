var endereco = {
  rua: 'Rua dos Pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'Sao Paulo',
  uf: 'SP'
};

function mostraEndereco() {
  return "O usuario mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua \"" + endereco.rua + "\" com numero " + endereco.numero +"." 
}

console.log(mostraEndereco(endereco));