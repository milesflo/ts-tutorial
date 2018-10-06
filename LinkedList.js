"use strict";
exports.__esModule = true;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    // Function takes one parameter, value, of datatype T
    // Function returns a `void`
    LinkedList.prototype.add = function (value) {
        var newNode = {
            value: value,
            next: null
        };
        if (!this.first) {
            this.first = this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
    };
    LinkedList.prototype.addBeforeFirst = function (value) {
        var newNode = {
            value: value,
            next: null
        };
        if (!this.first) {
            this.first = this.last = newNode;
        }
        else {
            newNode.next = this.first;
            this.first = newNode;
        }
    };
    LinkedList.prototype.toArray = function () {
        var result = [];
        var node = this.first;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        return result;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var genericList = new LinkedList();
genericList.add('hello');
genericList.add('test');
genericList.add('asdfasdf');
genericList.add(1);
genericList.add([1, 2]);
genericList.add('goodbye');
console.log('Generic List:', genericList.toArray());
var stringList = new LinkedList();
stringList.add('hello');
stringList.add('test');
stringList.add('asdfasdf');
stringList.add('goodbye');
console.log("String List:", stringList.toArray());
var numberList = new LinkedList();
numberList.add(1);
numberList.add(2);
numberList.add(3);
numberList.add(4);
console.log("String List:", numberList.toArray());
