import IPlayer from "../models/Player"

interface IPlayerGateway {
	move(player: IPlayer): Promise<IPlayer>
}

export default IPlayerGateway
