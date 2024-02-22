function isSameType(value1, value2) {
  //your js code here
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
// A function that returns true if the type of the two values is the same and false otherwise
function isSameType(value1, value2) {
  // If one of the values is NaN, return true if and only if both values are NaN
  if (isNaN(value1) || isNaN(value2)) {
    return isNaN(value1) && isNaN(value2);
  }
  // Otherwise, return true if the type of the values is the same
  return typeof value1 === typeof value2;
}

