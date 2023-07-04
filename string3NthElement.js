function findString(string, num){

  let mString = ''
  let index = 0
  
  for(i=0; i < string.length; i++){

    if(i < string.length - num ){

      mString += string[i+num]      

    }else{
      
      mString += string[index]
      index++
    }
    
  }

  return mString  

}

console.log(findString('goodmorning', 4));
