/**
 * フルサイズPLENの制御
 * 
 * PCA9685基板を使用
 */

/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace PLENWalk {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function PLEN_Walk(Roop: number) {
        for (let RoopCycle = 0; RoopCycle < Roop; RoopCycle++) {
            for (let index = 0; index < 10; index++) {
                SetServoPosition(4, モータ初期位置[4])
                SetServoPosition(8, モータ初期位置[8])
                SetServoPosition(12, モータ初期位置[13])
                SetServoPosition(16, モータ初期位置[17])
            }
            for (let j = 0; j <= 31; j++) {
                SetServoPosition(8, モータ初期位置[8] + 5)
                SetServoPosition(16, モータ初期位置[17] + 3)
                SetServoPosition(5, モータ初期位置[5] - j * 2)
                SetServoPosition(6, モータ初期位置[6] + j)
                SetServoPosition(7, モータ初期位置[7] - j / 2)
                SetServoPosition(1, モータ初期位置[0] + Math.round(j / 3))
                SetServoPosition(15, モータ初期位置[16] - j * 2)
                SetServoPosition(14, モータ初期位置[15] - j)
                SetServoPosition(9, モータ初期位置[9] + j)
            }
            for (let i = 0; i <= 31; i++) {
                SetServoPosition(8, モータ初期位置[8])
                SetServoPosition(16, モータ初期位置[17])
                SetServoPosition(9, モータ目標位置2[9] - i)
                SetServoPosition(5, モータ目標位置2[5] + i * 2)
                SetServoPosition(6, モータ目標位置2[6] - i)
                SetServoPosition(7, モータ目標位置2[7] + i / 2)
                SetServoPosition(1, モータ目標位置2[0] - Math.round(i / 3))
                SetServoPosition(15, モータ目標位置2[16] + i * 2)
                SetServoPosition(14, モータ目標位置2[15] + i)
            }
            for (let k = 0; k <= 31; k++) {
                SetServoPosition(8, モータ初期位置[8] - 5)
                SetServoPosition(16, モータ初期位置[17] - 3)
                SetServoPosition(13, モータ初期位置[14] + k * 2)
                SetServoPosition(14, モータ初期位置[15] - k)
                SetServoPosition(15, モータ初期位置[16] + k / 2)
                SetServoPosition(9, モータ初期位置[9] - Math.round(k / 3))
                SetServoPosition(7, モータ初期位置[7] + k * 2)
                SetServoPosition(6, モータ初期位置[6] + k)
                SetServoPosition(1, モータ初期位置[0] - k)
            }
            for (let l = 0; l <= 31; l++) {
                SetServoPosition(8, モータ初期位置[8])
                SetServoPosition(16, モータ初期位置[17])
                SetServoPosition(13, モータ目標位置[14] - l * 2)
                SetServoPosition(14, モータ目標位置[15] + l)
                SetServoPosition(15, モータ目標位置[16] - l / 2)
                SetServoPosition(9, モータ目標位置[9] + Math.round(l / 3))
                SetServoPosition(7, モータ目標位置[7] - l * 2)
                SetServoPosition(6, モータ目標位置[6] - l)
                SetServoPosition(1, モータ目標位置[0] + l)
            }
            basic.showIcon(IconNames.House)
            basic.pause(100)
        }
    }
    // 実際のモータ番号に
    // 対応する
    // servo_noの引数
    // 1:1
    // 2:2
    // 3:3
    // 4:5
    // 5:6
    // 7:8
    // 9:10
    // 10:11
    // 11:12
    // 12:13
    // 13:15
    // 14:16
    // 15:17
    // 16:18
    function SetServoPosition(servo_no: number, degree: number) {
        switch (servo_no) {
            case 1:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 2:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 3:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo3, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 4:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo4, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 5:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo5, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 6:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo6, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 7:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo7, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 8:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo8, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 9:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo9, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 10:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo10, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 11:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo11, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 12:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo12, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 13:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo13, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 14:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 15:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, degree, 64)
                control.waitMicros(servo_delay)
                break;
            case 16:
                PCA9685.setServoPosition(PCA9685.ServoNum.Servo16, degree, 64)
                control.waitMicros(servo_delay)
                break;
        }
    }
    let モータ目標位置2: number[] = []
    let モータ目標位置: number[] = []
    let モータ初期位置: number[] = []
    let m = 0
    let servo_delay = 500
    モータ初期位置 = [
        100,
        90,
        90,
        90,
        93,
        80,
        80,
        90,
        92,
        90,
        85,
        90,
        85,
        152,
        95,
        102,
        92,
        85
    ]
    モータ目標位置 = [
        70,
        90,
        90,
        90,
        93,
        110,
        110,
        150,
        60,
        80,
        85,
        90,
        90,
        25,
        155,
        72,
        107,
        70
    ]
    モータ目標位置2 = [
        110,
        90,
        90,
        90,
        93,
        20,
        110,
        85,
        122,
        120,
        85,
        90,
        90,
        85,
        80,
        72,
        32,
        95
    ]
    basic.forever(function () {
        PCA9685.reset(64)
    })
}
