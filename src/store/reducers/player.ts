import { IAllActions } from "./../actions"
import { IAppState } from "../state"

const initialPlayer = {
	posX: 0,
	posY: 0,
	display: "X",
}

export const player = (playerData: IAppState["player"] = initialPlayer, _action: IAllActions) => {
	return playerData
}
