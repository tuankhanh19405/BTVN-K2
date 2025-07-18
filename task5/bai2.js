let n = Number(prompt("Nhập số n:"));
function printPrimeNumber(n) {
  if(typeof n !== 'number' || Number.isNaN(n)) {
    console.log("Invalid");
  }
  for (let i = 2; i <= n; i++) {
    
    checkprime(i) && console.log(i)
  }
}

function checkprime(x){
    
    for (let i =2 ;i<= Math.sqrt(x) ;i++){
        
        if(x % i === 0){
            return false; 
        }
    }
    return true; // là số nguyên tố
}

printPrimeNumber(n);