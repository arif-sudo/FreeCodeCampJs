function isPalindrome(str) {
    const copyStr = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    return copyStr === copyStr.split("").reverse().join("");
}