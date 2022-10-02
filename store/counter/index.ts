import { createSlice } from '@reduxjs/toolkit';
import { State } from '../types';

const initialState: State = {
  counter: 0,
  users: [],
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state: State) {
      state.counter++;
    },
    decrement(state: State) {
      state.counter--;
    },
    addUser(state: State, { payload }) {
      state.users = [...state.users, payload];
    },
    deleteUsers(state: State) {
      state.users = [];
    },
  },
});


export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
