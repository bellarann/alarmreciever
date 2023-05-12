radio.onReceivedNumber(function (receivedNumber) {
    while (true) {
        for (let index = 0; index < 5; index++) {
            music.playMelody("B E B E B E B E ", 296)
        }
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
})
radio.setGroup(8148)
basic.forever(function () {
	
})
