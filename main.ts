input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    for (let index = 0; index < 11; index++) {
        basic.showNumber(num)
        num += 1
    }
})
/** Mostrar números del 1 al 10 */
let num = 0
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    for (let index2 = 0; index2 < 11; index2++) {
        basic.showNumber(num)
        num -= 1
    }
})
