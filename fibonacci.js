// Warmup Fibonacci

//simplified Iterative Fibonacci sum
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

//Iterative Fibonacci Array
function fibs(number) {
  if (number <= 0) return [];

  let sequence = [];
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
// Recursive Fibonacci array
function fibsRec(number) {
  if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else if (number > 2) {
    let prevFibonacci = fibsRec(number - 1);
    return [
      ...prevFibonacci,
      prevFibonacci[number - 2] + prevFibonacci[number - 3],
    ];
  }
}
