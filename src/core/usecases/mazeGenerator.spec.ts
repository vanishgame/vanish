import { listenToChangedState } from "./../../test.utils"
import { IAppState } from "../../store/state"
import { Store } from "redux"
import { configureStore } from "../../store"
import { generateMaze } from "./mazeGenerator"
import IGrid from "../models/Grid"
import InMemoryGameManager from "../../adapters/secondaries/InMemoryGameManager"

describe("Maze generation", () => {
	let store: Store<IAppState>
	let gameManager: InMemoryGameManager

	beforeEach(() => {
		gameManager = new InMemoryGameManager()
		store = configureStore({ gameManager })
	})

	it("should be empty at init", () => {
		expect(store.getState().grid).toBeNull()
	})

	it("should generate a simple maze", (done) => {
		const expectedGrid: IGrid = [["1", "2"], ["3", "4"]]
		listenToChangedState(
			store,
			[{
				index: 1,
				rules: [{
					expect: "grid",
					toBe: expectedGrid,
				}],
			}],
			done,
		)
		// tslint:disable-next-line: no-any
		store.dispatch<any>(generateMaze())
	})
})