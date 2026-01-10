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






//----------------------------------------------- a simple number counter--------------------------------------------------------------------------------------------
let ECHO_counter = 0

// number is self
const counter_it_self = document.getElementById("the_number_to_count")

//buttons
const decr_buton = document.getElementById("decrease_counter")
const rest_buton = document.getElementById("reset_to_zero_counter")
const inc_buton = document.getElementById("increase_counter")
const rannum_buton = document.getElementById("random_number_gen")

// increase
decr_buton.onclick = function () {
    ECHO_counter -= 1
    counter_it_self.textContent = ECHO_counter
}

// reset
rest_buton.onclick = function () {
    ECHO_counter = 0
    counter_it_self.textContent = ECHO_counter
}

//increase
inc_buton.onclick = function () {
    ECHO_counter += 1
    counter_it_self.textContent = ECHO_counter
}

// random
rannum_buton.onclick = function () {
    ECHO_counter = Math.round(Math.random() * (100))
    counter_it_self.textContent = ECHO_counter
}



// ----------------------------Emotional Damage Calculator check box calculator------------------------------------
// name all the const
let EMMOTION_DAMAGE = 0
// cheak boxs
const Did_not_get_6_hours_of_sleep = document.getElementById("Didn't_get_6_hours_of_sleep") // 30
const Linux_faild_to_boot = document.getElementById("Linux_faild_to_boot") // 20
const Ignored_by_classmates = document.getElementById("Ignored_by_classmates") // 18
const late_for_the_exam = document.getElementById("late_for_the_exam") // 99
const cooked_a_terrible_meal = document.getElementById("cooked_a_terrible_meal") // 19
const Forgot_to_save_code = document.getElementById("Forgot_to_save_code") // 22
// buttons
const Checl_ED_of_day = document.getElementById("Checl_ED_of_day")
// text contend
const EMOTIONAL_DAMAGE_of_day = document.getElementById("EMOTIONAL_DAMAGE_of_day")


// cheak

Checl_ED_of_day.onclick = function () {
    // calculate the ED
    if (Did_not_get_6_hours_of_sleep.checked) {
        EMMOTION_DAMAGE += 30
    }
    if (Linux_faild_to_boot.checked) {
        EMMOTION_DAMAGE += 20
    }
    if (Ignored_by_classmates.checked) {
        EMMOTION_DAMAGE += 18
    }
    if (late_for_the_exam.checked) {
        EMMOTION_DAMAGE += 99
    }
    if (cooked_a_terrible_meal.checked) {
        EMMOTION_DAMAGE += 19
    }
    if (Forgot_to_save_code.checked) {
        EMMOTION_DAMAGE += 22
    }




    EMOTIONAL_DAMAGE_of_day.textContent = `ECHO: Your ED level of the day is ${EMMOTION_DAMAGE}( ˘•ω•˘ )`
    if (EMMOTION_DAMAGE <= 60) {
        EMOTIONAL_DAMAGE_of_day.style.color = "green"
    }

    else if (EMMOTION_DAMAGE > 60) {
        EMOTIONAL_DAMAGE_of_day.style.color = "red"
    }

    EMMOTION_DAMAGE = 0

}
//----------------------------------------------- a real good calculator --------------------------------------------------------


