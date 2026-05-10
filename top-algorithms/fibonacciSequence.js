// * A series of numbers where each number is the sum of the two preceding ones, often used as an example for dynamic programming.

import readline from "readline";

const fibonacci = (n) => {
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
};

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter number of sequence to generate: ", (n) => {
  console.log(fibonacci(n));
  r1.close();
});
