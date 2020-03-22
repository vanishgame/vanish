import { player } from "./reducers/player"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk, { ThunkMiddleware, ThunkDispatch } from "redux-thunk"
import { IAppState } from "./state"
import { IAllActions } from "./actions"
import { grid } from "./reducers/grid"
import { useDispatch } from "react-redux"
import IGameManagerGateway from "../core/gateways/GameManager"

export interface IAppDependencies {
	gameManager: IGameManagerGateway,
}

export const configureStore = (dependencies: IAppDependencies) => createStore(
	combineReducers({
		grid,
		player,
	}),
	composeWithDevTools(
		applyMiddleware(thunk.withExtraArgument<IAppDependencies>(dependencies) as ThunkMiddleware<IAppState, IAllActions, IAppDependencies>),
	),
)

export type ReduxDispatch = ThunkDispatch<IAppState, IAppDependencies, IAllActions>
export const useReduxDispatch = () => useDispatch<ReduxDispatch>()
