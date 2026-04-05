import test from "@playwright/test";
import { findDuplicatesAndSort } from "../resources/test_1";

test("Test No.1: Find Duplicate and Sort", async () => {
    const listA = [5, 9, 6, 8, 2, 1];
    const listB = [1, 2, 3, 4, 7, 9];
   
    const duplicatedAndSortedList = findDuplicatesAndSort(listA,listB);
    console.log("Duplicate List: " + duplicatedAndSortedList);
})
