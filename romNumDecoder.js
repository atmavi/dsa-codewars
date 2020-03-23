let romNum={
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  
  
function solution(roman){
    let res= 0;
    let romans= roman.toUpperCase().split('');
    for(let i=0; i<romans.length; i++){
        let curChar= romans[i], nextChar= romans[i+1];
        // console.log('Current: ', curChar, 'NextChar: ', nextChar);
        // console.log(romNum[curChar]);
        if(romNum[curChar]< romNum[nextChar] && romNum[nextChar]){
            res+= romNum[nextChar]- romNum[curChar];
            i++;
            break;
        } 
        console.log(romans[i]);
        res+=romNum[curChar];
    }
    console.log(res);
    return res;
}

solution('MMVIII');
solution('iii');
solution('IV');