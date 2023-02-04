function rot13(str) {

    const newArr = str.split("") 
    const myArr = []
    const regex = /[A-Z]/g
    let test;
  
  for (let i in newArr){
  
    if (newArr[i].match(regex)){
      test = newArr[i].charCodeAt(0)
      if (test + 13 > 90) {
        test -= 13
      }else {
        test += 13
      }
        myArr.push(String.fromCharCode(test))
    }else {
      myArr.push(newArr[i])
    }
  }
    return myArr.join("")
  
}
  
console.log(rot13("SERR PBQR PNZC"));