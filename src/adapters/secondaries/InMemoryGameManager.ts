import { Direction } from "./../../core/usecases/playerMovement"
import IPlayer from "../../core/models/Player"
import IGameManagerGateway from "../../core/gateways/GameManager"
import IGrid from "../../core/models/Grid"

class InMemoryGameManager implements IGameManagerGateway {
	player: IPlayer
	maze: IGrid | null

	constructor() {
		this.player = {
			posX: 0,
			posY: 0,
			display: "X",
		}
		this.maze = null
	}

	public generate = async () => {
		this.maze = [["1", "2"], ["3", "4"]]
		return Promise.resolve(this.maze)
	}

	public move = async (direction: Direction) => {
		switch (direction) {
			case Direction.up:
				this._moveUp()
				break
			case Direction.right:
				this._moveRight()
				break
			case Direction.down:
				this._moveDown()
				break
			case Direction.left:
				this._moveLeft()
				break
		}
		return this.player
	}

	private _moveUp = () => {
		this.player = { ...this.player, posY: Math.max(0, this.player.posY - 1) }
	}

	private _moveRight = () => {
		this.player = { ...this.player, posX: (this.maze) ? Math.min(this.maze.length - 1, this.player.posX + 1) : this.player.posX }
	}

	private _moveDown = () => {
		this.player = { ...this.player, posY: (this.maze) ? Math.min(this.maze.length - 1, this.player.posY + 1) : this.player.posY }
	}

	private _moveLeft = () => {
		this.player = { ...this.player, posX: Math.max(0, this.player.posX - 1) }
	}
}

export default InMemoryGameManager
