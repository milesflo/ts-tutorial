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
