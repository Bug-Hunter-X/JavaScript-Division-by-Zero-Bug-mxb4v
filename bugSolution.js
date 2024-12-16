function foo(a, b) {
  if (b === 0) {
    // Handle division by zero.  Options include:
    // 1. Return NaN:  Indicates an undefined or unrepresentable value.
    return NaN; 
    // 2. Throw an error: Provides more informative feedback.
    // throw new Error('Division by zero');
    // 3. Return a default value:  Suitable if a specific value makes sense in this context. 
    // return 0;
  } 
  return a / b;
}

console.log(foo(0, 1)); // Output: 0
console.log(foo(1, 0)); // Output: NaN
console.log(foo(1, 1)); // Output: 1