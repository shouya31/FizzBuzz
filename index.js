// 変数の定義
const inputFizz = document.getElementById("fizz")
const inputBuzz = document.getElementById("buzz")
const Button = document.getElementById("button")
const lists = document.getElementById("lists")

// 関数の定義
// 出力する値を判別し、値によってFizz、Buzz,FizzBuzzのどれか値の先頭にをひっつける関数
const FizzBuzz = (fizz, buzz) => {
  let array = []
  for (let i = 1; i < 100; i++) {
    if ( i % fizz == 0 && i % buzz == 0) {
      array.push(`FizzBuzz ${i}`)
    }
    else if ( i % fizz == 0 ){
      array.push(`Fizz ${i}`)
    }
    else if (i % buzz == 0){
      array.push(`Buzz ${i}`)
    }
  }
  array.forEach(list => {
    let li = document.createElement("div")
    li.innerHTML = list
    lists.appendChild(li)
  });
}

// フォームに整数以外の値が入力され、実行された時に呼び出される関数
const err_FizzBuzz = () => {
  let li = document.createElement("div")
  li.innerHTML = "整数を入力してください"
  lists.appendChild(li)
}

// 実行された時に呼び出される関数
const execFizzBuzz = (e) => {
  e.preventDefault();
  lists.innerHTML = ""
  let inputFizzValue = Number(inputFizz.value)
  let inputBuzzValue = Number(inputBuzz.value)

  if ( Number.isInteger(inputFizzValue) && Number.isInteger(inputBuzzValue) ) {
    FizzBuzz(inputFizzValue, inputBuzzValue)
  } else {
    err_FizzBuzz()
  }
}

// イベントの定義
Button.addEventListener("click", execFizzBuzz)

