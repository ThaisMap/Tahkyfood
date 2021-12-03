import { nanoid, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Option } from '../../types/option';

interface OptionsState {
  options: Option[];
  pick: Option;
}

const initialState: OptionsState = {
  options: [],
  pick: { id: '', title: '' },
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    pickRandom(state) {
      const randomIndex = Math.floor(Math.random() * state.options.length);
      state.pick = state.options[randomIndex];
    },
    addItem: {
      reducer: (state, action: PayloadAction<Option>) => {
        state.options.push(action.payload);
      },
      prepare: (item: string) => {
        return {
          payload: {
            title: item,
            id: nanoid(),
          },
        };
      },
    },
    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.options = state.options.filter(item => item.id !== id);
    },
  },
});

export default optionsSlice.reducer;
export const { addItem, pickRandom, removeItem } = optionsSlice.actions;
