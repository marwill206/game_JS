import * as ex from "excalibur";
import { SCALE, VIEWPORT_HEIGHT, VIEWPORT_WIDTH } from "./constants.js";
import { Player } from "./src/actors/Players/Player.js";

const game = new ex.Engine({
  width: VIEWPORT_WIDTH * SCALE,
  height: VIEWPORT_HEIGHT * SCALE,
  fixedUpdateFps: 60,
  antialiasing: false,

});

const player = new Player(10,10, "BLUE");

game.add(player);


game.start();
