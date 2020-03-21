import IGrid from "../../core/models/Grid"

interface IMazeGeneratedAction {
	type: "MAZE_GENERATED"
	payload: IGrid
}

export type IMazeActions = IMazeGeneratedAction