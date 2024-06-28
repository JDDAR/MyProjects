import { createSlice } from "@reduxjs/toolkit";

//Creo un objeto con el estado inicial
const initialState = {
  cardsItems: [
    {
      id: "01",
      img: "https://i.pinimg.com/564x/80/a4/0e/80a40e33dc2dd00f662b33dcece80774.jpg",
      title: "Login N°1 ",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit curae",
      link: "",
      type: "react",
    },
    {
      id: "02",
      img: "https://i.pinimg.com/736x/3b/0c/84/3b0c8465572f6744c087a71fac5cb7cc.jpg",
      title: "Cards N°1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit curae Lorem",
      link: "",
      type: "Js",
    },
    {
      id: "03",
      img: "https://i.pinimg.com/564x/f8/95/da/f895dae140a479fe51b66f1d15760ffe.jpg",
      title: "Login N°2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit curae",
      link: "",
      type: "python",
    },
    {
      id: "04",
      img: "https://i.pinimg.com/564x/e4/3d/8d/e43d8d33c0c56566b9dbf6a05b04524e.jpg",
      title: "Login N°2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit curae",
      link: "",
      type: "python",
    },
    {
      id: "05",
      img: "https://i.pinimg.com/564x/f0/19/51/f01951092ffc7dc98a9b4af1655b31fb.jpg",
      title: "Login N°2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit curae",
      link: "",
      type: "python",
    },
    {
      id: "06",
      img: "https://i.pinimg.com/564x/ef/2b/73/ef2b735450762fc05cc81388c9bdc5bc.jpg",
      title: "Login N°2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit curae",
      link: "",
      type: "python",
    },
  ],
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
