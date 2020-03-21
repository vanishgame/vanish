import { IActionCreator, IDispatch } from "./../../vanish"

export const movePlayer: IActionCreator = () => {
	return async (dispatch: IDispatch, getState, { playerMovement }) => {
		const player = getState().player
		const updatedPlayer = await playerMovement.move(player)
		dispatch({ type: "PLAYER_MOVE", payload: updatedPlayer })
	}
}
