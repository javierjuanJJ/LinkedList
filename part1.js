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

printLinkedList(a);