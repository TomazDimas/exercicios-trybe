const sum = (...elementos) => elementos.reduce((acc, curr) => {
  console.log(acc);
  console.log(curr);
  return acc + curr
});

console.log(sum(1, 2, 3, 5, 10));