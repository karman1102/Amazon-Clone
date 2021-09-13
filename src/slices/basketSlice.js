import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// initialisation
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // actions exist here
    // action has payload object used as 'parameter'
    addToBasket: (state, action) => {
      // once any product comes in the basket, we will handle it by adding it in state
      state.items = [...state.items, action.payload] //copy the current items using the spread function of JS
    },
    removeFromBasket: (state, action) => {
      //we are receiving an id so we search and remove
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      //index is -1 if not found and number for index position
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
        // not using filter because it removes every element with that id
      } else {
        console.warn("Can't remove product (id: " + action.payload.id + "as it is not in the items")
      }

      state.items = newBasket;

    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
//reduced es6 function that will be available as a selector

//syntax gives us 2 things, total and the item in the loop; price of which is added to total. ,0 means the default/starting value of total
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)


export default basketSlice.reducer;
