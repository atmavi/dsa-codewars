// function pigIt(str){
//     let xStr;

//     const marks= ['?','.','!'];

//     let hasMark= marks.includes(str[str.length-1]);
//     xStr= hasMark?str.slice(0,str.length-1):str; 

//     // console.log(hasMark);


//     // if(str[str.length-1]==='?'|| str[str.length-1]==='!') {
//     //     str[str.length-1]='';
//     //     let xStr= 
//     // }

//     let latin = xStr.split(' ').map(word => word.slice(1)+word[0]+'ay').join(' ');

//     if(hasMark) latin+=(' '+str[str.length-1]);

//     console.log(latin);
//     return latin;
// }

//---CW answer
pigIt = s => {
    s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
    console.log(s);
}

pigIt('Hello world');
pigIt('Please don\'t !');
pigIt('Make it pass .');


// // THIS DOES'T WORK AS EXPECTED
// function pigIt(str){
//     let latin=str.split(' ').map(word => word.substr(1)+word[0]+'ay').join(' ');
//     console.log(latin);
// }

 pigIt= str => {
    let latin=str.split(' ').map(word => word.substr(1)+word[0]+'ay').join(' ');
    console.log(latin);
}
