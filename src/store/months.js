import { createSlice } from "@reduxjs/toolkit";
import { getMonthInfo } from "../assets/calendarAPI";

const currentDate = new Date();
const {DaysArray, heMonthsTitle} = getMonthInfo(
  currentDate.getFullYear(),
  currentDate.getMonth()
);
const initialState = {
  monthsList: [],
  currentMonthArray: DaysArray,
  displayingTimestamp: currentDate.getTime(),
  heMonthsTitle: heMonthsTitle
};
const monthsSlice = createSlice({
  name: "months",
  initialState,
  reducers: {
    addAzcara(state, action) {
        const { id, azcara } = action.payload;
        // Find the index of the item to update
        const index = state.currentMonthArray.findIndex(item => item.id === id);
  
        // If the item is found, update it
        if (index !== -1) {
          state.currentMonthArray[index] = { ...state.currentMonthArray[index], azcara: azcara };
        }
    },
    deleteAzcara(state, action) {
      // const updatedState = state.favoritesList.filter( item => item.key !== action.payload)
      // return {favoritesList: updatedState};
    },
    setNextMonth(state) {
      const currentDate = new Date(state.displayingTimestamp);
      currentDate.setMonth(currentDate.getMonth() + 1);
      const {DaysArray, heMonthsTitle} = getMonthInfo(
        currentDate.getFullYear(),
        currentDate.getMonth()
      );
      state.heMonthsTitle = heMonthsTitle;
      state.displayingTimestamp = currentDate.getTime();
      state.currentMonthArray = DaysArray.map((item) => {
        return {
          id: item.id,
          isDay: item.isDay,
          heDate: item.heDate,
          enDate: item.enDate,
          azcara: item.azcara,
        };
      });
    },
    setPreviousMonth(state) {
      const currentDate = new Date(state.displayingTimestamp);

      currentDate.setMonth(currentDate.getMonth() - 1);
      const {DaysArray, heMonthsTitle} = getMonthInfo(
        currentDate.getFullYear(),
        currentDate.getMonth()
      );
      state.heMonthsTitle = heMonthsTitle;
      state.displayingTimestamp = currentDate.getTime();
      state.currentMonthArray = DaysArray.map((item) => {
        return {
          id: item.id,
          isDay: item.isDay,
          heDate: item.heDate,
          enDate: item.enDate,
          azcara: item.azcara,
        };
      });
    },
  },
});

export const monthsActions = monthsSlice.actions;
export const monthsReducer = monthsSlice.reducer;
