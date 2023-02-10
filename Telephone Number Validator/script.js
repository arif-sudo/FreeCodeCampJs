function telephoneCheck(str) {
  

  const regex = /^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/

 return str.match(regex) ? true : false
}

telephoneCheck("555-555-5555");

//this function will match numbers underneath

/*55-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555*/