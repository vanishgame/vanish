import { IAllActions } from "./../actions"
import { IGridState } from "../state"

export const grid = (gridData: IGridState = null, action: IAllActions) => {
	if (action.type === "MAZE_GENERATED") {
		return action.payload
	}
	return gridData
}
