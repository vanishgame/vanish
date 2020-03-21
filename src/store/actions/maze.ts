import { IGridState } from "./../state"

interface IMazeGeneratedAction {
	type: "MAZE_GENERATED"
	payload: IGridState
}

export type IMazeActions = IMazeGeneratedAction