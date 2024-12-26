class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(); // Dummy node to start the result list
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    // Get the values from the nodes or use 0 if the node is null
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry; // Sum the digits and carry
    carry = Math.floor(sum / 10); // Update carry for the next digit
    current.next = new ListNode(sum % 10); // Create a new node with the current digit

    // Move to the next nodes
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next; // Return the result list, skipping the dummy node
}

// Helper functions for testing
function arrayToList(arr) {
  let dummyHead = new ListNode();
  let current = dummyHead;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyHead.next;
}

function listToArray(list) {
  let result = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

// Example usage
let l1 = arrayToList([2, 4, 3]); // 342
let l2 = arrayToList([5, 6, 4]); // 465

let result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // Output: [7, 0, 8] (807 in reverse order)
