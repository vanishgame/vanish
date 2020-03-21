import { IActionCreator, IDispatch } from "./../../vanish"
import IPlayer from "../models/Player"

export enum Direction {
	up = "up",
	down = "down",
	left = "left",
	right = "right",
}

export const movePlayer: IActionCreator = (player: IPlayer, direction: Direction) => {
	return async (dispatch: IDispatch, _getState, { playerMovement }) => {
		const updatedPlayer = await playerMovement.move(player, direction)
		dispatch({ type: "PLAYER_MOVE", payload: updatedPlayer })
	}
}
