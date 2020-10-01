var sex = 'M', idade = 21;

if(sex == 'M' && idade >= 18) {
  console.log('Maior de Idade');
}

var masculino = sex == 'M';
//O if statement pode ser passado direto para a variável, já que os var's returnam true or false
/*if(sex == 'M') {
  masculino = true;
} else {
  masculino = false;
}*/

console.log(masculino);