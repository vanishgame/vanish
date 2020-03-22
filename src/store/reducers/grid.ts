import { IAllActions } from "./../actions"
import { IAppState } from "../state"

export const grid = (gridData: IAppState["grid"] = null, action: IAllActions) => {
	if (action.type === "MAZE_GENERATED") {
		return action.payload
	}
	return gridData
}
