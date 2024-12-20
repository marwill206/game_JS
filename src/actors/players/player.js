import * as ex from "excalibur";
import { SCALE_2x } from "../../../constants.js";
import { DirectionQueue } from "../../classes/DirectionQueue.js";

export class Player extends ex.Actor {
  constructor(x, y, skinId) {
    console.log(x,y)
    super({
      pos: new ex.Vector(x, y),
      width: 32,
      height: 32,
      scale: SCALE_2x,
      collider: ex.Shape.Box(15, 15, new ex.Vector(0, 0)),
      collisionType: ex.CollisionType.Active,
      color: ex.Color.Green,
    });


  }

  
}
