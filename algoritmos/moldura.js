const template = ['+', '-'];

//* A - Número de items por linha
//* B - Número de linhas

function moldura(a, b) {
  if (!a > 0 && b > 0) {
    console.log('Os números precisam ser maiores que zero.');
  }

  for (i = 0; i < b; i++) {
    if (i === 0 && i !== a ) {  
      a <= 1 
      ? console.log(template[0])
      : console.log(template[0], template[1].repeat((a - 2)), template[0]) 
    } else if (i === (b - 1)) {
      a <= 1
      ? console.log(template[0])
      : console.log(template[0], template[1].repeat((a - 2)), template[0])
    } else {
      a <= 1 
      ? console.log(template[1])
      : console.log(template[1], ' '.repeat((a - 2)), template[1])
      ;
    }
  }
}

moldura(9, 6);