//Created By Maxwell Matthes

//recursiveSearch(rightProd: number[], botProd: number[], i: number, fNumbers: number[]): null
function recursiveSearch(rightProd, botProd, i, fNumbers, rLen, bLen){
  for(let x = Math.pow(10, bLen-1); x < Math.pow(10, bLen); ++x){
    let tArray = convertNumb(x);
    if(tArray[3] === rightProd[i]){
      fNumbers.push(tArray);
      if(i !== rLen-1){
        ++i;
        recursiveSearch(rightProd, botProd, i, fNumbers, rLen, bLen);
        fNumbers.pop();
        --i;
      }
      else{
        let t = 1;
        for(let j = 0; j < 3; ++j){
          let sum = 1;
          for(let k = 0; k < 7; ++k){
            sum *= fNumbers[k][j];
          }
          t = (sum === botProd[j]) ? t : 0;
        }
        if(t === 1){
          console.log(fNumbers);
        }
        fNumbers.pop();
      }
    }
  }
}

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

let rightProd = [280, 168, 162, 360, 60, 256, 126];
let botProd = [183708, 245760, 117600];
let i = 0;
let fNumbers = [];
recursiveSearch(rightProd, botProd, i, fNumbers, rightProd.length, botProd.length);
console.log("Found all possible Combos!);
