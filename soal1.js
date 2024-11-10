var start = 1;
var isOdd = true;
for (var i = 1; i <= 10; i++) {
    console.log("Perulangan 10 ke-".concat(i, ":"));
    var sum = 0;
    var count = 0;
    while (count < 5) {
        if ((isOdd && start % 2 !== 0) || (!isOdd && start % 2 === 0)) {
            console.log(start);
            sum += start;
            count++;
        }
        start++;
    }
    console.log("--------------------------");
    console.log("Jumlah: ".concat(sum, "\n"));
    isOdd = !isOdd;
}
