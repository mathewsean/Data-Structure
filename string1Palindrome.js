function isPalindrome(string){
  string = string.toLowerCase()

  let left = 0
  let right = string.length - 1

  while(left<right){
    if(string[left] !== string[right]){
      console.log('false');
      return false
    }
    left++
    right--
  }
  console.log('true');
  return true
}

isPalindrome('MALAYALAM')

