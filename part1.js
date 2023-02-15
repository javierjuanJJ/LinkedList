class Node {
    constructor(props) {
        this.val = props;
        this.next = null;
    }

}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


const printLinkedList = (head) => {
  if (head != null){
    printLinkedList(head.next);
    console.log(head.val);
  }
}

const sumList = (head) => {
  if (head === null){
      return 0;
  }
  return head.val + sumList(head.next);
}

printLinkedList(a);

const getNodeValue = (head, index) => {
    let count = 0;
    let current = head;
    while (current !== null) {
        if (count === index) return current.val;
        current = current.next;
        count += 1;
    }
    return null;
};
console.log("Node 2 : " + getNodeValue(a,2));