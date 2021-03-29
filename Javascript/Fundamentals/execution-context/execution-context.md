## Execution Context

Execution context in javascript has 2 phases

* Memory allocation phase, also known as (Variable Environment, creation phase)
> All the variables and functions are allocated in the memory in the form of key : value pairs. All the variables are given a value of undefined and functions have their full code.

* Code execution phase, also known as (Thread of execution)
> In this phase, the code execution takes places


Javascript maintains the order of execution of these execution context using a call stack.