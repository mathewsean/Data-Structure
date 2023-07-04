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

  insert (value,index){
    if(index < 0 || index > size){
      return 
    }

    if(index === 0){
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head

      for(let i = 0; i < index - 1; i++){
        prev = prev.next
      }

      node.next = prev.next
      prev.next = node
      this.size++
    }    
  }

  removeFromIndex(index){
    let removedNode
    if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    } else {
      let prev = this.head
      for(let i = 0; i < index-1; i++){
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
  }

  removeValue(){
    if(this.isEmpty()){
      return null
    }
    if(this.head.value === value){
      this.head = this.head.next
      this.size--
      return value
    } else {
      let perv = this.head
      while(perv.next && perv.next.value !== value){
        perv = perv.next
      }
      if(perv.next){
        let removedNode = perv.next
        perv.next = removedNode.next
        this.size--
        return value
      }
      return null
    }
  }

  search(value){
    if(this.isEmpty()){
      return -1
    }
    
    let i = 0
    let curr = this.head

    while(curr){
      if(curr.value === value){
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }

  reverse(){
    let prev = null
    let curr = this.head

    while(curr){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }
  
  print(){
    if(this.isEmpty()){
      console.log('List is Empty');
    } else {
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

list.prepend(10)
list.prepend(20)
list.prepend(30)

list.print()

list.reverse()
list.print()