class Helicopter {
  constructor(game) {
    this.game = game;
    this.isRising = false;
    this.sprite = null;
  }

  spawn() {
    const helicopterSprite = new Phaser.Graphics(this.game)
        .beginFill(Phaser.Color.hexToRGB('#2c3e50'), 1)
        .drawRect(0, 0, 50, 50);

    const helicopterSpriteTexture = helicopterSprite.generateTexture();

    this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, helicopterSpriteTexture);
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.enableBody = true;

    this.sprite.body.gravity.y = 100;
    this.sprite.body.velocity.y = -100;
    this.sprite.body.collideWorldBounds = false;

    this.sprite.anchor.setTo(0.5, 0.5);
  }

  setRising() {
    this.isRising = true;
  }

  setFalling() {
    this.isRising = false;
  }

  increaseVerticalVelocity() {
    this.sprite.body.velocity.y -= 100;
  }

  isOutOfBounds() {
    const position = this.sprite.body.position.y;

    return position > this.game.world.height || position < 0;
  }

}

export default Helicopter;
