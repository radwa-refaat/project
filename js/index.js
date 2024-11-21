// var userPassword = "";
// var flag = true;

// do {
//   if (flag === true) {
//     userPassword = window.prompt("enter your password");
//     flag = false;
//   } else {
//     userPassword = window.prompt("userpassword should be greatrer");
//   }
// } while (userPassword.length <= 5);
// console.log("acspet");
//******************************************* */
// var cartona;
// for (var i = 1990; i <= 2024; i++) {
//   cartona += "<option>" + i + "</option>";
// }
// document.getElementById("demo").innerHTML = cartona;
// **************************************************

// function radwa() {
//   var p1 = Number(window.prompt("please enter frist price"));

//   var p2 = Number(window.prompt("please enter secound price"));

//   var result = p1 + p2;
//   checktotal(result);
// }

// function checktotal(y){
//     if(y >= 4000){
//         console.log(100)
//     }
//     else{
//         console.log(y)
//     }

// }
// /*--------------------------------------------------*/
// for (var i = 20; i <= 20; i++) {
//   console.log("refaat" + i);
// }
/*-------------------------------------*/



const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
