import { IAppState } from "./../../../store/state"

export const gridSelector = (state: IAppState) => state.grid

export const playerSelector = (state: IAppState) => state.player
