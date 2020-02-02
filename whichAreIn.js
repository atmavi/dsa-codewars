function inArray(array1,array2){
    let inArr = [];
    for(let i of array1) {
      for(j of array2) {
        //   console.log(i.length, j.length)
          if(i.length>j.length)
            continue;
          for(let f=0; f<(i.length-j.length+1);f++){
            console.log(">>>",i===j.slice(f,i.length));
            console.log(i, j, j.slice(f,i.length));
            if(i===j.slice(f,i.length))
                inArr.push(i);
          }
      }
    }
    console.log(inArr)
    return inArr;
}

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
let a1 = ["xyz", "live", "strong"]


inArray(a1, a2);

// let text= "asdasd";
// console.log(text.slice(0,4))