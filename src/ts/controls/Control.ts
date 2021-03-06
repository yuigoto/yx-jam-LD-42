namespace Controls {
  /**
   * UNLOCKR : Controls/Control
   * --------------------------------------------------------------------
   * Represents a single controller entity.
   *
   * Add it to the stage, do your magic.
   *
   * @author    Fabio Y. Goto <lab@yuiti.com.br>
   * @since     0.0.1
   */
  export class Control extends Phaser.Sprite {
    /**
     * Manageable control item.
     */
    controls: ControlItem;

    /**
     * Phaser keyboard handler.
     */
    private keyboard: Phaser.Keyboard;

    /**
     * Constructor.
     *
     * @param {Phaser.Game} game
     *    Game instance
     * @param {string} key
     *    Sprite instance name
     */
    constructor(game: Phaser.Game, key: string = null) {
      super(game, -1280, -1280, key || "controls");
      this.controls = new ControlItem();
      this.keyboard = this.game.input.keyboard;
      game.add.existing(this);
    }

    // Lifecycle methods
    // ------------------------------------------------------------------

    /**
     * Updates state.
     */
    update() {
      let keys = Object.keys(this.controls);
      for (let key of keys) {
        let curr: ControlState = this.controls[key];
        curr.hold     = this.keyboard.isDown(curr.key) ? 1 : 0;
        curr.pressed  = (curr.previous === 0 && curr.hold === 1);
        curr.release  = (curr.previous === 1 && curr.hold === 0);
        if (curr.previous !== curr.hold) curr.previous = curr.hold;
      }
    }
  }
}
