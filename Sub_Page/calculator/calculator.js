document.getElementById("calculator_h1_1").textContent = "calculator";


// find area of a circle
document.getElementById("calculator_p_1").textContent = "ECHO: I can help you find the area of a circle"
// get user input of r
document.getElementById("submit_r_of_circle").onclick = function () {
    let r_of_circle = document.getElementById("r_of_circle").value
    // calculate the area
    const PI = 3.1415926
    r_of_circle = Number(r_of_circle)
    let area_of_circle = PI * (r_of_circle ** 2)
    // display ansure
    document.getElementById("ECHO_circle_response").textContent = `ECHO: now i can tell you your area is ${area_of_circle}`
}


// a real good calculator


