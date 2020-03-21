import IMazeGeneratorGateway from "../../core/gateways/MazeGenerator"

class InMemoryMazeGenerator implements IMazeGeneratorGateway {
	public generate = async () => Promise.resolve([["1", "2"], ["3", "4"]])
}

export default InMemoryMazeGenerator
