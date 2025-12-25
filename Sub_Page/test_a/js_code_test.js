

// 点击按钮的时候改变text，获得超级厉害的打招呼
let username;
document.getElementById("test_submit").onclick = function () {
    username = document.getElementById("some_text").value
    window.console.log(username)
    // change hello text
    document.getElementById("hello_test").textContent = `Hello! ${username}`
}



let x

// x = window.prompt("number:")
x = Number(x)

x = -10000000

x += 11

console.log(x, typeof (x))


// math

x = Math.PI


console.log(Math.tan(90))
console.log(Math.max(1, 2, 4, 5555))

let random_num
