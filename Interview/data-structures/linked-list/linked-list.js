class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Adds element at the end of the list
  append(value) {
    const newNode = {value, next: null}

    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode

    this.tail = newNode;
  }

  // Adds element at the start of the linked list
  prepend(value) {
    const newNode = {value, next: this.head};

    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }

  find(value) {
    if (!this.head) return null;

    let currNode = this.head;

    while(currNode) {
      if (currNode.value === value) return currNode;

      currNode = currNode.next;
    }

    return null;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = {value, next: existingNode.next};
      existingNode.next = newNode;
    }

    return null;
  }

  delete(value) {
    if (!this.head) return;

    while(this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currNode = this.head;

    while(currNode.next) {
      if (currNode.next.value === value) {
        currNode = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }

    if (this.tail.value === value) this.tail = currNode;
  }

  toArray() {
    const elements = [];

    let currNode = this.head;

    while(currNode) {
      elements.push(currNode);
      currNode = currNode.next;
    }

    return elements;
  }
}




