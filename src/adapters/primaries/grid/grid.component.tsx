import * as React from "react"
import { IGridState } from "../../../store/state"
import { useSelector, useDispatch } from "react-redux"
import gridSelector from "./grid.selector"
import { generateMaze } from "../../../core/usecases/mazeGenerator"

export const Grid = () => {
	const dispatch = useDispatch()
	const grid: IGridState = useSelector(gridSelector)
	// tslint:disable-next-line: no-any
	React.useEffect(() => dispatch<any>(generateMaze()), [])

	if (!grid) {
		return <p>Loading...</p>
	}

	return (
		<table>
			<tbody>
				{
					grid.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
						</tr>
					))
				}
			</tbody>
		</table>
	)
}
