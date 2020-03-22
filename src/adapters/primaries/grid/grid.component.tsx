import * as React from "react"
import { useSelector } from "react-redux"
import { gridSelector, playerSelector } from "./grid.selector"
import { generateMaze } from "../../../core/usecases/mazeGenerator"
import { movePlayer, Direction } from "../../../core/usecases/playerMovement"
import { useReduxDispatch } from "../../../store"

export const Grid = () => {
	const dispatch = useReduxDispatch()
	const grid = useSelector(gridSelector)
	const player = useSelector(playerSelector)

	React.useEffect(() => {
		dispatch(generateMaze())
		const keydownHandler = ({ key }: KeyboardEvent) => {
			if (["q", "ArrowLeft"].includes(key)) {
				dispatch(movePlayer(Direction.left))
			} else if (["d", "ArrowRight"].includes(key)) {
				dispatch(movePlayer(Direction.right))
			} else if (["s", "ArrowDown"].includes(key)) {
				dispatch(movePlayer(Direction.down))
			} else if (["z", "ArrowUp"].includes(key)) {
				dispatch(movePlayer(Direction.up))
			}
		}
		window.addEventListener("keydown", keydownHandler)
		return () => {
			window.removeEventListener("keydown", keydownHandler)
		}
	}, [])

	if (!grid) {
		return <p>Loading...</p>
	}

	return (
		<table>
			<tbody>
				{
					grid.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{
								row.map((_cell, cellIndex) => (
									<td key={cellIndex}>
										{(rowIndex === player.posY && cellIndex === player.posX) ? player.display : "O"}
									</td>
								))
							}
						</tr>
					))
				}
			</tbody>
		</table>
	)
}
