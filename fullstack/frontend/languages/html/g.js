
function fib(n){
    let f=new Array(n+2)
    let id
    f[0]=0
    f[1]=1
    for(i=2;i<n;i++){
        f[i]=f[i-1]+f[i-2]
    }
    return f[n]
}
let n=9
console.log(fib(5))