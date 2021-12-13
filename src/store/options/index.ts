import { nanoid, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Option } from '../../types/option';

interface OptionsState {
  options: Option[];
  pick: Option;
  loading: boolean;
}

const initialState: OptionsState = {
  options: [],
  pick: { id: '', title: '' },
  loading: false,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    pickRandom(state) {
      if (state.options.length) {
        const randomIndex = Math.floor(Math.random() * state.options.length);
        state.pick = state.options[randomIndex];
      } else {
        state.pick = { id: '', title: '' };
      }
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
    enableLoading(state) {
      state.loading = true;
    },
    disableLoading(state) {
      state.loading = false;
    },
  },
});

export default optionsSlice.reducer;
export const {
  addItem,
  pickRandom,
  removeItem,
  enableLoading,
  disableLoading,
} = optionsSlice.actions;
