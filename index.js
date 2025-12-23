// ------------------------------------打开计算器---------------------------------
const open_calculator_button = document.getElementById("go_calculator_page");

open_calculator_button.addEventListener("click", () => {
    window.location = "Sub_Page/calculator/calculator.html"
})

// ------------------------------------打开test界面---------------------------------
let open_testpage_button = document.getElementById("js_code_test_page");

open_testpage_button.addEventListener("click", () => {
    window.location = "Sub_Page/test_a/Test_page.html"
})

// ------------------------------------打开login界面---------------------------------

const login_page_button = document.getElementById("user_login_page")

//跳转到user登陆界面的脚本
login_page_button.addEventListener("click", async () => {
    window.location = "/Sub_Page/login/Login_page.html"
})