import React from "react"
import {useDrag} from "react-dnd"
import knightBlack from "../../assets/knight_black.png"
import knightWhite from "../../assets/knight_white.png"

interface Props {
  white: boolean
  first: boolean
}

interface DropResult {
  index: number
}

const Knight: React.FC<Props> = ({white, first}) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "chessPiece",
      item: {name:`${white ? "WHITE" : "BLACK"}_KNIGHT${first? "1": "2"}`},
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DropResult>()
        if (item && dropResult) {
         console.log(`You dropped ${item} into ${dropResult.index}!`)
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0 : 1,

      })
    }), [])
  return (
    <img ref={dragRef} src={white ? knightWhite : knightBlack} style={{opacity}} alt=""/>
  )
}

export default Knight