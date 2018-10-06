

// T = Generic type parameter. This also allows for circular reference
// This is a fallback for no type, but you can optionally set a type on class instantiation
interface LinkedListNode<T> {
  value:T;
  next: LinkedListNode<T>;
}

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

let genericList = new LinkedList();

genericList.add('hello');
genericList.add('test');
genericList.add('asdfasdf');
genericList.add(1);
genericList.add([1,2]);
genericList.add('goodbye');

console.log('Generic List:', genericList.toArray());


let stringList = new LinkedList<string>();

stringList.add('hello');
stringList.add('test');
stringList.add('asdfasdf');
stringList.add('goodbye');


console.log("String List:", stringList.toArray());

let numberList = new LinkedList<number>();

numberList.add(1);
numberList.add(2);
numberList.add(3);
numberList.add(4);

console.log("String List:", numberList.toArray());
