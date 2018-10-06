// `interface` is the most basic 
interface LinkedListNode<T> {
  value:T;
  next: LinkedListNode<T>;
}

// T = Generic type parameter. This also allows for circular reference
// This is a fallback for no type, but you can optionally set a type on class instantiation
interface ILinkedList<T> {
  first: LinkedListNode<T>;
  last: LinkedListNode<T>;
}

export class LinkedList<T> implements ILinkedList<T>{
  first: LinkedListNode<T>;
  last: LinkedListNode<T>;

  // Function takes one parameter, value, of datatype T
  // Function returns a `void`
  add(value:T):void {
    const newNode = {
      value,
      next: null
    }

    if (!this.first) {
      this.first = this.last = newNode;
    }

    else {
      this.last.next = newNode;
      this.last = newNode
    }

  }

  addBeforeFirst(value:T):void {
    const newNode = {
      value,
      next:null
    }

    if (!this.first) {
      this.first = this.last = newNode;
    }
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
  }

  toArray():T[] {
    const result:T[] = [];
    let node = this.first;
    while(node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }

}
