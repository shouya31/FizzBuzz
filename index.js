// 変数の定義
const inputFizz = document.getElementById("fizz")
const inputBuzz = document.getElementById("buzz")
const button = document.getElementById("button")

// 関数の定義
// 出力する値を判別し、値によってFizz、Buzz,FizzBuzzのどれか値の先頭にをひっつける関数
const FizzBuzz = (fizz, buzz) => {
  const array = []
  const lists = document.getElementById("lists")

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
    const element = document.createElement("div")
    element.innerHTML = list
    lists.appendChild(element)
  });
}

// フォームに整数以外の値が入力され、実行された時に呼び出される関数
const warningErr = () => {
  const element = document.createElement("div")
  element.innerHTML = "整数を入力してください"
  lists.appendChild(element)
}

// 実行された時に呼び出される関数
const execFizzBuzz = () => {
  lists.innerHTML = ""
  const inputFizzValue = Number(inputFizz.value)
  const inputBuzzValue = Number(inputBuzz.value)

  if ( Number.isInteger(inputFizzValue) && Number.isInteger(inputBuzzValue) ) {
    FizzBuzz(inputFizzValue, inputBuzzValue)
  } else {
    warningErr()
  }
}

// イベントの定義
button.addEventListener("click", execFizzBuzz)

