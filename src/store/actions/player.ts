import IPlayer from "../../core/models/Player"
import { Action } from "redux"

interface IPlayerMoveAction extends Action {
	type: "PLAYER_MOVE",
	payload: IPlayer,
}

export type IPlayerActions = IPlayerMoveAction