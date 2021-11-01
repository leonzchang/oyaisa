class Node{
    constructor(value){
        this.node = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.length = 0
        this.head =  null
    }

    push(element){
        let node = new Node(element)

        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            let tail = this.head
            while(tail.next !== null){
                tail = tail.next
            }
            tail.next = node
        }
        this.length++
    }

    pop(){
        if(this.length>0){
            let current = this.head
            let prev
            while(current.next !== null){
                prev = current
                current = current.next
            }
            if(prev){
                prev.next = null
            }
            this.length--

            return current.node
        }else{
            return "no element!"
        }
    }

    size(){
        return this.length
    }
}


// demo
const stack = new Stack()
console.log('stack size: ',stack.size())
console.log('push element a !')
stack.push("a")
console.log('push element b !')
stack.push("b")
console.log('push element c !')
stack.push("c")
console.log('push element d !')
stack.push("d")
console.log('stack size: ',stack.size())
console.log('pop element: ',stack.pop())
console.log('stack size: ',stack.size())