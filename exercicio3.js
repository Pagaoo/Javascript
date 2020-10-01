var skills = ["Javascript", "ReactJS", "React Native"];

//o indexOf retorna -1 se não possuir o elemento, logo != -1 retorna o que possui igual.
function temHabilidade(skills) {
  return skills.indexOf("Javascript") != -1;
}

console.log(temHabilidade(skills));