const isUser = false;

const isLoggedIn = isUser ? "Loged in" : "sign out";

console.log(isLoggedIn);

const a = 3 + 4;
const b = 9;
const c = "8";

// if (a == c) {
//   // a, c'ye eşit
//   if (c == b) {
//     // c, b ve a değerine eşittir.
//     console.log("a, b ve c değerleri birbirlerine eşittir.");
//   } else {
//     // a, c'ye eşit
//     console.log("a ve c sayı değerleri birbirine eşittir.");
//   }
// } else if (a === b) {
//   // a, b'ye eşittir.
//   console.log("a ve b değerleri birbirine eşittir.");
// } else {
//   console.log("a değeri hem b değerine hem de c değerine eşit değildir.");
// }

const print =
  a == c && c == b
    ? "a, b ve c değerleri birbirlerine eşittir."
    : a == c
    ? "a ve c sayı değerleri birbirine eşittir."
    : a === b
    ? "a ve b değerleri birbirine eşittir."
    : "a değeri hem b değerine hem de c değerine eşit değildir.";

console.log(print);
