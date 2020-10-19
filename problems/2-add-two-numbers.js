/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const returnNode = new ListNode();
  let highestNode = returnNode;
  
  let node1 = l1;
  let node2 = l2;
  
  let carry = 0;

  while (node1 !== null || node2 !== null) {
    let sum = carry;
    
    if (node1 !== null) {
      sum += node1.val;
      node1 = node1.next;
    }
    
    if (node2 !== null) {
      sum += node2.val;
      node2 = node2.next;
    }
    
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
      
    highestNode.next = new ListNode(sum);
    highestNode = highestNode.next;
  }
  
  if (carry > 0) {
    highestNode.next = new ListNode(carry);
  }
  
  return returnNode.next;
};