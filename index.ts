import { LinkedList } from './LinkedList';


let genericList = new LinkedList();

genericList.add('hello');
genericList.add('test');
genericList.add('asdfasdf');
genericList.add(1);
genericList.add([1, 2]);
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