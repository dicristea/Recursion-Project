// Warmup Fibonacci
console.log("---beginning---");
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(number) {
  if (number <= 0) return [];

  let sequence = [];
  for (let i = 0; i < number; i++) {
    if ((i = 0)) {
      sequence.push(0);
    } else if ((i = 1)) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  console.log(sequence);

  //   return sequence;
}

function fibsRec(number) {
  let array = [];
  if (number < 2) return number;
  if (number >= 2) {
    return fibsRec(number - 1) + fibsRec(number - 2);
  }
}

function fibonacci(num) {
  let a = 0;
  let b = 1;
  let temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
