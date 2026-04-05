export function findDuplicatesAndSort(listA: number[], listB: number[]): number[] {

 // Find and Filter Duplicate Item

 const duplicates = listA.filter(item => listB.includes(item));


 // Sort Item

 const sorted = duplicates.sort((a, b) => a - b);

 return sorted;

}

