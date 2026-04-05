import test from "@playwright/test";
import { simpleCipher } from "../resources/test_5";

test("Test No.5: Test Cipher", async () => {
    const encryptText = "K NQXG RNCAYTKIJV"
    const encryptedText = simpleCipher(encryptText,2)
    console.log("Result: " + encryptedText);
})
