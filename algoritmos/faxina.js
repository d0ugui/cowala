const name = {
  nome: 'Douglas',
  idade: false,
  age: 18,
  primary: false,
  secondary: true, 
}

function clean(obj) {
  for (let item in obj) {
    if (!obj[item]) {
      delete obj[item];
    }
  }

  return obj;
}

console.log(clean(name));