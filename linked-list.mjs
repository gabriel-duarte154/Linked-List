import Node from './node.mjs';

function LinkedList() {
  const linkedList = {};

  const createHead = (value) => {
    linkedList.head = Node();
    linkedList.head.value = value;
  };

  const append = (value) => {
    if (!linkedList.head) {
      createHead(value);
      return;
    }

    let currentNode = linkedList.head;

    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = Node();
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
  };

  const prepend = (value) => {
    if (!linkedList.head) {
      createHead(value);
      return;
    }

    const preinsert = Node(value);
    preinsert.value = value;
    preinsert.next = linkedList.head;
    linkedList.head = preinsert;
  };

  const getSize = () => {
    let node = linkedList.head;
    let size = 0;
    while (node) {
      node = node.next;
      size++;
    }
    return size;
  };

  const head = () => {
    return linkedList.head;
  };

  const tail = () => {
    let currentNode = linkedList.head;
    let tail = null;

    while (currentNode) {
      tail = currentNode;
      currentNode = currentNode.next;
    }

    return tail;
  };

  const at = (index) => {
    if (index > getSize() || index < 0) return undefined;

    let currentNode = linkedList.head;
    let currentIndex = 0;

    while (currentIndex <= index) {
      if (currentIndex === index) return currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
  };

  const pop = () => {
    let currentNode = linkedList.head;

    if (getSize() === 1) {
      delete linkedList.head;
      return;
    }

    while (currentNode) {
      if (currentNode.next.next === null) {
        currentNode.next = null;
      }
      currentNode = currentNode.next;
    }
  };

  const contains = (value) => {
    let currentNode = linkedList.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  };

  const find = (value) => {
    let currentNode = linkedList.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) return index;
      index++;
      currentNode = currentNode.next;
    }

    return null;
  };

  const toString = () => {
    let currentNode = linkedList.head;
    let string = '';

    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    return (string += ` null`);
  };

  const insertAt = (value, index) => {
    const size = getSize();

    if (index > size) return append(value);
    if (index <= 0) return prepend(value);

    const previus = at(index - 1);
    const newNode = Node();
    newNode.value = value;
    newNode.next = previus.next;
    previus.next = newNode;
  };

  const removeAt = (index) => {
    const size = getSize();

    if (index >= size - 1) return pop();
    if (index <= 0) {
      linkedList.head = at(1);
      return;
    }

    const removeNode = at(index);
    const previusNode = at(index - 1);
    previusNode.next = removeNode.next;
  };

  return {
    append,
    prepend,
    getSize,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export default LinkedList;
