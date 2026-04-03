function findDuplicatesAndSort(listA: number[], listB: number[]): number[] {

 // Find and Filter Duplicate Item

 const duplicates = listA.filter(item => listB.includes(item));


 // Sort Item

 const sorted = duplicates.sort((a, b) => a - b);

 return sorted;

}


const listA = [1, 2, 3, 5, 6, 8, 9];

const listB = [3, 2, 1, 5, 6, 0];


const result = findDuplicatesAndSort(listA, listB);

console.log(result);
