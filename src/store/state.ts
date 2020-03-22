import IGrid from "../core/models/Grid"
import IPlayer from "../core/models/Player"

export interface IAppState {
	grid: IGrid | null
	player: IPlayer
}
