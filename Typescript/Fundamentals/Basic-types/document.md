## Core Types used in typescript

* Number
* Strings
* Boolean
* Array
* Objects
* enum
* tuple
* any

## Type Assignment vs Type inference

<u>Type Assignment</u>

If you explicitly define the type of the variable/function, then it is called type assignment

Example

```javascript
  const hobbies: strings[] = ['Coding', 'Gaming', 'Travelling']
```

Here we are explicitly telling typescript that, `hobbies` will be array, where all elements will be of type string.


<u>Type inference</u>

When you do not explicitly define the type of the variable/function, typescript by looking at the value of the variable, it inferes the type accordingly

Example

```javascript
const hobbies = ['Coding','Gaming','Cooking']
```
Here, we are not defining the type, but based on the values of `hobbies` typescript will automatically assume that `hobbies` is an array and all the elements are of type `string`