 function bubbleSort (arr){
  let swapped
  do{
    swapped = false
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }    
  } while(swapped)
 }

 

 function bubbleSort(arr){

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr  
 }

function bubbleSort(arr){
  for(let i=0; i < arr.length; i++){
    for(let j = 0; j < arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr    
}
 
const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr)
 