import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { gridSelector, playerSelector } from "./grid.selector"
import { generateMaze } from "../../../core/usecases/mazeGenerator"
import { movePlayer, Direction } from "../../../core/usecases/playerMovement"

export const Grid = () => {
	const dispatch = useDispatch()
	const grid = useSelector(gridSelector)
	const player = useSelector(playerSelector)

	React.useEffect(() => {
		// tslint:disable-next-line: no-any
		dispatch<any>(generateMaze())
		const keydownHandler = ({ key }: KeyboardEvent) => {
			if (["q", "ArrowLeft"].includes(key)) {
				// tslint:disable-next-line: no-any
				dispatch<any>(movePlayer(Direction.left))
			} else if (["d", "ArrowRight"].includes(key)) {
				// tslint:disable-next-line: no-any
				dispatch<any>(movePlayer(Direction.right))
			} else if (["s", "ArrowDown"].includes(key)) {
				// tslint:disable-next-line: no-any
				dispatch<any>(movePlayer(Direction.down))
			} else if (["z", "ArrowUp"].includes(key)) {
				// tslint:disable-next-line: no-any
				dispatch<any>(movePlayer(Direction.up))
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
