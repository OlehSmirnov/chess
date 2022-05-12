import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "./store"

interface AppState {
  piecesData: Object[]
}

const initialState: AppState = {
  piecesData: [
    {BLACK_ROOK1: 0},
    {BLACK_KNIGHT1: 1},
    {BLACK_KNIGHT2: 6},
    {BLACK_ROOK2: 7},
    {WHITE_KNIGHT1: 57},
    {WHITE_KNIGHT2: 62},
    {WHITE_ROOK1: 56},
  ]
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPiecesData: (state, action:PayloadAction<Object>) => {
      state.piecesData = [...state.piecesData, action.payload]
    }
  }
})


export const {setPiecesData} = appSlice.actions

export const getPiecesData = (state: RootState) => state.app.piecesData

export default appSlice.reducer