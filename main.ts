input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
})
music.play(music.stringPlayable("C5 B A E G C D - ", 120), music.PlaybackMode.UntilDone)
