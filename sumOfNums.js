function add(numArr) {
    return numArr.reduce((sum, acc)=> sum+acc);
}

add([1,200,64,1]);

// function add(numArr) {
//     let sum=0
//     for(let i=0; i<numArr.length; i++) {
//         sum+=numArr[i]
//     }
//     console.log(sum);
//     return sum;
// }