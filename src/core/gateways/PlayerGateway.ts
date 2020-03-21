import { Direction } from "./../usecases/playerMovement"
import IPlayer from "../models/Player"

interface IPlayerGateway {
	move(player: IPlayer, direction: Direction): Promise<IPlayer>
}

export default IPlayerGateway
