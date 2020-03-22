import { movePlayer, Direction } from "./playerMovement"
import { listenToChangedState } from "./../../test.utils"
import { IAppState } from "../../store/state"
import { Store } from "redux"
import { configureStore } from "../../store"
import { expect } from "chai"

import InMemoryGameManager from "../../adapters/secondaries/InMemoryGameManager"
import { generateMaze } from "./mazeGenerator"

const initialPlayer = {
	posX: 0,
	posY: 0,
	display: "X",
}

describe("Player movement", () => {
	let store: Store<IAppState>
	let gameManager: InMemoryGameManager

	beforeEach(async () => {
		gameManager = new InMemoryGameManager()
		store = configureStore({ gameManager })
		// tslint:disable-next-line: no-any
		store.dispatch<any>(generateMaze())
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
						toBe: 9,
					}]
				}
			],
			done,
		)
		// tslint:disable-next-line: no-any
		store.dispatch<any>(movePlayer(direction))
	})

	it("shouldn't be able to move to the left while of edge on the maze", (done) => {
		listenToChangedState(
			store,
			[
				{
					index: 1,
					rules: [{
						expect: "player.posX",
						toBe: 0,
					}]
				},
				{
					index: 2,
					rules: [{
						expect: "player.posX",
						toBe: 1,
					}]
				},
				{
					index: 3,
					rules: [{
						expect: "player.posX",
						toBe: 0,
					}]
				}
			],
			done,
		)
		// tslint:disable-next-line: no-any
		store.dispatch<any>(movePlayer(Direction.left))
		// tslint:disable-next-line: no-any
		store.dispatch<any>(movePlayer(Direction.right))
		// tslint:disable-next-line: no-any
		store.dispatch<any>(movePlayer(Direction.left))
	})
})