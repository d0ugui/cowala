const array =  [
  {
    souEu: true,
    responsavel: false,
    nome: 'Douglas Oliveira'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Maria Ivanilde'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Bruno Pereira'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Lucas Pereira'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Laura Pereira'
  }
]

function classificador(a, b) {
  if (a.souEu > b.souEu) {
    return -1;
  } 
  if (a.souEu < b.souEu) {
    return 1;
  }
  if (a.responsavel > b.responsavel ) {
    return -1;
  }
}

console.log(array.sort(classificador));