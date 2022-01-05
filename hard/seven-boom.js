// Create a function that takes an array of numbers and return "Boom!"
// if the digit 7 appears in the array.
// Otherwise, return "there is no 7 in the array".

const sevenBoom = (array) => {
  const hasDigitSeven = (number) => {
    return number
      .toString()
      .split("")
      .find((digit) => digit === "7");
  };

  const hasSevenOnNumber = array.find(
    (number) => hasDigitSeven(number) === "7"
  );

  if (hasSevenOnNumber) return "Boom!";

  return "there is no 7 in the array";
};

console.log(sevenBoom([2, 6, 7, 9, 3]), "Boom!");
console.log(sevenBoom([76, 55, 44, 32]), "Boom!");
console.log(sevenBoom([33, 68, 400, 5]), "there is no 7 in the array");
console.log(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array");
console.log(sevenBoom([76, 55, 44, 32]), "Boom!");
console.log(sevenBoom([35, 4, 9, 37]), "Boom!");
