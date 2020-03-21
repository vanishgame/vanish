import { IActionCreator, IDispatch } from "./../../vanish"
import IPlayer from "../models/Player"

export const movePlayer: IActionCreator = (player: IPlayer) => {
	return async (dispatch: IDispatch, _getState, { playerMovement }) => {
		const updatedPlayer = await playerMovement.move(player)
		dispatch({ type: "PLAYER_MOVE", payload: updatedPlayer })
	}
}
