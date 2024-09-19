let player = sprites.create(playerImg, SpriteKind.Player)
player.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(player)
