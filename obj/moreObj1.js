//74 раздел Перебор многомерных объектов в JavaScript




let sum = 0;
let obj = {
    1: {
        1: 11,
        2: 12, 
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

for (let key in obj) {
    let subObj = obj[key];
   // console.log(subObj)
    for (let subkey in subObj) {
        let sub = subObj[subkey]; 
      //  console.log(sub)
      sum = sum + sub
    }
}
 console.log(sum)




