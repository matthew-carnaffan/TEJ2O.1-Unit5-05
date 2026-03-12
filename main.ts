/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Mar 2026
 * This program finds distance using sonar
*/

let distanceSensor:number = 0

//setup
basic.showIcon(IconNames.Happy)

//Find distance using distance sensor
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    distanceSensor = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters)
    basic.showNumber(distanceSensor)
    basic.showIcon(IconNames.Happy)
})
