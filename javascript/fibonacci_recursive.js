function fibonacci(n) {
  // base case
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("expecting 4181");
  console.log(fibonacci(19));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Problem: find the nth number in the fibonacci series and return it
base case: if n<2, return n
return fibonacci(n-1) + fibonacci(n-2)
[0, 1, 1, 2, 3], n=4
fib(3) + fib(2)
fib(2) + fib(1)  |  fib(1) + fib(0)
fib(1) + fib(0) + 1  |  1 + 0
1 + 0 + 1  |  1
2  |  1
3
*/
