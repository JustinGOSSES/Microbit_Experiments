basic.forever(function on_forever() {
    basic.showIcon(IconNames.Snake)
    basic.clearScreen()
    basic.pause(500)
    music.playMelody("A", 120)
    basic.showIcon(IconNames.StickFigure)
    basic.clearScreen()
    basic.pause(500)
})
// music.play_melody("C", 500)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    music.playMelody("C", 500)
})
//  music.ring_tone(Note.C)
//  basic.forever(on_forever)
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    music.ringTone(Note.C)
})
