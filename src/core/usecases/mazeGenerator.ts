import { IActionCreator, IDispatch } from "./../../vanish"

export const generateMaze: IActionCreator = () => {
	return async (dispatch: IDispatch, _getState, { mazeGenerator }) => {
		const grid = await mazeGenerator.generate()
		dispatch({ type: "MAZE_GENERATED", payload: grid })
	}
}
