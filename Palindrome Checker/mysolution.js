function palindrome(str) {

    const regex = /[^a-zA-Z0-9]/g
    let copyStr = str.replace(regex, "")
    
    copyStr = copyStr.toLowerCase()
  
    const normal = copyStr.split("")
    const reversed = copyStr.split("").reverse()
  
  
    return normal.join("") === reversed.join("") ? true : false
   
  }
  
palindrome("not a plaindrome");