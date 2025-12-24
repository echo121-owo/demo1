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






// a simple number counter
let ECHO_counter = 0

//buttons
const decr_buton = document.getElementById("decrease_counter")
const rest_buton = document.getElementById("reset_to_zero_counter")
const inc_buton = document.getElementById("increase_counter")

// increase
decr_buton.onclick = function () {
    ECHO_counter -= 1
    document.getElementById("the_number_to_count").textContent = ECHO_counter
}

// reset
rest_buton.onclick = function () {
    ECHO_counter = 0
    document.getElementById("the_number_to_count").textContent = ECHO_counter
}

//increase
inc_buton.onclick = function () {
    ECHO_counter += 1
    document.getElementById("the_number_to_count").textContent = ECHO_counter
}






// a real good calculator


