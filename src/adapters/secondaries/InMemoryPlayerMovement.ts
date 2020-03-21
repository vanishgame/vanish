import IPlayerGateway from "../../core/gateways/PlayerGateway"
import IPlayer from "../../core/models/Player"

class InMemoryPlayer implements IPlayerGateway {
	public move = async (player: IPlayer) => Promise.resolve({...player, posX: player.posX+1})
}

export default InMemoryPlayer
