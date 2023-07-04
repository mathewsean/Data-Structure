function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){ //i =3
    let insertNumber =  arr[i] // insertnumber = 3
    let j = i - 1 // j=2
    while(j >= 0 && arr[j] > insertNumber ){ // 3>= 0 && 5 > 3
      arr[j+1] = arr[j]  //  arr[3] = 5
      j = j-1 // 1
    }
    arr[j+1] = insertNumber // 2
  }
}

const arr = [ 4, 2, 5, 3, 1 ]
insertionSort(arr)
console.log(arr);


//Big O = O(n^2) as two loops in the function for and while

//[2,4,5,3,1]
//[2,4,5,3,1]
//



