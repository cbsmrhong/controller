joystickbit.initJoystickBit()
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        basic.showString("E")
        radio.sendNumber(1)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        basic.showString("W")
        radio.sendNumber(2)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        basic.showString("N")
        radio.sendNumber(3)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        basic.showString("S")
        radio.sendNumber(4)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        basic.showString("L")
        radio.sendNumber(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        basic.showString("R")
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        basic.showString("P")
        radio.sendNumber(8)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        basic.showString("T")
        radio.sendNumber(7)
    }
})
