import IGrid from "../../core/models/Grid"

interface IMazeGeneratorGateway {
	generate(): Promise<IGrid>
}

export default IMazeGeneratorGateway
