/*function returnSex(sex) {
  if( sex == 'M' || sex == 'm') {
    return 'Masculino';
  } else if(sex == 'F' || sex == 'f') {
    return 'Feminino';
  }
  else {
    return 'Outro';
  }
}*/

function returnSex(sex) {
  switch (sex) {
    case 'M':
      return 'Masculino';
    case 'm':
      return 'Masculino';
    case 'F':
      return 'Feminino';
    case 'f':
      return 'Feminino';
    default:
      return 'Outro';
  }
}

var sex = returnSex('m');
console.log(sex);