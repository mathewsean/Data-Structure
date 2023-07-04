class Node{
  constructor(value){
    this.value = value
    this.size = 0
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size
  }

  prepend(value){
    const node = new Node(value)

    if(this.isEmpty()){      
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value){
    const node = new Node(value)

    if(this.isEmpty()){
      this.head = node
    } else {
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insert(value, index){
    
    if(index < 0 || index > this.size){
      return
    }
    if(index === 0){
      this.prepend(value)
    } else {

      const node = new Node(value)
      let prev = this.head
      for(let i = 0; i < index-1; i++){        
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++     
    }    
  }

  removeFromIndex(index){
    if(index < 0 || index >= this.size){
      return null
    }

    let removedNode
    if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    } else {
      let prev = this.head
      for(let i=0;i < index - 1; i++){
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }          
    this.size--
    return removedNode.value
  } 



  print(){
    if(this.isEmpty()){
      console.log('List is Empty');
    }else{
      let curr = this.head
      let listValues = ''

      while(curr){
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues);
    }
  }
}


const list = new LinkedList()

console.log(list.isEmpty());
console.log(list.getSize());

list.print()

list.insert(10,0)
list.insert(20,0)
list.insert(30,2)
list.print()
console.log(list.getSize());

list.removeFromIndex(0)
list.print()

list.removeFromIndex(1)
list.print()


