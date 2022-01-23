const ex = {"fizz": "buzz", "foo": null, "bar": 42, "name": " "}

function clean(obj) {
  for (let item in obj) {
    if (!obj[item] || obj[item] === " ") {
      delete obj[item];
    }
  }

  return obj;
}

// Logando resultado
console.log(clean(ex));