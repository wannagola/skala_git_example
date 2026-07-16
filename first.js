function multiply(a,b){
    return a * b;
}

for(let i = 1; i< 10; i++){
    console.log(`=== ${i}단 ===`);
    for(let j = 1; j<10; j++){
        console.log(`${i} x ${j} = ${multiply(i,j)}`);
    }
}