import { createSlice } from "@reduxjs/toolkit";

//Creo un objeto con el estado inicial
const initialState = {
  cardsItem: [],
};
// Creo nuva catacteristica (SLICE)
const filterSlice = createSlice({
  name: "filter", // Nombre de mi slice
  initialState,
});

export default filterSlice.reducer;
