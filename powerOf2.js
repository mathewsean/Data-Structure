console.log('***First Function***');

function isPowerOf2(n){
  if(n < 1){
    return false
  }

  while(n > 1){
    if(n%2 !== 0){
      return false
    }
    n = n/2
  }
  return true
}

console.log(isPowerOf2(1));
console.log(isPowerOf2(2));
console.log(isPowerOf2(5));
console.log(isPowerOf2(8));

//Big O = O(logn)

//Bitwise Operator

console.log('***Bitwise Operator Second Function***');

function isPowerOf2Bitwise(n){
  if(n<1){
    return false
  }

  return (n & (n-1)) === 0
}

console.log(isPowerOf2Bitwise(1));
console.log(isPowerOf2Bitwise(2));
console.log(isPowerOf2Bitwise(5));
console.log(isPowerOf2Bitwise(8));