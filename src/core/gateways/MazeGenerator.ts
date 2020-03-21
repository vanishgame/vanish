import { IGridState } from "../../store/state"

interface IMazeGeneratorGateway {
	generate(): Promise<IGridState>
}

export default IMazeGeneratorGateway
