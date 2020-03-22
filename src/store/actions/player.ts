import IPlayer from "../../core/models/Player"

interface IPlayerMoveAction {
	type: "PLAYER_MOVE",
	payload: IPlayer,
}

export type IPlayerActions = IPlayerMoveAction