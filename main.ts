radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (true) {
        for (let index = 0; index < 5; index++) {
            music.playMelody("B E B E B E B E ", 296)
        }
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(8148)
