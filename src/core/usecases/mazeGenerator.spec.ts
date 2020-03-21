import { listenToChangedState } from "./../../test.utils"
import { IAppState } from "../../store/state"
import { Store } from "redux"
import { configureStore } from "../../store"
import { generateMaze } from "./mazeGenerator"
import InMemoryMazeGenerator from "../../adapters/secondaries/InMemoryMazeGenerator"
import IGrid from "../models/Grid"

describe("Maze generation", () => {
	let store: Store<IAppState>
	let mazeGenerator: InMemoryMazeGenerator

	beforeEach(() => {
		mazeGenerator = new InMemoryMazeGenerator()
		store = configureStore({ mazeGenerator })
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