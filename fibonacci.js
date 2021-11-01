const fibonacci = (input) =>{
    if (input === 0){
        return 0
    }else if (input === 1){
        return 1
    }else{
        let n1 = 0
        let n2 = 1
        let ans = 0
        for (let i=1; i<input; i++){
            ans = n1 + n2
            n1 = n2
            n2 = ans
        }
        return ans
    }
}


// demo
for (let i=0; i<=10; i++){
    console.log(`fibonacci ${i}: `,fibonacci(i))
}