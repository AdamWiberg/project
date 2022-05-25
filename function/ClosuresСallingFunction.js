// Замыкания и вызов функции на месте в JavaScript





// Задача №1



let func = (function() {
    let num = 1

    return function() {
        console.log(num)
        num++
    }
})();


func()
func()
func()
func()
func()
func()


// Задача №2




let func = (function() {
    let num = 1

    return function() {
        console.log(num)
   for(let i = 1; i <= 6; i++) {
       if(i > 5) {
         i = 1
       }
       console.log(i)
   }
       
    }
})();


// func()





























































































































