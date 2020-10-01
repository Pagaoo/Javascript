var usuarios = [
  {
    nome: 'Diego',
    skills: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Gabriel',
    skills: ['VueJS', 'Ruby On Rails', 'Elixir']
  }
];

//Puxa o array escolhido para percorre-lo. a função join, pega o array escolhido e no intervalo de cada frase, colocar algo no meio e concatena os elementos.
for(usuario of usuarios) {
  console.log("O " +usuario.nome+ " possui as habilidades " +usuario.skills.join(", ") + ".");
}