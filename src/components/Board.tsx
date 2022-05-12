import React from "react"

import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import {getPiecesData} from "../redux/appSlice"

import Square from "./Square"
import Knight from "./pieces/Knight"
import {useAppSelector} from "../hooks"
import Rook from "./pieces/Rook"
import {constants} from "../constants"

const Board: React.FC = () => {
  const piecesData = useAppSelector(getPiecesData)

  const fillBoard = () => {
    const white = "#eeeed2"
    const black = "#769656"
    let currentColor = black
    const squares = []
    for (let i = 0; i < 64; i++) {
      if (i % 8 === 0 && i >= 8)
        currentColor = currentColor === black ? black : white
      else
        currentColor = currentColor === black ? white : black
      let chessPiece = null
      for (let j = 0; j < piecesData.length; j++) {
        const [piece, location] = Object.entries(piecesData[j])[0]
        console.log(piece)
        if (location === i) {
          switch (piece) {
            case constants.BLACK_ROOK1:
              chessPiece = <Rook white={false} first={true}/>
              break
            case constants.BLACK_KNIGHT1:
              chessPiece = <Knight white={false} first={true}/>
              break
            case constants.WHITE_ROOK1:
              chessPiece = <Rook white={true} first={true}/>
              break
            case constants.WHITE_KNIGHT1:
              chessPiece = <Knight white={true} first={true}/>
              break
            case constants.WHITE_KNIGHT2:
              chessPiece = <Knight white={true} first={false}/>
              break
          }
        }
      }

      //   // case i === 0 || i === 7:
      //   //   chessPiece = rookBlack
      //   //   break
      //   case i === 1 || i === 6:
      //     chessPiece = <Knight white={false}/>
      //     break
      //   // case i === 2 || i === 5:
      //   //   chessPiece = bishopBlack
      //   //   break
      //   // case i === 3:
      //   //   chessPiece = queenBlack
      //   //   break
      //   // case i === 4:
      //   //   chessPiece = kingBlack
      //   //   break
      //   // case i >= 8 && i <= 15:
      //   //   chessPiece = pawnBlack
      //   //   break
      //   // case i >= 48 && i <= 55:
      //   //   chessPiece = pawnWhite
      //   //   break
      //   // case i === 56 || i === 63:
      //   //   chessPiece = rookWhite
      //   //   break
      //   //
      //   // case i === 58 || i === 61:
      //   //   chessPiece = bishopWhite
      //   //   break
      //   // case i === 59:w
      //   //   chessPiece = queenWhite
      //   //   break
      //   // case i === 60:
      //   //   chessPiece = kingWhite
      //   //   break

      squares.push(<Square key={i} index={i} chessPiece={chessPiece} squareColor={currentColor}/>)
    }
    return squares
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">
        {fillBoard()}
      </div>
    </DndProvider>
  )
}

export default Board