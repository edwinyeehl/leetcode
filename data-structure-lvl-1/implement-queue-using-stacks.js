class Stack {
  constructor() {
      this.stack = [];
  }    
  
  push = (x) => {
      this.stack.push(x);
  }
  
  pop = () => {
      return this.stack.pop();
  }
  
  size = () => {
      return this.stack.length;
  }
  
  peek = () => {
      return this.stack[this.stack.length - 1];
  }
}

class MyQueue {
  constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();    
  }
  
  push = (x) => {
      while (this.stack1.size() > 0) {
          const item = this.stack1.pop();
          this.stack2.push(item);
      }

      this.stack2.push(x);

      while (this.stack2.size() > 0) {
          const item = this.stack2.pop();
          this.stack1.push(item);
      }
  }
  
  peek = () => {
      return this.stack1.peek();   
  }
  
  pop = () => {
      return this.stack1.pop();
  }
  
  empty = () => {
      return this.stack1.size() === 0;
  }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */