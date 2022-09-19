let Wrong_number = 0
input.onButtonPressed(Button.A, function () {
    if (Wrong_number < 4) {
        basic.clearScreen()
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        basic.showString("Welcome!")
        Wrong_number = 0
    } else {
        basic.clearScreen()
        basic.showNumber(Wrong_number)
        for (let index = 0; index < 4; index++) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(784, music.beat(BeatFraction.Whole))
        }
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        Wrong_number += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (input.temperature() >= 20) {
        basic.showLeds(`
            . # . . #
            # . . # .
            . # . . #
            # . . # .
            # # # # #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("Test Start!")
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.showLeds(`
        . # . . #
        # . . # .
        . # . . #
        # . . # .
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showString("Test Finished!")
})
input.onButtonPressed(Button.B, function () {
    if (Wrong_number < 4) {
        basic.clearScreen()
        Wrong_number += 1
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.showNumber(Wrong_number)
        basic.clearScreen()
        basic.showString("Retry")
        basic.clearScreen()
    } else {
        basic.clearScreen()
        Wrong_number += 1
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.showNumber(Wrong_number)
        for (let index = 0; index < 4; index++) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(784, music.beat(BeatFraction.Whole))
        }
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    basic.showString("Welcome" + "to" + "use" + "login" + "machine")
})
