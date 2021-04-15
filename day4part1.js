/*--- Day 4: The Ideal Stocking Stuffer ---
*
*Santa needs help mining some AdventCoins (very similar to bitcoins) to use as *gifts for all the economically forward-thinking little girls and boys.
*
*To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

For example:

    If your secret key is abcdef, the answer is 609043, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
    If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....

Your puzzle input is iwrupvqb.
*/

let secretKey="iwrupvqb"

var patt = /^0{5}/;//looking for 5 leading zeroes at the beginning of the string
let repeat=true;

var count=1;
const t0=performance.now()
while(repeat){
    var tentativi=secretKey+count
    var hash = CryptoJS.MD5(tentativi).toString();// need to convert it to a string in order to pass it to test method
    var result=hash.match(patt);
    if(result){
      repeat=false;
    }else{
      count+=1
  }

}

const t1=performance.now()
var perform=`i needed ${t1-t0} milliseconds to get this`

let saluto=count+" "+perform;

document.getElementById('risulto').append(saluto);
