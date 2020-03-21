import * as React from "react"
import { Grid } from "./adapters/primaries/grid/grid.component"
import "./adapters/primaries/styles/index.sass"
import { Provider } from "react-redux"
import { configureStore } from "./store"
import InMemoryMazeGenerator from "./adapters/secondaries/InMemoryMazeGenerator"
import InMemoryPlayer from "./adapters/secondaries/InMemoryPlayerMovement"

const mazeGenerator = new InMemoryMazeGenerator()
const playerMovement = new InMemoryPlayer()

const store = configureStore({
	mazeGenerator,
	playerMovement,
})

const App = () => (
	<Provider store={store}>
		<Grid />
	</Provider>
)

export default App
