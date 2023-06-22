def on_button_pressed_a():
    global num
    for index in range(11):
        basic.show_number(num)
        num += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

Mostrar números del 1 al 10

"""
num = 0

def on_button_pressed_b():
    global num
    for index2 in range(11):
        basic.show_number(num)
        num -= 1
input.on_button_pressed(Button.B, on_button_pressed_b)
