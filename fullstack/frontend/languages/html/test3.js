function fib(){
    let a=0,b=1,c,i
    if(n==0)
    return a
    for(i=2;i<=n;i++){
        c=a+b
        a=b
        b=c
    }
    return b
}

let n=12
console.log(fib(n))