function factorial (n) {
  num = 1
  for(let i=2 ; i <=n; i++){

    num = num * i

  }

  return num
}

console.log(factorial(5));

//Big O = O(n)