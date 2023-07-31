import LinkedList from './linked-list.mjs';

const list = LinkedList();

list.append(1);
list.append(2);
list.append(4);
list.append(5);
list.append(6);

console.log(list.toString());

list.prepend(0);

console.log(list.toString());
console.log(list.getSize());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));

list.pop();

console.log(list.toString());
console.log(list.contains(5));
console.log(list.contains(8));
console.log(list.find(3));
console.log(list.find(5));

list.insertAt(3, 3);
list.removeAt(5);

console.log(list.toString());
