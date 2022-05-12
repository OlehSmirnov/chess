import React from "react"
import {useDrag} from "react-dnd"
import rookBlack from "../../assets/rook_black.png"
import rookWhite from "../../assets/rook_white.png"

interface Props {
  white: boolean
  first: boolean
}



const Rook: React.FC<Props> = ({white}) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "chessPiece",
      item: {id: 23},
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0 : 1
      })
    }),
    []
  )

  return (
    <img ref={dragRef} src={white ? rookWhite : rookBlack} style={{opacity}} alt=""/>
  )
}

export default Rook