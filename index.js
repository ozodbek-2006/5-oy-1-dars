// // regular function
// function sum (a,b) {
//     return a + b;
// }
//     // express function 
//     const sum1 = function(a,b) {
//         return a + b;

//     }


//     // Arrow function 
//     const sum2 = ( a,b ) => {
//         return a + b;
//     }
//    // for .... in
//     let car = {
//         name: "merc",
//         year: 2023,
//         color: "black",


//     }

//     for (const key in car) {
//         console.log(key,car[key]);
//     }


//     //fifi

//     (function() {
//         let a = 5;
//         function test () {
//             console.log("test");
//         }
//     })()


    //callback function

    function greeet(name) {
        console.log('salom', +name);
        
    }

    function greetinput(callback) {
        var name = prompt('iltimos, ismingizni kirting:');
        callback(name);
        
    }

    greetinput(greeet);