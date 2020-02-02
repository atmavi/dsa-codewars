function digital_root(n) {
    console.log('>>>',(n-1)%9);
    return (n - 1) % 9 + 1;
}

console.log(digital_root(124));
console.log(digital_root(234243));
console.log(digital_root(12));


// Mine:
// function digital_root(n) {
//     while(n.toString().length>1){
//       n= n.toString().split('').map(num => parseInt(num)).reduce((sum, acc) => sum+acc);
//     }
//     return n
// }

// Monster:
// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }