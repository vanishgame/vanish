import * as React from "react"
import { Grid } from "./adapters/primaries/grid/grid.component"
import "./adapters/primaries/styles/index.sass"
import { Provider } from "react-redux"
import { configureStore } from "./store"
import InMemoryMazeGenerator from "./adapters/secondaries/InMemoryMazeGenerator"

const mazeGenerator = new InMemoryMazeGenerator()

const store = configureStore({
	mazeGenerator,
})

const App = () => (
	<Provider store={store}>
		<Grid />
	</Provider>
)

export default App
