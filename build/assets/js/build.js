var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var game = new LD42.Game();
};
var Controls;
(function (Controls) {
    var Control = (function (_super) {
        __extends(Control, _super);
        function Control(game, key) {
            if (key === void 0) { key = null; }
            var _this = _super.call(this, game, -1280, -1280, key || "controls") || this;
            _this.controls = new Controls.ControlItem();
            _this.keyboard = _this.game.input.keyboard;
            game.add.existing(_this);
            return _this;
        }
        Control.prototype.update = function () {
            var keys = Object.keys(this.controls);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var curr = this.controls[key];
                curr.hold = this.keyboard.isDown(curr.key) ? 1 : 0;
                curr.pressed = (curr.previous === 0 && curr.hold === 1);
                curr.release = (curr.previous === 1 && curr.hold === 0);
                if (curr.previous !== curr.hold)
                    curr.previous = curr.hold;
            }
        };
        return Control;
    }(Phaser.Sprite));
    Controls.Control = Control;
})(Controls || (Controls = {}));
var Controls;
(function (Controls) {
    var ControlItem = (function () {
        function ControlItem(up, down, left, right, start, select, action1, action2, action3, action4, action5, action6, action7, action8) {
            if (up === void 0) { up = null; }
            if (down === void 0) { down = null; }
            if (left === void 0) { left = null; }
            if (right === void 0) { right = null; }
            if (start === void 0) { start = null; }
            if (select === void 0) { select = null; }
            if (action1 === void 0) { action1 = null; }
            if (action2 === void 0) { action2 = null; }
            if (action3 === void 0) { action3 = null; }
            if (action4 === void 0) { action4 = null; }
            if (action5 === void 0) { action5 = null; }
            if (action6 === void 0) { action6 = null; }
            if (action7 === void 0) { action7 = null; }
            if (action8 === void 0) { action8 = null; }
            this.up = Controls.ControlStateItem(up || Phaser.Keyboard.UP);
            this.down = Controls.ControlStateItem(down || Phaser.Keyboard.DOWN);
            this.left = Controls.ControlStateItem(left || Phaser.Keyboard.LEFT);
            this.right = Controls.ControlStateItem(right || Phaser.Keyboard.RIGHT);
            this.start = Controls.ControlStateItem(start || Phaser.Keyboard.ENTER);
            this.select = Controls.ControlStateItem(select || Phaser.Keyboard.ESC);
            this.action1 = Controls.ControlStateItem(action1 || Phaser.Keyboard.Z);
            this.action2 = Controls.ControlStateItem(action2 || Phaser.Keyboard.X);
            this.action3 = Controls.ControlStateItem(action3 || Phaser.Keyboard.C);
            this.action4 = Controls.ControlStateItem(action4 || Phaser.Keyboard.V);
            this.action5 = Controls.ControlStateItem(action5 || Phaser.Keyboard.A);
            this.action6 = Controls.ControlStateItem(action6 || Phaser.Keyboard.S);
            this.action7 = Controls.ControlStateItem(action7 || Phaser.Keyboard.D);
            this.action8 = Controls.ControlStateItem(action8 || Phaser.Keyboard.F);
        }
        return ControlItem;
    }());
    Controls.ControlItem = ControlItem;
})(Controls || (Controls = {}));
var Controls;
(function (Controls) {
    function ControlStateItem(key) {
        if (key === void 0) { key = Phaser.Keyboard.SPACEBAR; }
        return {
            hold: 0,
            pressed: false,
            release: false,
            previous: 0,
            key: key
        };
    }
    Controls.ControlStateItem = ControlStateItem;
})(Controls || (Controls = {}));
var Helpers;
(function (Helpers) {
    Helpers.DEG_TO_RAD = Math.PI / 180;
    Helpers.RAD_TO_DEG = 180 / Math.PI;
    function approach(start, end, step) {
        if (start > end) {
            return Math.max(start - step, end);
        }
        else {
            return Math.min(start + step, end);
        }
    }
    Helpers.approach = approach;
})(Helpers || (Helpers = {}));
var LD42;
(function (LD42) {
    LD42.Assets = {
        image: [
            {
                name: "bg_main",
                file: "assets/img/bg/bg_main.png",
                overwrite: false,
                ignore: false
            },
            {
                name: "spr_door",
                file: "assets/img/sprite/spr_door.png",
                overwrite: false,
                ignore: false
            },
            {
                name: "spr_lock",
                file: "assets/img/sprite/spr_lock.png",
                overwrite: false,
                ignore: false
            }
        ],
        sound: [
            {
                name: "snd_dial_01",
                file: [
                    "assets/sound/snd-dial-01.mp3",
                    "assets/sound/snd-dial-01.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_02",
                file: [
                    "assets/sound/snd-dial-02.mp3",
                    "assets/sound/snd-dial-02.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_03",
                file: [
                    "assets/sound/snd-dial-03.mp3",
                    "assets/sound/snd-dial-03.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_04",
                file: [
                    "assets/sound/snd-dial-04.mp3",
                    "assets/sound/snd-dial-04.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_05",
                file: [
                    "assets/sound/snd-dial-05.mp3",
                    "assets/sound/snd-dial-05.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_06",
                file: [
                    "assets/sound/snd-dial-06.mp3",
                    "assets/sound/snd-dial-06.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_07",
                file: [
                    "assets/sound/snd-dial-07.mp3",
                    "assets/sound/snd-dial-07.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_08",
                file: [
                    "assets/sound/snd-dial-08.mp3",
                    "assets/sound/snd-dial-08.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_09",
                file: [
                    "assets/sound/snd-dial-09.mp3",
                    "assets/sound/snd-dial-09.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_10",
                file: [
                    "assets/sound/snd-dial-10.mp3",
                    "assets/sound/snd-dial-10.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_11",
                file: [
                    "assets/sound/snd-dial-11.mp3",
                    "assets/sound/snd-dial-11.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_dial_12",
                file: [
                    "assets/sound/snd-dial-12.mp3",
                    "assets/sound/snd-dial-12.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_door_01",
                file: [
                    "assets/sound/snd-door-01.mp3",
                    "assets/sound/snd-door-01.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_door_02",
                file: [
                    "assets/sound/snd-door-02.mp3",
                    "assets/sound/snd-door-02.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_door_03",
                file: [
                    "assets/sound/snd-door-03.mp3",
                    "assets/sound/snd-door-03.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_door_04",
                file: [
                    "assets/sound/snd-door-04.mp3",
                    "assets/sound/snd-door-04.ogg"
                ],
                autoDecode: false,
                ignore: false
            },
            {
                name: "snd_door_05",
                file: [
                    "assets/sound/snd-door-05.mp3",
                    "assets/sound/snd-door-05.ogg"
                ],
                autoDecode: false,
                ignore: false
            }
        ],
        spritesheet: []
    };
})(LD42 || (LD42 = {}));
var LD42;
(function (LD42) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this, 64, 64, Phaser.CANVAS, "ld42-game", null, true, false) || this;
            document.title = "UNLOCKR : v0.0.1 : by YUITI";
            var name = document.getElementById("ld42-name"), description = document.getElementById("ld42-description"), controls = document.getElementById("ld42-controls"), copy = document.getElementById("ld42-copy");
            copy.innerHTML = "©2018 YUITI";
            _this.state.add("Boot", LD42.Boot, false);
            _this.state.add("Preload", LD42.Preload, false);
            _this.state.add("Test", LD42.Test, false);
            _this.state.start("Boot");
            return _this;
        }
        return Game;
    }(Phaser.Game));
    LD42.Game = Game;
})(LD42 || (LD42 = {}));
var LD42;
(function (LD42) {
    var approach = Helpers.approach;
    var Dial = (function (_super) {
        __extends(Dial, _super);
        function Dial(game, x, y) {
            var _this = _super.call(this, game, x, y, "spr_lock", 0) || this;
            _this.direction = 0;
            _this.turn = 0;
            _this.speed = 0;
            _this.speed_max = 8;
            _this.factor_accel = 0.1;
            _this.factor_decel = 0.5;
            _this.sound_time = 0;
            _this.sound_group = {};
            _this.loadSounds();
            _this.anchor.setTo(0.5, 0.5);
            game.add.existing(_this);
            return _this;
        }
        Dial.prototype.loadSounds = function () {
            this.sound_group.dial_01 = this.game.add.sound("snd_dial_01", .5, false);
            this.sound_group.dial_02 = this.game.add.sound("snd_dial_02", .5, false);
            this.sound_group.dial_03 = this.game.add.sound("snd_dial_03", .5, false);
            this.sound_group.dial_04 = this.game.add.sound("snd_dial_04", .5, false);
            this.sound_group.dial_05 = this.game.add.sound("snd_dial_05", .5, false);
            this.sound_group.dial_06 = this.game.add.sound("snd_dial_06", .5, false);
        };
        Dial.prototype.handleTurn = function () {
            if (this.direction != 0) {
                this.speed = approach(this.speed, this.speed_max * this.direction, this.factor_accel);
            }
            else {
                this.speed = approach(this.speed, 0, this.factor_decel);
            }
            this.turn = Math.floor(this.speed);
            this.angle += this.turn;
            if (this.turn != 0) {
                if (this.sound_time == 0) {
                    switch (Math.floor(Math.random() * 6)) {
                        case 2:
                            this.sound_group.dial_02.play();
                            break;
                        case 3:
                            this.sound_group.dial_03.play();
                            break;
                        case 4:
                            this.sound_group.dial_04.play();
                            break;
                        case 5:
                            this.sound_group.dial_05.play();
                            break;
                        case 6:
                            this.sound_group.dial_06.play();
                            break;
                        default:
                            this.sound_group.dial_01.play();
                            break;
                    }
                    this.sound_time = Math.round(8 * (1.5 - (Math.abs(this.turn) / this.speed_max)));
                }
                else {
                    this.sound_time -= 1;
                }
            }
            else {
                this.sound_time = 0;
            }
        };
        Dial.prototype.update = function () {
            this.handleTurn();
        };
        return Dial;
    }(Phaser.Sprite));
    LD42.Dial = Dial;
})(LD42 || (LD42 = {}));
var LD42;
(function (LD42) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
            this.load.image("loader_in", "assets/img/ui/loader_in.png", false);
            this.load.image("loader_out", "assets/img/ui/loader_out.png", false);
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.stage.smoothed = false;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.scale.pageAlignHorizontally = true;
            }
            else {
            }
            this.state.start("Preload", true, false);
        };
        return Boot;
    }(Phaser.State));
    LD42.Boot = Boot;
})(LD42 || (LD42 = {}));
var LD42;
(function (LD42) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preload.prototype.setLoaderImage = function () {
            this.preloadOut = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loader_out");
            this.preloadOut.x -= this.preloadOut.width / 2;
            this.preloadOut.y -= this.preloadOut.height / 2;
            this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loader_in");
            this.preloadBar.anchor.setTo(0, 0);
            this.preloadBar.x -= this.preloadBar.width / 2;
            this.preloadBar.y -= this.preloadBar.height / 2;
            this.load.setPreloadSprite(this.preloadBar, 0);
        };
        Preload.prototype.preload = function () {
            this.setLoaderImage();
            for (var _i = 0, _a = LD42.Assets.image; _i < _a.length; _i++) {
                var image = _a[_i];
                if (!image.ignore) {
                    this.load.image(image.name, image.file, image.overwrite);
                }
            }
            for (var _b = 0, _c = LD42.Assets.sound; _b < _c.length; _b++) {
                var sound = _c[_b];
                if (!sound.ignore) {
                    this.load.audio(sound.name, sound.file, sound.autoDecode);
                }
            }
            for (var _d = 0, _e = LD42.Assets.spritesheet; _d < _e.length; _d++) {
                var spritesheet = _e[_d];
                if (!spritesheet.ignore) {
                    this.load.spritesheet(spritesheet.name, spritesheet.file, spritesheet.frameWidth, spritesheet.frameHeight, spritesheet.frameMax, spritesheet.margin, spritesheet.spacing, spritesheet.skipFrames);
                }
            }
        };
        Preload.prototype.create = function () {
            this.state.start("Test");
        };
        return Preload;
    }(Phaser.State));
    LD42.Preload = Preload;
})(LD42 || (LD42 = {}));
var LD42;
(function (LD42) {
    var Control = Controls.Control;
    var Test = (function (_super) {
        __extends(Test, _super);
        function Test() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.degrees = 0;
            return _this;
        }
        Test.prototype.handleDial = function () {
            var controls = this.controller.controls;
            this.dial.direction = controls.right.hold - controls.left.hold;
        };
        Test.prototype.create = function () {
            this.count = 0;
            this.controller = new Control(this.game, "controller_p1");
            this.game_bg = this.game.add.tileSprite(0, 0, 64, 64, "bg_main");
            this.game_bg.alpha = 0.5;
            this.dial = new LD42.Dial(this.game, this.game.world.centerX, this.game.world.centerY);
            this.soundGroup = {};
            this.uiGroup = {};
            this.soundGroup.door_01 = this.game.add.sound("snd_door_01", 0.5, false);
            this.uiGroup.dialText = this.game.add.text(0, 0, this.degrees.toString(), {
                align: "center",
                fill: "#000",
                font: "yx_ui",
                fontSize: 8,
                fontWeight: 400
            });
            this.uiGroup.dialText.x = this.game.world.centerX - this.uiGroup.dialText.width / 2;
            this.uiGroup.dialText.y = this.game.world.centerY - this.uiGroup.dialText.height / 2;
        };
        Test.prototype.update = function () {
            this.handleDial();
            this.game_bg.alpha = Math.abs(1 * Math.sin(this.count / 8));
            if (this.dial.turn != 0) {
                this.degrees += this.dial.turn;
            }
            if (Math.abs(this.degrees) < 5
                && this.dial.direction != 0
                && !this.soundGroup.door_01.isPlaying) {
                this.soundGroup.door_01.play();
            }
            this.count += 0.5;
            this.uiGroup.dialText.text = Math.abs(this.degrees).toString();
            this.uiGroup.dialText.x = this.game.world.centerX - this.uiGroup.dialText.width / 2;
            this.uiGroup.dialText.y = this.game.world.centerY - this.uiGroup.dialText.height / 2;
        };
        return Test;
    }(Phaser.State));
    LD42.Test = Test;
})(LD42 || (LD42 = {}));
//# sourceMappingURL=build.js.map