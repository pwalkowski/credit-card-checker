// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


const testCardNum = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

// Add your functions below:

function validateCred(cardNumArray) {
/*
  
  // using for loop
  
  const arrayLength = cardNumArray.length;

  let valueCheck = 0;       // each evaluated element
  let iteration = 0;        // steps
  let valueCheckSum = 0;    // the sum as we step through the array
  let numToAdd = 0;         

  for (i = arrayLength - 1; i >= 0; i--) {      // iterate through array in reverse order
    
    if (iteration === 0) valueCheck = cardNumArray[i];      // last element of array
      else if (iteration % 2 !== 0) valueCheck = cardNumArray[i] * 2;
      else valueCheck = cardNumArray[i];

    if (valueCheck > 9) numToAdd = valueCheck - 9;
      else numToAdd = valueCheck;

      valueCheckSum = valueCheckSum + numToAdd;

      iteration++;
  }

  if (valueCheckSum % 10 === 0) return true;
    else return false;

*/

// using .reduceRight() iterator

 let valueCheck = 0;    // each evaluated element
 let iteration = 0;     // steps
 let currentSum = 0;    // the sum as we step through array

  const valueCheckSum = cardNumArray.reduceRight( (accumulator, currentValue, currentIndex) => {

    if (iteration % 2 !== 0 && iteration > 0) {  // every other element starting from the one next to the last
        if (currentValue * 2 > 9) valueCheck = (currentValue * 2) - 9;
          else valueCheck = currentValue * 2;
    }
    else valueCheck = currentValue;

      iteration++;
      currentSum = accumulator + valueCheck; // currentSum is the accumulator in the next call of the callback function
      
      return currentSum;

  }, currentSum);


  if (valueCheckSum % 10 === 0) return true;
    else return false;

}

console.log(validateCred(valid1));

function findInvalidCards(array) {

    const newArray = array.filter( (element) => {

        if (validateCred(element) === false) return true;
          else return false; });

    return newArray;
}

const invalidCards = findInvalidCards(batch);

function idInvalidCardCompanies(array) {

  const invalidCardCompanies = [];

  array.forEach( (element) => {

      switch (element[0]) {

        case 3: company = 'American Express'; break;
        case 4: company = 'Visa'; break;
        case 5: company = 'Mastercard'; break;
        case 6: company = 'Discover'; break;
        default: company = 'Company not found'; break;
      }

      if (!invalidCardCompanies.includes(company)) invalidCardCompanies.push(company);
  });
    
  return invalidCardCompanies;
  }

console.log(idInvalidCardCompanies(invalidCards));

function numberStringToArray(numberString) {

  let resultArray = [];

  for (i = 0; i < numberString.length; i++) {

    resultArray.push(parseInt(numberString[i]));
  }

  return resultArray;
}

console.log(validateCred(numberStringToArray('98379258709847')));

