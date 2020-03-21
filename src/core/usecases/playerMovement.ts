import { IActionCreator, IDispatch } from "./../../vanish"

export enum Direction {
	up = "up",
	down = "down",
	left = "left",
	right = "right",
}

export const movePlayer: IActionCreator = (direction: Direction) => {
	return async (dispatch: IDispatch, _getState, { gameManager }) => {
		const updatedPlayer = await gameManager.move(direction)
		dispatch({ type: "PLAYER_MOVE", payload: updatedPlayer })
	}
}
