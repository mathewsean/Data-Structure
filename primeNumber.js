console.log('***First Function***');

function findPrimeNumber(n){
  if(n<2){
    return false
  }

  for(let i = 2; i < n; i++){
    if(n%i === 0){
      return false
    }    
  }
  return true
}

console.log(findPrimeNumber(5));
console.log(findPrimeNumber(3));
console.log(findPrimeNumber(10));

//Big O = O(n)
console.log('***Second Function***');

function findPrimeNumber(n){
  if(n<2){
    return false
  }

  for(i=2; i < Math.sqrt(n); i++){
    if(n%i === 0){
      return false
    }
  }

  return true
}

console.log(findPrimeNumber(5));
console.log(findPrimeNumber(3));
console.log(findPrimeNumber(51));

//Big O = O(sq.rt(n))

