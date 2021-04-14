/*
Your puzzle answer was 346386.

The first half of this puzzle is complete! It provides one gold star: *
--- Part Two ---

Now find one that starts with six zeroes.
*/


let secretKey="iwrupvqb"

var patt = /^0{6}/;//looking for 6 zeroes at the beginning of the string
let repeat=true;

var count=1;
const t0=performance.now()
while(repeat){
    var tentativi=secretKey+count
    var hash = CryptoJS.MD5(tentativi).toString();/* add this in the html <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/md5.js"></script>*/
    var result=hash.match(patt);
    if(result){
      repeat=false;
    }else{
      count+=1
  }

}


const t1=performance.now()
var perform=`i needed ${t1-t0} milliseconds to get this`

let answer=count+" "+perform;//9958218

document.getElementById('result').append(answer);
