function sortNums(numArr) {
    console.log(numArr.sort((a,b) => a-b));
}


sortNums([100,23,46,19,0]);
sortNums([3,13,-46,79,-10]);

// function sortNums(numArr) {c
//     for(let i=0;i<numArr.length;i++) {
//         for(let j=0;j<numArr.length; j++) {
//             let temp=0
//             if(numArr[i]<numArr[j]) {
//                 temp= numArr[i]
//                 numArr[i]= numArr[j];
//                 numArr[j]=temp;
//             }
//         }
//     }
//     console.log(numArr);
//     return numArr;
// }