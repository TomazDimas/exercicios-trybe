let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  for (let x = 0; x < i; x += 1) {
    if (numbers[i] > numbers[x]) {
      let subs = numbers[i];
      numbers[i] = numbers[x];
      numbers[x] = subs;
    }
  }
}

console.log(numbers);
ss