import { createSlice } from "@reduxjs/toolkit";
import cardsItems from "../../data/cardsData";

//Creo un objeto con el estado inicial
const initialState = {
  cardsItems,
  filter: "all", // Estado inicial: mostrando todo 
};
// Creo nuva catacteristica (SLICE)
const cardsSlice = createSlice({
  name: "cards", // Nombre de mi slice
  initialState,
  reducers: { // Reducers Objeto que define los reducers del slice
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { setFilter } = cardsSlice.actions;

export default cardsSlice.reducer;
