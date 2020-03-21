import { movePlayer, Direction } from "./playerMovement"
import { listenToChangedState } from "./../../test.utils"
import { IAppState } from "../../store/state"
import { Store } from "redux"
import { configureStore } from "../../store"
// import { generateMaze } from "./mazeGenerator"
import InMemoryMazeGenerator from "../../adapters/secondaries/InMemoryMazeGenerator"
// import IGrid from "../models/Grid"
// import IPlayer from "../models/Player"
import { expect } from "chai"
import InMemoryPlayer from "../../adapters/secondaries/InMemoryPlayerMovement"

const initialPlayer = {
	posX: 0,
	posY: 0,
	display: "X",
}

describe("Player movement", () => {
	let store: Store<IAppState>
	let mazeGenerator: InMemoryMazeGenerator
	let playerMovement: InMemoryPlayer

	beforeEach(() => {
		mazeGenerator = new InMemoryMazeGenerator()
		playerMovement = new InMemoryPlayer()
		store = configureStore({ mazeGenerator, playerMovement })
	})

	it("should be at default position on init", (done) => {
		expect(store.getState().player).be.eql(initialPlayer)

		done()
	})

	it("should be able to move to the right", (done) => {
		const direction = Direction.right
		listenToChangedState(
			store,
			[
				{
					index: 1,
					rules: [{
						expect: "player.posX",
						toBe: initialPlayer.posX + 1,
					}]
				}
			],
			done,
		)
		// tslint:disable-next-line: no-any
		store.dispatch<any>(movePlayer(initialPlayer, direction))
	})

	it("should be able to move to the left", (done) => {
		const direction = Direction.left
		listenToChangedState(
			store,
			[
				{
					index: 1,
					rules: [{
						expect: "player.posX",
						toBe: initialPlayer.posX - 1,
					}]
				}
			],
			done,
		)
		// tslint:disable-next-line: no-any
		store.dispatch<any>(movePlayer(initialPlayer, direction))
	})
})