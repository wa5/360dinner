let n=3
function fib(n){
    var ff=[]
    if(n<=1)
        return n;
        ff.push(fib(n-1),fib(n-2))
return ff
     
}

console.log(fib(n))