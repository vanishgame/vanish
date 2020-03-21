// import { listenToChangedState } from "./../../test.utils"
import { IAppState } from "../../store/state"
import { Store } from "redux"
import { configureStore } from "../../store"
// import { generateMaze } from "./mazeGenerator"
import InMemoryMazeGenerator from "../../adapters/secondaries/InMemoryMazeGenerator"
// import IGrid from "../models/Grid"
// import IPlayer from "../models/Player"
import { expect } from "chai"

const initialPlayer = {
	posX: 0,
	posY: 0,
	display: "X",
}

describe("Player movement", () => {
	let store: Store<IAppState>
	let mazeGenerator: InMemoryMazeGenerator
	// let player: IPlayer

	beforeEach(() => {
		mazeGenerator = new InMemoryMazeGenerator()
		store = configureStore({ mazeGenerator })
	})

	it("should be at default position on init", (done) => {
		expect(store.getState().player).be.eql(initialPlayer)

		done()
	})
})