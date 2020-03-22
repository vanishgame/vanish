import IGrid from "../../core/models/Grid"
import { Action } from "redux"

interface IMazeGeneratedAction extends Action {
	type: "MAZE_GENERATED"
	payload: IGrid
}

export type IMazeActions = IMazeGeneratedAction