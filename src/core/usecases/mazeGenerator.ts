import { IActionCreator, IDispatch } from "./../../vanish"

export const generateMaze: IActionCreator = () => {
	return async (dispatch: IDispatch, _getState, { gameManager }) => {
		const grid = await gameManager.generate()
		dispatch({ type: "MAZE_GENERATED", payload: grid })
	}
}
