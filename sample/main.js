const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const display = document.getElementById("display")

button1.onclick = function () {
  display.textContent = "不正解"
}
button2.onclick = function () {
  display.textContent= "正解"
  // display.style.fontSize = "32pt"
  // console.log(display.style.fontSize)
}
button3.onclick = function () {
  display.textContent = "不正解"
}

const akira = {
  name: "とぅーやま",
  age: 25,
  birthday: "1995/09/28",
  hobbies: ["ナマケモノの動画", "地形図", "散歩"],
  subjects: ["土木", "経済学"],
  isSleepy: true,
}
