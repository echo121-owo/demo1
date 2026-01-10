

// 点击按钮的时候改变text，获得超级厉害的打招呼
let username;
document.getElementById("test_submit").onclick = function () {
    username = document.getElementById("some_text").value
    window.console.log(username)
    // change hello text
    document.getElementById("hello_test").textContent = `Hello! ${username}`
}

change_chara = function (the_text) {
    document.getElementById("hello_test").textContent = the_text
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

// if
x = 0
if (x > 0) {
    change_chara(">0")
}

else if (x = 0) {
    change_chara("=0")
}

else {
    change_chara("<0")
}

y = true
z = false

if (!z) {

    change_chara("hohoho")
    if (y || z) {
        change_chara("it's me")
    }
}
