import test from "@playwright/test";
import { findDuplicatesAndSort } from "../resources/test_1";

test("Test No.1: Find Duplicate and Sort", async () => {
    const listA = [1, 2, 3, 5, 6, 8, 9];
    const listB = [3, 2, 1, 5, 6, 0];
   
    const duplicatedAndSortedList = findDuplicatesAndSort(listA,listB);
    console.log("Duplicate List: " + duplicatedAndSortedList);
})
