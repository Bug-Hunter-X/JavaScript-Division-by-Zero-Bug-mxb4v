# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: division by zero.  The `foo` function attempts to divide `a` by `b`, but does not handle the case where `b` is 0. This results in `Infinity` being returned.  The solution demonstrates how to handle this situation gracefully.

## Bug

The original code is in `bug.js`.  Observe that when calling the function with 1 as the first argument and 0 as the second argument, it produces `Infinity` as output, which is unexpected in many scenarios. 

## Solution

The corrected version is in `bugSolution.js`.  It uses an `if` statement to check for division by zero and returns a more appropriate value (in this case, `NaN`) or throws an error, avoiding the `Infinity` output.