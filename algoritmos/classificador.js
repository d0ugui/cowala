const array =  [
  {
    souEu: false,
    responsavel: false,
    nome: 'Lucas Pereira'
  },
  {
    souEu: true,
    responsavel: false,
    nome: 'Douglas Oliveira'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Ana Leandro'
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
    nome: 'Laura Pereira'
  }
]

function classificador(arr) {
  const rst = [];

  arr.sort((a, b) => {
    if (a.souEu > b.souEu) return -1; 
    if (a.souEu < b.souEu) return 1;
    if (a.responsavel > b.responsavel) return -1;
    if (a.responsavel < b.responsavel) return 1;
    if (a.nome > b.nome) return 1;
    if (a.nome < b.nome) return -1;
    return 0;
  });

  arr.map((user) => {
    if (user.souEu) {
      rst.push(user.nome)
    } else if (user.responsavel) {
      rst.push(user.nome)
    } else {
      rst.push(user.nome)
    }
  })

  return rst;
}

console.log(classificador(array));