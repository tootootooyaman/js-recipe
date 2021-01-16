
// const genkiFunction = function(number){
//   // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
//   for (let n=1; n<=number; n++) {
//     if (n % 3 === 0) {
//       console.log(`${n}!!!!!!!`)
//     } else {
//       console.log(n)
//     }
//   }
// }
let x
let y

const fizzBuzzFunction = function(number){
  for (let n=1; n<=number; n++) {
    if (n % 3 === 0) {
      x = 'Fizz'
    } else {
      x = ''
    }
    if (n % 5 === 0) {
      y = 'Buzz'
    } else {
      y = ''
    }
    if (n % 3 !== 0 && n % 5 !== 0) {
      z = n
    } else {
      z = ''
    }
    console.log(x + y + z)
  }
}
