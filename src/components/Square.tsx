import React from "react"
import {useDrop} from "react-dnd";
import {setPiecesData} from "../redux/appSlice";
import {useAppDispatch} from "../hooks";
import Knight from "./pieces/Knight";

interface Props {
  squareColor: string
  chessPiece: React.ReactElement | null
  index: number
}

const Square: React.FC<Props> = ({squareColor, chessPiece, index}) => {

  const dispatch = useAppDispatch()
  const callDispatch = (item:any) => {
    console.log(index)
  }
  const [{isOver}, drop] = useDrop(() => ({
    accept: "chessPiece",
    drop: monitor => (console.log(monitor)),
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }), [index])

  return (
    <div
      className="square"
      style={{backgroundColor: squareColor, position: "relative"}}
      ref={drop}
    >
      <>
        {chessPiece}
      </>
    </div>
  )
}

export default Square