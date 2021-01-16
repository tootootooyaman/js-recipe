// const button = document.getElementById("button")
const counter = document.getElementById("counter")
const output = document.getElementById("output")
let number = 0


const countUp = function () {
  number += 1
  counter.textContent = number
  output.textContent += " " + fib(number)
}

const fib = function(n) {
  //n番目のフィボナッチ数を出力する関数
  if (n === 1){
    return 1
  } else if (n === 2){
    return 1
  } else {
    return (fib(n-1) + fib(n-2))
  }
}

setInterval(countUp, 1000)

// console.log(fib(6))