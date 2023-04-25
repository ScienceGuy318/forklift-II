radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function fork_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function backward () {
    wuKong.setAllMotor(-100, -100)
}
function fork_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function forward () {
    wuKong.setAllMotor(100, 100)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(5)
basic.showIcon(IconNames.EigthNote)
