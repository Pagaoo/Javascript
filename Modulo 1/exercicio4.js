var anosEstudo = 7;

function experiencia(anos) {
  if(anos <= 1) {
    return 'Iniciante'
  }
  else if (anos <= 3) {
    return 'Intemediario'
  }
  else if (anos <= 6) {
    return 'Avancado'
  }
  else {
    return 'Jedi Master'
  }
}

console.log(experiencia(anosEstudo));