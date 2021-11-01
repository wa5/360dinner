

const isprime=(n)=>{
    for(let i=2;i<=n/2;i++){
    if(n % i===0){
        return false
    }
}
return true
}


const generatep=num=>{
    const arr=[]
    let i=2
    while(arr.length<num){
        if(isprime(i)){
            arr.push(i)
        }
        i=i=== 2 ? i+1 : i+2;
    }
    return arr;
}

console.log(generatep(10))
