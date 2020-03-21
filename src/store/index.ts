import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk, { ThunkMiddleware } from "redux-thunk"
import { IAppState } from "./state"
import { IAllActions } from "./actions"
import { grid } from "./reducers/grid"
import IMazeGeneratorGateway from "../core/gateways/MazeGenerator"

export interface IAppDependencies {
	mazeGenerator: IMazeGeneratorGateway
}

export const configureStore = (dependencies: IAppDependencies) => createStore(
	combineReducers({
		grid,
	}),
	composeWithDevTools(
		applyMiddleware(thunk.withExtraArgument<IAppDependencies>(dependencies) as ThunkMiddleware<IAppState, IAllActions, IAppDependencies>),
	),
)
