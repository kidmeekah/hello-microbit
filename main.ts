input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . # . # .
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("I WORK!")
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
