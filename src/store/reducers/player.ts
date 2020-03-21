import { IAllActions } from "./../actions"
import { IAppState } from "../state"

const initialPlayer = {
	posX: 0,
	posY: 0,
	display: "X",
}

export const player = (playerData: IAppState["player"] = initialPlayer, action: IAllActions) => {
	if (action.type === "PLAYER_MOVE") {
		return playerData
	}
	return playerData
}
