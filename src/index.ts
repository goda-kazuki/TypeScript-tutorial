let message: String = "";
for (let i = 1; i <= 100; i++) {
    if (i > 1) {
        message += " ";
    }
    if (i % 15 === 0) {
        message += "fizzbuzz";
        continue;
    }

    if (i % 3 === 0) {
        message += "fizz";
        continue;
    }
    if (i % 5 === 0) {
        message += "buzz";
        continue;
    }
    message += String(i);
}
console.log(message);
