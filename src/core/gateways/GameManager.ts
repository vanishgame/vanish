import IPlayerGateway from "./PlayerGateway"
import IMazeGeneratorGateway from "./MazeGenerator"
import IPlayer from "../models/Player"
import { Direction } from "../usecases/playerMovement"
import IGrid from "../models/Grid"

interface IGameManagerGateway {
	maze: IGrid | null
	player: IPlayer
	move(direction: Direction): Promise<IPlayer>
	generate(): Promise<IGrid>
}

export default IGameManagerGateway
