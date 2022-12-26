controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    sprites.moveToRandomHoleOnGrid(myMole)
    sprites.moveToRandomHoleOnGrid(m2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.moveToRandomHoleOnGrid(myMole)
    sprites.moveToRandomHoleOnGrid(m2)
    carnival.startCountdownGame(15, carnival.WinTypes.Score)
    music.jumpDown.play()
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let m2: Sprite = null
let myMole: Sprite = null
game.showLongText("Player 1: Use the arrow keys to move the hammer. Player 2: Press A to move the mole.", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
m2 = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(myHammer, controller.Speeds.Med)
carnival.startCountdownGame(30, carnival.WinTypes.Multi)
carnival.addLabelTo("Whaza Mole", carnival.Areas.Bottom)
pause(5000)
pause(5000)
pause(5000)
pause(5000)
pause(5000)
pause(5000)
pause(2000)
pause(2000)
if (75 < info.score()) {
    game.over(true)
} else {
    game.over(false)
}
game.onUpdateInterval(500, function () {
    simplified.checkMoleEscape()
})
