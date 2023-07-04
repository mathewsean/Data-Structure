function recursiveFactorial (n){

  if(n === 0){
    return 1
  }


  return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial (5));


// function reverse(arr){
//   let j = arr.length-1
//   for(let i =0; i < (arr.length-1)/2; i++){
//     temp = arr[i]
//     arr[i]= arr[j-i]
//     arr[j] = temp
//   }
//   return arr
// }

// arr = [1,2,3,4]

// console.log(reverse(arr));



