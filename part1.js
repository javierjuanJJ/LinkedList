class Node {
    constructor(props) {
        this.val = props;
        this.next = null;
    }

}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const reverseList = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
};

console.log(reverseList(a));