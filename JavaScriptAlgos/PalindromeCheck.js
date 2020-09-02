function isPalindrome(string) {
  let palindrome = string.split("").reverse().join("");

  if (palindrome === string) {
    return true;
  } else {
    return false;
  }
}
