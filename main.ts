basic.forever(function () {
    pins.servoWritePin(AnalogPin.P4, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(100)
    pins.servoWritePin(AnalogPin.P4, 35)
    pins.servoWritePin(AnalogPin.P2, 35)
    basic.pause(100)
})
