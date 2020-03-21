import { Direction } from "./../../core/usecases/playerMovement"
import IPlayerGateway from "../../core/gateways/PlayerGateway"
import IPlayer from "../../core/models/Player"

class InMemoryPlayer implements IPlayerGateway {
	public move = async (player: IPlayer, direction: Direction) => {
		switch (direction) {
			case Direction.up:
				return {...player, posY: player.posY - 1}
			case Direction.right:
				return {...player, posX: player.posX + 1}
			case Direction.down:
				return {...player, posY: player.posY + 1}
			case Direction.left:
				return {...player, posX: player.posX - 1}

			default:
				return player
		}
	}
}

export default InMemoryPlayer
