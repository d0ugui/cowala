function fibonacci(n) {
  let initialValue = [0, 1];

  for (i = 2; i < n; i++) {
    initialValue[i] = initialValue[i - 2] + initialValue[i - 1];
  }

  return initialValue;
}


console.log(fibonacci(10));