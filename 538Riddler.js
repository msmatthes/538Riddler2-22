//Created By Maxwell Matthes

//recursiveSearch(rightProd: number[], botProd: number[], i: number, fNumbers: number[], rLen: number, bLen: number): null
function recursiveSearch(rightProd, botProd, i, fNumbers, rLen, bLen){
  for(let x = Math.pow(10, bLen-1); x < Math.pow(10, bLen); ++x){
    let tArray = convertNumb(x); //Sets tArray (temporary array) to the array returned by convertNumb.
    if(tArray[bLen] === rightProd[i]){ //Checks the sum of the number digits in tArray against the "product" number of the row
      fNumbers.push(tArray); //If the product matches, add the array to fNumbers
      if(i !== rLen-1){ //If we are not iterating on the last row
        ++i; //increase i, which counts the rows, by 1
        recursiveSearch(rightProd, botProd, i, fNumbers, rLen, bLen); //Run recursive search on the next row
        fNumbers.pop(); //Get rid of the previously tested last row
        --i;//Decrease i, so that the program knows we are on the correct row
      }
      else{ //If we are on the last row
        let t = 1;
        for(let j = 0; j < bLen; ++j){ //These two for loops iterate through the array fNumbers, and find the product of the columns, and makes sure it matches the required product
          let sum = 1;
          for(let k = 0; k < rLen; ++k){
            sum *= fNumbers[k][j];
          }
          t = (sum === botProd[j]) ? t : 0;
        }
        if(t === 1){ //If all comumns match, print the solution
          printArray(fNumbers);
        }
        fNumbers.pop();
      }
    }
  }
}

//This function takes an integer, and returns an array with the format [digit1, digit2,..., Last Digit, Product Of Digits]
//convertNumb(p: Number): number[]
function convertNumb(p){
  let fin = [];
  let prod = 1;
  for(let x = Math.pow(10, p.toString().length-1) ; x >= 1; x/=10){
    let n = Math.floor(p/x);
    fin.push(n);
    p-=n*x;
    prod *= n;
  }
  fin.push(prod);
  return fin;
}

//Prints the formatted array
//printArray(fNumbers: number[]): NULL
function printArray(fNumbers){
  for(let i = 0; i < fNumbers.length; ++i){
    let sum = 0;
    let count = 1;
    for(let j = 0; j < fNumbers[i].length-1; ++j){
      sum += fNumbers[i][j] * count;
      count *= 10;
    }
    console.log(sum.toString(), '\n');
  }
}

let rightProd = [1458, 128, 2688, 125];
let botProd = [960, 384, 630, 270];
let i = 0;
let fNumbers = [];
recursiveSearch(rightProd, botProd, i, fNumbers, rightProd.length, botProd.length);
console.log("Found all possible Combos!");
