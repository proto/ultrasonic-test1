let maxLevel = 0
let minLevel = 0
let distance = 0
/**
 * us-100 ultrasonic sensor
 */
basic.forever(function () {
    led.setBrightness(25)
    maxLevel = 3
    minLevel = 15
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    if (distance >= minLevel) {
        basic.showIcon(IconNames.Angry)
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (distance <= maxLevel) {
        basic.showIcon(IconNames.Umbrella)
        music.play(music.createSoundExpression(WaveShape.Square, 500, 4144, 0, 222, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(5000)
})
