// Numbers

const addNumbers = (number1: number, number2: number) => {
  return number1 + number2;
}

console.log(addNumbers(1, 2)) //! If you try passing arguements of type other than number, you will be yelled


// Strings

const concatenateValues = (str1: string, str2: string) => {
  return str1 + str2;
}

console.log(concatenateValues('Hi', 'Sumit')); //! If you try passing arguements of type other than string, you will be yelled


// Booleans

const isAdult = (value: boolean) => {
  return value
}

console.log(isAdult(true));

// Arrays

const Hobbies = ['Studying', 'coding', 'gaming']; // type inference

const Hobbies2: string[] = ['Studying', 'Cooking', 'Travelling'] // Type Assignment, its an array with all elements of type string

const Hobbies3: (string | number)[] = ['Studying', 3];  // Type Assignment, its an array which contains elements of type string and numbers

// Objects

const personDetails = {
  name: 'Sumit',
  age: 26
} // type inference

const personDetails1: {
  name: string;
  age: number;
} = {
  name: 'Sumit',
  age: 23
} // here we explicitly define the type of how the personDetails1 object should look like.

//! Note how we are defining the type of object here