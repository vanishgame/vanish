import * as React from "react"
import { Grid } from "./adapters/primaries/grid/grid.component"
import "./adapters/primaries/styles/index.sass"
import { Provider } from "react-redux"
import { configureStore } from "./store"
import InMemoryGameManager from "./adapters/secondaries/InMemoryGameManager"

const gameManager = new InMemoryGameManager()

const store = configureStore({
	gameManager,
})

const App = () => (
	<Provider store={store}>
		<Grid />
	</Provider>
)

export default App
