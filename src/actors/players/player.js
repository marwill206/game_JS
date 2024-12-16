import * as ex from "excalibur";
import { SCALE_2x } from "../../../constants";

export class player extends ex.Actor{
    constructor(x,y skinId){
        super({
            pos: new ex.Vector(x, y),
            width: 32,
            height: 32,
            scale: SCALE_2x,
            collider: ex.Shape.Box(15,15, player, new ex.Vector(0,0)),
            CollisionType: ex.CollisionType.Active,
            color: ex.Color.Green
        });

this.directionQueve = 

    }

    onPreUpdate(_engine,_delta){
console.log("UPDATE!");
    }
}