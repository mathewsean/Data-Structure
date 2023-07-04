
//***First Method */
function reverse(arr){
  const revesedArray = []
  for(let i = arr.length-1; i >= 0; i--){
    revesedArray.push(arr[i])
  }
  return revesedArray
}

const arr = [1,2,3,4,5]
console.log(reverse(arr));


//***Second Method */
const revesedArray = arr.reverse()

console.log(revesedArray);

