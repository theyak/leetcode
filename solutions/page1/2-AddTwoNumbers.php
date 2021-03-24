<?php
/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are
 * stored in reverse order, and each of their nodes contains a single digit. Add the two numbers 
 * and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Note: This is simply backwards addition and a test if you know how to make a linked list.
 * It's marked as medium, but as it was an early leetcode problem, I wouldn't be surprised
 * if it could now be re-classified as easy.
 */

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        $list = $head = null;
        $carry = 0;
        while ($l1 || $l2) {
            
            $n1 = $l1->val ?? 0;
            $n2 = $l2->val ?? 0;
            
            $digit = $n1 + $n2 + $carry;
                       
            // Carry for next iteration
            if ($digit >= 10) {
                $carry = 1;
                $digit -= 10;
            } else {
                $carry = 0;
            }
            
            $node = new ListNode($digit);
            if ($list) {
                $list->next = $node;
            } else {
                $head = $node;
            }
            $list = $node;
            
            $l1 = $l1->next ?? null;
            $l2 = $l2->next ?? null;
        }

        if ($carry) {
            $list->next = new ListNode($carry);
        }
        
        return $head;
    }
    
}


