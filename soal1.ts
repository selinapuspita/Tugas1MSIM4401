let start = 1;
let isOdd = true;

for (let i = 1; i <= 10; i++) {
  console.log(`Perulangan 10 ke-${i}:`);

  let sum = 0;
  let count = 0;

  while (count < 5) {
    if ((isOdd && start % 2 !== 0) || (!isOdd && start % 2 === 0)) {
      console.log(start);
      sum += start;
      count++;
    }
    start++;
  }

  console.log("--------------------------");
  console.log(`Jumlah: ${sum}\n`);

  isOdd = !isOdd;
}
