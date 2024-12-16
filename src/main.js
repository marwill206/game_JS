import * as ex from "excalibur";
import { SCALE, VIEWPORT_HEIGHT, VIEWPORT_WIDTH } from "../constants.js";
import { player } from "./actors/players/player";

const game = new ex.Engine({
  width: VIEWPORT_WIDTH * SCALE,
  height: VIEWPORT_HEIGHT * SCALE,
  fixedUpdateFps: 60,
  antialiasing: false,

});

const player = new player(200,200, "BLUE");
game.add(player);

game.start();