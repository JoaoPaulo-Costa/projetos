// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

list1 = [];
list2 = [];

function mergeTwoLists(list1, list2) {
    combinado = [...list1,...list2];
    console.log(combinado);
    //return combinado.sort();
    return [...list1,...list2].sort();    
}

